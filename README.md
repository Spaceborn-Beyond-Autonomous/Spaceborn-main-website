# Spaceborn Website

> The Android of drone autonomy through simulation-first intelligence.

This repository contains the official frontend website for **Spaceborn**, showcasing their simulation-first autonomous flight intelligence platforms and systems.

Built using a modern web stack featuring **Next.js**, **React**, **TypeScript**, and **Vanilla CSS** for precise layout and fluid, interactive styling and showcase our products

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites

Use [Node.js](https://nodejs.org/) 26.13.1 LTS and its bundled npm.
If you use nvm, run `nvm install && nvm use` from the repository root.

### Installation

From the repository root, install the locked dependencies and start the dev server.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage preview requires
no environment variables. To test the production build locally, stop the dev
server and run `npm run build` followed by `npm run start`.

### Run with Docker

Build and run the production server, then open [localhost:3000](http://localhost:3000).

```sh
docker compose up --build
```

The image builds the Next.js standalone server and runs it as the non-root
`node` user. The build downloads npm dependencies and the Geist font from
Google Fonts. The homepage works without runtime environment variables.

For certificates or resume uploads, provide the existing server credentials
with `docker run --env-file path/to/runtime.env …`. See the [backend setup](backend/README.md).
If you use a custom releases feed, pass `--build-arg NEXT_PUBLIC_LAUNCHES_JSON_URL=…`
to `docker build` so Next.js can include the URL in the browser bundle.

### CI checks

GitHub Actions runs type checking, the production dependency audit, the Docker
build, and container smoke tests on pushes and pull requests targeting `main`
or `redesign/trial-1`. You can also start these checks manually on GitHub.
The build and smoke tests run on the GitHub runner.

For a custom releases feed during CI, set the repository Actions variable
`NEXT_PUBLIC_LAUNCHES_JSON_URL`. The workflow uses it as a public build value.
Keep server credentials in the environment where you run the site.

### Development Scripts

In the project directory, you can run the following scripts:

| Command | Description  |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000). |
| `npm run typecheck` | Generates Next.js route types and runs TypeScript checks. |
| `npm run build` | Builds the application for production usage into the `.next` folder. |
| `npm run start` | Starts a Next.js production server using the built assets. |

---

## 📂 Project Structure

Here is a quick overview of the directory layout:

```text
├── app/                  # Next.js App Router directories and page layouts
│   ├── career/           # Career opportunities page
│   ├── partners/         # Partners page
│   ├── globals.css       # Core design system and stylesheet
│   ├── layout.tsx        # Main page wrapper with HTML/body and meta headers
│   └── page.tsx          # Landing page entry point
├── components/           # Reusable UI component code
│   ├── HomePage.tsx      # Core landing page layout and interactive simulators grid
│   └── MobileMenu.tsx    # Mobile navigation drawer component
├── public/               # Static assets (images, videos, icons)
├── package.json          # Package manifest and script definitions
├── tsconfig.json         # TypeScript compiler configurations
└── .gitignore            # Git exclusions
```

---

## 🛠️ Tech Stack & Features

- **Next.js 16.4** (App Router)
- **React 19.3**
- **TypeScript 7** with an ES2025 compiler target
- **Tailwind CSS 4 and daisyUI 5**
- **Vanilla CSS** with customizable animations and custom responsive layouts
- Fully-responsive design (mobile-first transitions)
- High-fidelity background videos & media components
- PostgreSQL for certificate records and Google Drive for resume storage

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

## Project knowledge

Authored project notes live in [docs/knowledge-base](docs/knowledge-base/README.md).
The local Graphify graph is `graphify-out/graph.json`; the Obsidian vault is
`graphify-out/obsidian/`. Generated knowledge exports and extraction caches stay
local. See the notes for the update workflow and homepage decisions.
