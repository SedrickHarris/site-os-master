# Approved Claude Code Skills

This file lists Claude Code skills and external repositories that are approved for use inside the Site OS Master project.

A skill being listed here means it is approved for the stated scope only. It does not grant blanket permission to change Site OS Master prompts, routing, validation, or PASS/FAIL rules.

All approvals are subject to the rules in `site-os-usage-rules.md` and in the root `CLAUDE.md`.

## Approval Tiers

- **Approved (Production):** Safe for routine use inside the stated scope.
- **Approved (Controlled Testing):** Approved for use only inside controlled, observed sessions. Outputs must be reviewed before being accepted.
- **Approved (Scoped):** Approved only for the explicitly listed workflow or page type.

A skill outside its approved scope is treated as not approved.

---

## 1. Karpathy-style Claude Code Rules

- **Status:** Approved (Production)
- **Approved scope:** General Claude Code operating discipline across the entire Site OS Master repo.
- **What it provides:** Surgical editing posture, read-before-edit discipline, minimal-change preference, plain reporting of what was changed and why.
- **Why approved:** Aligns directly with the Site OS Master Claude Code Rules section in `CLAUDE.md`. Reinforces existing behavior; introduces no competing workflow.
- **Conditions of use:**
  - Must not relax any Site OS Master rule.
  - Must not be used to justify skipping validation steps.
  - When its guidance and Site OS Master guidance conflict, Site OS Master wins.
- **Owner / approver:** Project owner.
- **Review cadence:** Re-confirm on each major Site OS Master release.

---

## 2. Superpowers

- **Status:** Approved (Controlled Testing)
- **Approved scope:** Planning, repository inspection, review assistance, and editing assistance during supervised sessions.
- **What it provides:** Extended Claude Code abilities (e.g., richer planning, structured reviews, workflow scaffolding).
- **Why approved for controlled testing:** Useful for accelerating planning and review, but powerful enough that unsupervised use could introduce drift from Site OS Master rules.
- **Conditions of use:**
  - Use only in sessions where the operator is actively reviewing every change.
  - Do not allow Superpowers to rename prompts, move prompt files, or alter workflow routing.
  - Do not allow Superpowers to mark anything PASS without validation evidence captured in the standard Site OS Master format.
  - Any time Superpowers suggests a structural change to Site OS Master, treat it as a proposal only and route the decision back to the project owner.
- **Owner / approver:** Project owner.
- **Review cadence:** Re-evaluate after each controlled-testing session; promote to Production only after a clean record across multiple sessions.

---

## 3. Open Design

- **Classification:** External Design and Visual Artifact Tool (not a Claude Code plugin or skill).
- **Status:** Approved (Scoped) — Documented only, not installed. Future submodule option pending.
- **Repo:** https://github.com/nexu-io/open-design.git
- **What it is:** A verified external design and visual artifact tool. Open Design is a standalone application (desktop app, Docker daemon, or local Node service) with an optional MCP bridge into Claude Code. It is **not** installed as a Claude Code plugin and is not currently installed at all on this machine or in this repository.
- **Current status detail:**
  - Documented in `docs/claude-code-skills/open-design.md`, `tools/README.md`, and `tools/open-design/README.md`.
  - Not installed on the Desktop.
  - Not cloned into Site OS Master.
  - Not added as a Git submodule.
  - Future preferred integration: Git submodule at `tools/open-design`, only after explicit approval and a new entry in `install-log.md` recording the submodule action.
  - MCP bridge: pending evaluation; would require global Claude Code config change and is not authorized at this time.
- **Approved scope:** Website and design workflows only. Specifically: page design planning, layout planning, component design suggestions, visual hierarchy review, design system inspiration, landing page composition, and client-facing visual artifact direction.
- **Not approved for:**
  - Prompt validation
  - Workflow routing
  - PASS / FAIL decisions
  - Benchmark scoring
  - Patch validation logic
  - Prompt identity decisions
- **Conditions of use (apply when eventually installed and used):**
  - May be used inside page-build, page-design, and page-review tasks.
  - Must not be used to edit, rename, or restructure files inside `prompts/`.
  - Must not be used to modify workflow tests, evaluation outputs, or routing logic.
  - Must not be used to change `CLAUDE.md` or any documentation under `docs/claude-code-skills/`.
  - Must not override Site OS Master prompts, workflow routing, validation, or PASS/FAIL logic.
- **Note on the Claude Code marketplace design skill:** Frontend Design remains the active installed Claude Code marketplace design skill. Open Design is a separate, external tool — not a substitute for or duplicate of Frontend Design. The two have different roles: Frontend Design is a Claude Code skill installed into the Claude Code harness; Open Design is a standalone application that may be referenced externally during design workflows.
- **Owner / approver:** Project owner.
- **Review cadence:** Re-confirm at the time of any future install or submodule action; re-confirm when the design system materially changes.

---

## Cross-Cutting Rules for All Approved Skills

Every approved skill, regardless of tier, must respect:

- Prompt identity preservation.
- Workflow routing preservation.
- Validation discipline and PASS/FAIL evidence requirements.
- Historical evaluation record integrity.
- The "smallest safe change" principle defined in `CLAUDE.md`.

If a skill cannot operate inside these rules, it is not approved, regardless of what this file says.
