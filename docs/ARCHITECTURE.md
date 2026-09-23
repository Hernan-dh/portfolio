# Architecture

## Purpose

Static portfolio for Hernán de Haro. It presents his profile and projects and embeds Agentic Twin, Deep Research, AI Debate, Financial Researcher, Stock Picker, AI Operations Desk, and Event Ticketing & Access Control as external applications.

## Components

```text
Browser
├── index.html       content and structure
├── styles.css      responsive presentation
├── script.js       localization, menu, animations, and current year
└── HTTPS iframes ── Agentic Twin, Deep Research, AI Debate, Financial Researcher, and Stock Picker on the portfolio host; AI Operations Desk and Event Ticketing & Access Control on separate hosts
```

There is no backend, database, build step, or local runtime dependency. Google Fonts and the embedded agents are external resources; the primary content remains available if an external service fails.

Repository publication is handled separately by the dependency-free `scripts/publish.py`. It sends a bounded change context to Gemini or Groq to propose commit metadata before explicit human confirmation.

Sidekick is presented as a static, versioned screenshot with an isolated GitHub repository link. Its hosted runtime is not exposed from the portfolio.

## Localization

English is the source and fallback language. On first load, `script.js` selects Spanish when the browser language starts with `es`; every other browser language receives English. Visitors can override that choice from the header, and the selection is stored locally for future visits. The embedded agents manage their languages independently.

## Appearance preference

The header also lets visitors choose a light or dark theme. The preference is stored only in their browser under `portfolio-theme`; the layout remains responsive through the existing mobile breakpoints.

## Trust boundaries

- The portfolio does not receive or persist visitor data.
- Embedded application interactions belong to their respective applications. Agentic Twin, Deep Research, AI Debate, Financial Researcher, and Stock Picker are reached through same-origin HTTPS paths managed by the deployment reverse proxy; AI Operations Desk and Event Ticketing & Access Control use separate HTTPS hosts.
- Agentic Twin, Deep Research, AI Debate, Financial Researcher, and Stock Picker receive only clipboard-write permission. The other embedded applications receive no delegated browser permission.
- External links isolate the originating window.
- Publishing provider keys remain in the local environment and are never included in change context or diagnostic output.

## Related decisions

- [Dependency-free documentation and publishing](decisions/0001-dependency-free-documentation-and-publishing.md)
