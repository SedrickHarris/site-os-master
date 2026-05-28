# Beyond Elite Homepage Template

> Design skill routing: every build using this template must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md` (frontend-design-engineer + emil-kowalski-motion-design + impeccable-ui-polish + ux-ui-conversion-design + seo-aeo-llm-page-architecture). Homepages run the Beyond-Elite design pass per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode.

Use this template for homepages that need to explain the brand, build trust, guide users, support SEO/AEO/LLM visibility, and convert visitors.

## Routing and Enforcement

- **Page type:** Homepage
- **Page value:** High
- **AI depth:** Level 5 Beyond-Elite
- **Prompt:** Individual Homepage Beyond-Elite (`prompts/individual-homepage-research-prompt.md` + `prompts/individual-homepage-implementation-prompt.md`)
- **Required research:** comprehensive keyword type research per `docs/keyword-research-and-aeo-depth-standard.md`, AEO FAQ research, content gap identification
- **Pass/fail gate:** `docs/pass-fail-page-quality-gates.md`
- **Customer-facing copy rules:** no em dashes, no double hyphens, no fake claims per `docs/no-fake-data-policy.md`

Do not use a generic batch prompt for the homepage without explicit owner approval per `docs/prompt-router-and-ai-depth-standard.md`.

## Page Strategy

Business Name:
[BUSINESS NAME]

Website Name:
[WEBSITE NAME]

Primary Offer:
[PRIMARY OFFER]

Secondary Offers:
[SECONDARY OFFERS]

Target Audience:
[TARGET AUDIENCE]

Primary CTA:
[PRIMARY CTA]

Secondary CTA:
[SECONDARY CTA]

Recommended Schema:
- WebPage
- Organization
- LocalBusiness if applicable
- BreadcrumbList if applicable
- FAQPage if FAQs are included

## Required Page Sections

1. Hero Section
   - Clear positioning statement
   - Short direct-answer brand summary
   - Primary CTA
   - Secondary CTA
   - Trust signal
   - **Service-based business default:** Use the two-column conversion layout per `docs/service-business-conversion-layout.md` — content on the left (eyebrow, H1, sub, primary CTA, secondary CTA, optional verified trust bullets), quote form / contact form / approved form placeholder on the right, expanded container (`max-w-[1440px]`), mobile stacks content first then form. Do not use this layout for non-service-business homepages (directory, SaaS, etc.) — follow that project type's pattern instead.

2. Quick Answer / What We Do
   - Explain the business in plain language
   - Make it easy for Google, Bing, ChatGPT, and Perplexity to understand

3. Core Services or Offers
   - Show primary services or offers
   - Link to service pages
   - Explain who each service helps
   - **Service-based business default:** Render each service as a card following `docs/service-card-image-placeholder-standard.md` — image placeholder area at the top (consistent aspect ratio, brand-token background, `aria-hidden` when decorative), then service title, short description, and CTA link with arrow affordance. No baked-in text, no fake photography, TODO comment for future real-image replacement.

4. Problems We Solve
   - Address customer pain points
   - Connect problems to solutions

5. Why Choose Us
   - Use verified differentiators
   - Avoid generic claims
   - Include proof where available

6. Process / How It Works
   - Explain the user journey
   - Reduce confusion and friction

7. Service Areas or Audience Served
   - Include local service areas if applicable
   - Link to location pages when available

8. Topical Authority Section
   - Link to major service, category, location, or blog sections
   - Support site architecture

9. AEO FAQ Section
   - Include homepage-level FAQs
   - Answer common buying and trust questions

10. Final CTA
   - Restate the main offer
   - Make the next step clear
   - **Service-based business default:** If the hero already contains a form (the standard for service-based business homepages per `docs/service-business-conversion-layout.md`), the Final CTA is text + primary CTA + optional tap-to-call only — no second form. If the hero is standard layout without a form, the Final CTA may host the form using the same two-column pattern.

## Multi-Platform Requirements

Support:
- Google Search
- Bing
- Apple Search or Apple Maps if local
- Google Business Profile if local
- ChatGPT
- Perplexity
- Featured snippets
- People Also Ask
- Rich snippets
- Topical authority
- Lead generation

## Claude Code Notes

Claude Code should:
- Preserve existing homepage structure if present
- Reuse established components
- Add or confirm metadata
- Add organization or local schema where appropriate
- Link to core site pages
- Confirm CTA visibility on mobile
