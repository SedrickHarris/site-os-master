# Prompt 03 Ten-Metric Analysis Report

**Business:** Pit Stop Junk Removal
**Page:** Furniture and Appliance Removal — Las Vegas, NV
**Workflow:** Core Mode — Workflow Test 01
**Output path:** workflow-tests/workflow-test-01-core-mode/outputs/prompt-03-output.md

---

## 1. Execution Depth

**Selected depth: Standard**

Rationale: Full keyword strategy (Prompt 01) and complete page outline (Prompt 02) are available. Page is a normal-priority service page with moderate local competition. Not high-revenue or highly competitive enough to warrant Deep depth. No override requested.

---

## 2. Source Context Review

### Sources Reviewed

- Prompt 01 Input: `workflow-tests/workflow-test-01-core-mode/inputs/prompt-01-input.md`
- Prompt 01 Keyword Strategy Report (provided in session)
- Prompt 02 Page Outline Report (provided in session)
- Prompt 03 prompt file: `prompts/03-ten-metric-analysis-prompt.md`
- `docs/core-mode-workflow-map.md`
- `prompts/prompt-master-status.md`

### Page or Strategy Context

- Page type: Service page
- Page goal: Lead generation — quote requests, calls, form submissions
- Target audience: Homeowners, renters, landlords, property managers, real estate agents, small business owners in Las Vegas and Clark County
- Primary intent: Transactional / Local — bottom-funnel, ready-to-hire
- Secondary intent: Informational / Problem-aware
- Primary CTA: Request a Free Quote
- Secondary CTA: Call Now
- Target URL: `/services/furniture-appliance-removal-las-vegas`
- Brand: Racing-inspired — red (#B82429), black, white, checkered flag

### Keyword Context

- Primary keyword: `furniture removal Las Vegas`
- Secondary: appliance removal Las Vegas, couch removal Las Vegas, sofa removal Las Vegas, refrigerator removal Las Vegas, washer and dryer removal Las Vegas, furniture hauling Las Vegas, large appliance removal Las Vegas
- Long-tail: who picks up old furniture in Las Vegas, how to get rid of old appliances Las Vegas, furniture removal service near me Las Vegas, large item removal Las Vegas
- Flagged: same-day furniture removal Las Vegas (UNCONFIRMED), furniture removal cost Las Vegas (UNCONFIRMED), Henderson/Summerlin/North Las Vegas variants (CARRY FORWARD)

### Outline Context

9-section page outline complete:
1. Hero — H1, dual CTA, trust micro-copy
2. Direct Answer — featured snippet target
3. What We Remove — item list (furniture + appliances)
4. How It Works — 3-step process
5. Why Pit Stop Junk Removal — differentiators
6. Service Area — GEO section, city list
7. Trust and Social Proof — placeholder slots
8. FAQ — 10 questions, AEO-structured
9. Final CTA — quote form + call

Internal linking, schema opportunities, and CTA flow all defined. Meta title and slug defined.

### Missing Context

See Section 4.

---

## 3. Confirmed Inputs

| Item | Value |
|------|-------|
| Business name | Pit Stop Junk Removal |
| Business type | Junk removal — residential and commercial |
| Target service | Furniture and Appliance Removal |
| Primary city | Las Vegas, NV |
| Region | Clark County, Nevada |
| Page type | Service page |
| Page goal | Lead generation |
| Primary CTA | Request a Free Quote |
| Secondary CTA | Call Now |
| Target URL | `/services/furniture-appliance-removal-las-vegas` |
| Primary keyword | furniture removal Las Vegas |
| H1 | Furniture and Appliance Removal in Las Vegas, NV |
| Item list | Sofas, couches, mattresses, bed frames, dressers, tables, office furniture, refrigerators, washers, dryers, dishwashers, ovens |
| Brand colors | Red #B82429, Black, White |
| Brand style | Racing-inspired, checkered flag |
| Target audience | Homeowners, renters, landlords, property managers, real estate agents, small business owners |
| Known differentiators | Local Las Vegas company, fast flexible scheduling, residential and commercial, eco-friendly disposal, Clark County coverage |
| Service area (display copy) | Las Vegas, Henderson, North Las Vegas, Boulder City, Enterprise, Summerlin, Green Valley, Spring Valley, Paradise |
| Known services | Same-day and emergency removal (service exists per input; specific claim UNCONFIRMED) |

---

## 4. Missing or Unconfirmed Inputs

| Item | Why it matters to scoring | Status | Carry forward to Prompt 04 |
|------|--------------------------|--------|---------------------------|
| Phone number | Tap-to-call CTA; LocalBusiness schema telephone field; GBP NAP | NEEDS CLIENT CONFIRMATION | Yes |
| Street address / ZIP | LocalBusiness schema; Google Maps / Apple Maps NAP consistency | NEEDS CLIENT CONFIRMATION | Yes |
| Business hours | LocalBusiness schema openingHours; voice search "are they open now" | NEEDS CLIENT CONFIRMATION | Yes |
| Confirmed service area cities (schema-safe) | areaServed schema; GEO scoring ceiling | NEEDS CLIENT CONFIRMATION | Yes |
| Reviews / ratings / reviewer names | AggregateRating schema; trust section; Rich Snippets and SERP star display; E-E-A-T | NEEDS CLIENT CONFIRMATION — DO NOT INVENT | Yes |
| Pricing | FAQ Q6 answer; commercial keyword intent; conversion confidence | NEEDS CLIENT CONFIRMATION | Yes |
| Same-day / emergency availability (specific claim) | Urgency keyword; FAQ Q10; hero subheading | NEEDS CLIENT CONFIRMATION | Yes |
| Licenses / certifications / insurance | Trust section; E-E-A-T; conversion confidence | NEEDS CLIENT CONFIRMATION | Yes |
| Years in business | Differentiators section; E-E-A-T | NEEDS CLIENT CONFIRMATION | Yes |
| Production domain | Canonical URL; og:url; GSC/Bing Webmaster submission; sitemap | NEEDS CLIENT CONFIRMATION | Yes |
| Form endpoint | Quote form functionality; primary lead capture | NEEDS CLIENT CONFIRMATION | Yes |
| Google Business Profile details | GBP schema signals; map pack eligibility; Apple Maps alignment | NEEDS CLIENT CONFIRMATION | Yes |
| Hero image / photo assets | Visual trust signal; engagement; branded photo vs. stock | NEEDS CLIENT CONFIRMATION | Yes |
| Items not accepted | FAQ completeness; conversion friction reduction | NEEDS CLIENT CONFIRMATION | Yes |

---

## 5. Overall Ten-Metric Score

**Score: 61 / 100**

**Summary:** The page strategy is structurally sound and well-planned. Keyword coverage is strong, the page outline covers all required sections, AEO and FAQ architecture is in place, and the CTA flow is correctly designed. The score ceiling is limited by the volume of unconfirmed client data — specifically NAP details, reviews/ratings, service area schema confirmation, pricing, same-day availability, and credentials. No metric is scored using invented data. All suppressed scores reflect real missing dependencies that can be resolved through client confirmation.

---

## 6. Category Scores

### Page Type Weighting

**Page type: Service page — local lead generation**

| Metric | Weight | Rationale |
|--------|--------|-----------|
| SEO | 15% | Primary ranking driver for a local service page |
| GEO / Local SEO | 15% | Local pack, map visibility, and NAP signals are critical for this page type |
| Conversion | 12% | Page goal is lead generation; CTA quality directly affects business value |
| AEO | 12% | FAQ and direct-answer structure drives featured snippets and PAA |
| SERP | 10% | Title, meta, rich snippets, and star ratings affect CTR and click volume |
| AI / LLM Citation Readiness | 10% | Growing channel for local service discovery; AI assistants cite structured local pages |
| Rich Snippets | 8% | FAQPage, HowTo, AggregateRating — high impact on SERP visibility |
| Engagement | 8% | Bounce rate, scroll depth, and time-on-page affect quality signals |
| Voice Search | 7% | Near-me and conversational queries matter for local service discovery |
| Search Dominance | 3% | No competitive analysis has been run; weighted lower until Prompt 11 is executed |

**Total: 100%**

---

### 1. SEO

**Raw score: 7 / 10**
**Weighted score: 10.5 / 15**
**Status: Good — minor gaps**

**Analysis:** Primary keyword `furniture removal Las Vegas` is correctly identified, placed in the H1, meta title, and URL slug. Secondary and long-tail keywords are mapped to the page and FAQs. Intent alignment is strong (transactional / local / bottom-funnel). Internal linking opportunities are planned but not confirmed against a live site structure. Meta description is outlined but not finalized. Canonical URL and og:url cannot be confirmed without a production domain.

**Recommended fixes:**
- Finalize meta description (approximately 150–155 characters, city-qualified, with free quote signal)
- Confirm production domain for canonical and og:url
- Confirm site structure to finalize internal link map

**Flagged items:**
- Production domain: NEEDS CLIENT CONFIRMATION — affects canonical URL
- Internal link map: PARTIALLY VERIFIABLE — outline covers expected pages; full map requires confirmed site structure

---

### 2. AEO

**Raw score: 7 / 10**
**Weighted score: 8.4 / 12**
**Status: Good — two FAQ answers flagged**

**Analysis:** FAQ section is planned with 10 questions mapped to People Also Ask intent and conversational search patterns. Direct-answer section (Section 2) is outlined for featured snippet targeting. AEO copy is designed for short, extractable answers. FAQ structure supports FAQPage schema. The two flagged FAQ answers (pricing and same-day availability) reduce the score slightly because they cannot be answered with specific claims until client confirms.

**Recommended fixes:**
- Write FAQ Q6 (pricing) with a safe conditional answer: "Contact us for a free quote" — do not include dollar amounts until confirmed
- Write FAQ Q10 (same-day) with a safe conditional answer: "We offer flexible scheduling — contact us to discuss your timeline" — do not claim same-day until confirmed
- Ensure direct-answer section (Section 2) opens with a complete, standalone answer usable by AI assistants and voice search

**Flagged items:**
- FAQ Q6 (pricing): NEEDS CLIENT CONFIRMATION
- FAQ Q10 (same-day availability): NEEDS CLIENT CONFIRMATION

---

### 3. Voice Search

**Raw score: 6 / 10**
**Weighted score: 4.2 / 7**
**Status: Adequate — near-me and conversational phrases present; urgency phrases unconfirmed**

**Analysis:** Near-me query signals (`furniture removal near me`, `appliance removal near me`) are incorporated in the keyword strategy. Conversational queries (`who picks up old furniture in Las Vegas`, `get rid of old couch Las Vegas`) are mapped to the FAQ and direct-answer sections. Voice search relies heavily on confirmed NAP data (address, hours, phone) for "are they open now" and proximity-based queries. All NAP fields are unconfirmed, which limits voice search performance.

**Recommended fixes:**
- Confirm NAP data (address, hours, phone) — these directly feed LocalBusiness schema, which is the primary voice search signal source
- Ensure FAQ answers are phrased as complete, spoken-friendly sentences
- Add a `speakable` JSON-LD candidate if the direct-answer section is concise and standalone

**Flagged items:**
- Address, phone, hours: NEEDS CLIENT CONFIRMATION — limits voice search trigger eligibility
- Same-day urgency phrase: NEEDS CLIENT CONFIRMATION — do not use in page copy or FAQ until confirmed

---

### 4. SERP

**Raw score: 6 / 10**
**Weighted score: 6.0 / 10**
**Status: Moderate — title and meta planned; star ratings unavailable**

**Analysis:** Meta title structure is defined (`Furniture and Appliance Removal in Las Vegas, NV | Pit Stop Junk Removal`). Slug is defined. Meta description is outlined but not written. No AggregateRating schema can be implemented without confirmed review data, which eliminates star ratings from the SERP result. BreadcrumbList schema is planned but depends on production domain confirmation. SERP CTR is likely to be average without review stars — competitors with ratings will display with higher visual authority.

**Recommended fixes:**
- Write the final meta description — city-qualified, free-quote CTA signal, under 155 characters
- Confirm review data (Google rating + count) to enable AggregateRating schema and SERP star display
- Confirm production domain for BreadcrumbList schema implementation

**Flagged items:**
- AggregateRating schema: NEEDS CLIENT CONFIRMATION — do not add fake ratings
- Production domain: NEEDS CLIENT CONFIRMATION
- Meta description: not yet written — fix before build

---

### 5. GEO / Local SEO

**Raw score: 5 / 10**
**Weighted score: 7.5 / 15**
**Status: Limited — local copy is strong; schema and NAP unconfirmed**

**Analysis:** City-qualified copy is placed throughout the outline (H1, hero subheading, service area section, final CTA). Clark County coverage is referenced. City list is in place for display copy. However, LocalBusiness schema cannot be completed without address, phone, and hours. Service area schema (`areaServed`) cannot be locked without client confirmation that all listed cities are actively served. Apple Maps and Google Maps signals depend on NAP consistency between the page, GBP, and schema — none of which can be confirmed yet. GBP details are entirely unconfirmed.

**Recommended fixes:**
- Confirm address, ZIP, phone, hours → enables full LocalBusiness schema
- Confirm GBP listing details → enables NAP consistency audit
- Confirm service area cities for schema-safe `areaServed` field
- Ensure GEO copy references specific neighborhoods, local landmarks, or Las Vegas-specific context to differentiate from generic national content

**Flagged items:**
- Phone, address, ZIP, hours: NEEDS CLIENT CONFIRMATION
- Service area cities (schema): NEEDS CLIENT CONFIRMATION
- GBP details: NEEDS CLIENT CONFIRMATION
- Apple Maps signal: NOT VERIFIABLE until NAP confirmed

---

### 6. Rich Snippets

**Raw score: 5 / 10**
**Weighted score: 4.0 / 8**
**Status: Limited — schema opportunities identified; implementation blocked by missing data**

**Analysis:** Schema plan is solid. FAQPage, HowTo (How It Works), LocalBusiness, Service, and BreadcrumbList are all identified. AggregateRating is planned but flagged. FAQPage schema is the strongest near-term opportunity and can be implemented without client confirmation using safe FAQ answers. AggregateRating is the highest-impact rich snippet for CTR but cannot be added without confirmed review data. HowTo schema for the 3-step process section is a strong low-effort opportunity.

**Recommended fixes:**
- Implement FAQPage schema immediately — no blocked dependencies for safe FAQ answers
- Implement HowTo schema for Section 4 (How It Works) — no blocked dependencies
- Implement LocalBusiness schema as a template with TODO placeholders for telephone, address, openingHours
- Do not implement AggregateRating until real data is confirmed
- Implement BreadcrumbList after production domain is confirmed

**Flagged items:**
- AggregateRating: NEEDS CLIENT CONFIRMATION — DO NOT ADD WITHOUT REAL DATA
- LocalBusiness telephone, address, openingHours: NEEDS CLIENT CONFIRMATION
- BreadcrumbList URL: NEEDS PRODUCTION DOMAIN

---

### 7. AI / LLM Citation Readiness

**Raw score: 6 / 10**
**Weighted score: 6.0 / 10**
**Status: Adequate — direct-answer structure present; trust signal depth weak**

**Analysis:** The page outline is structured with AI citation in mind. Section 2 (Direct Answer) is designed as a standalone extractable block. FAQ answers are designed as short, complete, spoken-friendly responses. Item list (Section 3) is scannable and citation-ready. However, AI assistants weight trust signals and entity authority when selecting citation sources. Without confirmed credentials (years in business, license, insurance, review count, rating), the trust depth of this page is shallow compared to well-established competitors. The business entity is not yet confirmed as authoritative through schema or external signals.

**Recommended fixes:**
- Ensure Section 2 opens with a single-sentence direct answer that names the business, the service, and the city
- Confirm credentials (license, insurance, years in business) to strengthen entity authority signals
- After confirmed reviews are available, add structured mentions of rating and review count in schema and trust section — this increases AI citation preference
- Add an "about the business" micro-section or reinforce the differentiators section with verifiable entity claims

**Flagged items:**
- Credentials (license, insurance, years in business): NEEDS CLIENT CONFIRMATION
- Reviews / rating: NEEDS CLIENT CONFIRMATION

---

### 8. Search Dominance

**Raw score: 5 / 10**
**Weighted score: 1.5 / 3**
**Status: Partial — no competitive analysis run; strategy is solid but unvalidated against competition**

**Analysis:** No SERP competitive analysis (Prompt 11) has been run for this page. The keyword strategy is strong, the page outline is comprehensive, and the FAQ and direct-answer architecture are well-positioned. However, it is not possible to confirm content gap coverage, intent satisfaction vs. competitors, local specificity vs. competitors, or schema opportunity gaps without seeing what competing pages are doing. The low weight (3%) reflects this limitation. Score is scored from outline quality and strategy soundness, not competitive comparison.

**Recommended fixes:**
- Run Prompt 11 (SERP Competitive Analysis) after Prompt 04 to validate content gaps against top-ranking competitors
- Use Prompt 11 findings to refine FAQ, differentiator copy, and schema before final build
- Evaluate competitor item lists, trust signals, and local signals in the SERP for this keyword

**Flagged items:**
- No competitive analysis available: CARRY FORWARD — Prompt 11 recommended after Prompt 04

---

### 9. Engagement

**Raw score: 7 / 10**
**Weighted score: 5.6 / 8**
**Status: Good — strong structural engagement; visual assets unconfirmed**

**Analysis:** The page outline includes multiple engagement-supporting elements: a clear problem statement (Section 2), an item list confirming acceptance (Section 3), a simple process (Section 4), trust differentiators (Section 5), geographic context (Section 6), objection-handling FAQ (Section 8), and a strong final CTA (Section 9). The racing brand styling provides a visual identity that can differentiate the page. Hero image assets are unconfirmed, which limits engagement scoring since actual branded photography vs. stock photos significantly affects scroll depth and time-on-page.

**Recommended fixes:**
- Confirm hero image assets — branded truck or team photo is preferred over stock photography
- Ensure item list (Section 3) uses a visual card or two-column layout, not a plain bulleted list
- Ensure FAQ section uses an accordion or toggle UI pattern to encourage interaction
- Keep Section 4 (How It Works) to 3 steps maximum — avoid over-explaining

**Flagged items:**
- Hero image assets: NEEDS CLIENT CONFIRMATION

---

### 10. Conversion

**Raw score: 7 / 10**
**Weighted score: 8.4 / 12**
**Status: Good — CTA flow is correct; form endpoint and phone unconfirmed**

**Analysis:** The CTA architecture is well-planned. Primary CTA appears in the hero. A mid-page CTA follows the How It Works section. An inline CTA follows the FAQ section. The final CTA section includes both a quote form and a Call Now option. This multi-CTA placement is appropriate for a bottom-funnel local service page. The conversion flow is hero → process confirmation → trust building → objection handling → final CTA. Mobile conversion considerations are noted (tap-to-call, full-width buttons, floating CTA bar). The score is capped by missing phone number (tap-to-call non-functional) and form endpoint (form non-functional).

**Recommended fixes:**
- Confirm phone number → enables tap-to-call hero CTA and final CTA — highest-impact single confirmation
- Confirm form endpoint → enables quote form — critical for primary lead capture
- Ensure the quote form is minimal (name, phone, brief item description) — do not add fields that increase friction
- Add a reassurance micro-copy line near the form: "Free quote. No commitment. We'll contact you within [X hours]." — X requires confirmation
- Consider a floating mobile CTA bar anchored to the bottom of the viewport for "Call Now" on mobile

**Flagged items:**
- Phone number: NEEDS CLIENT CONFIRMATION — tap-to-call is non-functional without it
- Form endpoint: NEEDS CLIENT CONFIRMATION — lead form is non-functional without it
- Response time / turnaround promise: NEEDS CLIENT CONFIRMATION — do not claim without confirming operational capacity

---

## 7. Strengths

The following elements are already working well and should be preserved:

- **Primary keyword selection:** `furniture removal Las Vegas` is exact-match transactional, city-qualified, and directly aligned with page goal and search intent
- **Page structure:** 9-section outline is complete, logical, and follows best-practice conversion flow for a local service page
- **H1 and URL slug:** Both are correctly formed — `Furniture and Appliance Removal in Las Vegas, NV` and `/services/furniture-appliance-removal-las-vegas`
- **FAQ architecture:** 10 questions are mapped to PAA intent, AEO patterns, and voice search phrases — the structure is correct even with two answers flagged
- **Direct-answer placement:** Section 2 is designed as a standalone featured-snippet block with an AI-extractable opening sentence
- **Item-level specificity:** Item list covers both furniture and appliances with enough depth to satisfy secondary and long-tail keyword intent
- **CTA placement strategy:** CTAs at hero, mid-page, post-FAQ, and final CTA are correctly positioned for a bottom-funnel local service page
- **Schema planning:** FAQPage, HowTo, LocalBusiness, Service, AggregateRating, and BreadcrumbList are all identified with correct dependencies noted
- **Service area section:** City list is in place for display copy; geographic scope is clearly communicated without over-claiming
- **Brand differentiation:** Local Las Vegas company claim, eco-friendly disposal, residential/commercial coverage, and racing brand identity are all confirmed and safe to use
- **Internal linking plan:** Source and target pages are mapped — carry-forward to Prompt 05 is clean
- **Safety compliance:** No invented phone numbers, addresses, ratings, pricing, or availability claims anywhere in the strategy

---

## 8. Weaknesses

The following items are underperforming or missing:

- **NAP data entirely absent:** Phone, address, ZIP, and hours are all unconfirmed. This is the single largest gap affecting GEO, Voice Search, SERP, and Rich Snippets simultaneously
- **No review data available:** AggregateRating schema cannot be implemented. SERP star display is unavailable. Trust section is placeholder-only
- **Credentials unconfirmed:** Years in business, license, insurance, certifications — all empty. Trust section and E-E-A-T signals are weak
- **Pricing not confirmed:** FAQ Q6 cannot be answered with a specific amount. Commercial intent keyword `furniture removal Las Vegas cost` cannot be fully satisfied
- **Same-day availability unconfirmed:** FAQ Q10 and urgency copy cannot make the claim. A potentially strong conversion differentiator is unusable
- **Service area schema unconfirmed:** City list is safe for display copy but cannot be added to `areaServed` schema without client confirmation
- **No competitive analysis:** Search dominance scoring is based on outline quality, not competitive comparison. Content gaps vs. top-ranking competitors are unknown
- **Meta description not written:** Outlined but not finalized — must be written before Prompt 05
- **Production domain unconfirmed:** Canonical, og:url, BreadcrumbList schema, sitemap, and form action URL all depend on this
- **Form endpoint unconfirmed:** Primary lead capture mechanism is non-functional without it
- **Hero image assets unconfirmed:** Visual trust signal and engagement quality unknown

---

## 9. Missing Data Impact

| Missing Item | Metrics Affected | Score Impact |
|--------------|------------------|-------------|
| Phone number | GEO (-1), Conversion (-1.5), Voice Search (-0.5), SERP (-0.5) | ~3.5 points suppressed |
| Address / ZIP / hours | GEO (-2), Voice Search (-1), SERP (-0.5) | ~3.5 points suppressed |
| Reviews / ratings | Rich Snippets (-2), SERP (-1), AI Citation (-1) | ~4 points suppressed |
| Pricing | AEO (-0.5), Conversion (-0.5) | ~1 point suppressed |
| Same-day availability | AEO (-0.3), Conversion (-0.3) | ~0.6 points suppressed |
| Credentials | AI Citation (-0.5), Engagement (-0.3) | ~0.8 points suppressed |
| Service area schema | GEO (-1) | ~1 point suppressed |
| Production domain | SEO (-0.5), Rich Snippets (-0.3) | ~0.8 points suppressed |
| Form endpoint | Conversion (-1) | ~1 point suppressed |
| Hero image | Engagement (-0.5) | ~0.5 points suppressed |

**Estimated total score suppression from missing data: ~16–17 points**

If all flagged items are resolved, the page strategy has a realistic ceiling of **77–79 / 100** at this strategy stage (before competitive analysis or Deep mode refinement).

---

## 10. Recommended Fixes for Prompt 04

### Fixes that can be made now

- Write the final meta description (city-qualified, free-quote signal, under 155 characters)
- Write the full Section 2 direct-answer paragraph — standalone, AI citation-ready, 2–3 sentences
- Finalize FAQ answers for all non-flagged questions (Q1, Q2, Q3, Q4, Q5, Q7, Q8)
- Build FAQPage schema JSON-LD for safe FAQ answers
- Build HowTo schema JSON-LD for Section 4 (How It Works)
- Build LocalBusiness schema JSON-LD template with TODO placeholders for telephone, address, openingHours
- Write differentiators copy for Section 5 using confirmed differentiators only
- Write service area copy for Section 6 using display-safe city list
- Write hero copy (H1, subheading, trust micro-copy) using confirmed context only
- Write item list copy for Section 3
- Write How It Works steps for Section 4
- Finalize internal link map against expected site structure

### Fixes that require client confirmation first

- FAQ Q6 (pricing) — write conditional safe answer, flag dollar amounts until confirmed
- FAQ Q10 (same-day availability) — write conditional safe answer until confirmed
- Trust section copy (Section 7) — write placeholder structure; finalize with real reviews, ratings, license details
- LocalBusiness schema: telephone, address, openingHours fields — placeholder TODO
- AggregateRating schema — do not implement until real data confirmed
- Tap-to-call CTA links — telephone TODO in hero and final CTA
- Form action URL — TODO in quote form component
- BreadcrumbList URL — TODO pending production domain
- `areaServed` schema — placeholder for city list pending schema confirmation
- Hero image — TODO pending photo asset delivery

---

## 11. Flagged Unresolved Data

**Item: Phone number**
Why it matters: Required for tap-to-call CTAs in hero and final CTA. Required for LocalBusiness schema telephone field. Required for GBP NAP consistency signal. Required for Apple Maps accuracy.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Client-provided business phone number
Carry-forward destination: Prompt 04

---

**Item: Street address / ZIP code**
Why it matters: Required for LocalBusiness schema address fields. Required for Google Maps and Apple Maps NAP consistency. Required for GBP accuracy. Required for voice search geo-triggering.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Client-provided street address and ZIP
Carry-forward destination: Prompt 04

---

**Item: Business hours**
Why it matters: Required for LocalBusiness schema openingHours. Required for voice search "are they open now" queries. Required for GBP accuracy.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Client-provided operating hours by day
Carry-forward destination: Prompt 04

---

**Item: Reviews / ratings / reviewer names**
Why it matters: Required for AggregateRating schema and SERP star display. Required for trust section copy. Affects E-E-A-T signals. Affects AI citation preference.
Status: NEEDS CLIENT CONFIRMATION — DO NOT INVENT
Required confirmation: Real Google or verified platform rating, review count, and reviewer names
Carry-forward destination: Prompt 04

---

**Item: Pricing**
Why it matters: FAQ Q6 answer. Commercial intent keyword coverage. Conversion confidence for price-sensitive shoppers.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Approved pricing range, starting price, or confirmation that "free quote" is the only public pricing signal
Carry-forward destination: Prompt 04

---

**Item: Same-day / emergency availability (specific claim)**
Why it matters: FAQ Q10 answer. Urgency keyword opportunity. Hero subheading opportunity. Conversion differentiator.
Status: NEEDS CLIENT CONFIRMATION — service is listed in known services but specific same-day claim is not confirmed for copy
Required confirmation: Client confirmation that same-day service is actively offered and operationally reliable
Carry-forward destination: Prompt 04

---

**Item: Licenses / certifications / insurance**
Why it matters: Trust section copy. E-E-A-T signals. Conversion confidence. Business credibility vs. competitors.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Client-provided license numbers or written confirmation of insured status
Carry-forward destination: Prompt 04

---

**Item: Years in business**
Why it matters: Differentiators section. E-E-A-T. AI citation preference for established entities.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Client-confirmed founding year or years of operation
Carry-forward destination: Prompt 04

---

**Item: Production domain**
Why it matters: Required for canonical URL, og:url, BreadcrumbList schema, form action URL, Google Search Console submission, Bing Webmaster submission, sitemap.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Confirmed live production domain
Carry-forward destination: Prompt 04

---

**Item: Form endpoint**
Why it matters: Quote request form functionality. Primary lead capture mechanism. Without it, the primary conversion path is broken.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Confirmed form action URL or API endpoint
Carry-forward destination: Prompt 04

---

**Item: Google Business Profile details**
Why it matters: GBP signals affect map pack eligibility and local SERP placement. NAP consistency between page schema and GBP is a local ranking factor.
Status: NEEDS CLIENT CONFIRMATION
Required confirmation: Confirmed GBP listing name, address, phone, category, and URL
Carry-forward destination: Prompt 04

---

**Item: Service area cities — schema-safe confirmation**
Why it matters: `areaServed` schema field and service area structured data require confirmed active service per city. Display copy city list is safe; schema field is not.
Status: CARRY FORWARD — display copy safe; schema confirmation required
Required confirmation: Client confirms all listed cities are actively served
Carry-forward destination: Prompt 04

---

## 12. Items to Carry Forward to Prompt 04

| Item | Prompt 04 Action |
|------|-----------------|
| Phone number | Schema TODO placeholder; CTA TODO flag; do not publish without confirmation |
| Address / ZIP / hours | Schema TODO placeholder; NAP section TODO; do not publish without confirmation |
| Reviews / ratings | Trust section placeholder slot; AggregateRating schema blocked; do not invent |
| Pricing | FAQ Q6 — write conditional safe answer; flag for client confirmation |
| Same-day availability | FAQ Q10 — write conditional safe answer; flag for client confirmation |
| Licenses / insurance | Trust section placeholder; TODO flag in differentiators section |
| Years in business | TODO placeholder in differentiators section |
| Production domain | Canonical TODO; og:url TODO; BreadcrumbList URL TODO |
| Form endpoint | Quote form action TODO; lead capture non-functional until confirmed |
| GBP details | GBP schema signal TODO; map pack readiness flagged |
| Service area — schema | `areaServed` field TODO; display copy safe to use |
| Hero image assets | Image TODO in hero section spec |
| Items not accepted | FAQ completeness flag — add to FAQ if confirmed |
| Prompt 11 (SERP competitive analysis) | Recommended after Prompt 04 to validate content gaps vs. top competitors |

---

## 13. Page Type Weighting Summary

Page type: **Service page — local lead generation**

| Metric | Weight |
|--------|--------|
| SEO | 15% |
| GEO / Local SEO | 15% |
| Conversion | 12% |
| AEO | 12% |
| SERP | 10% |
| AI / LLM Citation Readiness | 10% |
| Rich Snippets | 8% |
| Engagement | 8% |
| Voice Search | 7% |
| Search Dominance | 3% |
| **Total** | **100%** |

---

## 14. Gap Priority Matrix

| Issue | Related Metric | Priority | Expected Impact | Difficulty | Fix Type | Recommended Action | Fix Before Build? | Launch Blocker? |
|-------|---------------|----------|-----------------|------------|----------|--------------------|-------------------|-----------------|
| Phone number missing | GEO, Conversion, SERP | Critical | High — tap-to-call, schema, NAP | Low — client provides | Quick win | Obtain from client; add to schema, hero CTA, final CTA | Yes | Yes |
| Address / ZIP / hours missing | GEO, Voice Search, SERP | Critical | High — LocalBusiness schema, map signals | Low — client provides | Quick win | Obtain from client; complete LocalBusiness schema | Yes | Yes |
| Form endpoint missing | Conversion | Critical | High — primary lead capture broken | Low — client provides | Quick win | Obtain from client; add to quote form action | Yes | Yes |
| No review/rating data | Rich Snippets, SERP, AI Citation | High | High — star ratings, trust, citation preference | Medium — must earn/collect | Strategic improvement | Confirm GBP rating + count; implement AggregateRating schema | Before launch | No — conditional |
| Meta description not written | SEO, SERP | High | Medium — affects CTR | Low — write now | Quick win | Write in Prompt 04 using confirmed context | Yes | No |
| AggregateRating schema blocked | Rich Snippets, SERP | High | High — SERP star display | Dependent on reviews | Quick win when confirmed | Implement immediately when review data provided | Before launch | No |
| Service area schema unconfirmed | GEO | High | Medium — local SERP signals | Low — client confirms | Quick win | Client confirms city list for schema; add `areaServed` | Before launch | No |
| FAQ Q6 pricing unconfirmed | AEO, Conversion | Medium | Medium — commercial intent satisfaction | Low — client confirms | Quick win | Write conditional safe answer; flag for confirmation | No | No |
| FAQ Q10 same-day unconfirmed | AEO, Conversion | Medium | Medium — urgency conversion | Low — client confirms | Quick win | Write conditional safe answer; flag for confirmation | No | No |
| Credentials missing | AI Citation, Engagement | Medium | Medium — entity authority, trust | Low — client provides | Quick win | Obtain from client; add to trust section and schema | Before launch | No |
| No competitive analysis | Search Dominance | Medium | Medium — unknown content gaps | Medium — research required | Strategic improvement | Run Prompt 11 after Prompt 04 | No | No |
| Hero image unconfirmed | Engagement | Medium | Medium — visual trust, scroll depth | Low — client provides assets | Quick win | Request branded photos from client | Before launch | No |
| Production domain missing | SEO, Technical | High | High — canonical, GSC, Bing Webmaster | Low — client confirms | Quick win | Obtain from client; add to all URL references | Before launch | Yes |

---

## 15. Over-Optimization Risk Check

**Risk 1: Keyword phrase repetition across headings**
Risk level: Low-Medium
Why it matters: `furniture removal Las Vegas` appears in H1, Section 3 heading, Section 6 heading, Section 8 heading, Section 9 heading, and meta title. When written as exact-match phrase in every heading, Google may assess keyword stuffing signals.
How to prevent: Use natural variation in H2s and H3s. Section 3: "Furniture and Appliances We Remove" (omit "Las Vegas"). Section 8: "Frequently Asked Questions" or "Questions About Our Las Vegas Junk Removal Service." Not every heading needs the primary keyword.

**Risk 2: City-name repetition in service area section**
Risk level: Low
Why it matters: Listing 9 city names in close proximity can read as keyword stuffing if not written as natural geographic prose.
How to prevent: Write the city list as a readable geographic statement rather than a bulleted keyword block. Use it once in Section 6 only.

**Risk 3: Too many CTAs for content length**
Risk level: Low
Why it matters: 4 CTA placements (hero, mid-page, post-FAQ inline, final CTA section) across a standard service page is at the upper limit. For shorter implementations, this could feel aggressive.
How to prevent: Ensure mid-page CTA (Section 4) is subtle (small text link or low-visual-weight button, not a full CTA block). Reserve full CTA block treatment for hero and final section only.

**Risk 4: FAQ answers that are too short**
Risk level: Low-Medium
Why it matters: If FAQ answers are written as one sentence only, they satisfy schema requirements but fail the topical depth test. Google expects FAQ answers to demonstrate knowledge, not just acknowledge the question.
How to prevent: Write FAQ answers at 2–4 sentences. Include one specific detail or service-related fact per answer. Avoid answering "Contact us for pricing" with no additional context.

**Risk 5: Unsupported trust claims if not confirmed**
Risk level: Medium (conditional)
Why it matters: If placeholders in Section 5 (differentiators) or Section 7 (trust) are published without real data, claims like "licensed and insured" or "hundreds of satisfied customers" without confirmation constitute unsupported claims.
How to prevent: All placeholder trust copy must be marked as TODO in the Prompt 06 build. Do not publish trust section without confirmed data. This is already flagged in the outline.

---

## 16. Competitive Outperformance Scorecard

*Note: No live SERP competitive analysis (Prompt 11) has been run. Scores reflect strategy quality and outline depth relative to expected competitor behavior for this keyword in a local service market, not confirmed SERP observation.*

| Dimension | Score | Notes |
|-----------|-------|-------|
| Competitor content gap coverage | 6/10 | Item list is specific; FAQ is comprehensive; but no live gap audit |
| Search intent satisfaction vs. competitors | 7/10 | Transactional intent fully aligned; informational handled in FAQ |
| Direct-answer strength vs. competitors | 7/10 | Section 2 designed for featured snippet extraction |
| AEO and voice search strength vs. competitors | 7/10 | 10-question FAQ with PAA alignment is stronger than most local competitors |
| Local specificity vs. competitors | 6/10 | City-qualified copy is solid; neighborhood-level detail and local landmark references not yet added |
| Trust signal strength vs. competitors | 4/10 | Trust section is placeholder-only; confirmed credentials will determine final score |
| Internal linking strength vs. competitors | 5/10 | Internal link map is defined but site structure unconfirmed |
| Schema opportunity vs. competitors | 7/10 | FAQPage, HowTo, LocalBusiness, Service all planned; AggregateRating pending |
| Conversion path strength vs. competitors | 7/10 | Multi-CTA architecture is stronger than most local competitors |
| Content moat strength vs. competitors | 5/10 | Item specificity is good; unique local content angle not yet developed |

**Classification: Could outperform after improvements**

The strategy is above average for a local junk removal service page. After client confirmation of NAP, reviews, and credentials, and after a Prompt 11 competitive gap analysis, the page has a realistic path to outperforming most local competitors for this keyword.

---

## 17. Full Visibility and Conversion Ecosystem Check

| Goal | Readiness | What Is Working | What Is Missing | Required Element | Priority | Claude Code Note | QA Check |
|------|-----------|-----------------|-----------------|-----------------|----------|-----------------|----------|
| SEO | 7/10 | Keyword, H1, slug, meta title, internal link plan | Meta description, production domain, canonical | Meta tags, canonical tag | High | `<title>`, `<meta name="description">`, `<link rel="canonical">` | Validate meta length; confirm canonical matches URL |
| GEO / Local SEO | 5/10 | City-qualified copy, Clark County reference, city list | NAP schema, GBP confirmation, service area schema | LocalBusiness JSON-LD | Critical | LocalBusiness schema with TODO placeholders | NAP matches GBP exactly before launch |
| AEO | 7/10 | 10 FAQ questions, direct-answer section, PAA alignment | 2 FAQ answers flagged (pricing, same-day) | FAQPage JSON-LD | High | FAQPage schema in `<head>` or adjacent `<script>` tag | All FAQ answers are complete sentences |
| Local intent SERP visibility | 5/10 | City-qualified page, schema planned | No AggregateRating, no confirmed NAP for map pack | AggregateRating schema, GBP sync | High | Add AggregateRating when data confirmed | Confirm GBP data matches schema before launch |
| LLM search visibility | 6/10 | Direct-answer section, extractable FAQ, item list | Trust depth, entity authority signals, credentials | Credential copy, entity clarity in schema | Medium | Schema `name`, `description`, `knowsAbout` fields | Verify schema parses cleanly in Rich Results Test |
| Google Search Console readiness | 4/10 | Page structure is indexable | No production domain, no sitemap, no canonical | Sitemap, canonical, robots.txt | High | Add canonical tag; sitemap entry after domain confirmed | Submit sitemap to GSC after launch |
| Bing Webmaster readiness | 4/10 | Indexable structure | No production domain, no Bing submission | Sitemap, canonical | Medium | Same as GSC — canonical + sitemap | Submit to Bing Webmaster after launch |
| Apple Search / Apple Maps support | 4/10 | Service type and city reference in copy | No confirmed NAP, no schema address | LocalBusiness schema with address | High | `address`, `telephone`, `geo` fields in schema | Verify Apple Maps listing accuracy after NAP confirmed |
| Rich snippets | 5/10 | FAQPage and HowTo planned | AggregateRating blocked, LocalBusiness incomplete | FAQPage, HowTo, LocalBusiness schema | High | JSON-LD in `<head>` — validate with Rich Results Test | Test all schema types in Rich Results Test before launch |
| Topical authority | 6/10 | Item specificity, FAQ depth, direct-answer structure | No blog or supporting content planned yet; no credential depth | Supporting FAQ content, internal links to related pages | Medium | Internal links to related service pages | Confirm all internal link targets exist before launch |
| Google Business Profile support | 3/10 | Business name confirmed | No GBP details confirmed; no schema address for NAP sync | GBP NAP confirmation; LocalBusiness schema match | Critical | Schema must match GBP exactly | Audit GBP vs schema NAP before launch |
| Featured snippets | 7/10 | Section 2 direct-answer, FAQ format, structured answers | Two FAQ answers flagged; meta description not written | Direct-answer paragraph, complete FAQ answers | High | Keep Section 2 under 50 words for paragraph snippet | Check featured snippet eligibility for primary keyword after launch |
| People Also Ask | 7/10 | 10 PAA-mapped FAQ questions | Two answers incomplete; schema not yet implemented | FAQPage schema, complete FAQ answers | High | FAQPage JSON-LD | Confirm FAQ answers render in FAQPage schema validator |
| Knowledge panel / entity authority | 4/10 | Business name and service type clear in copy | No schema `sameAs`, no Wikipedia or Wikidata, no strong external authority | Schema `sameAs` links, GBP connection | Low | Add `sameAs` field to LocalBusiness schema pointing to GBP URL | Add GBP URL to `sameAs` after confirmed |
| Perplexity readiness | 6/10 | Direct-answer structure, FAQ, item list | Trust depth, credential signals | Credential copy, entity clarity | Medium | Ensure Section 2 is indexable and not behind JS rendering | Test page with Perplexity after launch |
| ChatGPT readiness | 6/10 | Direct-answer, item list, AEO structure | Entity authority, external citation signals | Schema completeness, trust signals | Medium | Same as Perplexity — page must be publicly indexable | Verify page is crawlable by OpenAI bot |
| Customer engagement | 7/10 | Clear structure, item list, How It Works, FAQ | Hero image unconfirmed, no testimonials yet | Real hero photo, real testimonials | Medium | Use `loading="eager"` on hero image; lazy load below-fold | Test scroll depth and time-on-page after launch |
| Customer conversion | 7/10 | Multi-CTA architecture, mobile CTA plan | Phone missing, form endpoint missing | Tap-to-call link, form action URL | Critical | `href="tel:[NUMBER]"`, form `action="[ENDPOINT]"` | Test all CTAs on mobile before launch |
| Competitive outperformance | 6/10 | Strong keyword coverage, AEO depth | No competitive gap analysis run | Prompt 11 SERP analysis | Medium | N/A | Run Prompt 11 before or after launch |
| Indexing and crawlability | 6/10 | Semantic HTML structure implied by outline | No production domain, no robots.txt, no sitemap confirmed | Canonical, sitemap, robots.txt | High | `<link rel="canonical">`, XML sitemap, `robots.txt` | Crawl with Screaming Frog or GSC after launch |

---

## 18. Final Page Readiness Score

| Dimension | Score |
|-----------|-------|
| SEO readiness | 7 / 10 |
| AEO readiness | 7 / 10 |
| GEO / Local readiness | 5 / 10 |
| Technical SEO readiness | 5 / 10 |
| Conversion readiness | 6 / 10 |
| **Overall strategy score** | **61 / 100** |

**Classification: Ready after minor fixes**

**Explanation:** The page strategy is structurally complete and well-planned. The keyword strategy, page outline, FAQ architecture, CTA flow, schema plan, and internal linking strategy are all in place. The score is constrained by missing client data — not by strategic weakness. Once NAP details, reviews, credentials, production domain, and form endpoint are confirmed, the majority of flagged items resolve to quick wins. No section of the outline requires a major structural revision.

**Items that must be confirmed before the classification can be upgraded to Ready for Build:**
- Phone number (tap-to-call CTA and LocalBusiness schema)
- Address / ZIP / hours (LocalBusiness schema and GBP alignment)
- Form endpoint (primary lead capture)
- Production domain (canonical, og:url, sitemap)

**Items that should be confirmed before launch (not blockers for build start):**
- Reviews / ratings (AggregateRating schema, trust section)
- Licenses / insurance (trust section, E-E-A-T)
- Service area confirmation for schema (areaServed field)
- Hero image assets
- Same-day availability confirmation (FAQ Q10)
- Pricing guidance (FAQ Q6)

---

## 19. Recommended Next Action

**READY FOR PROMPT 04 WITH FLAGGED ITEMS**

The ten-metric analysis is complete. All ten metrics are scored. All flagged items are identified, labeled, and assigned carry-forward destinations. No unresolved item required invention. The strategy is ready for Prompt 04 gap fixing. Prompt 04 should produce final copy for all non-flagged sections and conditional placeholder copy for all flagged sections, with TODO markers in place for client-confirmed data.

---

*Site OS Master — Prompt 03 v2*
*Workflow Test 01 — Core Mode*
*Output: workflow-tests/workflow-test-01-core-mode/outputs/prompt-03-output.md*