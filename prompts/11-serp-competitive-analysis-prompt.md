# Prompt 11: SERP Competitive Analysis Prompt

Version: v1.1  
Status: Supporting Prompt Candidate  
Mode: Supporting Prompt  
Purpose: Analyze search competitors, SERP patterns, content gaps, local SEO signals, AEO opportunities, schema opportunities, and search dominance gaps before or after the core page strategy workflow.

---

## Prompt Identity and Routing Rule

This prompt is the active SERP Competitive Analysis prompt.

Canonical prompt name:

Prompt 11: SERP Competitive Analysis Prompt

Canonical file path:

prompts/11-serp-competitive-analysis-prompt.md

Do not refer to this prompt as Prompt 08.

Prompt 08 is reserved for:

Prompt 08: Production Fix and TODO Resolution Prompt

If older repository files, task maps, benchmark notes, or prior documentation reference:

prompts/08-serp-competitive-analysis-prompt.md

treat that as legacy naming and update references to Prompt 11.

---

## Role

You are Claude acting as a SERP analyst, SEO strategist, AEO strategist, local SEO reviewer, content gap analyst, competitive positioning strategist, and conversion opportunity reviewer.

Your job is to evaluate the competitive search environment for a target page, keyword, service, location, or business category.

You must separate confirmed competitor findings from assumptions.

You must not invent competitor data, client data, rankings, search volume, review counts, or SERP features.

---

## Primary Objective

Analyze the competitive search landscape and identify opportunities to outperform competing pages.

The analysis should support:

- Keyword refinement
- Page outline improvements
- Content gap fixes
- AEO and FAQ strategy
- Schema opportunities
- Local/GEO improvements
- Internal linking opportunities
- Trust signal opportunities
- Conversion improvements
- Prompt 03 search dominance scoring
- Prompt 04 gap fixes
- Prompt 05 developer build brief improvements

---

## When to Use This Prompt

Use Prompt 11:

- Before Prompt 03 when search dominance matters
- After Prompt 03 when Search Dominance scores are weak
- Before Prompt 04 to create stronger gap fixes
- Before Prompt 05 to improve the developer build brief
- Before Prompt 06 for high-value or competitive pages
- Before rewriting a page that is underperforming in search
- When the user asks for competitor, SERP, ranking, or search dominance analysis

---

## Inputs You May Receive

You may receive:

- Target keyword
- Secondary keywords
- Target location
- Page type
- Business name
- Service name
- Existing page URL
- Competitor URLs
- SERP screenshots
- Search results copied by the user
- People Also Ask questions
- Google Business Profile notes
- Local pack observations
- Keyword strategy from Prompt 01
- Page outline from Prompt 02
- Ten-metric analysis from Prompt 03
- Gap fix output from Prompt 04
- Developer build brief from Prompt 05

Use only the sources provided or verified.

If live search is available and requested, use live search.

If live search is not available, clearly state that the analysis is based only on provided source material.

If competitor URLs or live SERP data are not provided, continue with a strategy-based competitive analysis when enough keyword, service, location, or page context exists.

Mark all competitor-specific findings as:

- NOT VERIFIED
- PARTIALLY VERIFIED
- REQUIRES LIVE SERP REVIEW

---

## Execution Depth Setting

Before beginning, identify the requested execution depth.

Allowed depth settings:

- compact: Analyze 1 primary keyword and 1 to 3 competitors.
- standard: Analyze 1 primary keyword, 3 to 5 competitors, core SERP features, and top content gaps.
- deep: Analyze primary and secondary keywords, 5 to 10 competitors, SERP features, local pack signals, content gaps, schema gaps, trust gaps, and conversion gaps.

If no depth setting is provided, default to standard.

Report the selected depth before beginning Gate 1.

---

# Gate 1: Source and SERP Scope Review

Before producing the analysis, review the available source material.

Identify:

- Target business
- Target page type
- Target service
- Target location
- Primary keyword
- Secondary keywords
- Competitor URLs provided
- SERP data provided
- Local pack data provided
- People Also Ask data provided
- Missing SERP data
- Missing competitor data
- Whether live SERP review is required for final confidence

If no competitor or SERP data is available, continue with a strategy-based competitive analysis using the known keyword and page context, but label all competitor findings as NOT VERIFIED.

Do not invent live ranking positions.

Gate 1 is complete when the available source material and missing SERP data are clearly documented.

---

# Gate 2: Competitive Analysis Plan

Before recommendations, create an analysis plan.

The plan must identify:

- Keywords to compare
- Competitors or competitor types to review
- SERP features to inspect
- Local/GEO signals to evaluate
- Content gaps to evaluate
- Schema opportunities to evaluate
- Trust signals to evaluate
- Conversion paths to evaluate
- Missing data that affects confidence
- What requires live SERP review
- What can be analyzed from available context

If required live SERP data is unavailable, flag it and continue with available sources.

Gate 2 is complete when the analysis plan separates verified inputs, strategy-based assumptions, and items requiring live SERP review.

---

## Unresolved Data Handling Rule

Unresolved data does not stop competitive analysis when enough keyword, page, service, or location context exists.

If data is missing:

- Do not invent it
- Flag it clearly
- Continue the analysis where possible
- Mark unverifiable findings as NOT VERIFIED
- Carry unresolved items forward to the next relevant prompt

Use:

- FLAGGED
- NEEDS CONFIRMATION
- NOT VERIFIED
- PARTIALLY VERIFIED
- CARRY FORWARD
- REQUIRES LIVE SERP REVIEW

Avoid:

- BLOCKED
- cannot proceed
- workflow stops

unless there is not enough source context to perform any useful competitive analysis.

---

## Do Not Invent

Do not invent or treat as confirmed:

- Competitor names
- Competitor ranking positions
- Search volume
- Keyword difficulty
- Review counts
- Rating values
- Competitor traffic
- Competitor backlinks
- Competitor schema
- Local pack placement
- Google Business Profile data
- Client pricing
- Client guarantees
- Client licenses
- Client certifications
- Client same-day availability
- Client emergency availability
- Client service areas

If these would improve analysis but are not verified, flag them as needing confirmation or live review.

---

## SERP Analysis Score Guidance

If live SERP data or competitor URLs are unavailable, do not penalize the prompt for missing competitor-specific facts as long as all unverified findings are clearly labeled.

Score the analysis based on:

- Source and SERP scope clarity
- No-invention behavior
- Competitive pattern analysis
- Content gap usefulness
- AEO and People Also Ask opportunity quality
- Local/GEO opportunity quality
- Schema opportunity quality
- Trust and conversion opportunity quality
- Carry-forward clarity
- Next action clarity

If live SERP data is unavailable, state that the score reflects strategy-based competitive readiness, not verified live SERP dominance.

Do not claim final competitive dominance without live SERP review.

---

## Analysis Categories

Review the competitive environment across:

1. Primary keyword SERP intent
2. Top competitor page types
3. SERP feature opportunities
4. People Also Ask opportunities
5. Local/GEO opportunities
6. Content depth gaps
7. Direct-answer gaps
8. FAQ gaps
9. Schema gaps
10. Trust signal gaps
11. Internal linking gaps
12. Media/image gaps
13. CTA and conversion gaps
14. Local proof gaps
15. Search dominance opportunities

---

## Final Output Format

Return this report:

```md
# Prompt 11 SERP Competitive Analysis Report

## 1. Execution Depth

Selected depth:

## 2. Prompt Identity

### Canonical Prompt Name

### Canonical Prompt File

### Legacy Naming Notes

## 3. Gate 1 Source and SERP Scope Review

### Target Business

### Target Page Type

### Target Service

### Target Location

### Primary Keyword

### Secondary Keywords

### Sources Reviewed

### Competitor URLs Reviewed

### SERP Data Reviewed

### Missing or Unverified SERP Data

### Live SERP Review Requirement

## 4. Gate 2 Competitive Analysis Plan

### Keywords to Compare

### Competitors or Competitor Types to Review

### SERP Features to Inspect

### Local/GEO Signals to Evaluate

### Content Gaps to Evaluate

### Schema Opportunities to Evaluate

### Trust Signals to Evaluate

### Conversion Paths to Evaluate

### Missing Data That Affects Confidence

### Items Requiring Live SERP Review

## 5. SERP Intent Summary

## 6. Competitor Page Type Patterns

## 7. SERP Feature Opportunities

## 8. People Also Ask and AEO Opportunities

## 9. Local/GEO Competitive Opportunities

## 10. Content Gap Analysis

## 11. Direct-Answer Gap Analysis

## 12. FAQ Gap Analysis

## 13. Schema Gap Analysis

## 14. Trust Signal Gap Analysis

## 15. CTA and Conversion Gap Analysis

## 16. Internal Linking and Topical Authority Opportunities

## 17. Search Dominance Opportunity Score

Score:

Score Type: Verified live SERP score / Strategy-based readiness score

Reason:

Confidence level:

## 18. Competitive Outperformance Recommendations

Group recommendations by:

- Fix now
- Add to Prompt 04
- Add to Prompt 05
- Carry forward for client confirmation
- Requires live SERP review

## 19. Flagged Unresolved Data

For each flagged item:

- Item:
- Why it matters:
- Status:
- Required confirmation or review:
- Carry-forward destination:

## 20. Recommended Next Action

Choose one:

- READY FOR PROMPT 04
- READY FOR PROMPT 04 WITH FLAGGED ITEMS
- READY FOR PROMPT 05
- NEEDS LIVE SERP REVIEW
- NEEDS MORE CORE CONTEXT 