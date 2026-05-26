# Client Repo Documentation Structure

A recommended folder structure for client website repositories managed via Site OS Master, separating client-specific Site OS artifacts from the workflow source-of-truth and from the website source code.

## Purpose

Establish a recommended folder structure for client website repositories managed via Site OS Master. The structure separates client-specific Site OS artifacts (inputs, outputs, QA reports, changelog) from the workflow and prompt source-of-truth (Site OS Master itself), and from the website source code in the rest of the client repo.

## Recommended Folder Structure

Every client website repo managed via Site OS Master should include:

```
docs/
  site-os/
    README.md
    inputs/
      .gitkeep
    outputs/
      .gitkeep
    qa/
      .gitkeep
    changelog/
      .gitkeep
```

## Folder Purpose Explanations

- `docs/site-os/inputs/` — client intake, brand notes, service lists, keyword lists, page lists, URL inventories, competitor notes, source material, and project requirements. Anything the workflow consumes.
- `docs/site-os/outputs/` — Site OS prompt outputs, page strategies, build briefs, content plans, SEO/AEO plans, and implementation notes. Anything the workflow produces that becomes the next workflow input.
- `docs/site-os/qa/` — QA reports, Prompt 07 reviews, production fix notes, validation reports, issue logs, and launch readiness checks.
- `docs/site-os/changelog/` — build history, completed updates, deployment notes, major decisions, and revision summaries. One entry per major tier or per launch event.

## Source-of-Truth Rule

Site OS Master (the `site-os-master/` repo) remains the workflow and prompt source-of-truth. The client repo contains the website code and client-specific Site OS artifacts only.

Do not duplicate Site OS Master prompts, skills, routing, token-control, schemas, page templates, evals, benchmarks, workflow tests, versions, or checklists into the client repo. Reference them from Site OS Master.

## Usage Rule

Do not copy the full Site OS Master prompt system into the client repo unless explicitly approved. Only store client-specific inputs, outputs, QA reports, and changelog entries in the client repo's `docs/site-os/` folder.

## Scaffolding — PowerShell (Windows)

To scaffold the structure in a new client repo:

```powershell
cd "C:\path\to\new-client-repo"
New-Item -ItemType Directory -Force -Path docs\site-os\inputs, docs\site-os\outputs, docs\site-os\qa, docs\site-os\changelog | Out-Null
foreach ($d in @('docs\site-os\inputs','docs\site-os\outputs','docs\site-os\qa','docs\site-os\changelog')) {
  $f = Join-Path $d '.gitkeep'
  if (-not (Test-Path $f)) { New-Item -ItemType File -Path $f | Out-Null }
}
```

This snippet is intended for first-time scaffold of a new client repo. The `if (-not (Test-Path $f))` guard prevents `.gitkeep` files from being truncated if the folders already exist. For pre-existing structures, prefer manual file creation per folder.

Then paste the sample `docs/site-os/README.md` content from the section below into the new `docs/site-os/README.md` file.

## Scaffolding — Bash / Linux / macOS

To scaffold the structure in a new client repo:

```bash
cd /path/to/new-client-repo
mkdir -p docs/site-os/{inputs,outputs,qa,changelog}
for d in docs/site-os/inputs docs/site-os/outputs docs/site-os/qa docs/site-os/changelog; do
  [ -f "$d/.gitkeep" ] || touch "$d/.gitkeep"
done
```

The `[ -f "$d/.gitkeep" ] || touch` guard prevents touching existing `.gitkeep` files (a benign no-op on most systems, but explicit safety) and avoids replacing any real content if a file already lives at that path. For pre-existing structures, prefer manual file creation per folder.

Then create `docs/site-os/README.md` with the sample content from the section below.

## .gitkeep Strategy

Each of the four subfolders should contain a `.gitkeep` file at creation time so the folder is tracked by git even before any real content exists. Once a real file lands in a folder, the `.gitkeep` can be removed or left in place — either is acceptable. The scaffolding snippets above use guards to avoid overwriting any existing file.

## Sample docs/site-os/README.md Content

Paste the following block verbatim into the new client repo's `docs/site-os/README.md` to establish the convention from day one:

```markdown
# Site OS Build Documentation

This folder stores Site OS Master outputs for this client website build.

## Folder Structure

- inputs/ — client intake, brand notes, service lists, keywords, URLs, competitor notes, source material, and project requirements
- outputs/ — Site OS prompt outputs, page strategies, build briefs, content plans, SEO/AEO plans, and implementation notes
- qa/ — QA reports, Prompt 07 reviews, production fix notes, validation reports, issue logs, and launch readiness checks
- changelog/ — build history, completed updates, deployment notes, major decisions, and revision summaries

## Source of Truth

Site OS Master remains the workflow and prompt source of truth.

This client repo contains the website code and client-specific Site OS outputs.

## Usage Rule

Do not copy the full Site OS Master prompt system into this client repo unless explicitly approved. Only store client-specific inputs, outputs, QA reports, and changelog entries here.
```

## Working Example: 702Xchange

The 702Xchange client repo at filesystem path `client-sites/702xchange-site/` is the working reference implementation of this structure. As of 2026-05-17 it contains:

- `client-sites/702xchange-site/docs/site-os/README.md` — the canonical README following the sample above
- `client-sites/702xchange-site/docs/site-os/inputs/page-list.md` — the canonical page-list inventory that Prompts 01 through 05, Prompt 10, and Prompt 20 treat as the authoritative page inventory and build-sequencing input
- `client-sites/702xchange-site/docs/site-os/changelog/2026-05-16-tier-1-through-4-buildout-summary.md` — the first real changelog entry recording Tiers 1 through 4 commits
- `client-sites/702xchange-site/docs/site-os/outputs/.gitkeep` — placeholder
- `client-sites/702xchange-site/docs/site-os/qa/.gitkeep` — placeholder

New client repos can mirror this structure verbatim by following the scaffolding commands and pasting the sample README content above.

## What Should Be Stored in docs/site-os/

Yes — store these client-specific artifacts:

- Page-list inventories
- Project briefs
- Keyword strategies (client-specific outputs)
- Page outlines (client-specific)
- 10-metric analysis outputs (client-specific)
- Gap-fix notes
- Developer build briefs (client-specific)
- Prompt 07 QA reports
- Launch-readiness reviews
- Deploy logs and Worker Version ID records
- Changelog entries per tier or per launch
- Standing approval invocations used in this build (for audit trail)
- Third-party embed specs (`docs/site-os/inputs/embed-specs.md`) when the site renders GHL widgets, booking iframes, or other third-party embeds — see `docs/third-party-embed-specs-standard.md`. Sirius Systems is the working example.

## What Should NOT Be Stored in docs/site-os/

No — do not store these (they belong in Site OS Master, not the client repo):

- Site OS prompt files (`prompts/01-*.md` through `prompts/20-*.md`)
- Skills, routing, token-control, schemas, page templates
- Checklists (deploy, post-deploy, launch-readiness, page-before/after-build, seo-indexing)
- Evals, benchmarks, workflow tests, versions
- `CLAUDE.md` (project instructions for working in Site OS Master)
- Efficiency Governor files
- Standing approval rule template itself (the template lives in Site OS Master; the per-build invocation lives in the client repo)

## Cross-References

- `docs/standing-approval-rule-template.md` — the standing approval rule applies inside the client repo workflow, not Site OS Master itself
- `docs/third-party-embed-specs-standard.md` — convention for documenting third-party iframe and widget embeds inside a client repo's `docs/site-os/inputs/embed-specs.md`
- `checklists/deploy-workflow-checklist.md` — deploys run from the client repo, never from Site OS Master
- `checklists/post-deploy-production-verification-checklist.md` — production verification handoff records may live in `docs/site-os/qa/` or `docs/site-os/changelog/` within the client repo
- `efficiency-governor/client-intake-gate.md` — intake gate that must clear before scaffolding a new client repo to use this structure

---

Site OS Master — Client Repo Documentation Structure Template v1.0
Status: Tier R2 Final Readiness Patch — implemented 2026-05-17
Reason for creation: codify the docs/site-os/{inputs,outputs,qa,changelog,README.md} pattern proven in the 702Xchange client repo
