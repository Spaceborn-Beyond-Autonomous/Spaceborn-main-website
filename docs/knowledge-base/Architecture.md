# Architecture

[[README]] · [[Homepage]] · [[Redesign-trial-1]]

## Purpose and entry points

Spaceborn's public website introduces its autonomous systems platform and
products. It uses Next.js App Router, React, TypeScript, and vanilla CSS.

- `app/page.tsx` renders `components/HomePage.tsx` and owns homepage metadata.
- `app/layout.tsx` owns shared metadata, global styles, and `PageTransition`.
- `components/HomePage.module.css` scopes the homepage design.
- `app/home-daisyui.css` builds prefixed daisyUI components via Tailwind and
  `postcss.config.mjs`. The `spaceborn` theme applies to the homepage. Tailwind Preflight is omitted to preserve other route styles.
- `components/Navbar.tsx`, `Footer.tsx`, and `ResumeModal.tsx` provide shared UI.
- Other route trees cover company, systems, platforms, industries, simulation,
  DERYK, launches, and certificate verification.
- `app/api/` contains certificate and resume endpoints. Their implementations
  preserve their existing routes and data. Resume uploads use the Drive-only
  `@googleapis/drive` client shared with the local OAuth helper.

## Homepage dependencies

On `redesign/trial-1`, CSS controls entrance and motion preferences. The root
layout loads Font Awesome from `all.min.css` for navigation and UI icons.
The homepage uses checked-in Spaceborn media and existing Cloudinary URLs.
The hero, product previews, and selected simulation use `LoopingVideo`.
It plays muted loops in view, pauses off-screen and on inactive tabs, and
respects reduced motion. The active simulation keeps its media position across
tab changes. Native video sources select a smaller rendition on compact layouts.
Homepage anchors use native smooth scrolling, and the header stays in place.

## Setup and verification

Node.js 26.13.1 LTS is pinned in `.nvmrc` and the Docker base image. CI reads
`.nvmrc`. The app uses Next.js 16.4, React 19.3, and TypeScript 7 with an
ES2025 compiler target. Next runs the native TypeScript CLI during builds.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run start
```

`.github/workflows/ci.yml` typechecks, audits production dependencies, builds
the standalone image, and tests the running container on pushes and pull
requests targeting `main` or `redesign/trial-1`. The smoke test checks the home
and about pages, video byte ranges, and the container user. GitHub Actions
runs these checks on its runner and stops after verification. The repository's
optional public releases feed variable is passed at build time.

The root `Dockerfile` sets `NEXT_STANDALONE=1` for the build. The runtime stage
copies Next's traced server, static assets, and `public/` under a non-root user.
Run the local container with `docker compose up --build` from the repository root.

Application configuration, credentials, and upload content must remain outside
knowledge extraction. No secrets are needed to render the homepage.
