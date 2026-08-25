"""Run dependency-free repository checks locally, in Git hooks, and in CI."""

from __future__ import annotations

import ast
import re
import shutil
import subprocess
import sys
import tokenize
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ESSENTIAL_FILES = (
    "index.html", "styles.css", "script.js", "AGENTS.md",
    "docs/ARCHITECTURE.md", "docs/OPERATIONS.md", "docs/decisions/README.md",
)
PRIVATE_NAMES = {".env", "credentials.json", "secrets.json", "id_rsa", "id_ed25519"}
PRIVATE_SUFFIXES = {".key", ".pem", ".p12", ".pfx"}
GENERATED_PARTS = {"__pycache__", ".venv", "venv", "node_modules"}
TEXT_SUFFIXES = {".css", ".html", ".js", ".json", ".md", ".py", ".sh", ".yml", ".yaml"}
SECRET_PATTERNS = (
    re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    re.compile(r"\bgh[opurs]_[A-Za-z0-9_]{30,}\b"),
    re.compile(r"\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b"),
    re.compile(r"(?i)\b(?:api[_-]?key|secret|token|password)\b\s*[:=]\s*[\"']?([^\s\"'#]{12,})"),
)


class DocumentParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.append(values["id"])
        attribute = "href" if tag in {"a", "link"} else "src" if tag in {"script", "iframe"} else None
        if attribute and values.get(attribute):
            self.references.append(values[attribute])


class Verification:
    def __init__(self) -> None:
        self.errors: list[str] = []

    def run(self, label: str, command: list[str]) -> None:
        print(f"[check] {label}")
        if subprocess.run(command, cwd=ROOT, check=False).returncode:
            self.errors.append(f"{label} failed")


def repository_files(verification: Verification) -> list[Path]:
    result = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard", "-z"],
        cwd=ROOT, capture_output=True, check=False,
    )
    if result.returncode:
        verification.errors.append("Could not list repository files")
        return []
    return [ROOT / value.decode("utf-8") for value in result.stdout.split(b"\0") if value]


def check_files(verification: Verification, files: list[Path]) -> None:
    print("[check] files and secrets")
    for relative in ESSENTIAL_FILES:
        if not (ROOT / relative).is_file():
            verification.errors.append(f"Missing essential file: {relative}")
    for path in files:
        if not path.is_file():
            continue
        relative = path.relative_to(ROOT)
        if path.name.lower() in PRIVATE_NAMES or path.suffix.lower() in PRIVATE_SUFFIXES:
            verification.errors.append(f"Private file: {relative}")
        if {part.lower() for part in relative.parts} & GENERATED_PARTS:
            verification.errors.append(f"Generated file is not ignored: {relative}")
        if path.stat().st_size > 5 * 1024 * 1024:
            verification.errors.append(f"File exceeds 5 MiB: {relative}")
        if path.suffix.lower() not in TEXT_SUFFIXES or path.stat().st_size > 1024 * 1024:
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for line_number, line in enumerate(content.splitlines(), 1):
            if any(pattern.search(line) for pattern in SECRET_PATTERNS):
                verification.errors.append(f"Sensitive value candidate at {relative}:{line_number}")


def check_python(verification: Verification, files: list[Path]) -> None:
    print("[check] Python syntax")
    for path in files:
        if path.suffix != ".py" or not path.is_file():
            continue
        try:
            with tokenize.open(path) as source:
                ast.parse(source.read(), filename=str(path))
        except (SyntaxError, UnicodeError) as error:
            verification.errors.append(f"Invalid Python in {path.relative_to(ROOT)}: {error}")


def check_html(verification: Verification) -> None:
    print("[check] HTML structure")
    parser = DocumentParser()
    try:
        parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    except (OSError, UnicodeError) as error:
        verification.errors.append(f"Could not parse index.html: {error}")
        return
    duplicates = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
    if duplicates:
        verification.errors.append(f"Duplicate IDs: {', '.join(duplicates)}")
    ids = set(parser.ids)
    for reference in parser.references:
        if reference.startswith("#") and reference[1:] not in ids:
            verification.errors.append(f"Missing anchor: {reference}")
        if not reference.startswith(("#", "http://", "https://", "mailto:", "data:")):
            local_path = ROOT / reference.split("?", 1)[0].split("#", 1)[0]
            if not local_path.is_file():
                verification.errors.append(f"Missing local resource: {reference}")


def main() -> int:
    verification = Verification()
    files = repository_files(verification)
    verification.run("git diff --check", ["git", "--no-pager", "diff", "--check"])
    verification.run("git diff --cached --check", ["git", "--no-pager", "diff", "--cached", "--check"])
    check_python(verification, files)
    check_html(verification)
    check_files(verification, files)
    if shutil.which("node"):
        verification.run("JavaScript syntax", ["node", "--check", "script.js"])
    else:
        print("[skip] Node.js is unavailable")
    if verification.errors:
        print("\nVerification failed:")
        for error in verification.errors:
            print(f"- {error}")
        return 1
    print("\nVerification completed successfully.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
