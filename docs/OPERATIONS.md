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

The first command does not modify Git. The second verifies the repository, lists every included file, and requires typing `PUBLISH` before staging, committing, and pushing changes. It never force-pushes.

Generated title and description can be overridden:

```bash
python scripts/publish.py --title "feat: describe change" --description "Summary of scope and purpose."
```

## Deployment

The repository can be deployed to any static host. It needs no build command; the publication directory is the repository root.
