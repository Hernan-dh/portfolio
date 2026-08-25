# Architecture

## Purpose

Static portfolio for Hernán de Haro. It presents his profile and projects and embeds Agentic Twin as an external application.

## Components

```text
Browser
├── index.html       content and structure
├── styles.css      responsive presentation
├── script.js       menu, animations, and current year
└── HTTPS iframe ── Agentic Twin on Render
```

There is no backend, database, build step, or local runtime dependency. Google Fonts and Agentic Twin are external resources; the primary content remains available if either service fails.

## Trust boundaries

- The portfolio does not receive or persist visitor data.
- The embedded conversation belongs to Agentic Twin and runs on Render.
- The iframe only receives clipboard-write permission.
- External links isolate the originating window.

## Related decisions

- [Dependency-free documentation and publishing](decisions/0001-dependency-free-documentation-and-publishing.md)
