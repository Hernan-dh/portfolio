"""Verify, confirm, commit, and push repository changes."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def git(*args: str, check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", "-C", str(ROOT), *args], check=check,
        capture_output=True, text=True, encoding="utf-8",
    )


def changed_paths() -> list[str]:
    paths = set(git("diff", "--name-only").stdout.splitlines())
    paths.update(git("diff", "--cached", "--name-only").stdout.splitlines())
    paths.update(git("ls-files", "--others", "--exclude-standard").stdout.splitlines())
    return sorted(filter(None, paths))


def proposal(paths: list[str]) -> tuple[str, str]:
    path_set = set(paths)
    translated_paths = {
        "scripts/verificar.py", "scripts/publicar.py", "scripts/documentar.py",
        "scripts/instalar_hooks.py", "docs/ARQUITECTURA.md", "docs/OPERACION.md",
    }
    standardizes_english = bool(path_set & translated_paths)
    has_automation = any(path.startswith(("scripts/", ".githooks/", ".github/")) for path in paths)
    has_documentation = "AGENTS.md" in path_set or any(path.startswith("docs/") for path in paths)
    if standardizes_english:
        title = "refactor: standardize code and documentation in English"
    elif all(path.endswith(".md") or path.startswith("docs/") for path in paths):
        title = "docs: update documentation"
    elif has_automation:
        title = "chore: update verification and publishing automation"
    elif "styles.css" in path_set and "index.html" not in path_set:
        title = "style: update portfolio presentation"
    else:
        title = "feat: update portfolio"

    details: list[str] = []
    if standardizes_english:
        details.append("Renames internal scripts and documentation paths and translates identifiers, comments, operational messages, and project documentation into English.")
    if has_automation and not standardizes_english:
        details.append("Updates shared verification for local development, Git hooks, and CI, together with the confirmed publishing workflow.")
    if has_documentation:
        details.append("Updates architecture, operations, and technical decisions stored in the repository.")
    if "scripts/document.py" in path_set or "CHANGELOG.md" in path_set:
        details.append("Maintains deterministic changelog and ADR generation from local information.")
    if not details:
        details.append(f"Updates {len(paths)} portfolio file{'s' if len(paths) != 1 else ''}.")
    return title, " ".join(details)


def verify() -> None:
    result = subprocess.run([sys.executable, str(ROOT / "scripts" / "verify.py")], cwd=ROOT)
    if result.returncode:
        raise SystemExit("Publishing cancelled: verification failed.")


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--preview", action="store_true")
parser.add_argument("--title")
parser.add_argument("--description")
arguments = parser.parse_args()
paths = changed_paths()
if not paths:
    raise SystemExit("There are no changes to publish.")

verify()
proposed_title, proposed_description = proposal(paths)
title = arguments.title or proposed_title
description = arguments.description or proposed_description
print("\nIncluded files:")
for path in paths:
    print(f"- {path}")
print(f"\nProposed commit: {title}")
print(f"Proposed description: {description}")
unstaged_stat = git("diff", "--stat").stdout.strip()
staged_stat = git("diff", "--cached", "--stat").stdout.strip()
untracked = git("ls-files", "--others", "--exclude-standard").stdout.splitlines()
if staged_stat:
    print(f"\nStaged:\n{staged_stat}")
if unstaged_stat:
    print(f"\nUnstaged:\n{unstaged_stat}")
if untracked:
    total_bytes = sum((ROOT / path).stat().st_size for path in untracked)
    print(f"\nNew files: {len(untracked)} ({total_bytes} bytes)")

if arguments.preview:
    print("\nPreview: Git was not modified.")
    raise SystemExit(0)
if input("\nType PUBLISH to continue: ").strip() != "PUBLISH":
    raise SystemExit("Publishing cancelled.")

git("add", "--", *paths)
verify()
subprocess.run(["git", "-C", str(ROOT), "commit", "-m", title, "-m", description], check=True)
branch = git("branch", "--show-current").stdout.strip()
if not branch:
    raise SystemExit("Cannot publish from a detached HEAD.")
upstream = git("rev-parse", "--abbrev-ref", "@{u}", check=False)
push = ["git", "-C", str(ROOT), "push"]
if upstream.returncode:
    push.extend(["-u", "origin", branch])
subprocess.run(push, check=True)
