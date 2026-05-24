# Critique — 013-stencil-id-plates — Round 1

## Verdict
Minor revisions. Solid distinct pattern, but very close in visual language to 002-departure-board (same Saira Stencil One typeface, same orange-amber accent, same 2-letter rail codes). The diversity test against #002 is the design's main weakness.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.plate` is a single stencil-cut title with a small "stock number" stencil at the corner (e.g. `WP67/PHP82/14M`) and a "lot-mini" stencil at bottom-right. Lines 113–123. No icon, no second-text-row.
- Matches `listPattern`. The stock-number is one terse compound, not a meta-line.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes use `.plate.small` (lines 122–123) — same dialect, smaller plates.
- Library overlay (per direction) is "a yard of crates" — should be plates in a grid, confirm at Round 2.

CROSS-DESIGN SIMILARITY WARNING: this design shares typeface (Saira Stencil One), rail-code idiom (`SI · SM · BP · DB · LG`), and orange accent with #002 Departure Board. The saved-sites list is genuinely different (plates vs split-flap rows) but the rail, top-cap, and surface tones are very close. At thumbnail scale these two designs look like siblings.

## Hard violations of v11/v12 taste constraints
- No purple. Orange `#E07A2C`.
- Mono used: `ui-monospace` in `.editor-pane`, `.code-block`, `.blueprint-json` — all code surfaces.
- `Saira Stencil One` for `.typed-row input` (line 168) — this is a UI input but with `letter-spacing:.14em`; arguably still UI chrome. Saira Stencil One is allowed by BRIEF §4 ("Saira Stencil One"). Acceptable.
- Rail: 5 2-letter abbreviations at varied sizes/letter-spacings (lines 93–97). Same critique as #002: the variation is real but subtle and reads as a uniform monogram column.
- Borders: plate has 1 outer border + left bar `::before`. Stock-no and lot-mini are absolutely positioned, not nested borders. Acceptable.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Same critique as #002: five 2-letter monograms in framed tiles. Pass with the same reservations.

## Iframe primacy
Yes — pane is 384px, iframe wins.

## Typography
Saira Stencil One + Public Sans. Same combo as #002. Strong identity, but the v12 set has TWO stencil designs which makes the diversity test harder.

## Three concrete suggested fixes (Round 2)
1. To differentiate from #002, lean harder into the "crate plate" idiom — give each plate a corner notch (CSS `clip-path:polygon` with a 8px corner cut) or a small bolt-holes effect, so the plates LOOK like physical objects, not just dark cards. Line 114.
2. The corner widget `.cws` (line 130) has stencil-cap text + `.ms` in Public Sans (line 132) — two text elements on one row. Acceptable as a single horizontal compound, but the mixing of stencil + sans on one line is visually noisy. Pick one.
3. The `stock-no` at top-right (line 120) shows `WP67/PHP82/14M` in `Saira Stencil One` at 9.5px with `letter-spacing:.12em`. At that size + spacing it's nearly illegible. Either bump to 10.5px or simplify to just `WP67 · 14M`. Single terse compound, not a microscopic code.
