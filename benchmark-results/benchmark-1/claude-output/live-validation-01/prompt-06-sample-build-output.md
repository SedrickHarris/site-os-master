import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import MobileStickyCallBar from "@/components/MobileStickyCallBar";
import {
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildHowToSchema,
} from "@/lib/schema-utils";
import { siteConfig } from "@/lib/site-config";

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal",
  description:
    "Pit Stop Junk Removal hauls away old furniture and appliances across Las Vegas. Couches, fridges, mattresses, washers, and more. Request a free quote today.",
  alternates: {
    canonical: "/services/furniture-appliance-removal-las-vegas",
  },
  openGraph: {
    title: "Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal",
    description:
      "Pit Stop Junk Removal hauls away old furniture and appliances across Las Vegas. Couches, fridges, mattresses, washers, and more.",
    url: "/services/furniture-appliance-removal-las-vegas",
    type: "website",
  },
};

// ---------------------------------------------------------------------------
// FAQ DATA
// NOTE: FAQPage schema text must match this array exactly — do not edit one
// without editing the other.
// ---------------------------------------------------------------------------
const faqs: FAQItem[] = [
  {
    question: "What furniture does Pit Stop Junk Removal haul away in Las Vegas?",
    answer:
      "Pit Stop Junk Removal picks up sofas, couches, loveseats, sectionals, recliners, armchairs, beds, box springs, mattresses, dressers, dining tables, desks, bookshelves, and most other household furniture. Contact us if you have an item type you are unsure about.",
  },
  {
    question: "What appliances do you remove in Las Vegas?",
    answer:
      "We remove refrigerators, freezers, dishwashers, washing machines, dryers, stoves, ovens, microwaves, water heaters, and most other household appliances. Large or heavy appliances such as refrigerators are handled by our trained crew — you do not need to move them first.",
  },
  {
    question: "Do you offer same-day furniture and appliance removal in Las Vegas?",
    answer:
      // FLAG: CLIENT MUST CONFIRM SAME-DAY AVAILABILITY BEFORE LAUNCH
      "We offer flexible scheduling for furniture and appliance removal in Las Vegas. Contact us to check current availability and confirm pickup timing.",
  },
  {
    question: "How much does furniture and appliance removal cost in Las Vegas?",
    answer:
      "Pricing depends on the number of items and their size. Request a free quote online or call us for a fast estimate. There are no hidden fees.",
  },
  {
    question: "Do I need to move the furniture or appliance before you arrive?",
    answer:
      "No. Our crew handles the heavy lifting. We remove items directly from inside your home, garage, or property. You do not need to move anything to the curb beforehand.",
  },
  {
    question: "What Las Vegas areas do you serve for furniture and appliance removal?",
    answer:
      "Pit Stop Junk Removal serves Las Vegas, Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and the surrounding Clark County area. Contact us to confirm service availability at your address.",
  },
];

// ---------------------------------------------------------------------------
// HOW IT WORKS — Step data
// HowTo schema is included because visible step content matches exactly below.
// ---------------------------------------------------------------------------
const howItWorksSteps = [
  {
    name: "Request a Quote",
    text: "Fill out the 3-field form on this page or call us directly. We will confirm pricing and scheduling with you.",
  },
  {
    name: "Schedule Your Pickup",
    text: "Choose a pickup window that works for your schedule. We offer flexible availability including weekends.",
  },
  {
    name: "We Haul It Away",
    text: "Our crew arrives on time, removes the furniture or appliances from your property, and cleans up before they leave.",
  },
];

// ---------------------------------------------------------------------------
// ITEMS WE REMOVE
// ---------------------------------------------------------------------------
const furnitureItems = [
  "Sofas & Couches",
  "Sectionals & Loveseats",
  "Mattresses & Box Springs",
  "Bed Frames & Headboards",
  "Dressers & Wardrobes",
  "Dining Tables & Chairs",
  "Desks & Office Furniture",
  "Recliners & Armchairs",
  "Bookshelves & Cabinets",
  "Patio Furniture",
];

const applianceItems = [
  "Refrigerators & Freezers",
  "Washing Machines & Dryers",
  "Dishwashers",
  "Stoves & Ovens",
  "Microwaves",
  "Water Heaters",
  "Air Conditioners",
  "Dehumidifiers",
];

// ---------------------------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------------------------
export default function FurnitureApplianceRemovalLasVegasPage() {
  // Build schema array — no AggregateRating, no Review schema
  const schemas = [
    buildLocalBusinessSchema(),
    buildServiceSchema({
      name: "Furniture and Appliance Removal",
      serviceType: [
        "Furniture Removal",
        "Appliance Removal",
        "Junk Removal",
        "Couch Removal",
        "Refrigerator Removal",
        "Mattress Removal",
      ],
      description:
        "Pit Stop Junk Removal removes furniture and appliances from homes, apartments, and commercial properties across the Las Vegas valley.",
      areaServed: siteConfig.serviceAreas,
    }),
    buildBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Services", item: "/services" },
      { name: "Furniture and Appliance Removal" },
    ]),
    buildFAQSchema(faqs),
    // HowTo schema included because visible How It Works steps below match exactly
    buildHowToSchema(howItWorksSteps),
  ];

  return (
    <>
      {/* JSON-LD schema — injected server-side */}
      <JsonLd schema={schemas} />

      {/* Mobile sticky call bar — hidden on desktop via md:hidden in component */}
      <MobileStickyCallBar />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — HERO                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#1A1A2E] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: headline, direct answer, CTA copy */}
          <div>
            {/* Breadcrumb — visible */}
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-gray-400 mb-5"
            >
              <ol className="flex gap-2 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Furniture &amp; Appliance Removal</li>
              </ol>
            </nav>

            {/* H1 — ONE H1 ONLY on this page */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Furniture and Appliance Removal in Las Vegas
            </h1>

            {/* DIRECT ANSWER BLOCK — EDIT BEFORE LAUNCH */}
            {/* Purpose: Featured snippet eligibility, AI citation readiness */}
            <p className="text-gray-300 mb-5 text-base leading-relaxed">
              Pit Stop Junk Removal picks up old furniture and appliances from
              Las Vegas homes, apartments, and businesses — including sofas,
              refrigerators, mattresses, and washers — with fast, flexible
              scheduling across the Las Vegas valley.
            </p>

            {/* Urgency copy — FLAG: CLIENT MUST CONFIRM SAME-DAY AVAILABILITY BEFORE LAUNCH */}
            {/* If same-day is not confirmed, use fallback: "Fast, flexible scheduling for Las Vegas homeowners and renters." */}
            <p className="text-gray-400 text-sm mb-6">
              Fast, flexible scheduling for Las Vegas homeowners and renters.
            </p>

            {/* Tap-to-call — secondary CTA */}
            <a
              href={siteConfig.phoneHref} // FLAG: CLIENT MUST PROVIDE REAL PHONE NUMBER
              className="inline-flex items-center gap-2 text-[#D72638] font-semibold hover:underline text-sm"
              aria-label="Call Pit Stop Junk Removal"
            >
              {/* Phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              {/* FLAG: Replace with real phone number */}
              Prefer to call? {siteConfig.phone}
            </a>
          </div>

          {/* Right: Quote request form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-[#1A1A2E] font-semibold mb-1 text-lg">
              Request a Free Quote
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Furniture and appliance removal in Las Vegas. No hidden fees.
            </p>
            {/* QuoteForm — reusing existing component, 3 fields: Name, Phone, ZIP */}
            <QuoteForm ctaLabel="Request a Free Quote" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — ENTITY AUTHORITY BLOCK                                 */}
      {/* Purpose: AI citation readiness, featured snippet, topical authority */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base leading-relaxed">
            Pit Stop Junk Removal is a Las Vegas junk removal company that
            removes furniture, appliances, and bulky items from homes,
            apartments, and commercial properties across the Las Vegas valley.
            They serve homeowners, renters, landlords, and property managers who
            need old couches, refrigerators, mattresses, and other items hauled
            away quickly.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — WHAT WE REMOVE                                         */}
      {/* Purpose: Topical coverage, keyword surface area, snippet eligibility */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 px-4 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">
            What We Remove
          </h2>
          <p className="text-gray-600 mb-10 text-sm">
            We haul away furniture and appliances of all kinds — no sorting
            required on your end.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Furniture column */}
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">
                Furniture
              </h3>
              <ul className="space-y-2">
                {furnitureItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-[#D72638] flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Appliances column */}
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">
                Appliances
              </h3>
              <ul className="space-y-2">
                {applianceItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-[#D72638] flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Have an item not listed?{" "}
            <a
              href={siteConfig.phoneHref}
              className="text-[#D72638] hover:underline font-medium"
              aria-label="Call Pit Stop Junk Removal to ask about your item"
            >
              Call us
            </a>{" "}
            and we will let you know if we can take it.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — WHY IT MATTERS / PAIN POINTS                           */}
      {/* Purpose: Empathy, conversion, AEO relevance                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">
            Why Las Vegas Homeowners Call Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                heading: "No truck, no problem",
                body: "Hauling a refrigerator or sectional sofa requires a large truck and at least two people. Most homeowners do not have either. We handle the truck, the crew, and the heavy lifting.",
              },
              {
                heading: "Moving or clearing out a home",
                body: "Whether you are moving to a new place, handling an estate cleanout, or clearing a rental property between tenants, we can remove large furniture and appliances quickly.",
              },
              {
                heading: "Old appliances that stopped working",
                body: "Broken refrigerators, dryers, and washing machines take up space and can not simply be placed in the trash. We pick them up and haul them away properly.",
              },
              {
                heading: "Las Vegas heat makes DIY harder",
                body: "Moving heavy furniture and appliances in the Las Vegas heat is exhausting and potentially dangerous. Let our crew handle it year-round.",
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="border border-gray-100 rounded-lg p-5 bg-[#F9F9F9]"
              >
                <h3 className="font-semibold text-[#1A1A2E] mb-2 text-base">
                  {heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — HOW IT WORKS                                           */}
      {/* HowTo schema is included — step names match H3 headings exactly    */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">
            How It Works
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, index) => (
              <li key={step.name} className="flex flex-col gap-3">
                <span className="text-3xl font-bold text-[#D72638] leading-none">
                  {index + 1}
                </span>
                {/* Step names here must match howItWorksSteps[].name exactly (HowTo schema) */}
                <h3 className="text-base font-semibold text-[#1A1A2E]">
                  {step.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6 — TRUST / WHY CHOOSE PIT STOP                           */}
      {/* No fake ratings, no invented reviews — trust built with copy only   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">
            Why Choose Pit Stop Junk Removal
          </h2>
          <ul className="space-y-4">
            {[
              {
                label: "Local Las Vegas company",
                detail:
                  "We are based in Las Vegas and serve the local community — not a national franchise.",
              },
              {
                label: "No hidden fees",
                detail:
                  "You get a clear price before we start. No surprises when the truck arrives.",
              },
              {
                label: "We do the heavy lifting",
                detail:
                  "Our crew removes items directly from your home or property. You do not need to move anything to the curb.",
              },
              {
                label: "Responsible disposal",
                detail:
                  "We haul your items to the appropriate facilities. We do not dump illegally.",
              },
              {
                label: "Flexible scheduling",
                detail:
                  "We work around your schedule, including evenings and weekends where available.",
              },
            ].map(({ label, detail }) => (
              <li key={label} className="flex items-start gap-3">
                <span
                  className="mt-1 w-4 h-4 rounded-full bg-[#D72638] flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <span className="font-semibold text-[#1A1A2E] text-sm">
                    {label}
                  </span>
                  <span className="text-gray-600 text-sm"> — {detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7 — SERVICE AREA                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
            Furniture and Appliance Removal Across Las Vegas
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Pit Stop Junk Removal picks up furniture and appliances throughout
            the Las Vegas valley, including Las Vegas, Henderson, North Las
            Vegas, Summerlin, Paradise, and Spring Valley. We serve homeowners,
            renters, landlords, and property managers across Clark County.
          </p>
          <p className="text-gray-600 text-sm">
            Looking for{" "}
            {/* Internal link — route /services/junk-removal-las-vegas confirmed in Gate 1 */}
            <Link
              href="/services/junk-removal-las-vegas"
              className="text-[#D72638] hover:underline"
            >
              full junk removal services in Las Vegas
            </Link>
            ? We handle all types of junk removal beyond furniture and
            appliances.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 8 — MID-PAGE CTA (second CTA placement)                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 px-4 bg-[#D72638] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Haul It Away?
          </h2>
          <p className="mb-6 text-red-100 text-sm">
            Get a free quote for furniture and appliance removal in Las Vegas.
            No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote-form-bottom"
              className="bg-white text-[#D72638] font-semibold px-6 py-3 rounded hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            >
              Request a Free Quote
            </a>
            <a
              href={siteConfig.phoneHref} // FLAG: CLIENT MUST PROVIDE REAL PHONE NUMBER
              className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              aria-label="Call Pit Stop Junk Removal"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 9 — FAQ                                                     */}
      {/* FAQSection component — accordion pattern                            */}
      {/* FAQPage schema text mirrors this array exactly                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection
            faqs={faqs}
            title="Furniture and Appliance Removal FAQ"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 10 — BOTTOM CTA FORM (third CTA placement)                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="quote-form-bottom"
        className="py-16 px-4 bg-[#1A1A2E] text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            Request a Free Quote in Las Vegas
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Furniture removal. Appliance removal. Las Vegas and surrounding
            areas. Fast response.
          </p>
          <div className="bg-white rounded-lg p-6 text-left">
            <QuoteForm ctaLabel="Request a Free Quote" />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Prefer to call?{" "}
            <a
              href={siteConfig.phoneHref} // FLAG: CLIENT MUST PROVIDE REAL PHONE NUMBER
              className="text-[#D72638] hover:underline"
              aria-label="Call Pit Stop Junk Removal"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* RELATED SERVICES — internal links                                   */}
      {/* Routes confirmed in Gate 1 before linking                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 px-4 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-[#1A1A2E] mb-4">
            Related Services
          </h2>
          <ul className="space-y-2 text-sm">
            {/* Route /services/junk-removal-las-vegas — confirmed in Gate 1 */}
            <li>
              <Link
                href="/services/junk-removal-las-vegas"
                className="text-[#D72638] hover:underline"
              >
                Junk Removal in Las Vegas
              </Link>
            </li>
            {/* Route /services — confirmed in Gate 1 */}
            <li>
              <Link
                href="/services"
                className="text-[#D72638] hover:underline"
              >
                All junk removal services in Las Vegas
              </Link>
            </li>
            {/* PLANNED LINK — ROUTE NOT YET BUILT: /services/same-day-junk-removal-las-vegas */}
            {/* PLANNED LINK — ROUTE NOT YET BUILT: /services/estate-cleanout-las-vegas */}
            {/* PLANNED LINK — ROUTE NOT YET BUILT: /services/mattress-removal-las-vegas */}
          </ul>
        </div>
      </section>
    </>
  );
} 