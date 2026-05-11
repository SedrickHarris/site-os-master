Evaluation: 06-claude-code-build-prompt-output-v1.md
vs. Prompt 06 Template | evals/prompt-evaluation-rubric.md | prompts/19-template-eval-rubric-prompt.md
Using prior eval in 06-claude-code-build-prompt-template-evaluation-v1.md as baseline

Evaluation Context
The prior evaluation (-template-evaluation-v1) scored the prompt template at 71/100 and noted it had not yet evaluated the actual generated output file. This evaluation corrects that. The output file (-output-v1) is now fully readable and contains a complete Claude Code build prompt for Benchmark 1. This is what is being scored here.

1. Overall Score
79 / 100
The output is meaningfully stronger than the template-only evaluation suggested. The 5-gate structure is implemented, the guardrail list is specific and actionable, and the Gate 4 validation checklist is the strongest section in the file. It does not clear 80 because three critical build risks from the prior eval remain partially unresolved in this output.

2. Category-by-Category Score
#CriterionScoreNotes1Search intent alignment8/10Goal, audience, and conversion intent are clearly stated in the brief header. Intent is carried through section structure.2SEO strategy strength8/10Meta title, description, H1, canonical, robots, and OG tags are all required and specified. Heading hierarchy is enforced.3AEO and voice search readiness8/106 FAQ questions required with direct-answer lead sentences. FAQPage schema must match visible text exactly. Voice phrasing is implied by FAQ structure.4GEO and local relevance8/10Las Vegas is in slug, H1, metadata, areaServed schema, and section copy. Nearby area callouts are required. Local urgency line is present.5Competitive outperformance5/10No competitive context carried into this prompt. Content moat angle is absent. Output does not reference what competitors typically miss.6Entity and topical authority6/10Service entities (furniture, appliances, specific items) are listed. No explicit entity hierarchy or topical authority guidance beyond item list.7Internal linking strategy7/10Link table with 4 targets, anchor text, section placement, and skip rule is present. Hard verification step is still advisory ("confirm the target route exists") not enforced.8Schema and technical SEO readiness8/106 schema blocks specified. Conditional logic for HowTo and AggregateRating is the strongest schema handling in the system. Soft stop remains on invented fields.9Conversion strategy9/103 CTA placements, tap-to-call in 4 locations, mobile sticky bar, 3-field form with exact field names, and objection handling in FAQ. This is the highest-performing section.10Claude Code implementation readiness8/10Route, sections, metadata, schema, images, internal links, guardrails, and Gate 4 checklist are all present. Gate 2 requires a plan before any file is touched. Missing: explicit hard stop after Gate 1 before Gate 2 begins.

3. Is the Actual Generated Output Stronger Than the Template?
Yes — meaningfully so.
The prior evaluation was conducted against the prompt template (prompts/06-claude-code-build-prompt.md) in isolation. The output file represents the template applied to Benchmark 1 with full population of:

Specific route, metadata values, and heading text
Exact form field names (Name, Phone, ZIP)
6 conditional and unconditional schema blocks with field-level rules
A 30-point Gate 4 validation checklist
An image table with alt text, loading strategy, and path conventions
A 4-row internal link table with skip rules

The template evaluation scored 71/100 partly because it could not confirm whether these specifics would appear in output. The output confirms they do. The score increases to 79/100 because the output resolves several of the weaknesses the template evaluation flagged — but not all of them.

4. Does Prompt 06 Now Include the Required Hard Gates?
Partially. Not fully.
Gate RequirementStatusGate 1 — Inspect before building✅ Present. 14 inspection items required.Gate 1 hard stop — no code until inspection report is complete⚠️ Soft only. Prompt says "report a summary before proceeding" but does not say "do not write code until you receive confirmation."Gate 2 — Plan before building✅ Present. 10-item plan required. "Do not begin editing until the plan is approved or until there are no unresolved blockers."Gate 2 hard stop — wait for explicit approval⚠️ Soft. The phrase "until the plan is approved" implies a stop but does not explicitly require a user confirmation message.Gate 3 — Build only✅ Correct scope.Gate 4 — Validate before reporting✅ 30-point checklist. "If any validation item fails, resolve it before reporting." This is the strongest gate in the file.Gate 5 — Report after validation✅ 12-item report format.Framework detection as a named inspection requirement✅ Present in Gate 1, item 1.Internal link verification⚠️ Link table includes "Action if Route Missing" column. "Do not create broken internal links" is in the guardrail list. But there is no explicit step requiring Claude Code to confirm routes before adding links — only a skip rule.Schema placeholder rule⚠️ AggregateRating conditional is strong. But LocalBusiness fields (address, phone, hours) do not have an explicit "flag and placeholder if absent" instruction.Scope boundary✅ Guardrail: "Do not modify unrelated pages, components, or global styles." Navigation update is explicitly scoped as a post-build step.
Summary: Gates 1 and 2 exist but are soft. Gate 4 is enforced. The two remaining hard gate gaps are Gate 1's confirmation stop and the schema field placeholder rule for LocalBusiness data.

5. Remaining Output Gaps

No explicit user confirmation step between Gate 1 and Gate 2. Claude Code can read the inspection requirements and proceed directly to Gate 2 without pausing for review.
LocalBusiness schema fields are not guarded. Address, phone number, and business hours are required for valid LocalBusiness schema. If they are not in the brief, there is no instruction to insert placeholders. The soft "do not invent fake data" warning exists in the guardrail list but is not tied to specific fields.
Form submission endpoint is unspecified. The form has field names (Name, Phone, ZIP) but no action, no method, no third-party form handler, and no confirmation redirect. Claude Code will invent this.
No competitive framing anywhere in the output. The output does not carry any competitor gap strategy, content moat angle, or differentiation instruction from earlier workflow steps. A developer reading this knows what to build but not why it should outperform competitors.
AEO direct-answer statements are not required per section. FAQs have them, but Sections 1–7 do not have a requirement to include a direct-answer sentence optimized for featured snippets or AI citation.
No sitemap update instruction in Gate 3. Sitemap is referenced in Gate 4 (validate) but not in Gate 3 (build). A developer may not know to update it as part of the build step.


6. Remaining Template Gaps
These exist in prompts/06-claude-code-build-prompt.md and are not resolved by the output:

No tiered depth path. The full 5-gate, 30-point validation structure is used regardless of page complexity. A simple low-priority service page does not need this depth.
No framework-specific metadata or schema path. Gate 1 asks Claude Code to identify the framework and metadata method, but Gate 3 does not branch based on the answer. Next.js App Router, Next.js Pages Router, Astro, and plain HTML all have different implementation paths. The prompt does not accommodate this.
No instruction on what to do when Gate 1 reveals the project has no existing service page. If there is no comparable page to reference, the prompt does not specify a fallback pattern.
Token use is still flat. Every client gets the full output. No compact path exists for simple pages or fast turnaround.
No LLM search readiness instruction. AEO is present. AI citation readiness is not. No instruction to write content in a way that supports Perplexity, ChatGPT, or Google AI Overviews beyond FAQ structure.


7. Priority Fixes
Ranked by risk to live builds:
Priority 1 — Critical
Add an explicit confirmation gate between Gate 1 and Gate 2: "After completing Gate 1, post your findings and wait for confirmation before proceeding to Gate 2. Do not begin planning or building until confirmed."
Priority 2 — Critical
Add a LocalBusiness schema field guard: "If address, phone, hours, or service area data is not provided in the brief, insert <!-- FLAG: [FIELD NAME] — required before launch --> in the schema block. Do not invent values."
Priority 3 — High
Add form endpoint specification requirement in Gate 2: "Identify or flag the form submission endpoint. Do not build a form without specifying the action path or third-party handler. If unknown, insert a FLAG comment and note it in the Gate 5 report."
Priority 4 — High
Add a direct-answer sentence requirement to each section brief, not just FAQs. One sentence per section written to answer a likely search query directly. This supports featured snippets and AI citation.
Priority 5 — Medium
Add a framework-specific implementation path to Gate 3. After Gate 1 identifies the framework, Gate 3 should branch: "If Next.js App Router, use X. If Astro, use Y. If plain HTML, use Z."
Priority 6 — Medium
Add sitemap update to Gate 3 as a required build step, not just a Gate 4 validation check.
Priority 7 — Low
Add a compact path signal at the top of the prompt: "If page priority is low or the page structure is simple, skip Gates 2 plan detail items 6–10 and use Gate 4 abbreviated checklist."

8. Final Decision
Minor edits needed — revise and retest.
The output file is production-quality for a standard service page in a development environment with a developer supervising the build. The gate structure, validation checklist, schema handling, CTA specificity, and image rules are all above the minimum standard for Core Mode.
It is not yet safe to use unsupervised on a live client project because Gates 1 and 2 lack hard confirmation stops, and LocalBusiness schema fields have no placeholder protection.
The prior evaluation projected 84–88/100 after the five priority fixes. That estimate holds. After Priority 1–3 fixes, this output clears 84. After Priority 4–5, it reaches 87–88 and is ready to be declared the master version.
Do not rewrite. Do not promote to master yet. Apply Priority 1–3, rerun on Benchmark 1, score the new output. 