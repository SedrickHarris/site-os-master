# Site OS Master Usage Rules for Claude Code Skills

These rules govern how any Claude Code skill or external repository may interact with the Site OS Master project.

They apply to every skill, regardless of approval tier. They sit on top of, and never override, the rules in the root `CLAUDE.md`.

If a skill cannot operate within these rules, it is not approved.

## 1. Approved Uses

A skill may be used to support, assist, or accelerate the following kinds of work:

- Planning a page, prompt, workflow, or change.
- Reading and summarizing existing files.
- Reviewing diffs, drafts, and proposed changes.
- Suggesting structure, copy, design, or QA improvements.
- Validating that a planned change matches Site OS Master rules.
- Drafting commit messages and commit-readiness reports.
- Drafting documentation inside `docs/` when explicitly requested.
- Surface-level repository hygiene (e.g., flagging duplication, missing schema, missing metadata) without auto-applying changes.

In every approved use, the skill produces suggestions; the operator and Site OS Master rules decide whether to apply them.

## 2. Prohibited Uses

A skill must not, on its own or by operator delegation through the skill:

- Rename, move, or delete files under `prompts/`.
- Edit prompt identity, prompt routing, or prompt internal structure beyond surgical, explicitly requested fixes.
- Modify workflow test files or evaluation outputs.
- Change routing logic in any file.
- Edit `CLAUDE.md` without an explicit instruction tied to a specific change.
- Edit any file inside `docs/claude-code-skills/` without an explicit instruction.
- Mark any prompt, workflow, or page as PASS without validation evidence captured in the standard Site OS Master format.
- Remove flagged items, warnings, or known issues without the underlying issue being resolved.
- Overwrite historical evaluation, benchmark, or validation records.
- Install other skills, plugins, or repositories as a side effect.
- Introduce competing workflow systems, alternative prompt registries, or alternative validation systems.

If a skill suggests any of the above, treat the suggestion as a proposal that must be reviewed by the project owner before action.

## 3. Required Workflow Before Edits

Before applying any change suggested by a skill, the operator (or Claude Code acting under operator instructions) must:

1. Identify the active prompt, workflow, page, or test being targeted.
2. Read the relevant files in full.
3. State the intended change in plain language.
4. Confirm the change does not violate any rule in this file or in `CLAUDE.md`.
5. Confirm the success criteria for the change (what "done" looks like).
6. Make the smallest safe change that satisfies the request.
7. If a skill recommends a broader change, narrow it back down to the smallest safe change before applying.

If any of steps 1–5 cannot be completed, stop and report the blocker rather than guessing.

## 4. Required Reporting Format After Edits

After any change that originated from, or was assisted by, a skill, the report must include:

1. **Files changed** — exact paths.
2. **Summary of changes** — what changed, in plain language.
3. **Originating skill** — which skill suggested or assisted the change, and in what role (planning, review, drafting, validation, etc.).
4. **Validation performed** — what was checked, and how. Reference the Site OS Master validation format.
5. **PASS / FAIL evidence** — only if applicable, and only if real evidence exists.
6. **Remaining risks or flagged items** — anything still open.
7. **Conflicts with Site OS Master rules** — if any rule was bent or interpreted, state it explicitly.
8. **Suggested Git commit message** — concise, accurate, and matching the actual change.

A report missing any applicable section is incomplete. The change should not be considered final until the report is complete.

## 5. When a Skill May Influence Site OS Master Decisions

A skill may influence a Site OS Master decision only when all of the following are true:

- The skill is listed in `approved-skills.md` with a scope that clearly covers the decision.
- The decision is within the skill's stated scope (not adjacent, not extrapolated).
- The decision does not change prompt identity, workflow routing, validation rules, or PASS/FAIL rules.
- The operator can explain the decision in their own words without relying on the skill's authority.
- The decision is reported using the format in Section 4.

A skill in `experimental-skills.md` may **inform** thinking but must not **decide** anything on behalf of Site OS Master.

A skill marked `deferred` must not influence Site OS Master decisions at all.

## 6. Conflict Resolution

If a skill's guidance conflicts with Site OS Master rules:

1. Site OS Master wins.
2. The conflict must be recorded in the change report (Section 4, item 7).
3. If the conflict is recurring, the skill's status should be revisited in `approved-skills.md` or `experimental-skills.md`, and the change recorded in `install-log.md`.

## 7. Demotion and Removal

A skill may be demoted (e.g., production → controlled testing → experimental) or removed at any time if:

- It pushes changes that violate these rules.
- It increases drift from Site OS Master prompt identity, routing, validation, or PASS/FAIL discipline.
- It produces unreliable suggestions in its declared scope.
- It introduces side effects that are difficult to reverse.

Demotions and removals must be recorded in `install-log.md` with the reason and the date.

## 8. Final Rule

Skills exist to support Site OS Master, not to replace it.

When in doubt, choose the smaller change, the clearer report, and the rule already written in Site OS Master over any new pattern a skill suggests.
