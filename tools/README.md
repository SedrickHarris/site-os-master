# Site OS Master — `tools/` Folder

## Purpose

This folder is reserved for externally referenced tools, optional Git submodules, and controlled integrations that may support Site OS Master workflows.

It is not a place for arbitrary code, experiments, or unreviewed external repositories.

Every entry inside `tools/` must:

- Be documented in `docs/claude-code-skills/` before it is added.
- Have an approval record in `docs/claude-code-skills/install-log.md`.
- Operate inside the rules defined in `docs/claude-code-skills/site-os-usage-rules.md` and the root `CLAUDE.md`.

## Hard Rules for Anything Inside `tools/`

A tool, submodule, or external integration in this folder must not:

- Override Site OS Master prompts.
- Change workflow routing.
- Replace, bypass, or weaken Site OS Master validation logic.
- Issue PASS / FAIL decisions on behalf of Site OS Master.
- Modify benchmark or evaluation outputs.
- Edit prompt files unless explicitly instructed for a specific change.
- Modify `CLAUDE.md` or files inside `docs/claude-code-skills/`.

If a tool in this folder cannot operate inside these rules, it is not approved for use here.

## Approved Support Surface

External tools in `tools/` may support:

- Website layout planning, design systems, and visual artifact work.
- Design inspiration, component reference, and UI polish.
- Optional integrations (e.g., MCP bridges) that are explicitly approved.
- Reference material for client-facing deliverables.

Any other use must be reviewed before the tool is added or invoked.

## Adding a New Tool

Do not clone or install a new tool directly into `tools/` without first:

1. Creating a documentation file under `docs/claude-code-skills/` for the tool.
2. Recording an evaluation entry in `docs/claude-code-skills/install-log.md`.
3. Confirming the tool's scope, approval tier, and integration method with the project owner.
4. Recording the install action (clone, submodule add, MCP register, etc.) in `install-log.md` at the time it happens.

Future submodules should be added with an explicit, documented `git submodule add` command and recorded in the install log. Submodule additions must not occur silently.

## Current Contents

- `open-design/` — Placeholder for the future Open Design Git submodule. Not installed. See `tools/open-design/README.md` for status and the planned integration path.
