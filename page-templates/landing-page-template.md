# Beyond Elite Landing Page Template

> Design skill routing: every build using this template must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md` (frontend-design-engineer + emil-kowalski-motion-design + impeccable-ui-polish + ux-ui-conversion-design + seo-aeo-llm-page-architecture). Landing pages default to Beyond-Elite; revenue-critical pillar landing pages run Full Competitive Build per `routing/workflow-mode-map.md` § Required Design Skill Pass per Mode.

Use this template for landing pages designed to convert traffic from ads, email, social, local campaigns, or targeted offers.

## Routing and Enforcement

- **Page type:** Landing Page (conversion)
- **Page value:** High (for revenue-critical landing pages)
- **AI depth:** Level 4 Conversion (or Level 5 for revenue-critical pillar landing pages)
- **Prompt:** Conversion Page Research + Implementation (`prompts/conversion-page-research-prompt.md` + `prompts/conversion-page-implementation-prompt.md`)
- **Required research:** conversion keywords, objection-handling phrases, form-flow plan, AEO FAQ map per `docs/keyword-research-and-aeo-depth-standard.md`
- **Pass/fail gate:** `docs/pass-fail-page-quality-gates.md`
- **Customer-facing copy rules:** no em dashes, no double hyphens, no fake claims, no invented pricing per `docs/no-fake-data-policy.md`

Do not use a generic batch prompt for revenue-critical landing pages without explicit owner approval per `docs/prompt-router-and-ai-depth-standard.md`.

## Page Strategy

Landing Page Name:
[LANDING PAGE NAME]

Business Name:
[BUSINESS NAME]

Offer:
[OFFER]

Target Audience:
[TARGET AUDIENCE]

Traffic Source:
[TRAFFIC SOURCE]

Primary CTA:
[PRIMARY CTA]

Secondary CTA:
[SECONDARY CTA]

Recommended Schema:
- WebPage
- Organization
- LocalBusiness if applicable
- Service if service-based
- FAQPage if FAQs exist

## Required Page Sections

1. Hero Section
   - Clear offer
   - Strong value statement
   - Primary CTA
   - Trust signal
   - **Layout default (service-based offers):** Two-column conversion layout per `docs/service-business-conversion-layout.md` — content on the left (eyebrow, H1, sub, primary CTA, optional tap-to-call), lead form (or approved placeholder) on the right, expanded container, mobile stacks content first then form. For landing pages that intentionally route off-page (app-store install, calendar booking on a third-party domain, etc.), use the standard single-column hero instead.

2. Quick Answer / Offer Summary
   - Explain what the offer is
   - Explain who it is for
   - Explain why it matters

3. Problem and Desired Outcome
   - State the customer problem
   - Show the outcome the offer helps create

4. Benefits Section
   - Focus on benefits, not just features
   - Make value easy to scan

5. What Is Included
   - Clarify deliverables
   - Reduce uncertainty
   - **Service-card variant default:** If "What Is Included" renders as a service / offer card grid (rather than a bulleted text list), render each card following `docs/service-card-image-placeholder-standard.md` — image placeholder area at the top with brand-token background, then card title, short description, and CTA. If the section renders as a plain bullet list, the card standard does not apply.

6. Why Choose This Offer
   - Add trust and proof where verified
   - Address why this business is the right choice

7. Objection Handling
   - Address cost, trust, time, complexity, and next-step concerns

8. FAQ Section
   - Include buying-intent FAQs
   - Support conversion and AEO

9. Final CTA
   - Repeat offer
   - Make action clear
   - Reduce friction
   - **Layout default:** If the hero already contains a form (the standard for service-based landing pages per `docs/service-business-conversion-layout.md`), the Final CTA is text + primary CTA only — no duplicate form. If the hero is standard layout, the Final CTA may host the form using the same two-column pattern.

## Conversion Rules

Landing pages should:
- Keep the CTA path focused
- Avoid too many distracting links
- Use strong trust signals
- Support mobile conversion
- Make the next step obvious

## Guardrails

Do not include:
- Too many outbound links
- Fake urgency
- Fake guarantees
- Fake testimonials
- Unsupported claims
- Unclear offer language

## Claude Code Notes

Claude Code should:
- Preserve landing page focus
- Add metadata
- Add schema if supported
- Keep CTA visible
- Confirm mobile layout
- Avoid unnecessary navigation changes
