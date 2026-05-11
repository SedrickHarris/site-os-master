Prompt 15 Validation Report
File: prompts/15-page-variant-battle-prompt.md
Version: v1 (current, unlocked)
Validation Type: Initial validation pass
Overall Score: 71 / 100
Decision: PATCH

1. Prompt Identity Check
PATCH
The prompt does not declare a canonical prompt name, canonical file path, version number, or status at the top of the file. Every locked supporting prompt in this system (see Prompt 11 v1.1 as the reference standard) opens with an explicit identity block. This one opens directly with a title and role description, skipping the identity section entirely.
Missing:

Canonical prompt name: Prompt 15: Page Variant Battle Prompt
Canonical file path: prompts/15-page-variant-battle-prompt.md
Version: v1
Status: Supporting Prompt Candidate
Self-identification as a supporting prompt


2. Role Clarity Check
PASS
The role is clearly stated. The prompt defines the model as a senior SEO strategist, conversion strategist, AEO architect, GEO/local SEO specialist, SERP analyst, and page architecture advisor. The job is clearly described: create multiple competing page strategy variants, score them, extract best elements, and merge into a final superior strategy. The scope is strategic, not execution-level. The prompt correctly restricts itself from writing full page content.

3. Routing Rule Check
PATCH
The prompt does not include explicit routing rules stating which prompts it does not replace. Per the validation standard established for Prompts 11–14, each supporting prompt must explicitly state that it does not replace specific locked prompts.
Missing routing declarations:

Does not replace Prompt 04 Gap Fix
Does not replace Prompt 06 Claude Code Build
Does not replace Prompt 07 QA Review
Does not replace Prompt 08 Production Fix and TODO Resolution
Does not replace Prompt 11 SERP Competitive Analysis
Does not replace Prompt 12 Analytics and Measurement
Does not replace Prompt 13 Content Quality Editor
Does not replace Prompt 14 Page Template Evaluation

The prompt also does not state when to use it relative to other prompts in the workflow. The repository confirms Prompt 15 belongs in the Full Competitive Build Mode sequence at position 4, after Prompts 01, 08, and 09. This placement context is absent from the prompt file.

4. Workflow Compatibility Check
PASS
The prompt fits cleanly into the Full Competitive Build Mode workflow as confirmed by the Site OS Prompt Operating Guide. It creates and compares strategic variants rather than evaluating a single template (Prompt 14) or executing a build (Prompt 06). It does not overlap with Prompt 11 in scope. It is clearly a pre-outline, pre-build strategy tool. No conflicts with locked prompts were detected.

5. Input Requirements Check
PATCH
The input block collects business name, website name, page name, page type, target service/topic/category, target location, primary keyword, target audience, primary CTA, and known competitors. This is functional.
Missing:

Execution depth selector. Every locked supporting prompt includes a selector (Compact, Standard, Deep). This prompt has none.
Secondary keywords field. Secondary keywords are included in every upstream strategy prompt and are needed for AEO and PAA variant scoring.
Existing page URL field. Not required, but its absence is a gap when the variant battle is being run against a page that already exists.
Explicit instruction on what to do when inputs are incomplete. No fabrication prevention at the input stage.


6. Output Requirements Check
PASS with notes
The six-part output structure is solid. Parts 1 through 6 collectively cover variant creation, scorecard comparison, element extraction, final merged strategy, final score, and final recommendation. The scorecard dimensions cover SEO, GEO, AEO, voice search, SERP visibility, rich snippets, LLM readiness, topical authority, engagement, conversion, trust, competitive outperformance, and implementation readiness. The final recommendation section identifies the winning strategy, its strongest advantage, its weakest remaining area, top 5 improvements, the next recommended prompt, and a go/no-go decision.
Notes:

The output does not include a section distinguishing required fixes from optional improvements in the final recommendation. This is a minor gap.
The prompt does not explicitly require the model to recommend whether to keep one variant, combine variants, revise and retest, or reject all variants as discrete decision options. The final recommendation section implies this through its decision tree but does not state it explicitly.


7. Fabrication Prevention Check
FAIL
This is the most significant deficiency. The prompt contains no fabrication prevention rules anywhere. There is no instruction telling the model not to invent business details, competitor names, rankings, testimonials, guarantees, certifications, analytics results, conversion results, or performance claims. There is no requirement to flag unknown facts instead of assuming them.
Every locked supporting prompt in this system includes an explicit Do Not Invent section. The absence here is a hard gap against the validation standard. A model running this prompt without fabrication guardrails could invent competitor weaknesses, invented SERP positions, fabricated trust signals, or assumed conversion rates to fill out the variant scorecards — all of which would produce misleading strategic output.

8. SEO/AEO/GEO/SERP/LLM Alignment Check
PASS
The prompt explicitly addresses SEO, GEO/local relevance, AEO, voice search, SERP visibility, rich snippets, LLM search readiness, topical authority, internal linking, FAQ opportunities, entity reinforcement, and competitive outperformance across the scorecard and element extraction sections. The alignment coverage is comprehensive.

9. Client-Facing Quality Check
PASS
The output structure produces decision-ready results. The variant scorecard gives non-technical users a clear side-by-side comparison. The element extraction section explains what to keep and why. The final recommendation section explains the winning direction in plain terms. The top 5 improvements before build section is actionable for any stakeholder. The go/no-go decision is clear.

10. Final Decision
PATCH
Four sections require patches before this prompt can be locked:

Add prompt identity block (canonical name, file path, version, status)
Add routing rules block (explicit list of prompts this does not replace, workflow position)
Add execution depth selector to the input block
Add fabrication prevention rules (Do Not Invent section)

No structural rebuild is required. The core six-part output structure is valid and well-designed. All patches are additive.

Required Patch Text
Add the following at the top of the file, before the role description:
markdown## Prompt Identity and Routing Rule

This prompt is the active Page Variant Battle Prompt.

Canonical prompt name:
Prompt 15: Page Variant Battle Prompt

Canonical file path:
prompts/15-page-variant-battle-prompt.md

Version: v1
Status: Supporting Prompt Candidate

This prompt does not replace:
- Prompt 04: Gap Fix Prompt
- Prompt 06: Claude Code Build Prompt
- Prompt 07: QA Review Prompt
- Prompt 08: Production Fix and TODO Resolution Prompt
- Prompt 11: SERP Competitive Analysis Prompt
- Prompt 12: Analytics and Measurement Prompt
- Prompt 13: Content Quality Editor Prompt
- Prompt 14: Page Template Evaluation Prompt

Use this prompt in Full Competitive Build Mode after Prompt 09 (Entity and Topical Authority) and before Prompt 02 (Page Outline).

Use this prompt when:
- A high-value or revenue-critical page requires strategy comparison before build
- Multiple page approaches exist and a decision is needed
- Competitive conditions require testing different strategic angles before committing to an outline
- The user explicitly requests a variant battle
Add the following to the input block, before the Page Details section:
markdown## Execution Depth

Select one:

- Compact: Scorecard and final recommendation only, minimal explanation
- Standard: Full six-part output with standard scoring and rationale
- Deep: Full six-part output with extended rationale, risk analysis, and implementation notes

Default to Standard if no selection is made.
Add the following as a new section after the Objective section:
markdown## Fabrication Prevention Rule

Do not invent:

- Business details, ownership, history, or credentials
- Competitor names, URLs, rankings, or content strategies
- SERP positions, search volume, or keyword difficulty
- Testimonials, reviews, ratings, or case study results
- Certifications, licenses, guarantees, or warranties
- Analytics results, conversion rates, or traffic data
- Pricing, availability, or service area details not provided

When a fact is unknown, flag it with:
[UNKNOWN — REQUIRES CONFIRMATION]

Do not assume, estimate, or imply unverified facts as if they are confirmed.

Strategy-based assessments are acceptable when clearly labeled as strategic assumptions rather than verified data.

Recommended Next Action
Apply the four patches above to produce Prompt 15 v1.1. Re-run this validation against the patched file. If all four sections pass, Prompt 15 v1.1 is ready to lock as the Supporting Page Variant Battle Master. 