Prompt 19 v1.2 Confirmation Report
File: prompts/19-template-eval-rubric-prompt.md
Version: v1.2
Test Type: Lightweight confirmation test
Decision: PASS

1. Canonical Identity Header Check
PASS
Header present with Prompt number, file path, version v1.2, status "Supporting Prompt Candidate — Awaiting Lock," mode (Beyond-Elite and Full Competitive Build), and workflow position. All required identity fields confirmed.

2. Expanded Input Block Check
PASS
Item to Evaluate block includes: Item Name, File Path, Item Type, Current Version, Previous Version, Evaluation Goal, Lock Target, Benchmark Used, Output to Evaluate, Known Issues from Prior Validation, Execution Depth, and Known Constraints or Notes. All fields present.

3. NEEDS FILE CONTENTS Instruction Check
PASS
Explicit instruction present: "If the full text of the item is not provided and only a file path or name is given, flag immediately as: NEEDS FILE CONTENTS — Do not proceed with evaluation until the item contents are confirmed."

4. Execution Depth Check
PASS
All three tiers defined — Compact, Standard, and Deep — with distinct output requirements per tier. Default rule ("Default to Standard unless the task is clearly simple or explicitly marked Deep") is present.

5. Routing Rule Check
PASS
Routing Rule section present. Defines when to use Prompt 19, distinguishes it from Prompt 14, and lists all 12 prompts it does not replace (Prompts 04, 06, 07, 08, 11, 12, 13, 14, 15, 16, 17, 18). Hard stop list also prohibits creating implementation tickets, writing production code, fabricating validation results, and rewriting prompt files unless asked.

6. Prompt 19 vs Prompt 14 Distinction Check
PASS
Distinction is explicit and clear. Prompt 14 = reusable page templates (hero sections, service pages, location pages, CTA blocks, schema templates inside page templates). Prompt 19 = Site OS system assets (prompt files, workflow files, rubrics, checklists, validation templates). Both routing directions stated.

7. Fabrication Prevention Check
PASS
Required Rules — Do Not Invent section is present and strong. Covers: benchmark scores, test results, version history, lock decisions, file contents, repo state, performance claims, prior validation findings, rankings, citations, and output quality claims. NEEDS CONFIRMATION flagging instruction present. Explicit rule: "Do not fill in missing evaluation data with plausible assumptions."

8. Conditional Scoring Logic Check
PASS
System-Standard Dimensions (1–10) apply to all item types. Page-Strategy Dimensions (11–22) apply conditionally to page templates and strategy prompts only. Skip instruction present for workflow files, checklists, rubrics, and evaluation templates with explicit "not applicable" language.

9. Scorecard Table Format Check
PASS
Part 1 table format specified with all required columns: Dimension | Score | Reason | Gap | Recommended Fix | Priority. Correct column order confirmed.

10. PASS/PATCH/FAIL Decision Structure Check
PASS
Part 5 Final Decision section present with all three decision paths fully defined. Each path specifies required output fields. Legacy Decision Mapping included for version comparison context only, with clear note that legacy options cannot be used as final lock decisions.

11. Carry-Forward Items Check
PASS
Carry-Forward Items section present. Includes status flag options: NEEDS INPUT CONFIRMATION, NEEDS PRIOR VALIDATION RECORD, NEEDS BENCHMARK OUTPUT, NEEDS FILE CONTENTS, NEEDS VERSION HISTORY, NEEDS REPO CONFIRMATION. Blocking lock field included. Explicit rule: "Do not invent data to resolve flagged items."

12. Required Output Format Check
PASS
Required Output Format section present with full structural template: Evaluation Summary, Parts 1–6, and Carry-Forward Items. All major sections accounted for in the output template.

13. Workflow Compatibility Check
PASS
No conflicts with locked prompts identified. Prompt 19 has a defined position in the workflow (after prompt/workflow/rubric/template creation or update; before or after benchmark tests). Scope is contained to system asset evaluation only. Clean handoff paths present via Carry-Forward Items and Final Decision sections.

14. Final Lock Decision
PASS
All 17 confirmation checks pass. No missing sections, no fabrication risks, no routing conflicts, no ambiguous scope. Conditional scoring logic is correctly applied. Distinction from Prompt 14 is unambiguous. Fabrication prevention is comprehensive.

Final Result
Prompt 19 v1.2 is ready to lock as the Supporting Template Eval Rubric Master.
Recommended status update: Change from "Supporting Prompt Candidate — Awaiting Lock" to "Supporting Prompt — Locked v1.2" in the file header and Prompt Master Status log. 
