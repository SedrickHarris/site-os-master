# Claude Code Skills Install Log

This file is the authoritative record of every Claude Code skill or external repository that has been evaluated, installed, promoted, demoted, or removed inside the Site OS Master project.

Every entry must be added at the time of the action, not reconstructed later.

## How to Use This Log

- One entry per action (evaluation, install, status change, removal).
- Newest entry at the top.
- Use absolute dates in `YYYY-MM-DD` format.
- Do not delete past entries. To correct a past entry, add a new entry that supersedes it and reference the original date.
- Do not mark anything as production-ready unless approved by the project owner and reflected in `approved-skills.md`.

## Required Fields per Entry

Each entry must include:

- **Date:** `YYYY-MM-DD`
- **Skill / Repo Name:** Exact name as published.
- **Source / URL:** Where it came from (repo URL or registry name). Use `N/A` if not yet decided.
- **Install Method:** e.g., `not installed`, `documentation only`, `Claude Code plugin install`, `cloned to sandbox branch`, `referenced externally`.
- **Status:** One of `evaluating`, `approved-production`, `approved-controlled-testing`, `approved-scoped`, `experimental`, `optional`, `deferred`, `rejected`, `removed`.
- **Scope:** Where it is allowed to operate (e.g., "design workflows only", "planning only", "sandbox only", "documentation only").
- **Notes:** Why this action was taken. Reference related files (`approved-skills.md`, `experimental-skills.md`, `CLAUDE.md`).
- **Validation Result:** One of `not yet validated`, `validation pending`, `passed`, `passed with conditions`, `failed`, `not applicable`. Include a short reason.
- **Recorded by:** Operator or approver name.

## Entry Template

Copy this template when adding a new entry. Do not edit prior entries.

```
### YYYY-MM-DD — <Skill / Repo Name>

- Source / URL: <url-or-N/A>
- Install Method: <method>
- Status: <status>
- Scope: <scope>
- Notes: <reason for this action, links to relevant docs>
- Validation Result: <result + short reason>
- Recorded by: <name>
```

---

## Log Entries

### 2026-05-13 — Obsidian Skills and Ruflo / RooFlow removed from active integration plan

- Classification: Skills documentation status change (no install action)
- Source / URL: Not applicable
- Install Method: Not applicable — neither skill is or was installed in this repository or on this machine
- Status: Not Planned — Removed from Active Scope (both skills)
- Scope: Both skills moved out of the active Site OS Master integration plan.
- Notes:
  - **Obsidian Skills:** Only useful if Site OS Master or project notes are connected to Obsidian. They are not currently connected and there is no near-term plan to integrate them. Removed from active scope. Reconsideration trigger: if and when Obsidian becomes part of the project's note-taking or knowledge-management workflow.
  - **Ruflo / RooFlow:** Advanced multi-agent orchestration. Higher risk, significant additional moving parts (agent roles, hand-offs, shared state), and not needed before website builds. Removed from active scope. Reconsideration trigger: only if the original re-evaluation conditions documented in `experimental-skills.md` are all met with a written plan presented to the project owner.
  - Neither skill is or was installed; this is a documentation-only status change.
  - `experimental-skills.md` updated: a new "Not Planned — Removed from Active Scope" tier was added to the tier list, and sections 2 (Obsidian Skills) and 3 (Ruflo / RooFlow) were updated to that status. Historical fields are preserved verbatim under "(historical)" labels per log discipline.
  - `README.md` and `approved-skills.md` reviewed: no references to either skill were present, so no edits were needed there.
  - Supersedes the earlier 2026-05-13 placeholder entries for both skills (Obsidian Skills as `optional`, Ruflo / RooFlow as `deferred`). Those entries are preserved below per log discipline.
- Validation Result: Not applicable — documentation status change only. No functional install or runtime validation performed.
- Recorded by: project owner

### 2026-05-13 — Open Design external-tool structure created (supersedes the earlier 2026-05-13 manual-install-pending entry)

- Classification: External Design and Visual Artifact Tool
- Source / URL: https://github.com/nexu-io/open-design.git
- Install Method: Documentation and folder-structure only. No clone, no install, no submodule add, no copy of repo files.
- Status: Verified external tool. Not installed. Documentation and future submodule placeholder created.
- Scope: Website/design workflows only (when eventually used).
- Purpose: Prepare a controlled documentation and future-tools structure for Open Design without installing, cloning, or copying the Open Design repo.
- Files created in this action:
  - `docs/claude-code-skills/open-design.md` — tool identity, approved-use, not-approved-for, build-time usage rules, future integration path, current decision.
  - `tools/README.md` — purpose and hard rules for the `tools/` folder.
  - `tools/open-design/README.md` — placeholder for the future Open Design submodule path, including the canonical `git submodule add` command that is **not** yet authorized to run.
- Notes:
  - Repo verified: https://github.com/nexu-io/open-design.git
  - Not installed on Desktop.
  - Not cloned into Site OS Master.
  - Not added as a submodule yet.
  - Future preferred integration path: `tools/open-design` as a Git submodule (only after explicit approval and a new install-log entry recording the submodule action).
  - Current use: documentation reference only.
  - The earlier reclassification of Open Design as "External Design and Visual Artifact Tool" supersedes its earlier "Claude Code Design and Visual Artifact Skill" classification. Open Design is a standalone application with optional MCP bridge — it is not a Claude Code skill.
  - MCP bridge integration remains pending evaluation and is not part of this action.
  - Supersedes the earlier 2026-05-13 manual-install-pending entry below; that entry is preserved per log discipline.
- Validation Result: Documentation and folder structure created and verified. No functional install or runtime validation performed (nothing was installed). Future submodule install will require its own log entry.
- Recorded by: project owner

### 2026-05-13 — Open Design (manual-install repo verified; supersedes the earlier 2026-05-13 evaluation entry)

- Classification: Claude Code Design and Visual Artifact Skill
- Source / URL: https://github.com/nexu-io/open-design.git
- Install Method: Manual GitHub repo install (NOT Claude plugin marketplace install). Recommended install scope: user/dev-folder level, NOT inside the Site OS Master repo.
- Status: Verified repo found. Pending manual install.
- Scope: Controlled website/design workflows only.
- Purpose: Track Open Design as a planned design/artifact support repo for Site OS Master website build workflows.
- Notes:
  - Repo verified: https://github.com/nexu-io/open-design.git
  - Open Design is a local-first open-source alternative to Claude Design.
  - Includes design systems, design templates, prompt templates, skills, specs, and templates.
  - May support website section layouts, landing page layouts, UI design direction, visual artifact polish, client-facing design concepts, and design system inspiration.
  - Must not be used for prompt validation, workflow routing, PASS/FAIL decisions, benchmark scoring, patch validation logic, or prompt identity decisions.
  - Must not override Site OS Master rules, `CLAUDE.md` rules, or validated workflow logic.
  - Install method is manual GitHub repo install, not Claude plugin marketplace install.
  - Recommended install scope: user/dev-folder level, not Site OS Master repo scope.
  - Supersedes the earlier 2026-05-13 evaluation entry below, which recorded the source URL as "to be confirmed". That entry is preserved per log discipline.
- Validation Result: Repo existence/identity verification step complete. Functional design-workflow validation pending — to be performed in a controlled session after manual install.
- Recorded by: project owner

### 2026-05-13 — Open Design (evaluation entry; supersedes the earlier 2026-05-13 placeholder entry for the same skill)

- Classification: Claude Code Design and Visual Artifact Skill
- Source / URL: To be confirmed (canonical Open Design source URL not yet recorded)
- Install Method: Not installed yet. Planned install scope: user scope.
- Status: Evaluating before install
- Scope: Controlled website/design workflows only.
- Purpose: Track Open Design as a planned Claude Code design support skill for Site OS Master website build workflows.
- Notes:
  - May support website section layouts, landing page layouts, UI design direction, visual artifact polish, client-facing design concepts, and design system inspiration.
  - Must not be used for prompt validation, workflow routing, PASS/FAIL decisions, benchmark scoring, patch validation logic, or prompt identity decisions.
  - Must not override Site OS Master rules, `CLAUDE.md` rules, or validated workflow logic.
  - Should support website build outputs only after Site OS Master defines the page strategy, SEO/AEO requirements, content structure, and conversion goals.
  - Install scope should be user scope when installed.
  - Supersedes the earlier 2026-05-13 placeholder entry below, which recorded Open Design as `approved-scoped` at the time the skills documentation layer was scaffolded. That entry is preserved per log discipline.
  - `approved-skills.md` currently lists Open Design under "Approved (Scoped)". That classification was written at scaffolding time and is now ahead of the actual evaluation state recorded here. Reconcile in a separate update if needed before any install action.
- Validation Result: Not yet validated. Install action and any controlled design-workflow session are deferred until this evaluation completes.
- Recorded by: project owner

### 2026-05-13 — Superpowers installed (supersedes the earlier 2026-05-13 evaluation entry)

- Classification: Claude Code Workflow Discipline Skill
- Source / URL: `obra/superpowers-marketplace` (Claude Code marketplace shorthand; canonical full URL not yet recorded in this log)
- Install Method: `/plugin marketplace add obra/superpowers-marketplace` → `/plugin install superpowers@superpowers-marketplace` → `/reload-plugins`
- Status: Installed for user scope. Approved for controlled Site OS Master planning and workflow discipline support only.
- Scope: User scope. Controlled use for planning, spec creation, task breakdown, review discipline, validation preparation, and commit readiness only.
- Notes:
  - Installed successfully in Claude Code.
  - Scope: user scope.
  - May support planning, spec creation, task breakdown, review discipline, validation preparation, and commit readiness.
  - Must not override Site OS Master routing, prompt identity, validation rules, PASS/FAIL decisions, benchmark scoring, or patch validation logic.
  - Must not edit prompt files unless explicitly instructed.
  - Plugin reload required after install. `/reload-plugins` completed: 2 plugins (ui-ux-pro-max + superpowers), 0 skills, 6 agents, **1 hook installed by Superpowers**, 0 plugin MCP servers, 0 plugin LSP servers.
  - Hook awareness: Superpowers installed 1 hook. Hooks execute through the Claude Code harness automatically and are not gated by Site OS Master rules at runtime. Review the hook's behavior in a controlled session before relying on it in production workflows; if it conflicts with Site OS Master discipline, disable it via `settings.json` per `update-config` guidance.
  - Skill scope awareness: the bundled `superpowers:using-superpowers` skill describes a posture of "requiring Skill tool invocation before ANY response including clarifying questions." Per `CLAUDE.md` and `docs/claude-code-skills/site-os-usage-rules.md`, Site OS Master rules take precedence when a skill's guidance conflicts with them. Superpowers skills are advisory in this repository, not authoritative.
  - Supersedes the earlier 2026-05-13 evaluation entry for the same skill; that entry is preserved below per log discipline.
  - `approved-skills.md` lists Superpowers under "Approved (Controlled Testing)". This install-log entry is consistent with that tier and does not promote Superpowers to Production.
- Validation Result: Install succeeded. Functional/discipline validation pending — to be performed in a controlled planning or review session before any production-impacting use. Hook behavior validation is part of that pending validation.
- Recorded by: project owner

### 2026-05-13 — Superpowers (evaluation entry; supersedes the earlier 2026-05-13 placeholder entry for the same skill)

- Classification: Claude Code Workflow Discipline Skill
- Source / URL: To be confirmed (canonical Superpowers source URL not yet recorded)
- Install Method: Not installed yet. Planned install scope: user scope.
- Status: Evaluating before install
- Scope: Controlled planning, spec creation, task breakdown, review discipline, validation preparation, and commit-readiness support.
- Purpose: Track Superpowers as a planned Claude Code workflow support skill for Site OS Master.
- Notes:
  - May support planning, brainstorming, spec creation, task execution planning, branch review, and commit preparation.
  - Must not override Site OS Master routing, prompt identity, validation rules, PASS/FAIL decisions, benchmark scoring, or patch validation logic.
  - Must not edit prompt files unless explicitly instructed.
  - Must not make broad refactors.
  - Must preserve `CLAUDE.md` rules and Site OS Master validation discipline.
  - Install scope should be user scope when installed.
  - Supersedes the earlier 2026-05-13 placeholder entry below, which recorded Superpowers as `approved-controlled-testing` at the time the skills documentation layer was scaffolded. That entry is preserved per log discipline.
  - `approved-skills.md` currently lists Superpowers under "Approved (Controlled Testing)". That classification was written at scaffolding time and is now ahead of the actual evaluation state recorded here. Reconcile in a separate update if needed before any install action.
- Validation Result: Not yet validated. Install action and any controlled-testing session are deferred until this evaluation completes.
- Recorded by: project owner

### 2026-05-13 — ui-ux-pro-max installed (supersedes the earlier 2026-05-13 evaluating entry)

- Source / URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (marketplace shorthand: `nextlevelbuilder/ui-ux-pro-max-skill`)
- Install Method: `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` → `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill` → `/reload-plugins`. Earlier attempt with the full HTTPS URL form of `marketplace add` failed with "Malformed input to a URL function"; the marketplace shorthand form succeeded.
- Status: Installed for user scope. Approved for controlled website/design workflow testing only.
- Scope: User scope. Controlled testing inside website and design workflows only — website builds, landing pages, UI sections, dashboards, design systems, typography, color palettes, and layout strategy.
- Notes:
  - Installed successfully in Claude Code.
  - Scope: user scope.
  - Must not be used for prompt validation, workflow routing, PASS/FAIL decisions, benchmark scoring, or patch validation logic.
  - May be used for website builds, landing pages, UI sections, dashboards, design systems, typography, color palettes, and layout strategy.
  - Plugin reload required after install. `/reload-plugins` completed: 1 plugin, 0 skills, 6 agents, 0 hooks, 0 plugin MCP servers, 0 plugin LSP servers.
  - Supersedes the earlier 2026-05-13 `evaluating` entry for the same plugin; that entry is preserved below per log discipline.
  - Not yet promoted to `approved-skills.md`. Promotion requires a clean controlled-testing pass per `site-os-usage-rules.md`.
- Validation Result: Install succeeded. Functional/design-workflow validation pending — to be performed in a controlled session before any production use.
- Recorded by: project owner

### 2026-05-13 — ui-ux-pro-max (nextlevelbuilder/ui-ux-pro-max-skill)

- Source / URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
- Install Method: not installed yet — planned via `/plugin marketplace add` (HTTPS) followed by `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`
- Status: evaluating
- Scope: not yet defined; candidate scope is UI/UX and design assistance, which may overlap with the existing "Open Design" scoped approval in `approved-skills.md`
- Notes: Initial `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` (SSH shorthand) failed with a Host key verification error because github.com was not in the local `known_hosts`. Switching to the HTTPS URL form to avoid SSH setup. Repository existence and contents have not yet been independently verified. Plugin is **not** listed in `approved-skills.md` or `experimental-skills.md`; this entry establishes the evaluation record before any install action. Per `site-os-usage-rules.md`, the plugin must not edit prompts, workflow tests, routing, CLAUDE.md, or files in `docs/claude-code-skills/` while in `evaluating` status.
- Validation Result: validation pending — to be performed after install in a controlled session; outcome will determine promotion to `approved-skills.md` (likely scoped, possibly merged with Open Design) or move to `experimental-skills.md`.
- Recorded by: project owner

### 2026-05-13 — Claude Code Skills documentation layer initialized

- Source / URL: N/A (internal documentation)
- Install Method: documentation only
- Status: not applicable (this is the log itself)
- Scope: `docs/claude-code-skills/`
- Notes: Created `README.md`, `approved-skills.md`, `experimental-skills.md`, `install-log.md`, and `site-os-usage-rules.md`. No external skill has been installed or activated. No prompt files, workflow test files, routing, or CLAUDE.md were changed in this step.
- Validation Result: not applicable — documentation scaffolding only.
- Recorded by: project owner

### 2026-05-13 — Karpathy-style Claude Code rules

- Source / URL: N/A (referenced as a posture, not installed as a package)
- Install Method: not installed (operating posture only)
- Status: approved-production
- Scope: general Claude Code operating discipline across the repo
- Notes: Listed in `approved-skills.md` because it aligns with the Site OS Master Claude Code Rules section of `CLAUDE.md`. No code or files added; no behavior change required beyond what `CLAUDE.md` already enforces.
- Validation Result: not applicable — posture, not an installed package.
- Recorded by: project owner

### 2026-05-13 — Superpowers

- Source / URL: N/A (not yet installed)
- Install Method: not installed
- Status: approved-controlled-testing
- Scope: planning, repo inspection, review assistance, editing assistance — supervised sessions only
- Notes: Listed in `approved-skills.md` for controlled testing. Must not rename prompts, alter routing, or mark anything PASS without standard validation evidence. Conditions of use defined in `approved-skills.md` and `site-os-usage-rules.md`.
- Validation Result: validation pending — to be performed in first controlled session.
- Recorded by: project owner

### 2026-05-13 — Open Design

- Source / URL: N/A (not yet installed)
- Install Method: not installed
- Status: approved-scoped
- Scope: website and design workflows only (page design, layout, components, visual hierarchy review)
- Notes: Listed in `approved-skills.md` under scoped approval. Must not touch `prompts/`, workflow tests, routing, CLAUDE.md, or `docs/claude-code-skills/`.
- Validation Result: validation pending — to be performed during first design-workflow use.
- Recorded by: project owner

### 2026-05-13 — Everything Claude Code

- Source / URL: N/A
- Install Method: not installed
- Status: experimental
- Scope: reference reading and isolated sandbox techniques only
- Notes: Listed in `experimental-skills.md`. Individual techniques may be proposed for promotion one at a time.
- Validation Result: not yet validated.
- Recorded by: project owner

### 2026-05-13 — Obsidian Skills

- Source / URL: N/A
- Install Method: not installed
- Status: optional
- Scope: personal notes and planning outside the repo
- Notes: Listed in `experimental-skills.md`. Not expected to be promoted to production.
- Validation Result: not applicable.
- Recorded by: project owner

### 2026-05-13 — Ruflo / RooFlow

- Source / URL: N/A
- Install Method: not installed
- Status: deferred
- Scope: none in this repository
- Notes: Listed in `experimental-skills.md`. Reconsideration requires the conditions stated there to be met.
- Validation Result: not applicable — deferred.
- Recorded by: project owner
