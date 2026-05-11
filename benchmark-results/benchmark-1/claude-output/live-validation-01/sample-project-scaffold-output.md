Router Decision (Fast Mode — File/Folder Setup)
Task type: File organization + scaffold creation
Page/task value: Infrastructure (not a content page)
Competition level: N/A
Recommended workflow mode: Fast Mode
Recommended prompt: None required — pure file creation task
Prompts to skip: All strategy prompts
Recommended model/effort: Low
Output depth: Compact
Token-saving instruction: Skip all strategy context, execute directly

Now creating all required files:Searched project for “Pit Stop Junk Removal site config business details Las Vegas”Searched project for “Pit Stop Junk Removal site config business details Las Vegas”Good — I have all the business context I need. Now creating all files:Created 26 files, ran a commandCreated 26 files, ran a commandNow verify the full tree:Verify all required files existVerify all required files existAll 26 required files are present. Here's the complete summary:

Scaffold Complete ✓
26 files created inside sample-projects/pit-stop-junk-removal-site/
What was built
Config & types

lib/site-config.ts — single source of truth for all business data (phone, address, hours, service areas, same-day flag). All client-required values are flagged with comments.
types/index.ts — shared TypeScript types for FAQs, schema objects, reviews, services.

Schema system

components/schema/schemas.ts — builders for LocalBusiness, Service, FAQPage, and BreadcrumbList JSON-LD.
components/schema/JsonLd.tsx — <script type="application/ld+json"> injection component.
AggregateRating intentionally omitted per Site OS rules — flagged for client confirmation only.

Components

QuoteForm.tsx — 3-field form (Name, Phone, ZIP), accessible labels, submit handler with TODO for real endpoint.
CTABlock.tsx — reusable CTA section with primary button + tap-to-call link.
FAQSection.tsx — accessible accordion with aria-expanded, keyboard support.
MobileStickyCallBar.tsx — fixed bottom call bar, mobile-only, hides when hero form is in viewport via IntersectionObserver.
SiteHeader.tsx / SiteFooter.tsx — full navigation with service links and tap-to-call.

Pages

app/layout.tsx — root layout with LocalBusiness schema, skip link, sticky call bar.
app/page.tsx — homepage with hero, entity authority block, services grid.
app/services/page.tsx — services index.
app/services/junk-removal-las-vegas/page.tsx — full service page with Service + FAQPage schema, breadcrumbs, How It Works, service area, 6 FAQs.
app/services/furniture-appliance-removal-las-vegas/page.tsx — same structure, benchmark-aligned FAQ content.
app/contact/page.tsx — contact info + quote form.
app/free-quote/page.tsx — dedicated quote landing page.
app/sitemap.ts — dynamic sitemap with all routes and priority weights.

Config files

package.json, next.config.mjs, tsconfig.json, tailwind.config.ts, postcss.config.mjs, .eslintrc.json — all wired for Next.js 14 App Router + Tailwind.
public/robots.txt — allow all, sitemap URL flagged for client confirmation.

Before launch — client must provide

Real phone number (8 flagged locations)
Business address and ZIP
Email address
Confirm same-day availability (sameDayAvailable in site-config.ts)
Confirm service hours (must match Google Business Profile)
Connect form actionUrl to real CRM/webhook endpoint
Confirm brand colors in tailwind.config.ts
Confirm production domain in site-config.ts and robots.txt 