# Portfolio — Hernán de Haro

A dependency-free, responsive static portfolio. It can be published directly to GitHub Pages, Cloudflare Pages, Netlify, or any static host.

## Local development

Open `index.html` directly or start a local server:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Adding projects

Add a new `.project` article in `index.html`. If the project needs a case study, create a dedicated directory and link it from the project entry.

## Verification and publishing

```powershell
python scripts/verify.py
python scripts/publish.py --preview
python scripts/publish.py
```

Publishing verifies the repository, lists every included file, and requires explicit confirmation before committing and pushing. See `docs/OPERATIONS.md` for the complete workflow.
