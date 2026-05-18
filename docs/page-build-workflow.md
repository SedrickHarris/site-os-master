# Page Build Workflow

Use this workflow for every important website page.

## Page-Type Routing Before Build

Before any page brief, every page build must select:

- **Page type** (homepage, service, location, service + location, hub, conversion, FAQ, legal, utility)
- **Prompt type** per `docs/prompt-router-and-ai-depth-standard.md`
- **AI depth** (Level 1 Utility through Level 6 Competitive Research)
- **Research depth** per `docs/keyword-research-and-aeo-depth-standard.md`
- **QA gate** per `docs/pass-fail-page-quality-gates.md`

High-value pages (homepage, free quote, contact, services hub, locations hub, about, FAQ hub, core service / location / service+location / landing pages) require individual prompts and the high-value page enforcement standard in `docs/high-value-page-enforcement-standard.md`. They do not run under generic batch prompts without explicit approval.

If routing fails (wrong prompt or wrong depth), stop and return:

```
ROUTING FAIL: Incorrect prompt or AI depth selected.
```

## Step 1: Page Brief

Create a page brief that includes:

- Business name
- Page type
- Target location
- Primary service or topic
- Target audience
- Search intent
- Pain points
- Desired CTA
- Internal links
- Special requirements

## Step 2: Keyword Strategy

Identify:

- Primary keyword
- Secondary keywords
- Long tail keywords
- Local SEO keywords
- AEO question keywords
- Voice search keywords
- Transactional keywords
- Informational keywords
- Comparison keywords
- Internal linking anchor text

Organize keywords by:

- Search intent
- Funnel stage
- Page section
- Priority

## Step 3: Page Outline

Create the page outline with:

- H1
- Meta title
- Meta description
- URL slug
- Hero section
- Trust section
- Main content sections
- Local relevance section
- AEO FAQ section
- Internal links
- CTA section
- Schema recommendations
- Image recommendations

### Service Business Layout Note

If the build is for a service-based business (homepage, service page, location page, service + location page, landing page, or any conversion-focused section), the **Hero section** and the primary conversion **CTA section** must default to the two-column conversion layout per `docs/service-business-conversion-layout.md`:

- Left column: headline, sub, primary CTA, secondary CTA (tap-to-call), optional verified trust bullets.
- Right column: quote form, contact form, booking form, or approved form placeholder.
- Mobile: stack content first, form second.
- Container: expanded (`max-w-[1440px]` with progressive padding).
- Do not duplicate forms across multiple sections on the same page — choose one primary form moment (usually the hero).

This does not apply to non-conversion pages (blog posts, legal, about, 404). For those, follow the existing project layout pattern.

### Service Card Image Placeholder Note

If the page includes any reusable service card grid (homepage service preview, services hub, related-service section, location page service grid, service + city matrix, landing page service cards), every service card must include a visual image placeholder area at the top per `docs/service-card-image-placeholder-standard.md`:

- Aspect ratio: `aspect-[16/10]` (or `aspect-[4/3]`), consistent across all cards in a grid.
- Background: brand tokens (soft-blue, light-gray, subtle gradient) — not raw hex, not stock photography, not auto-pulled imagery.
- Accessibility: `aria-hidden="true"` when decorative; `alt` text only when a real image lands.
- TODO: leave a code comment noting an owner-supplied photo should replace the placeholder when available.
- No text baked into the placeholder image; no fake before/after; no fake team/customer/project photos per `docs/no-fake-data-policy.md` §8–§9.

This does not apply to text-only navigation lists or inline service mentions in body copy.

## Step 4: AEO FAQ Plan

Create FAQs that:

- Match natural customer questions
- Include service and location terms where relevant
- Provide direct answers
- Support FAQ schema
- Improve voice search visibility
- Support AI/LLM citation readiness

## Step 5: Technical SEO Plan

Include:

- Metadata
- Heading hierarchy
- URL slug
- Internal links
- Image alt text
- Schema
- Breadcrumbs
- Accessibility notes
- Page speed notes
- Indexing notes

## Step 6: 10 Metric Analysis

Analyze the page outline against:

1. SEO
2. AEO
3. Voice search
4. SERP
5. GEO
6. Rich snippets
7. AI/LLM citation
8. Search dominance
9. Engagement
10. Conversion

For each metric, provide:

- Score from 1 to 10
- What is working
- What is missing
- Specific fix
- Priority level

## Step 7: Gap Fixes

Apply high priority and medium priority fixes.

Return:

- Updated page structure
- Updated keyword placement plan
- Updated FAQ plan
- Updated schema plan
- Updated internal linking plan
- Updated CTA plan

## Step 8: Developer Build Brief

Create a concise build brief for Claude Code.

Include:

- Page goal
- Route
- Page sections
- Component needs
- Content requirements
- SEO requirements
- Schema requirements
- Image requirements
- Internal links
- Accessibility requirements
- Responsive design requirements
- Files likely to be created or updated

## Step 9: Claude Code Build

Claude Code should:

1. Inspect the project.
2. Identify the correct files.
3. Follow existing patterns.
4. Build or update the page.
5. Add metadata.
6. Add schema where applicable.
7. Add internal links.
8. Preserve existing functionality.

## Step 10: QA Review

Check:

- Route works
- Page renders
- H1 is correct
- Headings are logical
- Metadata exists
- Schema is valid or properly formatted
- Internal links work
- CTAs are clear
- Mobile layout works
- Images have alt text
- Content supports SEO, AEO, GEO, and conversion
