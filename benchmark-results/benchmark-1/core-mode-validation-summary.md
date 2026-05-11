## Production Safety Rules Confirmed

The workflow correctly flags unresolved issues without inventing data, hiding missing information, or silently approving unsafe production values.

The workflow flags:

- Missing phone number
- Missing business address or ZIP
- Missing business hours
- Missing form endpoint
- Missing production domain
- Missing privacy policy
- Missing sitemap
- Missing robots.txt
- Unsupported AggregateRating schema
- Unsupported Review schema
- Fake ratings or review counts
- Fake testimonials or claims
- Unconfirmed same-day availability
- Unconfirmed pricing
- Unconfirmed service areas
- Incomplete launch QA

## Workflow Continuity Rule

Unresolved issues do not stop planning, drafting, benchmark testing, QA, or controlled development.

Unresolved issues must be:

- Clearly flagged
- Carried forward into the next prompt
- Assigned a required next action
- Resolved, confirmed, or intentionally deferred before production launch approval

The workflow may continue when unresolved items remain, as long as those items are documented and do not require fake data, unsupported claims, or unsafe assumptions.

## Production Readiness Rule

Production launch approval should not be granted until all launch-critical flagged issues are resolved, confirmed, or intentionally deferred with documented approval.

Launch-critical items include client data, form functionality, schema accuracy, indexing setup, privacy/legal requirements, mobile and accessibility QA, and final validation results. 