# Portfolio

A static bilingual portfolio that explains professional projects and lets visitors try separately hosted AI demos.

## Run locally

Python 3 for serving, and Node.js 20+ for tests. Run the following commands from this repository's root.

Open `http://127.0.0.1:4173`. Customize `index.html`, translation strings in `script.js`, and styles in `styles.css`. No runtime credentials are needed; `.env.example` only configures the optional publishing helper.

```sh
python -m http.server 4173 --bind 127.0.0.1
```

## Architecture

```text
Browser -> HTML + CSS + JavaScript -> localized project content / external HTTPS demo iframes
```

See [architecture](docs/ARCHITECTURE.md) for components, data flow and trust boundaries, and [operations](docs/OPERATIONS.md) for configuration and recovery.

## Technologies

HTML5, CSS, vanilla JavaScript, Google Fonts; Python for local serving and repository verification, Node.js for JavaScript tests. No frontend framework or build step.

## Reproducible tests

After installing the dependencies above:

```sh
node --test tests/*.test.cjs
python scripts/verify.py
```

Coverage: HTML anchors/resources, translation coverage, language fallback and storage failure handling, menu keyboard behavior and reveal fallback, using Node's built-in test runner. Tests run without real credentials or paid API calls. They do not measure model quality, live provider availability, or full browser behavior. CI installs dependencies and runs the same verifier on pushes and pull requests.

## Limitations

Embedded demos and fonts depend on external services and may be unavailable. The displayed online labels are static, not health checks. The greenhouse visualization is illustrative rather than live telemetry. There is no backend contact form or analytics pipeline. Embedded apps have their own data handling and privacy requirements.

## Public repository

The repository includes a placeholder-only [.env.example](.env.example); local credentials, caches and generated artifacts are excluded by [.gitignore](.gitignore). See [operations](docs/OPERATIONS.md) for verification and publication instructions.

No license is provided for the portfolio's own code. Third-party resources retain their respective licenses and terms. Publishing scripts can send code diffs to external models when generating commit text; use explicit metadata to avoid that step.
