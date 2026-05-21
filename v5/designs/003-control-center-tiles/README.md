# 003 — Control-Center tiles

## Thesis
The WordPress iframe is the entire document. At idle, there are eight affordances total — a slim glass top chrome (refresh, address, saved-state pill, fullscreen, Control) and a glass dock of saved sites at bottom-left. Everything else lives behind one button: **Control**, which slides a frosted, iOS-Control-Center-style grid of tiles into the top-right quadrant. Each tile owns exactly one feature. Tap a tile to jump to its last state; long-press a tile to expand it in place into a focused sheet within the same overlay box. Tiles carry their own status (badges, toggles, meters, a slider for Save), so the grid is both nav and dashboard. Two-finger gestures, four interaction types (tap, long-press, drag, ⌘K), and one quadrant — the whole IA fits in a thumb.

## What was merged / removed and why
The triple-entry-point sin (settings popover + Site-Manager Settings tab + info-notice "Save site locally" button) collapses into one Settings tile, one Save slider, and a saved-state pill in the address bar. Save lives in three places only by reflection — the slider, the keyboard (⌘S), and the pill state — but there is only one canonical *door*. The Site-Manager sidebar dissolves: its five tabs (Settings, Files, Blueprint, Database, Logs) become five tiles, and the "secondary surface" (the expanded sheet) is the single panel that swaps between them. The "Saved Playgrounds" launcher trifurcates correctly: Your Playgrounds → the bottom dock and the Sites tile detail; Start New → the New tile (six sources as a 3×2 grid); Blueprints → the Blueprints tile (full 43-card gallery with the 10 category chips and search). "Apply & Reset" loses its tiny red banner and gets a real destructive-confirm sheet with a typed phrase, a diff preview, and Esc-to-cancel.

## Trade-offs
The Control button is a learned gesture; a brand-new user must discover that the tile grid is where everything lives. We mitigate by labelling it ("Control" with a ⌘K hint) and by leaving the saved-state pill, the address bar, and the sites dock visible at idle, so a first-touch user can still refresh, navigate, see they're unsaved, and pick another site without ever opening the grid. Power users will miss simultaneous Files-tree-plus-Logs visibility; that's the cost of "one surface, swapped content" — we earn it back with quick switching between tiles via the small icon-strip in each expanded header. Long-press as a primary interaction is more natural on touch than desktop; on desktop we expose it as a right-click and as the same icon being clicked in the expanded header. The Save slider tile is intentionally larger than a button — it asks the user to *commit* to saving, which is appropriate when the alternative is losing a session on refresh.

## Self-critique scores

```
[x] Affordance count at idle ≤ 8?           Score: 4/5  — 8 exactly, but the sites dock visually contains
                                                          several avatars; we treat it as one cluster.
[x] iframe primary + fullscreen toggle?     Score: 5/5  — explicit F / Esc, dedicated state, hint pill.
[x] One door per feature (no duplicates)?   Score: 4/5  — Save reflects across pill + slider + ⌘S, but the
                                                          one *door* to save is the slider; settings sit
                                                          behind one tile.
[x] One secondary surface (not many)?       Score: 5/5  — the top-right overlay is the only surface, and
                                                          its contents swap.
[x] Direction expressed strongly?           Score: 5/5  — every detail (slider tile, toggles, grid, frosted
                                                          quadrant, long-press) reads as Control Center.
[x] Mobile feels like wider-mobile desktop? Score: 4/5  — chrome, dock, Control all map identically; the
                                                          tile grid scales to a vertical 2-column stack.
[x] Critique pass on glass/ambient use?     Score: 4/5  — glass earns its job: it lets the running WP site
                                                          glow through behind every chrome surface, which
                                                          is what we lose in opaque sidebars.
```
