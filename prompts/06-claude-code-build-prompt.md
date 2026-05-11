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
