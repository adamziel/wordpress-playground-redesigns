# 009 — Cinematic Lookbook

## Thesis

A luxury fashion lookbook — heavily image-led, generous gutters, one typeface for headlines (Playfair Display), one for body (Mona Sans), nothing typographically ornamental otherwise. The Playground adopts the lookbook's instinct: a saved playground is its cover image, not its data. The cover does the recognising; the title in italic at the bottom does the naming. There is no second line.

## List pattern

**Square lookbook tiles.** Each saved playground is a 1:1 tile filled with a CSS-gradient "mock screenshot" composed of solid blocks, faint scan-bars and shapes that suggest the site's actual visual character — warm browns and a row-of-dots for Coffee Shop, blue/grey calm for Vueo, dark red mast for Gaming News, dashed mesh for unsaved. A Playfair Display italic title rides the bottom inside the scrim. There is no metadata text on the tile face. The active tile wears a gold border and a gold pinpoint top-right. The start-routes panel uses the same idiom in a 3-column grid; each route gets its own gradient temperament (vanilla, PR-green tag, blueprint-grid, github-line, etc.). The Blueprint Library overlay re-uses the tile in a 5×4 grid that, at full size, is unmistakably "the lookbook."

## Focus test

Look at the pane for three seconds. The tile with a gold border and a gold pinpoint is the active site. The dashed-mesh tile in italic-amber is the unsaved playground. There is no row of values to scan past — every other entry is just a cover and a title, the way a fashion lookbook would lay it out.

## Trade-offs

The lookbook idiom hides metadata entirely on the tile face. A user who wants WP/PHP version at a glance has to hover or open the tile — production would surface metadata in a hover sheet or a sidebar inspector. Gradient mock-screenshots are an artistic decision that cannot scale literally to 43 blueprints — production would store a thumbnail per blueprint, but we lean on the gradient palette to keep the design honest about being a mock. The 5×4 library grid sacrifices some text density for visual continuity. Mobile reduces the lookbook to 2 columns and keeps the bottom-bar's five mini-swatches consistent with the desktop rail's five poster-swatches — five distinct miniature artworks for the five docks.
