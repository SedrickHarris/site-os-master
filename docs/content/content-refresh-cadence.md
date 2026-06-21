# Content Refresh Cadence

The standard refresh schedule and process for service pages and blog posts in client repos
built on Site OS Master. Defines what a refresh must include, how to track it, and when
it is complete.

## Purpose

AI Overviews, Google Search, and LLM citation systems favor recently updated content for
trending and time-sensitive queries. A page that has not been touched in 6 months signals
staleness even if the content was strong at launch.

This doc defines:

- The 90-day refresh standard for service pages
- The 60-day review standard for blog posts
- What a refresh must include to count
- The tracking mechanism (`content-log.json`)
- The update rhythm in practice
- What does not count as a refresh

## Relationship to Other Site OS Docs

- `prompts/service-data-layer-build-prompt.md` — service pages built with the data layer
  use `lastRefreshed` and `nextRefreshDue` fields in the data file as the refresh record.
  The process in this doc updates those fields.
- `docs/content/job-log-system.md` — job log entries are the primary source for new stats
  and new FAQs during a refresh cycle. Do not refresh content by rewriting from general
  knowledge; refresh from new log entries.
- `docs/no-fake-data-policy.md` — refreshing a stat to a new number requires a verified
  source. Do not update a stat to a higher number without new job log entries to support it.

## The 90-Day Service Page Refresh

Every service page is on a 90-day refresh cycle. After 90 days, the page needs at minimum
one meaningful update before the refresh date is bumped.

### What a Service Page Refresh Must Include

A refresh is not complete unless it includes at least two of the following:

1. A stat updated from a real new value in the job log (not just an incremented guess)
2. One or two new FAQ entries from recent customer questions or job log entries
3. A revised answer block reflecting current pricing, availability, or conditions
4. A new section or expanded section responding to a recently trending search query
5. Removal or correction of anything that has become outdated (old pricing, discontinued
   services, changed hours, superseded advice)

Changing the `lastRefreshed` date without making a meaningful content change does not count.
The date update must accompany a real content change.

### Service Page Refresh Process (Data Layer Repos)

For service pages built using `prompts/service-data-layer-build-prompt.md`:

1. Open `data/services/[slug].ts`
2. Review `stats` — update any `value: 0` stats that now have confirmed real data from
   the job log; update any stat whose value has changed
3. Review `faqs` — add 1-2 new entries from recent job log entries or customer questions;
   remove or update any answer that no longer reflects current practice
4. Review `answerBlock` — update if pricing, availability, or the core service description
   has changed; keep it between 40 and 65 words
5. Update `lastRefreshed` to today's ISO date
6. Recalculate `nextRefreshDue` as today plus 90 days
7. Run `npm run build` and `npm run lint`
8. Deploy and submit the URL for reindexing via Google Search Console URL Inspection

### Service Page Refresh Process (Non-Data-Layer Repos)

For service pages with hardcoded content in JSX:

1. Open the page file
2. Update any stat, price, or availability claim that has changed
3. Add 1-2 FAQ entries to the FAQ section and to the FAQPage schema
4. Review the answer block or opening paragraph — update if needed
5. Update `lastModified` in the sitemap if the sitemap is managed manually
6. Update `content-log.json` (see Tracking section below)
7. Deploy and submit the URL for reindexing

## The 60-Day Blog Post Review

Blog posts are reviewed on a 60-day cycle. They do not require the same depth as service
page refreshes but should be checked for:

- Stats or data points that are now outdated
- Trending queries in the topic area that the post does not address
- A new section answering a question that has come up on recent jobs
- A pruned or updated introduction that no longer reflects the current situation

A blog post review that finds nothing worth changing is a valid outcome. Record it in
`content-log.json` with a note: "Reviewed — no updates needed."

### What Counts as a Blog Post Update

- Adding a new section (minimum 150 words)
- Updating a stat, year, or data point with a current source
- Revising the introduction to remove outdated framing
- Adding a new FAQ entry at the bottom

Fixing a typo or updating a date in the metadata does not count.

## Tracking: content-log.json

Track all service pages and top blog posts in a single file at the client repo root:

**Client repo path:** `data/content-log.json`

```json
[
  {
    "type": "service",
    "slug": "ac-repair",
    "title": "AC Repair — North Las Vegas, NV",
    "lastReviewed": "YYYY-MM-DD",
    "nextReviewDue": "YYYY-MM-DD",
    "changesMade": "brief description of what changed",
    "needsUpdate": false
  },
  {
    "type": "blog",
    "slug": "why-ac-capacitors-fail-in-las-vegas",
    "title": "Why AC Capacitors Fail in Las Vegas Summers",
    "lastReviewed": "YYYY-MM-DD",
    "nextReviewDue": "YYYY-MM-DD",
    "changesMade": "Reviewed — no updates needed",
    "needsUpdate": false
  }
]
```

Set `needsUpdate: true` when a review is overdue or when a known update is pending but not
yet applied. This field can be used by an admin dashboard or a script to surface stale pages.

For service pages built with the data layer, `content-log.json` is optional — the
`lastRefreshed` and `nextRefreshDue` fields in the data file serve the same tracking function.
Use `content-log.json` as the unified tracker when the site has a mix of data-layer and
non-data-layer pages.

## Staleness Thresholds

| Page type | Refresh cadence | Stale threshold | Overdue threshold |
|---|---|---|---|
| Service page (revenue-critical) | 90 days | 90 days | 120 days |
| Service page (standard) | 90 days | 90 days | 150 days |
| Blog post (top 10 by traffic) | 60 days | 90 days | 120 days |
| Blog post (other) | As needed | 180 days | 365 days |

Pages past the overdue threshold should be prioritized in the next update session.

## What Does Not Count as a Refresh

The following actions do not reset the refresh clock:

- Changing the meta title or description without updating body content
- Updating the `lastRefreshed` date field without a content change
- Fixing a broken internal link
- Updating a component's styling without changing copy or schema
- Redeploying without touching the page file

The refresh clock resets only when the page content itself changes in a way that improves
its answer to the user's search intent.

## The Monthly Update Rhythm

Run a content review session once per month. The session should take 60-90 minutes and cover:

1. Open `content-log.json` (or the service data files) and identify all pages past or
   approaching their review date
2. Sort by urgency: overdue first, then due within 14 days
3. For each page needing an update:
   - Open the job log for new entries since the last refresh
   - Apply the refresh process for that page type
   - Update the tracking date
4. Deploy all updated pages in one commit
5. Submit updated URLs for reindexing via Google Search Console URL Inspection

The session does not need to refresh every page. Prioritize overdue pages and pages where
the job log has new entries that improve the content.

## Template File Location

The tracking template lives at: `data/content-log.template.json` in site-os-master.

When scaffolding a new client repo, copy the template to `data/content-log.json` and
populate with the site's service pages and top blog posts.

---

Site OS Master — Content Refresh Cadence v1.0
Status: Active
Added: 2026-06-21
Companion docs:
  prompts/service-data-layer-build-prompt.md
  docs/content/job-log-system.md
  docs/no-fake-data-policy.md
