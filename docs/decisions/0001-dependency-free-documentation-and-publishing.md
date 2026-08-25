# Dependency-free documentation and publishing

Date: 2026-08-22
Status: accepted

## Context

The portfolio needs repeatable checks and documentation that can be recovered from the repository, but it is a small static site and does not justify a documentation platform or build pipeline.

## Decision

Keep architecture, operations, and decisions in the repository. Centralize validation in a Python standard-library script and reuse it from local development, Git hooks, and GitHub Actions. Provide deterministic scripts for changelog generation, ADR creation, and confirmed publishing.

## Consequences

- The workflow adds no site dependencies.
- Local and CI verification use the same rules.
- Publishing requires explicit human confirmation.
- The hook must be enabled once per clone.
