# Operations

## Local execution

```powershell
python -m http.server 4173
```

Open `http://localhost:4173`. The embedded agents require an internet connection. Confirm that both Render iframes load and that their fullscreen links open the corresponding service.

Test localization with an English and an `es-*` browser locale. Confirm that the header selector switches all visible copy, metadata, and accessibility labels, and that a manual selection survives a reload.

Also verify the light/dark control persists after a reload and that the navigation, theme control, and project cards remain usable at a narrow mobile viewport.

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

## Public-source verification

See [README](../README.md) for the reproducible setup. CI installs dependencies before invoking the verifier. Tests disable dotenv loading and provider telemetry and use synthetic inputs or mocked external calls; passing unit tests does not certify live services or production security.

Node.js 20+ is required: the verifier runs the built-in Node test runner for localization and navigation behavior in addition to HTML and JavaScript syntax checks.


## Publication review

The portfolio does not include a license for its own code; the verifier does not require a LICENSE file. Preserve applicable notices and terms for third-party resources.

Before publishing, run the verifier and review git diff and git status --short,
especially new files. Keep real credentials in local environment files or hosting
secrets, and preserve upstream license notices. Automated secret checks cover
recognizable patterns in current source files; they do not certify the absence of
secrets or scan every historical commit, remote ref, hosting log or fork. Removing
a file from the working tree does not remove it from Git history.
