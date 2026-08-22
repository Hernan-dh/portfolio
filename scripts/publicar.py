"""Verifica, confirma, crea un commit y publica los cambios."""

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
    has_automation = any(
        path.startswith(("scripts/", ".githooks/", ".github/")) for path in paths
    )
    has_documentation = "AGENTS.md" in path_set or any(
        path.startswith("docs/") for path in paths
    )
    if all(path.endswith(".md") or path.startswith("docs/") for path in paths):
        title = "docs: actualizar documentación"
    elif has_automation:
        title = "chore: automatizar verificación y publicación"
    elif "styles.css" in path_set and "index.html" not in path_set:
        title = "style: ajustar presentación del portfolio"
    else:
        title = "feat: actualizar portfolio"

    details: list[str] = []
    if has_automation:
        details.append(
            "Incorpora verificación compartida para desarrollo local, Git hooks y CI, "
            "junto con un flujo de publicación interactivo y confirmado."
        )
    if has_documentation:
        details.append(
            "Documenta arquitectura, operación y decisiones técnicas dentro del repositorio."
        )
    if "scripts/documentar.py" in path_set or "CHANGELOG.md" in path_set:
        details.append(
            "Añade generación determinista del changelog y borradores ADR desde información local."
        )
    if not details:
        details.append(
            f"Actualiza {len(paths)} archivo{'s' if len(paths) != 1 else ''} del portfolio."
        )
    return title, " ".join(details)


def verify() -> None:
    result = subprocess.run([sys.executable, str(ROOT / "scripts" / "verificar.py")], cwd=ROOT)
    if result.returncode:
        raise SystemExit("Publicación cancelada: falló la verificación.")


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--vista-previa", action="store_true")
parser.add_argument("--titulo")
parser.add_argument("--descripcion")
args = parser.parse_args()
paths = changed_paths()
if not paths:
    raise SystemExit("No hay cambios para publicar.")

verify()
proposed_title, proposed_description = proposal(paths)
title = args.titulo or proposed_title
description = args.descripcion or proposed_description
print("\nArchivos incluidos:")
for path in paths:
    print(f"- {path}")
print(f"\nCommit propuesto: {title}")
print(f"Descripción propuesta: {description}")
unstaged_stat = git("diff", "--stat").stdout.strip()
staged_stat = git("diff", "--cached", "--stat").stdout.strip()
untracked = git("ls-files", "--others", "--exclude-standard").stdout.splitlines()
if staged_stat:
    print(f"\nPreparados:\n{staged_stat}")
if unstaged_stat:
    print(f"\nSin preparar:\n{unstaged_stat}")
if untracked:
    total_bytes = sum((ROOT / path).stat().st_size for path in untracked)
    print(f"\nArchivos nuevos: {len(untracked)} ({total_bytes} bytes)")

if args.vista_previa:
    print("\nVista previa: Git no fue modificado.")
    raise SystemExit(0)
if input("\nEscribí PUBLICAR para continuar: ").strip() != "PUBLICAR":
    raise SystemExit("Publicación cancelada.")

git("add", "--", *paths)
verify()
subprocess.run(
    ["git", "-C", str(ROOT), "commit", "-m", title, "-m", description],
    check=True,
)
branch = git("branch", "--show-current").stdout.strip()
if not branch:
    raise SystemExit("No se puede publicar desde un HEAD separado.")
upstream = git("rev-parse", "--abbrev-ref", "@{u}", check=False)
push = ["git", "-C", str(ROOT), "push"]
if upstream.returncode:
    push.extend(["-u", "origin", branch])
subprocess.run(push, check=True)
