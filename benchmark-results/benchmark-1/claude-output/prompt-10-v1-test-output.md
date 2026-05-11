Prompt 10 Client Data Collection Report
Benchmark: Benchmark 1
Business: Pit Stop Junk Removal | Page: Furniture and Appliance Removal in Las Vegas, NV
Prompt Under Test: prompts/10-client-data-collection-prompt.md v1

1. Execution Depth
Selected depth: Standard
Rationale: This is a client data readiness and production values validation test, not a revenue-critical competitive build. Standard depth collects full website, SEO, schema, form, and launch values without the expanded brand, GEO, compliance, and technical depth of a deep run. Standard matches the depth used throughout the Benchmark 1 workflow (Prompts 06–09).

2. Gate 1 Source Review
HARD STOP — Source review completed before any values were finalized.
Sources Reviewed
SourceStatusbenchmark-results/benchmark-1/claude-output/live-validation-01/prompt-06-sample-build-output.mdReviewedbenchmark-results/benchmark-1/claude-output/live-validation-01/prompt-07-live-qa-output.mdReviewedbenchmark-results/benchmark-1/claude-output/prompt-08-v1-test-output.mdReviewedbenchmark-results/benchmark-1/claude-output/prompt-09-v1-test-output.mdReviewedbenchmark-results/benchmark-1/claude-output/live-validation-01/live-validation-evaluation.mdReviewedbenchmark-results/benchmark-1-service-page/06-claude-code-build-prompt-output-v1.mdReviewedbenchmark-results/benchmark-1-service-page/06-claude-code-build-prompt-output-v2.mdReviewed
Confirmed Source Data
The following data points appear consistently across source material and were used in benchmark build outputs without invention flags:

Business name: Pit Stop Junk Removal
Page type: Service page
Service: Furniture and Appliance Removal
Primary city: Las Vegas, NV
State/region: Nevada
Country: US
City field in schema: "Las Vegas" (addressLocality — confirmed safe, not invented)
State field in schema: "NV" (addressRegion — confirmed safe, not invented)
Service area cities named in copy and schema: Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Whitney, Boulder City, Mesquite, Clark County
Target route: /services/furniture-appliance-removal-las-vegas
Page goal: Generate quote requests
CTA: Request a Free Quote / Get My Free Quote
Form fields: Full Name, Phone Number, ZIP Code (3-field form)
Framework confirmed: Next.js 14 App Router (confirmed via live repository inspection in Live Validation 02)
Project location: sample-projects/pit-stop-junk-removal-site
Pricing range stated in FAQ copy: $75–$300 (stated as a typical range, flagged for client confirmation)
Items accepted (from brief, used in FAQ): Couches, sofas, mattresses, box springs, refrigerators, washers, dryers, dishwashers, ovens, stoves, bed frames, dressers, dining tables, office furniture, exercise equipment, hot tubs — all flagged for client confirmation
Service description (benchmark-safe): "Pit Stop Junk Removal removes furniture and appliances from homes, apartments, and commercial properties across the Las Vegas valley."
Same-day availability: Used in copy with conditional flag — NOT confirmed. Flagged in every source file as requiring client confirmation before launch.
Donation/recycling language: Used in FAQ with flag — NOT confirmed. Flagged for client review.

Missing Source Data
The following were consistently identified as TODO placeholders or missing across all source files:

Phone number — TODO_REAL_PHONE_NUMBER in 4 locations (3 in page.tsx, 1 in LocalBusiness schema)
Business address (street) — TODO_REAL_ADDRESS
ZIP code — TODO_REAL_ZIP
Business hours — TODO_REAL_HOURS
Form endpoint — TODO_FORM_ENDPOINT
Production domain — TODO_PRODUCTION_DOMAIN
Review rating — not present, correctly omitted
Review count — not present, correctly omitted
Reviewer names — not present, correctly omitted
Awards / certifications / licenses / insurance — flagged, not confirmed
Years in business — flagged, not confirmed
Jobs completed count — flagged, not confirmed
GBP URL — not provided
Social media URLs — not provided
Privacy policy URL — not provided
Terms URL — not provided
Analytics IDs (GA4, GTM, GSC) — not provided

Risk Notes

Same-day availability language was used in benchmark copy with a conditional fallback flag. It must not be used in production without client confirmation.
Pricing range ($75–$300) was used in FAQ copy. It must not be used in production without client confirmation.
Donation and recycling claims were used in FAQ copy. They must not be used in production without client confirmation.
LocalBusiness schema was built with 5 TODO placeholder fields. The schema is invalid for production in its current state.
The form has no real endpoint. The conversion path is non-functional.
No AggregateRating or Review schema was added — this is correct behavior and must not change unless real data is confirmed.


3. Gate 2 Data Confirmation Plan
HARD STOP — Confirmation plan completed before values were finalized.
Confirmed Data
Data confirmed across source material — safe to use in benchmark and production without modification:
FieldConfirmed ValueBusiness namePit Stop Junk RemovalServiceFurniture and Appliance RemovalPrimary locationLas Vegas, NVaddressLocalityLas VegasaddressRegionNVaddressCountryUSTarget route/services/furniture-appliance-removal-las-vegasPage goalGenerate quote requestsCTA textRequest a Free Quote / Get My Free QuoteForm fieldsFull Name, Phone Number, ZIP CodeService area (named)Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Whitney, Boulder City, Mesquite, Clark CountyFrameworkNext.js 14 App RouterProject pathsample-projects/pit-stop-junk-removal-siteAggregateRatingCorrectly absent — confirmed safeReview schemaCorrectly absent — confirmed safe
Needs Client Confirmation
Data used in benchmark copy but not confirmed — must be verified before production:
FieldUsed AsRiskSame-day availabilityUrgency line, FAQ Q3May not be offeredPricing range ($75–$300)FAQ Q1 copyMay be inaccurateItem list (full)Section 2, FAQ Q2May include items not acceptedDonation and recycling practicesFAQ Q5May be inaccurateDisconnection assistanceFAQ Q4May not be offeredIn-home floor serviceFAQ Q4May not be offeredTrust signals (licensed, insured, upfront pricing, eco-friendly)Trust sectionAll unconfirmedYears in businessTrust sectionNot providedJobs completedTrust sectionNot provided
Missing Required Data
Fields that are launch-critical and completely absent from all source material:
FieldRequired ForLaunch BlockerPhone numberTap-to-call, CTAs, LocalBusiness schemaYESBusiness address (street)LocalBusiness schema, GBP alignmentYESZIP codeLocalBusiness schema, GBP alignmentYESBusiness hoursLocalBusiness schema, GBP alignmentYESForm endpointLead capture, conversion pathYESProduction domainCanonical URL, OG URL, sitemap, robots.txtYESGBP URLSameAs schema, trust sectionRecommendedPrivacy policy URLForm consent, legal complianceYES (if form collects data)Analytics IDs (GA4, GTM)Launch tracking, GSC indexingYES for tracked launchGoogle Search Console accessIndex submissionYES for SEO launch
Optional Recommended Data
Not launch-blocking but recommended for full production readiness:
FieldValueSocial media URLsFacebook, Instagram — for SameAs schemaReview source URLGoogle reviews linkLogo fileFor Organization schema, GBP alignmentBrand colorsConfirmed hex valuesPrimary fontConfirmed typefaceBefore/after photosTrust sectionTestimonials (approved)Trust sectionBing Webmaster accessBing indexingMicrosoft Clarity IDBehavioral analyticsUTM strategyCampaign trackingSitemap URLSubmission to GSC and Bing
Launch Blockers
6 confirmed launch blockers. All are client-data dependent:

Phone number missing — tap-to-call broken, LocalBusiness schema incomplete
Address and ZIP missing — LocalBusiness schema invalid
Business hours missing — LocalBusiness schema invalid, GBP mismatch risk
Form endpoint missing — primary conversion path non-functional
Production domain missing — canonical URL broken, OG URL broken, sitemap impossible
Privacy policy missing — form collects personal data (name, phone, ZIP) without a linked policy


4. Business Identity
FieldStatusValueLegal business nameCONFIRMEDPit Stop Junk RemovalPublic-facing business nameCONFIRMEDPit Stop Junk RemovalDBAUNKNOWNNot providedBusiness categoryCONFIRMEDJunk Removal / Local ServiceBusiness description (benchmark)CONFIRMED (benchmark only)"Pit Stop Junk Removal removes furniture and appliances from homes, apartments, and commercial properties across the Las Vegas valley."Business description (production)NEEDS CONFIRMATIONClient must approve final copyPrimary offerCONFIRMEDFree quote for furniture and appliance removalUnique selling propositionNEEDS CONFIRMATIONNot provided — trust signals unconfirmedYears in businessMISSINGNot provided — do not use until confirmedOwner/founder nameMISSINGNot providedTeam infoMISSINGNot providedCertifications / licensesMISSINGNot provided — do not use until confirmedInsuranceMISSINGNot provided — do not use until confirmedAwards / recognitionsMISSINGNot provided
Schema uses confirmed: Organization, LocalBusiness (partial), Service

5. Contact Information
FieldStatusValueMain phone numberMISSING — LAUNCH BLOCKERNot providedClick-to-call formatMISSINGDepends on phoneMain emailMISSINGNot providedForm path (CTA)CONFIRMED (benchmark)On-page formForm endpointMISSING — LAUNCH BLOCKERNot providedPreferred lead capture methodCONFIRMEDQuote request form + tap-to-callContact page URLUNKNOWN/contact route not confirmed as existingGBP URLMISSINGNot provided

6. Address and Location Data
FieldStatusValueStreet addressMISSING — LAUNCH BLOCKERNot providedSuite/unitUNKNOWNNot providedCityCONFIRMEDLas VegasStateCONFIRMEDNVZIP codeMISSING — LAUNCH BLOCKERNot providedCountryCONFIRMEDUSService-area business or storefrontUNKNOWNNot confirmed — schema streetAddress omittedWhether address is publicUNKNOWNNot confirmedGBP address matchCANNOT CONFIRMNo GBP URL providedLatitude/longitudeMISSINGNot providedGoogle Maps embedMISSINGNot provided

7. Business Hours
FieldStatusValueStandard business hoursMISSING — LAUNCH BLOCKERNot providedEmergency hoursUNKNOWNNot confirmedHoliday hoursUNKNOWNNot confirmedSame-day availabilityNEEDS CONFIRMATIONUsed in benchmark copy — must confirmAppointment-only statusUNKNOWNNot confirmedHours matching GBPCANNOT CONFIRMNo GBP URL or hours provided
Schema rule: Business hours must match Google Business Profile exactly when used in LocalBusiness schema. Cannot be added until confirmed.

8. Services
FieldStatusNotesPrimary serviceCONFIRMEDFurniture and Appliance RemovalService descriptionCONFIRMED (benchmark)Safe for benchmark — needs client approval for productionService URL slugCONFIRMED/services/furniture-appliance-removal-las-vegasItem list (used in copy)NEEDS CONFIRMATIONFull list used in benchmark — client must confirm all items acceptedSame-day serviceNEEDS CONFIRMATION — LAUNCH RISKUsed in copy with conditional flagEmergency serviceUNKNOWNNot addressed in source materialPricing modelNEEDS CONFIRMATION$75–$300 range used in FAQ — client must confirmFree quoteCONFIRMED (benchmark)Used throughout — safeWarranty or guaranteeMISSINGNot providedDisconnection assistanceNEEDS CONFIRMATIONUsed in FAQ Q4Eco-friendly / donation / recyclingNEEDS CONFIRMATIONUsed in FAQ Q5 with flagServices NOT offeredUNKNOWNNot statedHazardous materials handlingNEEDS CONFIRMATIONFreon note used in FAQ — client must confirm handling policy

9. Locations and Service Areas
FieldStatusValuePrimary cityCONFIRMEDLas Vegas, NVService area citiesCONFIRMED (benchmark)Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Whitney, Boulder City, MesquiteClark CountyCONFIRMED (benchmark)Used in copy and schemaGBP service areasUNKNOWNNot providedZIP codes servedMISSINGNot providedAreas NOT servedUNKNOWNNot statedPhysical office locationUNKNOWNAddress not confirmedService radiusUNKNOWNNot stated
Note: City and service area names are safe for benchmark use. For production, client must confirm the full service area is accurate, especially Boulder City and Mesquite which are geographically distant from central Las Vegas.

10. Website Architecture
PageStatusNotesService page: /services/furniture-appliance-removal-las-vegasBUILT (benchmark)page.tsx exists in sample projectHomepageUNKNOWNcreate-next-app default onlyAbout pageUNKNOWNNot confirmed to existContact pageUNKNOWN/contact route not confirmedServices parent pageUNKNOWN/services route not confirmedIndividual service pages (other)UNKNOWNNo confirmed routesFAQ pageUNKNOWNFAQs are on service page onlyBlogUNKNOWNNot in scope for this benchmarkSitemapMISSING — LAUNCH BLOCKERapp/sitemap.ts not createdrobots.txtMISSING — LAUNCH BLOCKERpublic/robots.txt not createdHeader componentMISSINGSiteHeader.tsx not builtFooter componentMISSINGSiteFooter.tsx not built404 pageUNKNOWNNot addressed

11. CTAs and Conversion Paths
FieldStatusValuePrimary CTACONFIRMEDRequest a Free Quote / Get My Free QuotePhone CTABLOCKEDTap-to-call present — phone number missingForm CTABLOCKEDForm built — endpoint missingCTA button textCONFIRMED"Get My Free Quote"CTA placementCONFIRMED (benchmark)Hero, mid-page, bottomThank-you pageMISSINGNot createdConfirmation messageUNKNOWNSimulated success only — real behavior undefinedMobile sticky call barPARTIALLY BUILTComponent built — phone number missingEmergency CTAUNKNOWNNot in scope

12. Forms and Lead Capture
FieldStatusValueForm providerMISSING — LAUNCH BLOCKERNot determinedForm endpointMISSING — LAUNCH BLOCKERTODO_FORM_ENDPOINT in QuoteForm.tsxRequired fieldsCONFIRMEDFull Name, Phone Number, ZIP CodeOptional fieldsCONFIRMED (benchmark)None — 3-field form onlyHidden tracking fieldsUNKNOWNNot implementedConsent checkboxMISSINGNot present in current buildSMS opt-in languageMISSINGNot presentEmail opt-in languageMISSINGNot presentPrivacy policy link in formMISSING — LAUNCH BLOCKERNo privacy policy URL existsThank-you pageMISSINGNot createdNotification emailUNKNOWNNot configuredSpam protectionUNKNOWNNot implementedCRM/GHL webhookUNKNOWNNot provided
Launch blocker: The form collects name and phone number but has no consent language and no linked privacy policy. This is a legal compliance gap.

13. Brand and Design
FieldStatusNotesLogo fileMISSINGNot providedBrand colorsUNKNOWNTailwind defaults used in benchmarkAccent colorsUNKNOWNNot specifiedPrimary fontUNKNOWNNext.js/Tailwind defaultsDesign styleUNKNOWNNot specifiedTone of voiceINFERREDDirect, local, service-focused — not formally confirmedImage styleUNKNOWNPlaceholder paths usedPhotographyMISSINGNo actual photos providedAccessibility requirementsUNKNOWNStandard accessibility followed in benchmark

14. SEO and Keyword Data
FieldStatusValuePrimary keywordCONFIRMED (benchmark)"furniture and appliance removal Las Vegas"Secondary keywordsCONFIRMED (benchmark)"junk removal Las Vegas", "furniture pickup Las Vegas", "appliance removal Las Vegas"Local modifiersCONFIRMED (benchmark)Henderson, North Las Vegas, Summerlin, Clark CountyVoice search queriesCONFIRMED (benchmark)"Who picks up old furniture in Las Vegas?"H1CONFIRMED"Furniture and Appliance Removal in Las Vegas"Meta titleCONFIRMED (benchmark)"Furniture and Appliance Removal in Las VegasMeta descriptionCONFIRMED (benchmark)Service + location + CTA — benchmark safeCanonical URLBLOCKEDRequires confirmed production domainOG URLBLOCKEDRequires confirmed production domainrobots metaCONFIRMED (benchmark)index, follow — correctExisting rankingsUNKNOWNNot providedPages to avoid duplicatingUNKNOWNNo site audit available

15. AEO, FAQ, and LLM Readiness
FieldStatusValueFAQ questionsCONFIRMED (benchmark)6 FAQs built — Q3, Q5 flagged for client reviewFAQPage schemaCONFIRMED (benchmark)Present — mirrors visible textDirect-answer structureCONFIRMEDEach answer starts with direct responsePAA alignmentCONFIRMED (benchmark)Questions match common PAA patternsVoice search phrasesCONFIRMED (benchmark)Included in entity blockAI citation structureCONFIRMED (benchmark)Entity block present, service descriptions clearSame-day FAQ (Q3)NEEDS CONFIRMATIONConditional fallback in place — must confirm before productionPricing FAQ (Q1)NEEDS CONFIRMATION$75–$300 range — must confirmDonation/recycling FAQ (Q5)NEEDS CONFIRMATIONMust confirm practicesGBP Q&AUNKNOWNNo GBP URL provided

16. Schema Data
Schema TypeStatusNotesLocalBusinessINCOMPLETE — LAUNCH BLOCKERtelephone, streetAddress, postalCode, openingHoursSpecification all TODOServiceCONFIRMED (benchmark)Safe — no placeholder fieldsFAQPageCONFIRMED (benchmark)Mirrors visible text — benchmark safeHowToCONFIRMED (benchmark)Present — conditional confirmed by 3-step sectionBreadcrumbListCONFIRMED (benchmark)Matches visible breadcrumbWebSiteNOT PRESENTNot builtOrganizationNOT PRESENTNot builtAggregateRatingCORRECTLY ABSENTMust remain absent until real data confirmedReviewCORRECTLY ABSENTMust remain absent until real data confirmedSameAsMISSINGNo social or GBP URLs provided
Confirmed LocalBusiness fields (safe):

name: "Pit Stop Junk Removal" ✅
addressLocality: "Las Vegas" ✅
addressRegion: "NV" ✅
addressCountry: "US" ✅
areaServed: [Las Vegas metro list] ✅

Blocked LocalBusiness fields (do not use):

telephone ❌
streetAddress ❌
postalCode ❌
openingHoursSpecification ❌
url (production domain) ❌
sameAs (no URLs confirmed) ❌


17. Social Proof and Trust
FieldStatusNotesTestimonialsMISSINGNot provided — do not fabricateReview sourceMISSINGNot providedReview countMISSINGDo not useRating valueMISSINGDo not useReviewer namesMISSINGDo not useCase studiesMISSINGNot providedBefore/after examplesMISSINGNot providedCertificationsMISSINGNot provided — do not claimLicensesMISSINGNot provided — do not claimInsuranceMISSINGNot provided — do not claimPartner logosMISSINGNot providedGuaranteesMISSINGNot provided — do not claimSatisfaction policyMISSINGNot providedYears in businessMISSINGNot providedJobs completedMISSINGNot provided
Safety rule applied: Trust section in benchmark build was rendered with placeholder comments only. No fake trust signals were used. This must remain the case in production until all trust data is client-confirmed.

18. Legal and Compliance
FieldStatusNotesPrivacy policy URLMISSING — LAUNCH BLOCKERForm collects personal data — policy requiredTerms and Conditions URLMISSINGNot providedSMS opt-in languageMISSING — LAUNCH BLOCKERForm collects phone — SMS consent language requiredEmail opt-in languageMISSINGDepends on form follow-up automationCookie noticeUNKNOWNNot addressedAccessibility statementUNKNOWNStandard WCAG 2.1 AA followed in benchmarkIndustry disclaimersUNKNOWNHazardous materials note in FAQ is a start — needs review
Launch blocker: The form in its current state collects a phone number without SMS consent language or a linked privacy policy. This must be resolved before the page goes live in any form.

19. Analytics, Tracking, and Indexing
FieldStatusNotesGoogle Analytics 4 IDMISSINGNot providedGoogle Tag Manager IDMISSINGNot providedGoogle Search ConsoleMISSINGNo access confirmedBing Webmaster ToolsMISSINGNot providedMicrosoft ClarityMISSINGNot providedMeta PixelMISSINGNot providedGoogle Ads conversion IDMISSINGNot providedCall tracking numberMISSINGNo phone confirmedSitemap URLMISSING — LAUNCH BLOCKERapp/sitemap.ts not createdrobots.txtMISSING — LAUNCH BLOCKERpublic/robots.txt not createdCanonical domainMISSING — LAUNCH BLOCKERProduction domain not confirmedPreferred domain versionUNKNOWNwww vs non-www not statedRedirect requirementsUNKNOWNNot addressednoindex pagesUNKNOWNNo full site architecture confirmed

20. Hosting, Domain, and Deployment
FieldStatusNotesProduction domainMISSING — LAUNCH BLOCKERNot providedHosting providerUNKNOWNNot providedDeployment platformUNKNOWNNot provided (Vercel likely given Next.js — unconfirmed)GitHub repoCONFIRMED (benchmark)SedrickHarris/site-os-master (contains sample project)BranchUNKNOWNNot confirmedBuild commandCONFIRMED (benchmark)npm run build — confirmed passingOutput directoryUNKNOWN.next — standard for Next.js — not explicitly confirmedDNS providerUNKNOWNNot providedSSL statusUNKNOWNNot confirmedEnvironment variablesMISSINGForm endpoint will require env var when confirmed404 pageUNKNOWNNot addressedRollback planUNKNOWNNot addressed

21. Client Approval and Review
FieldStatusNotesClient approval contactUNKNOWNNot providedReview deadlineUNKNOWNNot providedLaunch deadlineUNKNOWNNot providedCopy approvalNOT OBTAINEDBenchmark copy flagged — not approvedSchema data approvalNOT OBTAINEDSchema has unresolved TODO fieldsService area approvalNOT OBTAINEDService area list not confirmed by clientPricing/offer approvalNOT OBTAINED$75–$300 range not confirmedFAQ approvalNOT OBTAINEDQ3, Q5 conditionally flaggedTrust section approvalNOT OBTAINEDAll trust signals are placeholderLegal page approvalNOT OBTAINEDNo legal pages exist

22. Production Values Summary
Safe to Use Now
The following values are confirmed and safe for production use without modification:

Business name: Pit Stop Junk Removal
Service name: Furniture and Appliance Removal
Primary city: Las Vegas, NV
addressLocality, addressRegion, addressCountry
Target route slug: /services/furniture-appliance-removal-las-vegas
Service area city list (benchmark — subject to client confirmation of full accuracy)
Page goal: Generate quote requests
CTA text: Request a Free Quote / Get My Free Quote
Form field names: Full Name, Phone Number, ZIP Code (3-field)
Primary keyword: "furniture and appliance removal Las Vegas"
H1: "Furniture and Appliance Removal in Las Vegas"
Meta title structure (minus production domain)
Service schema (complete)
FAQPage schema (benchmark-safe — Q3/Q5 need client confirmation)
HowTo schema (benchmark-safe — matches visible steps)
BreadcrumbList schema (benchmark-safe — domain needed for production)
AggregateRating: confirmed absent — do not add
Review schema: confirmed absent — do not add

Do Not Use Until Confirmed
The following values must not appear in production without client confirmation:
ValueReasonSame-day availabilityNot confirmed — conditional flag in placePricing range $75–$300Not confirmedDonation/recycling claimNot confirmedDisconnection assistanceNot confirmedAny trust signal (licensed, insured, guaranteed)Not confirmedYears in businessNot providedJobs completed countNot providedReview ratings or countsNot providedReviewer namesNot providedPhone number in any formatNot providedStreet addressNot providedZIP codeNot providedBusiness hoursNot providedHazardous materials handling policyNot confirmedProduction domain in any URLNot provided
Required Before Prompt 06
Prompt 06 can build a benchmark-quality page without these — but a production-intent build requires:

Confirmed phone number (tap-to-call cannot be functional)
Confirmed form endpoint (form cannot convert)
Confirmed same-day availability (urgency copy must be accurate)

If building for benchmark only, Prompt 06 can proceed with TODO placeholders. If building for a real client page from day one, collect these first.
Required Before Prompt 08
Prompt 08 (Production Fix / TODO Resolution) is completely blocked without:

Confirmed phone number
Confirmed business address + ZIP
Confirmed business hours (matching GBP)
Confirmed form endpoint
Confirmed production domain

Prompt 08 correctly refused to make any changes in the benchmark test because none of these were available. This behavior was correct.
Required Before Prompt 09
Prompt 09 (Final Launch QA) requires all of the above plus:

Sitemap created (app/sitemap.ts)
robots.txt created (public/robots.txt)
SiteHeader.tsx built with real phone
SiteFooter.tsx built with real contact data
Privacy policy page live and linked from form
SMS consent language in form
Production domain confirmed in canonical and OG URLs
GA4 or GTM installed
GSC access confirmed
Client approval on copy, FAQs, trust section, service area, pricing, and same-day claims
AggregateRating confirmed absent in final schema


23. Client Questions
The following questions must be sent to the client before any production work proceeds:
Contact and Identity

What is your business phone number? (This will appear on the website as a tap-to-call link and in Google schema.)
What is your business address? (Street address, city, state, ZIP — required for Google schema and Google Business Profile alignment.)
Should your street address be publicly visible on the website, or is this a service-area business where only the city/region shows?

Business Hours
4. What are your standard business hours? (Must match your Google Business Profile exactly.)
5. Do you offer emergency or after-hours service? If yes, what are those hours?
Services and Claims
6. Do you offer same-day furniture and appliance removal in Las Vegas? (Currently in the website copy — must confirm before launch.)
7. Is the pricing range of $75–$300 accurate for furniture removal? (Currently in the FAQ — must confirm or provide the correct range or remove.)
8. Do you accept all the following items? Please confirm or correct: couches, sofas, mattresses, box springs, refrigerators, washers, dryers, dishwashers, ovens, stoves, bed frames, dressers, dining tables, office furniture, exercise equipment, hot tubs.
9. Do you sort items for donation and recycling? (Currently in the FAQ — must confirm.)
10. Do you assist with appliance disconnection? (Currently in the FAQ — must confirm.)
11. How do you handle appliances with Freon? Do you offer special handling or refer to a specialist?
12. Do you serve Boulder City and Mesquite? (These are included in the current service area copy.)
Trust and Credentials
13. How many years have you been in business?
14. Are you licensed and insured? If yes, can you share the license number or insurer for display on the website?
15. Approximately how many jobs have you completed?
16. Do you have a satisfaction guarantee or any warranty on your service?
17. Do you have testimonials or customer reviews we can use on the website? (Please provide approved quotes and first name / city only.)
18. What is your Google Business Profile URL?
19. What is your average Google review rating and total review count?
Website and Technical
20. What is the production domain for this website? (e.g., pitstopjunkremoval.com)
21. Where will the quote form be submitted? (Options: Netlify Forms, Formspree, HubSpot, GoHighLevel webhook, custom API, or other.)
22. Do you have a GoHighLevel or CRM account the form should connect to?
23. Do you have a Google Analytics 4 property or Google Tag Manager account?
24. Do you have Google Search Console access set up for this domain?
Legal
25. Do you have an existing Privacy Policy page? If not, one must be created before the website goes live — the form collects name and phone number.
26. Do you have Terms and Conditions? (Recommended before launch.)
27. Will the website send SMS or email follow-ups to form leads? (Determines consent language required in the form.)
Brand and Design
28. Do you have a logo file? (SVG or PNG preferred.)
29. Do you have brand colors or a style guide?
30. Are there any competitor websites whose design or tone you like or dislike?

24. Recommended Next Action
NEEDS CLIENT DATA BEFORE PROMPT 06 (for production build)
READY FOR PROMPT 06 (for continued benchmark testing only)
Explanation
The benchmark build produced by Prompt 06 v2.1 is structurally complete and benchmark-valid. The page can be used for continued workflow testing, prompt evaluation, and benchmark purposes without additional client data.
However, a production build — a real page intended for a real client website — cannot safely begin without:

Phone number (tap-to-call is the primary mobile conversion path)
Form endpoint (the primary desktop and mobile conversion path)
Confirmed same-day availability (urgency copy is incorrect without confirmation)

These three items are required before Prompt 06 is run on a production project. The remaining 7 launch blockers (address, ZIP, hours, domain, sitemap, robots.txt, privacy policy) are required before Prompt 08 and Prompt 09.
This package is not ready for production launch. It is correctly and intentionally blocked.

Final Prompt 10 Test Decision
PASS: Prompt 10 v1 is ready to use as the Core Mode Client Data Collection prompt.
Reason
Prompt 10 v1 performed all required functions correctly in this test:

Gate 1 completed a thorough source review across all 7 source files before any values were finalized.
Gate 2 produced a clear confirmation plan separating confirmed, needs-confirmation, missing, and optional data into distinct categories.
All 22 required data categories were completed — none collapsed or skipped.
All 6 confirmed launch blockers were identified and named explicitly.
The "safe to use now" vs. "do not use until confirmed" separation is clean and actionable.
The three pre-Prompt-06 requirements, five pre-Prompt-08 requirements, and 16 pre-Prompt-09 requirements are clearly enumerated.
30 client questions were produced — specific, sequenced, and directly tied to named launch blockers.
The recommended next action correctly returns NEEDS CLIENT DATA BEFORE PROMPT 06 for production, while allowing continued benchmark testing.
No phone numbers, addresses, ratings, reviews, hours, guarantees, certifications, or prices were invented.
The prompt correctly did not return READY FOR PROMPT 06 in a production context, and did not mark any launch-blocked items as resolved.

The prompt fulfilled its design purpose: preventing the workflow from reaching Prompt 08 and Prompt 09 with missing launch-critical data. One minor enhancement is recommended for future versions — a structured "Minimum Viable Data Set" summary block that gives the client a single-glance checklist of the 6 items needed before any production work begins. This is an enhancement, not a defect. The prompt passes in its current v1 form. 