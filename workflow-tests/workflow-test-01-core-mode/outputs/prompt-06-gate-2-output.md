Prompt 06 — Gate 2 Build Plan
Workflow: Workflow Test 01 — Core Mode
Business: Pit Stop Junk Removal
Page: Furniture and Appliance Removal in Las Vegas, NV
Target Route: /services/furniture-appliance-removal-las-vegas
Target File: src/app/services/furniture-appliance-removal-las-vegas/page.tsx
Approach: Audit and extend — do not replace without inspection
Prompt Version: Prompt 06 v2.1
Execution Depth: Standard
Output Path: workflow-tests/workflow-test-01-core-mode/outputs/prompt-06-gate-2-output.md

GATE 2 STATUS: HARD STOP
No files created, edited, renamed, moved, or deleted. Build plan only.

Section 1: Audit of the Existing Target Page
The existing src/app/services/furniture-appliance-removal-las-vegas/page.tsx was created during the scaffold build and subsequently confirmed by Live Validation 02 (Prompt 06 v2.1) and reviewed by Live Validation 02's Prompt 07 QA. The following is a confirmed inventory of what the file currently contains.
What Currently Exists in the Target Page
ItemStatusDetailPage type✅ Server ComponentCorrect App Router pattern — metadata export requires Server ComponentRoute✅ Resolves correctly/services/furniture-appliance-removal-las-vegas confirmed in build outputexport const metadata✅ PresentIncludes title, description, canonical (relative), Open GraphH1✅ Present"Furniture and Appliance Removal in Las Vegas, NV" — correctHeading hierarchy✅ H1 → H2 → H3Logical structure confirmedSection 1 — Hero✅ PresentH1, direct-answer block, trust signals, hero quote form (QuoteForm.tsx)Section 2 — What We Remove✅ PresentTwo-column furniture + appliance item listsSection 3 — Who We Help✅ Present6 customer pain point cardsSection 4 — How It Works✅ Present3-step numbered process (Request → Schedule → Haul Away)Section 5 — Service Area✅ Present8 Las Vegas metro communities namedSection 6 — Why Choose Us✅ Present4 trust cards, no fake ratingsSection 7 — Mid-page CTA banner✅ Present"Request a Free Quote" buttonSection 8 — FAQ✅ Present6 questions, accordion UI via FAQItem.tsxSection 9 — Bottom quote form CTA✅ PresentSecond QuoteForm.tsx at bottomQuoteForm.tsx import✅ PresentClient Component — Name, Phone, ZIP fieldsFAQItem.tsx import✅ PresentClient Component — accordion toggleBreadcrumb nav✅ PresentVisible on page, matches BreadcrumbList schemaBreadcrumbList schema✅ PresentJSON-LD, matches visible breadcrumbLocalBusiness schema⚠️ Present with TODOstelephone, streetAddress, postalCode, openingHoursSpecification all flaggedService schema✅ PresentNo placeholder valuesFAQPage schema✅ PresentMatches visible FAQ accordion text — 6 Q&A pairsHowTo schema✅ PresentMatches visible 3-step section heading labels exactlyAggregateRating schema✅ ABSENTCorrectly omitted — no verified rating dataReview schema✅ ABSENTCorrectly omittedInternal links⚠️ LimitedOnly / (homepage) linked — all other targets skipped per broken-link prevention ruleTODO_REAL_PHONE_NUMBER🚩 PresentAppears in 3 locations in page.tsx + LocalBusiness schemaTODO_FORM_ENDPOINT🚩 PresentIn QuoteForm.tsx submit handlerTODO_PRODUCTION_DOMAIN🚩 PresentIn canonical and Open Graph URLTODO_REAL_ADDRESS🚩 PresentLocalBusiness schema streetAddressTODO_REAL_ZIP🚩 PresentLocalBusiness schema postalCodeTODO_REAL_HOURS🚩 PresentLocalBusiness openingHoursSpecificationMobile sticky CTA bar⚠️ ABSENT from page-level buildMobileStickyCallBar.tsx is in root layout.tsx — present globally, but was not explicitly wired per-page in Live Validation 02Hero image🚩 Placeholder/images/services/furniture-appliance-removal-hero.jpg — no real assetNavigation link⚠️ NEEDS VERIFICATIONSiteHeader.tsx exists in scaffold — must confirm whether link to this page is already presentSitemap inclusion⚠️ NEEDS VERIFICATIONsitemap.ts exists in scaffold — must confirm whether this route is already included in the generatorBrand red #B82429 in Tailwind🚩 UNVERIFIEDScaffold was initially built with amber/orange placeholder — must inspect tailwind.config.ts

Section 2: Gap Analysis — Prompt 05 Brief vs. Current Page State
Section Structure Comparison
The Prompt 05 brief specifies a 9-section structure. The existing page has 9 sections but with different labels for some.
Brief SectionBrief HeadingCurrent Page SectionStatusSection 1Hero — "Furniture and Appliance Removal in Las Vegas, NV"Hero with H1, direct-answer, form✅ MatchSection 2Direct Answer — "Need to Get Rid of Old Furniture or Appliances in Las Vegas?"Direct-answer block embedded in hero⚠️ Partial — exists in hero but may not have its own H2 as a standalone sectionSection 3What We Remove"What We Remove" — two-column lists✅ MatchSection 4How It Works"How It Works" — 3-step process✅ MatchSection 5Why Pit Stop Junk Removal"Why Choose Us" — 4 trust cards⚠️ Brief requires 5 confirmed differentiator cards + 3 placeholder TODO cards (licensed/insured, years, reviews). Current has 4 cards — needs auditSection 6Service AreaService Area section — 8 cities✅ MatchSection 7Trust and Social ProofIncluded in trust cards / "Why Choose Us" section⚠️ Brief specifies a dedicated Trust section with specific confirmed copy + placeholder slots for rating, testimonials, license — may be merged into Why Choose UsSection 8FAQFAQ — 6 questions⚠️ Brief requires 10 Q&A pairs. Current has 6. Gap of 4 questionsSection 9Final CTABottom quote form CTA✅ Match — structure present, form endpoint TODO
Key Content Gaps Identified
GapPriorityDetailFAQ has 6 questions — brief requires 10HighPrompts 04 and 05 specify 10 complete Q&A pairs including Q6 (pricing, conditional safe answer) and Q10 (same-day, conditional safe answer). Currently 4 questions are missing. FAQPage schema must be updated to match.Direct Answer section may not have a standalone H2MediumPrompt 05 specifies Section 2 as a separate section with its own H2: "Need to Get Rid of Old Furniture or Appliances in Las Vegas?" and a 3-sentence direct-answer paragraph. If this is embedded inside the hero without its own H2, it needs to be separated or the H2 needs to be added.Why Choose Us — card count needs verificationMediumBrief requires 5 confirmed differentiator cards + 3 placeholder TODO cards (licensed/insured, years in business, review count — render as TODO comments in code only). Current count is 4 — must inspect exact content.Section 7 Trust and Social Proof — may be absent as standalone sectionMediumBrief specifies a dedicated section with its own H2: "Trusted Furniture and Appliance Removal in Las Vegas." Must inspect whether a standalone trust section exists or whether trust content is merged into differentators.Internal links — only homepage linkedLow/Carry forwardNow that other routes exist in the scaffold (/services, /services/junk-removal-las-vegas, /contact, /free-quote), some internal links skipped in the original build can now be added. Must verify targets exist before linking.Mobile sticky CTA — needs layout.tsx verificationLowMobileStickyCallBar is in root layout and should render on all pages automatically. Needs confirmation that it appears correctly on this page.Brand red #B82429 — Tailwind config needs inspectionMediumScaffold used amber/orange as placeholder. If #B82429 is not in tailwind.config.ts, add it and update button/CTA classes.

Section 3: Files to Inspect Before Editing
The following files must be read before any edits begin:
FileWhy Inspectsrc/app/services/furniture-appliance-removal-las-vegas/page.tsxPrimary target — audit exact content, section structure, FAQ count, schema blocks, TODO locationssrc/components/FAQSection.tsxConfirm props interface — how FAQ data is passed, whether it accepts an array of Q&A objectssrc/components/FAQItem.tsxConfirm accordion item structuresrc/components/QuoteForm.tsxConfirm form fields and TODO endpoint locationsrc/components/CTABlock.tsxConfirm CTA block props — reuse for mid-page and bottom CTAssrc/components/SiteHeader.tsxConfirm whether nav link to /services/furniture-appliance-removal-las-vegas already existssrc/app/sitemap.tsConfirm whether target route is already in the sitemap generator outputtailwind.config.tsConfirm whether #B82429 is already defined as a color tokensrc/lib/site-config.tsConfirm TODO placeholder values and data shape used by schema builderssrc/components/schema/schemas.tsConfirm builder function signatures for FAQPage and HowTo — needed when updating FAQ countsrc/app/services/junk-removal-las-vegas/page.tsxReference pattern — confirm section structure, heading naming, schema injection order, and internal link approach used on the closest parallel service page

Section 4: Files to Edit
FileEdit TypeWhat Changessrc/app/services/furniture-appliance-removal-las-vegas/page.tsxExtendAdd missing 4 FAQ Q&A pairs (Q7–Q10 from Prompt 05 brief). Verify/add Direct Answer H2 as standalone section. Verify/fix Why Choose Us differentiator count. Add standalone Trust section if absent. Update FAQPage schema and HowTo schema to match any new visible content. Add newly available internal links. Preserve all existing TODO/FLAG placeholders.tailwind.config.tsConditional editAdd brand red #B82429 as a named color token ONLY if not already present. Document the change. No other styling changes.src/components/SiteHeader.tsxConditional editAdd nav link to /services/furniture-appliance-removal-las-vegas ONLY if not already present. One link addition only — no nav restructuring.src/app/sitemap.tsConditional editConfirm this route is included in the dynamic sitemap. Add it if missing. No other sitemap changes.

Section 5: Files NOT to Edit
FileReasonsrc/app/layout.tsxRoot layout — do not touch. MobileStickyCallBar already in layout.src/app/page.tsxHomepage — not in scope for this build.src/app/services/page.tsxServices index — not in scope.src/app/services/junk-removal-las-vegas/page.tsxSeparate service page — reference only, do not modify.src/app/contact/page.tsxContact page — not in scope.src/app/free-quote/page.tsxQuote landing page — not in scope.src/components/QuoteForm.tsxForm component — do not modify the component itself. The page can use it as-is.src/components/FAQSection.tsxFAQ component — do not modify. Use as-is with updated data.src/components/FAQItem.tsxFAQ item component — do not modify.src/components/CTABlock.tsxCTA component — do not modify. Use as-is.src/components/MobileStickyCallBar.tsxAlready in root layout — do not modify.src/components/SiteFooter.tsxFooter — not in scope.src/components/schema/schemas.tsSchema builders — do not modify the builder functions. Call them with correct data from the page.src/components/schema/JsonLd.tsxSchema injector — do not modify.src/lib/site-config.tsSite config — do not modify. TODO values remain as-is until client confirms.src/types/index.tsType definitions — do not modify.globals.cssGlobal styles — do not modify.package.jsonDependencies — do not add packages.next.config.mjsFramework config — do not modify.tsconfig.jsonTypeScript config — do not modify.public/robots.txtIndexing — do not modify in this build.postcss.config.mjsPostCSS config — do not modify..eslintrc.jsonLint config — do not modify.

Section 6: Components to Reuse
All required components already exist. No new components need to be created.
ComponentUse in This BuildQuoteForm.tsxHero section form and bottom section form — use as-isCTABlock.tsxMid-page CTA section — use as-isFAQSection.tsxPass updated 10-Q&A array as propsFAQItem.tsxUsed internally by FAQSection — no changeMobileStickyCallBar.tsxAlready rendered via root layout — no action neededJsonLd.tsxUse for all schema block injectionschema/schemas.ts buildersCall buildFAQPageSchema() with 10-Q array, confirm buildHowToSchema() still matches visible steps
No new components are required for this build.

Section 7: Schema Implementation Plan
Current Schema State (confirmed from Live Validation 02 + Prompt 07 QA)
SchemaCurrent StateAction RequiredBreadcrumbList✅ Present and correctNo change neededLocalBusiness⚠️ Present, TODO fieldsNo change — preserve all TODOs as-is. Do not invent any values.Service✅ Present and correctNo change neededFAQPage⚠️ Has 6 Q&A pairs — needs 10Update with 4 additional Q&A pairs from Prompt 05. FAQPage schema text must match visible FAQ text exactly.HowTo✅ Present, matches visible 3-step sectionVerify step headings still match after any page edits. No change expected unless step labels change.AggregateRating✅ ABSENTMust remain absent. Non-negotiable.Review✅ ABSENTMust remain absent.
FAQPage Schema Update Requirements
The 4 additional FAQ questions to add (from Prompt 05 Section 8, Q7–Q10):

Q7: General junk removal / service scope question
Q8: Commercial service question
Q9: Service area question (Clark County, Henderson, North Las Vegas)
Q10: Same-day availability — conditional safe answer required (must use the confirmed conditional answer from Prompt 04, not an invented claim)

FAQPage JSON-LD must be regenerated with all 10 Q&A pairs. Schema text must match the visible accordion text word-for-word. Do not include schema-only content.
LocalBusiness Schema — TODO Fields to Preserve
The following fields must remain as TODO/FLAG placeholders. Do not replace with invented values:
// FLAG: CLIENT MUST CONFIRM BEFORE LAUNCH
telephone: "TODO_REAL_PHONE_NUMBER",
streetAddress: "TODO_REAL_ADDRESS",
postalCode: "TODO_REAL_ZIP",
openingHoursSpecification: "TODO_REAL_HOURS",
url: "TODO_PRODUCTION_DOMAIN",
sameAs: "TODO_GBP_URL",
image: "TODO_HERO_IMAGE_URL",
priceRange: "TODO_CONFIRM_WITH_CLIENT"

Section 8: Metadata Implementation Plan
Current Metadata State
TagCurrent ValueStatustitle"Furniture and Appliance Removal in Las Vegas, NV | Pit Stop Junk Removal"✅ Correct — no changedescription"Furniture and appliance removal in Las Vegas, NV. Pit Stop Junk Removal hauls away sofas, refrigerators, washers, and more. Request your free quote today."✅ Correct — no changealternates.canonicalRelative path — TODO_PRODUCTION_DOMAIN/services/furniture-appliance-removal-las-vegas🚩 FLAG — preserve as-isopenGraph.title"Furniture and Appliance Removal in Las Vegas, NV | Pit Stop Junk Removal"✅ Correct — no changeopenGraph.description"Pit Stop Junk Removal hauls away old furniture and appliances across Las Vegas and Clark County. Request your free quote today."✅ Correct — no changeopenGraph.urlTODO_PRODUCTION_DOMAIN/services/furniture-appliance-removal-las-vegas🚩 FLAG — preserve as-isrobotsindex, follow✅ Correct — no change
No metadata changes are required. All values are correct. Canonical and OG URL placeholders must be preserved until production domain is confirmed.

Section 9: CTA and Form Implementation Plan
Current CTA State
CTA PlacementCurrent StateActionHero — "Request a Free Quote" form✅ Present (QuoteForm.tsx)No change to component. Endpoint TODO preserved.Hero — "Call Now" tap-to-call✅ Present, tel:TODO_REAL_PHONE_NUMBERPreserve TODO. Do not invent phone number.Mid-page — "Request a Free Quote" button✅ Present (CTABlock.tsx)No change neededFAQ section inline link — "Still have questions? Request a free quote."⚠️ Verify presenceIf absent, add inline text link after FAQ section per Prompt 05 briefFinal CTA — "Request a Free Quote" form✅ Present (QuoteForm.tsx)No change to component. Endpoint TODO preserved.Final CTA — "Call Now" tap-to-call✅ Present, tel:TODO_REAL_PHONE_NUMBERPreserve TODO
Form Fields (confirmed from brief — do not modify)

Name (text, required)
Phone (tel, required)
Brief description / What do you need removed? (textarea, optional)
Submit: "Get My Free Quote" or "Request a Free Quote"

Form Endpoint
// FLAG: FORM_ENDPOINT — REQUIRES CLIENT CONFIRMATION before launch
The endpoint remains a TODO. Do not connect to a real endpoint without client confirmation. Do not invent an endpoint.

Section 10: Internal Link Plan
Now that the scaffold exists, the following routes are confirmed as valid link targets. These links were previously skipped due to non-existence.
Target RouteAnchor TextPlacementStatus/services/junk-removal-las-vegas"full-service junk removal in Las Vegas"Section 5 differentiators or FAQ Q7 body✅ Route confirmed — add link/contact"contact us" or "give us a call"Section 3 item list footer copy✅ Route confirmed — add link/free-quote"request a free quote"Inline CTA links throughout✅ Route confirmed — may supplement form links/services"all junk removal services"Breadcrumb or Section 5✅ Route confirmed — add if contextually natural/"Pit Stop Junk Removal"Breadcrumb✅ Already present
Rule: Only link to these confirmed routes. Do not add links to routes that do not exist. Use natural anchor text. Do not force links where they break sentence flow.

Section 11: Accessibility and Mobile Plan
No structural changes to accessibility are expected — the existing build passed the Live Validation 02 accessibility review. The following items apply to any new content added:

Any new FAQ questions added must follow the same FAQItem.tsx accordion pattern with aria-expanded, keyboard support, and descriptive question text as the <summary> element.
Any new section headings must follow H2 → H3 hierarchy — no heading levels skipped.
All CTA buttons and links must have descriptive text — no "click here."
Any new <section> elements should include appropriate landmark roles or be wrapped in the existing layout pattern.
MobileStickyCallBar.tsx is confirmed present in root layout and will render on this page. No action required.
Verify tap-to-call is accessible on mobile: href="tel:TODO_REAL_PHONE_NUMBER" is present.


Section 12: Navigation and Sitemap Plan
Navigation
File to inspect: src/components/SiteHeader.tsx
Action: If a link to /services/furniture-appliance-removal-las-vegas is not already present in the services section of the nav, add one.
Link text: "Furniture and Appliance Removal"
Destination: /services/furniture-appliance-removal-las-vegas
Scope: Single link addition only. Do not restructure the nav, reorder links, change styling, or modify any other navigation behavior.
If link already exists: No action.
Sitemap
File to inspect: src/app/sitemap.ts
Action: Confirm that /services/furniture-appliance-removal-las-vegas is included in the dynamic sitemap output.
If already included: No action. Document as confirmed.
If missing: Add the route entry with appropriate priority and changeFrequency values matching the existing service page pattern.
Note: Sitemap URL will use TODO_PRODUCTION_DOMAIN until domain is confirmed. Add the route structure now; the domain placeholder will be resolved when the client confirms.
robots.txt
File: public/robots.txt
Action: Do not modify. Confirmed from gate 1 that /services/ path is not blocked. No action required.

Section 13: Brand Color Plan
File to inspect: tailwind.config.ts
Question: Is #B82429 (brand red) already defined as a named color token?
If yes: No action. Use the existing token name in any updated or new markup.
If no: Add a single color entry to the extend.colors section:
jspitstop: {
  red: '#B82429',
}
Then update button and CTA classes in page.tsx to use this token. Document the change in the Gate 5 report.
Scope: This is the only permitted change to tailwind.config.ts. No other styling changes.

Section 14: TODO and FLAG Preservation Plan
All of the following placeholders must be preserved exactly as-is. Do not replace with invented values under any circumstances.
PlaceholderLocationCarry-Forward RuleTODO_REAL_PHONE_NUMBER3 locations in page.tsx (tap-to-call) + LocalBusiness schema telephonePreserve. Client must confirm.TODO_FORM_ENDPOINTQuoteForm.tsx submit handlerPreserve. Client must confirm.TODO_PRODUCTION_DOMAINCanonical, OG url, BreadcrumbList URLs, Service schema url, sitemapPreserve. Client must confirm.TODO_REAL_ADDRESSLocalBusiness schema streetAddressPreserve.TODO_REAL_ZIPLocalBusiness schema postalCodePreserve.TODO_REAL_HOURSLocalBusiness schema openingHoursSpecificationPreserve.TODO_GBP_URLLocalBusiness schema sameAsPreserve.TODO_HERO_IMAGE_URLHero image src attributePreserve.TODO_PRICINGFAQ Q6 conditional safe answer notePreserve. Update when client confirms.TODO_SAME_DAYFAQ Q10 conditional safe answer notePreserve. Update when client confirms.TODO_LICENSED_INSUREDDifferentiators section placeholder card (if exists)Preserve as code comment only — not visible UI.TODO_YEARS_IN_BUSINESSDifferentiators section placeholderPreserve as code comment only — not visible UI.TODO_REVIEW_COUNTDifferentiators or trust section placeholderPreserve as code comment only — not visible UI.

Section 15: Validation Plan
After Gate 3 implementation, run the following in order:
CommandExpected Resultnpm run buildZero errors. Route confirmed in build output.npm run lintZero errors or warnings on modified files.tsc --noEmit (if available)Zero TypeScript errors.
After commands pass:

Confirm route /services/furniture-appliance-removal-las-vegas appears in build output
Confirm one H1 exists on the page
Confirm heading hierarchy is H1 → H2 → H3 with no skipped levels
Confirm 10 FAQ Q&A pairs are visible in the FAQ section
Confirm FAQPage schema text matches all 10 visible FAQ answers exactly
Confirm HowTo schema step labels match visible step headings exactly
Confirm no AggregateRating or Review schema is present
Confirm LocalBusiness schema has no invented values — all unconfirmed fields are TODO/FLAG
Confirm canonical and OG URL are present (with TODO domain placeholder — acceptable for this stage)
Confirm all CTA links are present in all 4 placements
Confirm tap-to-call uses tel: protocol
Confirm all new internal links resolve to confirmed routes
Confirm no unrelated files were modified beyond the declared scope
Confirm sitemap includes the target route
Confirm navigation link exists (or report as already present)
Confirm #B82429 is in Tailwind config (or report as already present)

Schema validation: After build passes, validate FAQPage, HowTo, and LocalBusiness schema blocks in Google Rich Results Test before Gate 5 report is submitted. Report results including any warnings about TODO fields.

Section 16: File Scope Declaration
Files I will create:
None.
Files I will edit:

src/app/services/furniture-appliance-removal-las-vegas/page.tsx — primary edit
tailwind.config.ts — conditional (only if #B82429 is absent)
src/components/SiteHeader.tsx — conditional (only if nav link is absent)
src/app/sitemap.ts — conditional (only if route is absent from sitemap)

Files I will not touch:

All other service pages
Root layout
Homepage
Contact and quote pages
All shared components (QuoteForm, CTABlock, FAQSection, FAQItem, schema builders, JsonLd, MobileStickyCallBar, SiteHeader/Footer — except the single nav link addition if required)
Global styles
All config files except tailwind.config.ts conditional above
robots.txt
package.json
tsconfig.json


Section 17: Risks and Blockers
RiskSeverityMitigationFAQPage schema must be updated when FAQ content is extendedMediumGenerate schema from the same 10-Q array used for visible content. Do not allow schema and visible content to diverge.Direct Answer section structure — may need H2 addedMediumIf Direct Answer is embedded in hero without its own H2, add the H2 as a separate section. This preserves SEO signal and AEO structure."use client" + metadata conflictLow — already resolvedpage.tsx is a Server Component. QuoteForm and FAQItem are imported as Client Components. This pattern was validated in Live Validation 02. Do not break it.Q10 same-day answerMediumUse the conditional safe answer from Prompt 05. Do not claim same-day availability is confirmed. Use: "Same-day furniture pickup may be available in Las Vegas when scheduling slots are open. Contact us to check availability."Q6 pricing answerMediumUse the conditional safe answer from Prompt 05. Do not state a price range. Use: "Furniture and appliance removal pricing in Las Vegas depends on the number of items, accessibility, and job size. Pit Stop Junk Removal provides a free quote before any work begins."Brand color unknown until inspectionLowIf #B82429 not in config, single token addition to extend.colors. No cascading style risk.Nav link unknown until inspectionLowSingle addition only. No restructuring.Sitemap route unknown until inspectionLowSingle entry addition following existing pattern.AggregateRating — must remain absentNon-negotiableNo workaround. If any schema block containing AggregateRating is ever found, remove it immediately.

Gate 2 Summary
ItemDecisionApproachAudit and extend — confirmedTarget filesrc/app/services/furniture-appliance-removal-las-vegas/page.tsxNew files to createNoneFiles to edit1 required + 3 conditionalComponents to createNone — all existBiggest content gapFAQ count (6 → 10 required)Metadata changesNone requiredSchema changesFAQPage schema update for 10 Q&A pairsTODO/FLAG itemsAll preserved — none inventedAggregateRatingAbsent — must remain absentProduction blockersPhone, address, hours, domain, form endpoint — all carry forwardBuild commandsnpm run build, npm run lint, tsc --noEmit

Gate 2 Status
HARD STOP. Gate 2 is complete.
Gate 3 implementation may not begin until this build plan is explicitly approved.
Please confirm the following before Gate 3 proceeds:

The audit-and-extend approach is approved as described.
The scope of edits (4 conditional/required files) is approved.
The FAQ expansion from 6 to 10 questions is approved, using the Prompt 05 Q&A pairs including conditional safe answers for Q6 and Q10.
The no-new-components decision is approved.
The TODO/FLAG preservation plan is approved — no client data will be invented.

Do not create, edit, rename, move, or delete any files until Gate 2 is explicitly approved.

Site OS Master — Prompt 06 v2.1 — Gate 2 Build Plan
Workflow Test 01 — Core Mode
Output: workflow-tests/workflow-test-01-core-mode/outputs/prompt-06-gate-2-output.md