# Pit Stop Junk Removal — Sample Website Scaffold

**Project:** Site OS Master — Benchmark 1  
**Business:** Pit Stop Junk Removal | Las Vegas, NV  
**Framework:** Next.js 14 App Router + TypeScript + Tailwind CSS  
**Scaffold status:** Complete — ready for Prompt 06 v2.1 build  

---

## Purpose

This sample project exists to live-test the Site OS Master Core Mode workflow in a real, buildable website environment.

It gives Prompt 06 v2.1 and Prompt 07 v1.1 an actual website structure to inspect, build inside, and QA.

---

## Benchmark

| Field | Value |
|---|---|
| Benchmark | Benchmark 1 |
| Business | Pit Stop Junk Removal |
| Page Type | Service Page |
| Service | Furniture and Appliance Removal |
| Location | Las Vegas, NV |
| Goal | Generate quote requests |
| CTA | Request a Free Quote |

---

## Prompts Tested

- Prompt 06 v2.1: Claude Code Build Prompt
- Prompt 07 v1.1: QA Review Prompt

---

## Stack

- Next.js 14
- App Router
- TypeScript
- Tailwind CSS
- Static-friendly structure
- Reusable components
- Safe JSON-LD support
- Basic sitemap support
- Basic robots support

---

## Brand Direction

| Token | Value |
|---|---|
| Red | `#B82429` |
| Red Dark | `#8E1A1E` |
| Black | `#111111` |
| White | `#FFFFFF` |

Checkered racing flag inspiration is handled as a CSS-only accent. No image or logo dependency is required.

---

## Project Structure

```text
pit-stop-junk-removal-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── globals.css
│   ├── services/
│   │   ├── page.tsx
│   │   ├── junk-removal-las-vegas/
│   │   │   └── page.tsx
│   │   └── furniture-appliance-removal-las-vegas/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── free-quote/
│       └── page.tsx
├── components/
│   ├── forms/
│   │   └── QuoteForm.tsx
│   ├── ui/
│   │   ├── CTABlock.tsx
│   │   ├── FAQSection.tsx
│   │   └── MobileStickyCallBar.tsx
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   └── SiteFooter.tsx
│   └── schema/
│       ├── JsonLd.tsx
│       └── schemas.ts
├── lib/
│   └── site-config.ts
├── types/
│   └── index.ts
├── public/
│   ├── robots.txt
│   └── images/
│       └── services/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── .eslintrc.json