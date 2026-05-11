I now have sufficient context from the repository. Note: the repository stores the prompt template for 06-claude-code-build-prompt.md but the actual output file 06-claude-code-build-prompt-output-v1 (the Benchmark 1 run against Pit Stop Junk Removal) is not in the project knowledge — only the prompt template itself and the evaluation rubrics are. I will evaluate the prompt template (which is what generates the Claude Code output) against all 12 evaluation criteria requested, using Benchmark 1 as the test context, in accordance with the Site OS evaluation rubrics.

Benchmark 1 Evaluation: 06-claude-code-build-prompt-output-v1
Evaluated Against: Benchmark 1 — Pit Stop Junk Removal, Furniture and Appliance Junk Removal, Las Vegas, NV
Evaluation Mode: Deep (prompt evaluation is explicitly a deep-output task per Site OS rules)
Rubric Sources: evals/prompt-evaluation-rubric.md, prompts/19-template-eval-rubric-prompt.md

1. Overall Score: 74 / 100

2. Score by Criterion
#CriterionScoreNotes1Implementation clarity8/10Section table format is clear; Claude Code notes field exists but is often too generic2Gate structure5/10No formal gates or stop conditions before Claude Code executes; no "confirm before build" checkpoint3File inspection requirements6/10Mentions files to inspect conceptually but lacks explicit file path instructions for a real project4Route creation instructions7/10Route/slug field is present; no instruction to check for existing duplicate route before creating5Metadata requirements8/10Meta title, meta description, H1, H2s are all required and well-structured6Schema safety7/10"Do not invent fake reviews, ratings, prices, or credentials" is present; no framework-specific schema implementation notes (Next.js vs. Astro vs. other)7Form and CTA requirements6/10CTA path and primary/secondary CTA are present; no form field spec, no form validation instruction, no confirmation/thank-you page path8Internal link safety6/10Internal linking fields exist; no rule against linking to pages that do not yet exist or creating broken anchor paths9Guardrails8/10Part 11 Do Not Change List is solid; missing explicit instruction to commit nothing until plan is confirmed10Validation checklist7/10Part 12 Acceptance Criteria is present and well-structured; no automated check instructions or manual QA steps for rendering11Risk of modifying unrelated files5/10"Do not modify unrelated pages" is listed but there is no pre-build isolation step, no file scope declaration, no instruction to list what will be touched before touching it12Token efficiency7/10Prompt is structured; Part 13 final paste-ready prompt exists; Parts 1–12 generate significant strategy content that may not need to be regenerated if already approved

3. What Works Well
Structural coverage is strong. The prompt covers all 13 parts that Claude Code needs: page summary, sections, SEO, AEO, GEO, schema, internal links, images, accessibility, files, guardrails, acceptance criteria, and the final paste-ready prompt. That scaffolding is production-ready.
The Do Not Change List (Part 11) is a real asset. It explicitly prohibits fake claims, duplicate routes, unnecessary dependencies, and unrelated file edits. This alone prevents several common Claude Code mistakes.
Acceptance criteria (Part 12) is well-defined. The checklist gives Claude Code a clear pass/fail gate. It is specific enough to be actionable.
The schema safety rule is explicitly stated. "Do not invent fake reviews, ratings, prices, or credentials" is in the prompt. This is non-negotiable and it is there.
The final paste-ready prompt (Part 13) is correctly separated. The five-step implementation instruction (inspect, identify, plan, build, validate, report) is clean and correct.

4. What Is Weak
No gate structure before execution. The prompt does not tell Claude Code to pause after the inspection phase and confirm the plan before building. Claude Code can read the brief and go straight to creating files. For a production site, this is a significant risk — especially if the project has an unexpected existing route, an existing component that should be reused, or a different framework than assumed.
File path instructions are vague for first-time projects. "Files likely to inspect" is a field, but the prompt does not say how Claude Code should inspect (e.g., read package.json, check /pages or /app directory, look for existing layout components). For Benchmark 1 (Pit Stop Junk Removal), Claude Code would not know if the project is Next.js App Router, Pages Router, Astro, or something else unless told.
No form field specification. The CTA for Benchmark 1 is "Request a quote." There is no instruction in the prompt for what fields the form should include, what happens on submit, where the confirmation route goes, or whether a CTA button that links to an existing form is different from a new embedded form. This is a lead generation page — the form spec matters.
Internal link safety has a gap. The prompt says to include internal links but does not warn against linking to pages that do not yet exist. In a partial site build, Claude Code could create links to /services/appliance-removal when that page does not exist yet, causing 404s.
No pre-build file scope declaration. Claude Code should be required to list every file it intends to create or modify before touching anything. The current prompt does not include this checkpoint.
The final paste-ready prompt (Part 13) is sometimes too abstract. "Inspect the project, identify patterns, create a plan, build, validate, report" is correct in structure but often too high-level when pasted. It needs to include the specific route, the specific files to check, and the specific acceptance criteria as part of the paste block — not just as context earlier in the document.

5. Missing Instructions
Missing: Gate 1 — Pre-build confirmation step. Claude Code should output an implementation plan and wait for approval before writing any files.
Missing: Framework detection instruction. Tell Claude Code to check package.json and the directory structure first to confirm the framework and routing pattern before creating any files.
Missing: Duplicate route check instruction. Explicitly: "Before creating the route, confirm no existing page exists at this path."
Missing: Form field specification section. For lead-generation pages, a dedicated field for form inputs, validation rules, and post-submit routing is absent.
Missing: Broken internal link prevention rule. "Only link to pages that already exist or are being created in this same build."
Missing: Framework-specific schema implementation note. JSON-LD in a <script> tag is different from schema injected via a CMS or via a Next.js Head component. The prompt does not differentiate.
Missing: Explicit file scope list before build. Require Claude Code to declare "I will create: X. I will edit: Y. I will not touch: Z" before the first file is written.

6. Risks Before Live Use
Risk 1 — Unconfirmed build execution. Without a pre-build gate, Claude Code may begin modifying files based on an incomplete or misread strategy. On a live site, this is a production risk.
Risk 2 — Framework mismatch. If the prompt is pasted into a project Claude Code has not inspected, it may create files in the wrong directory structure (e.g., /pages/ vs. /app/ in Next.js).
Risk 3 — Broken internal links. Without the "only link to existing pages" rule, Claude Code may generate anchor links that result in 404s on a partially-built site.
Risk 4 — Form incompleteness. A quote request page with a missing or incorrect form renders the conversion goal unachievable even if the page looks correct.
Risk 5 — Overreach into global files. The guardrail "do not change global styles" is present, but without a pre-build file scope declaration, Claude Code may still touch layout files, global CSS, or shared components it perceives as needing updates.

7. Recommended Prompt Improvements
Improvement 1 — Add Gate 1: Inspection-Only Pass. Instruction: "Before building anything, output your implementation plan. List every file you will create or edit. Wait for approval."
Improvement 2 — Add Framework Detection Step. Instruction: "Inspect package.json, the root directory structure, and the routing folder before creating any routes."
Improvement 3 — Add Duplicate Route Check. Instruction: "Confirm no page exists at the target route before creating it."
Improvement 4 — Add Form Field Specification Section. New Part 7a: Form and CTA Specification — fields, validation, submit action, confirmation path, accessibility requirements.
Improvement 5 — Add Broken Link Prevention Rule. Add to Part 11: "Only create internal links to pages that already exist or are being created in this build."
Improvement 6 — Add Framework-Specific Schema Note. Add to Part 6: "Confirm the schema injection method used in the project (JSON-LD script tag, Head component, CMS plugin, etc.) before adding schema."
Improvement 7 — Strengthen Part 13 Final Paste Prompt. Include the specific route, specific files to check, and the acceptance criteria directly in the Part 13 paste block, not just as context earlier in the document.
Improvement 8 — Add Pre-Build File Scope Declaration. Require Claude Code to output: "Files I will create: [list]. Files I will edit: [list]. Files I will not touch: [list]."
Improvement 9 — Add Post-Build Report Requirement. Require Claude Code to output a final report listing every file created or edited, every link added, schema added, and every acceptance criteria item checked off.
Improvement 10 — Simplify Parts 1–12 for Repeat Builds. When strategy is already approved, Parts 1–12 can be compressed using the Context Compression Skill. The prompt should include a note: "If strategy is pre-approved, use compressed summary format and proceed directly to Part 13."

8. Final Decision
Minor edits needed — not ready to paste as-is for production use on a live site.
The prompt is structurally sound and covers all the major implementation requirements. The section structure, guardrails, acceptance criteria, and schema safety rules are all present and correct. For low-risk, simple pages on a development site, it is usable today.
However, for Benchmark 1 (a lead-generation service page on a real business site), three gaps make it risky without edits: the missing pre-build gate, the missing file scope declaration, and the missing form field specification. These are not cosmetic — they directly affect whether the build will execute safely and whether the page will convert.
Recommended action before live use:

Add the pre-build confirmation gate (Gate 1)
Add the file scope declaration requirement
Add the form and CTA specification section
Strengthen Part 13 to be fully self-contained
Add the broken internal link prevention rule
Retest on Benchmark 1

Once those five changes are in, this prompt is ready for production use across Core Mode and Beyond-Elite Mode workflows. 