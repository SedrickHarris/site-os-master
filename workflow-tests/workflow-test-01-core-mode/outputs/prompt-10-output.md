Prompt 10 Client Data Collection Report
Business: Pit Stop Junk Removal
Page: Furniture and Appliance Removal in Las Vegas, NV
Route: /services/furniture-appliance-removal-las-vegas
Output Path: workflow-tests/workflow-test-01-core-mode/outputs/prompt-10-output.md
Prompt Version: Prompt 10 v1
Run Type: Post-Prompt-09 client data collection

1. Execution Depth
Selected depth: Standard
Rationale: This is the first client data collection pass for a normal-priority local service page that has completed full upstream workflow (Prompts 01–09). All technical build work is done. The only remaining production blockers are unconfirmed client data. Standard depth covers all required launch values without expanding into deep brand, multi-location, or franchise-level data collection. Deep depth is not warranted.

2. Gate 1: Source Review
Sources Reviewed
SourceTypePrompt 01 InputOriginal client brief — business, service, location, brand, goalsPrompt 07 v1.3 QA Rerun ReportQA audit — full list of production blockers and TODO itemsPrompt 08 Fix Application SummaryFix log — confirmed fixes applied, carry-forward itemsPrompt 09 Entity and Topical Authority ReviewEntity map — flagged missing schema fields, trust gaps, content cluster gaps
Confirmed Source Data
The following data was confirmed across one or more source files:
Business identity:

Business name: Pit Stop Junk Removal
Business type: Junk removal — residential and commercial
Primary service (this page): Furniture and appliance removal
Service page route: /services/furniture-appliance-removal-las-vegas
Primary city: Las Vegas, NV
Region: Clark County, Nevada

Service list (confirmed from Prompt 01 input):

Residential junk removal
Commercial junk removal
Furniture and appliance removal
Storage unit and warehouse cleanout
Yard waste and debris removal
Property turnovers and evictions
Construction cleanup
Light demolition and disposal
Single-item pickup
Same-day and emergency junk removal (listed — not confirmed for copy use)
Eco-friendly junk removal and disposal

Service area (display — confirmed from Prompt 01 input):
Las Vegas, Henderson, North Las Vegas, Boulder City, Enterprise, Summerlin, Green Valley, Spring Valley, Paradise, and surrounding Clark County areas
Brand:

Brand colors: Red #B82429, Black, White
Brand identity: Racing-inspired, checkered flag styling

Primary CTA: Request a Free Quote
Secondary CTA: Call Now
Known differentiators:

Local Las Vegas company
Fast and flexible scheduling
Residential and commercial service
Eco-friendly disposal
Clark County coverage

Build status:

Build: PASS
Lint: PASS
TypeScript: PASS
12 required fixes applied (Prompt 08)
Page is implementation-complete pending client data

Missing Source Data
The following data was not found in any source file and has never been provided:

Phone number
Email address
Street address
Suite/unit number
ZIP code
Business hours
Production domain
Form endpoint / CRM webhook
Privacy policy URL
Terms and conditions URL
Google Business Profile URL
Google Analytics ID / GTM ID
Microsoft Clarity ID
Reviews / rating value / review count
Testimonials
License confirmation
Insurance confirmation
Years in business
Founder or owner name
Same-day availability confirmation (listed as a service but not confirmed for copy use)
Pricing / pricing range
Specific recycling or donation partners
Items not accepted list
Hero image asset
Preferred domain version (www vs non-www)
SSL status
Hosting provider / deployment platform

Risk Notes

Same-day availability appears in the Prompt 01 service list. It was explicitly flagged as unconfirmed in Prompt 04 and removed from all visible copy in Prompt 08. It must not be reinstated until the client confirms it.
No contact data of any kind has been provided in 9 prompts of workflow. Phone, email, and address are all missing. This is the most significant production risk.
The form in the build collects Name, Phone, and ZIP. Collecting personal data without a confirmed privacy policy URL is a legal compliance issue that must be resolved before launch.
The client has not confirmed or denied same-day service, pricing, licensing, insurance, years in business, or reviews. None of these may be added to the page until confirmed.


3. Gate 2: Data Confirmation Plan
Confirmed Data
The following is safe to use in production copy, schema, and build files now:
ItemValueSourceBusiness namePit Stop Junk RemovalPrompt 01 inputBusiness typeJunk removal — residential and commercialPrompt 01 inputService (this page)Furniture and appliance removalPrompt 01 inputPrimary cityLas Vegas, NVPrompt 01 inputCountyClark County, NevadaPrompt 01 inputService area cities (display)Las Vegas, Henderson, North Las Vegas, Boulder City, Enterprise, Summerlin, Green Valley, Spring Valley, ParadisePrompt 01 inputBrand red#B82429Prompt 01 inputBrand identityRacing-inspired, red/black/white, checkered flagPrompt 01 inputPrimary CTARequest a Free QuotePrompt 01 inputSecondary CTACall NowPrompt 01 inputService listFull list from Prompt 01 (excluding same-day copy use)Prompt 01 inputDifferentiatorsLocal company, flexible scheduling, residential + commercial, eco-friendly disposalPrompt 01 inputPage route/services/furniture-appliance-removal-las-vegasPrompt 05/06Schema types in useLocalBusiness, Service, FAQPage, HowTo, BreadcrumbListPrompts 05–08FAQ set (10 questions)Prompt 04 approved setPrompt 08Direct answer paragraphPrompt 04 Fix 5 approved textPrompt 08Meta title"Furniture and Appliance Removal in Las Vegas, NV | Pit Stop Junk Removal"Prompt 08Meta descriptionPrompt 04 Fix 1 approved 154-character textPrompt 08
Needs Client Confirmation
The following data exists in some form but has not been confirmed by the client and must not be used until confirmed:
ItemCurrent StatusRisk if Used Without ConfirmationSame-day availabilityListed in Prompt 01 service listUnsupported claim — removed from copy in Prompt 08; do not reinstateEco-friendly disposal specificsConfirmed as differentiator — specific partners or statistics not confirmedOverstating recycling/donation practices without specificsService area for schema (areaServed)Display list confirmed; schema-safe list not confirmedareaServed field in LocalBusiness schema still a TODOService list completenessPrompt 01 list used; client has not reviewed for accuracyPage may list services the business does not actually offer
Missing Required Data
The following data is required for production launch and has not been provided:
ItemImpact CategoryProduction BlockerPhone numberConversion, schema, GBP NAPYESStreet addressSchema, GBP NAP, Apple MapsYESZIP codeSchema, GBP NAPYESBusiness hoursSchema, GBP NAPYESProduction domainAll absolute URLs, canonical, sitemapYESForm endpointLead capture functionalityYESPrivacy policy URLLegal compliance for formYESGBP URLsameAs schema fieldNO (strong recommendation)Reviews / rating / countAggregateRating schemaNO (cannot be added without real data)License confirmationTrust section, E-E-A-TNOInsurance confirmationTrust section, E-E-A-TNOYears in businessDifferentiators, trustNOTestimonialsTrust section slotsNOHero image assetVisual entity, engagementNOSame-day confirmationFAQ Q10, hero conditionalNOPricing guidanceFAQ Q6, commercial intentNORecycling / donation partnersFAQ Q5, eco-friendly trustNOItems not acceptedFAQ completeness, Section 3NOGA4 / GTM IDAnalytics, conversion trackingNO (required before meaningful traffic analysis)GSC verificationIndexing readinessNO (required after domain confirmed)Bing WebmasterIndexing readinessNOEmail addressContact completenessNO
Optional Recommended Data
The following data is not launch-blocking but would meaningfully improve performance:

Named donation or recycling partners (strengthens FAQ Q5 and AI citation value)
Founder or owner name approved for public use (E-E-A-T signal)
Before/after job photos (trust section, visual content)
Social media profile URLs for sameAs schema array
Yelp, BBB, or Angi profile URL for sameAs schema array
Call tracking number separate from main phone (attribution)
Case studies or notable jobs (commercial audience)

Minimum Viable Data Set
The following items are the minimum required before the page can proceed to production launch. Nothing can be substituted or invented for these items:
#ItemRequired For1Business phone numberTap-to-call CTAs (3 locations), mobile sticky bar, LocalBusiness schema telephone, GBP NAP match2Street address + suiteLocalBusiness schema streetAddress, GBP NAP, Apple Maps3ZIP codeLocalBusiness schema postalCode, GBP NAP4Business hoursLocalBusiness schema openingHoursSpecification, voice search "are they open now"5Production domainCanonical URL, OG URL, BreadcrumbList, sitemap.ts, LocalBusiness url field6Form endpoint or confirmed lead capture pathQuoteForm.tsx — form is currently non-functional7Privacy policy URLLegal compliance — form collects Name and Phone8Service list confirmationClient review of Prompt 01 service list for accuracy before launch9Service area confirmationareaServed schema field; confirm display list is accurate10Primary CTA confirmation"Request a Free Quote" — confirmed; document client sign-off
Launch Blockers
#BlockerWhy It Blocks ProductionClient Data RequiredCan Developer Resolve Without Client1Phone number not confirmedTap-to-call links are non-functional; LocalBusiness schema telephone is empty; GBP NAP cannot matchYESNO2Street address and ZIP not confirmedLocalBusiness schema streetAddress and postalCode are empty; GBP NAP cannot match; Apple Maps cannot resolve locationYESNO3Business hours not confirmedLocalBusiness schema openingHoursSpecification is empty; voice search "are they open" returns no resultYESNO4Production domain not confirmedCanonical, OG URL, BreadcrumbList, sitemap.ts, and LocalBusiness url all use TODO_PRODUCTION_DOMAIN placeholderYESNO5Form endpoint not confirmedQuoteForm.tsx lead capture form is non-functional; primary lead generation path is brokenYESNO6Privacy policy URL not confirmed or createdForm collects Name and Phone without a linked privacy policy — legal compliance issueYES (or developer creates policy page)PARTIAL — developer can create generic policy page; client must review and approve

4. Business Identity
FieldStatusValueLegal business nameNEEDS CONFIRMATIONMay differ from public-facing namePublic-facing business name✅ CONFIRMEDPit Stop Junk RemovalDBANEEDS CONFIRMATIONUnknownBusiness category✅ CONFIRMEDJunk removal — residential and commercialBusiness description✅ CONFIRMED (working)Local Las Vegas junk removal company serving homes and businesses across Clark CountyPrimary offer✅ CONFIRMEDFurniture and appliance removal; general junk removalUSP✅ CONFIRMED (working)Local Las Vegas company, fast and flexible, eco-friendly disposal, residential and commercialYears in business❌ MISSINGDo not use until confirmedFounder / owner name❌ MISSINGDo not publish without client approvalTeam information❌ MISSINGDo not publish without client approvalCredentials / certifications / licenses❌ MISSINGDo not publish until confirmedInsurance❌ MISSINGDo not publish until confirmedAwards / recognitions❌ MISSINGDo not publish until confirmed
Client question: What is the legal registered business name? Is it the same as "Pit Stop Junk Removal" or is there a DBA? How many years has the business been operating? Is the owner or founder name approved for use on the website?

5. Contact Information
FieldStatusValueMain phone number❌ MISSING — LAUNCH BLOCKERNot providedFormatted phone number❌ MISSINGNot providedClick-to-call format❌ MISSINGWill be built from confirmed numberMain email address❌ MISSINGNot providedSales / quote email❌ MISSINGNot providedSMS-capable numberNEEDS CONFIRMATIONMay be same as mainEmergency phoneNEEDS CONFIRMATIONMay be same as mainContact page URLNEEDS CONFIRMATIONRoute not yet confirmedPreferred contact methodNEEDS CONFIRMATIONPhone vs. form vs. email
Production blocker: Phone number missing. Tap-to-call links (tel:TODO_PHONE_NUMBER) are in the build in 4 locations. These must be replaced before launch.
Client question: What is your main business phone number? Is it SMS-capable? Do you have a separate number for emergency or after-hours calls? What is your preferred way for customers to reach you — phone call, text, or web form?

6. Address and Location Data
FieldStatusValueStreet address❌ MISSING — LAUNCH BLOCKERNot providedSuite / unit❌ MISSINGNot providedCity✅ CONFIRMEDLas VegasState✅ CONFIRMEDNVZIP code❌ MISSING — LAUNCH BLOCKERNot providedCountry✅ CONFIRMEDUSBusiness type (storefront vs. SAB)NEEDS CONFIRMATIONService area business (SAB) likely — confirm whether address should be publicMailing address (if different)NEEDS CONFIRMATIONUnknownGoogle Maps embed URL❌ MISSINGNot providedGBP address match❌ MISSINGGBP URL not provided; cannot verify match
Production blocker: Address and ZIP missing. LocalBusiness schema streetAddress and postalCode fields cannot be populated. GBP NAP consistency cannot be verified.
Important note: If Pit Stop Junk Removal is a service-area business that does not want to publish a physical address, the client must explicitly confirm "service-area business — do not publish address." In that case, address fields are omitted from the LocalBusiness schema rather than left empty. This is a valid configuration — but requires explicit confirmation.
Client question: What is your business street address and ZIP code? Is this a service-area business where you go to customers (no public-facing storefront address), or do customers come to a physical location? If SAB, do you want your address hidden from the website and schema?

7. Business Hours
FieldStatusValueStandard hours❌ MISSING — LAUNCH BLOCKERNot providedEmergency / after-hoursNEEDS CONFIRMATIONUnknownHoliday hoursNEEDS CONFIRMATIONUnknownAppointment-only statusNEEDS CONFIRMATIONUnknownSame-day / emergency availabilityNEEDS CONFIRMATIONListed in service input; not confirmed for copy or schema useGBP hours match❌ MISSINGGBP not provided; cannot verify
Production blocker: Business hours missing. LocalBusiness schema openingHoursSpecification is currently an empty array []. Voice search queries for "is Pit Stop Junk Removal open" will return no result.
Schema requirement: Hours in LocalBusiness schema must match Google Business Profile hours exactly.
Client question: What are your standard business hours for each day of the week? Do you take calls or bookings outside those hours for emergencies? Are you available on holidays? Do you offer same-day or next-day pickups — and if so, what days and cutoff times?

8. Services
ServiceStatusNotesFurniture and appliance removal✅ CONFIRMEDPrimary service for this pageResidential junk removal✅ CONFIRMEDParent serviceCommercial junk removal✅ CONFIRMEDCo-serviceStorage unit cleanout✅ CONFIRMEDCross-link target from this pageYard waste and debris removal✅ CONFIRMEDSeparate serviceProperty turnovers and evictions✅ CONFIRMEDHigh-value segmentConstruction cleanup✅ CONFIRMEDCommercial segmentLight demolition and disposal✅ CONFIRMEDCommercial segmentSingle-item pickup✅ CONFIRMEDFAQ Q7 covers thisSame-day / emergency removalNEEDS CONFIRMATIONListed — not confirmed for visible copyEco-friendly removal and disposal✅ CONFIRMEDConfirmed differentiator — specific practices not confirmedItems not accepted❌ MISSINGNot provided; needed for FAQ and Section 3 copyPricing model (free quote, flat rate, weight-based)❌ MISSINGNeeded for FAQ Q6Warranty / guarantee details❌ MISSING"No Hidden Fees" removed; no replacement guarantee confirmedAppliance disconnection serviceNEEDS CONFIRMATIONFAQ Q8 answer states this is included — confirmRefrigerant handlingNEEDS CONFIRMATIONImplied by appliance removal — confirm proper disposal process
Client question: Do you offer same-day or next-day pickups? What items do you NOT accept (hazardous materials, paint, chemicals, tires, propane tanks, etc.)? Do you handle appliance disconnection from utilities, or does the customer need to disconnect before pickup? What is your pricing model — free quote, flat rate, or by weight/volume?

9. Locations and Service Areas
ItemStatusValuePrimary city✅ CONFIRMEDLas Vegas, NVService area display list✅ CONFIRMEDLas Vegas, Henderson, North Las Vegas, Boulder City, Enterprise, Summerlin, Green Valley, Spring Valley, ParadiseCounty✅ CONFIRMEDClark County, NevadaService area schema-safe listNEEDS CONFIRMATIONClient must confirm this exact list for areaServed schema field before it is addedZIP codes served❌ MISSINGNot providedAreas not served❌ MISSINGNot providedPhysical office location❌ MISSINGNot providedService area radiusNEEDS CONFIRMATIONUnknown
Important note: The service area display list is confirmed for visible page copy and FAQ Q9. It has NOT been confirmed for the LocalBusiness schema areaServed field. The client must review and approve the list for schema use before that field is populated.
Client question: Please confirm that Pit Stop Junk Removal serves all of the following areas: Las Vegas, Henderson, North Las Vegas, Boulder City, Enterprise, Summerlin, Green Valley, Spring Valley, and Paradise. Are there any ZIP codes or areas within Clark County that you do NOT serve?

10. Website Architecture
PageStatusNotesHomepageNEEDS CONFIRMATIONRoute confirmed as /; content not built in this workflowService page: Furniture and appliance removal✅ BUILTRoute: /services/furniture-appliance-removal-las-vegasService page: General junk removalNEEDS CONFIRMATIONRoute TBD — internal link target from this pageContact / quote pageNEEDS CONFIRMATIONRoute TBD — all CTA links target thisService page: Storage unit cleanoutNEEDS CONFIRMATIONRoute TBD — internal link target from this pageLocation pagesNOT STARTEDHenderson, North Las Vegas recommendedBlog / topical authority hubNOT STARTED"How to get rid of old furniture in Las Vegas" recommended first postAbout pageNEEDS CONFIRMATIONNot builtPrivacy policy page❌ MISSING — LAUNCH BLOCKERRequired before form goes liveTerms and conditionsNEEDS CONFIRMATIONOptional but recommendedSitemap✅ BUILTsrc/app/sitemap.ts — uses TODO_PRODUCTION_DOMAIN placeholderrobots.txt✅ BUILTpublic/robots.txt — sitemap URL uses TODO_PRODUCTION_DOMAIN placeholder

11. CTAs and Conversion Paths
ItemStatusValuePrimary CTA✅ CONFIRMEDRequest a Free QuoteSecondary CTA✅ CONFIRMEDCall NowPhone CTA❌ MISSING — LAUNCH BLOCKERtel:TODO_PHONE_NUMBER — phone not confirmedForm CTA✅ BUILT — ENDPOINT MISSINGQuoteForm.tsx — endpoint not confirmedThank-you page URL❌ MISSINGNot builtConfirmation messageNEEDS CONFIRMATIONPost-submit behavior not definedEmergency CTANEEDS CONFIRMATIONDepends on same-day confirmationCTA button text✅ CONFIRMED"Request a Free Quote," "Call Now"CTA placement✅ CONFIRMEDHero, mid-page, final CTA section, mobile sticky bar

12. Forms and Lead Capture
FieldStatusValueForm provider❌ MISSING — LAUNCH BLOCKERNot confirmedForm endpoint / webhook❌ MISSING — LAUNCH BLOCKERNot confirmedCRM / GHL webhookNEEDS CONFIRMATIONUnknownRequired form fields✅ CONFIRMEDName, Phone, ZIP (3 fields)Optional form fieldsNEEDS CONFIRMATIONService type, message, preferred dateHidden tracking fieldsNEEDS CONFIRMATIONUTM parameters, source attributionSMS opt-in language❌ MISSINGRequired if CRM sends text follow-upEmail opt-in language❌ MISSINGRequired if CRM sends email follow-upConsent checkboxNEEDS CONFIRMATIONRequired for TCPA compliance if SMS is usedPrivacy policy link❌ MISSING — LAUNCH BLOCKERRequired in form footerThank-you page❌ MISSINGNot confirmedAuto-response (email/SMS)NEEDS CONFIRMATIONUnknownNotification email❌ MISSINGWhere do leads get sent?
Production blocker: Form endpoint and privacy policy URL are both missing. The form cannot be used for real lead capture until both are resolved.
Client question: What form provider or CRM do you use — GoHighLevel, HubSpot, custom webhook, or something else? Where should new leads be sent — an email address, a CRM, a GHL pipeline? Do you want an auto-reply text or email sent to the customer after they submit? What email address should receive lead notifications?

13. Brand and Design
ItemStatusValueLogo files❌ MISSINGNot providedPrimary brand color✅ CONFIRMEDRed #B82429Secondary colors✅ CONFIRMEDBlack, WhiteFonts❌ MISSINGNot specifiedDesign style✅ CONFIRMED (working)Racing-inspired, bold, checkered flag elementsPhotography preferences❌ MISSINGNot specifiedDo-not-use visuals❌ MISSINGNot specifiedTone of voice✅ CONFIRMED (working)Direct, local, trustworthy, action-orientedHero image❌ MISSINGPlaceholder <div> currently in build — needs real branded photo
Client question: Can you provide your logo files (SVG or PNG with transparent background)? Do you have photos of your truck, team, or jobs in progress that we can use on the website? What photo style do you prefer — action shots, team photos, before/after, or stock?

14. SEO and Keyword Data
ItemStatusNotesPrimary keyword✅ CONFIRMEDfurniture removal Las VegasSecondary keywords✅ CONFIRMEDappliance removal Las Vegas, couch removal Las Vegas, refrigerator removal Las Vegas, washer and dryer removal Las Vegas, furniture hauling Las VegasLocal keywords✅ CONFIRMEDService area city variations from Prompt 01Long-tail keywords✅ CONFIRMEDFrom Prompt 01 — "where to dispose of old refrigerator Las Vegas," "furniture removal Las Vegas cost," etc.Voice search phrases✅ CONFIRMEDFrom Prompt 01 FAQ setAEO questions✅ CONFIRMED10 approved questions from Prompt 04Competitor keywordsNEEDS CONFIRMATIONNot provided; Prompt 11 (SERP analysis) not runBranded keywords✅ CONFIRMED"Pit Stop Junk Removal"Existing rankings❌ MISSINGGSC access not providedPages already indexed❌ MISSINGGSC access not provided

15. AEO, FAQ, and LLM Readiness
ItemStatusNotes10-question FAQ set✅ CONFIRMEDPrompt 04 approved set implemented in Prompt 08FAQPage schema✅ CONFIRMEDMatches visible FAQ content via shared const arrayHowTo schema✅ CONFIRMED3-step processDirect answer paragraph✅ CONFIRMEDPrompt 04 Fix 5 textVoice search phrases✅ CONFIRMEDCovered in FAQ setAI/LLM citation-ready statements✅ CONFIRMED5 confirmed statements identified in Prompt 09Additional FAQ topics identifiedCARRY FORWARDApartment removal, items not accepted, commercial/office, same-day conditional — all identified in Prompt 09
Gap carry-forward from Prompt 09: The following FAQ additions are recommended for the next page update once client data is confirmed: apartment/rental property removal question, items not accepted question, office/commercial furniture removal question.

16. Schema Data
Status by Schema Type
Schema TypeStatusFields MissingLocalBusiness — confirmed fields✅ CONFIRMEDname, url (TODO), serviceType, description, addressLocality, addressRegion, addressCountry, knowsAbout (5 topics)LocalBusiness — missing fields❌ MISSING — LAUNCH BLOCKERStelephone, streetAddress, postalCode, openingHoursSpecification, image, priceRange, sameAsService✅ CONFIRMEDname, description, provider, serviceType, areaServedFAQPage✅ CONFIRMED10 Q&A pairs matching visible contentHowTo✅ CONFIRMED3 steps matching visible Section 4BreadcrumbList✅ CONFIRMED (with TODO domain)itemListElement confirmed — domain placeholder in useAggregateRating❌ BLOCKEDMust not be added without real review dataReview❌ BLOCKEDMust not be added without real review data
Required Schema Confirmations
FieldNeeded From ClientImpacttelephoneClient confirms phone numberLocalBusiness schema, tap-to-callstreetAddressClient confirms addressLocalBusiness schema, GBP NAPpostalCodeClient confirms ZIPLocalBusiness schema, GBP NAPopeningHoursSpecificationClient confirms hoursLocalBusiness schema, voice searchurlClient confirms production domainAll absolute URLsimageClient provides logo or branded photo URLLocalBusiness schema image fieldpriceRangeClient confirms (e.g., "$$")LocalBusiness schema priceRangesameAsClient provides GBP URL, and optionally Yelp/FacebookEntity disambiguationareaServedClient confirms service area list for schema useLocalBusiness areaServed field

17. Social Proof and Trust
ItemStatusNotesTestimonials❌ MISSINGPlaceholder slots in trust section — do not populate without real quotesReview sources❌ MISSINGGoogle, Yelp, Facebook — confirm where reviews existReview count❌ MISSINGDo not use in schema until confirmedRating value❌ MISSINGDo not use in AggregateRating schema until confirmedCase studies / before-after❌ MISSINGNot providedLicense❌ MISSINGPlaceholder in trust section — do not publish until confirmedInsurance❌ MISSINGPlaceholder in trust section — do not publish until confirmedPartner logos❌ MISSINGNot providedMedia mentions❌ MISSINGNot providedGuarantees❌ MISSING"No Hidden Fees" removed; no replacement confirmedSatisfaction policy❌ MISSINGNot provided
Safety rule enforced: AggregateRating schema is blocked in the current build. No ratings, reviews, or testimonials will be added until the client provides real, verifiable data.
Client question: Do you have Google reviews? If so, what is your current star rating and approximate review count? Do you have testimonials from past customers that are approved for use on the website? Are you licensed and/or insured? If so, please provide license number or documentation. How many years have you been in business?

18. Legal and Compliance
ItemStatusNotesPrivacy policy URL❌ MISSING — LAUNCH BLOCKERForm collects Name and Phone — privacy policy requiredTerms and conditions URL❌ MISSINGRecommended; not blocking if no TOS requiredSMS opt-in language❌ MISSINGRequired if CRM sends text follow-upEmail opt-in language❌ MISSINGRequired if CRM sends email follow-upTCPA consent checkboxNEEDS CONFIRMATIONRequired for SMS marketing in the USCookie noticeNEEDS CONFIRMATIONRequired if analytics or third-party scripts are usedIndustry disclaimersNEEDS CONFIRMATIONJunk removal is low-risk; minimal disclaimers expected
Production blocker: Privacy policy page does not exist. The QuoteForm.tsx has a TODO_PRIVACY_POLICY_URL placeholder. This must be resolved before the form is live.
Developer option: Developer can build a standard privacy policy page at /privacy-policy and link to it from the form. Client must review and approve the content before launch.
Client question: Do you have an existing privacy policy? If not, do you want us to create one? Do you use automated texts or emails to follow up with leads after they submit the form? If yes, we need TCPA-compliant opt-in consent language added to the form.

19. Analytics, Tracking, and Indexing
ItemStatusNotesGoogle Analytics 4 ID❌ MISSINGNot providedGoogle Tag Manager ID❌ MISSINGNot providedGoogle Search Console access❌ MISSINGDomain not confirmed; verification not possible yetBing Webmaster Tools❌ MISSINGDomain not confirmedMicrosoft Clarity ID❌ MISSINGNot provided; recommended for session recordingMeta PixelNEEDS CONFIRMATIONNot provided; may be needed if Meta ads runGoogle Ads conversion IDNEEDS CONFIRMATIONNot provided; needed if Google Ads runCall tracking numberNEEDS CONFIRMATIONSeparate tracking number for attribution?Sitemap✅ BUILTsrc/app/sitemap.ts — uses TODO_PRODUCTION_DOMAIN; update on domain confirmationrobots.txt✅ BUILTpublic/robots.txt — full crawl access; sitemap URL uses TODO_PRODUCTION_DOMAINCanonical domain❌ MISSINGwww vs non-www preferred version not confirmedRedirectsNEEDS CONFIRMATIONAny prior URLs that need to redirect?Pages to noindexNEEDS CONFIRMATIONAny pages that should not be indexed?
Required before GSC submission: Production domain confirmed, DNS configured, SSL active, sitemap URL updated with real domain, robots.txt sitemap URL updated with real domain.
Client question: Do you have a Google Analytics account? If so, please share the GA4 Measurement ID (format: G-XXXXXXXXXX). Do you have Google Search Console set up? Do you run Google Ads or Meta Ads? Do you want session recording enabled via Microsoft Clarity?

20. Hosting, Domain, and Deployment
ItemStatusNotesProduction domain❌ MISSING — LAUNCH BLOCKERAll absolute URLs use TODO_PRODUCTION_DOMAINHosting provider❌ MISSINGNot confirmedDeployment platform❌ MISSINGNot confirmed (Vercel, Netlify, custom)GitHub repo✅ CONFIRMEDSedrickHarris/site-os-masterBranchNEEDS CONFIRMATIONMain, production, or deployment branch not confirmedBuild command✅ CONFIRMEDnpm run buildOutput directory✅ CONFIRMED.next (Next.js standard)Environment variablesNEEDS CONFIRMATIONForm endpoint, any API keysDNS provider❌ MISSINGNot confirmedSSL statusNEEDS CONFIRMATIONNot confirmed404 pageNEEDS CONFIRMATIONNot builtBackup / rollback planNEEDS CONFIRMATIONNot confirmedPreferred domain version❌ MISSINGwww vs non-www not confirmed
Production blocker: Production domain is missing. Every absolute URL in the build — canonical, OG URL, BreadcrumbList, sitemap, LocalBusiness url — uses the TODO_PRODUCTION_DOMAIN token. None of these will be correct until the domain is confirmed and the token is replaced.
Client question: What is the production domain name for this website (e.g., pitstopjunkremoval.com)? Do you prefer www or non-www? Where is the site being hosted — Vercel, Netlify, a managed host? Do you already own the domain, or does it need to be purchased?

21. Client Approval and Review
ItemStatusClient approval contact❌ MISSING — not identifiedReview deadline❌ MISSINGLaunch deadline❌ MISSINGCopy approvalPENDING — client has not reviewed page copyDesign approvalPENDING — client has not reviewed visual designLegal page approvalPENDING — privacy policy not yet createdSchema data approvalPENDING — service area list for schema not confirmedService area approvalPENDING — display list confirmed from input; schema list not confirmedPricing approvalPENDING — FAQ Q6 uses conditional safe language onlyTestimonials approvalPENDING — no testimonials provided

22. Production Values Summary
Safe to Use Now
The following values are confirmed and safe to use in production copy, schema, and build files:

Business name: Pit Stop Junk Removal
Service: Furniture and appliance removal
Primary city: Las Vegas, NV
Region: Clark County, Nevada
Service area (display): Las Vegas, Henderson, North Las Vegas, Boulder City, Enterprise, Summerlin, Green Valley, Spring Valley, Paradise
Brand colors: #B82429 red, black, white
Primary CTA: Request a Free Quote
Secondary CTA: Call Now
Page route: /services/furniture-appliance-removal-las-vegas
Meta title: "Furniture and Appliance Removal in Las Vegas, NV | Pit Stop Junk Removal"
Meta description: Prompt 04 Fix 1 approved text (154 characters)
H1: "Furniture and Appliance Removal in Las Vegas, NV"
Direct answer paragraph: Prompt 04 Fix 5 approved text
FAQ set: Prompt 04 approved 10-question set (Q6 and Q10 remain conditional)
Schema types: LocalBusiness (partial), Service, FAQPage, HowTo, BreadcrumbList
Service list from Prompt 01 (excluding same-day copy claims)
Differentiators: local company, eco-friendly disposal, residential and commercial, fast and flexible

Do Not Use Until Confirmed
ItemReasonPhone numberNot provided — do not inventStreet address and ZIPNot provided — do not inventBusiness hoursNot provided — do not inventProduction domainNot provided — do not inventForm endpointNot provided — do not inventPrivacy policy URLNot created — do not link to non-existent pageSame-day availability (visible copy)Not confirmed — removed from copy in Prompt 08; do not reinstatePricing range or price guaranteesNot confirmed — FAQ Q6 uses conditional safe language only"No Hidden Fees" guaranteeRemoved in Prompt 08 — do not add back without confirmationReviews / ratingsNot confirmed — AggregateRating schema blockedTestimonialsNot provided — do not fabricateLicense confirmationNot confirmed — do not publishInsurance confirmationNot confirmed — do not publishYears in businessNot confirmed — do not publishEco-friendly specifics (named partners, statistics)Not confirmed — FAQ Q5 uses hedged language onlyItems not accepted listNot confirmed — do not publish incomplete listGBP URL (sameAs)Not confirmed — do not add to schemaHero imageNot provided — placeholder div currently in build
Minimum Viable Data Set
Items required before production launch can be approved:
#Item1Business phone number2Business address or confirmed service-area-only status + ZIP3Business hours4Production domain5Form endpoint or confirmed lead capture path6Privacy policy URL or developer-built policy page (client-approved)7Service list confirmation (client review of Prompt 01 list)8Service area confirmation for schema areaServed field9Primary CTA confirmation (already confirmed — document client sign-off)
Required Before Prompt 06
Prompt 06 has already been completed. This section is documented for reference.
Items that were required before Prompt 06 (had they been collected before the build):

Production domain (for absolute URL patterns)
Phone number (for tap-to-call)
Form endpoint (for form connection)
Service list confirmation

All were handled with TODO placeholders in the build, which is the correct approach for Core Mode.
Required Before Prompt 08
Prompt 08 has already been completed. This section is documented for reference.
The following were required before Prompt 08 and were resolved or confirmed via the QA/fix workflow:

H1 text, meta title, meta description (all corrected)
Canonical URL format (corrected)
FAQ set (replaced with approved set)
Unsupported claims (removed)

Required Before Prompt 09 (Final Launch QA / Production Approval)
The following must be resolved before Prompt 09 can approve production launch:
#ItemHow to Resolve1Phone numberClient provides confirmed number2Street address and ZIPClient provides (or confirms SAB status)3Business hoursClient provides4Production domainClient confirms domain; developer updates all TODO_PRODUCTION_DOMAIN tokens5Form endpointClient provides webhook or CRM connection; developer connects QuoteForm.tsx6Privacy policy URLDeveloper creates page at /privacy-policy; client approves content7robots.txt sitemap URLDeveloper updates after domain confirmed8sitemap.ts domainDeveloper updates after domain confirmed9Rich Results TestDeveloper runs FAQPage, HowTo, LocalBusiness schema through Google Rich Results Test after fixes above are applied10Color contrast validationDeveloper validates #B82429 against all text/background combinations11Service area schema confirmationClient confirms areaServed list before populating schema field12LocalBusiness sameAsClient provides GBP URL and any additional verified profiles

23. Client Questions
The following questions should be sent to the client. Items marked [LAUNCH BLOCKER] must be answered before the site can go live.
Section 1: Contact and Business Identity

[LAUNCH BLOCKER] What is your main business phone number? Please provide it in the format you want it displayed on the website (e.g., (702) 555-1234).
Is your phone number SMS-capable? Do you have a separate number for emergency or after-hours calls?
What is your main business email address? Where do you want lead notification emails sent?
What is the legal registered name of your business? Is it "Pit Stop Junk Removal" or is there a DBA or LLC name we should be aware of?
How many years has Pit Stop Junk Removal been operating in Las Vegas?
Is the owner or founder name approved for public use on the website?

Section 2: Address and Location

[LAUNCH BLOCKER] What is your business street address and ZIP code?
Is Pit Stop Junk Removal a service-area business (you go to customers, no public-facing storefront), or do customers visit a physical location? If service-area only, should the address be hidden from the website and schema?

Section 3: Business Hours

[LAUNCH BLOCKER] What are your business hours for each day of the week? Please list open and close times, or "Closed" for any days you do not operate.
Do you offer same-day or next-day pickups? If yes, what are the cutoff times for booking, and which days is this available?
Are you available for emergency or after-hours calls? If so, is there a different number or process?

Section 4: Domain and Hosting

[LAUNCH BLOCKER] What is the production domain name for this website (e.g., pitstopjunkremoval.com)? Do you already own it?
Do you prefer www or non-www as the canonical domain version?
Where will the site be hosted — Vercel, Netlify, a managed WordPress host, or another platform?

Section 5: Forms and Lead Capture

[LAUNCH BLOCKER] What form provider or CRM do you use? Options include GoHighLevel, HubSpot, Jotform, a custom webhook, or email-only. Please provide the webhook URL or form endpoint.
What email address should receive lead notifications when the form is submitted?
Do you want an automated text message or email sent to the customer after they submit the form? If yes, we need to add opt-in consent language to the form to comply with TCPA requirements.

Section 6: Privacy Policy and Legal

[LAUNCH BLOCKER] Do you have an existing privacy policy? If yes, please provide the URL. If not, we will create a standard one — would you like us to do that?
Do you have any terms and conditions or service disclaimers that should appear on the website?

Section 7: Google Business Profile and Online Presence

Please share your Google Business Profile URL (the link to your GBP listing on Google Maps or Search).
Do you have verified profiles on Yelp, Facebook, Angi, BBB, or other directories? If yes, please share those URLs.

Section 8: Reviews and Trust

What is your current Google star rating and approximate review count?
Do you have testimonials from past customers that are approved for use on the website? If yes, please provide the customer name (or first name only), city, and quote.
Are you licensed and/or insured for junk removal in Nevada? If yes, please provide your license number or relevant documentation.

Section 9: Services and Pricing

Please review the following service list and confirm which services you currently offer. Are any missing, or are any listed that you do not offer?
(attach Prompt 01 service list)
What items do you NOT accept? Common exclusions include: hazardous materials, paint cans, chemicals, propane tanks, tires, biohazard waste. Please provide your full exclusion list.
What is your pricing model — free quote, flat rate, volume-based, or weight-based? Do you have a starting price or typical price range you are comfortable publishing?
Do you handle appliance disconnection from utilities (unplugging, capping water lines), or should customers disconnect before you arrive?
Do you have specific recycling or donation partners in Las Vegas that you work with? If yes, please provide their names — this strengthens the eco-friendly messaging on the page.

Section 10: Analytics and Tracking

Do you have a Google Analytics 4 account? If yes, please share the GA4 Measurement ID (format: G-XXXXXXXXXX).
Do you currently run Google Ads or Meta (Facebook/Instagram) Ads? If yes, please share the conversion tracking IDs so we can add them to the site.
Do you want session recording enabled on the website (via Microsoft Clarity — free tool)? This shows how visitors interact with the page.


24. Recommended Next Action
BLOCKED BY MISSING CLIENT DATA
Rationale: The page build is complete and all technical fixes from Prompts 07 and 08 have been applied. The page is structurally sound, semantically correct, schema-ready (partial), and AEO-optimized. However, it cannot be launched without the six confirmed launch blockers being resolved:

Phone number
Street address and ZIP (or SAB confirmation)
Business hours
Production domain
Form endpoint
Privacy policy URL

Send the 32 client questions in Section 23 to the client. When the six launch-blocker items are returned, the developer can:

Replace all TODO_PHONE_NUMBER tokens with the confirmed phone number
Populate streetAddress, postalCode, openingHoursSpecification in LocalBusiness schema
Replace all TODO_PRODUCTION_DOMAIN tokens with the production domain
Connect QuoteForm.tsx to the confirmed form endpoint
Create or link the privacy policy page
Update sitemap.ts and public/robots.txt with the real domain
Rerun Prompt 09 Final Launch QA with all blockers resolved

Once those seven actions are complete and Prompt 09 approves the page, the site is ready for production launch, GSC verification submission, and Bing Webmaster submission.

Site OS Master — Prompt 10 v1
Workflow Test 01 — Core Mode
Output: workflow-tests/workflow-test-01-core-mode/outputs/prompt-10-output.md
Next Step: Send client questions — resolve 6 launch blockers — rerun Prompt 09