# New-Client Startup Workflow

A standalone workflow orchestrator for starting a brand-new Site OS Master client website build from scratch. References the canonical intake, brief, mode-selection, scaffolding, policy, build, and deploy docs without duplicating them. Applies regardless of stack, vertical, or workflow mode.

## Purpose

Orchestrate the end-to-end client-onboarding journey so a new build can begin without re-deriving the sequence each time. This doc is the universal entry point that other Site OS Master startup docs cross-reference. It walks a new client build from prerequisites through deploy in six numbered phases (A–F), referencing the canonical doc at every step rather than duplicating its content.

## When to Use

- A new client has signed and the build is ready to begin
- An internal greenfield project is starting and Site OS Master will manage it
- A recovered or restarted project where prior repo state is unknown or unusable and a clean Site OS Master onboarding is the chosen path
- A migration from another agency or platform where a fresh Site OS Master build is the chosen path
- A contractor or teammate is being onboarded to a new client engagement and needs a single discoverable startup sequence

## What This Doc Is and Is Not

**Is:**

- A client-onboarding workflow (intake → repo scaffold → policy invocation → strategy → build → deploy)
- A reference orchestrator that points at the canonical existing docs
- A consistent, predictable startup sequence repeatable across clients

**Is not:**

- A page-build workflow — see `docs/page-build-workflow.md`
- A continue-existing-client workflow — deferred to Tier R3-5
- A replacement for any existing doc (intake gate, project brief, mode guide, scaffold doc, R2/R3-N policies, deploy/post-deploy checklists)
- A stack tutorial — the default stack is named, but other stacks add their own deploy subsection per `checklists/deploy-workflow-checklist.md` §5

## Phase A — Pre-Build

### 1. Confirm prerequisites

Before invoking the intake gate, confirm:

- Project owner is reachable for intake (synchronous or async)
- Cloudflare account exists if the default reference stack will be used
- GitHub access is confirmed for both the project owner and the build operator
- Domain decision is available (production domain confirmed or pending)
- Local environment is ready: Node, npm, Git, PowerShell or Bash, VS Code or equivalent editor
- Working filesystem path convention is established (default: `C:\Users\Welcome\Desktop\client-sites\<client>\` or platform equivalent)

Skip the rest of this workflow until these are present or explicitly deferred.

### 2. Run the Client Intake Gate

Invoke `efficiency-governor/client-intake-gate.md` v1.2. Mark every field CONFIRMED, APPROVED PLACEHOLDER, or MISSING — FLAGGED per the three-status framework defined there. Resolve build blockers before continuing; launch blockers may carry forward as TODOs.

The gate is the hard readiness check. The project brief (step 3) is a separate artifact.

### 3. Capture the project brief

Fill out `docs/project-brief-template.md`. The brief is a structured form that captures business identity, primary and secondary offers, target audience, pain points, CTAs, service areas, brand voice, website goals, and main competitors. It informs every downstream prompt but does not replace the intake gate.

### 4. Select the project type

Use the Project Type selector at the top of `efficiency-governor/client-intake-gate.md`. Common types:

- **Local service business** — the intake gate applies fully
- **Directory or marketplace** — directory intake supplement applies
- **SaaS or product site** — SaaS intake supplement applies
- **Landing page or funnel** — simplified intake applies
- **Other** — describe and assemble custom intake

The project type drives which page types apply (homepage, service, location, category, directory, business profile, blog, landing) and which workflow mode tier is appropriate per page.

### 5. Choose the workflow mode

Use `docs/site-os-prompt-operating-guide.md` to choose among Fast Mode, Core Mode, Beyond-Elite Mode, and Full Competitive Build Mode. The guide lists best-fit page types, prompt sequences, success standards, and risks per mode. The mode may differ per page.

### 6. Decide Phase 1 launch pages

Decide which pages will ship in the Phase 1 launch. The list becomes the page-list inventory stored at `docs/site-os/inputs/page-list.md` in the client repo (Phase B step 12). The list informs build sequencing, Prompt 05 build briefs, and Prompt 10 client data collection.

## Phase B — Repo Scaffold

### 7. Decide the stack

The default reference stack is Next.js 14 + `@opennextjs/cloudflare` + Cloudflare Workers, as proven on the 702Xchange client repo (see Working Example below). Other stacks are supported. Per `checklists/deploy-workflow-checklist.md` §5, other stacks add their own deploy subsection as they are first used; the rest of this workflow is stack-agnostic.

If the chosen stack is **Next.js + Cloudflare Pages static export** (the standard static deployment path), the build must adopt the Cloudflare Pages Static Export Rule from day one per `docs/deployment/cloudflare-pages-nextjs-static-export.md` and `CLAUDE.md` § Cloudflare Pages Static Export Rule. The deploy subsection is `checklists/deploy-workflow-checklist.md` §5b. Confirm during scaffolding that `next.config.mjs` includes `output: "export"`, `images: { unoptimized: true }`, `reactStrictMode: true`, and `poweredByHeader: false`, and that the Cloudflare Pages project output directory is set to `out`. If the project intentionally uses Cloudflare Workers, server functions, image optimization, or another runtime mode, document the exception per the Exception Rule in the canonical doc before scaffolding the client repo.

### 8. Create the client repo at the conventional path

Create the client repo at `C:\Users\Welcome\Desktop\client-sites\<client>\` (or platform equivalent). The path convention enables consistent chained-`cd` commands and prevents cross-repo confusion. Per `docs/file-scope-and-git-safety-policy.md` §2 Correct Repo Discipline, never deploy from Site OS Master and never modify a different client repo from inside the current client-build session.

### 9. `git init` and create the GitHub remote

PowerShell (Windows):

```powershell
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git init
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; git remote add origin <github-remote-url>
```

Bash:

```bash
cd "<client repo>" && git init && git remote add origin <github-remote-url>
```

Credential setup is out of scope for this doc. Use the GitHub CLI, SSH key, or PAT per the team's convention. Per `docs/file-scope-and-git-safety-policy.md` §3, every command uses the chained-`cd` pattern on Windows because the shell harness resets cwd between invocations.

### 10. Scaffold `docs/site-os/{inputs, outputs, qa, changelog}`

Use the scaffolding commands in `docs/client-repo-doc-structure.md` § Scaffolding — PowerShell or § Scaffolding — Bash. The scaffolding creates the four standard subfolders with `.gitkeep` files so the structure is tracked from day one.

### 11. Create `docs/site-os/README.md`

Paste the sample README block from `docs/client-repo-doc-structure.md` § Sample docs/site-os/README.md Content into the new client repo's `docs/site-os/README.md`. The README establishes the convention from day one and tells future operators what each subfolder is for.

### 12. Create `docs/site-os/inputs/page-list.md`

Create the canonical page-list inventory. A page-list captures: route inventory, page type per route, launch tier (MVP / deferred / post-launch), primary keyword and user intent, current status, and notes. The page-list is the source of truth that Prompts 01 through 05, Prompt 10, and Prompt 20 reference as the authoritative page inventory and build-sequencing input.

**Working Example Callout.** The 702Xchange client repo at `C:\Users\Welcome\Desktop\client-sites\702xchange-site` is the reference implementation of Phase B steps 8–12. See `docs/site-os/README.md` and `docs/site-os/inputs/page-list.md` in that repo for a fully populated example. 702Xchange-specific decisions (8-category MVP launch set, ≥5/≥8 listing thresholds, 7 primary location pages, GoHighLevel form vendor, directory project type) are illustrative only — other clients will have different page lists, thresholds, and integrations.

### 12a. Create the client-side Site OS prompt and documentation system

After the inputs/outputs/qa/changelog scaffold lands and the page-list inventory is captured, install the full client-side prompt and documentation system per `docs/client-repo-prompt-system-standard.md`. This system makes the client repo self-sufficient for ongoing build, content, SEO/AEO, gap-fix, update, and QA workflows without depending on Claude Project memory or Site OS Master being open in another window.

Required folders to create (under `docs/site-os/`):

- `prompts/build/`
- `prompts/content/`
- `prompts/seo-aeo/`
- `prompts/qa/`
- `prompts/updates/`
- `reference/`
- `checklists/`
- `outputs/` (with `outputs/batch-2/.gitkeep` from day one)
- `qa/` (with `qa/.gitkeep`)
- `decisions/`

Required client-side files (14 prompts + 3 reference docs + 3 checklists + 1 decision doc):

- 5 batch build prompts (`batch-2-core-brand-pages-prompt.md` through `batch-6-service-city-matrix-prompt.md`) — adapt the page lists, slugs, services, and locations to this specific client.
- 2 content prompts (`seo-aeo-content-generation-prompt.md`, `content-strengthening-prompt.md`) — project-agnostic, copy verbatim.
- 2 SEO/AEO prompts (`serp-analysis-prompt.md`, `aeo-gap-analysis-prompt.md`) — project-agnostic.
- 3 QA prompts (`page-qa-prompt.md`, `seo-aeo-qa-prompt.md`, `pre-commit-qa-prompt.md`) — project-agnostic with client-specific phone / brand substitutions.
- 2 update prompts (`content-gap-fix-prompt.md`, `content-update-prompt.md`) — project-agnostic.
- 3 reference docs (`client-build-prompt-index.md`, `seo-aeo-content-standards.md`, `service-business-design-standards.md`).
- 3 checklists (`page-before-build-checklist.md`, `page-after-build-checklist.md`, `content-quality-checklist.md`).
- 1 decision doc (`decisions/client-repo-prompt-standard.md`) — adoption record inside the client repo.

Setup procedure:

1. Use the copy-paste-ready setup prompt at `prompts/client-repo-prompt-system-setup-prompt.md` (Site OS Master).
2. Fill in the placeholder values for the new client: `{{CLIENT_NAME}}`, `{{CLIENT_REPO_PATH}}`, `{{GITHUB_REPO}}`, `{{SITE_OS_MASTER_PATH}}`, `{{PRIMARY_SERVICES}}`, `{{PRIMARY_LOCATIONS}}`, `{{BRAND_MESSAGE}}`, `{{PHONE}}`, `{{EMAIL}}`.
3. Paste into a Claude Code session opened in the client repo.
4. Review the final report and commit with `docs(site-os): adopt client-side prompt and documentation system`.

The full standard, including which prompts are verbatim vs client-adapted, lives at `docs/client-repo-prompt-system-standard.md`. The Final Touch Cleaning Company client repo is the reference implementation as of 2026-05-17.

Step 12a is a hard requirement for service-based business builds and a strong recommendation for other project types. If skipped, the client engagement will rely on session memory and operator access to Site OS Master — both fragile single-points-of-failure that this standard exists to remove.

### 12b. Scaffold the five required design skill files

After the client-side prompt and documentation system is installed, copy the five required design skill files from Site OS Master into the new client repo per `docs/design/required-website-design-skills.md` § Client Repo Scaffold Requirements. The canonical copies live at:

- `.claude/skills/frontend-design-engineer/SKILL.md`
- `.claude/skills/emil-kowalski-motion-design/SKILL.md`
- `.claude/skills/impeccable-ui-polish/SKILL.md`
- `.claude/skills/ux-ui-conversion-design/SKILL.md`
- `.claude/skills/seo-aeo-llm-page-architecture/SKILL.md`

PowerShell (Windows):

```powershell
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; New-Item -ItemType Directory -Force .claude/skills/frontend-design-engineer, .claude/skills/emil-kowalski-motion-design, .claude/skills/impeccable-ui-polish, .claude/skills/ux-ui-conversion-design, .claude/skills/seo-aeo-llm-page-architecture
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Copy-Item "C:\Users\Welcome\Desktop\site-os-master\.claude\skills\frontend-design-engineer\SKILL.md" .claude/skills/frontend-design-engineer/SKILL.md
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Copy-Item "C:\Users\Welcome\Desktop\site-os-master\.claude\skills\emil-kowalski-motion-design\SKILL.md" .claude/skills/emil-kowalski-motion-design/SKILL.md
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Copy-Item "C:\Users\Welcome\Desktop\site-os-master\.claude\skills\impeccable-ui-polish\SKILL.md" .claude/skills/impeccable-ui-polish/SKILL.md
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Copy-Item "C:\Users\Welcome\Desktop\site-os-master\.claude\skills\ux-ui-conversion-design\SKILL.md" .claude/skills/ux-ui-conversion-design/SKILL.md
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Copy-Item "C:\Users\Welcome\Desktop\site-os-master\.claude\skills\seo-aeo-llm-page-architecture\SKILL.md" .claude/skills/seo-aeo-llm-page-architecture/SKILL.md
```

Bash:

```bash
cd "<client repo>" && mkdir -p .claude/skills/frontend-design-engineer .claude/skills/emil-kowalski-motion-design .claude/skills/impeccable-ui-polish .claude/skills/ux-ui-conversion-design .claude/skills/seo-aeo-llm-page-architecture
cd "<client repo>" && cp "<site-os-master>/.claude/skills/frontend-design-engineer/SKILL.md" .claude/skills/frontend-design-engineer/SKILL.md
cd "<client repo>" && cp "<site-os-master>/.claude/skills/emil-kowalski-motion-design/SKILL.md" .claude/skills/emil-kowalski-motion-design/SKILL.md
cd "<client repo>" && cp "<site-os-master>/.claude/skills/impeccable-ui-polish/SKILL.md" .claude/skills/impeccable-ui-polish/SKILL.md
cd "<client repo>" && cp "<site-os-master>/.claude/skills/ux-ui-conversion-design/SKILL.md" .claude/skills/ux-ui-conversion-design/SKILL.md
cd "<client repo>" && cp "<site-os-master>/.claude/skills/seo-aeo-llm-page-architecture/SKILL.md" .claude/skills/seo-aeo-llm-page-architecture/SKILL.md
```

Stage explicitly per file (no `git add .`) per `docs/file-scope-and-git-safety-policy.md`. Commit with a message like `chore(skills): scaffold required design skills from Site OS Master`.

Step 12b is a hard requirement for every client engagement, not just service-based business builds. The first Prompt 06 invocation must stop at Gate 1 if these files are missing (per `prompts/06-claude-code-build-prompt.md` Gate 1 Efficiency Governor Preflight item 11a). If a client engagement updates a skill, propagate the change back to Site OS Master so the master stays the source of truth.

## Prompt Routing and AI Depth Setup

Every client repo must receive the prompt-router and AI-depth standard at startup. Per `docs/prompt-router-and-ai-depth-standard.md`:

- High-value pages (homepage, free quote, contact, services hub, locations hub, about, FAQ hub, core service / location / service+location pages, revenue-critical landing pages) require **individual page prompts** with the correct AI depth level.
- Batch prompts are appropriate only for: project setup, shared components, legal / utility pages, low-risk scaffolding, commit / QA workflows. Per `docs/fast-build-batch-workflow.md` and `docs/high-value-page-enforcement-standard.md`.
- Page work must select **prompt type** and **AI depth level** before any drafting begins. The routing output block in `docs/prompt-router-and-ai-depth-standard.md` is mandatory for high-value pages.

At onboarding, ensure the new client repo carries:

- `docs/site-os/prompts/build/` populated per `docs/client-repo-prompt-system-standard.md`
- Awareness of the individual high-value page prompts in Site OS Master at `prompts/individual-homepage-*-prompt.md`, `prompts/conversion-page-*-prompt.md`, `prompts/seo-aeo-service-page-*-prompt.md`, `prompts/local-seo-location-page-*-prompt.md`, `prompts/aeo-faq-hub-prompt.md`, and `prompts/high-value-page-qa-prompt.md`
- The pass/fail gate from `docs/pass-fail-page-quality-gates.md` referenced in the client's `pre-commit-qa-prompt.md`

If a high-value page is approached with a generic batch prompt, the operator must either: (a) request and receive explicit approval from the project owner, or (b) re-route to the correct individual prompt. Otherwise the routing standard rejects the build.

## Phase C — Policy Invocation

### 13. Invoke the session-scoped standing approval rule

If the build will use standing approval to reduce yes/no friction between low-risk internal workflow gates, paste the copy-paste-ready language from `docs/standing-approval-rule-template.md` § Copy-Paste-Ready Standing Approval Language into the first relevant prompt of the session. Standing approval is session-scoped — it does not persist across sessions and must be re-invoked explicitly each time it applies. The Hard Stop List always requires explicit approval regardless of standing approval status.

### 14. Confirm file-scope and Git safety discipline

`docs/file-scope-and-git-safety-policy.md` is the universal policy. Highlights to observe from day one: cross-repo separation (Site OS Master is workflow source-of-truth; the client repo is where the website code lives), chained-`cd` rule on Windows, explicit per-file `git add`, never `git add .` or `git add -A`, never force-push to `main` or `master`. The full §12 Copy-Paste-Ready Verification Commands list is paste-ready for status, scope, post-stage, post-commit, and unaffected-repo checks.

### 15. Confirm no-fake-data discipline

`docs/no-fake-data-policy.md` is the universal policy. Highlights to observe from day one: 12 categories of fake-data prevention (business identity, contact data, service data, reviews and ratings, trust signals, performance claims, schema markup, image and media, external data sources, listings and directory data, CTAs and social proof, competitor claims), the schema-matches-visible-content rule, no Places API or GBP auto-pulls without owner consent, no fake reviews or listings, programmatic content allowed only when source data is verified.

### 15a. Confirm service-business conversion layout standard (service-based builds only)

If the project type is **local service business** or any other service-based vertical, `docs/service-business-conversion-layout.md` is the universal hero/CTA layout standard. Highlights to observe from day one: two-column conversion layout (content left, form right), expanded container (`max-w-[1440px]` with progressive padding), mobile stacks content first then form, single primary CTA per view, no duplicate forms on the same page, accessibility minimums (44–48px touch targets, visible focus, single H1), reduced-motion-safe entrance animation only, and the no-fake-data rules continue to govern any trust copy inside the layout. Reusable components are typically `HeroSection` and `CTASection` with `formSlot` / `layout` / `container` props plus a `QuoteFormPlaceholder` (or equivalent) until a live form endpoint is owner-confirmed.

This standard does not apply to non-conversion pages (blog, legal, about, 404, utility). Skip step 15a entirely when the project type is directory/marketplace, SaaS/product, or other non-service-business — those project types have their own layout patterns.

### 15b. Confirm service-card image-placeholder standard (service-based builds only)

If the project type is **local service business** or any other service-based vertical, `docs/service-card-image-placeholder-standard.md` is the universal service-card layout standard. Highlights to observe from day one: every service card must include a visual image placeholder area at the top (homepage service previews, services hub, related-service grids, location page service grids, service + city matrix cards, landing page service cards, reusable `ServiceCard` components). Use a consistent `aspect-[16/10]` (or `aspect-[4/3]`) placeholder with a brand-token background (soft-blue / light-gray / subtle gradient), `aria-hidden="true"` when decorative, no embedded text inside the image, and a TODO comment noting that an owner-supplied photo should replace the placeholder when available. No fake before/after, no fake team/customer/project photos, no Google Places / GBP / stock auto-pulls per `docs/no-fake-data-policy.md` §8–§9. Reusable components are typically a `ServiceCard` plus an optional `ServiceImagePlaceholder` for projects with many cards.

This standard does not apply to non-card UI (text-only navigation lists, inline service mentions in body copy, table-style listings) and does not apply to non-service-business project types — those project types have their own card patterns.

### 15c. Confirm the Required Website Design Skill Routing Rule

The five required design skills (`frontend-design-engineer`, `emil-kowalski-motion-design`, `impeccable-ui-polish`, `ux-ui-conversion-design`, `seo-aeo-llm-page-architecture`) must be routed through every page build per `docs/design/required-website-design-skills.md` and `CLAUDE.md` § Required Website Design Skill Routing Rule. Highlights to observe from day one:

- Every page build, regardless of mode, runs the Required Design Skill Pass (frontend-design-engineer, motion design, UI polish, conversion UX, SEO/AEO/LLM architecture)
- Fast Mode uses the lightweight pass; Core Mode uses the full pass; Beyond-Elite adds extended polish and conversion review; Full Competitive Build adds competitive SERP, conversion, and UX differentiation review (per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode)
- Claude Project declares the design skill pass in the developer build brief; Claude Code consumes the skill outputs in Prompt 06 Gate 2 and verifies them in Gate 4
- A page cannot be marked complete until it passes the QA gates in `checklists/launch-readiness-checklist.md` § Required Design Skill Pass

This rule applies to every project type. There are no exemptions; mode controls depth, not whether the pass runs.

## Phase D — Strategy and Build

### 16. Run the upstream strategy prompts (Prompts 01 through 05)

Run the upstream strategy prompts per the chosen workflow mode. Each mode has its own prompt sequence in `docs/site-os-prompt-operating-guide.md` (Fast Mode skips SERP/entity/moat/AI-citation/template-eval; Core Mode adds 10-metric and gap fix; Beyond-Elite adds SERP, entity, alignment, linking, schema, conversion; Full Competitive Build adds variant battle, search-intent defense, moat, AI citation, content-quality editor, template eval).

The Prompts 01–05 v2 carry-forward rule from `docs/core-mode-workflow-map.md` applies: unresolved client data does not stop strategy. Missing items are FLAGGED, NEEDS CONFIRMATION, or CARRY FORWARD and passed to the next prompt. Prompt 05 converts unresolved items into safe Prompt 06 TODOs or FLAGs.

### 17. For each page, run Prompt 06 with strict Gate 1 → Gate 2 → Gate 3

For each page in the build sequence, invoke `prompts/06-claude-code-build-prompt.md` with strict gate discipline:

- **Gate 1 — Inspection.** Read the relevant files; identify scope; surface blockers
- **Gate 2 — Planning.** Declare the exact file scope; produce the implementation plan; await explicit approval
- **Gate 3 — Implementation.** Touch only the approved files; validate via lint/type-check/build; produce the implementation report

Gate discipline is a hard contract. Never expand scope mid-phase; pause and re-approve.

### 18. Run Prompt 07 QA after each Gate 3

Invoke `prompts/07-qa-review-prompt.md` immediately after each Gate 3 implementation. Outcomes are typically APPROVED, CONDITIONALLY APPROVED (when carry-forward items remain), or NOT APPROVED. Unresolved production-facing TODOs prevent APPROVED.

### 19. Stage explicitly, commit, push

After Prompt 07 QA passes, stage with explicit per-file `git add <path>` commands per `docs/file-scope-and-git-safety-policy.md` §5. Verify the staged scope with `git diff --cached --name-only` before commit. Use a conventional-commits prefix (`feat(scope):`, `docs(scope):`, `fix(scope):`, `chore(scope):`) matching the surrounding repo style. Push with the simplest form: `git push origin main`. Confirm `git status` is clean and HEAD matches the new commit after push completes (§6 and §7 of the policy).

### 20. Record per-tier completions in `docs/site-os/changelog/`

Per `docs/client-repo-doc-structure.md`, write one changelog entry per major tier or per launch event into `docs/site-os/changelog/`. Each entry summarizes scope, commits, validation results, and follow-up items. Changelog cadence is per tier or per launch — not per commit.

## Phase E — Deploy

### 21. Follow `checklists/deploy-workflow-checklist.md`

When the build is ready for production, follow the safe-deploy procedure in `checklists/deploy-workflow-checklist.md`. The most important rule is build-before-deploy: for the default reference stack the required two-command sequence is `npm run cf:build` then `npm run cf:deploy`. Running `cf:deploy` alone publishes whatever artifacts are already in `.open-next/` — §6 explains why this is unsafe and references the 702Xchange Tier 6A stale-artifact incident that produced this rule.

### 22. Run `checklists/post-deploy-production-verification-checklist.md` immediately after

Immediately after every deploy, run the post-deploy production verification checklist. The CTA wording spot-check in §4 catches stale-artifact deploys; the canonical URL, www→apex redirect, robots.txt, sitemap.xml, and Worker Version ID recording checks confirm production matches source. Do not announce the deploy as live until verification passes.

### 23. Record the deploy in `docs/site-os/changelog/<date>-<tier>.md`

Add a changelog entry recording: source commit hash, Worker Version ID (or platform-equivalent deployment ID), previous Worker Version ID, verification status (PASS / FAIL / PASS WITH NOTES), deployed-by (Claude / human / CI), and any follow-up items. The format is documented in the post-deploy checklist §11.

### 24. Hand off to `checklists/seo-indexing-checklist.md`

Only after production verification passes, hand off to `checklists/seo-indexing-checklist.md` for indexing submission and ongoing monitoring. Do not submit a stale or unverified deploy to indexing.

## Phase F — Carry-Forward

### 25. Resolve any MISSING — FLAGGED intake items before Prompt 09 Final Launch QA

Per `efficiency-governor/client-intake-gate.md` § Launch Blocker Reference, the gate enumerates fields that block production launch when unresolved. Use Prompt 09 as the final readiness gate; do not approve production launch with unresolved launch-critical TODOs.

### 26. Resolve any APPROVED PLACEHOLDER items per the launch plan

APPROVED PLACEHOLDER fields are explicitly allowed during build but should transition to CONFIRMED values per the launch plan agreed with the project owner. Document each placeholder transition in `docs/site-os/changelog/` so the audit trail is preserved.

### 27. Re-invoke standing approval per session

Standing approval is session-scoped per `docs/standing-approval-rule-template.md` § Session-Scoped Nature. It does not persist across sessions or between Claude conversations. Re-invoke explicitly at the start of each new session that will use it.

### 28. Hand off to the future Continue-Existing-Client Workflow (Tier R3-5)

Ongoing maintenance, mid-tier resumption, and incremental builds on an established client repo are a distinct workflow. Tier R3-5 will cover that workflow. Until R3-5 lands, treat ongoing work as a fresh session that re-invokes standing approval (step 27), confirms the current HEAD, reviews carry-forward items from the most recent changelog entry, and proceeds with strict gate discipline.

## Common Pitfalls

Observed in real Site OS Master client builds (mostly from the 702Xchange Tier 6A through Tier 7A-1 session timeline recorded in `docs/prompt-master-status.md` Tier R1, R2, R3-1, and R3-3 appendices):

- Deploying without rebuilding (stale-artifact deploys publish pre-current code while CLI reports success)
- Treating standing approval as cross-session (it is session-scoped and must be re-invoked)
- Editing files outside the approved phase scope ("scope drift")
- Confusing the Site OS Master repo with the client repo on Windows because the shell harness resets cwd between commands
- Auto-pulling Google Places or Google Business Profile data into production without owner consent
- Inventing reviews, ratings, or trust signals to fill gaps in client data
- Treating the project brief as the intake gate (the brief is a form; the gate is the readiness check)
- Building before the intake gate is cleared or has explicit placeholder approval

## Anti-Patterns to Avoid

- Deploying from Site OS Master (Site OS Master has no production website)
- Copying Site OS Master prompts, skills, routing, token-control, schemas, page templates, evals, benchmarks, workflow tests, versions, or checklists into the client repo (workflow source-of-truth must stay singular per `docs/client-repo-doc-structure.md` § Source-of-Truth Rule)
- Using `git add .` or `git add -A` in either repo
- Force-pushing to `main` or `master`
- Editing `lib/data/listings.ts` or any equivalent listings data file with fake or invented data
- Adding API integrations (GHL, Supabase, Stripe, Google Places API, Google Business Profile API) without explicit owner approval
- Skipping post-deploy production verification because the deploy CLI reported success
- Generalizing client-specific decisions (for example, 702Xchange's GoHighLevel form vendor, ≥5/≥8 listing thresholds, 8-category MVP launch set, directory project type) to other clients

## Stop Conditions

Pause and surface to the project owner if any of these are true:

- Client Intake Gate is NOT CLEARED and no launch-critical placeholder approval exists
- Minimum viable intake is incomplete and no APPROVED PLACEHOLDER decision exists for missing fields
- Production domain is unresolved (cannot finalize canonical URL, sitemap, robots.txt, OG URLs)
- Form endpoint path is unresolved and a conversion form is in scope
- Legal copy (privacy policy or terms) is unresolved and a personal-data form is in scope
- Index / noindex launch decision is unresolved
- Client repo path is ambiguous (multiple candidate repos on the same machine)
- Working tree is dirty in unexpected ways at the start of any phase
- Standing approval has lapsed (new session) and has not been re-invoked
- Gate 2 plan or Gate 3 diff reveals an unexpected file modification outside the approved scope

## Copy-Paste-Ready First-Session Kickoff Prompt Template

Paste the following template into the first session of a new client build. Fill in the bracketed `<ANGLE-BRACKET-PLACEHOLDER>` values. The template is a starting point, not a contract — the body of this doc remains authoritative.

```
New-client startup kickoff — <CLIENT NAME>

Site OS Master repo: C:\Users\Welcome\Desktop\site-os-master
Client repo: C:\Users\Welcome\Desktop\client-sites\<client-slug>
Project type: <local service / directory / SaaS / landing page / other>
Default reference stack: <Next.js 14 + OpenNext + Cloudflare Workers / other — describe>
Production domain decision: <CONFIRMED <domain> / pending>
Workflow mode (per page-type plan): <Fast / Core / Beyond-Elite / Full Competitive Build>

Client Intake Gate status (per efficiency-governor/client-intake-gate.md v1.2):
- CONFIRMED count: <N>
- APPROVED PLACEHOLDER count: <N>
- MISSING — FLAGGED count: <N>
- Gate decision: <CLEARED / CLEARED WITH FLAGS / NOT CLEARED>
- Build blockers present: <Yes — list / No>
- Launch blockers present: <Yes — list / No>

Phase A first-session scope:
- Confirm prerequisites (per docs/new-client-startup-workflow.md Phase A step 1)
- Run Client Intake Gate
- Capture project brief at docs/project-brief-template.md
- Select project type and workflow mode
- Decide Phase 1 launch pages

I am invoking the standing approval rule per docs/standing-approval-rule-template.md
§ Copy-Paste-Ready Standing Approval Language for this session.

File-scope and Git safety discipline applies per docs/file-scope-and-git-safety-policy.md.
No-fake-data discipline applies per docs/no-fake-data-policy.md.

Please run Phase A only. Do not scaffold the client repo until I approve moving to Phase B.
```

## Working Example: 702Xchange

The 702Xchange client repo at `C:\Users\Welcome\Desktop\client-sites\702xchange-site` is the reference implementation of Phases A through E. As of 2026-05-17 it contains the canonical `docs/site-os/README.md`, `docs/site-os/inputs/page-list.md`, and the four `docs/site-os/{inputs, outputs, qa, changelog}` subfolders scaffolded per `docs/client-repo-doc-structure.md`. The build session timeline (Tier 6A styling foundation through Tier 7A-1 visual polish, plus production deploys to `https://702xchange.com`) produced the R1, R2, R3-1, and R3-3 patches recorded in `docs/prompt-master-status.md`.

702Xchange-specific decisions are illustrative only — other clients will have different stacks, project types, and launch scopes. Specifically, do not generalize: the Next.js 14 + OpenNext + Cloudflare Workers stack choice, the directory / marketplace project type, the 8-category MVP launch set, the ≥5 listings per category and ≥8 listings per location publication thresholds, the 7 primary location set, the GoHighLevel form vendor for Add Business / Claim Listing / Contact, or the `LISTINGS = []` MVP seed pattern in `lib/data/listings.ts`. Each of those is a 702Xchange decision made during the 702Xchange intake and build, not a Site OS Master requirement.

## Related Files

- `README.md` — top-level Site OS Master overview, folder structure, prompt operating guide pointer, deploy and client handoff discipline
- `CLAUDE.md` — primary behavioral contract; working rules; content rules; competitive standards
- `efficiency-governor/client-intake-gate.md` — intake gate (the hard gate this workflow invokes in Phase A step 2)
- `docs/project-brief-template.md` — project brief form filled out in Phase A step 3
- `docs/site-os-prompt-operating-guide.md` — workflow mode selection guide referenced in Phase A step 5
- `docs/page-build-workflow.md` — page-level workflow invoked once per page in Phase D
- `docs/client-repo-doc-structure.md` — scaffolding for `docs/site-os/{inputs, outputs, qa, changelog}` in Phase B steps 10–12
- `docs/standing-approval-rule-template.md` — session-scoped rule invoked in Phase C step 13
- `docs/file-scope-and-git-safety-policy.md` — universal file-scope and Git discipline invoked in Phase C step 14 and applied throughout
- `docs/no-fake-data-policy.md` — universal no-fake-data discipline invoked in Phase C step 15 and applied throughout
- `docs/service-business-conversion-layout.md` — universal hero/CTA layout standard invoked in Phase C step 15a for service-based business builds; consumed by every page-build that creates a hero or primary CTA on a homepage, service page, location page, service + location page, or landing page
- `docs/service-card-image-placeholder-standard.md` — universal service-card layout standard invoked in Phase C step 15b for service-based business builds; consumed by every page-build that renders a service card on a homepage, services hub, service page (related services), location page, service + city matrix page, landing page, or reusable `ServiceCard` component
- `docs/client-repo-prompt-system-standard.md` — universal client-side Site OS prompt and documentation system standard invoked in Phase B step 12a; defines the required folder structure, prompt files, reference docs, checklists, and decision docs every client repo must carry so it can continue build, content, SEO/AEO, gap-fix, update, and QA workflows without depending on Claude Project memory or master-repo access
- `prompts/client-repo-prompt-system-setup-prompt.md` — copy-paste-ready Claude Code prompt that sets up the full client-side prompt and doc system inside a client repo per the standard above
- `docs/prompt-router-and-ai-depth-standard.md` — page-type routing and AI depth levels; selects which prompt and depth apply to each page
- `docs/keyword-research-and-aeo-depth-standard.md` — keyword type research and AEO question research required before high-value page writing
- `docs/high-value-page-enforcement-standard.md` — pre-build deliverables and post-build proof required for high-value pages
- `docs/pass-fail-page-quality-gates.md` — pass/fail checklist invoked at the end of every high-value page build
- `prompts/individual-homepage-research-prompt.md`, `prompts/individual-homepage-implementation-prompt.md` — Level 5 Beyond-Elite two-step homepage workflow
- `prompts/conversion-page-research-prompt.md`, `prompts/conversion-page-implementation-prompt.md` — Level 4 Conversion two-step workflow for /free-quote, /contact, booking, landing
- `prompts/seo-aeo-service-page-research-prompt.md`, `prompts/seo-aeo-service-page-implementation-prompt.md` — individual service page workflow
- `prompts/local-seo-location-page-research-prompt.md`, `prompts/local-seo-location-page-implementation-prompt.md` — individual location page workflow
- `prompts/aeo-faq-hub-prompt.md` — Level 5 FAQ hub single-step prompt with 30+ FAQ minimum and 9-category structure
- `prompts/high-value-page-qa-prompt.md` — read-only pass/fail QA against the high-value page gate
- `checklists/deploy-workflow-checklist.md` — safe-deploy procedure followed in Phase E step 21
- `checklists/post-deploy-production-verification-checklist.md` — production verification followed in Phase E step 22
- `docs/deployment/cloudflare-pages-nextjs-static-export.md` — Phase 0 foundation standard invoked in Phase B step 7 for Next.js + Cloudflare Pages static export builds
- `docs/design/required-website-design-skills.md` — canonical design skill routing standard invoked in Phase B step 12b (scaffold) and Phase C step 15c (rule confirmation); applies to every client engagement
- `.claude/skills/frontend-design-engineer/SKILL.md`, `.claude/skills/emil-kowalski-motion-design/SKILL.md`, `.claude/skills/impeccable-ui-polish/SKILL.md`, `.claude/skills/ux-ui-conversion-design/SKILL.md`, `.claude/skills/seo-aeo-llm-page-architecture/SKILL.md` — canonical design skill files copied into every new client repo during Phase B step 12b

---

Site OS Master — New-Client Startup Workflow v1.0
Status: Tier R3-4 Final Readiness Patch — implemented 2026-05-17
Reason for creation: provide a standalone universal client-onboarding workflow orchestrator that references the canonical intake, brief, mode-selection, scaffolding, policy, build, and deploy docs without duplicating them
