---
File: efficiency-governor/compact-strategy-summary-template.md
Version: v1.2
Status: Active — Efficiency Governor Layer
Purpose: One-page strategy handoff — replaces pasting full strategy conversations into Claude Code
Used by: Prompt 05 (Part 27 Final Claude Code Ready Prompt), Prompt 06 Gate 1
Rule: When prior strategy is already approved, use this template instead of re-running strategy prompts or pasting full conversation history
Does not replace: prompts/05-developer-build-brief-prompt.md (Prompt 05 produces the full build brief; this template compresses it for Claude Code handoff)
---

# Site OS Master — Compact Strategy Summary Template

## When to Use This Template

Use this template when strategy is already approved and Claude Code needs implementation instructions.

Do not paste the full planning conversation into Claude Code. Do not re-run Prompt 01 through Prompt 04 if strategy is approved. Compress the approved strategy into this template and pass it as the Claude Code input.

**Rule:** If this template fully describes the implementation task, do not paste the full conversation into Claude Code.

---

## How to Complete This Template

Fill in every field with confirmed values from approved upstream outputs (Prompt 01 through Prompt 05, or Prompt 20 if run).

Use `// TODO — [reason]` for any field where client data is missing and placeholder is approved.

Do not invent values. Do not leave fields blank without a status note.

---

## Task Scope

Select one before completing the template. If multi-page or full-tier, duplicate the Page Target, Approved Page Sections, Metadata, Schema, and Internal Links sections for each route.

```
Task scope:
[ ] Single page
[ ] Multi-page section (duplicate page sections below per route)
[ ] Full tier implementation (duplicate page sections below per route)
[ ] Sitewide config / infrastructure
[ ] QA only — no new build
```

---

## Approval Dates

```
Strategy approval date:
Client intake approval date:
Last reviewed by:
```

---

## Compact Strategy Summary

### Project

```
Business name:
Website name:
Production domain or staging domain:
Project folder or repo path:
Framework:
Routing system:
```

---

### Intake Gate Status

```
Client intake gate: CLEARED / CLEARED WITH FLAGS / NOT CLEARED
Build may proceed: Yes / No
Launch blockers present: Yes / No
Launch blocker list: [list or None]
Approved placeholders: [list or None]
```

---

### Workflow

```
Selected workflow mode: Fast / Core / Beyond-Elite / Full Competitive Build
Execution depth: Compact / Standard / Deep
Active build pack or template: [name or N/A]
Strategy status: Approved — summarized here / Running now
Strategy prompts run: [list — e.g. Prompt 01, Prompt 02, Prompt 03, Prompt 04, Prompt 20]
Strategy prompts skipped: [list and reason]
Prior strategy approved: Yes / No
```

**Approved prompt path — check one:**

```
[ ] Fast Mode:            Prompt 05 → Prompt 06 → Prompt 07
[ ] Core Mode:            Prompt 05 → Prompt 06 → Prompt 07
[ ] Beyond-Elite Mode:    [list approved prompts that ran]
[ ] Full Competitive:     [list approved prompts that ran]
```

---

### Selected Build Pack Rules

```
Build pack:
Required templates:
Required components:
Index/noindex rule:
Sitemap rule:
Schema rule:
Internal linking rule:
Service + location page scope (if applicable):
```

---

### Page Target

```
Page name:
Page type: [Homepage / Service page / Location page / Service+location page / Blog / FAQ / Landing page / Other]
Target route:
URL slug:
Primary keyword:
Secondary keywords:
Target location:
Target audience:
```

---

### Page Goal and CTA

```
Page goal:
Primary CTA label:
Primary CTA action: [Form submit / Phone call / Calendar booking / Other]
Secondary CTA label:
Secondary CTA action:
Form type: [GHL embed / Native / Typeform / Other]
Form endpoint: [URL or // TODO — awaiting client]
Thank-you or confirmation route:
Lead notification email: [email or // TODO — awaiting client]
```

---

### Implementation Priority

If there is a conflict during the build, resolve it using this priority order.

```
1. Preserve approved route structure
2. Preserve conversion path (CTA, form, tap-to-call)
3. Preserve SEO metadata and schema rules
4. Preserve design system and existing patterns
5. Carry unresolved items as TODOs — never invent

Top priority for this build:
Second priority:
Must not compromise:
```

---

### Approved Page Sections

List every section in order. Include heading, component name, and any confirmed content notes.

```
1. Section name:
   Heading:
   Component:
   Content notes:
   CTA role:
   Schema role:
   TODO items:

2. Section name:
   Heading:
   Component:
   Content notes:
   CTA role:
   Schema role:
   TODO items:

[Continue for each section]
```

---

### Metadata

```
Meta title:
Meta description:
Canonical URL:
Open Graph title:
Open Graph description:
Open Graph image path:
Robots directive: index, follow / noindex / other
```

---

### Schema

List each schema type, its status, and any fields that are confirmed vs TODO.

```
Schema type 1:
  Status: Build now / TODO — awaiting client data / Do not implement
  Confirmed fields: [list]
  TODO fields: [list]

Schema type 2:
  Status:
  Confirmed fields:
  TODO fields:

[Continue for each schema type]
```

**Schema safety rules (always apply):**
- Do not add AggregateRating or Review schema unless real rating and review count are confirmed
- Do not add business address, ZIP, or hours to LocalBusiness schema unless confirmed
- Do not add pricing, certifications, licenses, or insurance claims unless confirmed

---

### Internal Links

```
Link 1:
  Target route:
  Anchor text:
  Route confirmed: Yes / No / TODO — confirm before build
  Section:

Link 2:
  Target route:
  Anchor text:
  Route confirmed: Yes / No / TODO — confirm before build
  Section:

[Continue for each link]
```

Rule: Do not add internal links to routes that have not been confirmed to exist.

---

### Images and Alt Text

```
Image 1:
  Section:
  Alt text:
  File path or placeholder:
  Loading strategy: eager / lazy

Image 2:
  Section:
  Alt text:
  File path or placeholder:
  Loading strategy:

[Continue for each image]
```

---

### Indexing and Sitemap

```
Index decision: Index / Noindex / Confirm per page
Sitemap: Include / Exclude / Create sitemap.ts / Already exists
robots.txt: Create / Already exists / Out of scope
```

---

### Confirmed Client Data

```
Business name:
Phone number: [number or // TODO_REAL_PHONE_NUMBER]
Email: [email or // TODO]
Address: [address or // TODO_REAL_ADDRESS — or service-area only]
ZIP: [ZIP or // TODO_REAL_ZIP]
Business hours: [hours or // TODO_REAL_HOURS]
GBP URL: [URL or // TODO]
Social URLs: [URLs or // TODO]
```

---

### Known TODOs for Claude Code

List every unresolved item Claude Code must handle as a `// TODO` placeholder. Do not invent values for these.

```
TODO 1:
  Placeholder: // TODO_[NAME]
  Field:
  Why it matters:
  Launch blocker: Yes / No
  Owner follow-up required: Yes / No

TODO 2:
  Placeholder:
  Field:
  Why it matters:
  Launch blocker:
  Owner follow-up required:

[Continue for each TODO]
```

---

### Files Claude Code May Edit

```
Files allowed:
1.
2.
3.
[List all files Claude Code is permitted to create or modify]
```

---

### Files Claude Code Must Not Edit

```
Files forbidden:
1.
2.
3.
[List all files Claude Code must leave untouched]
```

---

### Guardrails

These apply to every build. Do not remove or soften them.

```
- Do not invent phone numbers, addresses, hours, reviews, ratings, pricing, certifications, licenses, insurance, or availability claims
- Do not create duplicate routes
- Do not modify unrelated pages, components, or global styles
- Do not add fake schema data
- Do not keyword stuff
- Do not add AggregateRating schema without confirmed rating and review count
- Do not add internal links to routes that do not exist
- Do not claim validation passed unless commands actually ran and passed
- Do not use text inside images
- Do not add frontend dependencies not already installed or explicitly approved
```

---

### Validation Commands

```
Default commands (run in this order):
1. npm run lint
2. npm run build

Optional — run only if available in this project:
3. npm run type-check
4. npm run test

Do not claim a command passed unless it was actually run.
Do not run a script that does not exist in package.json.

Pass criteria:
- Zero lint errors
- Zero build errors
- Zero type errors (if type-check available)
- All TODO placeholders labeled, not invented
```

---

### QA Checks

Minimum QA checks Claude Code must confirm before reporting complete:

```
[ ] Route resolves correctly
[ ] One H1 exists and matches approved heading
[ ] Meta title and meta description present
[ ] Canonical URL present
[ ] Schema present and matches visible content
[ ] No fake schema data (reviews, ratings, unconfirmed claims)
[ ] AggregateRating absent or confirmed-only
[ ] All CTA placements present
[ ] Form present with correct fields
[ ] Internal links present and routes confirmed
[ ] Images have alt text
[ ] No unrelated files modified
[ ] All TODO items labeled with // TODO — not invented
[ ] Build passes: npm run build
[ ] Lint passes: npm run lint
```

---

### Acceptance Criteria

The build is complete only when:

```
[ ] Route is correct
[ ] All approved sections are present
[ ] Metadata is included
[ ] Schema is included or prepared per spec
[ ] CTA path is functional or flagged as TODO
[ ] All unresolved items are labeled as safe TODOs — not invented
[ ] Build and lint pass
[ ] No duplicate routes created
[ ] No unrelated files modified
```

---

### Git Expectations

```
Baseline branch:
Baseline commit hash: [hash or N/A]
Last known clean state: [description]
Expected files to be created: [list]
Expected files to be modified: [list]
Files that must remain untouched: [list]
Commit allowed: Yes / No
Push allowed: Yes / No
Commit message format: [e.g. feat: add /services/furniture-removal-las-vegas page]
Expected final git status: [e.g. 1 new file, 1 modified file, 0 deletions]
```

---

### Carry-Forward to Prompt 07

After Claude Code builds using this summary, carry the following to Prompt 07 QA Review:

```
Items to carry forward:
1.
2.
3.

Launch blockers still open:
1.
2.
```

---

## Template Usage Rules

1. Fill in every field before passing to Claude Code.
2. Use `// TODO` for missing data — never invent values.
3. Do not pass this template with blank fields unless status is explicitly noted.
4. Do not re-run strategy prompts if this template can fully describe the task.
5. If a new page type requires significantly different structure, use Prompt 05 to generate a full build brief first, then compress it into this template.
6. Prompt 06 must convert this summary into a Gate 2 implementation plan before writing files.
7. A TODO placeholder is not approval to invent or finalize the missing value later.

---

## Related Files

- `efficiency-governor/client-intake-gate.md` — complete before filling this template
- `prompts/05-developer-build-brief-prompt.md` — source of the strategy this template compresses
- `prompts/06-claude-code-build-prompt.md` — receives this template as its primary input
- planned — `token-control/context-compression-skill.md` — rules for what to keep and remove during compression (file not yet created)
- `token-control/token-saving-rules.md` — rules for reducing token usage across the workflow

---

Site OS Master — Compact Strategy Summary Template v1.2
Efficiency Governor Layer | Patched from v1.1: added ### Approved Page Sections heading, added Template Usage Rules 6 and 7 (Gate 2 requirement, TODO non-approval rule), added Expected final git status field to Git Expectations
