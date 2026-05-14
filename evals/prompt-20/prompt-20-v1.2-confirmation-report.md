Prompt 20 v1.2 Confirmation Report
File: prompts/20-visibility-conversion-alignment-prompt.md
Version: v1.2
Test Type: Lightweight confirmation test
Decision: PASS WITH FLAGGED ITEMS

1. Prompt identity is clear
PASS
The prompt file identifies itself as Prompt 20: Visibility and Conversion Alignment Prompt, with canonical file path prompts/20-visibility-conversion-alignment-prompt.md. Identity is unambiguous and consistent with the Site OS Master prompt naming convention.

2. Version is clearly marked as v1.2
PASS
The Version field in the identity header reads v1.2. The status line reads "Supporting Prompt Candidate — Awaiting Lock" and is correctly aligned with the v1.2 patch state at the time of confirmation testing.

3. Workflow Position field is present and usable
PASS
The Position field declares both a Primary Position (after Prompt 03 Ten-Metric Analysis and before Prompt 04 Gap Fix) and a Secondary Position (after Prompt 04 Gap Fix and before Prompt 05 Developer Build Brief, when used as a pre-build gate review). Both positions are unambiguous and usable for routing decisions across Core Mode, Beyond-Elite Mode, and Full Competitive Build Mode.

4. Carry-forward requirements are clear
PASS
The Carry-Forward Items section is preserved from v1.1 and remains complete. The full status flag vocabulary (NEEDS CLIENT CONFIRMATION, NEEDS ANALYTICS DATA, NEEDS SERP RESEARCH, NEEDS COMPETITOR RESEARCH, NEEDS SOURCE CONFIRMATION, NEEDS PROOF CONFIRMATION, NEEDS BUSINESS CONFIRMATION) is present. Each flagged item must include a blocking-build-or-publish flag and a recommended next action. The hard stop "Do not invent data to resolve flagged items" is present. Carry-forward requirements are clear and enforceable.

5. Final Alignment Decision options are clear
PASS
The Final Alignment Decision section is preserved from v1.1 with the full set of routing options: Aligned, Needs minor edits, Needs major alignment work, Needs analytics review (routes to Prompt 12), Needs SERP research (routes to Prompt 11), Needs search intent defense (routes to Prompt 16), Needs AI citation review (routes to Prompt 17), Needs page moat review (routes to Prompt 18), and Run another prompt first. Each decision option includes a routing direction. Required output fields for the final decision (Decision, Why this decision was chosen, Required fixes, Optional improvements, Next prompt or workflow step, Blocking build or publish YES/NO flag) are present.

6. Schema and content safety carry-forward rules are present
PASS
The Unavailable Data Handling section covers Schema Plan unavailable, Internal Linking Plan unavailable, and Conversion Plan unavailable scenarios, each with a flag label, a skip-or-proceed instruction, and a do-not-invent rule. The Do Not Invent section explicitly prohibits inventing schema data not supported by visible content, business details not confirmed in strategy, local claims, service area coverage, business hours, availability, reviews, testimonials, credentials, certifications, awards, pricing, guarantees, warranties, discounts, financing, and performance claims. Schema and content safety carry-forward behavior is consistent with the standard established across locked supporting prompts.

7. Prompt 05 is listed correctly in the does-not-replace list
PASS
The does-not-replace list in the identity header now includes Prompt 05 Developer Build Brief, added as part of the v1.2 patch. The Routing Rule section also reflects Prompt 05's distinct scope. The addition prevents the new Secondary Position (after Prompt 04, before Prompt 05) from being misread as a replacement for the developer build brief. Listing is correct and unambiguous.

8. Prompt can function as a supporting prompt without replacing core workflow prompts
PASS
Prompt 20 produces an alignment review report and routing recommendations, not a build deliverable, an analytics deliverable, a SERP research deliverable, a content edit deliverable, or a QA release decision. It operates on existing page strategy and produces a review with a Final Alignment Decision that hands off to the appropriate next prompt. It does not produce production approval, does not replace Prompt 06 Claude Code Build, does not replace Prompt 07 QA Review, does not replace Prompt 09 Final Launch QA, and does not replace any of the supporting prompts (11–19). Supporting-prompt scope is preserved in v1.2.

9. No obvious contradictions with existing Site OS Master routing
PASS with one flagged note
The new Secondary Position (after Prompt 04 Gap Fix and before Prompt 05 Developer Build Brief) is consistent with the existing Core Mode build flow (Prompts 04 → 05 → 06) and does not introduce a routing conflict — Prompt 20 in the Secondary Position runs as an alignment gate review, not as a replacement for any step in that flow. The Final Alignment Decision routing options (Prompts 11, 12, 16, 17, 18) remain compatible with the locked status of those prompts. No contradictions with Prompts 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, or 19 routing were identified.

Flagged Item (non-blocking)

The v1.2 patch notes section at the bottom of the prompt file contains the following forward-looking instruction: "Next step: Run lightweight confirmation test. If confirmed, lock as Supporting Visibility and Conversion Alignment Master v1.2 and update prompts/prompt-master-status.md and docs/supporting-prompts-validation-summary.md." This next-step note is correctly written and ready to execute once approved. It is a transitional artifact of the v1.2 patch process and does not affect prompt behavior, identity, routing, validation, or output. It does not block the lock decision.

Recommended follow-up (optional, post-lock): once this confirmation test is recorded, the forward-looking next-step paragraph inside the prompt file may be revised or removed in a future minor patch so the file reads as a locked v1.2 master rather than a candidate awaiting confirmation. This is not required for the lock to be valid.

Final Lock Decision

PASS WITH FLAGGED ITEMS — all 9 confirmation checks passed, with one non-blocking flagged note. No missing sections, no fabrication risks, no routing conflicts, no ambiguous scope, no guaranteed outcome claims introduced by the v1.2 patch.

Final Result

Prompt 20 v1.2 is ready to lock as the Supporting Visibility and Conversion Alignment Master.

Recommended next actions:

Update docs/prompt-master-status.md — change Prompt 20 from v1.1 LOCKED to v1.2 LOCKED, add v1.2 patch summary, preserve v1.1 history.
Update prompts/prompt-master-status.md — break Prompt 20 out of the Prompts 12–20 group block and add its own LOCKED section, consistent with the Prompt 11 entry.
Update docs/supporting-prompts-validation-summary.md — add a Prompt 20 v1.2 entry, preserve the Prompt 20 v1.1 entry above it.
Confirm the Task Router skill file (and any workflow routing references) correctly references 20-visibility-conversion-alignment-prompt.md in Primary Position (after Prompt 03, before Prompt 04) and Secondary Position (after Prompt 04, before Prompt 05).
No rebuild required. No further patches needed.
