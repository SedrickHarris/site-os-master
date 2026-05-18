# Client Repo Prompt and Documentation System Standard

A standalone universal standard for the client-side Site OS prompt and documentation system. Every Site OS Master client website repo must include this structure so the repo is self-sufficient for ongoing build, content, SEO/AEO, gap-fix, update, and QA workflows — without depending on Claude Project memory or Site OS Master being open in another window.

## Purpose

Make every client repo carry the prompts and references it needs to:

- Build new pages (Batch 2 through Batch 6+)
- Generate SEO + AEO content
- Run SERP analysis and AEO gap analysis
- Apply content gap fixes
- Update business data safely (phone, email, services, CTAs, legal copy)
- QA pages structurally, for SEO/AEO, and pre-commit

Without this standard, a client engagement depends on (a) Claude Project memory (session-scoped, not portable, may not persist) and (b) the operator having Site OS Master open and synced. Both are fragile single-points-of-failure. The client-side system replaces them with files in the repo.

## When to Use

Apply this standard:

- **At new client startup** — during `docs/new-client-startup-workflow.md` Phase B, after the source-of-truth docs are scaffolded but before any Batch 2+ pages are built.
- **At onboarding of an existing client repo** that pre-dates this standard — backfill the structure as a one-time `chore(site-os): add client-side prompt system` commit before resuming any new batch work.
- **At handoff to a contractor or teammate** — confirm the structure exists; if not, run the setup prompt first.

## Required Folder Structure

```
docs/site-os/
├── prompts/
│   ├── build/                    # Per-batch build prompts (Batch 2–6+)
│   ├── content/                  # Content generation + strengthening
│   ├── seo-aeo/                  # SERP analysis + AEO gap analysis
│   ├── qa/                       # Page QA + SEO/AEO QA + pre-commit QA
│   └── updates/                  # Content gap fixes + content updates
├── reference/                    # Standards and indexes
├── checklists/                   # Pre-build, post-build, content quality
├── outputs/                      # Per-batch deliverable outputs (gitkeep'd subdirs)
├── qa/                           # QA reports (per-page, per-batch)
└── decisions/                    # Decision docs (the standard adoption record)
```

The workflow / policy / context docs already required at the `docs/site-os/` root from Site OS Master onboarding stay in place:

- `fast-build-batch-workflow.md` (copied from master)
- `new-client-startup-workflow.md` (copied from master)
- `file-scope-and-git-safety-policy.md` (copied from master)
- `no-fake-data-policy.md` (copied from master)
- `service-business-conversion-layout.md` (copied from master)
- `service-card-image-placeholder-standard.md` (copied from master)
- `<client>-build-context.md` (client-specific facts)
- `implementation-log.md` (running build log)

## Required Prompt Files

### Build prompts (`prompts/build/`)

| File | Purpose |
|---|---|
| `batch-2-core-brand-pages-prompt.md` | Tier 1 core brand pages (About, Contact, FAQ, Free Quote, Thank You, hubs, legal) |
| `batch-3-service-pages-prompt.md` | Tier 2 service pages (one per primary service) |
| `batch-4-city-location-pages-prompt.md` | Tier 3 city / county location pages |
| `batch-5-neighborhood-pages-prompt.md` | Tier 3 priority neighborhood pages (city/neighborhood) |
| `batch-6-service-city-matrix-prompt.md` | Tier 4 service+city matrix pages |

Adapt the page list, slugs, routes, and per-batch counts to the specific client. The prompt *shape* — Purpose / When / Source-of-Truth / Pages / Design Rules / SEO-AEO / Validation / Log / Report / Stop Conditions — stays the same across clients.

### Content prompts (`prompts/content/`)

| File | Purpose |
|---|---|
| `seo-aeo-content-generation-prompt.md` | Generate optimized copy (H1, meta, direct-answer, body, FAQs, CTAs, links) |
| `content-strengthening-prompt.md` | Improve thin / weak / generic content with surgical before-after changes |

Project-agnostic — copy verbatim into each client repo and adapt only the client-name references.

### SEO/AEO prompts (`prompts/seo-aeo/`)

| File | Purpose |
|---|---|
| `serp-analysis-prompt.md` | Analyze SERP intent, competitor patterns, topic / heading / FAQ gaps before drafting |
| `aeo-gap-analysis-prompt.md` | Audit answer-engine readiness on a built page |

Project-agnostic.

### QA prompts (`prompts/qa/`)

| File | Purpose |
|---|---|
| `page-qa-prompt.md` | Structural, design, accessibility QA per page |
| `seo-aeo-qa-prompt.md` | SEO/AEO QA per page (intent match, keyword discipline, FAQ quality, no doorway) |
| `pre-commit-qa-prompt.md` | Final safety check before staging and committing |

Project-agnostic (with client-specific phone/brand mentions where appropriate).

### Update prompts (`prompts/updates/`)

| File | Purpose |
|---|---|
| `content-gap-fix-prompt.md` | Apply targeted fixes from a QA gap list |
| `content-update-prompt.md` | Safely update data-driven content (phone, email, service area, services, CTAs, legal) |

Project-agnostic. Typical update patterns reference the client's `lib/constants/*` files.

## Required Reference Docs

`reference/`:

| File | Purpose |
|---|---|
| `client-build-prompt-index.md` | Catalog of every prompt in the system, when to use it, expected output |
| `seo-aeo-content-standards.md` | Page-level SEO / AEO rules (URL slugs, headings, metadata, FAQ, direct-answer, local SEO, schema, no doorway, no stuffing) |
| `service-business-design-standards.md` | Design rules (two-column hero/CTA, service card image placeholder, wide containers, motion, brand tokens) |

## Required Checklists

`checklists/`:

| File | Purpose |
|---|---|
| `page-before-build-checklist.md` | Confirm strategy ready before sending to a build prompt |
| `page-after-build-checklist.md` | Confirm a built page meets standards |
| `content-quality-checklist.md` | Confirm body copy is optimized, conversion-focused, no fake claims |

## Required Decision Doc

`decisions/client-repo-prompt-standard.md` — adoption record for this standard inside the client repo. Documents:

- The required folder structure
- The required minimum prompt set
- The rationale (continuity across sessions, operators, master divergence, audit trail)
- The adoption rule and maintenance behavior

## Empty-Folder Tracking

Two folders ship empty but are tracked from day one via `.gitkeep`:

- `outputs/batch-2/.gitkeep` — per-batch deliverable outputs land here as batches ship
- `qa/.gitkeep` — per-page and per-batch QA reports land here

When Batch 3 ships, `outputs/batch-3/` is created. Same per batch.

## How to Adapt Prompts to a Specific Client

The setup process produces prompt files that are mostly project-agnostic plus a handful of client-specific batch prompts. Specifically:

### Verbatim (project-agnostic) — keep unchanged

- `seo-aeo-content-generation-prompt.md`
- `content-strengthening-prompt.md`
- `serp-analysis-prompt.md`
- `aeo-gap-analysis-prompt.md`
- `content-gap-fix-prompt.md`
- `content-update-prompt.md`
- `page-qa-prompt.md`
- `seo-aeo-qa-prompt.md`
- `pre-commit-qa-prompt.md`
- `seo-aeo-content-standards.md`
- `service-business-design-standards.md`
- `page-before-build-checklist.md`
- `page-after-build-checklist.md`
- `content-quality-checklist.md`
- `client-repo-prompt-standard.md`

### Client-specific — adapt at setup

- `batch-2-core-brand-pages-prompt.md` — page list, routes, owner names, brand voice references
- `batch-3-service-pages-prompt.md` — services list (slug, name, primary keyword), per-service notes
- `batch-4-city-location-pages-prompt.md` — city list, primary keywords per city
- `batch-5-neighborhood-pages-prompt.md` — neighborhood list, parent-city mapping
- `batch-6-service-city-matrix-prompt.md` — service × city combinations
- `client-build-prompt-index.md` — same shape, just references the client's name

Where a client-specific value appears in a verbatim prompt (e.g., phone number in `pre-commit-qa-prompt.md`'s no-fake-data spot check pattern), reference the client's `lib/constants/site.ts` rather than hardcoding.

## How to Avoid Prompt Bloat

A prompt that nobody reads is worse than a prompt that doesn't exist. To keep the system useful:

- Each prompt fits one focused read (~80–200 lines).
- Repeated boilerplate (no-fake-data full list, file-scope full rules) is cross-referenced to the canonical doc, not duplicated.
- Inputs / outputs sections come early so an operator can scan and decide whether the prompt fits the task.
- Stop Conditions at the bottom prevent prompts from sprawling into the next prompt's territory.

When a prompt feels long, split it into two — never let it grow into a 1,000-line monolith.

## No-Fake-Data Preservation

Every prompt in the system carries a "No-Fake-Data Rules" section or stop condition. The full discipline lives in `docs/no-fake-data-policy.md` (master) and `docs/site-os/no-fake-data-policy.md` (client copy). The new prompt system never weakens that discipline — every build, content, SEO/AEO, QA, and update prompt either:

- Lists the forbidden claim types explicitly, OR
- Cross-references `docs/site-os/no-fake-data-policy.md` for the full list

QA prompts grep for high-risk patterns (reviews / ratings / licenses / awards / years / guarantees) and flag STOP-SHIP if invented data appears in the staged diff.

## Design Standards Preservation

Every build prompt cross-references the two layout primitives:

- `docs/site-os/service-business-conversion-layout.md` (two-column hero/CTA)
- `docs/site-os/service-card-image-placeholder-standard.md` (service card image placeholders)

`reference/service-business-design-standards.md` consolidates both as one client-side reference. `page-qa-prompt.md` includes per-category compliance checks for both standards.

## SEO/AEO Standards Preservation

`reference/seo-aeo-content-standards.md` codifies:

- URL slug rules
- Heading hierarchy
- Metadata (title 50–60 chars, description 140–160 chars, unique per page)
- Direct-answer paragraph format
- FAQ standards (4–6 per page, 40–80 word answers, voice-search friendly)
- Local SEO (service area from constants, no street address, no invented cities)
- Schema rules (FAQPage exact text match, no AggregateRating without verified data)
- No-doorway-page discipline
- No-keyword-stuffing discipline

Every content / build / QA prompt references these standards by file path so the rules stay singular.

## How to Use with Claude Project and Claude Code

### Claude Project (high-level planning, strategy, owner conversations)

- Claude Project sessions can reference the client repo's prompt files by path when discussing strategy or planning a batch.
- Project sessions do NOT need to memorize the prompt contents — the prompt files are the durable memory.
- When a project session reaches a decision point ("OK, let's build Batch 3"), the operator copies the relevant build prompt from the client repo into a Claude Code session.

### Claude Code (implementation inside the repo)

- A Claude Code session opens with `cd <client-repo>` so it has filesystem access.
- The operator pastes the relevant build prompt (e.g., `docs/site-os/prompts/build/batch-3-service-pages-prompt.md`) as the kickoff message.
- Claude Code reads the source-of-truth docs (brand guide, build plan, build context, no-fake-data policy, design standards) listed in the prompt and proceeds under Fast Build Batch.
- After implementation, the operator runs the relevant QA prompts (`page-qa-prompt.md`, `seo-aeo-qa-prompt.md`) and the final `pre-commit-qa-prompt.md` before staging.

### Sequencing reference

| Stage | Prompt |
|---|---|
| Plan a batch | `prompts/build/batch-N-<name>-prompt.md` |
| Draft copy for a page | `prompts/content/seo-aeo-content-generation-prompt.md` |
| Analyze SERP before drafting | `prompts/seo-aeo/serp-analysis-prompt.md` |
| Audit a built page | `prompts/seo-aeo/aeo-gap-analysis-prompt.md` |
| Improve weak content | `prompts/content/content-strengthening-prompt.md` |
| Apply fixes from a QA report | `prompts/updates/content-gap-fix-prompt.md` |
| Update business data | `prompts/updates/content-update-prompt.md` |
| QA structural/design/a11y | `prompts/qa/page-qa-prompt.md` |
| QA SEO/AEO | `prompts/qa/seo-aeo-qa-prompt.md` |
| Final pre-commit safety check | `prompts/qa/pre-commit-qa-prompt.md` |

## Maintenance Behavior

When Site OS Master ships a new layout standard, content standard, or workflow improvement:

1. The change lands in Site OS Master.
2. Existing client repos do NOT auto-update — their copy of the prompts is an intentional baseline.
3. When a client repo opens its next major batch, the operator reviews Site OS Master changes since the last sync and pulls the relevant updates into the client repo via a `chore(site-os): sync prompts from master` commit.
4. The sync is opt-in per client. Master moves forward without forcing every client repo to follow.

Conversely, when a client repo evolves a prompt usefully, the operator considers promoting the improvement back upstream into Site OS Master.

## Setup Process

Use `prompts/client-repo-prompt-system-setup-prompt.md` as a copy-paste Claude Code prompt to set up the full structure inside any client repo. The setup prompt accepts placeholder values for the client's name, repo path, GitHub URL, services, locations, brand message, phone, and email.

After setup, run `pre-commit-qa-prompt.md` to confirm scope before staging.

## Working Example: Final Touch Cleaning Company

The Final Touch Cleaning Company client repo at `C:\Users\Welcome\Desktop\client-sites\final-touch-cleaning-company-site` is the reference implementation of this standard. As of 2026-05-17, `docs/site-os/` in that repo contains:

- 7 workflow / policy / context docs at the root (from initial Batch 1.0 scaffold)
- 5 batch build prompts under `prompts/build/`
- 2 content prompts under `prompts/content/`
- 2 SEO/AEO prompts under `prompts/seo-aeo/`
- 3 QA prompts under `prompts/qa/`
- 2 update prompts under `prompts/updates/`
- 3 reference docs under `reference/`
- 3 checklists under `checklists/`
- 1 decision doc under `decisions/`
- 2 empty-folder placeholders (`outputs/batch-2/.gitkeep`, `qa/.gitkeep`)

Future client repos onboard with the same shape, adapted via the setup prompt.

## Anti-Patterns to Avoid

- Treating Claude Project memory as a substitute for repo-resident prompts (sessions end; memory may not persist).
- Treating the master repo as a runtime dependency (operators may not have master open; master may diverge).
- Letting a single prompt grow past ~200 lines (split into two prompts before it stops being readable).
- Embedding hardcoded client values inside verbatim-shared prompts (use `lib/constants/site.ts` references instead).
- Skipping the setup at onboarding "just for now" — the gap grows the longer it's deferred, and Batch 2+ work creates more places where the missing prompts would have helped.

## Stop Conditions

Pause and surface to the project owner if:

- The client repo lacks the `docs/site-os/` root workflow docs (`fast-build-batch-workflow.md`, `no-fake-data-policy.md`, `file-scope-and-git-safety-policy.md`, `service-business-conversion-layout.md`, `service-card-image-placeholder-standard.md`, `<client>-build-context.md`). Setup the root first via the new-client-startup-workflow, then add this prompt system on top.
- The client repo has an unfinished foundation batch (Batch 1). Finish Batch 1 first, then add this prompt system.
- The client engagement is for a non-service-business vertical (directory, SaaS, blog-first). Some prompts may need replacement with vertical-appropriate equivalents — flag and discuss before adopting verbatim.

## Related Files

- `docs/new-client-startup-workflow.md` — onboarding flow that invokes this standard at Phase B step 12a
- `docs/fast-build-batch-workflow.md` — default workflow under which the prompts operate
- `docs/file-scope-and-git-safety-policy.md` — staging discipline applied inside every prompt
- `docs/no-fake-data-policy.md` — content safety applied inside every prompt
- `docs/service-business-conversion-layout.md` — paired layout primitive
- `docs/service-card-image-placeholder-standard.md` — paired layout primitive
- `prompts/06-claude-code-build-prompt.md` — references this standard via the client-repo-readiness check
- `prompts/client-repo-prompt-system-setup-prompt.md` — copy-paste setup prompt

---

Site OS Master — Client Repo Prompt and Documentation System Standard v1.0
Status: Adopted 2026-05-17
Reason for creation: codify the proven client-side prompt system (validated in the Final Touch Cleaning Company build) as the universal client-repo standard, so every future client repo carries its own prompts, references, checklists, and decision docs and does not depend on Claude Project memory or the master repo for ongoing build, content, SEO/AEO, gap-fix, update, or QA work.
