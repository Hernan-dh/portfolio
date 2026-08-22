"""Genera changelog y borradores ADR desde información local."""

from __future__ import annotations

import argparse
import re
import subprocess
import unicodedata
from collections import defaultdict
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DECISIONS = ROOT / "docs" / "decisiones"
CATEGORIES = (
    ("feat", "Nuevas funcionalidades"), ("fix", "Correcciones"),
    ("refactor", "Refactors"), ("docs", "Documentación"),
    ("test", "Tests"), ("chore", "Mantenimiento"),
)
COMMIT = re.compile(rf"^({'|'.join(kind for kind, _ in CATEGORIES)})(?:\([^)]+\))?!?:\s+(.+)$", re.I)


def git(*args: str) -> str:
    return subprocess.run(
        ["git", "-C", str(ROOT), *args], check=True,
        capture_output=True, text=True, encoding="utf-8",
    ).stdout


def changelog() -> None:
    records: dict[str, list[tuple[str, str]]] = defaultdict(list)
    for entry in git("log", "--pretty=format:%h%x1f%s%x1e").split("\x1e"):
        entry = entry.strip()
        if not entry or "\x1f" not in entry:
            continue
        commit_hash, subject = entry.split("\x1f", 1)
        match = COMMIT.match(subject)
        records[match.group(1).lower() if match else "other"].append(
            (commit_hash, match.group(2) if match else subject)
        )
    lines = ["# Changelog", "", "Generado de forma determinista desde el historial de Git.", ""]
    for kind, heading in (*CATEGORIES, ("other", "Otros cambios")):
        if not records[kind]:
            continue
        lines.extend([f"## {heading}", ""])
        lines.extend(f"- {subject} (`{commit_hash}`)" for commit_hash, subject in records[kind])
        lines.append("")
    (ROOT / "CHANGELOG.md").write_text("\n".join(lines), encoding="utf-8")
    print("CHANGELOG.md actualizado.")


def decision(title: str) -> None:
    slug = unicodedata.normalize("NFKD", title).encode("ascii", "ignore").decode().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    if not slug:
        raise SystemExit("El título debe contener letras o números.")
    numbers = [int(path.name[:4]) for path in DECISIONS.glob("[0-9][0-9][0-9][0-9]-*.md")]
    path = DECISIONS / f"{max(numbers, default=0) + 1:04d}-{slug}.md"
    path.write_text(
        f"# {title}\n\nFecha: {date.today().isoformat()}\nEstado: propuesta\n\n"
        "## Contexto\n\n<!-- Situación, restricciones y alternativas. -->\n\n"
        "## Decisión\n\n<!-- Opción elegida y motivo. -->\n\n"
        "## Consecuencias\n\n<!-- Beneficios, costos y riesgos. -->\n",
        encoding="utf-8",
    )
    print(path.relative_to(ROOT))


parser = argparse.ArgumentParser(description=__doc__)
commands = parser.add_subparsers(dest="command", required=True)
commands.add_parser("changelog")
decision_parser = commands.add_parser("decision")
decision_parser.add_argument("title")
arguments = parser.parse_args()
changelog() if arguments.command == "changelog" else decision(arguments.title)
