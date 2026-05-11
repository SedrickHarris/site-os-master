Prompt 13 Validation Report
File: prompts/13-content-quality-editor-prompt.md
Version: v1 (as submitted)
Validation Type: Initial validation pass
Overall Score: 81 / 100
Decision: CONDITIONAL PASS — PATCH REQUIRED

1. Prompt Identity Check
PATCH
The prompt file as submitted does not include a canonical identity header. There is no stated prompt name, canonical file path, version number, or status declaration at the top of the file. All locked Site OS prompts carry an identity block (e.g., "Prompt 11 v1.1 — Supporting SERP Competitive Analysis Master"). Without this, the prompt cannot be correctly referenced by the Task Router, the Efficiency Governor, or the prompt-master-status file.
Required patch: Add canonical identity block at the top of the file.

2. Role Clarity Check
PASS
The role is clearly stated. The prompt identifies itself as acting as a senior SEO editor, AEO editor, conversion copy editor, local SEO editor, content quality reviewer, and anti-generic-content specialist. The objective states the improvement targets explicitly (SEO, GEO, AEO, voice search, LLM search, featured snippets, PAA, rich snippets, topical authority, trust, engagement, conversion, competitive outperformance). The distinction between "sounds nicer" and "performs better" is a strong role clarifier.

3. Routing Rule Check
PATCH
The prompt does not include a routing rule section that explicitly states what it does not replace. Per the Site OS standard confirmed in Prompt 11 v1.1, supporting prompts must clarify which locked prompts they do not replace or conflict with. Prompt 13 is an editorial improvement prompt. Without a routing rule, it could be mistakenly used as a substitute for Prompt 07 QA Review, Prompt 04 Gap Fix, or Prompt 06 Build. This is a minor but required clarification.
Required patch: Add a routing rule section stating Prompt 13 does not replace Prompt 04, Prompt 06, Prompt 07, Prompt 08, or Prompt 11.

4. Workflow Compatibility Check
PASS
The prompt is structurally compatible with the Site OS workflow. It is designed to operate on existing content, not to generate a page outline, build brief, or implementation. It fits cleanly after Prompt 06 (build), after Prompt 07 (QA), or as a parallel pass during Prompt 04 (gap fix). It does not introduce any conflicting gates, scopes, or output types.

5. Input Requirements Check
PASS
The input block collects: Business Name, Website Name, Page Name, Page Type, Target Service/Topic/Category, Target Location, Target Audience, Primary CTA, Brand Voice, and Content to Review. This is a complete and sufficient input set for an editorial pass. Brand Voice is a notable addition not present in all upstream prompts — this is appropriate for a content editor role.

6. Output Requirements Check
PATCH
The output structure is strong across Parts 1–9 and covers diagnosis, search intent, AEO/LLM improvement, local relevance, competitive outperformance, conversion editing, rewrite recommendations, scorecard, and final editorial plan. However, two items are missing:
Missing item 1: No carry-forward rule. When the editor identifies issues that require client confirmation (e.g., missing credentials, unverified claims referenced in the content), there is no instruction to flag and carry those forward. This is now a system-wide standard.
Missing item 2: No execution depth selector. The prompt should allow the user to choose compact, standard, or deep output per the Site OS Efficiency Governor standard, particularly since this prompt can range from a quick scan of one section to a full 9-part editorial review.
Required patch: Add carry-forward rule and execution depth selector.

7. Fabrication Prevention Check
PASS
The final instruction is direct: "Do not invent facts, reviews, credentials, pricing, awards, or guarantees." Part 4 (Local Relevance) explicitly warns against city-name swapping. Part 5 (Competitive Outperformance Editing) does not ask the editor to invent competitor claims. The overall framing ("improve the content so it performs better") keeps the editor in a diagnostic and improvement role rather than a generative invention role. This is sufficient.
One minor observation: the fabrication prevention rule is placed only at the end of the prompt. Moving or duplicating it near Part 3 (AEO/LLM) and Part 4 (Local Relevance) would reinforce it at the points of highest fabrication risk, but this is a recommendation, not a required patch.

8. SEO/AEO/GEO/SERP/LLM Alignment Check
PASS
Coverage is strong. The prompt explicitly addresses SEO, GEO/local relevance, AEO, voice search, LLM search, featured snippets, People Also Ask, rich snippets, topical authority, entity clarity, source-like wording, citation-worthy statements, and summarization clarity. Part 3 (AEO and LLM Search Improvement) is particularly well-structured for this purpose. Part 4 correctly identifies the city-name swapping anti-pattern, which is a local SEO quality failure the system specifically guards against.

9. Client-Facing Quality Check
PASS
The prompt produces output that improves readability, removes vague claims, improves conversion language, and supports plain-language explanations. The scorecard (Part 8) and final editorial plan (Part 9) provide clear, structured, actionable outputs that would be usable in a client review context. The distinction between required fixes and optional improvements is present through the priority flags in each part.

10. Final Decision
CONDITIONAL PASS — PATCH REQUIRED
Prompt 13 v1 is structurally sound and covers its editorial role well. The fabrication prevention rule is present. The SEO/AEO/LLM alignment is strong. The output structure is comprehensive. The prompt is usable now for supervised runs.
It cannot be locked at v1 because it is missing:

Canonical identity header (required for all locked prompts)
Routing rule section (required per Prompt 11 v1.1 standard)
Carry-forward rule (required per Core Mode v1.3 system-wide standard)
Execution depth selector (required per Efficiency Governor standard)

These are all patch-level additions — none require rebuilding the prompt. After patching, the prompt should be re-versioned to v1.1 and re-validated for lock confirmation.
Score breakdown:
CheckScoreNotesPrompt identity6/10No canonical header — patch requiredRole clarity10/10Clear and well-scopedRouting rules7/10Implicit but not stated — patch requiredWorkflow compatibility10/10Clean fit in the workflowInput requirements10/10Complete input setOutput requirements8/10Missing carry-forward and depth selector — patch requiredFabrication prevention9/10Present and clear; minor placement improvement optionalSEO/AEO/GEO/LLM alignment10/10ComprehensiveClient-facing quality10/10Actionable, structured, conversion-focusedScoring consistency1/10No score-to-lock decision possible without identity block
Overall: 81 / 100

Required Patch
Add the following block to the top of prompts/13-content-quality-editor-prompt.md, before the title:
md---
Prompt: 13 — Content Quality Editor Prompt
File: prompts/13-content-quality-editor-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After Prompt 06, after Prompt 07, or as a parallel editorial pass during Prompt 04
Does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix, Prompt 11 SERP Competitive Analysis
---
Add the following section after the Page Details block, before the Objective section:
md## Execution Depth

Select one before proceeding:

- Compact: Quick scan of one or two sections; top issues and top 5 improvements only
- Standard: Full 9-part editorial review; all parts completed; scorecard and final plan included
- Deep: Full 9-part review plus extended competitive outperformance and AEO/LLM rewrite recommendations; use only for high-value or highly competitive pages

Default to Standard unless the task is clearly simple or explicitly marked Deep.

## Routing Rule

Prompt 13 is a content quality and editorial improvement prompt.

It does not replace:
- Prompt 04 Gap Fix (structural gap identification)
- Prompt 06 Claude Code Build (implementation)
- Prompt 07 QA Review (post-build technical and strategy QA)
- Prompt 08 Production Fix and TODO Resolution (fix session after QA)
- Prompt 11 SERP Competitive Analysis (search competitor and SERP analysis)

Use Prompt 13 to improve content quality, clarity, specificity, trust language, local relevance, AEO strength, and conversion copy after page strategy or content has been generated.
Add the following carry-forward rule to Part 9 (Final Editorial Plan), after item 8 (Final content quality score):
md## Carry-Forward Items

If any editorial finding requires client data to resolve (e.g., a claim in the content references unverified credentials, reviews, pricing, availability, or guarantees), flag each item with:

- Item
- Status: NEEDS CLIENT CONFIRMATION
- Blocking publication: YES / NO
- Recommended next action

Carry all unresolved items forward to Prompt 04, Prompt 08, or the client intake process as appropriate. Do not invent data to resolve flagged items.

Recommended Next Action

Apply the three patches above to prompts/13-content-quality-editor-prompt.md.
Re-version the file to v1.1.
Run a confirmation pass (same structure as the Prompt 11 v1.1 confirmation test) to verify patch behavior.
If the confirmation pass returns PASS, lock Prompt 13 v1.1 as the Supporting Content Quality Editor Master and update prompts/prompt-master-status.md.
After Prompt 13 is locked, proceed to Prompt 14 (Page Template Evaluation) as the next supporting prompt validation candidate.
You said: Prompt 13 v1.---
Prompt: 13 — Content Quality Editor Prompt
File: prompts/13-content-quality-editor-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After Prompt 06, after Prompt 07, or as a parallel editorial passpasted# Prompt 13 v1.1 Lightweight Confirmation Test
You are confirming that Prompt 13 v1.1 has been patched correctly after the initial validation report.
## Validation Target
File: prompts/13-content-quality-editor-prompt.md  
Prompt Name: Prompt 13: Content Quality Editor Prompt  
Version: v1.1  
Test Type: Lightweight confirmation test  
## Required Confirmation Checks
Confirm that the updated Prompt 13 v1.1 includes:
1. Canonical identity header
2. Version updated to v1.1
3. Supporting Prompt Candidate or Awaiting Lock status
4. Execution Depth section with Compact, Standard, and Deep
5. Routing Rule section
6. Clear statement that Prompt 13 does not replace:
   - Prompt 04 Gap Fix
   - Prompt 06 Claude Code Build
   - Prompt 07 QA Review
   - Prompt 08 Production Fix and TODO Resolution
   - Prompt 11 SERP Competitive Analysis
   - Prompt 12 Analytics and Measurement
7. Carry-Forward Items section
8. Carry-forward rule requiring client-confirmation items to be flagged instead of invented
9. Strong fabrication prevention
10. Proper supporting prompt scope as a content quality and editorial improvement prompt
## Required Output Format
# Prompt 13 v1.1 Confirmation Report
File:
Version:
Test Type:
Decision:
## 1. Canonical Identity Header Check
PASS/PATCH/FAIL  
Notes:
## 2. Execution Depth Check
PASS/PATCH/FAIL  
Notes:
## 3. Routing Rule Check
PASS/PATCH/FAIL  
Notes:
## 4. Carry-Forward Items Check
PASS/PATCH/FAIL  
Notes:
## 5. Fabrication Prevention Check
PASS/PATCH/FAIL  
Notes:
## 6. Workflow Compatibility Check
PASS/PATCH/FAIL  
Notes:
## 7. Final Lock Decision
PASS/PATCH/FAIL  
Notes:
## Final Result
State whether Prompt 13 v1.1 is ready to lock as the Supporting Content Quality Editor Master.Show more12:33 PMClaude responded: Prompt 13 v1.Prompt 13 v1.1 Confirmation Report
File: prompts/13-content-quality-editor-prompt.md
Version: v1.1
Test Type: Lightweight confirmation test
Decision: PASS

1. Canonical Identity Header Check
PASS
The canonical identity header is present at the top of the file and includes all required fields: prompt number and name, canonical file path, version (v1.1), status (Supporting Prompt Candidate — Awaiting Lock), mode (Beyond-Elite Mode and Full Competitive Build Mode), workflow position, and the full list of prompts it does not replace. This matches the standard established by Prompt 11 v1.1.

2. Execution Depth Check
PASS
All three execution depth levels are present and correctly defined. Compact returns a quick scan with top issues and top 5 improvements. Standard returns the full 9-part review, scorecard, final editorial plan, and carry-forward items. Deep returns the full 9-part review plus extended competitive outperformance, extended AEO and LLM rewrite recommendations, stronger trust and local analysis, and carry-forward items. The default rule ("Default to Standard unless the task is clearly simple or explicitly marked Deep") is present. The Execution Depth field is also included in the Page Details input block, which ensures it is captured before the review begins.

3. Routing Rule Check
PASS
The Routing Rule section is present and explicitly lists all six prompts that Prompt 13 does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, and Prompt 12 Analytics and Measurement. The section also states that Prompt 13 may support these prompts but must not take over their role, and it explicitly prohibits Prompt 13 from creating implementation instructions, code changes, development tickets, technical QA findings, analytics claims, ranking claims, or SERP competitor findings unless directly provided.

4. Carry-Forward Items Check
PASS
The Carry-Forward Items section is present as a required output section with the correct structure: item name, status (NEEDS CLIENT CONFIRMATION), blocking publication flag (YES/NO), and recommended next action. The list of unverifiable item types is comprehensive — it covers credentials, reviews, pricing, availability, guarantees, certifications, licenses, warranties, rankings, testimonials, business claims, performance claims, years in business, awards, case studies, service area coverage, team qualifications, and insurance or bonding claims. The carry-forward routing correctly names Prompt 04, Prompt 08, and Prompt 10. The no-invention rule is restated at the end of the section.

5. Fabrication Prevention Check
PASS
Fabrication prevention is present and strong at multiple levels. The Required Editorial Rules section (10 rules) explicitly prohibits inventing facts, credentials, pricing, awards, rankings, certifications, statistics, guarantees, warranties, results, case studies, and performance claims. It also prohibits fake testimonials, fake experience claims, fake certifications, fake "best in city" claims, and fake service guarantees. The same prohibition appears in Part 3 (AEO/LLM), Part 4 (Local Relevance), Part 5 (Competitive Outperformance), Part 6 (Conversion Editing), the Carry-Forward Items section, and the Final Instruction block. Fabrication prevention is reinforced at the points of highest risk — local relevance, competitive comparison, and AEO strengthening — which improves on the v1 placement.

6. Workflow Compatibility Check
PASS
Prompt 13 v1.1 is compatible with the full Site OS Master workflow. It correctly positions itself after Prompt 06, after Prompt 07, or as a parallel pass during Prompt 04. It does not introduce competing gates, conflicting scope, or output types that overlap with locked prompts. The Required Output Format section provides a structured report that can be used as a standalone review or as supporting input to Prompt 04, Prompt 07, or Prompt 08 without creating conflicts. The carry-forward routing is consistent with the system-wide carry-forward model confirmed in Core Mode v1.3.

7. Final Lock Decision
PASS
All six patch items identified in the initial validation report have been applied correctly:

Canonical identity header ✅
Version updated to v1.1 ✅
Execution Depth section with Compact, Standard, and Deep ✅
Routing Rule section ✅
Carry-Forward Items section ✅
Fabrication prevention reinforced throughout ✅

No new issues were identified during this confirmation pass. The prompt performs its intended role as a content quality and editorial improvement prompt, does not conflict with any locked prompt, and meets the Site OS supporting prompt standard.

Final Result
Prompt 13 v1.1 is ready to lock as the Supporting Content Quality Editor Master.
Recommended next actions:

Update prompts/prompt-master-status.md — change Prompt 13 from "Active — Awaiting Individual Benchmark Lock" to "Supporting Content Quality Editor Master — Locked" with version v1.1, validation type "Initial validation pass + lightweight confirmation test," and result PASS.
Update docs/supporting-prompts-validation-summary.md — add Prompt 13 v1.1 entry consistent with the Prompt 11 and Prompt 12 entries.
Proceed to Prompt 14 (Page Template Evaluation) as the next supporting prompt validation candidate.
 