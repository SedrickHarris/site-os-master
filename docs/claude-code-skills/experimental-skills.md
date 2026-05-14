# Experimental, Optional, and Deferred Claude Code Skills

This file lists Claude Code skills and external repositories that are not approved for production use inside Site OS Master.

A skill listed here may be:

- **Experimental:** Allowed in isolated sandbox sessions only. Not allowed to touch production prompts, workflows, validation records, or routing.
- **Optional:** Permitted for individual operator use outside the Site OS Master core workflow. Not part of the standard project toolchain.
- **Deferred:** Intentionally not adopted yet. May be revisited later under defined conditions.

A skill in this file must not be used to make production changes to Site OS Master until it is re-classified in `approved-skills.md`.

---

## 1. Everything Claude Code

- **Status:** Experimental
- **Why listed here:** Broad, fast-moving collection of Claude Code patterns and skills. Useful as a reference, but too wide-ranging to wholesale adopt into a controlled workflow system.
- **Allowed use:**
  - Reading and learning from its patterns.
  - Trying isolated techniques in sandbox conversations or scratch branches.
- **Not allowed use:**
  - Importing its workflows into Site OS Master without per-pattern review.
  - Letting it dictate prompt naming, workflow routing, or validation structure.
  - Bulk-applying its skills to production prompt files.
- **Promotion path:** Individual techniques that prove useful in sandbox runs may be proposed for promotion to `approved-skills.md`, one technique at a time, with documented rationale and scope.

---

## 2. Obsidian Skills

- **Status:** Optional
- **Why listed here:** Useful for note-taking, knowledge management, and personal research workflows, but tied to Obsidian's environment and not part of the Site OS Master execution path.
- **Allowed use:**
  - Personal operator notes, planning, and reference material outside the repo.
  - Drafting content that will later be brought into the repo through normal Site OS Master workflows.
- **Not allowed use:**
  - Driving any decision inside `prompts/`, workflow tests, routing, or validation records based solely on Obsidian-side automation.
  - Replacing repo-based documentation with Obsidian-only documentation for Site OS Master rules.
- **Promotion path:** Not expected to be promoted to production. May remain optional indefinitely.

---

## 3. Ruflo / RooFlow

- **Status:** Deferred
- **Why listed here:** Advanced multi-agent orchestration. Potentially powerful for complex pipelines, but introduces additional moving parts (agent roles, hand-offs, shared state) that Site OS Master is not yet structured to absorb without risk.
- **Reason for deferral:**
  - Site OS Master currently uses a single-operator + Claude Code editing model with clear prompt identity and routing.
  - Introducing multi-agent flows now could blur prompt identity, complicate validation, and obscure PASS/FAIL evidence.
- **Allowed use:**
  - Reading documentation and watching how it is used in other projects.
  - Planning a future evaluation, with explicit scope and rollback criteria.
- **Not allowed use:**
  - Running it against this repository.
  - Wiring any agent inside Ruflo / RooFlow to Site OS Master prompts, workflows, or validation outputs.
- **Re-evaluation conditions (all must be true before reconsideration):**
  - Site OS Master has a stable, documented multi-step workflow that would clearly benefit from multi-agent orchestration.
  - There is a written plan for how prompt identity, routing, validation, and PASS/FAIL evidence are preserved when multiple agents are involved.
  - There is a defined rollback path that returns the project to a single-operator + Claude Code model cleanly.

---

## General Rules for Skills in This File

Until a skill is explicitly moved to `approved-skills.md`:

- It must not edit prompt files.
- It must not edit workflow test files.
- It must not change routing logic.
- It must not edit CLAUDE.md or files in `docs/claude-code-skills/`.
- It must not write to benchmark or evaluation history.
- It must not mark anything PASS or FAIL on behalf of Site OS Master.

Any deviation from these rules is treated as an unapproved change and must be reverted.
