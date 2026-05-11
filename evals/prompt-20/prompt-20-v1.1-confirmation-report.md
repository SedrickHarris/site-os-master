Prompt 20 v1.1 Confirmation Report
File: prompts/20-visibility-conversion-alignment-prompt.md
Version: v1.1
Test Type: Lightweight confirmation test
Decision: PASS

1. Canonical Identity Header Check
PASS
Identity block present at the top of the file with all required fields: canonical prompt name (Prompt 20: Visibility and Conversion Alignment Prompt), canonical file path, version v1.1, status (Supporting Prompt Candidate — Awaiting Lock), mode (Beyond-Elite Mode and Full Competitive Build Mode; optional in Core Mode), workflow position (after Prompt 03, before Prompt 04), and full list of prompts it does not replace (Prompts 03, 04, 06, 07, 08, 11–19). All required identity fields confirmed.

2. Expanded Input Block Check
PASS
Page Details block includes all required fields: Business Name, Website Name, Page Name, Page Type, Page Route, Target Service/Topic/Category, Target Location, Primary Keyword, Secondary Keywords, Target Audience, Primary CTA, Secondary CTA, Approved Page Strategy, Schema Plan, Internal Linking Plan, Conversion Plan, Analytics Context, Known SERP or Competitor Context, Proof/Trust/Business Context, Execution Depth, and Known Constraints or Notes. All three newly required input fields (Analytics Context, Known SERP or Competitor Context, Proof/Trust/Business Context) are present and correctly labeled.

3. Execution Depth Check
PASS
All three tiers defined with distinct output scope per tier. Compact returns Part 1 and Part 15 only, plus Final Alignment Decision and carry-forward items. Standard returns Parts 1–8 and Part 15, with conditional expansion if flags are triggered in Parts 1–8. Deep returns all 15 parts plus multi-platform review table, extended risk review, required fixes, optional improvements, carry-forward items, and Final Alignment Decision. Default rule present: "Default to Standard unless the task is clearly simple or explicitly marked Deep." All three tiers are unambiguous and correctly scoped.

4. Routing Rule Check
PASS
Routing Rule section present and complete. Defines when to use Prompt 20 with six specific use-case conditions. Explicitly lists all 14 prompts it does not replace (Prompts 03, 04, 06, 07, 08, 11, 12, 13, 14, 15, 16, 17, 18, 19) with a one-line description of each prompt's distinct scope. Hard stop present: "Do not use this prompt to replace SERP competitive analysis, analytics reporting, content editing, AI citation review, search intent defense, page moat strategy, QA review, or production build work." Findings-use rule present: "Prompt 20 may use findings from other prompts when provided, but it must not invent findings from those prompts." Routing is unambiguous and conflict-free with all locked prompts.

5. Unavailable Data Handling Check
PASS
Unavailable Data Handling section present with explicit handling instructions for all six data gap scenarios: Schema Plan unavailable, Internal Linking Plan unavailable, Conversion Plan unavailable, analytics data unavailable, competitor data unavailable, and proof/trust data unavailable. Each scenario includes a flag label, a skip or proceed instruction, and a do-not-invent rule. The section is comprehensive and consistent with the handling standard established across locked supporting prompts.

6. Analytics Unavailability Rule Check
PASS
Analytics Unavailability Rule is explicitly referenced in the Unavailable Data Handling section. The rule prohibits inventing conversion rates, lead counts, traffic estimates, ranking positions, phone call volume, form submissions, revenue data, CRM data, GBP performance, Google Search Console data, and Bing Webmaster data. The instruction to flag the gap and note what data would be needed for a complete analytics-backed review is present. The reference is consistent with Prompt 12's Analytics Unavailability Rule standard.

7. Fabrication Prevention Check
PASS
Do Not Invent section present and strong. Covers all required categories: analytics data, traffic estimates, ranking positions, conversion rates, lead counts, call volume, form submissions, revenue results, SERP positions, competitor content findings, competitor names, competitor weaknesses, competitor strategies, reviews, testimonials, credentials, certifications, awards, trust signals, pricing, guarantees, warranties, discounts, financing, performance claims, schema data not supported by visible content, business details not confirmed in strategy, local claims, service area coverage, business hours, availability, AI citation outcomes, search ranking outcomes, and lead generation outcomes. NEEDS CONFIRMATION flagging instruction present. Explicit rule: "Do not fill in missing data with plausible assumptions." Final Instruction section at the end of the file reinforces all fabrication prevention rules with a second hard stop. Coverage is the most comprehensive fabrication prevention block in the supporting prompt set.

8. Final Alignment Decision Check
PASS
Final Alignment Decision section present with nine routing options: Aligned, Needs minor edits, Needs major alignment work, Needs analytics review (routes to Prompt 12), Needs SERP research (routes to Prompt 11), Needs search intent defense (routes to Prompt 16), Needs AI citation review (routes to Prompt 17), Needs page moat review (routes to Prompt 18), and Run another prompt first. All seven routing options required by the confirmation checklist are present. Each decision option includes routing direction to the correct prompt. Required output fields for the final decision confirmed: Decision, Why this decision was chosen, Required fixes, Optional improvements, Next prompt or workflow step, and Blocking build or publish YES/NO flag.

9. Carry-Forward Items Check
PASS
Carry-Forward Items section present with a complete status flag vocabulary: NEEDS CLIENT CONFIRMATION, NEEDS ANALYTICS DATA, NEEDS SERP RESEARCH, NEEDS COMPETITOR RESEARCH, NEEDS SOURCE CONFIRMATION, NEEDS PROOF CONFIRMATION, NEEDS BUSINESS CONFIRMATION. Blocking build or publish flag required per item. Recommended next action required per item. Full inventory of unverifiable item types included: analytics data, conversion rates, lead counts, traffic data, ranking positions, competitor findings, SERP findings, reviews, testimonials, credentials, certifications, awards, guarantees, warranties, pricing, availability, service area coverage, business hours, schema values, internal URLs, local proof, case studies, revenue claims, and performance claims. Hard stop present: "Do not invent data to resolve flagged items." Section is consistent with the carry-forward standard established in Prompts 07, 08, and 19.

10. Required Output Format Check
PASS
Required Output Format section present with full structural template. Includes Alignment Summary block with all key fields (Business, Page, Page Type, Page Route, Target Service/Topic/Category, Target Location, Primary Keyword, Target Audience, Execution Depth, Overall Alignment Score, Final Alignment Decision). All 15 parts labeled with skip instructions tied to execution depth. Multi-platform review table labeled with Deep condition. Carry-forward items section labeled with "or state No carry-forward items identified." Output format is complete, depth-conditional, and implementation-ready for Claude Code workflows.

11. No Guaranteed Outcome Claim Check
PASS
Present in two locations. In the Do Not Invent section: "Do not claim that alignment will guarantee rankings, traffic, leads, calls, conversions, revenue, rich snippets, map pack placement, or AI citations." In the Final Instruction section: "Do not claim that alignment guarantees rankings, traffic, leads, calls, conversions, revenue, rich snippets, map pack placement, or AI citations." In Part 6 (LLM Search and AI Citation Review): "Do not claim that AI systems will cite the page." All three placements confirmed. Coverage meets the standard required by the confirmation checklist.

12. Workflow Compatibility Check
PASS
No conflicts with any locked prompt identified. Prompt 20 has a well-defined position in the workflow: after Prompt 03 (10-Metric Analysis), before Prompt 04 (Gap Fix), optional in Core Mode for important pages, and standard in Beyond-Elite and Full Competitive Build Mode. The prompt operates on existing page strategy and produces an alignment review report, not a competing deliverable. The nine-option Final Alignment Decision provides clean handoff paths to Prompts 04, 06, 11, 12, 16, 17, and 18. The Task Router already references Prompt 20 by file path in Core Mode, Beyond-Elite Mode, and Full Competitive Build Mode — confirming workflow integration is already in place.

13. Final Lock Decision
PASS
All 13 confirmation checks pass. All six patches from the initial validation report have been applied correctly. No missing sections, no fabrication risks, no routing conflicts, no ambiguous scope, no guaranteed outcome claims. The 15-part evaluation framework, multi-platform review table, execution depth selector, carry-forward items section, Final Alignment Decision with full routing options, and Do Not Invent section are all present and correctly structured.

Final Result
Prompt 20 v1.1 is ready to lock as the Supporting Visibility and Conversion Alignment Master.
Recommended next actions:

Update prompts/prompt-master-status.md — change Prompt 20 from "Active — Awaiting Individual Benchmark Lock" to "Supporting Visibility and Conversion Alignment Master — Locked v1.1" with validation type "Initial validation pass + lightweight confirmation test" and result PASS.
Update docs/supporting-prompts-validation-summary.md — add Prompt 20 v1.1 entry consistent with the Prompt 11 through 19 entries.
Confirm the Task Router skill file correctly references 20-visibility-conversion-alignment-prompt.md in all three workflow modes (Core Mode optional, Beyond-Elite Mode standard, Full Competitive Build Mode standard).
No rebuild required. No further patches needed.