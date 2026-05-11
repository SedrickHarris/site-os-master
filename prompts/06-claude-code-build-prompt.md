# Beyond Elite Claude Code Build Prompt

You are working inside this website project in VS Code using Claude Code.

You are not just building a page.

You are implementing an approved SEO, AEO, GEO, technical SEO, and conversion strategy inside an existing codebase without breaking existing functionality.

## Goal

Build or update the following page:

[PAGE NAME]

## Route

[URL SLUG]

## Business Context

[BUSINESS SUMMARY]

## Page Goal

[PAGE GOAL]

## Target Audience

[TARGET AUDIENCE]

## Primary CTA

[PRIMARY CTA]

## Secondary CTA

[SECONDARY CTA]

## Approved Page Sections

Build the page using these approved sections:

1. [Section 1]
2. [Section 2]
3. [Section 3]
4. [Section 4]
5. [Section 5]
6. [Section 6]
7. [Section 7]
8. [Section 8]

## SEO Requirements

Include:

- Meta title: [META TITLE]
- Meta description: [META DESCRIPTION]
- Primary keyword: [PRIMARY KEYWORD]
- Secondary keywords: [SECONDARY KEYWORDS]
- One clear H1
- Logical H2 and H3 structure
- Clean URL route
- Internal links where relevant
- Descriptive image alt text
- Search intent aligned content structure

## AEO and Voice Search Requirements

Include:

- Direct answer style sections
- Clear short-answer summary near the top of the page
- Question based headings where natural
- AEO FAQ section
- Concise FAQ answers
- Voice-search-friendly phrasing
- Clear service, location, or category context

## GEO and Local SEO Requirements

If the page has a local focus, include:

- Target location naturally in the H1 or intro
- Local relevance section
- Nearby areas if applicable
- Locally relevant user problems
- Local service area context
- Natural local language without keyword stuffing

## Schema Requirements

Add or prepare schema using the existing project pattern.

Recommended schema:

- WebPage
- BreadcrumbList
- FAQPage
- Service if this is a service page
- LocalBusiness if this is a local business page
- Article if this is a blog post
- Organization if applicable

Do not invent fake reviews, ratings, prices, or business credentials.

## Internal Linking Requirements

Add internal links where relevant.

Use natural anchor text.

Do not add links that do not help the user journey or topical authority.

## Image Requirements

Follow the project image rules.

Include:

- Descriptive alt text
- No text inside images
- No unnecessary image bloat
- Use existing image patterns where available
- Follow the project image folder structure if applicable

## Design Requirements

Follow:

- Existing design system
- Existing layout patterns
- Existing component patterns
- Project design style files
- Responsive design best practices
- Accessibility best practices

Do not create a new design pattern unless needed.

Do not change global styles unless absolutely necessary.

## Guardrails

Do not:

- Remove existing working code unless required
- Create duplicate routes
- Rename files unnecessarily
- Change unrelated pages
- Change global styles without a clear reason
- Add fake testimonials
- Add fake reviews
- Add unsupported claims
- Add text inside images
- Overuse keywords
- Create unnecessary dependencies
- Break existing navigation
- Ignore existing metadata or schema patterns

## Required Workflow

Follow this gated implementation workflow.

### Gate 1: Inspect

Before editing, inspect:

1. Project structure
2. Package files
3. Framework
4. Routing pattern
5. App or pages directory
6. Existing components
7. Existing styling system
8. Existing metadata pattern
9. Existing schema pattern
10. Existing internal link pattern
11. Existing image usage pattern

After inspection, summarize what you found.

### Gate 2: Plan

Before editing, provide a short implementation plan.

Include:

- Files likely to be created
- Files likely to be updated
- Components likely to be reused
- Components likely to be created
- Metadata approach
- Schema approach
- Internal linking approach
- Any risks or uncertainties

Do not begin editing until the plan is clear.

### Gate 3: Build

Implement the page using the approved strategy.

During implementation:

- Follow existing patterns
- Keep code clean and readable
- Use semantic structure where applicable
- Add metadata
- Add schema if the project supports it
- Add internal links
- Add CTAs
- Keep layout responsive
- Preserve existing functionality

### Gate 4: Validate

After editing, validate:

- Page route exists
- Page renders without obvious errors
- No duplicate route was created
- Metadata exists
- One H1 exists
- H2 and H3 hierarchy is logical
- AEO FAQ section exists if required
- Schema exists or is prepared
- Internal links are included
- CTAs are visible
- Images have alt text
- Mobile layout was considered
- No unrelated files were modified

### Gate 5: Report

After validation, provide:

1. Summary of changes
2. Files created
3. Files updated
4. Route created or updated
5. Metadata added
6. Schema added or prepared
7. Internal links added
8. CTA placements
9. QA results
10. Remaining issues or recommendations

## Acceptance Criteria

The page is not complete until:

- The route is correct
- The page follows the approved section structure
- The metadata is present
- One clear H1 exists
- Headings are logical
- Internal links are included
- CTAs are clear
- AEO/FAQ content is included if required
- Schema is included or prepared if required
- The page follows existing design patterns
- The page is responsive or uses responsive patterns
- No unrelated files were changed
- No duplicate route was created
- No fake claims, fake reviews, or unsupported proof were added

## Final Instruction

Work carefully and sequentially.

Inspect first.

Plan second.

Build third.

Validate fourth.

Report fifth.

## Prompt Revision: Prompt 06 Priority Safety Fixes

## Gate 2 Formal Approval Pause

After Gate 2, Claude Code must stop completely.

Add this rule to every Claude Code build prompt:

After presenting the Gate 2 implementation plan, stop completely. Do not proceed to Gate 3 until explicit user confirmation is received.

If there are unresolved blockers, unknown framework issues, missing route conventions, missing form handlers, missing schema patterns, or unclear client-confirmation values, ask for guidance before building anything.

Do not edit, create, rename, delete, or move files until Gate 2 is approved.

## Pricing Claim Confirmation Requirement

Any specific pricing claim, price range, average cost, starting price, discount, special offer, financing claim, or cost estimate must be flagged for client confirmation before launch.

If FAQ content includes a price range, add this warning directly beside the FAQ answer and in the QA checklist:

FLAG: CLIENT MUST CONFIRM PRICING BEFORE LAUNCH. Replace with verified pricing, an approved general range, or a non-specific quote-based answer. Do not ship unconfirmed pricing claims.

For example, if a FAQ says:

"Furniture removal in Las Vegas typically costs between $75 and $300 depending on the number of items and accessibility."

Add:

FLAG: CLIENT MUST CONFIRM: The $75–$300 price range is an approximation. Replace with actual pricing or an accurate approved range before launch. Do not ship this copy unconfirmed.

If pricing is not confirmed, use a safer fallback answer:

"Furniture removal pricing in Las Vegas depends on the number of items, accessibility, and job size. Pit Stop Junk Removal provides a free quote before any work begins."

## Unknown Framework Fallback

If Claude Code cannot identify the framework from the named options, it must inspect:

- package.json
- config files
- project root structure
- routing folders
- build scripts

Then it must report the findings and ask for confirmation before continuing.

Do not guess the routing pattern.

## No Existing Service Page Fallback

If no existing service page exists, Claude Code must use the most structurally similar page available as the reference pattern.

Acceptable fallback references:

- Homepage
- About page
- Blog post
- Landing page
- Existing location page
- Existing category page

Claude Code must state this assumption in the Gate 1 report.

## Navigation Update Scope Limit

When updating navigation, make only the single required link addition.

Do not:

- Restructure navigation
- Reorder existing links
- Change styling
- Modify header/footer layout
- Rename existing navigation files
- Alter unrelated menu behavior

Add only:

Link text:
Furniture and Appliance Removal

Destination:
/services/furniture-appliance-removal-las-vegas

Follow the existing navigation pattern exactly.

## Sitemap Conditional Logic

If the project uses a static sitemap.xml, add the new page URL as a new URL entry.

If the sitemap is dynamically generated, check whether the new route will be automatically included.

If Claude Code cannot determine sitemap behavior, add this TODO:

TODO: Confirm new page URL is included in sitemap before launch.

Do not invent sitemap logic or refactor the sitemap system unless required.

## Prompt Length Reminder for Claude Code

At the top of every long Claude Code build prompt, include:

This is a long implementation prompt. Read the full prompt before starting Gate 1. Do not modify files until Gate 1 inspection is complete, Gate 2 plan is complete, and the user explicitly approves proceeding to Gate 3.

## Prompt Revision: Production-Safe Claude Code Build Template Requirements

This prompt must generate Claude Code build prompts that are safe to paste into VS Code for real website projects.

The final Claude Code prompt must be self-contained and must not rely on earlier strategy context being remembered.

## Required Gate Structure

Every Claude Code build prompt must use this gate structure:

1. Gate 1 — Inspect
2. Gate 2 — Plan
3. Gate 3 — Build
4. Gate 4 — Validate
5. Gate 5 — Report

## Gate 1 — Inspection-Only Pass

Before creating, editing, moving, deleting, or renaming any files, Claude Code must inspect the project.

Claude Code must inspect:

- package.json
- project root structure
- routing folders
- app, pages, routes, src, or equivalent directories
- existing page patterns
- existing service pages
- existing layout components
- existing metadata patterns
- existing schema injection patterns
- existing form components
- existing CTA components
- existing FAQ or accordion components
- existing navigation files
- existing sitemap behavior
- existing styling system
- existing image folder conventions

Claude Code must report what it finds before planning the build.

## Framework Detection Requirement

Claude Code must identify the framework and routing pattern before creating files.

It must check:

- package.json
- config files
- root folder structure
- build scripts
- routing directories

If the framework is unclear, Claude Code must stop and ask for confirmation.

Do not guess the routing pattern.

## Existing Service Page Fallback

Claude Code must search for the closest existing service page.

If no service page exists, it must use the most structurally similar page as the pattern reference.

Acceptable fallback references:

- Homepage
- About page
- Blog post
- Landing page
- Location page
- Category page

Claude Code must state the fallback assumption in the Gate 1 report.

## Duplicate Route Check

Before creating the new route, Claude Code must confirm no existing file or route already resolves to the target URL.

If a duplicate route exists, Claude Code must stop and report the conflict before building.

## Gate 2 — Implementation Plan and Approval Pause

After inspection, Claude Code must provide an implementation plan.

The plan must include:

- Route to create
- Route type
- Framework/routing convention
- Files to create
- Files to edit
- Files not to touch
- Components to reuse
- Components to create
- Metadata approach
- Schema approach
- Form approach
- CTA approach
- Navigation update approach
- Sitemap update approach
- Internal link approach
- Image approach
- Risks or blockers

After presenting the Gate 2 plan, Claude Code must stop completely.

Do not proceed to Gate 3 until explicit user confirmation is received.

Do not edit, create, rename, delete, or move files until Gate 2 is approved.

## Required File Scope Declaration

Before building, Claude Code must output:

Files I will create:
- [file path]

Files I will edit:
- [file path]

Files I will not touch:
- Global styles unless required
- Unrelated pages
- Unrelated components
- Unrelated routes
- Unrelated navigation behavior
- Unrelated schema utilities
- Unrelated form handlers

If the build requires touching a global file, Claude Code must explain why before proceeding.

## Form and CTA Specification Requirement

For any lead-generation page, the final Claude Code prompt must specify:

- Form fields
- Field types
- Required fields
- Validation rules
- Submit button label
- Submission destination if known
- Fallback if no handler exists
- Confirmation behavior
- Thank-you page route if known
- Tap-to-call behavior
- Mobile sticky CTA behavior
- CTA placement by section

If the form submission destination is unknown, Claude Code must add a TODO comment and report it as a blocker or launch dependency.

## Broken Internal Link Prevention

Claude Code must only create internal links to routes that already exist or are being created in the same build.

If a target route does not exist, Claude Code must skip the link and report it in Gate 5.

Do not create broken links.

## Schema Implementation Requirement

Claude Code must inspect the existing schema implementation pattern before adding schema.

It must identify whether the project uses:

- JSON-LD script tags
- Next.js metadata or head component
- Astro frontmatter or layout injection
- CMS schema fields
- Reusable schema utility
- Manual inline script component
- Other schema system

Claude Code must follow the existing project pattern.

Do not invent fake reviews, ratings, pricing, hours, addresses, credentials, guarantees, or business claims.

## Conditional Schema Safety

AggregateRating schema:
Only include if real, verified ratingValue and reviewCount are provided.

FAQPage schema:
Only include if FAQs are visible on the page and schema text exactly matches visible text.

HowTo schema:
Only include if the visible process section has 3 or more named steps that match the schema.

BreadcrumbList schema:
Only include if visible breadcrumbs are rendered or added.

## Pricing Claim Safety

Any specific pricing claim, price range, discount, special offer, financing claim, average cost, or cost estimate must be flagged for client confirmation.

If pricing is not verified, use quote-based language instead.

Safe fallback:
"Pricing depends on the number of items, accessibility, and job size. Request a free quote before scheduling service."

## Navigation Update Scope Limit

If navigation must be updated, Claude Code may only add the required link.

Do not:

- Restructure navigation
- Reorder existing links
- Change styling
- Modify header/footer layout
- Rename navigation files
- Alter unrelated menu behavior

## Sitemap Conditional Logic

If the project uses a static sitemap.xml, add the new page URL.

If the sitemap is dynamically generated, confirm whether the route is automatically included.

If sitemap behavior is unclear, add:

TODO: Confirm new page URL is included in sitemap before launch.

Do not refactor the sitemap system unless required.

## Gate 4 — Validation Requirement

After building, Claude Code must validate:

- Route resolves
- No duplicate route exists
- Metadata is present
- Canonical is present
- One H1 exists
- Sections are in correct order
- Form fields match requirements
- CTA links work
- Tap-to-call uses tel: protocol
- Internal links resolve
- Schema matches visible content
- Conditional schema rules are followed
- Images have alt text
- Accessibility basics pass
- Mobile layout works
- Desktop layout works
- No unrelated files were modified
- Build/lint/test commands pass if available

If validation fails, Claude Code must fix the issue before reporting.

## Gate 5 — Final Report Requirement

Claude Code must finish with a report that includes:

1. What was built
2. Files created
3. Files edited
4. Files intentionally not touched
5. Route created
6. Metadata added
7. Schema added
8. Schema intentionally skipped and why
9. Internal links added
10. Internal links skipped and why
11. CTA placements added
12. Form behavior and remaining TODOs
13. Client-confirmation flags
14. Validation results
15. Remaining blockers
16. Recommended next step

## Final Claude Code Prompt Requirement

The final output of this prompt must be a paste-ready Claude Code prompt.

It must include the specific project/page details, route, metadata, page sections, schema requirements, CTA requirements, guardrails, validation checklist, and report format.

Do not output only a strategy summary.

Do not assume Claude Code remembers previous prompts.

## Token Efficiency Rule

If the strategy has already been approved, compress strategy context and focus on implementation instructions.

Do not regenerate the full strategy.

Keep the final Claude Code prompt complete, but remove repeated explanations that do not affect implementation.

## Prompt Revision: Prompt 06 Master Hard Gates and AEO/LLM Implementation Requirements

## Pre-Build Stop Checklist

Every Claude Code build prompt must include this checklist before any file edits begin.

Claude Code must stop and ask for clarification if any required item is missing.

Required before build:

- Approved route is confirmed
- Route conflict check is complete
- Framework and routing pattern are identified
- Metadata is confirmed
- Approved section structure is confirmed
- Primary CTA is confirmed
- Form behavior is confirmed or flagged
- Schema types and required fields are confirmed
- Client-confirmation values are flagged
- Internal links are verified or marked as skipped
- File scope declaration is complete
- Gate 2 plan is approved by the user

Hard stop rule:

Do not proceed to file creation or file editing until Gate 1 inspection is complete, Gate 2 plan is complete, file scope is declared, and the user explicitly approves moving to Gate 3.

## Required AEO Answer Format

For any page with FAQ, People Also Ask, voice search, or answer-engine intent, FAQ answers must use direct-answer format.

Each FAQ answer must follow this structure:

1. First sentence: direct answer
2. Second sentence: short clarification or trust-building detail
3. Optional third sentence: CTA, local detail, or process note

Do not write vague answers.

Do not bury the answer after a long introduction.

Do not include FAQPage schema unless the visible FAQ text exactly matches the schema text.

## Required LLM and AI Citation Notes

Every Claude Code build prompt must include instructions to make key page sections AI-readable.

For service pages, include:

- A visible entity authority block near the top of the page
- A clear sentence naming the business, service, and location
- Service scope stated in plain language
- Local service area stated clearly
- FAQ answers written in direct-answer format
- No hidden text
- No schema-only claims
- No unsupported claims

Example:

"[Business Name] provides [service] in [location] for [target audience]. The company helps customers with [specific problems or use cases]."

This block must be visible body content, not hidden metadata.

## Schema Field-Level Requirement

Every Claude Code build prompt must include schema field instructions, not just schema type names.

For each schema type, include:

- Schema type
- Purpose
- Required fields
- Conditional fields
- Values to confirm
- Values that must not be invented
- Whether schema must match visible content
- Where schema should be injected based on the project pattern

For local service pages, include at minimum:

LocalBusiness:
- name
- url
- telephone
- address if available
- areaServed
- openingHours if available
- description
- sameAs if available

Service:
- name
- serviceType
- provider
- areaServed
- description

FAQPage:
- visible questions only
- visible answers only
- exact text match required

BreadcrumbList:
- visible breadcrumb must also exist
- JSON-LD must match visible breadcrumb

AggregateRating:
- conditional only
- use only real verified ratingValue and reviewCount
- omit if values are not verified

HowTo:
- conditional only
- use only when visible process steps exist and match schema

## Fake Data Hard Stop

Claude Code must not invent:

- Reviews
- Ratings
- Review counts
- Pricing
- Discounts
- Financing claims
- Hours
- Address
- Phone number
- Licenses
- Certifications
- Years in business
- Job counts
- Guarantees
- Awards
- Service availability claims

If a required value is missing, Claude Code must:

1. Use a clearly labeled placeholder
2. Add a TODO or FLAG comment
3. Include the missing value in the final report
4. Avoid adding schema fields that require unverified data

## Competitive Differentiation Requirement

Every service page Claude Code prompt must include implementation instructions for at least 2 to 4 differentiation elements.

Possible differentiation elements:

- Same-day or next-day availability if confirmed
- Local service area specificity
- Transparent quote process
- Direct-answer FAQ section
- Item-specific service coverage
- Local trust block
- Objection-handling section
- Process section that reduces friction
- Mobile tap-to-call CTA
- Review or proof block if verified
- Local customer scenario competitors may ignore

Do not add fake differentiators.

Only use differentiators supported by the approved strategy or client-confirmed facts.

## Internal Link Safety Requirement

Claude Code must verify internal link targets before adding links.

If a target route does not exist:

- Do not add the link
- Report it as skipped
- Recommend it as a future page if useful

Do not create broken links.

## File Scope Declaration Requirement

Before build begins, Claude Code must declare:

Files I will create:
- [path]

Files I will edit:
- [path]

Files I will not touch:
- [path or category]

If a global file must be edited, explain why before proceeding.

Global navigation may only be updated if the brief explicitly requires it.

Global styles, layout, shared components, and unrelated pages must not be modified unless approved.

## Final Report-Back Requirement

Every Claude Code prompt must end with a required final report.

The report must include:

1. Summary of what was built
2. Files created
3. Files edited
4. Files intentionally not touched
5. Route created
6. Metadata added
7. Schema added
8. Schema skipped and why
9. Internal links added
10. Internal links skipped and why
11. CTA placements added
12. Form behavior and remaining TODOs
13. Client-confirmation flags
14. Validation results
15. Remaining blockers
16. Recommended next step

## Final Master Rule

The final Claude Code prompt must be self-contained.

Do not rely on Claude Code remembering prior strategy prompts.

Include the route, sections, metadata, schema, CTA requirements, form requirements, internal link rules, guardrails, validation checklist, and report format inside the final prompt.
