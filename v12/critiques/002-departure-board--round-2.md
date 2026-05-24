# Critique — 002-departure-board — Round 2

## Round 1 items addressed
1. Rail dock differentiation (replace identical monogram pairs) — ✓ done. Now `S (28px) / MGR / BP / D·B / LOG` at five distinct sizes (28/14/20/16/14) with different letter-spacings; the single-letter `S` reads decisively different from the multi-character siblings. Real silhouette variety.
2. Constrain Saira Stencil One creep into body text — ⚠ partial. Stencil still appears in `.widget .nm` (Coffee Shop), but the metadata `sep` and `stat` switched to Public Sans, so the bleed is reduced.
3. Active flap state too subtle — ✓ done. Bumped to `rgba(224,138,44,.13)` plus added a 2px amber left bar on `.flap.active::before`. Active row is now legible at a glance.

## New issues introduced
None. The 28px `S` does the heavy lifting on the rail without breaking the stencil voice; reads like a track-number on a platform plate.

## Still unaddressed
Stencil typeface is still used in the corner widget's site name. Acceptable — the widget is short, single-line, and consistent with the destination-board metaphor; not worth another pass.

## Final verdict
SHIP
