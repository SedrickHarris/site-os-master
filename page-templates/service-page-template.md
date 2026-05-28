# Beyond Elite Service Page Template

> Design skill routing: every build using this template must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md` (frontend-design-engineer + emil-kowalski-motion-design + impeccable-ui-polish + ux-ui-conversion-design + seo-aeo-llm-page-architecture). Service pages default to the Core Mode pass; core revenue services run Beyond-Elite per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode.

Use this template for service pages designed to rank, answer search intent, support AI and LLM visibility, build trust, and convert visitors into leads.

## Routing and Enforcement

- **Page type:** Individual Service Page
- **Page value:** High
- **AI depth:** Level 3 Core SEO/AEO (or Level 5 for core revenue services)
- **Prompt:** Service Page Research + Implementation (`prompts/seo-aeo-service-page-research-prompt.md` + `prompts/seo-aeo-service-page-implementation-prompt.md`)
- **Required research:** service keyword research, long-tail terms, pain points, FAQ research per `docs/keyword-research-and-aeo-depth-standard.md`
- **Pass/fail gate:** `docs/pass-fail-page-quality-gates.md`
- **Customer-facing copy rules:** no em dashes, no double hyphens, no fake claims per `docs/no-fake-data-policy.md`

Do not use a generic batch prompt for core service pages without explicit owner approval per `docs/prompt-router-and-ai-depth-standard.md`.

## Page Strategy

Business Name:
[BUSINESS NAME]

Service Name:
[SERVICE NAME]

Target Location:
[LOCATION IF APPLICABLE]

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
- Service
- FAQPage
- BreadcrumbList
- LocalBusiness if applicable
- Organization if applicable

## Required Page Sections

1. Hero Section
   - Clear H1
   - Short direct-answer intro
   - Service and location context
   - Primary CTA
   - Trust signal
   - **Layout default:** Two-column conversion layout per `docs/service-business-conversion-layout.md` — content on the left (eyebrow, H1, sub, primary CTA, optional tap-to-call), quote/contact/booking form (or approved placeholder) on the right, expanded container, mobile stacks content first then form.

2. Quick Answer Section
   - Define the service in plain language
   - Answer the main search intent quickly
   - Make the answer useful for AEO, voice search, ChatGPT, and Perplexity

3. Service Overview
   - Explain what the service is
   - Who needs it
   - Why it matters
   - What outcome the customer gets

4. Problems This Service Solves
   - List common pain points
   - Connect problems to the service
   - Use natural long-tail and problem-aware keywords

5. What Is Included
   - Break down the service clearly
   - Include deliverables, steps, or service components
   - Add related internal links where useful

6. Process / How It Works
   - Explain the customer journey
   - Keep steps simple
   - Reduce uncertainty and friction

7. Why This Service Matters
   - Explain the value of the service
   - Include safety, convenience, time savings, cost prevention, or business value where relevant

8. Why Choose This Company
   - Include real differentiators
   - Use only verified trust signals
   - Do not invent reviews, credentials, awards, or claims

9. Local Relevance Section
   - Include target location if applicable
   - Add local customer needs
   - Mention nearby areas only when useful
   - Avoid generic city-name swapping

10. Related Services / Internal Links
   - Link to related services
   - Link to relevant locations
   - Link to contact, quote, or booking page
   - Use natural anchor text
   - **Related-services card grid default:** When the related-services section uses a card grid (rather than an inline text link list), render each related service as a card following `docs/service-card-image-placeholder-standard.md` — image placeholder area at the top with brand-token background, then title, description, and CTA. Match the aspect ratio used by the homepage service preview for visual consistency.

11. AEO FAQ Section
   - Include 5 to 8 strong FAQs
   - Use real customer questions
   - Support People Also Ask, voice search, and FAQ schema
   - Keep answers concise and helpful

12. Final CTA Section
   - Restate value
   - Address next step
   - Include clear conversion path
   - **Layout default:** If the hero already contains a form (the standard for service pages per `docs/service-business-conversion-layout.md`), the Final CTA Section is text + primary CTA + optional tap-to-call only — no duplicate form. If the hero is standard layout without a form, the Final CTA may host the form using the same two-column pattern.

## Multi-Platform Requirements

The page should support:
- Google Search
- Bing
- Apple Search or Apple Maps if local
- Google Business Profile if local
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
- Fake reviews
- Fake ratings
- Fake pricing
- Unsupported claims
- Keyword stuffing
- Generic city-name swapping
- Hidden FAQ content
- Schema that does not match visible content

## Claude Code Notes

Claude Code should:
- Inspect existing page patterns
- Follow existing component structure
- Add metadata
- Add schema where supported
- Add internal links
- Preserve existing styles
- Avoid duplicate routes
- Confirm responsive layout
