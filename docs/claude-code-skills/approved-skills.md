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

- **Status:** Approved (Scoped)
- **Approved scope:** Website and design workflows only. Specifically: page design planning, layout planning, component design suggestions, and visual hierarchy review.
- **What it provides:** Design-oriented Claude Code support for building and reviewing website pages.
- **Why approved scoped:** Strong fit for the website-building side of Site OS Master, but not intended for prompt engineering, workflow routing, validation, or benchmark work.
- **Conditions of use:**
  - May be used inside page-build, page-design, and page-review tasks.
  - Must not be used to edit, rename, or restructure files inside `prompts/`.
  - Must not be used to modify workflow tests, evaluation outputs, or routing logic.
  - Must not be used to change CLAUDE.md or any documentation under `docs/claude-code-skills/`.
- **Owner / approver:** Project owner.
- **Review cadence:** Re-confirm when the design system materially changes.

---

## Cross-Cutting Rules for All Approved Skills

Every approved skill, regardless of tier, must respect:

- Prompt identity preservation.
- Workflow routing preservation.
- Validation discipline and PASS/FAIL evidence requirements.
- Historical evaluation record integrity.
- The "smallest safe change" principle defined in `CLAUDE.md`.

If a skill cannot operate inside these rules, it is not approved, regardless of what this file says.
