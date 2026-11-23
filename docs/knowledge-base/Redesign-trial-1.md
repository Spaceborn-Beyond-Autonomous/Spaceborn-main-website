# Redesign trial 1

[[Homepage]] · [[Architecture]]

The trial explores a cinematic presentation of Spaceborn's autonomy software,
simulation, and flight hardware.
The black and gray palette, D-DIN/Geist typography, logo, product names, and
technical content come from the existing site. A continuous charcoal-to-black
background runs through the homepage and its footer. The hero film fades
into it. The final refinement also covers shared navigation and the detail
page layouts. D-DIN headings use the font’s natural
letter spacing and roomier line heights for wrapped titles. The Releases
trigger shares the main navigation button style.

- **Hero:** the checked-in ELARA board footage, with a poster, reduced-motion
  behavior, and a short entrance for the headline, description, and media.
  The 1080p film loops while visible and shows its poster for reduced motion.
- **Why Spaceborn:** an asymmetric grid with larger simulation and Ground
  Control panels. Four smaller panels explain the other benefits. The grid
  spans the page gutters and the introduction is centered above it.
- **Platform and simulation:** the existing product links and media, followed by
  centered daisyUI scenario tabs with keyboard selection. Product clips and
  the active scenario loop in view without overlay controls. Each simulation
  has a stable frame and poster, and visited clips resume from their previous
  positions. The 4K Cloudinary clips have 1440px renditions on compact screens.
  The homepage self-hosts Geist through `next/font/google`.
- **Hardware:** product images retain their proportions alongside their existing
  board descriptions and specifications. Hardware tabs crossfade inside a
  grid sized to the tallest panel, and the specifications identify row and
  column headings.
- **How it works:** explain documented AI, software, simulation, and hardware
  roles using the supplied platform relationship and existing technical pages.
  The four layer cards converge on the platform through a branching diagram
  that shifts to a vertical rail on narrow screens. daisyUI Aura provides a
  steady monochrome glow, with the brightest edge on the platform card.
- **Contact:** one centered action to contact engineering. The footer pairs
  Geist text with a daisyUI CEO email button and Font Awesome glyphs.

Apple's homepage and MacBook Pro page supply the reference for scale and product
emphasis.
Runpod's site supplies the reference for uneven feature grids and workflow
hierarchy. The existing site, checked-in media, Cloudinary references and slides
supply the product evidence. The linked Drive folder and Canva deck did not
return readable contents during the review.

The shared navigation uses Font Awesome and returns focus when menus close.
A native mobile dialog and inactive-panel controls keep focus in the visible
content. Decorative section labels and leading-zero indexes were removed
from shared details, Releases, and DERYK. Technical identifiers and timecodes
retain their original formats.
