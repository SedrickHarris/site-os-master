Prompt 18 Validation Report
File: prompts/18-page-moat-prompt.md
Version: v1 (as submitted — no version header present)
Validation Type: Initial validation pass
Overall Score: 72 / 100
Decision: PATCH

1. Prompt Identity Check
PATCH
The prompt file opens with a title and role description. No canonical identity block is present. Per the standard confirmed across all locked supporting prompts (11 v1.1 through 17 v1.1), every supporting prompt must open with a structured identity header declaring:

Canonical prompt name
Canonical file path
Version number
Status (Supporting Prompt Candidate — Awaiting Lock)
Mode
Workflow position
List of prompts it does not replace

None of these are present. The Task Router and Efficiency Governor cannot correctly route this prompt without the identity block.
Required patch: Add canonical identity header at the top of the file.

2. Role Clarity Check
PASS
The role is clearly and specifically stated. The prompt identifies the model as a senior SEO strategist, content moat strategist, AEO architect, conversion strategist, local SEO specialist, and competitive positioning advisor. The job is well-defined: make a page harder for competitors to copy and easier for users, search engines, and AI assistants to trust. The anti-generic directive is explicit and strong. The eight-point objective covers competitive outperformance, topical authority, AEO, AI/LLM citation readiness, trust, conversion, and anti-generic positioning. The scope is clearly strategic and distinct from Prompt 15 (variant battle) and Prompt 16 (intent defense).

3. Routing Rule Check
PATCH
The prompt does not include an explicit routing rule section. Per the validation standard confirmed for Prompts 11 through 17, supporting prompts must explicitly state which locked prompts they do not replace and when to use this prompt relative to the workflow.
Without routing rules, Prompt 18 risks being confused with:

Prompt 11 (SERP Competitive Analysis) — overlapping competitor analysis scope
Prompt 15 (Page Variant Battle) — overlapping competitive strategy scope
Prompt 16 (Search Intent Defense) — overlapping competitive differentiation scope
Prompt 13 (Content Quality Editor) — overlapping content improvement scope

Required patch: Add routing rule section explicitly listing all eleven locked prompts this does not replace, with a clear statement of when to use Prompt 18 in the workflow.

4. Workflow Compatibility Check
PASS
The prompt fits cleanly in the Full Competitive Build Mode and Beyond-Elite Mode workflows. It operates on existing page strategy or content and produces a moat strategy report and improvement plan — not a page outline, build brief, or production code output. The task-to-prompt map in the repository confirms Prompt 18 as the page moat strategy prompt. The eight-part output structure is compatible with downstream use in Prompt 04, Prompt 06, or Prompt 08 without conflicts.

5. Input Requirements Check
PATCH
The input block collects: Business Name, Website Name, Page Name, Page Type, Target Service/Topic/Category, Target Location, Primary Keyword, Target Audience, Primary CTA, Known Competitors, and Business-Specific Details. This is functional and better than several prior v1 submissions.
Missing:

Execution depth selector. Every locked supporting prompt requires Compact / Standard / Deep. This prompt has none.
Secondary keywords field. Used across upstream prompts for AEO and PAA moat alignment.
Known page strategy or content field. The prompt discusses moat improvements to existing strategy but does not explicitly request the current strategy or content as input. Business-Specific Details partially covers this but the distinction matters.
Explicit instruction when inputs are incomplete. No instruction to flag or pause when required fields are blank — particularly important for the Business-Specific Details field, which is the primary source of defensible moat content.
Execution depth field in input block. Must appear in the input block, not only in a separate section.

Required patch: Add execution depth selector with Compact / Standard / Deep. Add secondary keywords field. Add current page strategy or content field. Add instruction for incomplete inputs.

6. Output Requirements Check
PASS with notes
The eight-part output structure is solid and well-sequenced:

Part 1 (Generic Content Risk) — covers generic service descriptions, local wording, FAQs, trust claims, CTAs, process, images, schema
Part 2 (Competitor Copycat Risk) — covers copyable elements with defensibility improvements
Part 3 (Content Moat Opportunities) — 14-area moat opportunity scan including internal linking, schema, and conversion path
Part 4 (Trust and Proof Strategy) — covers verified trust elements with explicit no-invention instruction
Part 5 (AEO and AI Citation Moat) — covers direct-answer content with citation-worthiness explanations
Part 6 (Local Moat Strategy) — correctly includes a not-applicable path for non-local pages
Part 7 (Conversion Moat Strategy) — covers CTA, objection handling, trust placement, mobile flow, offer clarity
Part 8 (Final Page Moat Plan) — top 10 moat improvements, top 5 competitor gaps, specific details, proof elements, AEO answers, conversion improvements, content to remove, Claude Code notes

Notes: The output does not include a required vs. optional distinction in the final plan. There is no carry-forward items section. There is no final score or structured recommendation decision tree (strong moat / needs minor / needs major / not defensible). These are present in every locked supporting prompt.
Required patch: Add carry-forward items section. Add final moat readiness score and recommendation decision tree to Part 8.

7. Fabrication Prevention Check
FAIL
The prompt contains only one partial fabrication prevention instruction, buried in Part 4: "Do not invent proof." and "If proof is missing, recommend what should be collected." There is also a single line in Part 7: "if truthful" attached to urgency messaging.
This is insufficient. Every locked supporting prompt (11–17) includes a dedicated fabrication prevention section listing specific prohibited invention categories. Prompt 18 is particularly high-risk because it deals with:

Competitor weaknesses and gaps
Business differentiators and proprietary assets
Proof points, certifications, and credentials
Case studies and testimonials
Local claims and service area coverage
Rankings and competitive positions
Guarantees, warranties, and service commitments

A model without explicit guardrails could invent compelling-sounding moat advantages, fabricate competitor weaknesses, or manufacture proof points that do not exist — all of which would produce dangerous strategic output that misleads the client.
Required patch: Add full fabrication prevention section. See patch text below.

8. SEO/AEO/GEO/SERP/LLM Alignment Check
PASS
The prompt explicitly addresses SEO competitive outperformance, AEO direct answers, AI/LLM citation readiness, topical authority, local SEO, schema strategy, internal linking, entity clarity, trust signals, and conversion. Part 5 (AEO and AI Citation Moat) and Part 6 (Local Moat Strategy) are well-designed for their respective visibility layers. The anti-generic directive throughout the prompt reinforces quality over volume, which aligns with the system-wide standard. The prompt does not overclaim rankings or guaranteed citations.

9. Client-Facing Quality Check
PASS
The output is structured for clear, non-technical communication. The generic content risk review (Part 1) is immediately useful for stakeholders who may not understand why their page feels weak. The competitor copycat risk section (Part 2) explains risks in terms clients understand. The final plan (Part 8) produces a prioritized, actionable list. The trust and proof strategy section (Part 4) gives clients clear guidance on what to collect. The local moat section (Part 6) correctly handles the non-local case without confusion.

10. Final Decision
PATCH
Four sections require patches before this prompt can be locked. No structural rebuild is needed. The core eight-part output structure is valid and well-designed.
CheckScoreNotesPrompt identity5/10No canonical headerRole clarity10/10Clear and well-scopedRouting rules6/10Absent — patch requiredWorkflow compatibility10/10Clean fitInput requirements7/10Missing depth selector, secondary keywords, strategy fieldOutput requirements8/10Missing carry-forward, final score, decision treeFabrication prevention2/10Single partial line — hard failSEO/AEO/GEO/LLM alignment10/10ComprehensiveClient-facing quality10/10Actionable and clearScoring consistency4/10Cannot lock without identity block or fabrication rules
Overall: 72 / 100 — PATCH

Required Patch Text
Patch 1 — Add canonical identity header at the top of the file, before the role description:
markdown---
Prompt: 18 — Page Moat Prompt
File: prompts/18-page-moat-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After page strategy exists; after Prompt 02, Prompt 04, or Prompt 15; before Prompt 06; as a standalone competitive durability and page advantage review at any stage
Does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix and TODO Resolution, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle, Prompt 16 Search Intent Defense, Prompt 17 AI Citation Readiness
---
Patch 2 — Add the following fields to the Page Details input block, after Primary CTA:
markdownSecondary Keywords:
[SECONDARY KEYWORDS IF KNOWN]

Current Page Strategy or Content:
[PASTE CURRENT STRATEGY, OUTLINE, OR CONTENT IF AVAILABLE]
[Leave blank if not yet created — state this in Known Constraints]

Known Constraints or Notes:
[KNOWN CONSTRAINTS, BRAND REQUIREMENTS, CONTENT LIMITS, PROOF AVAILABILITY, OR IMPLEMENTATION NOTES]

Execution Depth:
[Compact, Standard, or Deep]
Patch 3 — Add execution depth selector after the Page Details block, before the Objective section:
markdown## Execution Depth

Select one before proceeding:

### Compact

Use Compact when the user needs a quick page moat scan.

Return:

- Generic content risk summary
- Top competitor copycat risks
- Top 5 moat opportunities
- Top 5 trust or proof gaps
- Final moat readiness score
- Final recommendation

### Standard

Use Standard for a full page moat strategy review.

Return:

- Full 8-part review
- Carry-forward items if needed
- Required and optional improvements
- Final moat readiness score and recommendation

### Deep

Use Deep for high-value, high-competition, revenue-critical, or AI-search-priority pages.

Return:

- Full 8-part review
- Extended AEO and AI citation moat analysis
- Extended local moat analysis if applicable
- Extended conversion moat analysis
- Detailed Claude Code implementation notes
- Carry-forward items
- Final moat readiness score and recommendation

Default to Standard unless the task is clearly simple or explicitly marked Deep.
Patch 4 — Add routing rule section after the Execution Depth section, before the Objective section:
markdown## Routing Rule

Prompt 18 is a content moat strategy, competitive durability, and page defensibility review prompt.

Use Prompt 18 when the specific goal is to make a page harder for competitors to copy, more useful to users and search engines, more trustworthy, and more conversion-ready than competing pages.

Prompt 18 does not replace:

- Prompt 04 Gap Fix — structural gap identification for a specific page
- Prompt 06 Claude Code Build — page implementation
- Prompt 07 QA Review — post-build technical and strategy review
- Prompt 08 Production Fix and TODO Resolution — fix session after QA
- Prompt 11 SERP Competitive Analysis — verified search competitor and SERP research
- Prompt 12 Analytics and Measurement — analytics-based review
- Prompt 13 Content Quality Editor — content editorial improvement
- Prompt 14 Page Template Evaluation — reusable page template evaluation
- Prompt 15 Page Variant Battle — strategic page variant comparison
- Prompt 16 Search Intent Defense — search intent validation and defense
- Prompt 17 AI Citation Readiness — AI/LLM citation-readiness review

Prompt 18 may use findings from Prompt 11, Prompt 15, Prompt 16, or Prompt 17 when provided, but must not invent findings from those prompts.

Prompt 18 must not create implementation tickets, write production code, run technical QA, fabricate competitor findings, fabricate proof points, fabricate SERP positions, or rewrite full page content unless specifically asked.
Patch 5 — Add fabrication prevention section after the Routing Rule section, before the Objective section:
markdown## Required Rules — Do Not Invent

This prompt must not invent any of the following:

- Competitor names, rankings, weaknesses, strategies, or positions
- Business differentiators, proprietary processes, or unique assets not provided in the input
- Source references, citations, studies, or statistics not provided in the input
- Certifications, licenses, affiliations, or credentials not provided
- Rankings, awards, or performance claims not provided
- Testimonials, reviews, ratings, or social proof not provided
- Analytics data, conversion rates, traffic numbers, leads, calls, or revenue claims
- Case studies, project examples, or before-and-after results not provided
- Local claims, service area claims, or geographic coverage claims not provided
- Trust signals, guarantees, warranties, financing offers, or service commitments not provided
- Pricing, availability, or service terms not provided
- Team credentials, years in business, or company history not provided
- Insurance, bonding, or licensing claims not provided
- "Best in city," "top-rated," "number one," or similar claims not provided and verified

If a moat opportunity, differentiation recommendation, proof point, or trust signal requires a fact not present in the input, flag it as:

NEEDS CONFIRMATION — [description of what is needed]

Do not fill in missing facts with plausible assumptions.

Do not invent competitor weaknesses to make moat gaps appear more exploitable.

Do not write trust claims, proof statements, or differentiators that rely on unverified business information.

Strategy-based moat recommendations are acceptable only when clearly labeled as recommendations based on the provided page content, not verified facts.
Patch 6 — Add carry-forward items section and final recommendation decision tree to Part 8:
Add after the existing Part 8 list, before "Do not write the full page content unless asked":
markdown## Carry-Forward Items

If any page moat finding requires client data, verified proof, source confirmation, competitor research, SERP research, or verified business information to resolve safely, flag each item with:

- Item
- Status: NEEDS CLIENT CONFIRMATION, NEEDS PROOF CONFIRMATION, NEEDS SOURCE CONFIRMATION, NEEDS SERP RESEARCH, or NEEDS COMPETITOR RESEARCH
- Blocking moat approval: YES / NO
- Recommended next action

Examples include unverified:

- Competitor weaknesses or gaps
- Business differentiators or proprietary processes
- Certifications, licenses, or credentials
- Case studies or project examples
- Reviews, testimonials, or ratings
- Guarantees, warranties, or service commitments
- Local claims, service areas, or geographic coverage
- Years in business or company history
- Team credentials or qualifications
- Analytics or conversion data
- Awards or rankings
- Pricing or availability

Carry unresolved items forward to Prompt 11, Prompt 04, Prompt 08, or the client intake process as appropriate.

Do not invent data to resolve flagged items.

## Final Moat Readiness Score and Recommendation

Provide:

- Final page moat readiness score: [1–10]
- Biggest moat strength
- Biggest moat gap
- Highest-priority moat fix

Final recommendation must be one of:

- Strong moat — ready to build
- Moat is developing — needs minor improvement before build
- Moat is weak — needs major development before build
- Not defensible — needs Prompt 15 Page Variant Battle or Prompt 11 SERP Competitive Analysis first
- Needs source or proof confirmation before moat strategy can be finalized

Recommended Next Action

Apply all six patches to prompts/18-page-moat-prompt.md
Re-version the file to v1.1
Run a lightweight confirmation test (same structure used for Prompts 13–17) to verify patch behavior
If confirmation returns PASS, lock Prompt 18 v1.1 as the Supporting Page Moat Master and update prompts/prompt-master-status.md
After Prompt 18 is locked, proceed to Prompt 19 (Template Eval Rubric) as the next supporting prompt validation candidate
