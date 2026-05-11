Prompt 20 Validation Report
File: prompts/20-visibility-conversion-alignment-prompt.md
Version: v1 (no version header present in submitted file)
Validation Type: Initial validation pass
Overall Score: 61 / 100
Decision: PATCH

1. Prompt Identity Check
PATCH
The submitted prompt (Document 1) opens directly with a title and role description. There is no canonical identity block. Per the standard confirmed across all locked supporting prompts (11 v1.1 through 19 v1.2), every supporting prompt must open with a structured identity header declaring:

Canonical prompt name
Canonical file path
Version number
Status (Supporting Prompt Candidate — Awaiting Lock)
Mode (Beyond-Elite Mode / Full Competitive Build Mode)
Workflow position
List of prompts it does not replace

None of these are present. The Task Router references Prompt 20 by file path (20-visibility-conversion-alignment-prompt.md) in Core Mode, Beyond-Elite Mode, and Full Competitive Build Mode workflows. Without an identity block, the prompt cannot be correctly routed or locked.
Required patch: Add canonical identity header at the top of the file.

2. Role Clarity Check
PASS
The role is clearly and specifically stated at the opening. The prompt identifies the model as a senior SEO strategist, GEO/local SEO specialist, AEO architect, SERP analyst, LLM search strategist, technical SEO reviewer, topical authority planner, local business visibility strategist, and conversion optimization specialist. The job is well-scoped: audit whether a page strategy, content plan, technical SEO plan, schema plan, internal linking plan, and conversion path align with the full Site OS visibility and conversion ecosystem. The scope is appropriately distinct from single-focus prompts like Prompt 16 (search intent) or Prompt 17 (AI citation). The 20-goal evaluation framework is comprehensive and the purpose is unambiguous.

3. Routing Rule Check
PATCH
The prompt does not include an explicit routing rule section. Per the validation standard established for Prompts 11 through 19, supporting prompts must explicitly state which locked prompts they do not replace and when to use this prompt in the workflow.
Prompt 20 covers visibility and conversion alignment across SEO, AEO, GEO, LLM search, rich snippets, featured snippets, topical authority, and conversion path. Without routing rules, it risks being confused with:

Prompt 03 (10-Metric Analysis) — overlapping multi-metric review scope
Prompt 04 (Gap Fix) — overlapping gap identification scope
Prompt 07 (QA Review) — overlapping pre-publish review scope
Prompt 11 (SERP Competitive Analysis) — overlapping SERP visibility scope
Prompt 12 (Analytics and Measurement) — overlapping measurement scope
Prompt 16 (Search Intent Defense) — overlapping intent alignment scope
Prompt 17 (AI Citation Readiness) — overlapping LLM readiness scope
Prompt 18 (Page Moat) — overlapping competitive outperformance scope

Required patch: Add a routing rule section explicitly stating Prompt 20 does not replace Prompts 03, 04, 06, 07, 08, 11, 12, 13, 14, 15, 16, 17, 18, or 19, and stating when to use it (after strategy exists, before build or before publishing, when full cross-platform visibility and conversion alignment is the specific need).

4. Workflow Compatibility Check
PASS
The prompt fits cleanly in the Site OS workflow. The Task Router confirms Prompt 20 is used in Core Mode (optionally for important pages), Beyond-Elite Mode, and Full Competitive Build Mode — positioned after the 10-metric analysis and before Gap Fix. The prompt operates on existing page strategy and does not generate outlines, code, or schema — it evaluates alignment and produces a readiness report. No conflicts with locked prompts are identified at the structural level.

5. Input Requirements Check
PATCH
The prompt includes a Page Details block with: Business Name, Website Name, Page Name, Page Type, Page Route, Target Service/Topic/Category, Target Location, Primary Keyword, Secondary Keywords, Target Audience, Primary CTA, Secondary CTA, Approved Page Strategy, Schema Plan, Internal Linking Plan, and Conversion Plan.
Missing required inputs per the Validation Task criteria:

No execution depth selector. Every locked supporting prompt (11–19) includes a selector for Compact, Standard, or Deep output. Prompt 20 is absent this control. Given the prompt's 15-part output structure, this is a critical gap — the full output would be extremely long and token-heavy even for simple pages.
No instructions for unavailable analytics, SERP, or competitor data. If schema plan, internal linking plan, conversion plan, or competitor data is not available, the prompt does not instruct the model on how to handle those gaps. This creates a fabrication risk.
No analytics context field. The Validation Task criteria requires an analytics context input field.

Required patch: Add execution depth selector. Add handling instructions for unavailable data fields. Add optional analytics context field.

6. Output Requirements Check
PATCH
The 15-part output structure is comprehensive and covers: visibility/conversion metrics table, indexing review, SERP visibility review, featured snippet and PAA review, AEO and voice search review, LLM search and AI citation review, GEO and local intent review, rich snippet and schema review, topical authority review, knowledge panel and entity authority review, engagement review, conversion review, competitive outperformance review, risk review, and final recommendations. The multi-platform review table adds a strong second evaluation layer.
However:

No final alignment score with decision options. The Validation Task requires: aligned, needs minor edits, needs major alignment work, needs analytics review, needs SERP research, or should run another prompt first. Part 15 includes a final recommendation (Ready / Needs minor fixes / Needs major fixes / Not ready) but this does not include "run another prompt first" routing. This is a gap for workflow continuity.
No clear distinction between what is a required fix vs an optional improvement. The Validation Task criteria requires this separation explicitly.
The Part 1 table column list is very long (17 columns). This is functionally correct but may produce unusable output without an execution depth selector to constrain it.

Required patch: Add final alignment decision with routing options. Separate required fixes from optional improvements in Part 15. Confirm table column count is manageable or add depth-conditional column reduction.

7. Fabrication Prevention Check
PATCH
The prompt includes a target score table in the Objective section and states "No fake reviews, ratings, prices, or unsupported business claims" in Part 8 (schema review). Part 6 states "No unsupported claims." These are partial guardrails.
However, there is no explicit Do Not Invent section. Per the standard confirmed across all locked supporting prompts (11 v1.1 through 19 v1.2), every supporting prompt must include a dedicated fabrication prevention block prohibiting the model from inventing:

Analytics data
Ranking data
SERP findings
Competitor findings
Conversion rates
Lead counts
Revenue results
Testimonials
Reviews
Credentials
Guarantees
Pricing
Performance claims

The Analytics Unavailability Rule from Prompt 12 must also be referenced for consistent handling of missing data.
Required patch: Add a dedicated Do Not Invent section. Add the Analytics Unavailability Rule reference. Add instructions to flag unknown facts instead of assuming them.

8. SEO/AEO/GEO/SERP/LLM Alignment Check
PASS
The prompt explicitly addresses all required alignment dimensions: SEO, AEO, GEO, local SERP, LLM search, Google Search Console, Bing Webmaster, Apple Search/Maps, rich snippets, featured snippets, People Also Ask, topical authority, Google Business Profile, knowledge panel, Perplexity, ChatGPT, customer engagement, customer conversion, competitive outperformance, and indexing/crawlability. The multi-platform review table in the final section reinforces coverage across Google, Bing, Apple, GBP, AI assistants, and lead generation. The alignment coverage is the most comprehensive of any supporting prompt in the system.

9. Client-Facing and Internal Quality Check
PASS
The 15-part output structure produces decision-ready results that non-technical stakeholders can use. The metrics table in Part 1 gives a clear readiness score per goal. Part 14 (Risk Review) is particularly valuable for client-facing communication. Part 15 (Final Recommendations) produces prioritized, actionable lists. The prompt is usable by content strategists, SEO reviewers, conversion reviewers, and Claude Code workflows. The inclusion of Claude Code implementation notes as a required column throughout the tables is well-designed.

10. Final Decision
PATCH
Four sections require patches before this prompt can be locked:

Add canonical identity header (canonical name, file path, version, status, mode, workflow position, prompts not replaced)
Add routing rules block (explicit list of prompts this does not replace, when to use, workflow position)
Add execution depth selector to the input block (Compact / Standard / Deep with output constraints per tier)
Add fabrication prevention rules (Do Not Invent section + Analytics Unavailability Rule reference)
Add unavailable data handling instructions to the input block
Add final alignment decision with routing options to Part 15

No structural rebuild is required. The 15-part evaluation framework, multi-platform review table, target readiness scores, and Claude Code implementation note columns are all strong and should be preserved.

Required Patch Text
Add the following at the top of the file, before the role description:
## Prompt Identity and Routing Rule

This prompt is the active Visibility and Conversion Alignment Prompt.

Canonical prompt name:
Prompt 20: Visibility and Conversion Alignment Prompt

Canonical file path:
prompts/20-visibility-conversion-alignment-prompt.md

Version: v1
Status: Supporting Prompt Candidate — Awaiting Lock

Mode:
Beyond-Elite Mode / Full Competitive Build Mode
Optional in Core Mode for important pages

Workflow position:
Run after Prompt 03 (10-Metric Analysis) and before Prompt 04 (Gap Fix).
Run when page strategy exists and full cross-platform visibility and conversion alignment is needed.

This prompt does not replace:
- Prompt 03: 10-Metric Analysis Prompt
- Prompt 04: Gap Fix Prompt
- Prompt 06: Claude Code Build Prompt
- Prompt 07: QA Review Prompt
- Prompt 08: Production Fix and TODO Resolution Prompt
- Prompt 11: SERP Competitive Analysis Prompt
- Prompt 12: Analytics and Measurement Prompt
- Prompt 13: Content Quality Editor Prompt
- Prompt 14: Page Template Evaluation Prompt
- Prompt 15: Page Variant Battle Prompt
- Prompt 16: Search Intent Defense Prompt
- Prompt 17: AI Citation Readiness Prompt
- Prompt 18: Page Moat Prompt
- Prompt 19: Template Eval Rubric Prompt

Use this prompt when:
- A page strategy exists and you need to verify that visibility and conversion are aligned before build
- A built page needs a full cross-platform readiness audit before publishing
- You need to check whether all search, AI, local, rich snippet, and conversion signals are present and aligned

Do not use this prompt to:
- Replace SERP competitive analysis (use Prompt 11)
- Replace AI citation optimization (use Prompt 17)
- Replace analytics reporting (use Prompt 12)
- Replace QA review (use Prompt 07)
- Replace content editing (use Prompt 13)
Add the following execution depth selector after the Page Details input block:
## Execution Depth

Select one:

Compact:
Return only the Part 1 metrics table and Part 15 final recommendations.
Skip Parts 2–14.
Use when a quick alignment check is needed before build.

Standard:
Return Parts 1–8 and Part 15.
Skip Parts 9–14 unless those areas are flagged in Parts 1–8.
Use for normal page strategy alignment review.

Deep:
Return all 15 parts plus the multi-platform review table.
Use for high-value pages, revenue-critical pages, final pre-publish audits, and competitive pages.

Default to Standard unless the task is clearly simple or explicitly marked Deep.
Add the following data availability instructions after the execution depth selector:
## Unavailable Data Handling

If the Schema Plan is not provided:
Flag as SCHEMA PLAN UNAVAILABLE and skip Part 8 schema accuracy checks.
Note what schema is needed based on the page type.

If the Internal Linking Plan is not provided:
Flag as INTERNAL LINKING PLAN UNAVAILABLE and skip internal link dependency checks.
Note minimum internal linking requirements based on page type.

If the Conversion Plan is not provided:
Flag as CONVERSION PLAN UNAVAILABLE and proceed based on the Primary CTA and Secondary CTA fields only.

If analytics data is not available:
Follow the Analytics Unavailability Rule: do not invent conversion rates, lead counts, traffic estimates, ranking positions, or performance claims. Flag the gap and note what data would be needed for a complete review.

If competitor data is not available:
Do not invent competitor findings, rankings, or content weaknesses. Note what SERP research would improve the competitive outperformance review.
Add the following Do Not Invent section before Part 1:
## Do Not Invent

Do not invent or assume:
- Analytics data, traffic estimates, or ranking positions
- Conversion rates, lead counts, or revenue results
- SERP positions or competitor content findings
- Reviews, testimonials, credentials, or trust signals
- Pricing, guarantees, or performance claims
- Schema data not supported by visible page content
- Business details not confirmed in the page strategy

If required facts are unknown, flag them as NEEDS CONFIRMATION.
Do not fill in missing data with plausible assumptions.
Add the following to Part 15 Final Recommendations, after the final recommendation options:
## Final Alignment Decision

Choose one:

- Aligned: Page strategy, visibility signals, and conversion path are aligned. Proceed to Prompt 04 (Gap Fix) or Prompt 06 (Claude Code Build).
- Needs minor edits: Small gaps identified. Resolve before build. No major workflow change needed.
- Needs major alignment work: Significant visibility or conversion gaps. Run gap fix and revise strategy before build.
- Needs analytics review: Key decisions cannot be made without analytics data. Run Prompt 12 (Analytics and Measurement) first.
- Needs SERP research: Competitive outperformance and keyword alignment gaps require SERP analysis. Run Prompt 11 (SERP Competitive Analysis) first.
- Run another prompt first: Specify which prompt is needed and why before alignment review can be completed.

Recommended Next Action

Apply all six patches to prompts/20-visibility-conversion-alignment-prompt.md
Update the version to v1.1 and status to "Supporting Prompt Candidate — Awaiting Lock"
Run a lightweight confirmation test against the patched file using the Prompt 19 confirmation report format as the validation template
If confirmation passes, lock as Supporting Prompt — Locked v1.1 and update prompts/prompt-master-status.md
Update docs/supporting-prompts-validation-summary.md with the Prompt 20 v1.1 entry