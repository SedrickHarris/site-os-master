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
