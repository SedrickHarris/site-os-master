# Beyond Elite Category Page Template

> Design skill routing: every build using this template must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md` (frontend-design-engineer + emil-kowalski-motion-design + impeccable-ui-polish + ux-ui-conversion-design + seo-aeo-llm-page-architecture). Category pages default to Core Mode; revenue-critical hubs run Beyond-Elite per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode.

Use this template for category pages that organize related services, topics, locations, or content clusters.

## Routing and Enforcement

- **Page type:** Category / Hub Page
- **Page value:** Medium (Standard) or High (when used as a services hub, locations hub, or pillar hub)
- **AI depth:** Level 3 Core SEO/AEO (or Level 5 when used as a revenue-critical hub)
- **Prompt:** Services Hub or Locations Hub variants of the individual SEO/AEO prompts (`prompts/seo-aeo-service-page-research-prompt.md` / `prompts/local-seo-location-page-research-prompt.md` adapted for hub use), or Prompt 06 with explicit hub instructions
- **Required research:** taxonomy mapping, keyword clusters, internal-link plan, AEO FAQ map per `docs/keyword-research-and-aeo-depth-standard.md`
- **Pass/fail gate:** `docs/pass-fail-page-quality-gates.md`
- **Customer-facing copy rules:** no em dashes, no double hyphens, no fake claims per `docs/no-fake-data-policy.md`

When a category page acts as a high-value hub (services hub, locations hub), do not use a generic batch prompt without explicit owner approval per `docs/prompt-router-and-ai-depth-standard.md`.

## Page Strategy

Category Name:
[CATEGORY NAME]

Business Name:
[BUSINESS NAME]

Primary Keyword:
[PRIMARY KEYWORD]

Target Audience:
[TARGET AUDIENCE]

Primary CTA:
[PRIMARY CTA]

Recommended Schema:
- WebPage
- BreadcrumbList
- FAQPage if FAQs exist
- ItemList if appropriate
- Organization if applicable

## Required Page Sections

1. Hero Section
   - Clear H1
   - Category explanation
   - Primary CTA

2. Quick Category Answer
   - Define the category
   - Explain what users can find or do here

3. Category Overview
   - Explain the topic or service group
   - Support search intent and entity clarity

4. Subcategory or Related Page Links
   - Link to child service pages, location pages, or related content
   - Use clear anchor text
   - **Service-business category-card default:** When the category page is for a service-based business and the subcategory list is rendered as a card grid (rather than a plain text list), render each card following `docs/service-card-image-placeholder-standard.md` — image placeholder area at the top with brand-token background and consistent aspect ratio, then category/service title, short description, and CTA link. If the list is rendered as inline anchor text only, the card standard does not apply.

5. Who This Category Helps
   - Explain customer segments
   - Address common pain points

6. Featured Benefits
   - Explain value of the category
   - Build trust and relevance

7. Topical Authority Section
   - Connect pillar and cluster pages
   - Recommend supporting blogs or related pages

8. AEO FAQ Section
   - Include category-level FAQs
   - Support PAA, voice search, and FAQ schema

9. Final CTA
   - Guide user to the next step

## Guardrails

Do not create:
- Thin category pages
- Link-only pages with no context
- Repetitive anchor text
- Too many links without purpose

## Claude Code Notes

Claude Code should:
- Preserve site hierarchy
- Link to child pages
- Add metadata
- Add schema if supported
- Avoid orphan pages
