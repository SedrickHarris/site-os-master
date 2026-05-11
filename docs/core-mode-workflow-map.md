# Core Mode Workflow Map

## Purpose

This document defines the validated Site OS Core Mode workflow for real client projects, benchmark testing, controlled development, QA, production fix passes, and final launch approval.

The workflow is designed to keep work moving while preventing unsafe assumptions, fake client data, unsupported schema, broken conversion paths, or premature production launch approval.

---

## Core Workflow Order

For real client projects, use this order:

1. Prompt 10: Client Data Collection and Production Values
2. Prompt 01: Keyword Strategy
3. Prompt 02: Page Outline
4. Prompt 03: Ten-Metric Analysis
5. Prompt 04: Gap Fix
6. Prompt 05: Developer Build Brief
7. Prompt 06: Claude Code Build
8. Prompt 07: QA Review
9. Prompt 08: Production Fix and TODO Resolution
10. Prompt 09: Final Launch QA

---

## Workflow Philosophy

Unresolved issues do not stop planning, drafting, benchmark testing, QA, or controlled development.

Unresolved issues must be:

- Clearly flagged
- Carried forward into the next prompt
- Assigned a required next action
- Resolved, confirmed, or intentionally deferred before production launch approval

The workflow may continue when unresolved items remain, as long as those items are documented and do not require fake data, unsupported claims, or unsafe assumptions.

Production launch approval should not be granted until launch-critical flagged issues are resolved, confirmed, or intentionally deferred with documented approval.

---

## Prompt 10: Client Data Collection and Production Values

### When It Runs

Prompt 10 runs before production work begins.

It may also run again after Prompt 07, Prompt 08, or Prompt 09 identifies missing client data.

### Purpose

Collect, organize, validate, and flag all client data needed for:

- Site architecture
- Pages
- SEO
- AEO
- GEO
- Schema
- Forms
- CTAs
- Legal pages
- Analytics
- Indexing
- Deployment
- Final launch QA

### Output

Prompt 10 produces a client data collection report that separates:

- Confirmed data
- Missing data
- Data needing client confirmation
- Safe-to-use values
- Values not safe to use yet
- Minimum viable data set
- Launch-critical flagged items
- Client questions
- Recommended next action

### Can Work Continue With Flagged Issues?

Yes.

Prompt 10 may allow planning, benchmark testing, and controlled development to continue with flagged items.

For production build readiness, Prompt 10 should clearly state what is still needed before Prompt 06, Prompt 08, and Prompt 09.

---

## Prompt 01: Keyword Strategy

### When It Runs

Prompt 01 runs after enough business, service, and location context is collected.

### Purpose

Create the keyword strategy for the target page or website section.

### Output

Prompt 01 should produce:

- Primary keywords
- Secondary keywords
- Long-tail keywords
- Local keywords
- AEO questions
- Voice search phrasing
- Search intent notes
- Entity and topical relevance notes

### Can Work Continue With Flagged Issues?

Yes.

Missing client data should be flagged and carried forward. Keyword planning can continue with available business, service, and location context as long as unsupported claims are not introduced.

---

## Prompt 02: Page Outline

### When It Runs

Prompt 02 runs after Prompt 01 establishes the keyword and intent strategy.

### Purpose

Create the page structure and content outline.

### Output

Prompt 02 should produce:

- Page sections
- Heading structure
- Content goals per section
- CTA placements
- FAQ placement
- Internal link opportunities
- Schema opportunities
- Conversion flow notes

### Can Work Continue With Flagged Issues?

Yes.

If client data is missing, Prompt 02 should include placeholders or flagged sections and carry unresolved items forward.

---

## Prompt 03: Ten-Metric Analysis

### When It Runs

Prompt 03 runs after the outline or draft strategy exists.

### Purpose

Evaluate the page strategy against core performance categories.

### Output

Prompt 03 reviews the page or strategy against:

- SEO
- AEO
- Voice search
- SERP
- GEO/local SEO
- Rich snippets
- AI/LLM citation readiness
- Search dominance
- Engagement
- Conversion

### Can Work Continue With Flagged Issues?

Yes.

Prompt 03 should score what can be evaluated and flag unresolved client data or missing proof points for later resolution.

---

## Prompt 04: Gap Fix

### When It Runs

Prompt 04 runs after Prompt 03 identifies weaknesses, missing sections, or improvement opportunities.

### Purpose

Improve the strategy before developer handoff.

### Output

Prompt 04 should produce:

- Gap fixes
- Content additions
- SEO/AEO improvements
- FAQ improvements
- CTA improvements
- Schema readiness improvements
- Internal linking improvements
- Remaining flagged items

### Can Work Continue With Flagged Issues?

Yes.

Prompt 04 should fix what can be fixed and flag what requires client confirmation.

---

## Prompt 05: Developer Build Brief

### When It Runs

Prompt 05 runs after strategy, outline, analysis, and gap fixes are complete.

### Purpose

Convert the approved strategy into a build-ready developer brief.

### Output

Prompt 05 should produce:

- Target route
- Page goal
- CTA
- Required sections
- Required components
- Metadata requirements
- Schema requirements
- Form requirements
- Internal link requirements
- Design and content notes
- Validation expectations
- Flagged client data and TODOs

### Can Work Continue With Flagged Issues?

Yes.

Prompt 05 should clearly mark unresolved items and tell Prompt 06 how to handle them safely.

---

## Prompt 06: Claude Code Build

### When It Runs

Prompt 06 runs after the developer build brief is approved.

### Purpose

Inspect the actual project, create a build plan, and build the page safely.

### Output

Prompt 06 should produce:

- Gate 1 project inspection
- Gate 2 build plan
- Built or modified files
- Metadata implementation
- Schema implementation
- Form/CTA implementation
- Validation results
- Implementation report
- Flagged unresolved client data

### Safety Gates

Prompt 06 keeps strict Gate 1 and Gate 2 hard stops.

Prompt 06 must not:

- Assume the framework
- Write code before project inspection
- Implement before the build plan
- Invent client data
- Add fake ratings or reviews
- Claim validation passed unless commands actually passed

### Can Work Continue With Flagged Issues?

Yes, if the project can be safely built with TODOs or flagged placeholders.

Prompt 06 may produce a benchmark-ready, development-ready, or controlled pre-launch page while carrying forward unresolved production data.

---

## Prompt 07: QA Review

### When It Runs

Prompt 07 runs after Prompt 06 completes the build.

### Purpose

Review the actual implementation and determine quality, readiness, and next actions.

### Output

Prompt 07 should produce:

- Gate 1 QA scope inspection
- Gate 2 brief alignment
- QA category review
- Schema review
- Form and CTA review
- SEO/AEO/GEO review
- Accessibility/mobile review
- Validation command review
- Flagged items carry-forward
- QA score
- Release decision
- Next recommended action

### Can Work Continue With Flagged Issues?

Yes.

Prompt 07 should not treat unresolved client data as a reason to stop QA, benchmark review, or controlled development.

Prompt 07 should separate:

- Benchmark readiness
- Development QA readiness
- Production launch readiness

---

## Prompt 08: Production Fix and TODO Resolution

### When It Runs

Prompt 08 runs after Prompt 07 identifies implementation issues, production TODOs, or unresolved client data.

### Purpose

Fix confirmed issues and carry forward anything that cannot be resolved safely.

### Output

Prompt 08 should produce:

- Gate 1 fix scope inspection
- Gate 2 fix plan
- Implementation summary
- Schema fixes
- Form fixes
- SEO/indexing fixes
- Accessibility/mobile fixes
- Validation results
- Items resolved
- Items flagged and carried forward
- Production approval readiness
- Next recommended action

### Can Work Continue With Flagged Issues?

Yes.

Prompt 08 follows this rule:

Fix what can be fixed.  
Flag what cannot.  
Carry forward unresolved items.  
Do not report the full fix pass as stopped if resolvable items were successfully fixed.

Prompt 08 must not fake production readiness.

---

## Prompt 09: Final Launch QA

### When It Runs

Prompt 09 runs after Prompt 08 resolves production TODOs or after the project is believed to be ready for launch.

### Purpose

Serve as the final launch approval gate.

### Output

Prompt 09 should produce:

- Gate 1 launch scope inspection
- Gate 2 launch blocker review
- Final launch score
- Category scores
- Schema final review
- Form final review
- SEO and indexing final review
- Accessibility and mobile final review
- Validation command results
- Files needing fixes
- Release decision
- Next recommended action

### Can Work Continue With Flagged Issues?

Planning and controlled development can continue, but production launch approval cannot be granted while launch-critical issues remain unresolved.

Prompt 09 is the strict final launch gate.

Prompt 09 should not approve launch when launch-critical items remain unresolved.

---

## Production Safety Rules

The workflow correctly flags unresolved issues without inventing data, hiding missing information, or silently approving unsafe production values.

The workflow flags:

- Missing phone number
- Missing business address or ZIP
- Missing business hours
- Missing form endpoint
- Missing production domain
- Missing privacy policy
- Missing sitemap
- Missing robots.txt
- Unsupported AggregateRating schema
- Unsupported Review schema
- Fake ratings or review counts
- Fake testimonials or claims
- Unconfirmed same-day availability
- Unconfirmed pricing
- Unconfirmed service areas
- Incomplete launch QA

---

## Minimum Viable Data Set Before Production Work

Before production work proceeds, Prompt 10 should collect or flag:

- Business phone number
- Business address or approved service-area-only status
- ZIP code
- Business hours
- Production domain
- Form endpoint or confirmed lead capture path
- Privacy policy URL or requirement to create one
- Service list confirmation
- Service area confirmation
- Primary CTA confirmation

---

## Production Launch Approval Requirements

Production launch approval should not be granted until all launch-critical flagged issues are resolved, confirmed, or intentionally deferred with documented approval.

Launch-critical items include:

- Client data
- Form functionality
- Schema accuracy
- Canonical URL
- Open Graph URL
- Sitemap
- robots.txt
- Privacy/legal requirements
- Analytics and tracking requirements, if required
- Mobile QA
- Accessibility QA
- Build/lint/type validation
- Deployment readiness

---

## Historical Benchmark Note

Benchmark output files, raw Claude outputs, and evaluation records are historical artifacts.

Do not rewrite old benchmark outputs just to update wording.

Only active prompts, guides, summaries, and master status files should be updated when workflow language changes.

---

## Current Validated Core Mode Chain

Validated prompts:

- Prompt 06 v2.1: Claude Code Build Prompt
- Prompt 07 v1.2: QA Review Prompt
- Prompt 08 v1.1: Production Fix and TODO Resolution Prompt
- Prompt 09 v1: Final Launch QA Prompt
- Prompt 10 v1: Client Data Collection and Production Values Prompt

Upstream strategy prompts:

- Prompt 01: Keyword Strategy
- Prompt 02: Page Outline
- Prompt 03: Ten-Metric Analysis
- Prompt 04: Gap Fix
- Prompt 05: Developer Build Brief

Recommended full workflow:

1. Prompt 10: Client Data Collection
2. Prompt 01: Keyword Strategy
3. Prompt 02: Page Outline
4. Prompt 03: Ten-Metric Analysis
5. Prompt 04: Gap Fix
6. Prompt 05: Developer Build Brief
7. Prompt 06: Claude Code Build
8. Prompt 07: QA Review
9. Prompt 08: Production Fix and TODO Resolution
10. Prompt 09: Final Launch QA 