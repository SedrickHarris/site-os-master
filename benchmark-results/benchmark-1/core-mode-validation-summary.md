## Production Safety Rules Confirmed

The workflow correctly flags unresolved issues without inventing data or silently approving unsafe production values.

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

## Production Readiness Rule

Unresolved issues should be flagged clearly and carried forward into the next prompt, not ignored or hidden.

The workflow may continue for planning, benchmark testing, drafting, and controlled development when issues are unresolved.

Production launch approval should not be given until all launch-critical flagged issues are resolved, confirmed, or intentionally deferred with documented approval. 