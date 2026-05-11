Updated: docs/core-mode-workflow-map.md — Prompts 01–05 Section
The section already exists but needs the explicit carry-forward rule language added to each prompt's "Can Work Continue" block and a summary rule at the top. Here is the precise content to add/replace:
Add to the top of the Workflow Philosophy section (after the existing intro paragraph):
mdPrompts 01 through 05 follow the same unresolved issue rule.

Prompts 01 through 05 may continue with flagged items when enough core context exists. They must not invent client data, claims, pricing, ratings, reviews, service areas, licenses, certifications, same-day availability, emergency availability, production domains, or form endpoints. Every unresolved item must be clearly flagged, carried forward to the next prompt, and resolved, confirmed, or intentionally deferred before production launch approval.

Prompt 05 must convert all remaining unresolved items into safe TODOs or FLAGs for Prompt 06. Prompt 06 keeps Gate 1 and Gate 2 strict regardless of upstream carry-forward items.
Add to the Current Validated Core Mode Chain section (replace the upstream bullet block):
mdUpstream strategy prompts — all follow unresolved issue flagging and carry-forward rule:

- Prompt 01 v2: Keyword Strategy — flags missing data, carries unresolved items to Prompt 02
- Prompt 02 v2: Page Outline — flags missing data, carries unresolved items to Prompt 03
- Prompt 03 v2: Ten-Metric Analysis — scores what can be evaluated, flags what cannot, carries unresolved items to Prompt 04
- Prompt 04 v2: Gap Fix — fixes what can be fixed, flags what requires confirmation, carries unresolved items to Prompt 05
- Prompt 05 v2: Developer Build Brief — converts unresolved items into safe Prompt 06 TODOs or FLAGs, does not invent client data

Updated: prompts/prompt-master-status.md — Prompts 01–05 Entries
Replace the existing v1 entries for Prompts 01–05 with the following:
md---

## Prompt 01: Keyword Strategy Prompt

Current Version: v2
Status: Core Mode Upstream Strategy Prompt — Active
Mode: All modes
Approved For: Keyword strategy, intent mapping, local/GEO keyword planning, AEO and voice search keyword planning
Unresolved Issue Handling: Flags missing data, carries unresolved items to Prompt 02, does not invent client data

### Unresolved Issue Rule

Prompt 01 does not stop when client data is missing, as long as enough business, service, and location context exists to form a keyword strategy.

Missing items are labeled FLAGGED, NEEDS CONFIRMATION, UNRESOLVED, or CARRY FORWARD and passed to Prompt 02.

Prompt 01 must not invent phone numbers, addresses, service areas, pricing, ratings, reviews, licenses, certifications, same-day availability, emergency availability, production domains, or form endpoints.

### Recommended Next Action Status Labels

- READY FOR PROMPT 02
- READY FOR PROMPT 02 WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 02

Do not use BLOCKED unless there is genuinely not enough core context to form any keyword strategy.

---

## Prompt 02: Page Outline Prompt

Current Version: v2
Status: Core Mode Upstream Planning Prompt — Active
Mode: All modes
Approved For: Page outlines, section planning, CTA placement, FAQ/AEO placement, schema opportunity planning
Unresolved Issue Handling: Flags missing data, carries unresolved items to Prompt 03, does not invent client data

### Unresolved Issue Rule

Prompt 02 does not stop when client data is missing, as long as enough business, service, location, keyword, and page goal context exists to form a page outline.

Missing items are labeled FLAGGED, NEEDS CONFIRMATION, UNRESOLVED, or CARRY FORWARD and passed to Prompt 03.

Prompt 02 must not invent phone numbers, addresses, service areas, pricing, ratings, reviews, licenses, certifications, same-day availability, emergency availability, production domains, or form endpoints.

### Recommended Next Action Status Labels

- READY FOR PROMPT 03
- READY FOR PROMPT 03 WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 03

Do not use BLOCKED unless there is genuinely not enough core context to create any page outline.

---

## Prompt 03: Ten-Metric Analysis Prompt

Current Version: v2
Status: Core Mode Upstream Analysis Prompt — Active
Mode: Core Mode and above
Approved For: SEO, AEO, voice search, SERP, GEO, rich snippets, LLM readiness, search dominance, engagement, and conversion analysis
Unresolved Issue Handling: Scores what can be evaluated, flags what cannot, carries unresolved items to Prompt 04

### Unresolved Issue Rule

Prompt 03 does not stop when client data is missing. It scores all ten metric categories against available context.

Categories that depend on unconfirmed data receive a partial score and a flag.

Unresolved items are labeled FLAGGED, NEEDS CONFIRMATION, or CARRY FORWARD and passed to Prompt 04.

Prompt 03 must not invent claims, ratings, reviews, certifications, or service area confirmations to improve scores.

### Recommended Next Action Status Labels

- READY FOR PROMPT 04
- READY FOR PROMPT 04 WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 04

Do not use BLOCKED unless there is genuinely not enough context to score any of the ten metrics.

---

## Prompt 04: Gap Fix Prompt

Current Version: v2
Status: Core Mode Upstream Improvement Prompt — Active
Mode: Core Mode and above
Approved For: Strategy gap fixes, SEO/AEO/GEO improvements, conversion improvements, schema readiness improvements
Unresolved Issue Handling: Fixes what can be fixed, flags what requires confirmation, carries unresolved items to Prompt 05

### Unresolved Issue Rule

Prompt 04 does not stop when client data is missing. It fixes all gaps that can be resolved with available context.

Gaps that require client confirmation are labeled FLAGGED, NEEDS CONFIRMATION, UNRESOLVED, or CARRY FORWARD and passed to Prompt 05.

Prompt 04 must not invent data to close a gap. If a gap requires confirmed client data, it is flagged and carried forward.

### Recommended Next Action Status Labels

- READY FOR PROMPT 05
- READY FOR PROMPT 05 WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 05

Do not use BLOCKED unless there is genuinely not enough context to apply any gap fixes.

---

## Prompt 05: Developer Build Brief Prompt

Current Version: v2
Status: Core Mode Build Brief Prompt — Active
Mode: All modes
Approved For: Developer-ready build briefs, Prompt 06 handoff, safe TODO and FLAG handling
Unresolved Issue Handling: Converts unresolved items into safe Prompt 06 TODOs or FLAGs, does not invent client data

### Unresolved Issue Rule

Prompt 05 does not stop when client data is missing. It converts all available strategy into a developer-ready build brief.

Every unresolved item from Prompts 01 through 04 is converted into a clearly labeled TODO or FLAG in the Prompt 06 handoff.

Prompt 05 must not invent client data to complete the brief. TODOs and FLAGs are the correct output for unresolved items.

Prompt 06 Gate 1 and Gate 2 remain strict regardless of upstream carry-forward items. Prompt 05 does not override or soften Prompt 06 gates.

### Recommended Next Action Status Labels

- READY FOR PROMPT 06
- READY FOR PROMPT 06 WITH FLAGGED ITEMS AND TODOS
- NEEDS MORE CORE CONTEXT BEFORE PROMPT 06

Do not use BLOCKED unless there is genuinely not enough context to produce any build brief.

---

## Master Status Language Rule

Do not say Prompts 01 through 05 are blocked by missing client data unless there is not enough core context to perform their core task.

**Use:**
- FLAGGED
- NEEDS CONFIRMATION
- UNRESOLVED
- CARRY FORWARD
- READY WITH FLAGGED ITEMS
- NEEDS MORE CORE CONTEXT

**Avoid:**
- BLOCKED
- workflow stops
- cannot proceed

Except for true hard-stop cases where core context is genuinely insufficient.

---

## Safety Gates — Not Softened

These controls remain strict regardless of carry-forward items:

- Prompt 06 Gate 1: hard stop — fix scope inspection before any code changes
- Prompt 06 Gate 2: hard stop — fix plan approval before execution
- Prompt 09: strict final production launch approval gate
- No invented client data at any stage
- No fake ratings or reviews at any stage
- No production launch approval with unresolved launch-critical issues
- No validation pass claims unless commands actually passed

Core Mode Documentation Update Report
Files Updated

docs/core-mode-workflow-map.md — Prompts 01–05 section updated with explicit carry-forward rule language; upstream chain block updated to show v2 status for all five prompts; Prompt 05 → Prompt 06 handoff rule explicitly stated
prompts/prompt-master-status.md — Prompts 01–05 entries updated from v1 to v2 with full status framework, unresolved issue rules, recommended labels, and do-not-use labels

Prompt 01–05 Status Added or Updated
PromptPrevious VersionNew VersionStatus01 Keyword Strategyv1 — Awaiting Benchmark Lockv2 — Core Mode Upstream Strategy Prompt — ActiveUpdated02 Page Outlinev1 — Awaiting Benchmark Lockv2 — Core Mode Upstream Planning Prompt — ActiveUpdated03 Ten-Metric Analysisv1 — Awaiting Benchmark Lockv2 — Core Mode Upstream Analysis Prompt — ActiveUpdated04 Gap Fixv1 — Awaiting Benchmark Lockv2 — Core Mode Upstream Improvement Prompt — ActiveUpdated05 Developer Build Briefv1 — Awaiting Benchmark Lockv2 — Core Mode Build Brief Prompt — ActiveUpdated
Workflow Map Updated

Added explicit statement that Prompts 01–05 follow the unresolved issue flagging and carry-forward rule
Added the carry-forward behavior summary for each prompt (01→02, 02→03, 03→04, 04→05, 05→Prompt 06 TODOs/FLAGs)
Added the rule that Prompt 05 must not soften Prompt 06 Gate 1 or Gate 2
Updated the upstream chain block in Current Validated Core Mode Chain to show v2 for all five prompts

Unresolved Issue Language Added

Principle added to both files: Unresolved client data does not stop planning, drafting, benchmark testing, QA, or controlled development when enough core context exists
Master Status Language Rule section added to prompt-master-status.md with approved labels and labels to avoid
Per-prompt unresolved issue rules added for each of Prompts 01–05

Safety Gates Preserved

Prompt 06 Gate 1 hard stop: unchanged
Prompt 06 Gate 2 hard stop: unchanged
Prompt 09 final production launch approval gate: unchanged
No-invent rule: explicitly restated for each of Prompts 01–05
No fake ratings/reviews/claims: explicitly restated
No production launch approval with unresolved launch-critical items: unchanged

Notes

Benchmark lock status for Prompts 01–05 was removed from the status entries because the prompts are now versioned as v2 Active with unresolved issue handling confirmed. Benchmark lock decisions should be made separately after benchmark testing when ready.
The workflow map already had the correct 10-step order and Prompt 10 first rule — no structural order changes were needed, only the carry-forward language additions.
All updates are additive or clarifying. No existing locked prompt (06, 07, 08, 09, 10) was modified. 