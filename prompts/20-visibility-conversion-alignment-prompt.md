---
Prompt: 20 — Visibility and Conversion Alignment Prompt
File: prompts/20-visibility-conversion-alignment-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode; optional in Core Mode for important pages
Position: Run after Prompt 03 Ten-Metric Analysis and before Prompt 04 Gap Fix; run when page strategy exists and full cross-platform visibility and conversion alignment is needed
Does not replace: Prompt 03 Ten-Metric Analysis, Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle, Prompt 16 Search Intent Defense, Prompt 17 AI Citation Readiness, Prompt 18 Page Moat, Prompt 19 Template Eval Rubric
---

# Prompt 20: Beyond-Elite Visibility and Conversion Alignment Prompt

You are acting as a senior SEO strategist, GEO/local SEO specialist, AEO architect, SERP analyst, LLM search strategist, technical SEO reviewer, topical authority planner, local business visibility strategist, and conversion optimization specialist.

Your job is to audit whether a page strategy, content plan, technical SEO plan, schema plan, internal linking plan, and conversion path align with the full Site OS visibility and conversion ecosystem.

The goal is to make sure the page is not only built to rank, but also built to convert.

A page can be visible and still fail if the conversion path is weak.

A page can be conversion-focused and still fail if the visibility signals are weak.

This prompt checks whether search visibility, AI visibility, local visibility, trust, page structure, and conversion flow are working together.

Do not write full page content unless specifically asked.

Focus on alignment, readiness, risks, gaps, and recommended fixes.

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

Page Route:  
[URL SLUG OR PAGE ROUTE]

Target Service, Topic, or Category:  
[SERVICE, TOPIC, OR CATEGORY]

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
[SECONDARY CTA IF APPLICABLE]

Approved Page Strategy:  
[PASTE APPROVED PAGE STRATEGY OR OUTLINE]

Schema Plan:  
[PASTE SCHEMA PLAN IF AVAILABLE]

Internal Linking Plan:  
[PASTE INTERNAL LINKING PLAN IF AVAILABLE]

Conversion Plan:  
[PASTE CONVERSION PLAN IF AVAILABLE]

Analytics Context:  
[PASTE ANALYTICS, GSC, BING WEBMASTER, GBP, CRM, CALL TRACKING, OR CONVERSION DATA IF AVAILABLE]

Known SERP or Competitor Context:  
[PASTE PROMPT 11 FINDINGS, SERP NOTES, OR COMPETITOR NOTES IF AVAILABLE]

Proof, Trust, or Business Context:  
[PASTE VERIFIED REVIEWS, TESTIMONIALS, CREDENTIALS, GUARANTEES, CASE STUDIES, YEARS IN BUSINESS, SERVICE AREA DETAILS, OR OTHER CONFIRMED TRUST SIGNALS IF AVAILABLE]

Execution Depth:  
[Compact, Standard, or Deep]

Known Constraints or Notes:  
[KNOWN CONSTRAINTS, BRAND REQUIREMENTS, CONTENT LIMITS, ANALYTICS LIMITATIONS, SERP DATA LIMITATIONS, OR IMPLEMENTATION NOTES]

---

## Execution Depth

Select one before proceeding:

### Compact

Use Compact when a quick alignment check is needed before build.

Return only:

- Part 1: Visibility and Conversion Metrics Table
- Part 15: Final Recommendations
- Final Alignment Decision
- Carry-forward items if needed

Skip Parts 2 through 14.

### Standard

Use Standard for a normal page strategy alignment review.

Return:

- Parts 1 through 8
- Part 15
- Final Alignment Decision
- Carry-forward items if needed

Skip Parts 9 through 14 unless those areas are flagged in Parts 1 through 8.

### Deep

Use Deep for high-value pages, revenue-critical pages, competitive pages, local SEO priority pages, AI-search priority pages, and final pre-publish audits.

Return:

- All 15 parts
- Multi-platform review table
- Extended risk review
- Required fixes and optional improvements
- Carry-forward items
- Final Alignment Decision

Default to Standard unless the task is clearly simple or explicitly marked Deep.

---

## Routing Rule

Prompt 20 is a visibility and conversion alignment prompt.

Use Prompt 20 when the specific goal is to verify that SEO, AEO, GEO, LLM search readiness, SERP visibility, technical visibility signals, page strategy, trust placement, CTA flow, and conversion path are aligned before build or before publishing.

Use this prompt when:

- A page strategy exists and you need to verify that visibility and conversion are aligned before build
- A built page needs a full cross-platform readiness audit before publishing
- You need to check whether search, AI, local, rich snippet, and conversion signals are present and aligned
- You need to identify whether a page may rank without converting
- You need to identify whether a page may convert poorly because search intent, CTA, trust, or lead capture flow is misaligned
- You need to connect strategy findings from Prompts 11, 12, 13, 16, 17, or 18 into one alignment review

Prompt 20 does not replace:

- Prompt 03 Ten-Metric Analysis — broad multi-metric page analysis
- Prompt 04 Gap Fix — structural gap repair for a specific page
- Prompt 06 Claude Code Build — page implementation
- Prompt 07 QA Review — post-build technical and strategy review
- Prompt 08 Production Fix and TODO Resolution — fix session after QA
- Prompt 11 SERP Competitive Analysis — verified SERP and competitor research
- Prompt 12 Analytics and Measurement — analytics-based review
- Prompt 13 Content Quality Editor — content editorial improvement
- Prompt 14 Page Template Evaluation — reusable page template evaluation
- Prompt 15 Page Variant Battle — strategic page variant comparison
- Prompt 16 Search Intent Defense — search intent validation and defense
- Prompt 17 AI Citation Readiness — AI/LLM citation-readiness review
- Prompt 18 Page Moat — competitive durability and page defensibility review
- Prompt 19 Template Eval Rubric — Site OS prompt, workflow, checklist, and rubric evaluation

Do not use this prompt to replace SERP competitive analysis, analytics reporting, content editing, AI citation review, search intent defense, page moat strategy, QA review, or production build work.

Prompt 20 may use findings from other prompts when provided, but it must not invent findings from those prompts.

---

## Unavailable Data Handling

If the Schema Plan is not provided:

- Flag as SCHEMA PLAN UNAVAILABLE
- Skip detailed schema accuracy checks
- Note what schema is recommended based on the page type
- Do not invent schema values that require confirmed business data

If the Internal Linking Plan is not provided:

- Flag as INTERNAL LINKING PLAN UNAVAILABLE
- Skip internal link dependency checks
- Note minimum internal linking requirements based on the page type
- Do not invent existing URLs unless provided

If the Conversion Plan is not provided:

- Flag as CONVERSION PLAN UNAVAILABLE
- Proceed based on the Primary CTA and Secondary CTA fields only
- Note what conversion planning details are needed

If analytics data is not available:

- Follow the Analytics Unavailability Rule
- Do not invent conversion rates, lead counts, traffic estimates, ranking positions, phone call volume, form submissions, revenue data, CRM data, GBP performance, Google Search Console data, or Bing Webmaster data
- Flag the gap and note what data would be needed for a complete analytics-backed review
- Provide a recommended measurement framework only if needed

If competitor data is not available:

- Do not invent competitor findings, rankings, content weaknesses, SERP positions, or competitor strategies
- Label competitive observations as general page-pattern assumptions
- Note what SERP research would improve the competitive outperformance review

If proof or trust data is not available:

- Flag missing proof points
- Recommend what should be collected
- Do not invent testimonials, reviews, ratings, credentials, awards, guarantees, case studies, certifications, years in business, licensing, insurance, or performance claims

---

## Do Not Invent

Do not invent or assume:

- Analytics data, traffic estimates, or ranking positions
- Conversion rates, lead counts, call volume, form submissions, or revenue results
- SERP positions or competitor content findings
- Competitor names, competitor weaknesses, or competitor strategies
- Reviews, testimonials, credentials, certifications, awards, or trust signals
- Pricing, guarantees, warranties, discounts, financing, or performance claims
- Schema data not supported by visible page content or confirmed business information
- Business details not confirmed in the page strategy
- Local claims, service area coverage, business hours, or availability not provided
- AI citation outcomes, search ranking outcomes, or lead generation outcomes

If required facts are unknown, flag them as:

NEEDS CONFIRMATION — [description of what is needed]

Do not fill in missing data with plausible assumptions.

Do not claim that alignment will guarantee rankings, traffic, leads, calls, conversions, revenue, rich snippets, map pack placement, or AI citations.

---

## Objective

Evaluate whether the page strategy aligns across:

1. SEO visibility
2. GEO and local visibility
3. AEO readiness
4. Voice search readiness
5. SERP visibility
6. Featured snippet readiness
7. People Also Ask readiness
8. Rich snippet readiness
9. LLM search readiness
10. AI citation readiness
11. Technical SEO visibility
12. Indexing and crawlability
13. Topical authority
14. Entity clarity
15. Knowledge panel and entity authority potential
16. Internal linking strength
17. Trust and proof placement
18. User engagement
19. Conversion readiness
20. Competitive outperformance

The goal is to identify gaps that could cause the page to:

- Rank but fail to convert
- Convert poorly because intent or trust is misaligned
- Miss featured snippet, PAA, rich snippet, or AI visibility opportunities
- Fail local visibility because local signals are weak
- Fail lead generation because CTA flow or trust placement is weak
- Build visibility without a strong next step
- Build conversion copy without enough search visibility support

---

## Target Readiness Scores

Use these target standards when scoring:

- 9 to 10: Strong alignment and ready for build or publishing
- 7 to 8: Good alignment with minor gaps
- 5 to 6: Moderate alignment with meaningful gaps
- 3 to 4: Weak alignment with major issues
- 1 to 2: Poor alignment and not ready

Do not inflate scores.

If a score depends on unavailable data, state that clearly.

---

## Part 1: Visibility and Conversion Metrics Table

Create a table evaluating each major visibility and conversion goal.

Use these columns unless Execution Depth is Compact and the user asks for a shorter table:

- Metric
- Current Alignment Score
- Visibility Impact
- Conversion Impact
- What is working
- What is missing
- Required fix
- Optional improvement
- Data available: YES / NO
- Requires confirmation: YES / NO
- Recommended next action
- Related prompt if needed
- Priority: High, Medium, or Low
- Claude Code note if applicable

Evaluate:

1. SEO visibility
2. GEO and local visibility
3. AEO readiness
4. Voice search readiness
5. SERP visibility
6. Featured snippet readiness
7. People Also Ask readiness
8. Rich snippet readiness
9. LLM search readiness
10. AI citation readiness
11. Technical SEO visibility
12. Indexing and crawlability
13. Topical authority
14. Entity clarity
15. Knowledge panel and entity authority potential
16. Internal linking strength
17. Trust and proof placement
18. User engagement
19. Conversion readiness
20. Competitive outperformance

---

## Part 2: Indexing and Crawlability Review

Evaluate whether the page strategy supports:

- Clear page purpose
- Crawlable route
- Clean URL structure
- Logical heading structure
- Indexable content
- Avoidance of thin duplicate content
- Internal link access
- Metadata clarity
- Schema support
- Canonical clarity
- Mobile readability
- Fast first impression

Identify:

- Indexing risks
- Crawlability risks
- Content duplication risks
- Technical SEO signals needed
- Required fixes
- Optional improvements
- Claude Code notes

Do not invent technical implementation details if they were not provided.

---

## Part 3: SERP Visibility Review

Evaluate whether the page is positioned to appear in relevant search results.

Check:

- Keyword and page intent alignment
- Page type fit
- SERP expectation fit
- Title and meta direction
- Heading direction
- Competitive relevance
- Searcher problem fit
- Service or topic clarity
- Local modifier use when applicable
- Internal linking support

Return:

- Visibility strengths
- Visibility gaps
- Ranking-without-conversion risks
- Required fixes
- Optional improvements
- Recommended next prompt if more SERP research is needed

If verified SERP research is not provided, state that the review is based on page strategy and general SERP expectations, not verified competitor findings.

---

## Part 4: Featured Snippet and People Also Ask Review

Evaluate whether the page supports:

- Direct answer blocks
- Short answer statements
- Definitions
- Step-by-step explanations
- FAQ sections
- Comparison answers
- Cost or pricing guidance if accurate and allowed
- Service process answers
- Local answers when applicable
- Clear question-based headings

Return:

- Featured snippet opportunities
- PAA opportunities
- Missing direct answers
- Questions the page should answer
- Required fixes
- Optional improvements
- Claude Code notes

Do not invent facts, pricing, steps, guarantees, or claims.

---

## Part 5: AEO and Voice Search Review

Evaluate whether the page is answer-ready for voice search and answer engines.

Check:

- Conversational question phrasing
- Concise answer placement
- Clear service or topic definitions
- Local voice search readiness if applicable
- “Near me” intent support where relevant
- Direct next-step guidance
- FAQ clarity
- Plain-language explanations
- Entity clarity

Return:

- AEO strengths
- Voice search gaps
- Answer-readiness risks
- Required fixes
- Optional improvements
- Recommended answer blocks

---

## Part 6: LLM Search and AI Citation Review

Evaluate whether the page supports AI assistants and LLM-driven search.

Check:

- Entity clarity
- Source-like statements
- Citation-worthy statements
- Low-hype factual wording
- Summarization-ready sections
- Clear service definitions
- Trust and proof clarity
- Local entity clarity when applicable
- Internal link relationships
- Schema alignment
- FAQ usefulness

Return:

- LLM search strengths
- AI citation-readiness gaps
- Unsupported claims
- Vague claims
- Proof needed
- Required fixes
- Optional improvements

Do not claim that AI systems will cite the page.

Recommend Prompt 17 if the page needs a full AI Citation Readiness review.

---

## Part 7: GEO and Local Intent Review

If local intent applies, evaluate:

- Target location clarity
- Service area clarity
- Nearby area support
- Google Business Profile alignment
- Local customer scenarios
- Local trust signals
- Local FAQs
- Local internal linking
- Local schema support
- Avoidance of city-name swapping

Return:

- Local visibility strengths
- Local visibility gaps
- Local conversion gaps
- Required fixes
- Optional improvements
- Confirmation needed

If local intent does not apply, state:

“GEO and local intent review is not applicable based on the provided page type, target location, and page goal.”

Do not invent local claims, rankings, regulations, neighborhoods, service history, or local proof.

---

## Part 8: Rich Snippet and Schema Review

Evaluate whether the page strategy supports rich snippet eligibility and structured data planning.

Check:

- Page type schema fit
- Service schema if applicable
- LocalBusiness schema if applicable
- FAQ schema if applicable
- Breadcrumb schema
- Article schema if applicable
- Product or offer schema if applicable and accurate
- Review schema only if real review data is provided
- Organization schema alignment
- Schema values supported by visible page content

Return:

- Recommended schema types
- Schema risks
- Missing schema opportunities
- Unsupported schema claims
- Required fixes
- Optional improvements
- Claude Code notes

Do not invent schema values, reviews, ratings, prices, addresses, phone numbers, business hours, credentials, or guarantees.

---

## Part 9: Topical Authority Review

Evaluate whether the page supports topical authority.

Check:

- Topic coverage
- Supporting subtopics
- Related service coverage
- Internal links to pillar pages
- Internal links to cluster pages
- Internal links to related services
- Internal links to location pages when applicable
- FAQ depth
- Original explanations
- Content moat opportunities
- Entity relationships

Return:

- Topical authority strengths
- Missing subtopics
- Internal linking gaps
- Related content opportunities
- Required fixes
- Optional improvements

Recommend Prompt 18 if the page needs deeper page moat strategy.

---

## Part 10: Knowledge Panel and Entity Authority Review

Evaluate whether the page supports entity understanding.

Check:

- Clear business entity
- Clear service entity
- Clear location entity if applicable
- Clear audience entity
- Clear proof and trust signals
- Organization references
- Consistent naming
- Internal links that reinforce entity relationships
- Schema alignment
- Brand clarity

Return:

- Entity authority strengths
- Entity clarity gaps
- Knowledge panel support opportunities
- Required fixes
- Optional improvements
- Confirmation needed

Do not invent entity relationships, credentials, affiliations, or authority signals.

---

## Part 11: Engagement Review

Evaluate whether the page strategy supports user engagement.

Check:

- Above-the-fold clarity
- Scannability
- Section flow
- Visual support
- FAQ usefulness
- Objection handling
- Trust placement
- Mobile readability
- Helpful next steps
- Content depth without bloat
- User confidence

Return:

- Engagement strengths
- Engagement risks
- Bounce-risk factors
- Required fixes
- Optional improvements
- Claude Code notes

---

## Part 12: Conversion Review

Evaluate whether the page strategy supports lead generation or the intended conversion.

Check:

- Primary CTA clarity
- Secondary CTA clarity
- CTA placement
- CTA readiness by intent level
- Lead capture path
- Phone, form, booking, quote, or consultation flow
- Trust before CTA
- Objection handling before CTA
- Low-friction next step
- Mobile conversion flow
- Proof near conversion points
- Offer clarity if applicable

Return:

- Conversion strengths
- Conversion gaps
- Conversion-without-visibility risks
- Required fixes
- Optional improvements
- Recommended CTA direction

Do not invent offers, pricing, guarantees, discounts, or urgency.

---

## Part 13: Competitive Outperformance Review

Evaluate whether the page strategy is strong enough to compete.

Check:

- Competitor parity risk
- Generic content risk
- Page moat strength
- Direct answer quality
- Trust and proof advantage
- Local advantage if applicable
- Internal linking advantage
- Schema advantage
- Conversion advantage
- Content usefulness advantage

Return:

- Competitive strengths
- Competitive gaps
- What competitors could easily copy
- What should be made more defensible
- Required fixes
- Optional improvements
- Recommended next prompt if deeper SERP or moat review is needed

If competitor research is unavailable, state that this section is based on general competitor patterns, not verified competitor findings.

---

## Part 14: Risk Review

Identify risks such as:

- Page may rank but not convert
- Page may convert poorly because intent is mismatched
- Page may miss local visibility
- Page may miss AEO opportunities
- Page may miss LLM visibility opportunities
- Page may lack rich snippet support
- Page may lack trust near CTAs
- Page may lack enough proof
- Page may have weak internal linking
- Page may have weak topical depth
- Page may feel generic
- Page may overclaim without proof
- Page may need analytics review
- Page may need SERP research
- Page may need stronger conversion planning

For each risk, provide:

- Risk
- Risk level: High, Medium, or Low
- Visibility impact
- Conversion impact
- Required fix
- Optional improvement
- Related prompt if needed
- Blocking build or publish: YES / NO

---

## Part 15: Final Recommendations

Provide:

1. Overall visibility and conversion alignment score
2. Biggest visibility strength
3. Biggest conversion strength
4. Biggest alignment gap
5. Top 10 required fixes
6. Top 10 optional improvements
7. Top 5 technical visibility fixes
8. Top 5 AEO or LLM fixes
9. Top 5 local visibility fixes if applicable
10. Top 5 conversion fixes
11. Top 5 trust or proof fixes
12. Recommended next prompt
13. Final recommendation

Final recommendation must be one of:

- Ready for Prompt 04 Gap Fix
- Ready for Prompt 06 Claude Code Build
- Needs minor fixes before build
- Needs major fixes before build
- Not ready for build
- Needs analytics review first
- Needs SERP research first
- Needs another prompt first

---

## Final Alignment Decision

Choose one:

- Aligned: Page strategy, visibility signals, and conversion path are aligned. Proceed to Prompt 04 Gap Fix or Prompt 06 Claude Code Build.
- Needs minor edits: Small gaps identified. Resolve before build. No major workflow change needed.
- Needs major alignment work: Significant visibility or conversion gaps. Run Prompt 04 Gap Fix and revise strategy before build.
- Needs analytics review: Key decisions cannot be made without analytics data. Run Prompt 12 Analytics and Measurement first.
- Needs SERP research: Competitive outperformance and keyword alignment gaps require SERP analysis. Run Prompt 11 SERP Competitive Analysis first.
- Needs search intent defense: Intent, CTA, or user expectation alignment is unclear. Run Prompt 16 Search Intent Defense first.
- Needs AI citation review: LLM or AI citation-readiness alignment is weak. Run Prompt 17 AI Citation Readiness first.
- Needs page moat review: Competitive durability or defensibility is weak. Run Prompt 18 Page Moat first.
- Run another prompt first: Specify which prompt is needed and why before alignment review can be completed.

For the final decision, include:

- Decision
- Why this decision was chosen
- Required fixes
- Optional improvements
- Next prompt or workflow step
- Blocking build or publish: YES / NO

---

## Multi-Platform Review Table

If Execution Depth is Deep, include a multi-platform table covering:

- Google organic search
- Google featured snippets
- Google People Also Ask
- Google rich snippets
- Google Business Profile if local
- Google Search Console readiness
- Bing organic search
- Bing Webmaster readiness
- Apple Maps or Apple Search if local
- ChatGPT readiness
- Perplexity readiness
- Copilot readiness
- Gemini readiness
- Voice search readiness
- Lead generation readiness

For each platform or visibility layer, include:

- Readiness score
- What supports visibility
- What blocks visibility
- What supports conversion
- What blocks conversion
- Required fix
- Optional improvement
- Related prompt if needed

---

## Carry-Forward Items

If any visibility or conversion alignment finding requires client data, analytics data, SERP research, competitor research, source confirmation, proof confirmation, or verified business information to resolve safely, flag each item with:

- Item
- Status: NEEDS CLIENT CONFIRMATION, NEEDS ANALYTICS DATA, NEEDS SERP RESEARCH, NEEDS COMPETITOR RESEARCH, NEEDS SOURCE CONFIRMATION, NEEDS PROOF CONFIRMATION, or NEEDS BUSINESS CONFIRMATION
- Blocking build or publish: YES / NO
- Recommended next action

Examples include unverified:

- Analytics data
- Conversion rates
- Lead counts
- Traffic data
- Ranking positions
- Competitor findings
- SERP findings
- Reviews or testimonials
- Credentials or certifications
- Awards
- Guarantees or warranties
- Pricing or availability
- Service area coverage
- Business hours
- Schema values
- Internal URLs
- Local proof
- Case studies
- Revenue claims
- Performance claims

Do not invent data to resolve flagged items.

---

## Required Output Format

Use this structure unless the user requests a specific format:

# Visibility and Conversion Alignment Report

## Alignment Summary

- Business:
- Page:
- Page Type:
- Page Route:
- Target Service, Topic, or Category:
- Target Location:
- Primary Keyword:
- Target Audience:
- Execution Depth:
- Overall Alignment Score:
- Final Alignment Decision:

## Part 1: Visibility and Conversion Metrics Table

[Provide table]

## Part 2: Indexing and Crawlability Review

[Provide findings or state skipped due to execution depth]

## Part 3: SERP Visibility Review

[Provide findings or state skipped due to execution depth]

## Part 4: Featured Snippet and People Also Ask Review

[Provide findings or state skipped due to execution depth]

## Part 5: AEO and Voice Search Review

[Provide findings or state skipped due to execution depth]

## Part 6: LLM Search and AI Citation Review

[Provide findings or state skipped due to execution depth]

## Part 7: GEO and Local Intent Review

[Provide findings or state skipped due to execution depth]

## Part 8: Rich Snippet and Schema Review

[Provide findings or state skipped due to execution depth]

## Part 9: Topical Authority Review

[Provide findings or state skipped due to execution depth]

## Part 10: Knowledge Panel and Entity Authority Review

[Provide findings or state skipped due to execution depth]

## Part 11: Engagement Review

[Provide findings or state skipped due to execution depth]

## Part 12: Conversion Review

[Provide findings or state skipped due to execution depth]

## Part 13: Competitive Outperformance Review

[Provide findings or state skipped due to execution depth]

## Part 14: Risk Review

[Provide findings or state skipped due to execution depth]

## Part 15: Final Recommendations

[Provide recommendations]

## Final Alignment Decision

[Provide final decision]

## Multi-Platform Review Table

[Provide if Execution Depth is Deep, or state “Skipped based on execution depth.”]

## Carry-Forward Items

[List unresolved items that require confirmation, analytics data, SERP research, competitor research, source confirmation, proof confirmation, or verified business information, or state “No carry-forward items identified.”]

---

## Final Instruction

Do not invent analytics data, ranking data, SERP findings, competitor findings, conversion rates, lead counts, revenue results, testimonials, reviews, credentials, guarantees, pricing, schema values, internal URLs, or performance claims.

Follow the Analytics Unavailability Rule when analytics data is not available.

Do not claim that alignment guarantees rankings, traffic, leads, calls, conversions, revenue, rich snippets, map pack placement, or AI citations.

Focus on aligning visibility, usefulness, trust, and conversion readiness. 