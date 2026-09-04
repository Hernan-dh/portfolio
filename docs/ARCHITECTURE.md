# Architecture

## Purpose

Static portfolio for Hernán de Haro. It presents his profile and projects and embeds Agentic Twin, Deep Research, AI Debate, Financial Researcher, and Stock Picker as external applications.

## Components

```text
Browser
├── index.html       content and structure
├── styles.css      responsive presentation
├── script.js       localization, menu, animations, and current year
└── HTTPS iframes ── Agentic Twin, Deep Research, AI Debate, Financial Researcher, and Stock Picker on Render
```

There is no backend, database, build step, or local runtime dependency. Google Fonts and the embedded agents are external resources; the primary content remains available if an external service fails.

Repository publication is handled separately by the dependency-free `scripts/publish.py`. It sends a bounded change context to Gemini or Groq to propose commit metadata before explicit human confirmation.

## Localization

English is the source and fallback language. On first load, `script.js` selects Spanish when the browser language starts with `es`; every other browser language receives English. Visitors can override that choice from the header, and the selection is stored locally for future visits. The embedded agents manage their languages independently.

## Trust boundaries

- The portfolio does not receive or persist visitor data.
- Embedded conversations belong to Agentic Twin, Deep Research, AI Debate, Financial Researcher, and Stock Picker and run on Render.
- The iframe only receives clipboard-write permission.
- External links isolate the originating window.
- Publishing provider keys remain in the local environment and are never included in change context or diagnostic output.

## Related decisions

- [Dependency-free documentation and publishing](decisions/0001-dependency-free-documentation-and-publishing.md)
