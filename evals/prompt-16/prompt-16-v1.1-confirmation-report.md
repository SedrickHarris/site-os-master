Prompt 16 v1.1 Confirmation Report
File: prompts/16-search-intent-defense-prompt.md
Version: v1.1
Test Type: Lightweight confirmation test
Decision: PASS

1. Canonical Identity Header Check
PASS
The canonical identity header is present at the top of the file and includes all required fields: prompt number and name, canonical file path, version (v1.1), status (Supporting Prompt Candidate — Awaiting Lock), mode (Beyond-Elite Mode and Full Competitive Build Mode), workflow position, and the full list of prompts it does not replace. This matches the standard established by Prompts 11–15 v1.1.

2. Expanded Input Block Check
PASS
The Page Details block includes all required fields: business name, website name, page name, page type, target keyword, secondary keywords, target service/topic/category, target location, target audience, primary SEO and conversion goal, current page strategy, known SERP or competitor context, primary CTA, execution depth, and known constraints or notes. This is the most complete input block of any supporting prompt in the system and improves on the v1 baseline.

3. Execution Depth Check
PASS
All three execution depth levels are present, clearly defined, and placed correctly. Compact returns intent diagnosis, top 3 risks, top 3 fixes, intent score, and final verdict. Standard returns the full 7-part output with carry-forward items. Deep returns full 7-part output plus extended SERP expectation analysis, extended AEO and LLM alignment review, extended local intent analysis, and extended conversion-readiness analysis. The default rule (Standard if no selection is made) is present. The Execution Depth field also appears in the Page Details input block, ensuring it is captured before the review begins.

4. Routing Rule Check
PASS
The Routing Rule section is present and explicitly lists all nine prompts that Prompt 16 does not replace: Prompt 04, 06, 07, 08, 11, 12, 13, 14, and 15. The section also correctly states when to use Prompt 16 (before writing content, before building a page outline, before sending strategy to Claude Code, or before approving a page for build), what findings it may use from other prompts, and what it must not do (create implementation tickets, write production code, run technical QA, fabricate analytics claims, fabricate SERP findings, or rewrite full page content unless specifically asked). This is the most complete routing rule in the supporting prompt set.

5. Workflow Position Check
PASS
The workflow position is stated in both the canonical identity header and the Routing Rule section: after Prompt 15 Page Variant Battle, before Prompt 18 Page Moat, before Prompt 02 Page Outline, and whenever a page strategy needs intent validation before build. This matches the Full Competitive Build Mode sequence in the Site OS operating guide.

6. Fabrication Prevention Check
PASS
The Fabrication Prevention Rule section is present, comprehensive, and placed correctly before the output sections. It explicitly prohibits inventing: SERP rankings, search volume, keyword difficulty, competitor findings, user behavior data, click-through rate patterns, bounce rate claims, dwell-time claims, analytics results, conversion rates, call volume, form submissions, traffic data, revenue performance data, business credentials, certifications, guarantees, warranties, testimonials, reviews, ratings, case study results, competitor content strategies, pricing, availability, service area coverage, business hours, emergency service claims, and superlative claims. The flagging instruction ([UNKNOWN — REQUIRES CONFIRMATION OR SERP RESEARCH]) is present. The SERP research disclaimer (label as likely expectations when no verified research is provided) is present in Part 3. The Final Instruction at the bottom of the file restates the fabrication prevention rule as a closing guardrail. Fabrication prevention coverage exceeds the standard set by Prompts 13–15 v1.1.

7. Required Search Intent Rules Check
PASS
The Required Search Intent Rules section is present with 10 explicit rules covering: keyword-independent intent judgment, real-reason-behind-the-search analysis, separation of searcher intent from business goals, CTA mismatch identification, informational vs. transactional balance, sales-heavy vs. informational balance, local intent weakness detection, AEO direct-answer identification, required vs. optional fix separation, and missing data flagging. This section is unique to Prompt 16 and strengthens its scope compared to the other supporting prompts.

8. Carry-Forward Items Check
PASS
The Carry-Forward Items section is present with the correct structure: item, status (NEEDS CLIENT CONFIRMATION / NEEDS SERP RESEARCH / NEEDS COMPETITOR RESEARCH), blocking page outline flag (YES / NO), and recommended next action. The list of unverifiable item types is comprehensive and covers SERP expectations, competitor findings, pricing, reviews, certifications, licenses, service guarantees, availability, service area coverage, years in business, case studies, team credentials, insurance or bonding claims, business hours, financing options, analytics data, and user behavior assumptions. Carry-forward routing correctly names Prompt 10, 11, 15, 04, 08, and the client intake process. The no-invention rule is restated at the end of the section.

9. Required Output Format Check
PASS
The Required Output Format section is present and uses a clean structured template: Intent Defense Summary header with all key fields, followed by labeled parts 1 through 7 and a Carry-Forward Items section. The summary header captures business, page, page type, target keyword, target location, target audience, execution depth, intent match score, and final decision — giving any stakeholder an at-a-glance status before reading the full report.

10. Workflow Compatibility Check
PASS
Prompt 16 v1.1 fits the Full Competitive Build Mode sequence without conflict. It sits between Prompt 15 and Prompt 18, operates as a pre-outline intent gate, and does not duplicate any locked prompt. Its seven-part output produces findings that can be consumed by Prompt 02, Prompt 11, Prompt 18, and Prompt 04 without overlap. No conflicts with any locked prompt were detected.

11. Final Lock Decision
PASS
All 15 confirmation checks pass. No patches required.
Score breakdown:
CheckScoreNotesCanonical identity header10/10Complete and correctly formattedExpanded input block10/10Most complete input block in the supporting prompt setExecution depth10/10All three levels defined; default rule present; field in input blockRouting rule10/10All nine prompts listed; usage conditions stated; output limits statedWorkflow position10/10Stated in header and routing rule; matches operating guideFabrication prevention10/10Most comprehensive fabrication prevention in the supporting prompt setRequired search intent rules10/10Unique section; strengthens scope beyond other supporting promptsCarry-forward items10/10Complete structure; three-status system; routing namedRequired output format10/10Clean template; summary header captures all key fieldsWorkflow compatibility10/10No conflicts; clean fit in Full Competitive Build Mode
Overall: 100 / 100

Final Result
Prompt 16 v1.1 is ready to lock as the Supporting Search Intent Defense Master.
All required sections are present, correctly structured, and meet or exceed the standard established by Prompts 11–15 v1.1. The fabrication prevention coverage, routing rule completeness, and Required Search Intent Rules section make this the strongest initial supporting prompt submission in the current validation cycle. Recommend updating prompts/prompt-master-status.md to reflect the lock decision and recording the result in versions/prompt-change-log.md and versions/prompt-performance-log.md. 