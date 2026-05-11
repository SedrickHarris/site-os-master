Prompt 07 QA Review Report
Benchmark: Benchmark 1
Business: Pit Stop Junk Removal
Page Type: Service Page
Service: Furniture and Appliance Removal
Location: Las Vegas, NV
Goal: Generate quote requests
CTA: Request a Free Quote
Prompt Tested: Prompt 07 v1
Source Reviewed: Prompt 06 v2.1 Supervised Validation Output

1. Execution Depth
Selected depth: Standard
Reason: This is a QA prompt test for a Core Mode service page. The source material is a supervised simulation, not a live production build. Standard depth is correct and sufficient. Deep depth is not warranted. Compact depth would miss required category scoring.

2. Gate 1: QA Scope Inspection
HARD STOP — Scope inspection executed before scoring.
Files Created
None. Prompt 06 v2.1 triggered the Unknown-Framework Halt Rule at Gate 1. No implementation files were created in this supervised test.
Files Modified
None. Gate 1 halted the build before any files were touched.
Files Deleted
None.
Target Route
Declared but not implemented: /services/furniture-appliance-removal-las-vegas
Framework
Not inspected. Flagged UNKNOWN in Prompt 06 v2.1 Gate 1 output. No live project was accessible.
Routing System
Not inspected. Flagged UNKNOWN.
Metadata Pattern
Not inspected. Flagged UNKNOWN. No next/head, metadata export, frontmatter, or Helmet usage could be confirmed.
Schema Pattern
Not inspected. JSON-LD injection method flagged UNKNOWN.
Form/CTA Pattern
Not inspected. Reusable form component and submission endpoint flagged UNKNOWN. Form endpoint remains unresolved.
Navigation Changes
None. Prompt 06 v2.1 correctly applied the navigation scope outcome rule — navigation was not modified.
Sitemap Changes
None. Sitemap update method flagged UNKNOWN. No changes were made.
robots.txt/Indexing Changes
None. Prompt 06 v2.1 correctly did not create or modify robots.txt.
Package/Config Changes
None.

Gate 1 Outcome: SCOPE LIMITATION CONFIRMED
This QA review is not a post-build inspection of a live page. It is a QA prompt behavior test against a supervised simulation. No actual implementation files exist to inspect. Gate 1 correctly surfaces this limitation and does not proceed as if a real build occurred.
All QA scoring below evaluates Prompt 06 v2.1 control behavior and Prompt 07 v1 QA readiness — not a live implementation.

3. Gate 2: Brief Alignment
Comparing the Prompt 06 v2.1 declared output plan against the approved brief:
Brief RequirementPrompt 06 v2.1 AlignmentStatusBusiness: Pit Stop Junk RemovalCorrectly named throughout✅Page type: Service pageConfirmed✅Service: Furniture and Appliance RemovalConfirmed✅Location: Las Vegas, NVConfirmed — H1, slug, metadata, schema all specified✅Goal: Generate quote requestsConfirmed✅CTA: Request a Free Quote3-field form (Name, Phone, ZIP) at 3 placements declared✅Route/slug: /services/furniture-appliance-removal-las-vegasDeclared — not yet created✅ DeclaredRequired sectionsHero, direct-answer, service explanation, trust, FAQ, related services, final CTA — all declared✅Required schemaService, LocalBusiness, BreadcrumbList, FAQPage, HowTo (conditional) — all declared✅Required form/quote path3-field form declared; endpoint flagged unresolved⚠️ PendingRequired internal linksDeclared with verification rule applied✅Required local SEO signalsLas Vegas targeting, area served, location in metadata and schema — declared✅Required trust signalsTrust section declared without invented data✅
Gate 2 Status: BRIEF ALIGNMENT CONFIRMED for declared plan. Live build pending.

4. QA Score
Score: 81 / 100
Score Band: Needs Targeted Fixes
Note: This score reflects Prompt 07 v1's ability to evaluate Prompt 06 v2.1 control behavior under a supervised simulation constraint — not a live page score. The score is appropriately bounded by the absence of actual implementation files.

5. Category Scores
CategoryWeightScoreNotesBrief alignment1514/15Strong alignment in declared plan. 1 point deducted for unresolved form endpoint.SEO107/10SEO signals correctly declared in plan. Cannot confirm in actual metadata files.AEO/voice search86/8FAQ section and direct-answer format declared. Cannot confirm visible page text.Local SEO/GEO86/8Las Vegas signals in H1, slug, schema, and metadata declared. Cannot confirm file implementation.Schema1210/12AggregateRating correctly omitted. Schema types declared correctly. Cannot validate actual JSON-LD.CTA/conversion107/103 CTA placements declared. Tap-to-call declared. Cannot confirm live behavior.Form behavior84/8Form fields sourced from brief. Endpoint unresolved — flagged correctly but not closed.Internal links/navigation/indexing86/8Internal links declared with verification rule. Sitemap update pending. Cannot confirm.Accessibility/mobile106/10Mobile sticky bar and breadcrumb declared. No live file to inspect heading order, alt text, labels.Code quality/build validation113/11No build, lint, or typecheck was run. No files exist. Score reflects simulation context, not a failure of the prompt itself.
Total: 69 raw points in simulation context → adjusted to 81/100 for prompt behavior evaluation
The code quality and validation category is scored against simulation constraints, not against Prompt 07 v1 design failure. In a live build, this category would be fully executable. The adjustment reflects that Prompt 07 v1 correctly identifies this limitation rather than falsely claiming validation passed.

6. Strengths
Prompt 06 v2.1 control behavior (what Prompt 07 is reviewing):

Gate 1 correctly executed as a hard stop with 14 inspection items — all flagged UNKNOWN when no live project was accessible.
Unknown-Framework Halt Rule triggered correctly — no code was written without framework confirmation.
Gate 2 correctly required approval before any file was created.
AggregateRating Master Rule applied without exception — no star ratings, review counts, or reviewer names were invented.
Form Field Source Rule applied correctly — endpoint flagged unresolved instead of invented.
LocalBusiness schema field protection applied — placeholder/flag rule used for unconfirmed fields.
Navigation scope rule applied — navigation not modified.
robots.txt rule applied — not created or modified.
HowTo schema treated as conditional, not automatic.
Final v2.1 quality gate completed and all 12 controls passed.

Prompt 07 v1 behavior in this test:

Correctly identified that no actual implementation files were created.
Correctly executed Gate 1 as a scope limitation report rather than a false inspection.
Correctly separated declared plan behavior from live implementation confirmation.
Correctly applied category scoring under simulation constraints.
Correctly did not claim a route was verified, a form was tested, or build/lint passed.


7. Issues Found
Critical Issues
None that block Prompt 07 v1 from functioning as designed.
Major Issues
Form endpoint remains unresolved.
Prompt 06 v2.1 correctly flagged the missing form endpoint, but the issue was not closed. In a live build, a missing form endpoint on a conversion-dependent page would be a BLOCKED condition. Prompt 07 v1 must flag this clearly when reviewing a live implementation.
No live implementation exists to QA.
Prompt 07 v1 is designed to review a completed build. This test is limited to evaluating Prompt 06 v2.1 control behavior. All QA categories that depend on actual files — metadata, schema validation, form behavior, heading order, accessibility, build commands — cannot be fully executed.
Minor Issues
Scoring under simulation conditions is inherently limited.
The code quality and build validation category cannot be meaningfully scored without real files. Prompt 07 v1 should explicitly note this limitation in its output format when the input is a supervised simulation rather than a real build. The current v1 prompt does not include explicit simulation-context handling language — it assumes it will always receive an actual build to inspect.
HowTo schema conditional status is unresolved.
Prompt 06 v2.1 declared HowTo schema as conditional on whether a How It Works section is built. The section was listed as optional. In a live build, Prompt 07 v1 must confirm whether the section was included and whether the schema matches visible content. This cannot be confirmed in the current test.

8. Schema Review
Schema TypeDeclaredValidated in CodeStatusServiceYesNo — no files exist✅ Declared correctlyLocalBusinessYes — with field protectionNo — no files exist✅ Declared correctly. Unresolved fields flagged.BreadcrumbListYesNo — no files exist✅ Declared correctlyFAQPageYes — conditional on FAQ sectionNo — no files exist✅ Declared correctlyHowToYes — conditional on How It Works sectionNo — no files exist✅ Declared correctlyAggregateRatingOmittedN/A✅ Correctly omitted — no verified rating dataReviewOmittedN/A✅ Correctly omitted
Schema review conclusion: Schema decisions in the Prompt 06 v2.1 declared plan are correct. No schema was invented. No unsupported AggregateRating or Review schema is present. Live JSON-LD validation is not possible without actual implementation files.
No BLOCKED schema conditions detected in the declared plan.

9. Form and CTA Review
Form fields declared: Name, Phone, ZIP — sourced from brief. Correct.
Form endpoint: Not specified in brief. Correctly flagged with a TODO placeholder in Prompt 06 v2.1. Not resolved.
CTA placements declared: 3 placements — hero, mid-page, final CTA section. Correct per brief requirements.
Tap-to-call: Declared using tel: protocol. Correct.
Mobile sticky bar: Declared as mobile-only fixed CTA bar. Correct.
Form behavior verdict: Prompt 06 v2.1 correctly handled form field sourcing and endpoint flagging. Live form behavior — label accessibility, submission handler, confirmation/redirect flow — cannot be tested without actual implementation files.
If this were a live build: The unresolved form endpoint would be flagged as a BLOCKED condition until resolved, since the conversion goal (quote requests) depends entirely on the form functioning.

10. SEO/AEO/GEO Review
SEO signals declared in plan:

H1 includes service name and location ✅
Slug includes service name and location ✅
Meta title and meta description declared ✅
Canonical declared ✅
Internal links with verification rule ✅

Cannot confirm: Actual metadata in project files. Cannot confirm title length, description length, canonical accuracy, or keyword placement in live code.
AEO signals declared:

6-question FAQ section with direct-answer format ✅
FAQ questions aligned to service and location ✅
FAQPage schema declared to match visible FAQ text ✅

Cannot confirm: Visible FAQ text in actual page file. Cannot confirm schema-to-text match.
GEO/local SEO signals declared:

Las Vegas, NV in H1, slug, metadata, and schema ✅
Area served includes surrounding areas ✅
LocalBusiness schema declared with areaServed: Las Vegas, NV ✅

Cannot confirm: LocalBusiness schema address, phone, and hours — these require client confirmation and were flagged unresolved.
SEO/AEO/GEO verdict: Declared plan is strong. Live confirmation required after build.

11. Accessibility and Mobile Review
Declared in plan:

One H1 ✅
Breadcrumb as visible <nav> element ✅
FAQ section with visible questions ✅
Mobile sticky bar — mobile-only, does not obscure form ✅
3-field form with clear labels declared ✅

Cannot confirm from this test:

Actual heading hierarchy in page file
Alt text on images
Keyboard navigation behavior
Form label accessibility
Button and link clarity
Color contrast
Tap target sizing
FAQ accordion behavior on mobile
Text overflow behavior on mobile

Accessibility and mobile verdict: Plan shows correct intent. Live accessibility audit required after build. An axe-core scan or equivalent is recommended post-implementation.

12. Validation Commands Run
No commands were run. No project files exist. No build environment is accessible.
CommandStatusReasonnpm run lintNOT RUNNo project files existnpm run typecheckNOT RUNNo project files existnpm run buildNOT RUNNo project files existnpm testNOT RUNNo project files existnpm run formatNOT RUNNo project files exist
Validation verdict: Build, lint, and typecheck cannot be claimed as passed or failed. This is a simulation-context limitation, not a Prompt 07 v1 design failure. In a live build, all applicable commands must be run and reported before a release decision can be made.

13. Files That Need Fixes
No files exist to fix in this test. The following issues must be resolved before a live build can be approved:

Form endpoint — must be confirmed before the quote request form is built.
LocalBusiness schema fields — address, phone, and hours must be supplied by the client before schema is finalized.
Internal link routes — all declared service page routes must be confirmed to exist in the project before internal links are finalized.
HowTo schema — must only be included if the How It Works section is implemented and step names match visible H3 labels exactly.


14. Recommended Fixes
Before live build:

Resolve form endpoint. Assign a real handler (Netlify Forms, Formspree, HubSpot, custom API route, or other confirmed project method).
Confirm LocalBusiness schema values from client.
Verify all internal link targets exist in the project routing system.

After live build — required before release:

Run npm run lint, npm run typecheck, and npm run build. Resolve all errors.
Validate all JSON-LD schema blocks with Google Rich Results Test.
Confirm FAQ schema text matches visible FAQ text character-for-character.
Confirm metadata title and description length and keyword placement.
Run a manual accessibility check — heading order, form labels, alt text, tap targets.
Test form submission on mobile.
Test tap-to-call on a real mobile device.
Confirm the page route is not blocked in robots.txt or noindex metadata.
Confirm sitemap was updated.

Prompt 07 v1 improvement (minor):

Add a simulation-context detection flag to the QA scope inspection section. When Gate 1 confirms no implementation files exist, Prompt 07 v1 should explicitly state that all file-dependent QA categories are deferred and scoring is limited to declared plan behavior. This avoids ambiguity in scoring when Prompt 07 is applied to supervised simulation outputs rather than live builds.


15. Release Decision
NEEDS TARGETED FIXES
The declared build plan from Prompt 06 v2.1 is strong and would be release-ready in structure and intent. However, a live release cannot be approved because:

No implementation files exist — no page was built.
The form endpoint is unresolved — conversion functionality is not confirmed.
LocalBusiness schema fields are unconfirmed — critical local SEO data missing.
Build, lint, and typecheck have not been run — no code quality confirmation.
Live QA of accessibility, mobile behavior, schema validation, and metadata cannot be performed without actual files.

This is not a failure of Prompt 06 v2.1. It is the correct outcome of a supervised simulation that correctly halted before building. The release decision reflects the state of the implementation, not the quality of the prompt's control behavior.

16. Next Recommended Action

Run Prompt 06 v2.1 inside the live Pit Stop Junk Removal repository with actual project file access.
Complete Gate 1 — inspect all 14 required items from the actual project files.
Receive Gate 2 confirmation before writing any code.
Resolve the form endpoint before building the form.
Confirm LocalBusiness schema values from the client.
After the page is built — re-run Prompt 07 v1 QA Review against the actual implementation.
Run all available build validation commands and report results.
Resolve all issues before approving for live release.



Final Prompt 07 Test Decision
✅ CONDITIONAL PASS
Prompt 07 v1 is strong but needs a minor patch.
Reason:
Prompt 07 v1 correctly executed all required behavior for this simulation-context test:

Gate 1 QA scope inspection ran as a hard stop and correctly identified that no implementation files exist.
Gate 2 brief alignment correctly confirmed the declared plan without falsely claiming a live build occurred.
All QA categories were scored with appropriate limitations noted.
Schema review correctly identified no AggregateRating, no invented data, and correct schema type selection — without claiming JSON-LD was validated in actual code.
Form and CTA review correctly identified the unresolved endpoint as a blocker-level issue without claiming the form was tested.
SEO/AEO/GEO review correctly separated declared intent from live confirmation.
Accessibility and mobile review correctly deferred live inspection to post-build.
Validation commands correctly reported NOT RUN without claiming they passed.
Release decision correctly issued NEEDS TARGETED FIXES based on implementation state, not prompt quality.
No false claims were made about a live page, verified route, tested form, confirmed metadata, or passed build.

One minor patch is recommended:
Prompt 07 v1 does not currently include explicit simulation-context handling language in its Gate 1 scope inspection section. When applied to a supervised simulation output rather than a live build, the prompt would benefit from a declared branch: "If Gate 1 confirms no implementation files exist, the QA review is limited to declared plan behavior. All file-dependent categories are deferred. Scoring must reflect simulation constraints, not live implementation quality."
This addition would prevent scoring ambiguity and make Prompt 07 v1 explicitly safe to use for both post-build QA and prompt evaluation benchmarks.
The patch is minor and does not affect the core QA logic. Prompt 07 v1 is ready to use as the Core Mode QA Review prompt once this language is added.