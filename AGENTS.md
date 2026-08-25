# Agent instructions

## Continuous documentation

- Document lasting functional, technical, or operational changes in the same task.
- Update `docs/ARCHITECTURE.md` when components, integrations, or flows change.
- Update `docs/OPERATIONS.md` when verification, publishing, or deployment changes.
- Create an ADR only when relevant alternatives exist and the decision is not evident from the code.
- Do not document cosmetic changes or refactors without behavioral changes.
- Never include credentials, private data, or local values in versioned files.

## Publishing

- Run `./scripts/verify.sh` before publishing.
- Do not create commits or push without explicit user authorization.
- Never force-push.
