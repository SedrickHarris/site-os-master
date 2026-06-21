# Job Log System

A lightweight firsthand data capture system for local service business client sites. Turns
real job records into original content, verified stats, and traceable FAQ answers that no
competitor can reproduce.

## Purpose

Prevent service pages and blog posts from being written from general knowledge. Every stat,
pricing claim, FAQ answer, and blog angle must trace back to something that actually happened
on a real job. The job log is the data source that makes that tracing possible.

This doc defines:

- The job log schema
- The capture habit (when and how to fill it)
- How job log entries feed into the service data layer
- How job log entries feed into blog content
- The no-fake-data boundary (what the log can and cannot do)

## Relationship to Other Site OS Docs

- `docs/no-fake-data-policy.md` — this system is the preferred path for building verified
  firsthand stats under sections 3 (Service Data) and 6 (Performance Claims). The job log
  does not override those rules; it provides the verified source that satisfies them.
- `prompts/service-data-layer-build-prompt.md` — the `source: 'job-log'` FAQ field and
  the `value` stat fields in each service data file pull from job log entries. An entry
  must exist before a stat or FAQ answer can use `job-log` as its source.
- `docs/content/content-refresh-cadence.md` — the 90-day refresh cycle uses new job log
  entries as the primary source for updated stats, new FAQs, and new blog topics.

## Where the Log Lives

**Client repo path:** `data/job-log.json`

This file lives in the client repo alongside the service data files, not in site-os-master.
The site-os-master copy (`data/job-log.template.json`) is the schema reference only.

The log is not a public-facing file. It is not routed, indexed, or served to visitors.
It is a working source-of-truth document that content and code reference.

## Job Log Schema

Each entry is one completed job. Add an entry after every significant job — unusual
finding, notable customer situation, pricing data point, or anything that could become
a blog post or a stat.

```json
[
  {
    "id": "job-001",
    "date": "YYYY-MM-DD",
    "jobType": "short description of work done",
    "serviceSlug": "matching slug from data/services/[slug].ts",
    "location": "neighborhood or city",
    "problem": "what the customer called about",
    "whatWeDid": "what was actually done on the job",
    "partsReplaced": ["part name if applicable"],
    "laborHours": 0,
    "totalCost": 0,
    "customerSituation": "context about the customer or household",
    "outcome": "result of the job",
    "unusualOrNoteworthy": "anything that surprised you or that you have not seen before",
    "savedFromBiggerRepair": true,
    "estimatedSavings": 0,
    "photosTaken": false,
    "customerQuestion": "a real question the customer asked during the job",
    "notes": "anything else worth capturing"
  }
]
```

## Field Rules

`id` — sequential, unique, never reused. Format: `job-001`, `job-002`, etc.

`date` — ISO format, YYYY-MM-DD. The date the job was completed, not logged.

`jobType` — short label matching the service type. Examples: `AC repair`, `drain clearing`,
`tile installation`, `roof inspection`. Used to cluster entries by service.

`serviceSlug` — must match an existing slug in `data/services/`. If no service page exists
yet for this job type, use `pending` and flag for later.

`location` — neighborhood, subdivision, or city. Do not use the customer's street address.
City-level or neighborhood-level only.

`totalCost` — actual total billed to the customer. Zero if not captured. This is the primary
source for pricing stats in the service data file.

`unusualOrNoteworthy` — the highest-value field for content. Recurring unusual findings
across multiple entries signal a blog topic. A single striking entry signals a case-study post.

`savedFromBiggerRepair` and `estimatedSavings` — optional. When a small repair prevented
a large replacement, capture it here. These become the most compelling content.

`customerQuestion` — a real question asked during the job, not constructed after the fact.
These are the highest-quality FAQ sources because they reflect actual customer language.

`photosTaken` — boolean. When true, photos should be saved to `public/job-photos/` with
a filename matching the job id: `job-001-capacitor-burnout.jpg`. Photo filenames and alt
text should describe the problem, not just the job.

## Capture Habit

Log an entry within 24 hours of completing the job. After 24 hours, detail degrades.

Minimum viable entry — the four fields that matter most for content:

1. `jobType`
2. `totalCost`
3. `unusualOrNoteworthy`
4. `customerQuestion`

Everything else improves the entry but is not required to make it usable.

Target: one entry per significant job. Not every routine job needs a log entry. Log when:

- The repair revealed something unexpected
- The customer asked a question you had not heard before
- The total cost was notably high or low
- You saved the customer from a significantly larger expense
- The failure had a pattern you have seen before (third time seeing this part fail, etc.)

## How Entries Feed Into the Service Data Layer

The service data file at `data/services/[slug].ts` has two fields that draw from the log:

**Stats (`stats` array):** When a stat's `value` is `0` and `placeholder` is set, that stat
is waiting for real data. To fill it, count matching job log entries:

- `totalCost` values across entries with matching `serviceSlug` give you a pricing range
- Entry count by `serviceSlug` gives you a jobs-completed stat
- `laborHours` averages give you a typical timeframe stat
- `savedFromBiggerRepair: true` entries as a percentage give you a repair-vs-replace stat

Update `value` in the data file when you have at least 10 entries for a meaningful average,
or 5 entries for a pricing range. Do not update `value` from one or two entries.

**FAQs (`faqs` array):** Any FAQ with `source: 'job-log'` must have a corresponding entry
in the log where `customerQuestion` matches or closely matches the FAQ question. The answer
must reflect what actually happened on those jobs, not general industry knowledge.

## How Entries Feed Into Blog Content

Each log entry is a potential blog post. The highest-value entry types:

**Pattern posts** — when 3 or more entries share the same `unusualOrNoteworthy` finding,
that is a post. Example: three capacitor failures on the same model year becomes
"Why [Brand] Units from [Year] Are Failing in [City]."

**Case-study posts** — when a single entry has a striking `outcome` or `estimatedSavings`,
that is a post. Example: a $187 repair that prevented a $4,200 replacement quote.

**FAQ posts** — when a `customerQuestion` appears across multiple entries, customers are
searching for the answer. That question is a blog topic.

**Seasonal posts** — entries from the same season across multiple years reveal seasonal
failure patterns. Useful for timed content published before the season starts.

The rule: before writing any blog post, open the job log first. If no entry connects to
the topic, do not write that topic yet. Write from what is in the log.

## No-Fake-Data Boundary

The job log enables real data. It does not lower the no-fake-data bar.

Do not:

- Add entries for jobs that did not happen
- Round or inflate `totalCost` values
- Construct `customerQuestion` values after the fact from general knowledge
- Use a single entry as the basis for a stat presented as a pattern
- Mark `savedFromBiggerRepair: true` without a real comparison quote or estimate
- Use `unusualOrNoteworthy` to describe something you read rather than something you saw

The log is only as valuable as it is accurate. One accurate entry is worth more than ten
invented ones.

## Stats Readiness Thresholds

Do not publish a stat as a specific number until these minimums are met:

| Stat type | Minimum entries |
|---|---|
| Pricing range (min/max) | 5 entries with real `totalCost` |
| Average pricing | 10 entries with real `totalCost` |
| Jobs completed count | Actual entry count — no minimum, report what exists |
| Repair-vs-replace rate | 20 entries with `savedFromBiggerRepair` populated |
| Average labor hours | 10 entries with real `laborHours` |

Below these minimums, use the `placeholder` string in the stat object, not a number.

## Template File Location

The schema template lives at: `data/job-log.template.json` in site-os-master.

When scaffolding a new client repo, copy the template to `data/job-log.json` in the
client repo. Remove the template entry and start fresh.

---

Site OS Master — Job Log System v1.0
Status: Active
Added: 2026-06-21
Companion docs:
  prompts/service-data-layer-build-prompt.md
  docs/content/content-refresh-cadence.md
  docs/no-fake-data-policy.md
