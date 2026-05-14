# Claude Code Skills Documentation Layer

## Purpose

This folder documents which Claude Code skills, plugins, and external repositories are approved, experimental, optional, or deferred for use inside the Site OS Master project.

It exists so that:

- Every external skill is reviewed before it is installed.
- Every skill has a clear, written approval status.
- Site OS Master operators always know which tools are safe to use, which are under controlled testing, and which are deliberately deferred.
- No skill is silently introduced into the workflow.

This documentation layer must be updated before any new skill, plugin, or external Claude Code repo is installed or used in a production workflow.

## Site OS Master Is the Source of Truth

Site OS Master remains the source-of-truth workflow system for this project.

That means:

- All prompts in `prompts/` are the authoritative prompt set.
- All workflow routing logic is defined inside Site OS Master.
- All validation, PASS/FAIL, and benchmark records are governed by Site OS Master rules.
- All commit readiness reporting follows the rules in `CLAUDE.md`.

Claude Code skills and external repos do not replace Site OS Master.

They are supporting tools only.

## Role of Skills and External Repos

Approved Claude Code skills and repos may support:

- Planning
- Design
- Review
- Validation
- Commit readiness
- Workflow discipline
- Repository hygiene
- Editing safety

They may not:

- Override Site OS Master routing.
- Change prompt identity or rename prompts.
- Bypass validation requirements.
- Override PASS/FAIL rules.
- Modify benchmark or evaluation history.
- Introduce competing workflow systems.

If a skill suggests changes that conflict with Site OS Master, Site OS Master wins.

## Files in This Folder

- `README.md` — Purpose, scope, and rules for this documentation layer.
- `approved-skills.md` — Skills approved for use, with scope and conditions.
- `experimental-skills.md` — Skills under controlled testing, optional use, or deferred use.
- `install-log.md` — Record of every install, status, and validation outcome.
- `site-os-usage-rules.md` — Hard rules for how any skill may interact with Site OS Master.

## Update Discipline

When a skill is evaluated, installed, promoted, demoted, or removed:

1. Update the relevant file in this folder first.
2. Record the change in `install-log.md`.
3. Do not install or activate a skill until its status is recorded here.
4. Do not change Site OS Master prompts, workflows, routing, or validation in the same step.

This layer is documentation only. It does not install skills, run skills, or change project behavior on its own.
