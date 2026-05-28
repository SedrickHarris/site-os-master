# Cloudflare Pages — Next.js Static Export Standard

A standalone universal standard for deploying Next.js websites to Cloudflare Pages as a static export. Applies to every Site OS Master client build that targets Cloudflare Pages static hosting, regardless of vertical, project type, or workflow mode.

## Purpose

Cloudflare Pages expects the deployed output to be a static directory named `out`. Next.js will build successfully without producing `out/` unless `next.config.mjs` declares `output: "export"`. When this is missed, the build passes locally and the Cloudflare Pages CLI succeeds at upload, but the project fails with:

```
Output directory "out" not found
```

This standard hard-codes the configuration, verification, and launch-readiness rules so every new Next.js + Cloudflare Pages build creates the required `out/` directory and avoids this failure mode.

## When to Use

This standard applies whenever:

- A new client build will deploy to Cloudflare Pages as a static export
- An existing client build is being migrated from another host onto Cloudflare Pages static hosting
- A scaffolded Next.js starter template is being adapted for Cloudflare Pages
- The Phase 0 foundation check is being run on a project that targets Cloudflare Pages

It does not apply when the project intentionally uses Cloudflare Workers, server functions, image optimization, or another runtime deployment mode. See the Exception Rule below.

## When This Standard Does Not Apply

This standard governs **standard static Cloudflare Pages builds only**. If a future project intentionally uses:

- Cloudflare Workers (e.g. Next.js 14 + `@opennextjs/cloudflare` + Cloudflare Workers, as used on the 702Xchange reference stack — see `checklists/deploy-workflow-checklist.md` §5)
- Cloudflare Pages with server functions, edge runtime, or middleware
- Next.js image optimization at runtime (`next/image` with a remote loader)
- A non-Cloudflare host (Vercel, Netlify, AWS Amplify, self-hosted, etc.)

…the project must document that exception in its own `docs/site-os/decisions/` record (or repo-level decision doc) before changing this rule. The exception must name the chosen deployment mode, why static export does not fit, and what the substitute build/output configuration is.

## Required next.config.mjs

For every standard Next.js website build intended for Cloudflare Pages static hosting, `next.config.mjs` must include:

- `output: "export"`
- `reactStrictMode: true`
- `poweredByHeader: false`
- `images: { unoptimized: true }`

The canonical template is:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

Notes:

- `output: "export"` is the field that produces `out/`. Without it, the Next.js build produces `.next/` only and Cloudflare Pages cannot find a deployable directory.
- `images.unoptimized: true` is required because Next.js image optimization needs a runtime, which a static export does not have. Leaving the default behavior causes a build error or runtime failure on Cloudflare Pages.
- `reactStrictMode: true` and `poweredByHeader: false` are project-style defaults aligned with the Site OS Master tech-stack baseline; preserve them unless an explicit project decision says otherwise.
- The `formats` field is optional but recommended for image consumers that respect the configured preference order.

## Required Cloudflare Pages Settings

In the Cloudflare Pages project settings:

- **Build command:** `npm run build` (or `pnpm build` / `yarn build`, matching the package manager declared in the client repo)
- **Output directory:** `out`
- **Root directory:** the client repo root (no subpath), unless the project intentionally uses a monorepo layout that is documented in `docs/site-os/decisions/`
- **Node version:** match the version declared in the client repo's `engines` field or `.nvmrc`; default to the latest LTS supported by Next.js if unspecified

If any of these settings differs, deployment will fail or publish stale artifacts. Do not change the output directory away from `out` without simultaneously removing `output: "export"` from `next.config.mjs` and documenting the exception.

## Verification Commands

Run after every production build, before declaring the deploy ready:

```powershell
# Windows / PowerShell
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; npm run build
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Test-Path out
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Test-Path out/index.html
cd "C:\Users\Welcome\Desktop\client-sites\<client>"; Test-Path out/404.html
```

```bash
# Bash / cross-platform
cd "<client repo>" && npm run build
cd "<client repo>" && test -d out && echo "out exists"
cd "<client repo>" && test -f out/index.html && echo "out/index.html exists"
cd "<client repo>" && test -f out/404.html && echo "out/404.html exists"
```

Each `Test-Path` or `test` command must return true. If `out/` is missing, the build did not perform a static export — inspect `next.config.mjs` first.

`out/404.html` is generated automatically by Next.js when a 404 route exists (default behavior in App Router and Pages Router). If your project intentionally omits a 404 page, document that exception; otherwise the absence of `out/404.html` indicates a build issue.

## Common Failure Message

```
Output directory "out" not found
```

This message means `npm run build` (or the configured build command) completed but did not produce an `out/` directory at the project root. The Cloudflare Pages worker then has no static assets to publish.

## Fix Checklist

When `Output directory "out" not found` appears, work through this list in order:

- [ ] `next.config.mjs` exists at the repo root (not `next.config.js` only, unless the project intentionally uses CommonJS)
- [ ] `next.config.mjs` includes `output: "export"`
- [ ] `next.config.mjs` includes `images: { unoptimized: true }` (or the project explicitly disables the image component everywhere)
- [ ] `next.config.mjs` includes `reactStrictMode: true` and `poweredByHeader: false` per the project-style defaults
- [ ] `npm run build` (or `pnpm build`) was the command actually run, not `next dev` or `next start`
- [ ] The build completed without errors (especially around image components, dynamic routes with `getServerSideProps`, route handlers, middleware, or edge runtime — all of which are incompatible with static export)
- [ ] `out/` exists at the repo root after the build
- [ ] `out/index.html` exists
- [ ] `out/404.html` exists when a 404 route is defined
- [ ] Cloudflare Pages project settings have **Output directory** set to `out`
- [ ] Cloudflare Pages project settings have **Build command** matching the project's package manager (`npm run build`, `pnpm build`, or `yarn build`)
- [ ] No conflicting `.cloudflare/` or `wrangler.toml` configuration is overriding the Pages output directory
- [ ] No conflicting CI step is deleting `out/` between the build and the upload

If every item is checked and the error persists, the project may have been scaffolded with App Router features that block static export (server components doing data fetching at request time, route handlers, middleware, dynamic API routes). Audit those before changing the deployment mode.

## Phase 0 Foundation Rule

This standard is a **Phase 0 foundation rule** for every standard Next.js website build that targets Cloudflare Pages static hosting. Phase 0 inspection (per `prompts/06-claude-code-build-prompt.md` Gate 1) must verify `next.config.mjs` includes `output: "export"` and `images: { unoptimized: true }` **before** the first deployment, not after the first failure.

If `next.config.mjs` does not include these fields:

- The project is not Phase 0 ready for Cloudflare Pages static deployment
- Either update `next.config.mjs` to the canonical template above, or document the intentional exception per the "When This Standard Does Not Apply" section
- Do not attempt deployment until one of those two paths is resolved

## Related Files

- `CLAUDE.md` — primary behavioral contract; `Cloudflare Pages Static Export Rule` global section references this doc
- `checklists/deploy-workflow-checklist.md` — safe-deploy procedure; the Cloudflare Pages static export subsection references this doc
- `checklists/launch-readiness-checklist.md` — launch readiness; Cloudflare Pages static export blockers reference this doc
- `prompts/06-claude-code-build-prompt.md` — Gate 1 inspection now includes the `next.config.mjs` Phase 0 check
- `docs/new-client-startup-workflow.md` — Phase B repo scaffold receives this rule when the project type is Next.js + Cloudflare Pages
- `docs/no-fake-data-policy.md` — fake-data discipline continues to apply to any deployment configuration data

---

Site OS Master — Cloudflare Pages Next.js Static Export Standard v1.0
Status: Phase 0 Foundation Rule — implemented 2026-05-28
Reason for creation: Cloudflare Pages requires an `out/` directory that Next.js does not produce without `output: "export"`; hard-coding this rule prevents the recurring `Output directory "out" not found` failure on first deploy.
