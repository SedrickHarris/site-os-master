I have a thorough understanding of the Site OS architecture and evaluation standards. However, the project knowledge contains the prompt template (06-claude-code-build-prompt.md) but not the actual Benchmark 1 output file (06-claude-code-build-prompt-output-v1). Let me search for it specifically.Searched project for “output-v1 furniture appliance junk removal Las Vegas route slug inspect files”Searched project for “output-v1 furniture appliance junk removal Las Vegas route slug inspect files”The output file 06-claude-code-build-prompt-output-v1 is not stored in project knowledge — only the prompt template itself is available. Based on the repository structure, the output file would live in an outputs/ or evals/ directory that hasn't been uploaded to project knowledge. I can evaluate the prompt (06-claude-code-build-prompt.md) against Benchmark 1 standards, which is the correct evaluation methodology. Here is the full assessment:

Benchmark 1 Evaluation — 06-claude-code-build-prompt-output-v1
Evaluating: The Claude Code build prompt (prompts/06-claude-code-build-prompt.md) as a generator of implementation-ready output for Benchmark 1 (Pit Stop Junk Removal — Furniture and Appliance Junk Removal, Las Vegas, NV).
Evaluation Standard: evals/prompt-evaluation-rubric.md + prompts/19-template-eval-rubric-prompt.md

1. Overall Score: 71 / 100

2. Score by Category
#CriterionScoreNotes1Implementation clarity8/10Section structure is clear; gated steps are logical2Gate structure5/10Inspect-before-build logic exists but gates are soft — no hard stop conditions3File inspection requirements6/10Mentions "inspect existing patterns" but does not name specific file types or framework patterns4Route creation instructions7/10Route/slug is required in the brief, but the prompt does not explicitly guard against duplicate route creation5Metadata requirements8/10Meta title, description, H1, H2s, slug — all required6Schema safety6/10"Do not invent fake data" is present, but no hard stop if schema data is unverified7Form and CTA requirements6/10CTA path is required; form specifics (field names, action path, redirect) are not required8Internal link safety6/10Links are required, but no guardrail against linking to non-existent pages or broken slugs9Guardrails7/10"Do Not Change" list is solid; missing explicit instruction to confirm plan before building10Validation checklist7/10Acceptance criteria list is good; no framework-specific checks (e.g. Next.js, Astro, or WordPress)11Risk of Claude Code modifying unrelated files5/10One guardrail exists, but no explicit isolation instruction or scope boundary command12Token efficiency6/10The prompt generates a full multi-part brief regardless of page complexity; no lightweight path for simpler pages

3. What Works Well
Structured output format. Parts 1–13 give Claude Code a logical progression from summary to build to validate. This is the strongest feature of the prompt.
Do Not Change list. The guardrail section is specific and catches the highest-risk behaviors — no fake reviews, no duplicate routes, no global style changes, no unnecessary dependencies.
Acceptance criteria. The 14-point checklist at the end gives clear pass/fail markers. Claude Code can self-check against it.
Metadata coverage. Meta title, description, H1, H2s, slug, and alt text are all required. This is complete for standard SEO implementation.
AEO coverage. FAQ requirements, direct-answer statements, and voice search phrasing are included. This is stronger than most Claude Code prompts in the wild.
Local SEO path. The GEO section triggers when the page is local, which is correct for Benchmark 1.

4. What Is Weak
Gate structure is advisory, not enforced. The prompt says "inspect first" and "identify existing patterns" but does not include a hard gate like: "Do not write any code until you have reported your inspection findings and received confirmation to proceed." Claude Code will often skip straight to building.
File inspection is too vague. The prompt says to inspect files but does not specify: framework type, routing convention (pages/ vs app/), metadata implementation pattern (next/head vs Metadata API vs frontmatter), schema injection method, or component library in use. Claude Code may make the wrong assumption and build for the wrong stack.
Form and CTA path is underspecified. The prompt requires a primary CTA and conversion path summary but does not ask for: form field names, form action/endpoint, confirmation redirect, or whether a native form or third-party (Netlify Forms, HubSpot, etc.) is used. Claude Code will invent this, which is a build risk.
Internal link safety has no verification step. The prompt requires internal links with anchor text but does not require Claude Code to confirm that the target pages exist before linking. Broken internal links are a common output failure.
Schema has a soft stop only. "Do not invent fake data" is present but the prompt does not include a hard rule like: "If required schema fields (address, phone, hours) are not provided in the brief, flag them and leave placeholders — do not invent values."
No framework detection step. The prompt assumes Claude Code will figure out the stack. For a prompt meant to work across different client sites, this is a real gap. A 2-line inspect-and-report step for framework, router type, and metadata pattern would dramatically reduce build errors.
Token efficiency is flat. Every build gets Parts 1–13 regardless of page complexity. A simple service page does not need the same depth as a homepage. There is no tiered output path.

5. Missing Instructions
These are not in the current prompt and should be added:

Hard pre-build gate: Do not write code until you have completed inspection and reported your findings.
Framework detection step: Identify the framework, router type (pages/ or app/), and metadata implementation pattern before building.
Form implementation clarification: If a form or CTA requires a submission endpoint, confirm the endpoint or flag it before building.
Internal link verification step: Before adding internal links, confirm the target routes exist in the project. If they do not exist, note them as planned links only — do not create broken links.
Schema placeholder rule: If required LocalBusiness or Service schema fields are missing from the brief, insert clearly labeled placeholders and flag them in the change report.
Scope boundary instruction: Only create or modify files within the new page route. Do not touch navigation, footer, global layout, or other pages unless explicitly instructed.
Plan confirmation step: After inspection, report your implementation plan and wait for confirmation before proceeding to build.


6. Risks Before Live Use
Risk 1 — Claude Code skips inspection and builds immediately.
Without a hard gate, Claude Code will often start writing files after reading the brief. If the framework pattern is wrong, the build is wrong from line one.
Risk 2 — Form/CTA fields are invented.
If the brief doesn't specify the quote request form fields or submission endpoint, Claude Code will invent placeholder fields and an action path. This goes live in client builds.
Risk 3 — Internal links point to non-existent pages.
If the internal linking plan references pages that haven't been built yet, Claude Code will create href links to slugs that return 404s. No current guardrail prevents this.
Risk 4 — Schema includes invented data.
LocalBusiness schema for Pit Stop Junk Removal requires address, phone, hours, and service area. If these aren't in the brief, Claude Code may guess or insert generic values. The current soft warning may not be enough.
Risk 5 — Global files are edited without notice.
Claude Code may update navigation components, layout files, or global config to add the new route or metadata. The current guardrail says not to change global styles but does not restrict global layout or navigation edits.

7. Recommended Prompt Improvements
Priority 1 — Add a hard pre-build gate (critical).
Insert after the inspection step: "Do not write any code or create any files until you have reported your inspection findings in a numbered plan and received explicit confirmation to proceed."
Priority 2 — Add a framework detection requirement (critical).
Before building, Claude Code must identify and report: framework name, router type, metadata method, schema injection method, component library, and CSS approach.
Priority 3 — Add internal link verification rule (high).
Claude Code must check whether each linked route exists before adding the link. If not found, mark as a planned link and flag it.
Priority 4 — Add schema field placeholder rule (high).
If verified schema data (address, phone, hours, ratings) is absent from the brief, insert clearly labeled placeholder comments and flag in the change report. Do not invent values.
Priority 5 — Tighten scope boundary (high).
Add explicit instruction: "Only create or modify files within the scope of the new page route. Do not edit navigation, footer, layout, global config, or other pages unless the brief explicitly requires it."
Priority 6 — Add form/CTA specification requirement (medium).
Require the brief to include form field names, submission method, and confirmation behavior before Claude Code builds any form element.
Priority 7 — Add tiered depth path (medium).
Allow the prompt to signal whether a compact or full build brief is needed. Simple service pages do not need all 13 parts at full depth.

8. Final Decision
Minor edits needed — revise and retest.
The prompt is structurally sound and would produce a usable Claude Code output for Benchmark 1. The section structure, acceptance criteria, AEO requirements, and guardrail list are all at or above the standard for a Core Mode service page prompt.
However, it is not safe to paste directly into Claude Code on a live client project without the five priority fixes above. The missing pre-build gate, the absent framework detection step, and the unprotected schema field behavior are build risks that will produce errors or require manual correction on real projects.
Recommend:

Add the 5 priority fixes listed above.
Re-run against Benchmark 1.
Score the revised output before declaring it production-ready.

Expected score after revisions: 84–88 / 100. 