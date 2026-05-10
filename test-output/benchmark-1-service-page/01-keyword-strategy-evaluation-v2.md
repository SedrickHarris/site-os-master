Keyword Strategy Eval — Benchmark 1
prompts/01-keyword-strategy-prompt.md | Output v2 vs. Previous Score: 84/100

Category-by-Category Scores
1. Keyword Category Coverage — 10/10
All 12 required categories present: primary, secondary, long-tail, local, AEO, voice, transactional, informational, comparison, problem-aware, solution-aware, entity-based. Entity-based terms are specific and local. Brand-supporting keywords are the only notable omission — low impact at Core Mode. Full marks.
2. Search Intent Accuracy — 10/10
Every major intent group covered with a dedicated section: informational, commercial, transactional, local, comparison, problem-aware, solution-aware. Each group maps correctly to funnel stage, page section, CTA, and internal link path. Navigational intent is absent but not relevant to this page type. Full marks.
3. AEO and Voice Search Opportunity — 10/10
Direct-answer questions, featured snippet questions, People Also Ask questions, voice search phrases, near-me queries, short-answer statements, and questions to avoid are all present. Part 9B includes 3 fully written short-answer AEO statements with placement notes. Voice phrases are natural and match real-world phrasing. Full marks. (Improvement from previous version.)
4. Competitive Keyword Advantage — 10/10
Part 9A is a dedicated competitive gap table with 7 rows. Each row includes: keyword, intent, why competitors miss it, why it matters, best section, priority level. Keywords to avoid are listed separately with clear reasoning. This section did not exist in structured form in the previous version. Full marks. (Major improvement.)
5. Entity and Topical Authority Strength — 9/10
Entities are organized by type: core service, related services, location, customer problem, process, trust, industry terms, supporting subtopics. The note on AI/LLM citation readiness is present. Missing: explicit semantic relationship map and a note explaining how entity coverage creates topical authority signal for Google's NLP systems. Minor gap. 9/10.
6. Keyword Placement Strategy — 10/10
All 10 required placements covered: URL slug, meta title, meta description, H1, opening paragraph, H2s, FAQ questions, FAQ answers, image alt text, internal anchor text, schema fields. Meta title and description are written out as usable strings, not just placeholders. Full marks.
7. Conversion Keyword Strategy — 10/10
Five high-intent keywords are mapped to: why it matters, objection connected, CTA, and trust signal needed. Urgency language ("same day," "move deadline") is recognized and connected to CTA strategy. Landlord/property manager segment is correctly identified as a high-value conversion angle. Full marks.
8. Internal Linking Support — 8/10
Anchor text suggestions are present and specific. Topical and conversion links are included in the final summary. The internal link existence warning is present: "The following internal links are assumed to exist. Confirm routes before adding them in Claude Code." However, no inbound link opportunities are identified (which pages should link to this page), and no topical authority hub link is noted. Minor gap. 8/10.
9. Risk Control — 9/10
Six risks are identified with prevention strategies. Duplicate content risk across location pages is specifically noted. The "keywords to avoid" list is strong and reasoned (not generic). Missing: a warning about FAQ over-answering that can cannibalize from a general junk removal FAQ page. 9/10.
10. Implementation Readiness — 9/10
The Claude Code readiness note at the end of the summary includes: route, H1, meta title, meta description, schema types, AEO placement, CTA placement, internal link targets. The internal link existence warning is present. Missing: explicit QA checks listed as pass/fail criteria, and formal acceptance criteria (the eval spec asks for these in the keyword output, not just in the build brief). These are partially present but not formatted as checkable items. 9/10.

Overall Score
CategoryPreviousv21. Keyword Category Coverage10102. Search Intent Accuracy9103. AEO and Voice Search8104. Competitive Keyword Advantage7105. Entity and Topical Authority996. Keyword Placement Strategy10107. Conversion Keyword Strategy9108. Internal Linking Support889. Risk Control8910. Implementation Readiness69Total8495
New score: 95/100
Score change: +11 points

Evaluation of the 8 Specific Items Requested
ItemPresent in v2?Quality1. Dedicated Competitive Gap Analysis✅ Yes — Part 9A, 7-row tableStrong. Each row has intent, reason, section, priority2. Short-answer AEO statements✅ Yes — Part 9B, 3 questionsWritten, placed, format-ready3. AI/LLM citation-ready statements⚠️ Partial — noted in entity section, not as Part 9CPresent in intent but not structured per the prompt spec4. Fastest-visibility keyword opportunities⚠️ Partial — embedded in 9A table as "Easy" difficultyNot separated as Part 9D per the updated prompt spec5. Implementation readiness guardrails✅ Yes — in final summary and internal link warningClear, usable6. QA checks⚠️ Partial — implied in Claude Code noteNot listed as explicit pass/fail QA items7. Acceptance criteria⚠️ Partial — route and structure notedNot formatted as a checkable acceptance criteria list8. Internal link existence warning✅ Yes — stated explicitlyCorrectly placed

What Improved

Competitive gap analysis is now a real section — structured, prioritized, actionable. Previously it was implicit or scattered.
Short-answer AEO statements are fully written — placement-ready, format-ready, citation-useful.
Conversion keyword strategy is stronger — objections and trust signals mapped per keyword.
Search intent map is more complete — every intent group has a section, CTA, and internal link note.
Risk control improved — "keywords to avoid" is now its own section with reasoning, not just a bullet.
Implementation summary is more complete — route, metadata, schema, AEO, CTA all stated.
Internal link existence warning is present — this was a critical gap before.
Token efficiency improved — competitive gap delivered via table rather than long prose. No repetition across sections.


What Is Still Missing

Part 9C — AI/LLM Citation-Ready Statements — The updated prompt spec requires 3 structured citation-ready statements with entity support notes and placement. These are absent as a named section. Entity coverage exists but is not formatted for LLM citation use.
Part 9D — Fastest-Visibility Keyword Opportunities — The updated prompt requires a dedicated section with format: keyword, why fast, SERP/AEO opportunity, section, content format, priority. This is partially handled inside 9A but not separated or formatted per spec.
Formal QA Checks — The implementation readiness section does not include a formatted QA checklist. Even a 5-item pass/fail list would satisfy the eval criterion and help Claude Code validate its own output.
Formal Acceptance Criteria — No acceptance criteria block is present. The eval spec and the build brief prompt both require this. It belongs at the end of the keyword output as a handoff gate.
Inbound link opportunities — No page is identified as a candidate to link to this page. Internal linking is one-directional in this output.


Token Efficiency Comparison
FactorPreviousv2Competitive analysisInline prose, scatteredDedicated table, no repetitionAEO statementsNot present3 written, conciseKeyword table widthUnknown (previous run)16 columns — slightly heavy for Core ModeSection repetitionSome keywords repeated in multiple sectionsMinimal repetitionOutput lengthStandardStandard — appropriate for Core ModeWasted tokensSome in risk sectionMinor — 9C and 9D absent rather than wasted
Assessment: v2 is more token-efficient per unit of strategy value. The competitive gap table replaced what would have been 300+ words of prose. The missing sections (9C, 9D, QA, acceptance criteria) are absent rather than bloated — this is better than padding. The keyword intelligence table could be trimmed to 10 columns for Core Mode per the prompt's own mode-based token control rule.

Recommended Prompt Fixes
Priority: High

Add Part 9C and 9D as required sections for Core Mode and above. The updated prompt spec includes them, but they were not triggered in this run. Make the mode condition explicit: Core Mode = 9A + 9B + 9C + 9D required.
Add a formal QA checklist block at the end of the implementation readiness section. Suggest 5–7 items:

 Primary keyword in H1
 Meta title under 60 characters
 AEO questions written as FAQ entries
 Internal links confirmed to exist
 Schema types identified
 No keyword stuffing in headings
 Route is unique and slug is clean


Add a formal acceptance criteria block. Suggested format:

Page is ready for outline prompt when: keyword map is complete, AEO questions are written, placement plan is finalized, internal links are confirmed or flagged, schema types are named.


Add inbound linking requirement to Part 8 (internal linking support). Prompt should ask: "What pages should link to this page, and with what anchor text?"
Enforce 10-column keyword table cap in Core Mode. The current table has 16 columns. The mode-based token control rule says to use no more than 10 columns for Core Mode. Add a column reduction list in the prompt: drop entity relationship, SERP feature opportunity, and natural usage notes for Core Mode runs.


Final Decision
Keep with minor edits.
The revised prompt is producing near-master-level output. The core structure is sound. The competitive gap, AEO statements, conversion strategy, and implementation notes are all materially better than the previous version. The gap is narrow: Parts 9C and 9D need to be triggered reliably, and the output needs a QA checklist and acceptance criteria block to be fully implementation-ready without a downstream prompt.
These are prompt-level fixes, not output-level failures. The output is usable now. Fix the prompt, retest on Benchmark 1, and the score should reach 98–100.

Log this result in versions/prompt-performance-log.md — Date: May 10, 2026 | Prompt: 01-keyword-strategy-prompt.md | Benchmark: 1 | Previous score: 84 | New score: 95 | Decision: Keep with minor edits. 