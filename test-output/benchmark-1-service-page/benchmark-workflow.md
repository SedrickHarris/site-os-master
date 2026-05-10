# Benchmark 1 Workflow: Service Page Test

## Benchmark

Business:
Pit Stop Junk Removal

Page Type:
Service page

Service:
Furniture and Appliance Junk Removal

Target Location:
Las Vegas, NV

Target Audience:
Homeowners, renters, landlords, property managers, and small businesses that need bulky items removed.

Primary CTA:
Request a quote

Primary Goal:
Generate junk removal quote requests.

Competitive Goal:
Create a page that is more specific, helpful, locally relevant, AEO-ready, LLM-ready, and conversion-focused than typical junk removal service pages.

## Recommended Mode

Beyond-Elite Mode

## Router Test

Start by using:

skills/site-os-efficiency-governor-skill.md

Expected router output:

- Task type
- Page/task value
- Competition level
- Recommended workflow mode
- Recommended first prompt
- Prompts to skip
- Recommended model/effort
- Output depth
- Context reuse plan
- Token-saving instruction
- Expected deliverable
- Next step

## Prompt Sequence

1. prompts/01-keyword-strategy-prompt.md
2. prompts/08-serp-competitive-analysis-prompt.md
3. prompts/09-entity-topical-authority-prompt.md
4. prompts/02-page-outline-prompt.md
5. prompts/03-ten-metric-analysis-prompt.md
6. prompts/20-visibility-conversion-alignment-prompt.md
7. prompts/04-gap-fix-prompt.md
8. prompts/10-internal-linking-strategy-prompt.md
9. prompts/11-schema-strategy-prompt.md
10. prompts/12-conversion-optimization-prompt.md
11. prompts/05-developer-build-brief-prompt.md
12. prompts/06-claude-code-build-prompt.md
13. prompts/07-qa-review-prompt.md

## Output Files to Save

Save Claude outputs here:

- 00-router-output.md
- 01-keyword-strategy-output.md
- 08-serp-competitive-analysis-output.md
- 09-entity-topical-authority-output.md
- 02-page-outline-output.md
- 03-ten-metric-analysis-output.md
- 20-visibility-conversion-alignment-output.md
- 04-gap-fix-output.md
- 10-internal-linking-output.md
- 11-schema-strategy-output.md
- 12-conversion-optimization-output.md
- 05-developer-build-brief-output.md
- 06-claude-code-build-prompt-output.md
- 07-qa-review-output.md

## Evaluation

Evaluate the keyword strategy output using:

evals/keyword-strategy-eval.md

Evaluate the page outline output using:

evals/page-outline-eval.md

Evaluate overall prompt quality using:

evals/prompt-evaluation-rubric.md

Record scores in:

versions/prompt-performance-log.md

Record prompt or workflow changes in:

versions/prompt-change-log.md

## Success Criteria

This benchmark is successful if the outputs:

- Support SEO
- Support GEO/local intent
- Support AEO
- Support Google Search
- Support Bing
- Support Apple Maps / Apple Search where applicable
- Support Google Business Profile relevance
- Support ChatGPT and Perplexity readiness
- Support featured snippets
- Support People Also Ask
- Support rich snippets
- Build topical authority
- Improve customer engagement
- Improve customer conversion
- Reduce wasted prompt/token usage
- Produce a clear Claude Code build prompt

## Notes

Use this benchmark to test whether Site OS creates better outputs over time.

Do not assume a prompt improved because it is longer.

A prompt improves only if the output is more useful, more specific, more implementation-ready, more conversion-focused, and more competitor-aware.
