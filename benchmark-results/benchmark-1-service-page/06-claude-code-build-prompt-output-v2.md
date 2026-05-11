Here is the updated Prompt 06 v2 — paste-ready for Claude Code.

Site OS Master — Benchmark 1 — Prompt 06 v2 (Production Safety Build)
Page: Furniture and Appliance Removal | Pit Stop Junk Removal | Las Vegas, NV
Workflow: Core Mode | Output Depth: Standard
Input: Approved Prompt 05 Developer Build Brief

You are building a new service page for Pit Stop Junk Removal.
Page: Furniture and Appliance Removal
Route: /services/furniture-appliance-removal-las-vegas
Goal: Generate quote requests from Las Vegas homeowners, renters, landlords, property managers, and small businesses that need furniture and appliances removed.
Primary CTA: Request a Free Quote (3-field form — Name, Phone, ZIP)
Secondary CTA: Tap-to-call
Work through 5 gates in order. Do not skip gates. Gate 1 and Gate 2 are hard stops — you must report findings and receive confirmation before proceeding. Do not create or edit any file until Gate 2 is confirmed.

GATE 1 — INSPECT
HARD STOP. Do not write any code or create any files until Gate 1 is complete and your findings are reported.
Inspect the project and report on each item below. Do not assume — read the actual files.

Framework — Next.js, Remix, Astro, SvelteKit, plain HTML, or other. Report version if detectable.
Routing pattern — pages/, app/, folder-based, or other. Report the exact convention in use.
Page file location — exact directory path where page files live.
Existing service page — find the closest existing service page. Report its full file path, route, and section structure.
Reusable components — locate components for: hero sections, forms, FAQ/accordion, CTAs, mobile sticky bars, breadcrumbs, trust/social proof sections, and icon or item list grids. Report the file path and name of each.
Metadata pattern — how does the project set page-level meta title, meta description, and canonical? Report the exact method (next/head, metadata export, frontmatter, Helmet, or other).
Schema pattern — how does the project inject JSON-LD? Report the method and file location.
Styling system — Tailwind CSS, CSS modules, global CSS, styled-components, or other. Report class naming conventions.
Image patterns — image folder path, file formats in use, naming conventions, and whether an <Image> component is used.
Internal link patterns — relative paths, <Link> component, or anchor tags.
Form pattern — is there a reusable form component? How are fields defined? What is the form submission endpoint or handler? Report the exact endpoint, action path, or third-party service (Netlify Forms, HubSpot, Formspree, etc.) if present.
Mobile sticky bar — does a sticky call or CTA bar component already exist? Report its file path.
Sitemap — does the project have a sitemap file or sitemap generator? Report its location and how new routes are added (static file, dynamic generation, config entry, or other).
Navigation structure — how is the services section of the main nav structured? Dropdown or flat list?
Route conflict check — confirm no existing file or route conflicts with /services/furniture-appliance-removal-las-vegas.

After completing Gate 1, report a numbered summary of all findings.
Do not proceed to Gate 2 until the Gate 1 report is written.

GATE 2 — PLAN
HARD STOP. Do not create or edit any files until the implementation plan below is written and has no unresolved blockers.
Based on your Gate 1 findings, provide a short implementation plan.
Include:

Page file path — exact path to create based on the project's routing convention.
New components — list only what does not already exist and is required for this page.
Reused components — list what will be reused and how.
Metadata approach — exact method for setting meta title, meta description, and canonical.
Schema approach — where and how each JSON-LD block will be injected.
Form approach — reuse existing form component or build inline. Confirm the submission endpoint. If no endpoint is confirmed, flag it as a blocker before proceeding.
Mobile sticky bar approach — reuse existing or create new.
Internal links plan — list each planned internal link. Confirm each target route exists before including it. If a target route does not exist, mark it as a planned link only — do not create it as a live link.
Sitemap plan — confirm how the new route will be added to the sitemap and which file will be updated.
Image approach — placeholder image paths and alt text plan.
Scope boundary — list every file that will be created or modified. Confirm no file outside this list will be touched.
Unresolved blockers — flag anything that requires a decision before building. If blockers exist, do not proceed until they are resolved.

Do not begin editing any file until the plan is confirmed and all blockers are resolved.

GATE 3 — BUILD
Build the page using the approved plan. Follow every section, schema, and guardrail requirement below exactly.

ROUTE
Create the page at:
/services/furniture-appliance-removal-las-vegas
Do not create a duplicate route. Confirm the Gate 1 route conflict check before creating the file.

METADATA
Set at the page level only — not in global layout.

Meta title: Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal
Meta description: Pit Stop Junk Removal hauls away old furniture and appliances across Las Vegas. Couches, fridges, mattresses, washers, and more. Request a free quote today.
Canonical: Self-referencing — /services/furniture-appliance-removal-las-vegas
Robots: index, follow
Open Graph (recommended): og:title, og:description, og:type, og:url — match meta values


DIRECT-ANSWER SECTION
Required. This section enables featured snippet eligibility and AI citation readiness.
Place a direct-answer block immediately after the H1 and before the hero form, or as the opening copy of Section 1.
Requirements:

Open with a sentence that directly answers the primary search intent in 40–60 words.
Format: One short paragraph. No heading above it. No bullet list.
The sentence must begin with a subject-first structure. Example: "Pit Stop Junk Removal picks up old furniture and appliances from Las Vegas homes and businesses — including sofas, refrigerators, mattresses, and washers — with same-day and next-day availability."
Do not keyword-stuff. Write for a human reader first.
This copy must appear as visible page text, not inside schema only.

FLAG this copy block with a comment: <!-- DIRECT ANSWER BLOCK — EDIT BEFORE LAUNCH -->

PAGE SECTIONS — BUILD IN THIS ORDER

SECTION 1 — HERO
Purpose: First-impression conversion. Must appear fully above the fold on mobile and desktop.
Required elements:

H1: Furniture and Appliance Removal in Las Vegas
One H1 only — do not repeat anywhere on the page.
Direct-answer block (see above)
Urgency copy line — "Same-day and next-day removal available in Las Vegas."
FLAG: <!-- EDITABLE — confirm same-day availability -->
3-field quote request form: Name, Phone, ZIP

Use the confirmed submission endpoint from Gate 2.
If no endpoint was confirmed in Gate 2, insert a placeholder action attribute and add: <!-- FORM ENDPOINT NOT CONFIRMED — FLAG BEFORE LAUNCH -->
Submit button label: "Request a Free Quote"
Do not add more than 3 fields.


Tap-to-call button — use tel: protocol
FLAG phone number: <!-- CLIENT PHONE — CONFIRM BEFORE LAUNCH -->
Hero image — placeholder path: /images/services/furniture-appliance-removal-hero.jpg
Alt text: "Pit Stop Junk Removal crew loading furniture and appliances in Las Vegas"
Load: eager


SECTION 2 — WHAT WE REMOVE
Purpose: Topical coverage, keyword surface area, featured snippet eligibility.
Required elements:

H2: What We Remove
Icon grid or styled list of 8–12 item types. Suggested items:
Sofas and sectionals, mattresses, bed frames, dressers and wardrobes, dining tables and chairs, refrigerators, washers and dryers, dishwashers, microwaves, exercise equipment, office furniture, hot tubs
Short intro sentence above the grid (1 sentence)
Do not use a bulleted paragraph — use a visual grid or styled card layout


SECTION 3 — TRUST / SOCIAL PROOF
Purpose: Credibility, conversion support.
Required elements:

H2: Why Las Vegas Chooses Pit Stop Junk Removal
3–4 trust signals (examples: licensed and insured, same-day service, upfront pricing, eco-friendly disposal)
FLAG all claims: <!-- CONFIRM WITH CLIENT BEFORE LAUNCH -->
2–3 customer reviews or testimonials
FLAG: <!-- REAL REVIEWS REQUIRED — DO NOT INVENT -->
If no reviews are provided, insert placeholder comment and leave section empty — do not fabricate quotes.


SECTION 4 — HOW IT WORKS
Purpose: Reduce friction, answer process questions, HowTo schema surface.
Required elements:

H2: How Furniture and Appliance Removal Works
3–4 numbered steps. Suggested:

Request a free quote — call or fill out the form
Schedule your pickup — same-day or next-day available
We haul everything away — no heavy lifting required
Done — we clean up and you're finished


Each step: H3 label + 1–2 sentences
Use the same step labels in HowTo schema


SECTION 5 — SERVICE AREA
Purpose: Local SEO, GEO visibility, Google Business Profile relevance.
Required elements:

H2: Furniture and Appliance Removal Across Las Vegas
1–2 sentences confirming the service area
City/neighborhood list — inline prose or styled tag list. Include:
Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Whitney, Boulder City, Mesquite
FLAG: <!-- CONFIRM SERVICE AREA WITH CLIENT -->
Do not create individual location pages from this section — list only


SECTION 6 — PRICING / WHAT TO EXPECT
Purpose: Reduce friction, capture cost-intent queries, featured snippet eligibility.
Required elements:

H2: What Does Furniture and Appliance Removal Cost in Las Vegas?
1–2 sentences explaining that pricing depends on volume and item type
Optional: a starting-price range if confirmed by the client
FLAG: <!-- CONFIRM PRICING WITH CLIENT BEFORE ADDING NUMBERS -->
CTA: repeat the 3-field form or a "Get a Free Quote" button linking to Section 1 form anchor


SECTION 7 — FAQ
Purpose: AEO, People Also Ask, featured snippet eligibility, AI citation readiness.
Required elements:

H2: Frequently Asked Questions
6 FAQ items — each with a visible H3 question and a direct-answer first sentence followed by 1–2 supporting sentences
All 6 questions must be visible as page text — not collapsed by default on desktop (accordion is acceptable on mobile)
Each answer must open with a direct-answer sentence (subject + verb + answer)

Suggested questions:

What types of furniture do you remove?
Do you remove appliances as well as furniture?
How much does furniture removal cost in Las Vegas?
Do you offer same-day furniture removal?
Do I need to move the items to the curb?
Do you recycle or donate removed furniture and appliances?

FLAG all answers: <!-- CONFIRM ANSWERS WITH CLIENT -->

SECTION 8 — RELATED SERVICES
Purpose: Internal linking, topical authority, user journey depth.
Required elements:

H2: Related Junk Removal Services
3–4 service cards or links to existing service pages
Only link to routes confirmed to exist in Gate 2. Skip or mark as planned any link whose route does not exist.
Suggested links: Junk Removal, Mattress Removal, Hot Tub Removal, Estate Cleanout


SECTION 9 — FINAL CTA
Purpose: Conversion capture for users who scrolled to the bottom.
Required elements:

H2: Ready to Remove Your Old Furniture and Appliances?
1 sentence reinforcing the value
Repeat the 3-field quote request form or a "Request a Free Quote" button
Tap-to-call button — same tel: link as Section 1


MOBILE STICKY BAR
Required on all mobile viewports. Fixed to bottom of viewport.

Label: "Call for a Free Quote"
Uses tel: protocol — same phone number as Section 1
Visible only on mobile (hidden on desktop)
Does not obscure form or CTA content


BREADCRUMB
Required. Visible as a <nav> element on the page — not schema only.
Structure:
Home > Services > Furniture and Appliance Removal
Links:

Home → /
Services → /services
Furniture and Appliance Removal → current page (no link)


SCHEMA — REQUIRED BLOCKS
Inject all schema as JSON-LD in the page <head> or via the project's confirmed schema injection method.

LocalBusiness Schema
FIELD PROTECTION RULE: Do not invent, estimate, or guess any LocalBusiness field value. Every field below must come from the approved Prompt 05 build brief or confirmed client data. If a field value is not provided, insert a clearly labeled placeholder comment and flag it.
Required fields:
json{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pit Stop Junk Removal",
  "url": "<!-- CONFIRM SITE URL -->",
  "telephone": "<!-- CONFIRM PHONE NUMBER -->",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
    <!-- streetAddress and postalCode: ADD ONLY IF CONFIRMED -->
  },
  "areaServed": [
    "Las Vegas", "Henderson", "North Las Vegas", "Summerlin",
    "Spring Valley", "Enterprise", "Paradise", "Whitney",
    "Boulder City", "Mesquite"
  ],
  "openingHours": "<!-- CONFIRM HOURS -->",
  "priceRange": "<!-- CONFIRM OR OMIT -->"
}
AggregateRating: Do not add AggregateRating unless real review data is provided in the build brief. If absent, omit the field entirely or insert: <!-- AGGREGATE RATING OMITTED — NO VERIFIED DATA -->
Do not insert a placeholder rating value. Do not guess a star count or review count.

Service Schema
json{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Furniture and Appliance Removal",
  "provider": { "@type": "LocalBusiness", "name": "Pit Stop Junk Removal" },
  "areaServed": "Las Vegas, NV",
  "description": "Pit Stop Junk Removal picks up and hauls away old furniture and appliances from homes and businesses in Las Vegas, including sofas, refrigerators, mattresses, washers, and more."
}

BreadcrumbList Schema
Match exactly to the visible breadcrumb nav on the page.
json{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "<!-- CONFIRM BASE URL -->/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "<!-- CONFIRM BASE URL -->/services" },
    { "@type": "ListItem", "position": 3, "name": "Furniture and Appliance Removal" }
  ]
}

FAQPage Schema
Mirror exactly the visible FAQ text on the page. FAQPage schema text must match visible text character-for-character — do not paraphrase in schema.
json{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "<!-- FAQ question 1 — copy from Section 7 -->",
      "acceptedAnswer": { "@type": "Answer", "text": "<!-- FAQ answer 1 — copy from Section 7 -->" }
    }
    // Repeat for all 6 FAQ items
  ]
}

HowTo Schema (conditional)
Include only if Section 4 How It Works steps are implemented. Step names in schema must match the visible H3 labels in Section 4 exactly.

INTERNAL LINKS
Verification rule: Before adding any internal link, confirm the target route exists in the project. If the route does not exist, mark it as a planned link with a <!-- PLANNED LINK — ROUTE NOT YET BUILT --> comment and do not render it as a live <a> tag.
Planned links from this page:

/services — anchor: "junk removal services in Las Vegas"
/services/junk-removal-las-vegas — anchor: "full junk removal service"
/services/mattress-removal-las-vegas — anchor: "mattress removal"
/services/hot-tub-removal-las-vegas — anchor: "hot tub removal"
/contact or /free-quote — anchor: "request a free quote"

Pages that should link to this page (note for next update — do not modify now):

Homepage service section
Main services index page
Sitemap


GUARDRAILS

Do not write any code until Gate 1 is reported and Gate 2 is confirmed
Do not create a duplicate route
Do not invent, estimate, or guess any LocalBusiness schema field value
Do not add AggregateRating without verified review data
Do not invent customer reviews or testimonials
Do not add more than 3 fields to the quote request form
Do not use a form submission endpoint that was not confirmed in Gate 2
Do not create broken internal links — skip any link whose target route does not exist
Do not modify any file outside the scope list confirmed in Gate 2
Do not edit navigation, footer, global layout, or global config unless explicitly required and listed in Gate 2 scope
Do not rename existing files or components without a documented reason
Do not add unnecessary dependencies
Do not put text inside images
Do not keyword-stuff headings or body copy
Do not invent availability claims, pricing, or service area without client confirmation


GATE 4 — VALIDATE
After building, validate every item below before reporting. Resolve all failures before moving to Gate 5.

 Route resolves correctly at /services/furniture-appliance-removal-las-vegas
 No duplicate route was created
 One H1 on the page — text: Furniture and Appliance Removal in Las Vegas
 Heading hierarchy is logical: H1 → H2 → H3
 Direct-answer block is present as visible page text immediately after H1
 Meta title: Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal
 Meta description is set
 Canonical tag is present and self-referencing
 Robots tag: index, follow
 All 9 sections are present in the correct order
 Hero form has exactly 3 fields: Name, Phone, ZIP
 Form submission endpoint is confirmed or flagged with a comment
 Tap-to-call uses tel: protocol and is present in Sections 1, 8 (final CTA), and the mobile sticky bar
 Mobile sticky bar is present and fixed to the bottom of the mobile viewport
 Mobile sticky bar is hidden on desktop
 Breadcrumb is visible as a <nav> element on the page
 BreadcrumbList JSON-LD matches visible breadcrumb text and URLs exactly
 All 6 FAQ questions are visible as page text with direct-answer opening sentences
 FAQPage JSON-LD text matches visible FAQ text exactly
 LocalBusiness schema is present with areaServed array
 All unconfirmed LocalBusiness fields have placeholder comments — no invented values
 AggregateRating is either absent or contains a FLAG comment — no invented rating or review count
 HowTo schema step names match visible Section 4 H3 labels exactly (if HowTo is included)
 Service schema is present
 All flagged client values have TODO or FLAG comments
 All outbound internal links either resolve to existing routes or are marked as planned links
 All images have non-empty alt text
 No text is inside images
 Hero image loads eager — all other images load lazy
 Page renders correctly at 375px mobile viewport
 Page renders correctly at 1280px desktop viewport
 No unrelated files were modified beyond the scope confirmed in Gate 2
 Sitemap updated or confirmed — new route is included or queued per the project's sitemap method
 Navigation updated with link to new page (if in Gate 2 scope)
 Build command passes without errors (if applicable)
 Lint command passes without errors (if applicable)

If any item fails, resolve it before proceeding to Gate 5.

GATE 5 — REPORT
After all Gate 4 checks pass, provide the implementation report.
Include:

Summary — 2–3 sentences describing what was built
Files created — full path of every new file
Files modified — full path of every updated file and what changed
Route confirmed — exact route created
Metadata confirmed — meta title, meta description, and canonical values as implemented
Schema confirmed — list every schema block implemented; note which fields are confirmed vs flagged
AggregateRating status — confirm omitted, or list the verified source if included
Direct-answer block — confirm it is present as visible page text and its location on the page
Internal links added — list each live link with anchor text and target route
Internal links skipped — list each planned-only link with reason
Sitemap update — confirm how and where the new route was added, or note if it requires a separate step
CTA placements — confirm all 3 CTA locations and the mobile sticky bar
Form endpoint — confirm the endpoint used, or flag if not yet confirmed
Flagged items requiring client confirmation — list every value with a TODO/FLAG comment, grouped by section
Gate 4 results — confirm all checks passed, or list any that did not and how they were resolved
Remaining blockers — list anything that could not be resolved and must be addressed before launch
Next step — note that Prompt 07 QA Review should be run after the page is live


Site OS Master — Benchmark 1 — Prompt 06 v2 (Production Safety Build)
Workflow: Core Mode | Output Depth: Standard
Fixes applied: Gate 1 hard stop, Gate 2 hard stop, LocalBusiness field protection,
AggregateRating rule, form endpoint confirmation, direct-answer section,
sitemap handling in Gate 3 and Gate 4, updated Gate 5 report
Next step: Run Prompt 07 QA Review after launch 
