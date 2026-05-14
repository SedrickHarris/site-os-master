Prompt 17 Validation Report
File: prompts/17-ai-citation-readiness-prompt.md
Version: v1 (as submitted — no version header present)
Validation Type: Initial validation pass
Overall Score: 74 / 100
Decision: PATCH

1. Prompt Identity Check
PATCH
The prompt file opens directly with a title and role description. There is no canonical identity block. Per the standard confirmed across all locked supporting prompts (11 v1.1 through 16 v1.1), every supporting prompt must open with a structured identity header declaring:

Canonical prompt name
Canonical file path
Version number
Status (Supporting Prompt Candidate — Awaiting Lock)
Mode (Beyond-Elite Mode / Full Competitive Build Mode)
Workflow position
List of prompts it does not replace

None of these are present. The prompt cannot be correctly routed by the Task Router or Efficiency Governor without this block.
Required patch: Add canonical identity header at the top of the file.

2. Role Clarity Check
PASS
The role is clearly and specifically stated. The prompt identifies the model as an LLM search strategist, AEO architect, entity SEO specialist, content clarity editor, and AI citation readiness evaluator. The job is well-scoped: make content easier for AI assistants to understand, summarize, and cite. The directive to optimize for clarity, specificity, entity understanding, and trustworthy structure — not hype — is strong and clear. The scope is appropriately distinct from Prompt 13 (editorial quality) and Prompt 16 (search intent defense).

3. Routing Rule Check
PATCH
The prompt does not include an explicit routing rule section. Per the validation standard established for Prompts 11 through 16, supporting prompts must explicitly state which locked prompts they do not replace and when to use this prompt in the workflow.
Prompt 17 covers AI citation readiness, AEO architecture, entity clarity, and LLM answer-readiness. Without routing rules, it risks being mistaken for:

Prompt 13 (Content Quality Editor) — overlapping content review scope
Prompt 16 (Search Intent Defense) — overlapping LLM/AEO intent scope
Prompt 11 (SERP Competitive Analysis) — overlapping visibility analysis scope
Prompt 07 (QA Review) — overlapping review format

Required patch: Add a routing rule section explicitly stating Prompt 17 does not replace Prompts 04, 06, 07, 08, 11, 12, 13, 14, 15, or 16, and stating when to use it (after strategy exists, before or after build, when AI/LLM citation readiness is the specific need).

4. Workflow Compatibility Check
PASS
The prompt fits cleanly in the Site OS workflow as an AI/LLM-specific review layer. It operates on existing page strategy or content, does not generate page outlines or code, and does not overlap with the Core Mode build sequence. The task-to-prompt map confirms Prompt 17 is the correct tool for AI citation readiness tasks. The prompt's seven-part output structure produces a review report and improvement plan, not a competing deliverable.

5. Input Requirements Check
PATCH
The input block collects: Business Name, Website Name, Page Name, Page Type, Target Service/Topic/Category, Target Location, Primary Keyword, and Current Page Strategy or Content. This is functional.
Missing:

Execution depth selector. Every locked supporting prompt includes Compact / Standard / Deep. This prompt has none. Without it, the model defaults to full output on every run, wasting tokens and time on simple tasks.
Secondary keywords field. Used across upstream prompts for AEO and PAA alignment.
Target audience field. Referenced implicitly in the objective but not collected as input.
Known source references or proof points field. The prompt discusses citation-worthy statements and entity proof — this data should be requested upfront rather than assumed.
Explicit instruction when inputs are incomplete. No instruction to flag or pause when required fields are blank.

Required patch: Add execution depth selector. Add target audience, secondary keywords, and known proof points/source references fields to the input block.

6. Output Requirements Check
PASS with notes
The seven-part output structure is comprehensive and well-designed:

Part 1 (AI Understanding Review) — covers who, what, where, who served, problem, action, entities
Part 2 (Citation-Worthy Statement Opportunities) — structured per statement with topic, wording, reason, placement, entity, intent
Part 3 (Entity Clarity Review) — covers core, related, missing, confusing entities and relationships
Part 4 (Direct Answer Review) — covers standard AEO answer set plus local
Part 5 (LLM Search Risk Review) — covers vague claims, unsupported claims, weak FAQs, thin explanations, missing local context, missing trust signals
Part 6 (Perplexity and ChatGPT Readiness Scorecard) — 12-dimension score
Part 7 (AI Citation Improvement Plan) — top 10 improvements, top 5 adds/definitions/FAQs/rewrites, entity improvements, Claude Code notes, final score, final recommendation

The Multi-Platform AI Readiness Score and AI-Ready Content Requirements sections add useful breadth beyond pure LLM citation.
Notes: The output does not include a required vs. optional distinction for fixes. The final recommendation decision tree (Ready / Needs minor / Needs major / Not citation-ready) is present but does not include a "run another prompt first" option, which other locked prompts include.

7. Fabrication Prevention Check
FAIL
The prompt contains no fabrication prevention rules. There is no instruction telling the model not to invent:

Business details or credentials
Source references or citations
Statistics or study results
Rankings or performance claims
Testimonials or reviews
Analytics or conversion data
Competitor weaknesses
Entity relationships not present in the page

The only anti-fabrication language in the entire file is a single two-word line at the end of Part 7: "Do not invent facts."
This is insufficient. Every locked supporting prompt (11–16) includes a dedicated fabrication prevention section listing specific prohibited invention categories. Prompt 17 is particularly high-risk because it deals directly with citations, source references, entity claims, and proof points — exactly the areas where a model without explicit guardrails is most likely to hallucinate plausible-sounding evidence.
Required patch: Add a full fabrication prevention section. See patch text below.

8. SEO/AEO/GEO/SERP/LLM Alignment Check
PASS
The prompt explicitly addresses ChatGPT readiness, Perplexity readiness, AI overview readiness, AEO, entity clarity, citation-worthy answers, summarization clarity, low-hype factual usefulness, trustworthiness, Google Search, Bing, featured snippets, People Also Ask, rich snippets, local intent when applicable, topical authority, and lead generation clarity. The Multi-Platform AI and Search Readiness Standard section correctly extends the scope beyond pure LLM citation to cover the full search and answer ecosystem. Alignment coverage is strong.

9. Client-Facing Quality Check
PASS
The output is structured for clear, non-technical communication. The risk review (Part 5) explains risks with levels, reasons, and fixes — useful for non-technical stakeholders. The scorecard (Part 6) gives a plain numeric read. The improvement plan (Part 7) produces actionable, prioritized recommendations. The final recommendation options (Ready, Needs minor improvement, Needs major improvement, Not AI-citation-ready) are simple and decision-ready. The citation-worthy statement output format (Part 2) helps clients understand specifically what makes a claim citable, which is educational without being jargon-heavy.

10. Final Decision
PATCH
Four sections require patches before this prompt can be locked. No structural rebuild is needed. The core seven-part output structure is valid and well-designed.
CheckScoreNotesPrompt identity5/10No canonical headerRole clarity10/10Clear and well-scopedRouting rules6/10Absent — patch requiredWorkflow compatibility10/10Clean fitInput requirements7/10Missing depth selector, audience, proof pointsOutput requirements9/10Strong; minor gap on required vs. optionalFabrication prevention2/10Single line only — hard failSEO/AEO/GEO/LLM alignment10/10ComprehensiveClient-facing quality10/10Actionable and clearScoring consistency5/10Cannot lock without identity block
Overall: 74 / 100 — PATCH

Required Patch Text
Patch 1 — Add canonical identity header at the top of the file, before the role description:
markdown---
Prompt: 17 — AI Citation Readiness Prompt
File: prompts/17-ai-citation-readiness-prompt.md
Version: v1.1
Status: Supporting Prompt Candidate — Awaiting Lock
Mode: Beyond-Elite Mode and Full Competitive Build Mode
Position: After page strategy exists; after Prompt 02 or Prompt 04; before or after Prompt 06; as a standalone AI/LLM citation review at any stage
Does not replace: Prompt 04 Gap Fix, Prompt 06 Claude Code Build, Prompt 07 QA Review, Prompt 08 Production Fix, Prompt 11 SERP Competitive Analysis, Prompt 12 Analytics and Measurement, Prompt 13 Content Quality Editor, Prompt 14 Page Template Evaluation, Prompt 15 Page Variant Battle, Prompt 16 Search Intent Defense
---
Patch 2 — Add execution depth selector after the Page Details input block, before the Objective section:
markdown## Execution Depth

Select one before proceeding:

- Compact: AI Understanding Review and LLM Search Risk summary only; top 5 citation improvements; final readiness score
- Standard: Full 7-part review; scorecard; improvement plan; final score and recommendation
- Deep: Full 7-part review plus extended entity analysis, extended citation-worthy statement development, multi-platform readiness scoring with per-signal fix notes, and Claude Code implementation notes; use only for high-value or AI-search-priority pages

Default to Standard unless the task is clearly simple or explicitly marked Deep.
Patch 3 — Add the following fields to the Page Details input block:
markdownTarget Audience:
[WHO THE PAGE SERVES]

Secondary Keywords:
[SECONDARY KEYWORDS IF KNOWN]

Known Proof Points, Source References, or Entity Credentials:
[PASTE ANY KNOWN FACTS, CERTIFICATIONS, AFFILIATIONS, STATS, OR SOURCE REFERENCES]
[Leave blank if unknown — do not assume or invent]
Patch 4 — Add fabrication prevention section after the Routing Rule section and before Part 1:
markdown## Required Rules — Do Not Invent

This prompt must not invent any of the following:

- Business names, credentials, certifications, licenses, or affiliations
- Source references, citations, studies, or statistics not provided in the input
- Rankings, awards, performance claims, or competitive positions
- Testimonials, reviews, or social proof
- Analytics data, conversion rates, traffic numbers, or reporting results
- Entity relationships not supported by the provided content
- FAQs answers that assume facts not in the input
- Local claims, service area claims, or geographic coverage claims
- Trust signals, guarantees, warranties, or service commitments

If a citation-worthy statement, entity claim, or proof point requires a fact not present in the input, flag it as:

NEEDS CONFIRMATION — [description of what is needed]

Do not fill in missing facts with plausible assumptions.
Do not reference external studies or statistics unless they were provided in the input.
Do not write citation-worthy statements that rely on unverified claims.

Recommended Next Action

Apply all four patches to prompts/17-ai-citation-readiness-prompt.md
Re-version the file to v1.1
Run a lightweight confirmation test (same structure used for Prompts 13–16) to verify patch behavior
If confirmation returns PASS, lock Prompt 17 v1.1 as the Supporting AI Citation Readiness Master and update prompts/prompt-master-status.md
After Prompt 17 is locked, proceed to Prompt 18 (Page Moat) as the next supporting prompt validation candidate
 
 