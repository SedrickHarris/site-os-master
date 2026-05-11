# Pit Stop Junk Removal Sample Site

## Purpose

This sample project is used to test the Site OS Master Core Mode workflow in a real, buildable website environment.

This project gives Prompt 06 v2.1 and Prompt 07 v1.1 an actual website structure to inspect, build inside, and QA.

## Benchmark

Benchmark: Benchmark 1  
Business: Pit Stop Junk Removal  
Page Type: Service Page  
Service: Furniture and Appliance Removal  
Location: Las Vegas, NV  
Goal: Generate quote requests  
CTA: Request a Free Quote  

## Prompts Tested

- Prompt 06 v2.1: Claude Code Build Prompt
- Prompt 07 v1.1: QA Review Prompt

## Project Goal

Create a small, buildable website project that allows Prompt 06 to inspect real framework files, routes, components, styling, metadata, schema, forms, and validation scripts.

The sample site should allow a complete end-to-end workflow:

1. Prompt 06 inspects the project.
2. Prompt 06 creates a Gate 2 build plan.
3. Prompt 06 builds the Furniture and Appliance Removal service page.
4. Prompt 07 reviews the actual implementation files.
5. Prompt 07 validates SEO, AEO, GEO, schema, form behavior, accessibility, mobile readiness, and build results.

## Recommended Stack

- Next.js 14
- App Router
- TypeScript
- Tailwind CSS
- Static-friendly structure
- Simple quote request form placeholder
- JSON-LD schema support
- Sitemap and robots.txt support

## Brand Direction

Use Pit Stop Junk Removal brand direction:

- Red: `#B82429`
- Dark red: `#8E1A1E`
- Black: `#111111`
- White: `#FFFFFF`
- Checkered racing flag inspiration as a CSS-only accent, with no image or logo dependency required.

## Required Sample Site Features

The sample project should eventually include:

- Homepage
- Services index page
- Service page route structure
- Shared layout
- Header
- Footer
- CTA component
- Quote form component
- FAQ component
- Schema utility or JSON-LD component
- Basic sitemap support
- Basic robots.txt support
- Build scripts
- Lint or validation scripts where practical

## Recommended Project Structure

```text
pit-stop-junk-removal-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   └── services/
│       └── page.tsx
│           ⚠️ /services/furniture-appliance-removal-las-vegas ← NOT CREATED YET
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTASection.tsx
│   ├── QuoteForm.tsx
│   ├── FAQSection.tsx
│   └── JsonLd.tsx
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── .eslintrc.json