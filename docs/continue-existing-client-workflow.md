# Continue-Existing-Client Workflow

A standalone workflow orchestrator for resuming work on an existing, paused, partially built, or already deployed Site OS Master client website repo. Complement to `docs/new-client-startup-workflow.md`. References the canonical intake, scaffolding, policy, build, deploy, and audit docs without duplicating them. Applies regardless of stack, vertical, workflow mode, or time elapsed since the last session.

## Purpose

Orchestrate every session that resumes work on an existing client repo, so the operator — returning to their own work after hours, days, weeks, or months, or picking up another operator's paused build — re-establishes context, re-invokes session-scoped policies, picks scope, and proceeds with strict gate discipline. This doc is the universal re-entry point that pairs with `docs/new-client-startup-workflow.md`: every client engagement uses the new-client doc once and this doc every session after.

## When to Use

- A returning operator resumes their own work on a client repo after a break
- A different operator picks up a paused build
- A client repo has been deployed and is now being extended (Tier N+1)
- A carry-forward item from a prior session is being addressed
- A content patch, schema patch, or one-off fix is being applied to an existing repo
- A redeploy is being performed (with or without source changes)
- A QA report's CONDITIONALLY APPROVED carry-forward items are being resolved
- Re-entering a repo whose state is uncertain (operator changed, machine changed, time elapsed)

## What This Doc Is and Is Not

**Is:**

- A resume/re-entry workflow (audit → reconstruct → policy → scope → build/deploy → handoff)
- The complement to `docs/new-client-startup-workflow.md` — every client engagement uses the new-client doc once and this doc every session after
- A reference orchestrator that points at canonical existing docs

**Is not:**

- A new-client startup workflow — see `docs/new-client-startup-workflow.md`
- A page-build workflow — see `docs/page-build-workflow.md`
- A replacement for any existing doc (intake gate, scaffold doc, R2/R3-N policies, deploy/post-deploy checklists)
- A stack tutorial — resume is stack-agnostic; deploy steps reference the per-stack subsections in `checklists/deploy-workflow-checklist.md`

## How This Differs From docs/new-client-startup-workflow.md

R3-5 is the resume complement to R3-4. Many steps from R3-4 are skipped on resume because they were completed during the first session. The table below summarizes the difference:

| Dimension | New-Client Startup (R3-4) | Continue-Existing-Client (R3-5) |
|-----------|---------------------------|----------------------------------|
| Starting state | No repo, no intake, no scaffold | Repo exists, intake cleared, scaffold in place, commits in history, possibly deployed |
| Client Intake Gate | Phase A — run it | Skipped; confirm previously cleared, only re-run if scope materially changes |
| Project brief | Phase A — fill it out | Skipped; re-read existing brief; flag any updates needed |
| Project type | Phase A — select it | Skipped; already known; confirm still correct |
| Workflow mode | Phase A — choose per page-type plan | Re-affirm or update per current session scope |
| Stack decision | Phase B — decide | Skipped; already decided |
| Repo creation | Phase B — create | Skipped; exists |
| `git init` and remote | Phase B — init | Skipped; done |
| `docs/site-os/{...}` scaffold | Phase B — scaffold | Skipped; re-read instead in Phase B Context Reconstruction |
| Standing approval | Phase C — invoke once | Phase C — re-invoke per session |
| Strategy prompts 01–05 | Phase D — run per workflow mode | Phase E — may be skipped or compressed if prior outputs cover the scope |
| Carry-forward | Phase F — initial set forms | Phase F — updates an evolving set; explicitly documents handoff for next session |

R3-5 adds two transversal sections that do not exist in R3-4: Production Drift Detection and Cross-Repo Consistency Check. Both apply specifically to resume sessions where state may have drifted since the last session.

## Phase A — Re-Entry Audit

The audit is short, mechanical, and unambiguous. Each step has a single command or a single yes/no answer.

### 1. Confirm working directory

Confirm the current working directory matches the intended client repo. Use the chained-`cd` pattern per `docs/file-scope-and-git-safety-policy.md` §3 because the Windows shell harness resets cwd between commands.

### 2. Run `git status`

Confirm clean tree or surface every unexpected modified or untracked path. Reference `docs/file-scope-and-git-safety-policy.md` §9 Dirty Working Tree Rules: never start a new phase on top of unrelated dirty changes — finish or stash them first; never stash and silently discard.

### 3. Confirm current HEAD

Run `git rev-parse --short HEAD`. The result should match the last known checkpoint from the most recent `docs/site-os/changelog/` entry or session handoff note. If it does not, pause and surface the discrepancy.

### 4. Confirm recent commits

Run `git log --oneline -10`. The output should match the expected build history. If recent commits look unexpected, the repo may have moved since the last session — pause and reconcile before proceeding.

### 5. Confirm branch and remote tracking

Run `git branch -vv`. Confirm the current branch (typically `main`), its remote (typically `origin`), and the tracking relationship.

### 6. Confirm `origin/main` sync

Confirm local `main` is synchronized with `origin/main`. Surface any divergence (ahead/behind) before any new work. Resolve via the simplest safe operation; never force-push to `main` to "clean up" resume-time confusion per `docs/file-scope-and-git-safety-policy.md` §8.

### 7. Confirm production state if production exists

If the client repo has a production deployment, confirm the deployed Worker Version ID (or platform-equivalent deployment ID) and the source commit it ships match the last recorded entry in `docs/site-os/changelog/`. Detection procedure is in the Production Drift Detection section after Phase F.

## Phase B — Context Reconstruction

### 8. Read the most recent `docs/site-os/changelog/` entry

The most recent `docs/site-os/changelog/<date>-<tier>.md` file is the audit trail of the last completed work. Read its scope, commits, validation results, deploy state if applicable, and carry-forward items.

### 9. Read `docs/site-os/inputs/page-list.md`

Confirm scope hasn't drifted. Cross-check the page-list against actual app routes — if a page exists in the app but not the page-list, or vice versa, surface the discrepancy before scoping the session's work.

### 10. Review `docs/site-os/qa/` for the most recent QA reports

Surface CONDITIONALLY APPROVED carry-forward items, flagged TODOs, and any production-fix decisions that were deferred to a later session.

### 11. Review `docs/site-os/outputs/` for in-progress prompt outputs

Read recent Prompt 01–05 outputs, build briefs, and any in-progress strategy artifacts. These determine whether strategy prompts can be skipped or compressed in Phase E.

### 12. Identify carry-forward items

Enumerate:

- APPROVED PLACEHOLDER intake fields awaiting CONFIRMED transition
- `// TODO` and `// FLAG` comments in code marked from prior sessions
- FLAGGED items from prior prompt outputs (per the Prompts 01–05 v2 carry-forward rule documented in `docs/core-mode-workflow-map.md`)
- Unresolved launch blockers from `efficiency-governor/client-intake-gate.md` § Launch Blocker Reference

### 13. Identify Site OS Master policy updates since last session

Read `docs/prompt-master-status.md` R-N appendices dated after the last session's date. New R-N patches may change deploy rules, file-scope rules, or no-fake-data rules in ways that affect the resume operator's expectations. Apply any newly landed policy in this session.

## Phase C — Policy Re-Invocation

### 14. Re-invoke standing approval per session

Per `docs/standing-approval-rule-template.md` § Session-Scoped Nature, standing approval does not persist across sessions or Claude conversations. Paste the copy-paste-ready language from § Copy-Paste-Ready Standing Approval Language at the start of the session.

### 15. Confirm file-scope and Git safety discipline

`docs/file-scope-and-git-safety-policy.md` applies on every session, including resumes. Highlights: chained-`cd` on Windows, explicit per-file `git add`, never `git add .` or `git add -A`, never force-push to `main` or `master`. The §12 Copy-Paste-Ready Verification Commands list provides paste-ready status, scope, post-stage, post-commit, and unaffected-repo checks.

### 16. Confirm no-fake-data discipline

`docs/no-fake-data-policy.md` applies on every session, including resumes. The 12 categories, schema-matches-visible-content rule, and the Copy-Paste-Ready Review Checklist are appropriate for a resume-time sanity pass before new code or copy lands.

## Phase D — Scope and Tier Selection

### 17. Pick the work mode for this session

Common resume work modes:

- Resume an unfinished tier (pick up Gate 1/2/3 mid-tier)
- Start a new tier per the build sequence
- Complete a paused production fix
- Address a carry-forward item from a prior QA report
- Roll out a content patch (small scope, one or two files)
- Run a deploy or redeploy (with or without source changes)
- Resolve a placeholder→CONFIRMED transition for an APPROVED PLACEHOLDER intake field

### 18. Declare exact file scope for the first phase of work

File-scope discipline applies regardless of work mode per `docs/file-scope-and-git-safety-policy.md` §1 Core File-Scope Principles. Each phase declares an exact file list before any edit begins; edits stay inside the declared file list; new file targets emerging mid-phase pause for explicit re-approval.

## Phase E — Strategy / Build / Deploy

Phase E applies the same build discipline as `docs/new-client-startup-workflow.md` Phase D and Phase E, with the difference that strategy prompts 01–05 may be skipped or compressed if prior outputs in `docs/site-os/outputs/` already cover the scope. Re-run only what the current session requires.

### 19. For each page or tier in scope, run Prompt 06 with strict Gate 1 → Gate 2 → Gate 3

Invoke `prompts/06-claude-code-build-prompt.md`. Gate 1 inspects; Gate 2 plans with declared file scope; Gate 3 implements only the approved files. Gate discipline is a hard contract regardless of how many prior sessions have run.

### 20. Run Prompt 07 QA after each Gate 3

Invoke `prompts/07-qa-review-prompt.md`. Outcomes: APPROVED, CONDITIONALLY APPROVED (when carry-forward items remain), or NOT APPROVED.

### 21. Stage explicitly, commit, push

Stage with explicit per-file `git add <path>` per `docs/file-scope-and-git-safety-policy.md` §5. Verify staged scope with `git diff --cached --name-only` before commit. Use a conventional-commits prefix matching the surrounding repo style. Push with `git push origin main` and confirm `git status` is clean and HEAD matches the new commit after push completes (§6 and §7 of the policy).

### 22. If deploying, follow the deploy and post-deploy checklists

Follow `checklists/deploy-workflow-checklist.md` then immediately run `checklists/post-deploy-production-verification-checklist.md`. Resume-specific reminder per `checklists/deploy-workflow-checklist.md` §7: "If returning to a paused session, do NOT assume artifacts are fresh — always rebuild." This rule is the canonical anti-stale-artifact protection for resume sessions and exists because of the 702Xchange Tier 6A stale-artifact incident.

## Phase F — Carry-Forward Update and Handoff

### 23. Create or update a `docs/site-os/changelog/` entry

Add a new `docs/site-os/changelog/<date>-<tier-or-patch>.md` entry summarizing this session's scope, commits, validation results, deploy state if applicable, and any follow-up items. Changelog cadence is per tier or per launch event per `docs/client-repo-doc-structure.md`.

### 24. Surface any newly discovered carry-forward items

Items not in the prior changelog but uncovered during this session become carry-forward items for the next session.

### 25. Document current HEAD at end of session

Record the short hash and commit subject in the changelog entry, so the next session's Phase A step 3 can confirm cleanly.

### 26. Document production Worker Version ID or deployment ID if deployed

If this session included a deploy, record the new Worker Version ID (or platform-equivalent deployment ID), the previous Worker Version ID, and the verification status per `checklists/post-deploy-production-verification-checklist.md` §9 and §11.

### 27. Recommend next-session entry point

Note the natural starting tier or scope for the next session, with any blockers or prerequisites surfaced. This becomes the next session's first Phase D decision input.

## Production Drift Detection

When a client repo has been deployed and a resume session is about to start, confirm production still reflects the expected source commit. Three short checks:

- Confirm the recorded Worker Version ID in the most recent `docs/site-os/changelog/` entry matches the current production Worker Version ID
- Confirm the recorded source commit hash matches the current `git rev-parse --short HEAD` (or a known-newer commit) — surface any divergence
- Spot-check 1–2 user-visible strings from the most recent commits against production HTML per `checklists/post-deploy-production-verification-checklist.md` §4 CTA Wording Spot-Checks

If any of the three checks fail, production is stale or has drifted. Pause and follow `checklists/deploy-workflow-checklist.md` to rebuild and redeploy before any new source work begins.

## Cross-Repo Consistency Check

When a resume session is about to start, confirm both Site OS Master and the client repo are at expected HEADs. Use the unaffected-repo verification commands from `docs/file-scope-and-git-safety-policy.md` §12 (Unaffected-repo verification subsection): `cd "<other-repo>"; git status` and `cd "<other-repo>"; git rev-parse --short HEAD`.

If either HEAD is unexpected, surface the divergence before starting work. If Site OS Master has R-N patches landed since the last session, apply the Phase B step 13 review (read newer appendices in `docs/prompt-master-status.md`) so the resume operator's policy expectations stay current.

## Common Pitfalls

Observed in real Site OS Master resume scenarios:

- Assuming standing approval persists across sessions (it does not — re-invoke per session)
- Deploying without rebuilding after a long pause (per `checklists/deploy-workflow-checklist.md` §7, resume sessions must always rebuild)
- Assuming the page-list is still current without re-reading it
- Assuming production HTML still matches the current source HEAD without spot-checking
- Treating prior CONDITIONALLY APPROVED QA items as APPROVED on resume without resolving carry-forwards
- Operating in the wrong repo (Site OS Master vs. client repo) because cwd reset between commands on Windows
- Pushing without re-syncing `origin/main` first when the remote may have moved
- Missing Site OS Master policy updates that landed in R-N patches since the last session (for example, missing a new no-fake-data rule that landed after the last build session)

## Anti-Patterns to Avoid

- Re-scaffolding `docs/site-os/{inputs, outputs, qa, changelog}` when the scaffold already exists (risks overwriting `.gitkeep` placeholders or real entries)
- Re-running the Client Intake Gate from scratch when it was previously cleared — confirm it remains cleared; re-run only if scope materially changes
- Blowing away dirty working-tree state without surfacing it (per `docs/file-scope-and-git-safety-policy.md` §9, surface every modified/untracked path before any action)
- Creating a duplicate `docs/site-os/` structure when one already exists
- Pushing without re-syncing `origin/main` first (risks a non-fast-forward or unintended merge commit)
- Force-pushing to `main` or `master` to "clean up" resume-time confusion (never; per `docs/file-scope-and-git-safety-policy.md` §8)
- Deploying a resume session's first commit without running `cf:build` first (per `checklists/deploy-workflow-checklist.md` §6, `cf:deploy` alone is unsafe)
- Skipping the Production Drift Detection step because "the last deploy worked"

## Stop Conditions

Pause and surface to the project owner if any of these are true:

- Working tree is dirty in unexpected ways at session start and the dirty state does not match the last documented in-progress state in `docs/site-os/changelog/`
- Production deployment ID does not match the last recorded changelog entry
- Production HTML spot-check shows old or pre-expected wording (stale artifact deployed)
- Site OS Master has unread R-N patches since the last session that may materially change resume policy
- Carry-forward TODOs from prior sessions are not surfaced or resolved before a new tier starts
- The page-list is out of date relative to actual app routes
- Standing approval has not been re-invoked for this session
- Cross-repo state is inconsistent (one repo at expected HEAD, the other not)
- The deploy command sequence is about to skip `cf:build` or the equivalent rebuild step

## Copy-Paste-Ready Re-Entry Session Kickoff Prompt Template

Paste the following template into the first session of any resume engagement. Fill in the bracketed `<ANGLE-BRACKET-PLACEHOLDER>` values. The template is a starting point, not a contract — the body of this doc remains authoritative.

```
Re-entry session kickoff — <CLIENT NAME>

Site OS Master repo: C:\Users\Welcome\Desktop\site-os-master
Client repo: C:\Users\Welcome\Desktop\client-sites\<client-slug>

Phase A re-entry audit (please run and report):
- Current branch and origin tracking status
- Current HEAD: <expected short hash from last changelog entry>
- Last commit subject: <expected commit subject>
- Working tree status: <expected clean / known dirty state>
- Most recent docs/site-os/changelog/ entry: <filename>
- Most recent docs/site-os/qa/ entry: <filename or none>
- Production deployment (if applicable):
  - Recorded Worker Version ID: <id from last changelog>
  - Recorded source commit: <short hash from last changelog>

Carry-forward items to address this session (from prior changelog or QA report):
- <item 1>
- <item 2>
- <item 3>

Site OS Master policy updates since last session (per docs/prompt-master-status.md):
- <appendix name or none new>

This session's work mode: <resume tier / new tier / production fix / carry-forward / content patch / deploy>
This session's declared file scope (Phase D step 18): <exact file paths>

I am re-invoking the standing approval rule per docs/standing-approval-rule-template.md
§ Copy-Paste-Ready Standing Approval Language for this session.

File-scope and Git safety discipline applies per docs/file-scope-and-git-safety-policy.md.
No-fake-data discipline applies per docs/no-fake-data-policy.md.

Please run Phase A audit only. Do not begin Phase E work until I approve.
```

## Working Example: 702Xchange

The 702Xchange client repo at `C:\Users\Welcome\Desktop\client-sites\702xchange-site` is the reference implementation of this workflow. **As of 2026-05-17, illustrative only:**

- HEAD: `b50770d` — `feat(why-use): update first benefit tile wording to Las Vegas Valley`
- Most recent `docs/site-os/changelog/` entry: `docs/site-os/changelog/2026-05-16-tier-1-through-4-buildout-summary.md`
- Production Worker Version: `aa3d92af-4f5d-4f69-a540-ff9d322c76cd` (serving `https://702xchange.com`)
- Recent Tier 6A through Tier 7A-1 commit sequence visible in `git log --oneline -10`

Each value above will drift over time as the build progresses. The workflow steps in this doc never depend on those exact values; they are recorded here only as a concrete illustration of what a resume operator would expect to see on a real client repo today.

702Xchange-specific decisions are illustrative only — other clients will have different stacks, project types, launch scopes, and copy decisions. Specifically, do not generalize: the Next.js 14 + OpenNext + Cloudflare Workers stack choice, the directory / marketplace project type, the 8-category MVP launch set, the ≥5 listings per category and ≥8 listings per location publication thresholds, the 7 primary location set, the GoHighLevel form vendor, the `LISTINGS = []` MVP seed pattern in `lib/data/listings.ts`, the DIRECTORY_CONFIG migration scope, or the "Greater Las Vegas Valley" market wording. The resume workflow itself is universal; the values are not.

## Related Files

- `docs/new-client-startup-workflow.md` — first-time onboarding workflow; R3-5 is the resume complement that runs every session after R3-4 has run once
- `README.md` — top-level Site OS Master overview, folder structure, deploy and client handoff discipline
- `CLAUDE.md` — primary behavioral contract; working rules; content rules; competitive standards
- `efficiency-governor/client-intake-gate.md` — intake gate (cleared during R3-4 Phase A; resume sessions confirm it remains cleared, only re-run if scope materially changes)
- `docs/site-os-prompt-operating-guide.md` — workflow mode reference (may differ per session if current scope demands a different mode)
- `docs/page-build-workflow.md` — page-level workflow invoked per page in Phase E
- `docs/client-repo-doc-structure.md` — defines `docs/site-os/{inputs, outputs, qa, changelog}` which Phase B re-reads
- `docs/standing-approval-rule-template.md` — session-scoped rule re-invoked in Phase C
- `docs/file-scope-and-git-safety-policy.md` — provides Phase A audit commands (§4, §12) and Phase E staging/commit/push discipline (§5–§7)
- `docs/no-fake-data-policy.md` — universal policy applied throughout the session
- `checklists/deploy-workflow-checklist.md` — required when Phase E includes a deploy; resume-specific §7 rule applies
- `checklists/post-deploy-production-verification-checklist.md` — required after every deploy and referenced by Phase A step 7 and the Production Drift Detection section

---

Site OS Master — Continue-Existing-Client Workflow v1.0
Status: Tier R3-5 Final Readiness Patch — implemented 2026-05-17
Reason for creation: provide a standalone universal resume/re-entry workflow orchestrator that pairs with docs/new-client-startup-workflow.md so every session after the first uses the same predictable audit, reconstruct, policy re-invocation, scope, build/deploy, and handoff sequence
