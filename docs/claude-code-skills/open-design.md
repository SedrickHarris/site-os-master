# Open Design

## Tool Identity

- **Tool name:** Open Design
- **Repo:** https://github.com/nexu-io/open-design.git
- **Status:** Verified external tool, not installed
- **Classification:** External Design and Visual Artifact Tool

## Approved Use

Open Design is approved for use in **website/design workflows only**.

It may be referenced for:

- Visual layout inspiration
- Design systems and design templates
- Section composition and UI polish
- Landing page, dashboard, and admin panel design patterns
- Client-facing design direction
- Artifact patterns for proposals and visual deliverables

## Not Approved For

Open Design must not be used for:

- Prompt validation
- Workflow routing
- PASS / FAIL decisions
- Benchmark scoring
- Patch validation logic
- Prompt identity decisions

These responsibilities remain with Site OS Master prompts, workflows, and the validation discipline defined in `CLAUDE.md` and `docs/claude-code-skills/site-os-usage-rules.md`.

## How It Will Be Used During Site Builds

1. Site OS Master defines first:
   - Page strategy
   - SEO and AEO requirements
   - Content structure
   - Conversion goals
   - Schema requirements
   - Validation rules
2. Only after the above are defined, Open Design may then be referenced for:
   - Visual layout inspiration
   - Design systems
   - UI polish
   - Section composition
   - Artifact patterns
   - Client-facing design direction
3. Open Design must never override Site OS Master workflow logic, prompt routing, validation, PASS/FAIL decisions, benchmark scoring, or `CLAUDE.md` rules.

If any Open Design output conflicts with a Site OS Master decision, Site OS Master wins. The conflict must be recorded in the change report per `site-os-usage-rules.md` Section 4.

## Future Integration Path

- **Preferred:** Git submodule at `tools/open-design`.
- **Alternative:** External tools folder outside the Site OS Master repo (for example, a sibling folder on disk).
- **MCP bridge:** Pending evaluation. Open Design exposes its local daemon as an optional MCP server. Wiring it into Claude Code would modify global Claude Code configuration, so any MCP bridge decision must be approved separately before being acted on.

## Current Decision

- Do not install Open Design on the Desktop.
- Do not install Open Design inside the Site OS Master repo as copied source files.
- Do not add Open Design as a submodule until explicitly approved.
- Treat the `tools/open-design/` folder in this repo as a documentation placeholder only.

## Related Files

- `tools/README.md` — purpose and rules for the `tools/` folder.
- `tools/open-design/README.md` — placeholder README for the future submodule path.
- `docs/claude-code-skills/install-log.md` — authoritative log of evaluation and integration status.
- `docs/claude-code-skills/approved-skills.md` — current approved-skill tier for Open Design (Scoped, website/design only).
- `docs/claude-code-skills/site-os-usage-rules.md` — hard rules that govern how any external tool may interact with Site OS Master.
