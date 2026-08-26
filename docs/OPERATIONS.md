# Operations

## Local execution

```powershell
python -m http.server 4173
```

Open `http://localhost:4173`. The embedded agent requires an internet connection.

Test localization with an English and an `es-*` browser locale. Confirm that the header selector switches all visible copy, metadata, and accessibility labels, and that a manual selection survives a reload.

## Verification

```bash
./scripts/verify.sh
```

On Windows, run `python scripts/verify.py`. It checks diffs, syntax, local references, anchors, essential documentation, private files, file sizes, and potential secrets.

To enable the same verification before every commit:

```bash
python scripts/install_hooks.py
```

GitHub Actions invokes the same verifier and does not duplicate its rules.

## Documentation

```bash
python scripts/document.py changelog
python scripts/document.py decision "Decision title"
```

The changelog is rebuilt from conventional commits. ADRs are created as numbered drafts.

## Publishing

```bash
python scripts/publish.py --preview
python scripts/publish.py
```

The first command does not modify Git. The dependency-free script verifies the repository and tries Gemini 3.5 Flash (`minimal` reasoning), Gemini 3.7 Flash (`low`), Gemini 3.5 Flash-Lite (`minimal`), Gemini 3.1 Flash-Lite (`low`), and Groq (`low`) in that order. Requests identify themselves with `portfolio-publish/1.0`; provider output is validated before display. Copy `.env.example` to `.env` and configure at least one API key; keys remain local and are sent only in request headers.

The interactive command lists every included file and requires typing `PUBLISH` before staging, re-verifying, committing, and pushing changes. It never force-pushes. Each provider attempt defaults to a 15-second timeout.

External generation can be bypassed by providing both values:

```bash
python scripts/publish.py --title "feat: describe change" --description "Summary of scope and purpose."
```

## Deployment

The repository can be deployed to any static host. It needs no build command; the publication directory is the repository root.
