"""Verificación local y de CI, sin dependencias externas de Python."""

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
ESSENTIAL = (
    "index.html", "styles.css", "script.js", "AGENTS.md",
    "docs/ARQUITECTURA.md", "docs/OPERACION.md", "docs/decisiones/README.md",
)
PRIVATE_NAMES = {".env", "credentials.json", "secrets.json", "id_rsa", "id_ed25519"}
PRIVATE_SUFFIXES = {".key", ".pem", ".p12", ".pfx"}
IGNORED_PARTS = {"__pycache__", ".venv", "venv", "node_modules"}
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

    def check_command(self, label: str, command: list[str]) -> None:
        print(f"[check] {label}")
        if subprocess.run(command, cwd=ROOT, check=False).returncode:
            self.errors.append(f"{label} falló")


def repository_files(check: Verification) -> list[Path]:
    result = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard", "-z"],
        cwd=ROOT, capture_output=True, check=False,
    )
    if result.returncode:
        check.errors.append("No se pudo listar el repositorio")
        return []
    return [ROOT / value.decode("utf-8") for value in result.stdout.split(b"\0") if value]


def check_files(check: Verification, files: list[Path]) -> None:
    print("[check] archivos y secretos")
    for relative in ESSENTIAL:
        if not (ROOT / relative).is_file():
            check.errors.append(f"Falta archivo esencial: {relative}")
    for path in files:
        if not path.is_file():
            continue
        relative = path.relative_to(ROOT)
        if path.name.lower() in PRIVATE_NAMES or path.suffix.lower() in PRIVATE_SUFFIXES:
            check.errors.append(f"Archivo privado: {relative}")
        if set(part.lower() for part in relative.parts) & IGNORED_PARTS:
            check.errors.append(f"Archivo reconstruible no ignorado: {relative}")
        if path.stat().st_size > 5 * 1024 * 1024:
            check.errors.append(f"Archivo mayor a 5 MiB: {relative}")
        if path.suffix.lower() not in TEXT_SUFFIXES or path.stat().st_size > 1024 * 1024:
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for number, line in enumerate(content.splitlines(), 1):
            if any(pattern.search(line) for pattern in SECRET_PATTERNS):
                check.errors.append(f"Posible secreto: {relative}:{number}")


def check_python(check: Verification, files: list[Path]) -> None:
    print("[check] sintaxis Python")
    for path in files:
        if path.suffix != ".py" or not path.is_file():
            continue
        try:
            with tokenize.open(path) as source:
                ast.parse(source.read(), filename=str(path))
        except (SyntaxError, UnicodeError) as error:
            check.errors.append(f"Python inválido en {path.relative_to(ROOT)}: {error}")


def check_html(check: Verification) -> None:
    print("[check] estructura HTML")
    parser = DocumentParser()
    try:
        parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    except (OSError, UnicodeError) as error:
        check.errors.append(f"No se pudo analizar index.html: {error}")
        return
    duplicates = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
    if duplicates:
        check.errors.append(f"IDs duplicados: {', '.join(duplicates)}")
    ids = set(parser.ids)
    for reference in parser.references:
        if reference.startswith("#") and reference[1:] not in ids:
            check.errors.append(f"Ancla inexistente: {reference}")
        if not reference.startswith(("#", "http://", "https://", "mailto:", "data:")):
            local_path = ROOT / reference.split("?", 1)[0].split("#", 1)[0]
            if not local_path.is_file():
                check.errors.append(f"Recurso local inexistente: {reference}")


def main() -> int:
    check = Verification()
    files = repository_files(check)
    check.check_command("git diff --check", ["git", "--no-pager", "diff", "--check"])
    check.check_command(
        "git diff --cached --check",
        ["git", "--no-pager", "diff", "--cached", "--check"],
    )
    check_python(check, files)
    check_html(check)
    check_files(check, files)
    if shutil.which("node"):
        check.check_command("sintaxis JavaScript", ["node", "--check", "script.js"])
    else:
        print("[skip] Node.js no disponible")
    if check.errors:
        print("\nVerificación fallida:")
        for error in check.errors:
            print(f"- {error}")
        return 1
    print("\nVerificación completada correctamente.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
