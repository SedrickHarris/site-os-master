# Third-Party Embed Specs Standard

A universal rule for documenting third-party iframe and widget embeds (GoHighLevel calendars and forms, booking widgets, payment widgets, video players, map embeds) on client websites managed via Site OS Master. Confirmed embed dimensions and wrapper patterns must be locked in writing — in the client repo, not in commit history alone — so future builds, redesigns, and developer handoffs do not lose the visual fix that made the embed render correctly.

## Purpose

Third-party embeds often need non-obvious wrapper geometry to render cleanly inside a client site's brand canvas. GoHighLevel widgets in particular emit document-level whitespace above and below their internal content that bleeds into the host page as visible white strips on dark backgrounds. The fix typically involves negative margins on the iframe combined with `overflow: hidden` on the wrapper — a pattern that is easy to lose during a redesign, a copy refresh, or a routine "clean up inline styles" pass, because nothing in the code itself signals that the negative margins are load-bearing.

This standard makes the load-bearing dimensions visible and discoverable as a checked-in document, so the next person to touch the embedded route can read why the values exist before they edit them.

This doc pairs with — and does not weaken — `docs/no-fake-data-policy.md` (no fabricated screenshots, no invented review counts on embed surrounds), `docs/file-scope-and-git-safety-policy.md` (file-scope discipline when adjusting wrappers), and `docs/client-repo-doc-structure.md` (where in the client repo the spec lives).

## When to Use

Apply this standard whenever a client site renders any third-party widget via iframe or vendor script, including:

- GoHighLevel calendar booking widgets
- GoHighLevel contact form widgets
- Calendly / SavvyCal / Cal.com booking embeds
- Stripe Checkout / payment widget embeds
- YouTube / Vimeo / Loom video embeds when wrapper styling matters beyond defaults
- Google Maps embeds with custom wrapper geometry
- Any other third-party iframe whose visible rendering depends on non-default host-side CSS

## When Not to Use

Skip this standard when:

- The embed renders cleanly with no host-side CSS beyond width/height (no `embed-specs.md` entry needed — defaults are self-documenting).
- The integration is fully server-side (API call, no iframe, no vendor script tag).
- The widget is rendered via a fully native component (e.g., a custom-built booking form), not a third-party iframe — that is a regular component, not an embed.

## The Rule

**Every client repo that renders a third-party iframe or widget with non-default wrapper styling must maintain a `docs/site-os/inputs/embed-specs.md` document recording the confirmed working dimensions, wrapper pattern, script tag, and rationale for every such embed.**

### Required Content Per Embed Entry

Each entry in `embed-specs.md` must include:

1. **Header** — the embed name (e.g., "GHL Calendar Widget")
2. **Confirmed working** — the live URL or route where the embed was visually verified, plus the date verified
3. **Source URL** — the vendor URL the iframe loads (calendar URL, form URL, etc.)
4. **Script** — the vendor script URL if a script tag is required
5. **Wrapper div** — the exact wrapper CSS properties (background, border, border-radius, overflow, position)
6. **iframe element** — the exact iframe CSS properties (display, width, height, border, background, marginTop, marginBottom) plus any required attributes (allowTransparency, scrolling)
7. **Script tag** — the JSX snippet for the script tag, including the Next.js `strategy` value
8. **How it works** — a short paragraph explaining what the load-bearing values do (e.g., why the negative margins exist, what they clip, what the visible height calculation is)
9. **Notes** — guardrails for future edits (what not to remove, what direction to adjust if the vendor template changes, expected behaviors that are not bugs)

### Format Discipline

- Use fenced code blocks for the wrapper, iframe, and script tag sections so the values are copy-pasteable.
- Include the visible-height arithmetic where negative margins are used (e.g., `Visible height = 900px - 72px - 52px = 776px`) so future edits can recompute when the design changes.
- Keep a per-embed changelog row at the bottom (date, change) so the history of the dimensions lives next to the dimensions themselves.

### Update Discipline

- Update `embed-specs.md` in the **same commit** that introduces or changes the embed dimensions. Do not lock dimensions in code without locking them in the doc.
- When a vendor changes their internal template and the host-side fix needs to change, update the entry in `embed-specs.md` first, then adjust the code, then verify on a live route.
- Never remove an entry just because the embed is currently working — the doc captures *why* the dimensions are non-default, which is the part that decays from memory.

## Working Example: Sirius Systems

The Sirius Systems client repo at filesystem path `client-sites/sirius-systems-site/` is the working reference implementation of this standard. As of 2026-05-26 it contains:

- `client-sites/sirius-systems-site/docs/site-os/inputs/embed-specs.md` — the canonical embed-specs file, recording the confirmed working dimensions for the GoHighLevel calendar widget on `/booking`
- The shipped embed lives at `client-sites/sirius-systems-site/app/booking/page.tsx`
- Live verification on `siriussys.io/booking` confirmed 2026-05-26

The Sirius entry documents the GHL calendar white-strip fix in full: a 900px iframe height with `marginTop: -72px` and `marginBottom: -52px`, wrapped by an `overflow: hidden` container, which clips GHL's document-level whitespace outside the visible card while letting the calendar content render at its natural size. The wrapper uses the project's dark canvas color (`#050505`) and brand border (`1px solid #2A2F3A`) at the project's card radius (`1.5rem`).

New client repos that embed GoHighLevel calendars should mirror this pattern verbatim until proven otherwise — the negative-margin offsets are specific to GHL's current widget template and have been visually validated.

## Adoption in Build Prompts

When generating a Claude Code build prompt for a route that introduces a third-party iframe or widget, the prompt must reference this standard:

> If this page embeds a third-party widget (GHL calendar/form, Calendly, Stripe Checkout, video, map, etc.), record the confirmed working wrapper and iframe dimensions in `docs/site-os/inputs/embed-specs.md` per `docs/third-party-embed-specs-standard.md`. Do not lock dimensions in code without locking them in the doc. Update the doc in the same commit.

When updating an existing embedded route, the prompt must require the developer to read the relevant `embed-specs.md` entry before changing any wrapper or iframe styling.

## Anti-Patterns to Avoid

- Inline negative margins on an iframe with no comment and no doc entry — the next person to touch the file will remove them as "stray".
- Documenting dimensions only in the changelog — the changelog records *what* changed, not *what the current confirmed values are*.
- Letting a vendor change silently break an embed with no doc entry — without a recorded baseline, regressions are hard to diagnose.
- Mixing brand-token wrapper styling and vendor-injected styling without a clear seam — the wrapper section in the doc must be reproducible from brand tokens alone.
- Using stock or fabricated screenshots of the embed in marketing copy or docs (per `docs/no-fake-data-policy.md`) — verify the live route instead.

## Stop Conditions

Pause and surface to the project owner if any of these are true:

- The project is being asked to ship a third-party embed with no `embed-specs.md` entry and no plan to add one.
- A redesign is being scoped that would touch every embedded route without a pre-read of `embed-specs.md`.
- A vendor's widget template changed in a way that the host-side fix in `embed-specs.md` no longer matches, and the live route is broken or visually degraded.
- The wrapper styling would require new global brand tokens outside the approved scope.

## Related Files

- `docs/client-repo-doc-structure.md` — establishes the `docs/site-os/inputs/` folder where `embed-specs.md` lives in every client repo
- `docs/no-fake-data-policy.md` — applies to copy and imagery surrounding the embed
- `docs/file-scope-and-git-safety-policy.md` — applies when adjusting embed wrappers across multiple routes
- `docs/page-build-workflow.md` — page-level workflow; embed sections reference this standard
- `prompts/06-claude-code-build-prompt.md` — Build prompts that introduce embedded widgets embed this standard

---

Site OS Master — Third-Party Embed Specs Standard v1.0
Status: Adopted 2026-05-26
Reason for creation: codify the embed-specs.md convention proven in the Sirius Systems client repo so every future Claude Code build that embeds a third-party widget locks the load-bearing wrapper and iframe dimensions in writing, and so non-obvious vendor-specific fixes (like the GoHighLevel calendar white-strip clip) survive redesigns, refreshes, and developer handoffs.
