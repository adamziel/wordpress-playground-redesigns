# 006 — Risograph Pulp

## Thesis

A risograph print of the v7 #010 model. The chrome treats WordPress Playground like a zine sheet: fluorescent pink (#FF48B0) and powder blue (#5BA8E5) inks knock against bone paper (#F6F1E4), tile by tile, with the warm sheen of duplicator-printed pulp. Every border is a 1.5px ink-black hairline that "prints" 1px off-register — a translucent pink shadow shifted +1px on the x-axis — so the whole surface looks slightly misaligned in that classic two-pass riso way. A subtle SVG feTurbulence paper-noise layer and halftone-dot ornament reinforce the analog feel without competing with the iframe.

## What's locked vs. explored

**Locked (v7 #010 IA, untouched):**

- Quiet left rail (64px) holds the dock; one swap-content pane to its right.
- Slim 40px top capsule floats over the iframe: refresh, address, Playground name, save-state pill (Unsaved / Saving / Saved / Stale), more menu (Export to GitHub PR · Download .zip), fullscreen.
- Corner site widget pinned to the iframe's bottom-left — here, a riso "stamp" with hand-drawn outline and halftone fill that opens the Sites pane.
- Library is a z3 modal overlay (poster sheet) with 10 categories and 16+ blueprint cards, reachable from the Sites pane or ⌘K.
- Mobile mirror: rail rotates to a bottom tab bar, pane becomes a bottom sheet, library becomes a full-screen sheet, corner widget shrinks to a thin capsule above the rail.

**Explored (the variation budget):**

- Pane arrangement: **3 dock icons** — Sites, Inspect (Files + Blueprint as 2 tabs), Runtime (Database + Logs as 2 tabs). Settings hangs off the Sites pane head so it's always one hop from launch.
- Visual idiom: two-color riso duotone with ink hairlines, halftone backdrops, paper-grain noise filter, and chunky Space Grotesk display + IBM Plex Mono technical bits.
- Border vocabulary: 1.5px ink-black hairlines with a 1px pink "misregister" shadow.

## Trade-offs

The duotone and noise overlay add personality but raise contrast risk in dense surfaces. We kept the iframe as the only fully sharp, fully saturated object — all chrome runs through a paper-noise filter and the riso palette, so the WordPress site stays the loudest thing on screen. Grouping Files+Blueprint and Database+Logs into 2 tabs each shrinks the rail to 3 destinations (down from 5) and reduces decision fatigue, but means a click on Inspect always lands on Files by default; users authoring blueprints must take one extra tab tap. The 1px pink misregister shadow is decorative, not semantic — we did not propagate it into focus rings (focus uses a true 2px outline) so a11y is unaffected.
