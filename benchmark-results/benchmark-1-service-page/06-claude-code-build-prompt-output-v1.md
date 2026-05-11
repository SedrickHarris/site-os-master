Claude Code Build Prompt
Benchmark 1 | Pit Stop Junk Removal | Furniture and Appliance Removal | Las Vegas, NV

The following prompt is ready to paste directly into Claude Code inside VS Code. It contains no strategy discussion. It is implementation-focused only.


You are building a new service page for Pit Stop Junk Removal.

Page: Furniture and Appliance Removal
Route: /services/furniture-appliance-removal-las-vegas
Goal: Generate quote requests from Las Vegas homeowners, renters, landlords, property managers, and small businesses that need furniture and appliances removed.
Primary CTA: Request a Free Quote (3-field form)
Secondary CTA: Tap-to-call

Work through 5 gates in order. Do not skip gates. Do not begin building until Gate 1 and Gate 2 are complete.

---

## GATE 1 — INSPECT

Before creating or editing any files, inspect the project and report what you find.

Inspect and report on each of the following:

1. Framework — Next.js, Remix, Astro, SvelteKit, plain HTML, or other. Identify version if possible.
2. Routing pattern — file-based (pages/ or app/), folder-based, or other. Identify the exact convention.
3. Pages or app directory — locate where page files live. Report the full directory path.
4. Existing service page — find the closest existing service page. Report its file path, route, and structure.
5. Existing components — locate any reusable components for: hero sections, forms, FAQ/accordion, CTAs, sticky bars, breadcrumbs, trust/social proof sections, and icon grids or item lists.
6. Metadata pattern — how does the project set page-level meta title, meta description, and canonical? Report the exact method (e.g., next/head, metadata export, frontmatter, or other).
7. Schema pattern — how does the project inject JSON-LD schema? Report the method and location (e.g., script tag in head, utility function, component).
8. Styling system — Tailwind CSS, CSS modules, global CSS, styled-components, or other. Identify class naming conventions.
9. Image patterns — where are images stored? What format and naming conventions are used? Is there an Image component?
10. Internal link patterns — how are internal links written? Relative paths, Link components, or anchor tags?
11. Form pattern — is there a reusable form component? How are form fields defined? Where does form submission go?
12. Mobile sticky component — does a mobile sticky call bar component already exist?
13. Navigation — how is the services section of the main navigation structured? Does it use a dropdown or flat list?
14. Route conflicts — confirm no existing file or route conflicts with /services/furniture-appliance-removal-las-vegas.

After completing Gate 1, report a summary of your findings before proceeding to Gate 2.

---

## GATE 2 — PLAN

Based on your Gate 1 findings, provide a short implementation plan before touching any files.

Include:

1. File to create for the new page route — exact path based on the project's routing convention.
2. New components to create — list only what does not already exist and is needed for this page.
3. Existing components to reuse — list what can be reused and how.
4. Metadata approach — how you will set meta title, meta description, and canonical on this page.
5. Schema approach — how and where you will inject the JSON-LD blocks for this page.
6. Form approach — whether you will reuse an existing form or build the 3-field form inline.
7. Mobile sticky bar approach — whether you will reuse an existing component or create one.
8. Internal links approach — which outbound links you will add and which you will skip if the target route does not exist.
9. Image approach — where placeholder images will reference and how alt text will be applied.
10. Any risks or unknowns — flag anything that needs a decision before you build.

Do not begin editing until the plan is approved or until there are no unresolved blockers.

---

## GATE 3 — BUILD

Build the page using the approved plan. Follow the section structure and all requirements below exactly.

---

### ROUTE

Create the page at:
/services/furniture-appliance-removal-las-vegas

Do not create a duplicate route. Confirm no conflict exists before creating the file.

---

### METADATA

Set at the page level — not in the global layout.

Meta title:
Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal

Meta description:
Pit Stop Junk Removal hauls away old furniture and appliances across Las Vegas. Couches, fridges, mattresses, washers, and more. Request a free quote today.

Canonical tag:
Self-referencing — points to /services/furniture-appliance-removal-las-vegas

Robots:
index, follow

Open Graph (recommended, not blocking):
og:title — match meta title
og:description — match meta description
og:type — website
og:url — match canonical

---

### PAGE SECTIONS — BUILD IN THIS ORDER

---

#### SECTION 1 — HERO

Purpose: First-impression conversion capture. Must appear fully above the fold on mobile and desktop.

Required elements:
- H1: Furniture and Appliance Removal in Las Vegas
  (One H1 only — do not repeat anywhere on the page)
- Service summary — 1–2 sentences describing the service and location. Write in plain, direct language. Do not keyword-stuff.
- Urgency copy line — "Same-day and next-day removal available in Las Vegas."
  FLAG THIS AS AN EDITABLE STRING. Add a comment in the code: // CLIENT MUST CONFIRM SAME-DAY AVAILABILITY BEFORE LAUNCH
  If same-day is not confirmed, the fallback copy is: "Fast, flexible scheduling for Las Vegas homeowners and renters."
- Quote request form — 3 fields only:
  Field 1: Full Name (type="text", required)
  Field 2: Phone Number (type="tel", required)
  Field 3: ZIP Code (type="text", inputmode="numeric", maxlength="5", required)
  Submit button label: Get My Free Quote
  Do not add a fourth field. Do not add an email field.
  Form submission: Connect to the existing form handler or submission endpoint. If none exists, add a TODO comment: // TODO: Connect form to submission handler or CRM webhook
  Each field must have an associated <label> element. Do not use placeholder text as the only label.
- Secondary CTA — tap-to-call link:
  Text: Prefer to call? [PHONE NUMBER]
  Link: <a href="tel:[PHONE NUMBER]" aria-label="Call Pit Stop Junk Removal">
  FLAG: Replace [PHONE NUMBER] with the real business phone number. Add a comment: // CLIENT MUST PROVIDE REAL PHONE NUMBER
- Hero image:
  Alt text: "Pit Stop Junk Removal team hauling old furniture in Las Vegas"
  Use an existing image if one matches. If not, use a placeholder path: /images/services/pit-stop-junk-removal-las-vegas-truck.jpg
  Load eagerly — do not lazy-load the hero image.

---

#### SECTION 2 — ENTITY AUTHORITY BLOCK

Purpose: Establishes who Pit Stop Junk Removal is, what they remove, and where they serve. Required for AI/LLM citation readiness and featured snippet capture.

Required elements:
- Visible body text block — 2–3 declarative sentences. Example structure (write this or similar):
  "Pit Stop Junk Removal is a Las Vegas junk removal company that removes furniture, appliances, and bulky items from homes, apartments, and commercial properties across the Las Vegas valley. They serve homeowners, renters, landlords, and property managers who need old couches, refrigerators, mattresses, and other items hauled away quickly."
- Voice-optimized line — append as a natural sentence or short paragraph:
  "Pit Stop Junk Removal picks up furniture and appliances in Las Vegas — call for same-day availability."
  Apply the same same-day conditional flag as Section 1.

This section must render as visible, server-rendered body text. Do not render it as a hidden element, tooltip, or schema-only string.

---

#### SECTION 3 — ITEMS WE REMOVE

Purpose: Cover all accepted item types. Capture secondary keyword searches. Signal service breadth.

H2: What We Remove

Required elements:
- Visual item grid or two-column labeled list
- Include these item types at minimum:
  Couch / Sofa, Loveseat, Armchair, Mattress, Box Spring, Bed Frame, Dresser, Dining Table and Chairs, Desk, Bookshelf, Refrigerator, Washer, Dryer, Dishwasher, Stove / Oven, Microwave, Other Household Appliances
- Each item must have a visible text label — not icon-only
- If icons are used, each icon must have alt text matching its label (e.g., alt="couch removal icon")
- Optional outbound internal link — if a parent junk removal service page exists at /services or /services/junk-removal-las-vegas, add a link with anchor text: "full junk removal services in Las Vegas". If the route does not exist, skip the link entirely. Do not create a broken link.

Semantic phrases to include naturally in this section (do not force — use where they fit):
"bulky item pickup" · "haul away old furniture" · "appliance disposal Las Vegas"

---

#### SECTION 4 — HOW IT WORKS

Purpose: Reduce booking anxiety. Explain the removal process. HowTo schema candidate.

H2: How Furniture and Appliance Removal Works

Required elements:
- Exactly 3 steps rendered as numbered cards or a horizontal step layout
- Each step must have a visible heading (H3 or equivalent) using these exact names:
  Step 1 heading: Request a Quote
  Step 2 heading: Schedule Your Pickup
  Step 3 heading: We Haul It Away
- Each step must have 1–2 sentences of supporting description
- These step headings are required for the conditional HowTo schema — do not rename them

Semantic phrases to include naturally:
"schedule a pickup" · "free estimate" · "no-contact removal"

---

#### SECTION 5 — SERVICE AREA

Purpose: Local GEO signals. Reinforce geographic relevance for Las Vegas area searches.

H2: Serving Las Vegas and Surrounding Areas

Required elements:
- 2–3 sentences naming service areas. Embed naturally — do not render as a bare city list.
  Areas to name: Las Vegas, Summerlin, Henderson, North Las Vegas, Paradise, Spring Valley, Clark County
- Include one Las Vegas-specific contextual detail. Example: a reference to local HOA move-out requirements or the busy summer moving season in the Las Vegas valley.
  FLAG: Add a comment: // CLIENT TO REVIEW LOCAL CONTEXT DETAIL FOR ACCURACY
- Optional link — if a parent Las Vegas junk removal page exists, add a link with anchor text: "junk removal services in Las Vegas". If the route does not exist, skip the link.

Semantic phrases to include naturally:
"Las Vegas valley" · "Clark County" · "near me"

Do not render this section as a keyword-dense list of city names. Use natural prose.

---

#### SECTION 6 — TRUST AND SOCIAL PROOF

Purpose: Build credibility. Remove final conversion hesitation. Support E-E-A-T signals.

H2: Why Las Vegas Homeowners Choose Pit Stop

Required elements:
- Years serving Las Vegas — FLAG: // CLIENT MUST PROVIDE: years in business
- Number of jobs completed — FLAG: // CLIENT MUST PROVIDE: jobs completed count
- Licensing or insurance status — FLAG: // CLIENT MUST CONFIRM: licensing and insurance details
- Review source mention — example: "Rated [X] stars on Google" — FLAG: // CLIENT MUST PROVIDE: real review source and rating
- Optional: team or crew detail, community involvement
- Optional: link to Google Business Profile or reviews page

Do not hardcode any numbers, ratings, years, or certifications. All values in this section must be flagged as editable and client-confirmed.

Do not add fake reviews, fake ratings, fake job counts, or fake credentials under any circumstances.

If no confirmed data is available at build time, render this section with placeholder text and clear TODO comments for each field.

---

#### SECTION 7 — FAQ

Purpose: AEO, featured snippet capture, PAA alignment, and final objection handling.

H2: Furniture and Appliance Removal FAQs

Required elements:
- 6 FAQ items rendered as an accordion (expand/collapse) or always-visible Q&A list
- Each question rendered as a visible heading (H3 or button with visible label)
- Each answer must begin with a direct-answer sentence before any elaboration
- Keyboard accessible if using accordion — use aria-expanded on trigger elements

FAQ content — use this exact text for each question and answer. The FAQPage schema must mirror this text exactly.

Q1: How much does furniture removal cost in Las Vegas?
A1: Furniture removal in Las Vegas typically costs between $75 and $300 depending on the number of items and accessibility. Pricing varies based on how many pieces need to be removed and whether they are on upper floors or require disassembly. Pit Stop Junk Removal provides free, no-obligation quotes before any work begins.

Q2: What furniture and appliances does Pit Stop Junk Removal accept?
A2: Pit Stop Junk Removal accepts couches, sofas, mattresses, box springs, refrigerators, washers, dryers, dishwashers, ovens, and most other household furniture and appliances. Items with hazardous materials such as Freon-containing appliances may require special handling. Contact us to confirm before booking.

Q3: Do you offer same-day furniture removal in Las Vegas?
A3: Yes, Pit Stop Junk Removal offers same-day and next-day furniture removal in Las Vegas when slots are available. Request a quote early in the day for the best same-day availability. Scheduling flexibility depends on current route capacity.
FLAG THIS FAQ AND ANSWER: // CLIENT MUST CONFIRM SAME-DAY SERVICE IS OFFERED. If not confirmed, replace Q3 with: "How quickly can you schedule furniture removal in Las Vegas?" and A3 with: "Pit Stop Junk Removal offers flexible scheduling for furniture removal in Las Vegas, with availability often within 1–2 business days. Contact us to check current availability."

Q4: Do you remove appliances in Las Vegas?
A4: Yes, Pit Stop Junk Removal removes refrigerators, washers, dryers, dishwashers, stoves, and other household appliances throughout the Las Vegas area. We handle the heavy lifting, including disconnection assistance and hauling from any floor in your home.

Q5: What happens to furniture after it is picked up?
A5: Pit Stop Junk Removal sorts items for donation, recycling, or responsible disposal to keep usable furniture and appliances out of Las Vegas landfills when possible. Items in good condition may be donated to local organizations. Items that cannot be reused are recycled or disposed of according to Clark County regulations.
FLAG: // CLIENT TO CONFIRM DONATION AND RECYCLING PRACTICES ARE ACCURATE

Q6: Do I need to be home for furniture or appliance pickup?
A6: In most cases, yes — someone should be present to confirm which items are being removed and to complete payment. Some situations may allow for an unattended pickup with prior arrangement. Contact us to discuss your specific situation.

Contextual internal link in FAQ section:
- In A3 or A4, if a same-day junk removal page exists at /services/same-day-junk-removal-las-vegas, add a link with anchor text: "same-day junk removal in Las Vegas". If the route does not exist, skip the link.
- In A5 or A6, if an estate cleanout page exists at /services/estate-cleanout-las-vegas, add a link with anchor text: "estate cleanout services in Las Vegas". If the route does not exist, skip the link.

---

#### SECTION 8 — MID-PAGE CTA

Purpose: Capture visitors who are ready to convert before reaching the bottom of the page.

Required elements:
- Short headline — example: "Ready to Haul It Away?"
- One-line subtext — example: "Fast, local, and hassle-free furniture and appliance pickup in Las Vegas."
- CTA button — label: "Get My Free Quote" — links to the hero form via smooth scroll anchor OR opens a modal form. Use whichever pattern exists in the project.
- Tap-to-call link — same tel: link as in Section 1. Text: "Or call us directly: [PHONE NUMBER]"

Do not repeat the full 3-field form in this section. The button or anchor is enough.

---

#### SECTION 9 — FINAL CTA

Purpose: Last conversion opportunity for visitors who reached the bottom of the page.

Required elements:
- One-sentence value restatement — example: "Pit Stop Junk Removal makes furniture and appliance removal in Las Vegas fast, easy, and hassle-free."
- Full 3-field quote request form repeated here (same fields: Name, Phone, ZIP — same submission handler)
  OR an anchor scroll button that returns the user to the hero form. Use whichever approach matches the project pattern.
- Phone number as tap-to-call link — same tel: link as Sections 1 and 8.

Do not add navigation links, related service links, or footer-style content inside this section. Keep it conversion-focused only.

---

### BREADCRUMB

Required in two forms:

1. Visible breadcrumb navigation — render above the H1 or immediately below the page header. Text and links:
   Home → Services → Furniture and Appliance Removal Las Vegas
   Home links to /
   Services links to /services (if the route exists — skip or link to / if /services does not exist)
   Current page is text only — not a link

2. BreadcrumbList JSON-LD schema — see Schema section below. Must match visible breadcrumb exactly.

---

### MOBILE STICKY CALL BUTTON

Required on mobile viewports only (hide on screens wider than 768px or the project's mobile breakpoint).

Required elements:
- Fixed position — bottom of the mobile viewport
- Phone icon (SVG or icon font — follow project conventions)
- Text: "Call Now"
- Link: <a href="tel:[PHONE NUMBER]" aria-label="Call Pit Stop Junk Removal now">
- Behavior: hide or visually dim when the user is actively viewing the hero form or final CTA form to avoid redundancy. Implement this using an IntersectionObserver or the closest equivalent pattern in the project.
- Must be keyboard accessible

If a mobile sticky call component already exists in the project, reuse it. If not, create a minimal component named MobileStickyCallBar or the closest equivalent to the project's naming convention.

---

### SCHEMA — JSON-LD

Inject all schema as <script type="application/ld+json"> blocks. Place in <head> or at the end of <body>. Follow the existing schema injection pattern in the project.

Do not place schema inside content HTML.

---

SCHEMA BLOCK 1 — LocalBusiness

{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pit Stop Junk Removal",
  "url": "[SITE URL — FLAG FOR CLIENT]",
  "telephone": "[PHONE NUMBER — FLAG FOR CLIENT]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET ADDRESS — FLAG FOR CLIENT]",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "[ZIP CODE — FLAG FOR CLIENT]",
    "addressCountry": "US"
  },
  "areaServed": [
    "Las Vegas", "Summerlin", "Henderson", "North Las Vegas",
    "Paradise", "Spring Valley", "Clark County"
  ],
  "description": "[Pull from Section 2 entity authority block — first 1–2 sentences]",
  "openingHours": "[OPENING HOURS — FLAG FOR CLIENT — must match Google Business Profile exactly]",
  "priceRange": "[OPTIONAL — FLAG FOR CLIENT — only include if accurate, e.g., '$$']"
}

FLAG ALL BRACKETED VALUES. Add a comment above the schema block:
// FLAG: All bracketed values must be confirmed by the client before launch. Do not use placeholder or estimated data.

---

SCHEMA BLOCK 2 — Service

{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Furniture and Appliance Removal",
  "serviceType": ["Furniture Removal", "Appliance Removal", "Junk Removal"],
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pit Stop Junk Removal"
  },
  "areaServed": [
    "Las Vegas", "Summerlin", "Henderson", "North Las Vegas",
    "Paradise", "Spring Valley", "Clark County"
  ],
  "description": "Pit Stop Junk Removal removes furniture and appliances from homes, apartments, and commercial properties across the Las Vegas valley."
}

---

SCHEMA BLOCK 3 — FAQPage

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does furniture removal cost in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture removal in Las Vegas typically costs between $75 and $300 depending on the number of items and accessibility. Pricing varies based on how many pieces need to be removed and whether they are on upper floors or require disassembly. Pit Stop Junk Removal provides free, no-obligation quotes before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "What furniture and appliances does Pit Stop Junk Removal accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pit Stop Junk Removal accepts couches, sofas, mattresses, box springs, refrigerators, washers, dryers, dishwashers, ovens, and most other household furniture and appliances. Items with hazardous materials such as Freon-containing appliances may require special handling. Contact us to confirm before booking."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day furniture removal in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Pit Stop Junk Removal offers same-day and next-day furniture removal in Las Vegas when slots are available. Request a quote early in the day for the best same-day availability. Scheduling flexibility depends on current route capacity."
      }
    },
    {
      "@type": "Question",
      "name": "Do you remove appliances in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Pit Stop Junk Removal removes refrigerators, washers, dryers, dishwashers, stoves, and other household appliances throughout the Las Vegas area. We handle the heavy lifting, including disconnection assistance and hauling from any floor in your home."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to furniture after it is picked up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pit Stop Junk Removal sorts items for donation, recycling, or responsible disposal to keep usable furniture and appliances out of Las Vegas landfills when possible. Items in good condition may be donated to local organizations. Items that cannot be reused are recycled or disposed of according to Clark County regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be home for furniture or appliance pickup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes — someone should be present to confirm which items are being removed and to complete payment. Some situations may allow for an unattended pickup with prior arrangement. Contact us to discuss your specific situation."
      }
    }
  ]
}

IMPORTANT: The FAQ schema text must exactly match the visible FAQ text on the page character-for-character. If the visible FAQ text is updated, the schema must be updated to match. Do not paraphrase in schema.

If the same-day FAQ (Q3) is revised due to client confirmation, update both the visible FAQ text and the schema text to match.

---

SCHEMA BLOCK 4 — BreadcrumbList

{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "[SITE ROOT URL]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "[SITE ROOT URL]/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Furniture and Appliance Removal Las Vegas",
      "item": "[SITE ROOT URL]/services/furniture-appliance-removal-las-vegas"
    }
  ]
}

The BreadcrumbList schema must match the visible breadcrumb navigation on the page. Both must exist — schema alone is not sufficient.

If the /services route does not exist, use the site root URL for position 2 and update both the visible breadcrumb and the schema accordingly.

---

SCHEMA BLOCK 5 — AggregateRating — CONDITIONAL

DO NOT implement this schema block unless real, verified review data is available.

If the client provides a confirmed ratingValue and reviewCount from Google Business Profile or verified on-page reviews, add this nested inside the LocalBusiness schema block:

"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "[REAL CONFIRMED VALUE — e.g., 4.9]",
  "reviewCount": "[REAL CONFIRMED COUNT — e.g., 87]",
  "bestRating": "5",
  "worstRating": "1"
}

Add a comment:
// FLAG: AggregateRating OMITTED until client confirms real ratingValue and reviewCount. Do not estimate. Do not invent.

Both ratingValue and reviewCount must be editable fields — not hardcoded values.

---

SCHEMA BLOCK 6 — HowTo — CONDITIONAL

Only implement if the Section 4 process steps render with these exact visible headings:
- Step 1: Request a Quote
- Step 2: Schedule Your Pickup
- Step 3: We Haul It Away

If these headings are present as visible elements, add:

{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Furniture and Appliance Removal Works",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Request a Quote",
      "text": "[Description text from Section 4 step 1 — must match visible text]"
    },
    {
      "@type": "HowToStep",
      "name": "Schedule Your Pickup",
      "text": "[Description text from Section 4 step 2 — must match visible text]"
    },
    {
      "@type": "HowToStep",
      "name": "We Haul It Away",
      "text": "[Description text from Section 4 step 3 — must match visible text]"
    }
  ]
}

If the step headings are different or the section has fewer than 3 steps, skip HowTo schema entirely.

---

### IMAGES

Hero image:
- Path: /images/services/pit-stop-junk-removal-las-vegas-truck.jpg (or match project image path convention)
- Alt: "Pit Stop Junk Removal team hauling old furniture in Las Vegas"
- loading="eager"

Items section image or icon set:
- Alt for any item grid image: "Old refrigerator and couch ready for removal in Las Vegas"
- Each item icon alt text must match its label text

Trust section image (crew or truck):
- Path: /images/services/pit-stop-crew-las-vegas.jpg (or match project convention)
- Alt: "Pit Stop Junk Removal truck in Las Vegas neighborhood"
- loading="lazy"

Optional before/after image (if included):
- Alt: "Before and after furniture removal by Pit Stop Junk Removal in Las Vegas"
- loading="lazy"

Rules for all images:
- No text inside images
- Use WebP format with JPEG fallback if the project supports it
- Compress before use — target under 100KB
- Use loading="lazy" on all images below the fold
- Follow the project's existing image component and folder structure

---

### INTERNAL LINKS

Only add links if the target route exists and resolves. Do not create broken links.

Check each target route before linking:

| Target Page | Anchor Text | Section | Action if Route Missing |
|---|---|---|---|
| /services or /services/junk-removal-las-vegas | "full junk removal services in Las Vegas" | Section 3 | Skip link |
| /services/same-day-junk-removal-las-vegas | "same-day junk removal in Las Vegas" | FAQ Section, A3 | Skip link |
| /services/estate-cleanout-las-vegas | "estate cleanout services in Las Vegas" | FAQ Section, A5 or A6 | Skip link |
| /services (parent) | "junk removal services in Las Vegas" | Section 5 | Skip link if route missing |

Report which links were added and which were skipped due to missing routes.

---

### NAVIGATION UPDATE

After the page is built, update the site navigation to include a link to the new page.

Find the services section of the main navigation and add:
Link text: Furniture and Appliance Removal
Link destination: /services/furniture-appliance-removal-las-vegas

Follow the existing navigation pattern exactly. Do not change the navigation structure.

---

### SITEMAP

If the project uses a static sitemap.xml, add the new page URL.
If the project generates a sitemap dynamically, confirm the new route will be included.

---

### DESIGN AND ACCESSIBILITY RULES

- Use the existing design system — do not introduce new color variables, font definitions, or spacing scales
- Do not change global CSS or global layout unless absolutely required
- Heading hierarchy must be logical: H1 → H2 → H3 — no skipped levels
- One H1 only — do not add a second H1
- All buttons must have descriptive accessible labels
- All form fields must have associated <label> elements — not placeholder-only
- Tap-to-call links must include aria-label="Call Pit Stop Junk Removal"
- FAQ accordion (if used) must use aria-expanded on trigger elements and be keyboard navigable
- Mobile sticky button must not obscure the primary form or final CTA when they are in the viewport
- Color contrast on buttons must meet WCAG AA minimum (4.5:1 for normal text)
- Do not add unnecessary npm packages or dependencies

---

### DO NOT LIST

Do not do any of the following under any circumstances:

- Do not add fake reviews, ratings, testimonials, or star counts
- Do not hardcode a phone number, address, rating value, review count, years in business, or job count as a final value — flag all as editable
- Do not implement AggregateRating schema with invented or estimated values
- Do not use same-day copy without flagging it for client confirmation
- Do not add more than 3 fields to the quote request form
- Do not create a duplicate route
- Do not create broken internal links — skip any link whose target route does not exist
- Do not modify unrelated pages, components, or global styles
- Do not rename existing files or components without a documented reason
- Do not add unnecessary dependencies
- Do not put text inside images
- Do not overuse keywords in headings or body text

---

## GATE 4 — VALIDATE

After building, validate the following before reporting:

- [ ] Route resolves correctly at /services/furniture-appliance-removal-las-vegas
- [ ] No duplicate route was created
- [ ] One H1 tag on the page — text: "Furniture and Appliance Removal in Las Vegas"
- [ ] Heading hierarchy is logical: H1 → H2 → H3
- [ ] Meta title is set: "Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal"
- [ ] Meta description is set
- [ ] Canonical tag is present and self-referencing
- [ ] All 9 sections are present in the correct order
- [ ] Hero form has exactly 3 fields: Name, Phone, ZIP
- [ ] Tap-to-call uses tel: protocol and is present in Sections 1, 8, 9, and the sticky bar
- [ ] Mobile sticky call button is present and fixed to the bottom of the mobile viewport
- [ ] Breadcrumb is visible as a nav element on the page
- [ ] BreadcrumbList JSON-LD matches visible breadcrumb text and URLs
- [ ] All 6 FAQ questions are visible with direct-answer lead sentences
- [ ] FAQPage JSON-LD text exactly matches visible FAQ text
- [ ] LocalBusiness schema is present with areaServed array
- [ ] AggregateRating is either absent or contains a FLAG comment — no invented values
- [ ] HowTo schema is either absent or step names match visible Section 4 headings
- [ ] All flagged client values have TODO or FLAG comments
- [ ] All outbound internal links either resolve or were skipped with a note
- [ ] All images have non-empty alt text
- [ ] No text inside images
- [ ] Hero image loads eagerly — all other images load lazily
- [ ] Page renders correctly on mobile (375px minimum viewport)
- [ ] Page renders correctly on desktop (1280px viewport)
- [ ] No unrelated files were modified
- [ ] Navigation updated with link to new page
- [ ] Sitemap updated or confirmed to include new route
- [ ] Build command passes without errors (if applicable)
- [ ] Lint command passes without errors (if applicable)

If any validation item fails, resolve it before reporting.

---

## GATE 5 — REPORT

After validation, provide a complete implementation report.

Include:

1. Summary — 2–3 sentences describing what was built
2. Files created — list all new files with full paths
3. Files updated — list all updated files with full paths and what changed
4. Route created — confirm the exact route
5. Metadata — confirm meta title, description, and canonical are set
6. Schema added — list all schema blocks implemented; note which are conditional and whether conditions were met
7. Internal links added — list links added and links skipped (with reason)
8. CTA placements — confirm all 3 CTA locations and the mobile sticky bar
9. Flagged items — list all values that require client confirmation before launch
10. Validation results — confirm all Gate 4 checks passed or note any that did not
11. Remaining issues — list any blockers, TODOs, or items that could not be resolved
12. Recommended next step — note that Prompt 07 QA review should be run after launch

Site OS Master — Benchmark 1 — Prompt 06 Complete
Workflow: Core Mode | Output Depth: Standard
Next Step: Prompt 07 — QA Review (run after the page is built and live) 