Prompt 16 Validation Report
File: prompts/16-search-intent-defense-prompt.md
Version: v1 (no version declared in file — gap noted)
Validation Type: Initial validation pass
Overall Score: 74 / 100
Decision: PATCH

1. Prompt Identity Check
PATCH
The file contains no canonical identity block. There is no stated prompt name, no canonical file path, no version number, no status field, and no declaration that this is a supporting prompt. Every locked supporting prompt in this system (11 v1.1, 12 v1.1, 13 v1.1, 14 v1.1, 15 v1.1) requires a canonical identity header at the top of the file. This prompt is missing it entirely.

2. Role Clarity Check
PASS
The purpose is clear: defend page strategy against search intent mismatch. The seven-part output structure covers intent diagnosis, intent satisfaction mapping, SERP expectation review, intent mismatch risks, above-the-fold intent check, conversion intent check, and a final defense summary. The prompt is clearly scoped as a pre-build and pre-publish strategy defense tool. It does not attempt to write content. Role clarity is strong.

3. Routing Rule Check
PATCH
There is no routing rule section. The prompt does not state which prompts it does not replace, where it sits in the workflow, or what conditions trigger its use vs. skipping it. Per the locked system standard, every supporting prompt must explicitly state it does not replace Prompt 04, 06, 07, 08, 11, 12, 13, 14, and 15.

4. Workflow Compatibility Check
PASS
The prompt fits cleanly in the Full Competitive Build Mode sequence between Prompt 15 (Page Variant Battle) and Prompt 18 (Page Moat). It is pre-outline and pre-build. It does not duplicate any locked prompt. No conflicts detected.

5. Input Requirements Check
PATCH
The input block collects business name, website name, page name, page type, target keyword, secondary keywords, target location, target audience, current page strategy, and primary CTA. This is solid.
Missing:

Execution depth selector — required by all locked supporting prompts (Compact / Standard / Deep)
Explicit instruction for incomplete inputs — no fabrication guardrail at the input stage


6. Output Requirements Check
PASS
All seven output parts are well-structured and cover the required intent defense scope: primary/secondary/mixed intent, intent satisfaction mapping, SERP expectations, mismatch risks, above-the-fold check, conversion CTA alignment, and a final scored decision. The final decision produces a clear four-option verdict. The output is decision-ready. Minor gap: no explicit separation of required fixes vs. optional improvements in Part 7, but the structure implies it.

7. Fabrication Prevention Check
FAIL
The prompt contains no fabrication prevention rules. There is no instruction telling the model not to invent SERP findings, rankings, search volume, keyword difficulty, competitor findings, user behavior data, analytics results, conversion rates, or performance claims. Every locked supporting prompt in this system includes a mandatory Do Not Invent section. Without it, a model running this prompt could fill intent mismatch risk sections with invented SERP evidence or assumed competitor behavior — producing strategically misleading output. This is a hard gap.

8. SEO/AEO/GEO/SERP/LLM Alignment Check
PASS
The prompt addresses local intent, AEO intent, voice search readiness, featured snippet alignment, People Also Ask opportunities, FAQ inclusion, entity clarity, topical relevance, and conversion path alignment across Parts 3, 4, and 5. LLM citation readiness is not explicitly named but is implied through the AEO and direct-answer checks. Coverage is comprehensive.

9. Client-Facing Quality Check
PASS
The output structure is clear for non-technical stakeholders. The intent satisfaction map table format makes gaps visible without requiring SEO expertise. The four-option final verdict (strong match / minor fixes / major revision / mismatch likely) is actionable. The conversion CTA section by intent tier is immediately usable by a content strategist or account manager.

10. Final Decision
PATCH
Four additions are required before this prompt can be locked:

Add canonical identity block (name, file path, version, status, supporting prompt declaration)
Add routing rule section (explicit list of prompts it does not replace, workflow position)
Add execution depth selector to the input block
Add fabrication prevention section (Do Not Invent rules)

No structural rebuild required. The seven-part output framework is valid and well-designed. All patches are additive.

Required Patch Text
Add at the top of the file, before the role description:
markdown---
Prompt: 16 — Search Intent Defense Prompt
File: prompts/16-search-intent-defense-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After Prompt 15 (Page Variant Battle), before Prompt 18 (Page Moat), before Prompt 02 (Page Outline)

This prompt does not replace:
- Prompt 04: Gap Fix Prompt
- Prompt 06: Claude Code Build Prompt
- Prompt 07: QA Review Prompt
- Prompt 08: Production Fix and TODO Resolution Prompt
- Prompt 11: SERP Competitive Analysis Prompt
- Prompt 12: Analytics and Measurement Prompt
- Prompt 13: Content Quality Editor Prompt
- Prompt 14: Page Template Evaluation Prompt
- Prompt 15: Page Variant Battle Prompt
---
Add after the Page Details input block, before the Objective section:
markdown## Execution Depth

Select one before proceeding:

- Compact: Intent diagnosis and final verdict only; top 3 risks and top 3 fixes
- Standard: Full 7-part output; all sections completed; intent score and final decision included
- Deep: Full 7-part output plus extended SERP expectation analysis, AEO/LLM alignment review, and carry-forward items; use only for high-value or competitive pages

Default to Standard if no selection is made.

## Routing Rule

This prompt defends page strategy against search intent mismatch.

Use it before writing content, before building a page outline, or before approving a page for build.

It does not replace SERP competitive analysis (Prompt 11), content editing (Prompt 13), or page template evaluation (Prompt 14). It runs before those prompts to ensure the page is targeting the right intent before strategy or content is finalized.
Add after the Objective section, before Part 1:
markdown## Fabrication Prevention Rule

Do not invent:

- SERP rankings, search volume, keyword difficulty, or competitor findings
- User behavior data, click-through rate patterns, or bounce rate claims
- Analytics results, conversion rates, or revenue performance data
- Business credentials, certifications, guarantees, or service claims not provided
- Testimonials, reviews, ratings, or case study results
- Competitor content strategies or positioning unless provided as input

When a fact is unknown, flag it as:
[UNKNOWN — REQUIRES CONFIRMATION OR SERP RESEARCH]

Strategy-based assessments are acceptable when clearly labeled as strategic assumptions, not verified data.

Recommended Next Action
Apply the four patches above, re-version the file to v1.1, and run a lightweight confirmation pass against the patched file. If all four sections pass confirmation, Prompt 16 v1.1 is ready to lock as the Supporting Search Intent Defense Master. 