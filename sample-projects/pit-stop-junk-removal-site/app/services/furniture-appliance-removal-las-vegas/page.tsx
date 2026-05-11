import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "Furniture and Appliance Removal in Las Vegas | Pit Stop Junk Removal",
  description:
    "Stub page for the Prompt 06 v2.1 live build validation. This page must be expanded by Prompt 06 before launch.",
  alternates: {
    canonical: "/services/furniture-appliance-removal-las-vegas",
  },
};

export default function FurnitureApplianceRemovalLasVegasStubPage() {
  return (
    <main>
      <section className="bg-[#111111] px-4 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#B82429]">
            Stub Page
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Furniture and Appliance Removal in Las Vegas
          </h1>

          <p className="max-w-2xl text-lg text-gray-200">
            This is a scaffold stub for the Benchmark 1 service page. Prompt 06
            v2.1 must inspect this file, preserve existing project patterns, and
            replace or expand it into the full Furniture and Appliance Removal
            service page.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/free-quote"
              className="inline-flex rounded-md bg-[#B82429] px-6 py-3 font-semibold text-white transition hover:bg-[#8E1A1E]"
            >
              Request a Free Quote
            </Link>

            <Link
              href="/services"
              className="inline-flex rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <CTABlock
        eyebrow="Prompt 06 Build Target"
        title="This page is ready for Prompt 06 v2.1."
        description="The full benchmark service page should be created during the live validation build, not during scaffold setup."
        primaryCtaLabel="Request a Free Quote"
        primaryCtaHref="/free-quote"
      />
    </main>
  );
} 