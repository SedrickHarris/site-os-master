# Workflow Mode Map

Use this file to choose the right Site OS workflow mode.

## Fast Mode

Use for:

- Simple pages
- Quick updates
- Low to medium priority pages
- Existing template reuse
- Minor edits
- Low competition topics

Prompt count:
Low

Token use:
Low

Risk:
May miss competitive gaps or deeper topical opportunities.

Prompt chain:
Prompt 05 → Prompt 06 → Prompt 07

Execution depth:
Compact

## Core Mode

Use for:

- Standard service pages
- Standard location pages
- Regular blog posts
- Standard landing pages
- Moderate competition pages

Prompt count:
Medium

Token use:
Medium

Risk:
Good balance, but may not fully expose competitor opportunities.

Prompt chain:
Prompt 02 → Prompt 05 → Prompt 06 → Prompt 07, with Prompts 03 and 04 conditional on a flagged gap

Execution depth:
Standard

## Beyond-Elite Mode

Use for:

- Homepages
- Core service pages
- Primary location pages
- Main category pages
- Strategic landing pages
- Higher value pages

Prompt count:
High

Token use:
High

Risk:
More depth, but can be too much for simple pages.

Prompt chain:
Prompt 02 → Prompt 03 → Prompt 04 → Prompt 05 → Prompt 06 → Prompt 07 → Prompt 08, with Prompt 20 in its secondary position between Prompt 04 and Prompt 05

Execution depth:
Deep

## Full Competitive Build Mode

Use for:

- Highly competitive pages
- Revenue pages
- Major city pages
- Main service pages
- Pillar pages
- Pages where the goal is market advantage

Prompt count:
Very high

Token use:
Very high

Risk:
Can overcomplicate simple projects. Use only when competitive advantage matters.

Prompt chain:
Prompts 01 through 20 as applicable

Execution depth:
Deep

## Quick Decision Matrix

Low value + low competition:
Fast Mode

Medium value + moderate competition:
Core Mode

High value + moderate/high competition:
Beyond-Elite Mode

High value + high competition + revenue impact:
Full Competitive Build Mode

## Strategy-Approved Shortcut

If strategy is already approved and the task is small, use Prompt 05 → Prompt 06 → Prompt 07.

Conditions:

- Prior strategy (Prompt 01 and Prompt 02 at minimum) is approved.
- No competitor gap, alignment gap, or search-intent gap is flagged.
- The selected mode is Fast Mode or Core Mode.

Higher modes (Beyond-Elite, Full Competitive Build) do not qualify for the shortcut.

## Default Mode Rule

Default to Core Mode unless the task qualifies for Fast Mode or is one of the following:

- Revenue-critical
- Highly competitive
- Owner-approved for a higher mode

Use Fast Mode when the task is single-page, low-stakes, low-competition, and strategy is already approved.

## Escalation Rule

Do not escalate workflow mode without explicit owner approval.

Once a mode is selected by Prompt 05, Prompts 06, 07, and 08 must preserve that mode. Any escalation must be recorded in writing in the Workflow Mode Gate Reason field or equivalent.

## Required Design Skill Pass per Mode

Every page build, regardless of mode, must complete the Required Design Skill Pass per `docs/design/required-website-design-skills.md`. Mode controls the depth of the pass, not whether it runs.

### Fast Mode

Lightweight design skill pass. All five skills (`frontend-design-engineer`, `emil-kowalski-motion-design`, `impeccable-ui-polish`, `ux-ui-conversion-design`, `seo-aeo-llm-page-architecture`) run with minimum required confirmations only:

- Reuse existing components, motion patterns, polish tokens, conversion components, and SEO/AEO structure
- No new component, motion, polish, conversion, or SEO/AEO patterns
- Risk: lightweight pass may miss differentiation opportunities

### Core Mode

All required design skills run with standard depth. Each skill produces outputs for the build brief and is verified at Gate 4. Default for standard service pages, location pages, regular blog posts, and standard landing pages.

### Beyond-Elite Mode

All required design skills plus deeper polish and conversion review:

- `impeccable-ui-polish` runs an extended polish pass on hero, primary CTA section, trust block, FAQ block, and final CTA
- `ux-ui-conversion-design` runs an extended conversion review including objection mapping, form-friction audit, and trust-signal placement audit
- The other three skills run the standard Core Mode pass

### Full Competitive Build Mode

All required design skills plus competitive SERP, conversion, and UX differentiation review:

- All Beyond-Elite design passes apply
- `ux-ui-conversion-design` adds a competitor conversion-pattern audit
- `seo-aeo-llm-page-architecture` adds a competitor SERP and AEO audit
- `impeccable-ui-polish` adds a competitor visual-polish audit

The full mode-by-mode design pass definition lives in `docs/design/required-website-design-skills.md` § Mode-Specific Design Pass. This routing summary defers to that doc when in conflict.

## Final Rule

Use the lowest mode that can achieve the page goal.
