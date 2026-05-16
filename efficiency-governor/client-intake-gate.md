---
File: efficiency-governor/client-intake-gate.md
Version: v1.2
Status: Active — Efficiency Governor Layer
Purpose: Hard gate checklist — no client website build begins until this gate is cleared
Used by: Prompt 05 Workflow Mode Gate (Step 3), Prompt 06 Gate 1, Prompt 08, Prompt 09
Does not replace: prompts/10-client-data-collection-prompt.md (use Prompt 10 to collect data; use this file to gate the build)
---

# Site OS Master — Client Intake Gate

**Last reviewed:**
**Reviewed by:**
**Client approval status:**

---

## Rule

No client website build begins until this gate is cleared.

Before any prompt sequence runs past Prompt 05, the project owner must confirm one of the following statuses for every field in this checklist:

- **CONFIRMED** — Data is verified and ready to use
- **APPROVED PLACEHOLDER** — Data is missing but the project owner has explicitly approved placeholder content for the build
- **MISSING — FLAGGED** — Data is missing, no placeholder approval exists; this field becomes a TODO in Prompt 06 and a launch blocker until resolved

A build may proceed with APPROVED PLACEHOLDER fields. A build may proceed with launch-critical MISSING — FLAGGED fields only if the project owner explicitly approves placeholder use or confirms the item will be resolved before launch.

---

## Do Not Fabricate Rule

Do not invent licenses, insurance status, review counts, years in business, awards, certifications, pricing, service areas, business hours, or legal claims at any stage of the build.

If a field is not confirmed by the client, mark it as MISSING — FLAGGED or APPROVED PLACEHOLDER. Never use an assumed or plausible value as a confirmed fact. This rule applies to copy, schema, CTAs, trust signals, and metadata.

---

## Project Type

Select the project type before completing the checklist. This file is optimized for local service businesses. Directory, SaaS, and programmatic projects may require additional intake files.

```
Project Type:
[ ] Local service business (this checklist applies fully)
[ ] Directory / marketplace (use directory intake supplement)
[ ] SaaS / product site (use SaaS intake supplement)
[ ] Landing page / funnel (use simplified intake)
[ ] Other — describe: _______________
```

---

## Build Blocker vs Launch Blocker

These are different. Know the difference before starting.

**Build blockers** prevent Prompt 06 from starting at all. A build blocker means there is not enough core context to build anything meaningful. Example: no business name, no services, no CTA goal.

**Launch blockers** allow the build to continue using `// TODO` placeholders but must be resolved before Prompt 09 Final Launch QA. Example: phone number missing — the page builds fine with a TODO, but cannot launch until a real number is added.

Most missing fields are launch blockers, not build blockers.

---

## Minimum Viable Intake for Phase 1 MVP

Review this checklist before Prompt 05 produces the final Developer Build Brief. Prompt 05 may still run to identify missing data — but it must not produce a final build brief handed to Prompt 06 until the minimum below is cleared or approved with placeholders.

```
Minimum Required — Phase 1 MVP:
[ ] Public-facing business name
[ ] Primary phone or approved placeholder decision
[ ] Primary email or approved placeholder decision
[ ] Approved services list (at least 1)
[ ] Priority services (top 3–5)
[ ] Approved service cities (at least 1)
[ ] Priority cities (top 3)
[ ] Primary CTA label and goal
[ ] Form endpoint or placeholder approval confirmed
[ ] Production domain or staging domain decision
[ ] Legal copy status (client-provided / placeholder approved / needed)
[ ] Index/noindex launch decision confirmed
```

If any of the above are missing without placeholder approval, resolve them before Prompt 05 produces the final build brief.

---

## Section 1 — Business Identity

When possible, record the source of confirmed data in the Value or Placeholder field (e.g. client-provided / GBP / existing website / owner approved / placeholder). This prevents conflicts between GBP data, website copy, and client notes.

| Field | Status | Value or Placeholder |
|---|---|---|
| Legal business name | | |
| Public-facing business name | | |
| Business category / industry | | |
| Short business description (1–2 sentences) | | |
| Years in business | | |
| Owner or contact name | | |

---

## Section 2 — Contact Information

These fields are launch-critical. Missing values block tap-to-call, schema, and CTA functionality.

| Field | Status | Value or Placeholder |
|---|---|---|
| Primary phone number | | |
| Click-to-call format (e.g. +17025551234) | | |
| Primary business email | | |
| Contact page URL or route | | |
| Preferred lead capture method (form / call / both) | | |

---

## Section 3 — Address and Service Area

| Field | Status | Value or Placeholder |
|---|---|---|
| Street address, ZIP, or approved service-area-only configuration | | |
| City | | |
| State | | |
| Country | | |
| Is the address public-facing or service-area only? | | |
| Named service cities or counties | | |
| Primary city (used for homepage and schema) | | |

---

## Section 4 — Business Hours

Missing hours block LocalBusiness schema and GBP alignment.

| Field | Status | Value or Placeholder |
|---|---|---|
| Standard business hours (Mon–Sun) | | |
| Emergency or after-hours availability | | |
| Holiday hours or exceptions | | |
| Same-day availability (yes / no / confirm) | | |
| Appointment-only or walk-in | | |

---

## Section 5 — Services

| Field | Status | Value or Placeholder |
|---|---|---|
| Full approved services list | | |
| Priority services (top 3–5 for Phase 1) | | |
| Service descriptions (1–3 sentences each) | | |
| Services to exclude or not promote | | |
| Pricing model (flat / hourly / quote-based) | | |
| Pricing range (if approved for use in copy) | | |

---

## Section 6 — Locations

| Field | Status | Value or Placeholder |
|---|---|---|
| Full approved locations or cities list | | |
| Priority cities (top 3 for Phase 1) | | |
| Priority service + city combinations (top 15) | | |
| Service area radius or named counties | | |

---

## Section 7 — Brand Assets

| Field | Status | Value or Placeholder |
|---|---|---|
| Logo file (SVG or PNG preferred) | | |
| Primary brand color (hex) | | |
| Secondary brand color (hex) | | |
| Primary font | | |
| Secondary font | | |
| Approved photos or image assets | | |
| Before/after photos (if applicable) | | |

---

## Section 8 — Trust and Proof Signals

Do not use any of these in copy or schema until confirmed by the client. They are common launch blockers.

| Field | Status | Value or Placeholder |
|---|---|---|
| Licensed (yes / no / confirm) | | |
| Insured (yes / no / confirm) | | |
| Certifications or credentials | | |
| Awards or recognitions | | |
| Number of jobs completed | | |
| Google review rating and count | | |
| Google review link | | |
| Testimonials approved for use | | |

---

## Section 9 — Online Presence

| Field | Status | Value or Placeholder |
|---|---|---|
| Google Business Profile URL | | |
| Facebook URL | | |
| Instagram URL | | |
| Other social profiles | | |
| Production domain (e.g. pitStopjunkremoval.com) | | |
| Staging domain (if applicable) | | |

---

## Section 10 — Forms and CTA Infrastructure

Missing form endpoints block the primary conversion path and are a launch blocker.

| Field | Status | Value or Placeholder |
|---|---|---|
| Form type (GHL / Typeform / native / other) | | |
| Form embed code or endpoint URL | | |
| Calendar embed code (if applicable) | | |
| Thank-you or confirmation page route | | |
| CTA button label (primary) | | |
| CTA button label (secondary) | | |
| Lead notification email | | |

---

## Section 11 — Analytics and Indexing

| Field | Status | Value or Placeholder |
|---|---|---|
| Google Analytics 4 measurement ID (G-XXXXXXX) | | |
| Google Tag Manager container ID (GTM-XXXXXX) | | |
| Google Search Console access (yes / pending / no) | | |
| Google Search Console verification token | | |
| Bing Webmaster Tools access (yes / pending / no) | | |
| Bing Webmaster verification token | | |
| Microsoft Clarity ID (if applicable) | | |
| Index/noindex launch decision confirmed (index all / selective noindex / confirm per page) | | |

---

## Section 12 — Legal Copy

Do not publish forms that collect personal data without an approved privacy policy URL and form consent language. These are launch blockers when a lead capture form is present.

| Field | Status | Value or Placeholder |
|---|---|---|
| Privacy policy (client-provided / placeholder approved / needed) | | |
| Terms and conditions (client-provided / placeholder / needed) | | |
| Privacy policy URL | | |
| Terms URL | | |
| Form consent language approved | | |

---

## Section 13 — Competitor Context

Optional but improves keyword and content strategy.

| Field | Status | Value or Placeholder |
|---|---|---|
| Top 3 competitors by name | | |
| Top competitor URLs | | |
| Known competitive advantages over competitors | | |

---

## Gate Clearance Decision

After reviewing all sections, record the gate decision:

```
Client Intake Gate Status
Date reviewed: [DATE]
Reviewed by: [NAME OR ROLE]
Project type: [Local service / Directory / SaaS / Landing page / Other]

CONFIRMED fields: [COUNT]
APPROVED PLACEHOLDER fields: [COUNT]
MISSING — FLAGGED fields: [COUNT]

Minimum viable intake complete: Yes / No
Build blockers present: Yes / No — [list if yes]
Launch blockers present: Yes / No — [list if yes]

Gate decision:
[ ] CLEARED — All required fields confirmed or approved with placeholders. Build may begin.
[ ] CLEARED WITH FLAGS — Build may begin. Flagged fields become Prompt 06 TODOs and must be resolved before launch.
[ ] NOT CLEARED — Minimum viable intake is incomplete without placeholder approval. Resolve before build begins.

Notes:
[ADD NOTES]
```

---

## Launch Blocker Reference

The following fields, if missing and not approved as placeholders, block production launch regardless of build completion. The build may proceed with TODOs — the launch may not.

1. Production domain (canonical URL, sitemap, robots.txt cannot be finalized)
2. Primary phone number or approved no-phone launch decision
3. Business address, ZIP, or approved no-address / service-area-only launch decision (for LocalBusiness schema)
4. Business hours or appointment-only status (for LocalBusiness schema and GBP alignment)
5. Form endpoint or approved alternative conversion path
6. Privacy policy URL (required when form collects personal data)
7. Form consent language approved
8. Index/noindex launch decision confirmed

Use `// TODO` placeholders for all of these during the build. Resolve before Prompt 09 Final Launch QA.

---

## Prompt 05 Summary Output Block

When Prompt 05 references this gate, it must output this block as part of the Workflow Mode Gate step:

```
Client Intake Gate Summary
Status: CLEARED / CLEARED WITH FLAGS / NOT CLEARED
Build may proceed: Yes / No
Launch blockers present: Yes / No
Launch blocker list: [list or None]
Approved placeholders: [list or None]
Prompt 06 TODOs generated from missing data: [list or None]
Owner follow-up required before launch: [list or None]
```

---

## Related Files

- `prompts/10-client-data-collection-prompt.md` — use to collect and validate client data
- `prompts/05-developer-build-brief-prompt.md` — Workflow Mode Gate Step 3 references this file
- `efficiency-governor/compact-strategy-summary-template.md` — use after intake is cleared to summarize strategy for Claude Code
- planned — `build-packs/local-service-mvp/required-inputs.md` — build pack input requirements for local service sites (file not yet created)

---

Site OS Master — Client Intake Gate v1.2
Efficiency Governor Layer | Patched from v1.1: added last-reviewed header fields, clarified minimum viable intake trigger (before final Prompt 05 build brief, not before Prompt 05 runs), added source-of-truth note to Section 1, updated launch blocker 3 to include approved no-address decision, added privacy/compliance note to Section 12
