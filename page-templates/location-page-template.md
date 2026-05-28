# Beyond Elite Location Page Template

> Design skill routing: every build using this template must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md` (frontend-design-engineer + emil-kowalski-motion-design + impeccable-ui-polish + ux-ui-conversion-design + seo-aeo-llm-page-architecture). Location pages default to the Core Mode pass; primary location pages run Beyond-Elite per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode.

Use this template for location pages designed to build local relevance, GEO visibility, local SERP performance, AI search clarity, and lead generation.

## Routing and Enforcement

- **Page type:** Individual Location Page
- **Page value:** High
- **AI depth:** Level 3 Core SEO/AEO
- **Prompt:** Location Page Research + Implementation (`prompts/local-seo-location-page-research-prompt.md` + `prompts/local-seo-location-page-implementation-prompt.md`)
- **Required research:** local modifiers, city + service intent, anti-doorway checks, location FAQs per `docs/keyword-research-and-aeo-depth-standard.md`
- **Pass/fail gate:** `docs/pass-fail-page-quality-gates.md` (with anti-doorway check)
- **Customer-facing copy rules:** no em dashes, no double hyphens, no fake location/address claims per `docs/no-fake-data-policy.md` §2

Do not use a generic batch prompt for core location pages without explicit owner approval per `docs/prompt-router-and-ai-depth-standard.md`. Service-area-only positioning required: `LocalBusiness` schema must omit `streetAddress`.

## Page Strategy

Business Name:
[BUSINESS NAME]

Location Name:
[LOCATION NAME]

Page Type:
Location Page

Primary Keyword:
[PRIMARY KEYWORD]

Secondary Keywords:
[SECONDARY KEYWORDS]

Target Audience:
[TARGET AUDIENCE]

Primary CTA:
[PRIMARY CTA]

Secondary CTA:
[SECONDARY CTA]

Recommended URL Slug:
[URL SLUG]

Meta Title:
[META TITLE]

Meta Description:
[META DESCRIPTION]

Recommended Schema:
- WebPage
- BreadcrumbList
- FAQPage
- LocalBusiness if applicable
- Service if services are listed
- Organization if applicable

## Required Page Sections

1. Hero Section
   - Clear location-based H1
   - Short local intro
   - Primary CTA
   - Local trust signal
   - **Layout default:** Two-column conversion layout per `docs/service-business-conversion-layout.md` — location-aware content on the left (eyebrow, H1, sub, primary CTA, tap-to-call), quote/contact form (or approved placeholder) on the right, expanded container, mobile stacks content first then form.

2. Quick Local Answer
   - Explain who the page serves in this location
   - Mention the business, service/topic, and location clearly
   - Make the answer useful for AEO and AI search

3. Local Overview
   - Explain the local market, customer need, or service relevance
   - Avoid generic city-name swapping
   - Include real local context when available

4. Services or Categories Available in This Location
   - List relevant services or categories
   - Link to service pages where appropriate
   - Explain how each service supports local customers
   - **Service card grid default:** Render each service as a card following `docs/service-card-image-placeholder-standard.md` — image placeholder area at the top (brand-token background, consistent aspect ratio), then service title, short location-relevant description, and CTA link. Use the same card pattern as the homepage service preview for visual consistency across the build.

5. Local Problems / Local Search Intent
   - Identify what people in this area commonly need
   - Address local pain points
   - Support near-me and local intent searches

6. How the Business Helps Customers in This Area
   - Explain the value proposition locally
   - Include process, convenience, service area, and trust details

7. Nearby Areas
   - Mention nearby areas only when useful
   - Link to nearby location pages if they exist
   - Avoid overloading the page with unrelated locations

8. Local Trust Signals
   - Use verified trust signals only
   - Include service area clarity, local experience, process, or real proof if available

9. Related Services / Internal Links
   - Link to services available in this location
   - Link to nearby locations
   - Link to contact or quote page

10. Location-Based AEO FAQs
   - Include 5 to 8 local FAQs
   - Use natural local phrasing
   - Support People Also Ask, voice search, and FAQ schema

11. Final Local CTA
   - Restate location relevance
   - Make next step clear
   - Include phone, form, booking, quote, or listing path
   - **Layout default:** If the hero already contains a form (the standard per `docs/service-business-conversion-layout.md`), the Final Local CTA is text + primary CTA + tap-to-call only — no duplicate form. If the hero is standard layout, the Final Local CTA may host the form using the same two-column pattern.

## Multi-Platform Requirements

The page should support:
- Google Search
- Bing
- Apple Maps / Apple Search
- Google Business Profile
- Bing Places
- Local intent SERP
- AI assistants
- ChatGPT
- Perplexity
- Featured snippets
- People Also Ask
- Rich snippets
- Topical authority
- Lead generation

## Guardrails

Do not include:
- Generic city-name swapping
- Fake local claims
- Fake address
- Fake service areas
- Unsupported reviews
- Repetitive local keywords
- Thin location content

## Claude Code Notes

Claude Code should:
- Follow existing location page patterns
- Add metadata
- Add local internal links
- Add schema where supported
- Preserve design system
- Avoid duplicate routes
- Confirm mobile layout
