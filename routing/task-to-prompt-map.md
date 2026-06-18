# Task to Prompt Map

Use this file to select the right Site OS prompt for a specific task.

## Core Prompt Routing

Keyword strategy:
Use prompts/01-keyword-strategy-prompt.md

Page outline:
Use prompts/02-page-outline-prompt.md

10-metric analysis:
Use prompts/03-ten-metric-analysis-prompt.md

Gap fixes:
Use prompts/04-gap-fix-prompt.md

Developer build brief:
Use prompts/05-developer-build-brief-prompt.md

Claude Code implementation prompt:
Use prompts/06-claude-code-build-prompt.md

QA review:
Use prompts/07-qa-review-prompt.md

## Advanced Prompt Routing

SERP competitive analysis:
Use prompts/08-serp-competitive-analysis-prompt.md

Entity and topical authority:
Use prompts/09-entity-topical-authority-prompt.md

Internal linking:
Use prompts/10-internal-linking-strategy-prompt.md

Schema strategy:
Use prompts/11-schema-strategy-prompt.md

Conversion optimization:
Use prompts/12-conversion-optimization-prompt.md

Content quality editing:
Use prompts/13-content-quality-editor-prompt.md

Page template evaluation:
Use prompts/14-page-template-evaluation-prompt.md

Page variant battle:
Use prompts/15-page-variant-battle-prompt.md

Search intent defense:
Use prompts/16-search-intent-defense-prompt.md

AI citation readiness:
Use prompts/17-ai-citation-readiness-prompt.md

Page moat strategy:
Use prompts/18-page-moat-prompt.md

Prompt/template evaluation:
Use prompts/19-template-eval-rubric-prompt.md

Full visibility and conversion alignment:
Use prompts/20-visibility-conversion-alignment-prompt.md

## Skip Rules

Do not use advanced prompts if:

- The page is simple
- The task is only formatting
- The structure is already approved
- The user only needs a Claude Code build prompt
- Speed matters more than deep strategy

## Required Prompts by Task

For a standard service page:
Use 01, 02, 03, 04, 05, 06, 07.

For a high-value service page:
Use 01, 08, 09, 02, 03, 20, 04, 10, 11, 12, 05, 06, 07.

For a highly competitive revenue page:
Use 01, 08, 09, 15, 16, 18, 02, 03, 20, 04, 10, 11, 12, 17, 13, 05, 06, 07.

For a quick edit:
Use only the relevant prompt and QA if needed.

## Final Rule

Use the fewest prompts needed to complete the task well.

## SEO Opportunity Automation

This workflow runs as an optional Phase B extension during new client site builds. It identifies missing pillar page opportunities using scripts and compressed JSON context files. Claude Code spends tokens on judgment and content only, not on parsing large files.

Pipeline steps:

1. scan-routes.mjs (script) -- generates docs/seo/route-manifest.json
2. seo-opportunity-seed-keywords-prompt.md -- generates docs/seo/keyword-seeds.json
3. Manual: export Google Keyword Planner CSV to docs/seo/keyword-exports/
4. parse-keyword-csv.mjs (script) -- generates docs/seo/normalized-keywords.json
5. cluster-keywords.mjs (script) -- generates docs/seo/keyword-clusters.json
6. score-opportunities.mjs (script) -- generates docs/seo/opportunities.json
7. seo-opportunity-selection-prompt.md -- generates docs/seo/selected-opportunity.json
8. seo-opportunity-pillar-brief-prompt.md -- generates docs/seo/page-brief.json
9. seo-opportunity-pillar-build-prompt.md -- builds the page
10. seo-opportunity-supporting-content-prompt.md -- generates docs/seo/internal-link-plan.json and content-calendar.md
11. seo-opportunity-qa-prompt.md -- generates docs/seo/seo-qa-report.json

Workflow doc: docs/seo-opportunity-automation-workflow.md
Module README: seo-automation/README.md
JSON contract: seo-automation/templates/json-shapes.md

This workflow is additive. It does not replace the existing Site OS prompt chain (Prompts 01 through 20).
