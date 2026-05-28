# Required Website Design Skills

A standalone universal standard for design skill routing across every Site OS Master website build. Applies to every client engagement regardless of stack, vertical, project type, or workflow mode. This doc is the single source of truth — every other reference to required design skills points back here to prevent drift.

## Purpose

Site OS Master must route every page build through the approved design skill system before implementation. Premium design, intentional motion, impeccable visual polish, conversion-focused UX, and SEO/AEO/LLM-ready page architecture are not optional polish steps applied after the fact — they are required passes that govern strategy, page planning, copy structure, UX planning, and the final build prompt.

This standard exists because:

- Without a routed skill pass, builds drift toward generic templates that lack visual hierarchy, conversion focus, or AI/LLM-ready structure
- Without a single canonical reference, design rules duplicated across multiple prompts and templates drift apart over time
- Without QA gates tied to the skill pass, design quality slips silently between sessions or operators

## Required Skills

The following five skills are required for every website page build. They are listed in the order they typically run inside a page-build session.

### 1. frontend-design-engineer

**Controls:** responsive layout, component structure, semantic HTML, accessibility, scalable UI patterns, and clean implementation.

**Used for:** declaring the page's component composition, breakpoints, semantic landmark structure, accessibility minimums, and the underlying implementation pattern. This skill governs the foundation everything else sits on.

### 2. emil-kowalski-motion-design

**Controls:** intentional motion, scroll reveal planning, hover states, microinteractions, page transitions, and motion restraint.

**Used for:** declaring the motion strategy. Motion must be intentional, reduced-motion-safe, and restrained — animation exists to clarify, not decorate. Scroll reveals, hover states, microinteractions, and transitions must be planned, not improvised in implementation.

### 3. impeccable-ui-polish

**Controls:** visual refinement, spacing, alignment, rhythm, typography hierarchy, card polish, section balance, and premium finish.

**Used for:** turning a competent layout into a premium one. Spacing rhythm, alignment, vertical balance between sections, typographic hierarchy, card detailing, and the polish that separates a generic template from a finished page.

### 4. ux-ui-conversion-design

**Controls:** CTA strategy, conversion flow, form placement, trust sections, friction reduction, lead capture, and page clarity.

**Used for:** ensuring the page actually converts. Primary and secondary CTAs are placed deliberately; forms are sized, labeled, and located to reduce friction; trust signals appear where objections would otherwise block conversion; the conversion path is clear at every scroll position.

### 5. seo-aeo-llm-page-architecture

**Controls:** H1 and H2 structure, direct answers, semantic sections, FAQ strategy, schema planning, internal links, metadata, and LLM-ready page structure.

**Used for:** ensuring the page is structured for Google Search, Bing, voice search, AEO featured snippets, People Also Ask, ChatGPT, Perplexity, and AI assistants. Heading hierarchy, direct-answer formatting, semantic landmarks, FAQ structure, schema planning, internal link routing, and metadata all sit under this skill.

## How Claude Project Uses the Skills

Claude Project (the strategy side) uses the skills during planning. Specifically:

- During keyword strategy (Prompt 01) — `seo-aeo-llm-page-architecture` informs heading and direct-answer planning
- During page outline (Prompt 02) — all five skills inform the section list, section purpose, motion plan, conversion plan, and SEO/AEO structure
- During 10-metric and gap-fix (Prompts 03–04) — `ux-ui-conversion-design` and `seo-aeo-llm-page-architecture` flag missing conversion or structural elements
- During developer build brief (Prompt 05) — the brief must declare which skills were applied and what each one produced
- During Claude Code build prompt generation (Prompt 06 — strategy side) — all five skills produce inputs that the final build prompt embeds for Claude Code

Claude Project must declare the design skill pass for each page in the build brief, including which skills applied, what each one produced, and any open questions for the operator.

## How Claude Code Uses the Skills

Claude Code (the implementation side) follows the selected design skill instructions during implementation. Specifically:

- During Gate 1 inspection — confirm the build brief includes the design skill pass and confirm the existing project has the design system, motion patterns, polish tokens, conversion components, and SEO/AEO structure the skills will need
- During Gate 2 planning — translate the skill outputs into the file scope, component plan, motion plan, polish plan, conversion plan, and SEO/AEO plan
- During Gate 3 build — implement using the patterns each skill governs (no improvised motion, no improvised CTA placement, no generic heading structure)
- During Gate 4 validation — verify each skill's QA pass succeeded
- During Gate 5 report — report which skills applied, what each one produced, and any carry-forward items

Claude Code must not improvise outside the patterns the skills define. If a skill is missing from the brief, Claude Code must stop at Gate 1 and request the missing skill pass before planning the build.

## Required Design Pass for Every Page Build

Every page build, regardless of mode, must complete the following Required Design Skill Pass:

- [ ] **frontend-design-engineer pass** — responsive layout, component structure, semantic HTML, accessibility minimums confirmed
- [ ] **motion design pass** (emil-kowalski-motion-design) — motion plan declared, motion restraint confirmed, reduced-motion-safe confirmed
- [ ] **UI polish pass** (impeccable-ui-polish) — spacing rhythm, alignment, typographic hierarchy, card polish, section balance confirmed
- [ ] **conversion UX pass** (ux-ui-conversion-design) — CTA strategy, conversion flow, form placement, trust sections, friction reduction confirmed
- [ ] **SEO/AEO/LLM architecture pass** (seo-aeo-llm-page-architecture) — H1/H2 hierarchy, direct answers, semantic sections, FAQ structure, schema plan, internal links, metadata, LLM-ready structure confirmed

A page is not complete until all five passes are signed off. Partial passes must be reported as carry-forward TODOs with an explicit launch-blocker designation if conversion or SEO/AEO/LLM is incomplete.

## Mode-Specific Design Pass

### Fast Mode

Use a **lightweight design skill pass**. All five skills still run, but each one applies only the minimum required confirmations:

- frontend-design-engineer — confirm reuse of existing responsive components; no new component patterns
- emil-kowalski-motion-design — confirm motion follows existing project defaults; no new motion patterns
- impeccable-ui-polish — confirm spacing and alignment follow project tokens; no new polish refinements
- ux-ui-conversion-design — confirm primary CTA and trust signals match the existing project pattern
- seo-aeo-llm-page-architecture — confirm H1, H2, metadata, direct-answer block, and FAQ structure exist

Risk: lightweight pass may miss differentiation opportunities. Use Fast Mode only when the page is low-stakes and the existing project pattern is mature.

### Core Mode

Use **all required design skills** with standard depth. Each skill runs its full pass, produces outputs for the build brief, and is verified at Gate 4. This is the default for standard service pages, location pages, regular blog posts, and standard landing pages.

### Beyond-Elite Mode

Use **all required design skills plus deeper polish and conversion review**. Specifically:

- impeccable-ui-polish runs an extended polish pass on hero, primary CTA section, trust block, FAQ block, and final CTA
- ux-ui-conversion-design runs an extended conversion review including objection mapping, form-friction audit, and trust-signal placement audit
- The other three skills run the standard Core Mode pass

This is the default for homepages, core service pages, primary location pages, main category pages, and strategic landing pages.

### Full Competitive Build Mode

Use **all required design skills plus competitive SERP, conversion, and UX differentiation review**. Specifically:

- All Beyond-Elite design passes apply
- ux-ui-conversion-design adds a competitor conversion-pattern audit (what competitors do, where they fail, where this page differentiates)
- seo-aeo-llm-page-architecture adds a competitor SERP and AEO audit (what wins the SERP today, what AI assistants cite, where this page differentiates)
- impeccable-ui-polish adds a competitor visual-polish audit (where competitors look generic, where this page differentiates)

This is reserved for highly competitive pages, revenue pages, major city pages, main service pages, and pillar pages where competitive advantage matters.

## Client Repo Scaffold Requirements

Every new client repo must receive the five required skill files at `.claude/skills/<skill-name>/SKILL.md`:

- `.claude/skills/frontend-design-engineer/SKILL.md`
- `.claude/skills/emil-kowalski-motion-design/SKILL.md`
- `.claude/skills/impeccable-ui-polish/SKILL.md`
- `.claude/skills/ux-ui-conversion-design/SKILL.md`
- `.claude/skills/seo-aeo-llm-page-architecture/SKILL.md`

The reference implementations live at the same path inside Site OS Master itself: `.claude/skills/<skill-name>/SKILL.md`. Copy each file from Site OS Master into the client repo during Phase B scaffolding (per `docs/new-client-startup-workflow.md` Phase B). If a client engagement updates a skill, propagate the change back to Site OS Master so the master copy stays canonical.

The scaffold must complete before the first Prompt 06 build. If the skill files are missing, the first Prompt 06 invocation must stop at Gate 1 and request the scaffold be completed before planning the build.

## QA Checklist Requirements

A page cannot be marked complete until it passes:

- [ ] Responsive layout check (frontend-design-engineer)
- [ ] Visual hierarchy check (impeccable-ui-polish + seo-aeo-llm-page-architecture)
- [ ] Spacing and alignment check (impeccable-ui-polish)
- [ ] CTA visibility check (ux-ui-conversion-design)
- [ ] Conversion path check (ux-ui-conversion-design)
- [ ] Motion restraint check (emil-kowalski-motion-design)
- [ ] Accessibility check (frontend-design-engineer)
- [ ] SEO/AEO heading structure check (seo-aeo-llm-page-architecture)
- [ ] Internal linking check (seo-aeo-llm-page-architecture)
- [ ] Schema readiness check (seo-aeo-llm-page-architecture)

These checks live inside `checklists/launch-readiness-checklist.md` § Required Design Skill Pass. A page that fails any check carries the failure as a launch blocker.

## Hard Rules

- The five required skills are mandatory for every page build. They are not optional based on operator preference, mode, or time pressure.
- The Required Design Skill Pass cannot be partially completed and then marked done. Partial passes are carry-forward TODOs.
- Claude Code must not improvise outside the patterns the skills define. If a skill output is missing, stop at Gate 1.
- Skill files in client repos must match the canonical Site OS Master copies. If a client-specific override is required, document it in `docs/site-os/decisions/` inside the client repo and propagate the decision back to Site OS Master so the master stays the source of truth.
- This standard does not relax any other Site OS Master rule. The Cloudflare Pages Static Export Rule, file-scope and Git safety policy, no-fake-data policy, service-business conversion layout standard, and service-card image placeholder standard all continue to apply alongside this rule.

## Related Files

- `CLAUDE.md` — primary behavioral contract; `Required Website Design Skill Routing Rule` global section references this doc
- `.claude/skills/frontend-design-engineer/SKILL.md` — canonical skill file (responsive layout / components / semantic HTML / accessibility)
- `.claude/skills/emil-kowalski-motion-design/SKILL.md` — canonical skill file (motion strategy / restraint)
- `.claude/skills/impeccable-ui-polish/SKILL.md` — canonical skill file (visual polish / rhythm / typography)
- `.claude/skills/ux-ui-conversion-design/SKILL.md` — canonical skill file (CTA / conversion flow / forms / trust)
- `.claude/skills/seo-aeo-llm-page-architecture/SKILL.md` — canonical skill file (headings / direct answers / FAQ / schema / metadata)
- `prompts/06-claude-code-build-prompt.md` — Gate 1 and Gate 2 require the design skill pass
- `prompts/individual-homepage-implementation-prompt.md`, `prompts/conversion-page-implementation-prompt.md`, `prompts/seo-aeo-service-page-implementation-prompt.md`, `prompts/local-seo-location-page-implementation-prompt.md`, `prompts/aeo-faq-hub-prompt.md` — each carries a top-of-file reference to this doc
- `page-templates/homepage-template.md`, `page-templates/service-page-template.md`, `page-templates/location-page-template.md`, `page-templates/landing-page-template.md`, `page-templates/category-page-template.md`, `page-templates/blog-post-template.md` — each carries a top-of-file reference to this doc
- `routing/workflow-mode-map.md` — design skill pass by mode lives here
- `checklists/launch-readiness-checklist.md` — Required Design Skill Pass QA gates live here
- `docs/new-client-startup-workflow.md` — Phase B scaffolds the `.claude/skills/` files; Phase C invokes this rule

---

Site OS Master — Required Website Design Skills v1.0
Status: Required for every page build — implemented 2026-05-28
Reason for creation: route every page through the approved design skill system so premium design, intentional motion, impeccable polish, conversion UX, and SEO/AEO/LLM-ready architecture are required passes, not optional polish.
