# Design Vision Overlays

Site-type-specific design direction that layers on top of the universal Design Vision
sections in the five required SKILL.md files. Select the overlay that matches the
project type confirmed during intake. Copy the relevant section into the client repo at:

  docs/site-os/inputs/design-overlay.md

Claude Code reads this file at Gate 1 alongside the canonical skill files. The overlay
does not replace the universal design vision. It adds site-type-specific patterns,
calibrations, and constraints on top of it.

## How to Select and Apply

1. During Phase A intake, confirm the project type.
2. During Phase B scaffold, copy the relevant overlay section below into:
   docs/site-os/inputs/design-overlay.md in the client repo.
3. If no overlay exists for the project type, copy the Universal Fallback overlay.
4. Claude Code reads this file at Gate 1 as supplemental design direction.

---

## Overlay 1: Local Service Business

For: painting, cleaning, HVAC, plumbing, roofing, landscaping, junk removal,
flooring, electrical, pest control, and similar residential and commercial service businesses.

Hero layout:
- Two-column default: service and location headline left, lead capture form or
  trust block right. Stack single column on mobile with content above form.
- H1 format: "[Service] in [City]" or "[City] [Service]". Direct and indexable.
- Trust strip below hero: 3-5 signals in one horizontal row.
  Years in business, review count, license or insurance, response time, guarantee.
  Icon plus short label only. No prose.

Trust and conversion specifics:
- Tap-to-call link visible above the fold on mobile. This is not optional for service sites.
- Review count shown alongside star rating. "94 reviews" not just a star graphic.
- Project photos or before and after images placed between service copy and FAQ.
  Not at the bottom.
- Contact form: 3-4 fields maximum. Name, phone, service type, optional message.

Local SEO specifics:
- NAP must match Google Business Profile exactly: business name, address format, phone.
- Service area list on every service page, not just the homepage.
- Neighborhood or landmark references strengthen local relevance on location pages.
- City name in H1, opening paragraph, and at least one H2.

Schema required for this overlay:
- Service with areaServed and provider as LocalBusiness
- FAQPage
- BreadcrumbList
- LocalBusiness on homepage and contact page only
- AggregateRating only with confirmed real reviews

Motion calibration: trust-first. Nearly invisible. Fast hover states, subtle fade-up on
scroll, no dramatic transitions.

---

## Overlay 2: Creative Agency or Design Studio

For: web design agencies, branding studios, marketing agencies, video production,
photography studios, and other creative service businesses.

Hero layout:
- Full-width or nearly full-width with bold display typography.
- Centered or left-aligned headline. Work speaks before the CTA.
- Hero can include a featured project image, reel, or work sample at full bleed.
- CTA is secondary to the work preview in visual weight.

Typography calibration:
- Display H1 can go larger: text-5xl md:text-6xl lg:text-7xl.
- Tighter tracking on display text: tracking-tighter on H1.
- Consider a display serif or condensed sans for headings alongside a clean body sans.
  The font pairing is part of the brand expression on agency sites.

Portfolio and work section:
- Work grid: 2 col desktop, 1 col mobile. Full bleed images. Minimal card chrome.
- Case study cards: project name, client, brief descriptor. No lengthy copy on the card.
- Hover state on work cards: overlay with project name and category fades in.
  duration-300. This is one context where a slightly more expressive hover is appropriate.

Conversion specifics:
- Primary CTA: "Start a Project" or "Let's Talk". Specific to the agency context.
- Secondary CTA or social proof: client logos in a horizontal strip above or below the hero.
- Contact form: project type, timeline, budget range, brief description.
  More fields are appropriate here because lead qualification matters.

Motion calibration: more expressive than trust-first verticals. Scroll reveals are standard.
Work card hover overlays are appropriate. Still no parallax, no text typing effects,
no loading screens. The work is the motion showcase, not the UI chrome.

Schema required for this overlay:
- Organization
- WebSite
- BreadcrumbList
- FAQPage if FAQ section exists
- Service for individual service pages

---

## Overlay 3: Professional Services

For: law firms, accounting firms, financial advisors, consultants, insurance brokers,
real estate professionals, and similar credential-driven service businesses.

Hero layout:
- Conservative two-column or centered single column.
- Headline: outcome-focused and specific. "Tax Planning for Las Vegas Business Owners"
  not "Your Trusted Financial Partner."
- Professional headshot or team photo in hero when available.
  Real people reduce anxiety in high-trust purchase decisions.
- CTA: "Schedule a Consultation" or "Get Your Free Review".

Trust architecture (highest priority for this overlay):
- Credentials, certifications, and licenses in a visible trust block near the hero.
  These are table stakes for professional services. Missing them costs conversions.
- Client outcomes or case summaries (no fake data, no invented results).
- Professional associations and bar memberships if applicable.
- Years of experience or founding year when confirmed.

Typography calibration:
- Body text: text-base leading-relaxed. Comfortable reading. Not rushed.
- H2s can be longer and more descriptive than other site types.
  Professional services audiences read more before deciding.
- Avoid aggressive display sizing. text-4xl md:text-5xl for H1 is appropriate.
  text-6xl or larger reads as overselling.

Content depth:
- Longer page sections are appropriate and expected.
- FAQ sections should run 8-12 questions. Professional services audiences have
  more detailed pre-engagement questions.
- Process or methodology sections build confidence before conversion.

Motion calibration: nearly invisible. Fast, smooth, imperceptible. No scroll drama.
Confidence comes from substance and restraint, not from motion.

Schema required for this overlay:
- LocalBusiness or LegalService or AccountingService as appropriate
- FAQPage
- BreadcrumbList
- Person for attorney or advisor profile pages
- AggregateRating only with confirmed real reviews

---

## Overlay 4: SaaS and Software Product

For: software products, apps, tools, platforms, and technology services sold on subscription
or per-seat basis.

Hero layout:
- Product screenshot or UI preview above the fold on desktop.
  The product is the hero. Show it immediately.
- Headline: what the product does and for whom. Not a tagline.
  "Proposal software for agencies" not "Close deals faster."
- CTA: "Start Free Trial" or "Get Started Free". Free reduces friction.
  Secondary: "See How It Works" linking to demo or video.

Feature and benefit presentation:
- Alternating two-column sections: screenshot or illustration left, benefit copy right.
  Flip the order every other section for visual variety.
- Feature cards: icon, short label, one-sentence description. No long paragraphs in cards.
- Social proof: logos of known customers or recognizable brands if available.
  "Trusted by 2,400 teams" with logos outperforms any marketing copy.

Pricing section:
- Required for SaaS. Place it in the primary navigation and on the page.
  Hiding pricing increases bounce rate on software sites.
- Three-tier pricing: starter, professional, enterprise is the standard pattern.
- Highlight the recommended tier visually.

Motion calibration: more expressive than trust-first verticals. Product UI animations,
feature transitions, and scroll-triggered feature reveals are appropriate and expected.
Keep them purposeful. Demo videos autoplay muted. No sound without user interaction.

Schema required for this overlay:
- SoftwareApplication
- Organization
- FAQPage
- BreadcrumbList
- Offer for pricing pages

---

## Universal Fallback Overlay

For project types not covered by the overlays above.

Use the universal Design Vision from the SKILL.md files as the sole design direction.
No additional overlay-specific rules apply.

Add a note in docs/site-os/inputs/design-overlay.md stating the project type and
confirming that the universal baseline applies without modification.

If a new site type recurs across multiple client engagements, create a new overlay in
docs/design/design-vision-overlays.md in Site OS Master and propagate to client repos
via the Phase B scaffold step.
