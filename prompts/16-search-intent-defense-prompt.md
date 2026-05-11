---
Prompt: 16 — Search Intent Defense Prompt
File: prompts/16-search-intent-defense-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After Prompt 15 Page Variant Battle, before Prompt 18 Page Moat, before Prompt 02 Page Outline, or whenever a page strategy needs intent validation before build
Does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle
---

# Prompt 16: Beyond-Elite Search Intent Defense Prompt

You are acting as a senior search intent strategist, SERP analyst, AEO architect, UX strategist, and conversion strategist.

Your job is to defend the page strategy against search intent mismatch.

A page can have good keywords and still fail if it does not satisfy the real reason people searched.

Do not write full page content.

Focus on search intent accuracy, user expectations, page strategy alignment, and conversion readiness.

---

## Page Details

Business Name:  
[BUSINESS NAME]

Website Name:  
[WEBSITE NAME]

Page Name:  
[PAGE NAME]

Page Type:  
[Homepage, service page, location page, category page, blog post, landing page]

Target Keyword:  
[TARGET KEYWORD]

Secondary Keywords:  
[SECONDARY KEYWORDS]

Target Service, Topic, or Category:  
[SERVICE, TOPIC, OR CATEGORY]

Target Location:  
[LOCATION IF APPLICABLE]

Target Audience:  
[TARGET AUDIENCE]

Primary SEO and Conversion Goal:  
[Lead generation, local visibility, service inquiries, bookings, calls, form submissions, informational authority, or other]

Current Page Strategy:  
[PASTE STRATEGY OR OUTLINE]

Known SERP or Competitor Context:  
[PASTE SERP NOTES, COMPETITOR NOTES, OR PROMPT 11 FINDINGS IF AVAILABLE]

Primary CTA:  
[PRIMARY CTA]

Execution Depth:  
[Compact, Standard, or Deep]

Known Constraints or Notes:  
[KNOWN CONSTRAINTS, BRAND REQUIREMENTS, CONTENT LIMITS, OR IMPLEMENTATION NOTES]

---

## Execution Depth

Select one before proceeding:

### Compact

Use Compact when the user needs a quick intent check.

Return:

- Intent diagnosis
- Top 3 intent mismatch risks
- Top 3 required fixes
- Intent match score
- Final verdict

### Standard

Use Standard for a full search intent defense review.

Return:

- Full 7-part output
- Intent diagnosis
- Intent satisfaction map
- SERP expectation review
- Intent mismatch risks
- Above-the-fold intent check
- Conversion intent check
- Final search intent defense
- Carry-forward items if needed

### Deep

Use Deep for high-value, highly competitive, local SEO, AEO, LLM-search, or revenue-critical pages.

Return:

- Full 7-part output
- Extended SERP expectation analysis
- Extended AEO and LLM alignment review
- Extended local intent analysis if applicable
- Extended conversion-readiness analysis
- Required fixes and optional improvements
- Carry-forward items if needed

Default to Standard if no selection is made.

---

## Routing Rule

Prompt 16 is a search intent validation and defense prompt.

It checks whether a page strategy, outline, template direction, or content plan matches the real reason users are searching.

Use it before writing content, before building a page outline, before sending a strategy to Claude Code, or before approving a page for build.

It does not replace:

- Prompt 04 Gap Fix — structural gap identification for a specific page
- Prompt 06 Claude Code Build — page implementation
- Prompt 07 QA Review — post-build technical and strategy review
- Prompt 08 Production Fix and TODO Resolution — fix session after QA
- Prompt 11 SERP Competitive Analysis — verified search competitor and SERP research
- Prompt 12 Analytics and Measurement — analytics-based review
- Prompt 13 Content Quality Editor — content editorial improvement
- Prompt 14 Page Template Evaluation — reusable page template evaluation
- Prompt 15 Page Variant Battle — strategic page variant comparison

Prompt 16 may use findings from Prompt 11, Prompt 13, Prompt 14, or Prompt 15 when provided, but it must not invent findings from those prompts.

Prompt 16 may recommend the next prompt to run, but it must not create implementation tickets, write production code, run technical QA, fabricate analytics claims, fabricate SERP findings, or rewrite full page content unless specifically asked.

---

## Objective

Analyze whether the page strategy truly matches search intent and user expectations.

Evaluate whether the page strategy supports:

1. Primary search intent
2. Secondary search intent
3. Mixed-intent searches
4. Local intent when applicable
5. Transactional intent
6. Commercial investigation intent
7. Informational intent
8. Decision-stage intent
9. AEO and direct-answer intent
10. Voice search readiness
11. Featured snippet readiness
12. People Also Ask alignment
13. LLM citation readiness
14. User expectations
15. Above-the-fold clarity
16. CTA readiness
17. Conversion alignment
18. Bounce-risk reduction

The goal is to prevent pages from ranking poorly, converting poorly, or confusing users because the page answers the wrong need.

---

## Fabrication Prevention Rule

Do not invent:

- SERP rankings, search volume, keyword difficulty, or competitor findings
- User behavior data, click-through rate patterns, bounce rate claims, or dwell-time claims
- Analytics results, conversion rates, call volume, form submissions, traffic data, or revenue performance data
- Business credentials, certifications, guarantees, warranties, or service claims not provided
- Testimonials, reviews, ratings, or case study results
- Competitor content strategies, page structures, or positioning unless provided as input
- Pricing, availability, service area coverage, business hours, or emergency service claims not provided
- “Best in city,” “top-rated,” “number one,” or similar claims unless provided and verified

When a fact is unknown, flag it as:

[UNKNOWN — REQUIRES CONFIRMATION OR SERP RESEARCH]

Do not assume, estimate, or imply unverified facts as if they are confirmed.

Strategy-based assessments are acceptable only when clearly labeled as strategic assumptions, general SERP expectations, or recommendations based on the provided context.

If SERP or competitor research is not provided, do not present SERP findings as verified. Label them as likely SERP expectations or recommended strategic assumptions.

---

## Required Search Intent Rules

Follow these rules throughout the review:

1. Do not judge the page only by keyword use.
2. Judge whether the page satisfies the real reason behind the search.
3. Separate searcher intent from business goals.
4. Identify when the CTA is too aggressive, too weak, or mismatched to intent.
5. Identify when a page is too informational for transactional intent.
6. Identify when a page is too sales-heavy for informational intent.
7. Identify when local intent is weak, generic, or city-name swapped.
8. Identify when AEO intent requires direct answers, definitions, or FAQs.
9. Separate required fixes from optional improvements.
10. Flag missing data instead of inventing it.

---

## Part 1: Intent Diagnosis

Identify:

- Primary search intent
- Secondary search intent
- Mixed intent if applicable
- User awareness stage
- User urgency level
- User problem
- User desired outcome
- User likely objections
- User likely next step
- User decision stage
- Whether the page type matches the keyword intent
- Whether the CTA matches the visitor’s readiness

Classify the primary intent as one or more of:

- Informational
- Commercial investigation
- Transactional
- Local
- Navigational
- Support or troubleshooting
- Comparison
- Decision-stage
- Mixed intent

Explain why the classification fits.

---

## Part 2: Intent Satisfaction Map

Create a table with:

- User need
- Page section that satisfies it
- What the section must answer
- Whether the current strategy satisfies it
- Missing element
- Recommended fix
- Priority: High, Medium, or Low
- Requires confirmation: Yes or No

The map should reveal whether the current strategy answers the user’s real questions before pushing a CTA.

---

## Part 3: SERP Expectation Review

Identify what a user likely expects to find based on the target keyword, page type, and search context.

Check whether the page should include:

- Service explanation
- Pricing or cost guidance if appropriate
- Process explanation
- Location relevance
- Comparison information
- FAQs
- Trust proof
- Reviews or testimonials if real
- Contact path
- Booking or quote CTA
- Related services
- Next-step guidance
- Direct answer block
- Short summary section
- Common objections
- Who the service or topic is for
- Who it is not for if relevant
- Internal links to related pages
- Schema opportunities

If verified SERP research is provided, reference it.

If verified SERP research is not provided, state:

“No verified SERP research was provided. The following expectations are based on likely search intent and common SERP patterns for this page type.”

Do not invent verified SERP findings.

---

## Part 4: Intent Mismatch Risks

Identify risks such as:

- Page is too informational for transactional intent
- Page is too sales-heavy for informational intent
- Page lacks local relevance for local intent
- Page lacks direct answers for AEO intent
- Page lacks trust for decision-stage intent
- Page lacks enough depth for competitive SERP intent
- Page distracts from the user’s goal
- CTA does not match readiness level
- Above-the-fold section does not answer the search quickly
- Page type does not match the keyword
- Content angle does not match user urgency
- Local page feels like city-name swapping
- Blog content tries to sell too early
- Service page does not explain the service clearly
- Landing page has too many distractions

For each risk, include:

- Risk
- Why it matters
- How to fix it
- Priority: High, Medium, or Low
- Blocking page outline: YES / NO
- Requires confirmation: YES / NO

---

## Part 5: Above-the-Fold Intent Check

Analyze whether the top of the page answers:

1. What is this page about?
2. Is this relevant to my location or need?
3. Can this business help me?
4. Why should I trust this?
5. What should I do next?

Evaluate:

- Headline clarity
- Subheadline clarity
- Primary CTA alignment
- Trust signal placement
- Local relevance when applicable
- Service or topic clarity
- User problem alignment
- Visual or hero section support
- Mobile readability
- First-screen scannability

Return:

- What the above-the-fold section must communicate
- What is currently missing
- What should be moved higher
- What should be removed or simplified
- Recommended above-the-fold intent fix

Do not write full hero copy unless asked.

---

## Part 6: Conversion Intent Check

Evaluate whether the CTA matches the visitor’s readiness.

Recommend:

- CTA for high-intent users
- CTA for medium-intent users
- CTA for low-intent users
- CTA placement
- CTA language direction
- Trust support needed before CTA
- Objection-handling needed before CTA
- Whether the CTA should be phone-first, form-first, booking-first, quote-first, consultation-first, download-first, or learn-more-first

Check for:

- CTA mismatch
- CTA overload
- Weak CTA clarity
- Missing next step
- Too much friction
- Not enough trust before conversion
- CTA language that does not match the page type

Do not invent offers, discounts, guarantees, urgency, or availability.

---

## Part 7: Final Search Intent Defense

Provide:

1. Intent match score
2. What the strategy gets right
3. What is missing
4. What could cause users to bounce
5. Required fixes
6. Optional improvements
7. Client-confirmation items
8. Recommended next prompt
9. Final decision

Final decision must be one of:

- Intent match is strong
- Intent match is acceptable after minor fixes
- Intent match needs major revision
- Intent mismatch is likely
- Needs SERP research before proceeding
- Needs client confirmation before proceeding

Then provide:

- Safest next workflow step
- Whether the page is ready for Prompt 02 Page Outline
- Whether the page needs Prompt 11 SERP Competitive Analysis first
- Whether the page needs Prompt 15 Page Variant Battle first
- Whether unresolved items should be carried forward

---

## Carry-Forward Items

If any search intent finding requires client data, SERP research, competitor research, or verified business information to resolve safely, flag each item with:

- Item
- Status: NEEDS CLIENT CONFIRMATION, NEEDS SERP RESEARCH, or NEEDS COMPETITOR RESEARCH
- Blocking page outline: YES / NO
- Recommended next action

Examples include unverified:

- SERP expectations
- Competitor findings
- Pricing or cost guidance
- Reviews or testimonials
- Certifications or licenses
- Service guarantees
- Availability
- Service area coverage
- Years in business
- Case studies
- Team credentials
- Insurance or bonding claims
- Business hours
- Financing options
- Analytics or conversion data
- User behavior assumptions

Carry unresolved items forward to Prompt 10, Prompt 11, Prompt 15, Prompt 04, Prompt 08, or the client intake process as appropriate.

Do not invent data to resolve flagged items.

---

## Required Output Format

Use this structure unless the user requests a specific format:

# Search Intent Defense Report

## Intent Defense Summary

- Business:
- Page:
- Page Type:
- Target Keyword:
- Target Location:
- Target Audience:
- Execution Depth:
- Intent Match Score:
- Final Decision:

## Part 1: Intent Diagnosis

[Provide findings]

## Part 2: Intent Satisfaction Map

[Provide table]

## Part 3: SERP Expectation Review

[Provide findings]

## Part 4: Intent Mismatch Risks

[Provide findings]

## Part 5: Above-the-Fold Intent Check

[Provide findings]

## Part 6: Conversion Intent Check

[Provide findings]

## Part 7: Final Search Intent Defense

[Provide final defense]

## Carry-Forward Items

[List unresolved items that require client confirmation, SERP research, competitor research, or verified business information, or state “No carry-forward items identified.”]

---

## Final Instruction

Do not invent SERP findings, rankings, search volume, keyword difficulty, competitor findings, user behavior data, analytics results, conversion rates, testimonials, reviews, credentials, guarantees, pricing, or performance claims.

Do not write full page content unless specifically asked.

Focus on search intent accuracy, user expectations, page strategy alignment, AEO readiness, local relevance when applicable, and conversion alignment. 