# Open Design — Placeholder

## Status

**Placeholder only. Open Design is not installed.**

This folder is reserved as the future location for an Open Design Git submodule, if and when the project owner approves that integration. It does not currently contain any Open Design source code, configuration, or data.

## Repo

- **Repo:** https://github.com/nexu-io/open-design.git

## Rules for This Folder

- **Do not copy Open Design repo files into this folder manually.** This folder is a documentation placeholder, not a manual mirror of the upstream repo.
- **Do not clone Open Design into this folder until the integration is approved.**
- **Do not modify Site OS Master files to depend on Open Design until the integration is approved.**

## Future Approved Method (Only If and When Approved)

When the project owner has approved the integration, the canonical method for installing Open Design at this path is a Git submodule:

```
git submodule add https://github.com/nexu-io/open-design.git tools/open-design
```

This command must be:

1. Pre-approved in writing by the project owner.
2. Recorded in `docs/claude-code-skills/install-log.md` with the date, command, scope, and validation result.
3. Reflected in `docs/claude-code-skills/open-design.md` with an updated status (from "Verified external tool, not installed" to the new installed/submodule state).
4. Reviewed in a controlled session before any Open Design output is used in production work.

The submodule path must remain exactly `tools/open-design`. The submodule must not be added at a different path or copied into the repo by other means.

## Current Use

Documentation reference only.

- For approval status and scope, see `docs/claude-code-skills/open-design.md`.
- For rules that govern how Open Design may interact with Site OS Master, see `docs/claude-code-skills/site-os-usage-rules.md`.
- For the authoritative log of Open Design evaluation and integration actions, see `docs/claude-code-skills/install-log.md`.
