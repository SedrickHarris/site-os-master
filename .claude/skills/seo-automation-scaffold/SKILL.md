---
name: seo-automation-scaffold
description: "Required Site OS Master skill governing SEO Opportunity Automation scaffolding for every new or existing client repo. Triggers on any mention of 'scaffold SEO', 'seo-automation', 'seed keywords', 'keyword pipeline', or 'new client SEO setup'. Run this skill before any SEO pipeline execution on a client repo."
---

# SEO Automation Scaffold

## Purpose

Scaffold the Site OS SEO Opportunity Automation module into a client repo so the full 11-step keyword pipeline can run. Covers both new client onboarding (Phase B) and backfill onto existing repos that pre-date this standard.

The scaffold is a one-time setup per client repo. After it runs, the pipeline executes identically across all clients — only the context files (`business-context.md`, `service-map.md`) differ per engagement.

---

## When to Use

- New client onboarding — Phase B scaffold step
- Existing client repo backfill — any repo where `seo-automation/` is absent
- After confirming the engagement scope includes ongoing pillar-page discovery

**Skip when:**
- Single landing page builds with no ongoing content scope
- Keyword research is already fully planned and no pipeline is needed

---

## Required Behavior

Always run the 5-gate Claude Code prompt below. Never skip gates. Never create files without Gate 2 confirmation. Never invent business data at any point.

**Gate sequence — hard stops after Gate 1 and Gate 2:**

```
Gate 1 — Inspect   (read-only audit, hard stop, await confirmation)
Gate 2 — Plan      (exact file list, hard stop, await confirmation)
Gate 3 — Build     (execute approved plan only)
Gate 4 — Validate  (confirm all files, all scripts pass node --check)
Gate 5 — Report    (structured completion report, git diff --stat, no commit)
```

---

## Page Build Responsibilities

This skill does not build pages. It scaffolds the infrastructure that identifies which pages to build. After scaffold is complete:

1. Operator fills `docs/seo/business-context.md` from the real client brief
2. Operator fills `docs/seo/service-map.md` from the real client brief
3. Run seed keywords prompt (Claude online) → produces `keyword-seeds.json`
4. Export CSV from Google Keyword Planner → drop into `docs/seo/keyword-exports/`
5. Run `npm run seo:parse && seo:cluster && seo:score`
6. Paste `opportunities.json` into Claude online → ranked page list

---

## Claude Project Usage

When used in a Claude project session:
- Confirm the client repo name and local path before running any gate
- Confirm Site OS Master is reachable at `../site-os-master/` relative to the client repo
- If Site OS Master is not reachable, stop at Gate 2 and report the blocker — do not improvise script content
- After scaffold, update the client's `docs/seo/business-context.md` from confirmed brief data only

---

## Claude Code Usage

Paste the full 5-gate prompt below into Claude Code from inside the client repo root. Work through gates in order. Do not skip.

```
## SEO Automation Scaffold — 5-Gate Prompt

You are scaffolding the Site OS SEO Opportunity Automation module
into this client repo. This is a scaffolding task only. You are not
building pages, writing content, or running analysis. Do not invent
business details, services, service areas, or keyword data at any point.

Work through 5 gates in order. Hard stop after Gate 1 and Gate 2.
Wait for explicit confirmation before proceeding.

---

## GATE 1 — INSPECT

Before creating or copying any files, inspect the current state of
this repo and report your findings.

Check and report on each of the following:

1. Confirm working directory — run `git rev-parse --show-toplevel`
   and confirm this is the intended client repo. Report the repo name.
2. Git status — run `git status`. Report clean / dirty / untracked.
   Do not proceed on a dirty tree without explicit instruction.
3. Current branch and HEAD — run `git branch --show-current` and
   `git rev-parse --short HEAD`. Report both.
4. Router type — check for `app/`, `src/app/`, `pages/`, or
   `src/pages/`. Report which exists.
5. `seo-automation/` — check if this folder already exists at the
   repo root. Report: present / absent.
6. `docs/seo/` — check if this folder already exists. If it does,
   list every file and subfolder inside it.
7. `docs/seo/business-context.md` — present / absent.
8. `docs/seo/seed-topics.md` — present / absent.
9. `docs/seo/service-map.md` — present / absent.
10. `docs/seo/keyword-exports/` — present / absent.
11. `docs/seo/seo-build-log.md` — present / absent.
12. `package.json` — present / absent. If present, check whether
    any of these keys already exist under `scripts`: `seo:scan`,
    `seo:parse`, `seo:cluster`, `seo:score`. Report which are
    present and which are absent.
13. Site OS Master path — check whether
    `../site-os-master/seo-automation/` exists relative to this repo.
    Report: reachable / not reachable. Do not copy anything yet.

After completing all 13 checks, print a Gate 1 summary table:

| Check | Finding |
|---|---|

Then print:
GATE 1 COMPLETE — awaiting confirmation to proceed to Gate 2.

Do not create, copy, or modify any file until Gate 2 is confirmed.

---

## GATE 2 — PLAN

Based on Gate 1 findings, produce a specific plan for what will be
created or copied.

Include:

1. List every file or folder that will be created — exact paths.
2. List every file that will be copied from Site OS Master —
   source path and destination path.
3. List every `package.json` script key that will be added —
   key and value.
4. State whether `scan-routes.mjs` will run after scaffold —
   yes or no, and why.
5. Flag any conflicts — any path that already exists and would be
   overwritten. If a conflict exists, propose an additive resolution.
   Do not overwrite existing content without explicit instruction.
6. Flag any blockers — e.g. Site OS Master not reachable,
   `package.json` absent, router not detected.

Print the plan as a structured list, then print:
GATE 2 COMPLETE — awaiting confirmation to proceed to Gate 3.

Do not create, copy, or modify any file until Gate 3 is confirmed.

---

## GATE 3 — BUILD

Proceed only after Gate 2 is explicitly confirmed. Execute the
approved plan exactly. No additions, no interpretation beyond
what was approved.

### Step 1 — Copy seo-automation/ from Site OS Master

Copy the entire `seo-automation/` folder from Site OS Master
into this client repo root. Expected result:

seo-automation/
  README.md
  scripts/
    scan-routes.mjs
    parse-keyword-csv.mjs
    cluster-keywords.mjs
    score-opportunities.mjs
    run-pipeline.mjs
  templates/
    json-shapes.md
  config/
    synonyms.json

After copying, run `node --check` on each script and report
pass / fail. If any check fails, stop and report the error.

### Step 2 — Create docs/seo/ structure

Create the following. Do not overwrite any file that already
exists — add only what is missing.

docs/seo/
  business-context.md   (stub — template below)
  seed-topics.md        (stub — template below)
  service-map.md        (stub — template below)
  keyword-exports/
    .gitkeep
  seo-build-log.md      (stub — template below)

Use these exact stub templates. Do not fill in real values.
All fields marked [FILL FROM CLIENT BRIEF] must be completed
by the operator from the real client brief before any SEO
prompt runs. Do not invent business names, services,
locations, or any other details.

**docs/seo/business-context.md**
```markdown
# Business Context

<!-- Fill all fields from the real client brief before running
     any SEO prompts. Do not invent services, locations,
     audience types, or differentiators. -->

Business Name: [FILL FROM CLIENT BRIEF]
Website: [FILL FROM CLIENT BRIEF]
Primary Location: [FILL FROM CLIENT BRIEF]
Service Areas: [FILL FROM CLIENT BRIEF]
Business Type: [FILL FROM CLIENT BRIEF]

## What This Business Does
[FILL FROM CLIENT BRIEF — describe real services in plain language]

## Primary Services
[FILL FROM CLIENT BRIEF — list real services only]

## Primary Audience
[FILL FROM CLIENT BRIEF — who are the real customers]

## Key Differentiators
[FILL FROM CLIENT BRIEF — real differentiators only]

## Existing Pages (summary)
[FILL AFTER scan-routes.mjs runs — summarise route-manifest.json]
```

**docs/seo/seed-topics.md**
```markdown
# Seed Topics

<!-- Filled by the SEO seed keywords prompt after
     business-context.md is complete.
     Do not fill manually. Do not invent keyword data. -->

Status: PENDING — complete business-context.md first,
then run the seed keywords prompt.
```

**docs/seo/service-map.md**
```markdown
# Service Map

<!-- Fill from the real client brief. List only real services
     and real service areas. Do not invent. -->

## Services
[FILL FROM CLIENT BRIEF]

## Service Areas
[FILL FROM CLIENT BRIEF]

## Service + Location Combinations (priority)
[FILL FROM CLIENT BRIEF]
```

**docs/seo/seo-build-log.md**
```markdown
# SEO Build Log

Log one entry per pillar page built through the pipeline.

| Date | Opportunity ID | Page Title | Route | Status | Notes |
|---|---|---|---|---|---|
```

### Step 3 — Add npm scripts to package.json

If `package.json` exists and is valid JSON, add only the
missing script keys. Do not remove or modify any existing key.

Keys to add (add only those confirmed absent in Gate 1):
```json
"seo:scan":    "node seo-automation/scripts/scan-routes.mjs",
"seo:parse":   "node seo-automation/scripts/parse-keyword-csv.mjs",
"seo:cluster": "node seo-automation/scripts/cluster-keywords.mjs",
"seo:score":   "node seo-automation/scripts/score-opportunities.mjs"
```

After editing, run `node -e "require('./package.json')"` to
confirm valid JSON. Report pass / fail.

### Step 4 — Run scan-routes.mjs

Run: node seo-automation/scripts/scan-routes.mjs

Report the console output verbatim. Confirm
`docs/seo/route-manifest.json` was written and state the
route count. Note: route-manifest.json is gitignored by
convention — this is correct. It regenerates via seo:scan.

If the script exits with an error, stop and report the full
error before continuing to Gate 4.

---

## GATE 4 — VALIDATE

Check each of the following. Report pass / fail for each.

1. seo-automation/scripts/scan-routes.mjs — exists
2. seo-automation/scripts/parse-keyword-csv.mjs — exists
3. seo-automation/scripts/cluster-keywords.mjs — exists
4. seo-automation/scripts/score-opportunities.mjs — exists
5. seo-automation/scripts/run-pipeline.mjs — exists
6. seo-automation/templates/json-shapes.md — exists
7. seo-automation/config/synonyms.json — exists
8. seo-automation/README.md — exists
9. All scripts pass node --check — confirmed in Gate 3
10. docs/seo/business-context.md — exists, contains stub only
11. docs/seo/seed-topics.md — exists
12. docs/seo/service-map.md — exists
13. docs/seo/keyword-exports/.gitkeep — exists
14. docs/seo/seo-build-log.md — exists
15. docs/seo/route-manifest.json — exists, routeCount > 0
    (file is gitignored — confirm on disk only)
16. package.json is valid JSON — confirmed in Gate 3
17. All four seo:* scripts present in package.json
18. No files outside the approved scope were modified

If any item fails, resolve it before proceeding to Gate 5.

---

## GATE 5 — REPORT

Print a structured completion report:

SEO Automation Scaffold — Gate 5 Report

Client repo: [repo root path]
Branch: [branch name]
HEAD: [short hash]

Files created: [list every file created]
Files copied from Site OS Master: [source → destination]
package.json scripts added: [each key, or "none — absent"]
scan-routes.mjs result: Route count: [N] · Warnings: [none/list]
Validation: [PASS / FAIL — list any failures]

Next operator actions required:
1. Fill docs/seo/business-context.md from the real client brief
2. Fill docs/seo/service-map.md from the real client brief
3. Run seed keywords prompt (Claude online) once context files
   are filled
4. Export keywords from Google Keyword Planner and drop CSV
   into docs/seo/keyword-exports/
5. Run: npm run seo:parse && npm run seo:cluster && npm run seo:score
6. Paste opportunities.json into Claude online to select the
   first pillar page

git diff --stat: [run and print output here]

Do not commit. Do not push.
The operator reviews git diff --stat and commits manually.
```

---

## QA Checks

- [ ] Gate 1 ran read-only — no files created before confirmation
- [ ] Gate 2 plan listed exact paths — no vague descriptions
- [ ] Site OS Master was reachable before Gate 3 executed
- [ ] No business data was invented at any point
- [ ] No existing file was overwritten without explicit approval
- [ ] All four scripts pass `node --check`
- [ ] `route-manifest.json` routeCount > 0 after `seo:scan`
- [ ] `package.json` still valid JSON after script additions
- [ ] Gate 5 report printed before any commit
- [ ] Operator committed manually — script did not auto-commit

---

## Hard Rules

- Never invent business names, services, locations, keywords, or any client data in stub files
- Never overwrite an existing file unless a conflict was explicitly approved in Gate 2
- Never modify files outside the approved scope (no changes to layout, components, pages, or global config)
- Never auto-commit — always stop at `git diff --stat` and let the operator commit
- Never run `seo:parse`, `seo:cluster`, or `seo:score` during scaffold — no CSV exists yet
- If Site OS Master is not reachable at `../site-os-master/`, stop at Gate 2 and report the blocker. Do not continue without the canonical script source
- Generated pipeline files (`route-manifest.json`, `opportunities.json`, etc.) are gitignored by convention — do not force-track them

---

## Output Expectations

After this skill runs, the client repo will have:
- `seo-automation/` — full pipeline module (scripts + templates + config)
- `docs/seo/` — stub context files ready for operator to fill
- `docs/seo/keyword-exports/` — empty, waiting for Keyword Planner CSV
- `docs/seo/route-manifest.json` — current route count (local only, gitignored)
- Four `seo:*` scripts wired into `package.json`
- A Gate 5 report confirming all 18 validation checks passed

The operator's next action is always filling `business-context.md` and `service-map.md` from the real client brief before any SEO prompt runs.
