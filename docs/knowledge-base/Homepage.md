# Homepage

[[README]] · [[Architecture]] · [[Redesign-trial-1]]

These notes describe the homepage on `main` before the redesign trial.

## Scope and decisions — 2026-11-22

The user requested homepage-only edits, preserving the black theme, existing
video tiles, and Next.js implementation. They authorized pushing to
`https://github.com/Sa3d-99/Spaceborn-main-website.git`.

- Replace “Autonomy, from the silicon up” with a direct statement about building
  autonomous machines without rebuilding the stack.
- Explain the problem: AI, software, simulation, and hardware are fragmented;
  teams repeat infrastructure engineering across different machines.
- Explain Spaceborn's six benefits: faster development, accuracy, an integrated
  platform, hardware focus, AI insights, and growth from research to deployment.
- Remove eyebrow labels and section numbers from the homepage headings.
- Show product descriptions and explanatory paragraphs on both desktop and mobile.
- Keep media URLs, tile order and sizing, product links, hardware specifications,
  hardware tabs, simulation scenes, navigation, footer, and resume flow intact.
- Override the homepage description in `app/page.tsx`; preserve shared metadata
  for other pages.

Rendered order: Hero → TheProblem → ProductGrid → WhySpaceborn → HardwareLab →
RealityEngine → Closing. Shared navigation and footer surround the page.

The homepage uses daisyUI for the hero, cards, tabs, specifications table,
buttons, and resume dialog controls. The stylesheet is imported by `app/page.tsx`
and uses a `du-` prefix and the local Spaceborn theme. CSS Modules keep the media
layout and overlays. React still controls the hardware and scenario selections,
and the resume form uses a native dialog with daisyUI styling.

The hero video spans the viewport width. Its text keeps its own inset for
readability.

Homepage copy explains the job of each platform layer and gives concrete
examples of the six benefits. Section headings and intro text are centered
above the full-width content. The Contact engineering link sets the daisyUI
primary text color explicitly because the shared link rule otherwise takes
precedence over the layered button style.

The platform diagram spans most of the homepage width with daisyUI side cards and
a centered summary. The hardware selector keeps its boxed daisyUI tabs in a
centered row. Product and hardware documentation links use Font Awesome's solid
circle arrow. Homepage navigation dropdowns use its plain right arrow, which
points diagonally upward on the external DERYK and KHONSU links. Both glyphs
load from Font Awesome Free's packaged `all.min.css` webfont stylesheet.

## Evidence

The supplied three slide images describe the fragmented stack, repeated
infrastructure for drones/rovers/robots/industrial machines, and six reasons to
choose Spaceborn. Copy is adapted from those references and current product
source; performance improvements are positioning, not measured benchmarks.

- Live reference: <https://www.spaceborn.in/>
- Drive reference: <https://drive.google.com/drive/folders/1qoPD3y3Sdl0b-99_iVhA8M6Y9p2rTl1J>
- Canva reference: <https://www.canva.com/design/DAHV2RkFSRE/-Abc4TeocVV3gDw1X-yWyQ/view>

The web tool could read the live site but could not access the Drive or Canva
contents. The attached slide images supplied sufficient evidence to proceed.

## Verification

TypeScript and production build passed. Browser checks at 1440, 1024, 768, 390,
and 320 pixels confirmed the replacement heading, eyebrow removal, numbering,
six benefits, retained tile/video counts, visible explanatory copy, and no
horizontal overflow. Hardware click/keyboard selection, simulation switching,
and the resume modal passed; no page JavaScript errors were observed. The
320-pixel check also exercised the reduced-motion preference.

QA scripts and screenshots are local under `/tmp/spaceborn-home-qa/` and are not
application dependencies or tracked assets. No deployment was requested; a Git
push does not itself verify the live production domain.
