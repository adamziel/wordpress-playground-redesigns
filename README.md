# WordPress Playground — 100 Alternative Redesigns

A gallery of 100 alternative redesigns of the WordPress Playground UI ([playground.wordpress.net](https://playground.wordpress.net)). Each design preserves **every** feature of the current UI but reshapes the layout, information architecture, or visual language.

🔗 **Browse the gallery:** https://adamziel.github.io/wordpress-playground-redesigns/

## Constraints every design honors

- **No features added.** Every redesign exposes the same capabilities as the current UI: refresh, address bar, save/load playgrounds, edit settings (WP/PHP/lang/network/multisite), launch from blueprint / GitHub / PR / blueprint URL / .zip, browse 43 blueprints, edit files, edit blueprint JSON, browse DB, view logs, export to GitHub or .zip.
- **No features dropped.** The redesign is the chrome around the WordPress iframe — the iframe stays.
- **Single self-contained HTML.** Each `designs/NNN-*/index.html` runs without a build step.
- **High fidelity, not wireframe sketches.** Real typography, real spacing, realistic mock data.

## What's in this repo

- [`DESIGN_BRIEF.md`](DESIGN_BRIEF.md) — the spec every designer worked from.
- [`DESIGN_DIRECTIONS.md`](DESIGN_DIRECTIONS.md) — the 100 unique starting directions.
- [`BLUEPRINTS.md`](BLUEPRINTS.md) — the 43 real blueprints, used as mock data.
- `assets/screenshots/` — screenshots of the current playground.wordpress.net UI.
- `designs/NNN-direction-slug/index.html` — one redesign per folder, plus a `README.md` per design.
- `reviews/NNN.md` — high-bar critique of each design from a separate critic.
- `index.html` — the gallery landing page (deployed via GitHub Pages).

## Methodology

Designs were produced by a fleet of parallel sub-agents (10 designers + 1 critic) running concurrently, each blind to the others' work. Each picks a unique direction from `DESIGN_DIRECTIONS.md` and produces a self-contained HTML file. The critic continuously reviews completed designs against the brief, looking for missing features, weak IA choices, and shallow execution. Failed sessions are auto-restarted.

License: MIT.
