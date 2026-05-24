# Critique — 006-vertical-book-spines — Round 1

## Verdict
Ship as-is. This is one of the round's most visually decisive answers to §11 — a row of vertical-RL spines at a wood-shelf base is unmistakably its own ontology.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: actual horizontal row of vertical-RL spines (`writing-mode: vertical-rl; transform: rotate(180deg)`, line 90) at varied widths. Width encodes site size. No icon, no meta-row.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes also render as `.spine` elements in a "new acquisitions rack" — same dialect, smaller rack, marked sub-collection (line 105–108). Excellent dialect carry-over.
- Library (per direction) is a wider shelf of spines grouped by category. Need to spot-check, but the spine pattern is genuinely repeating throughout.

## Hard violations of v11/v12 taste constraints
- No purple. Accent gilt `#B3893D`.
- Mono used: `ui-monospace` appears in `.file-editor code` (line 131), `.blueprint-json` (line 135), `.code-editor.log-stream` (line 148). All these are inside code surfaces — allowed by BRIEF §3.
- Cormorant Garamond + Atkinson Hyperlegible. Both allowed.
- Rail: 5 distinct ribbon-bookmark SVGs + identity. Should pass.
- Borders: spine has 1 outer border + inset shadow. No nested borders.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five ribbon silhouettes (pennant, deep cut, scalloped, dome, narrow-tail) per meta. Should be checked at SVG level but the meta claims real silhouette variation. From the screenshot the rail reads as a thin column of vertical ribbons; the silhouettes are distinct.

## Iframe primacy
Yes. The pane is 388px (narrowest in the set so far, good), iframe gets the rest. The spines are visually striking but they're confined to a contained horizontal "shelf" inside the pane — not visually competing with the iframe.

## Typography
Cormorant Garamond italic spines plus Atkinson Hyperlegible body. Coherent. The gilt color reads warm without becoming a second accent.

## Three concrete suggested fixes (Round 2)
1. The spine widths only have 4 size classes (`s-small/s-medium/s-large/s-xl`, lines 93–96). With 4 saved sites, every spine ends up classed differently — fine. But for 6+ start-routes the variation will get repetitive. Add `s-xs` and `s-xxl` and randomize so the rack reads less templated.
2. The corner widget (`.cws`, line 161) sits at iframe bottom-right and uses a tiny gilt ribbon stripe. Currently the widget shows `nm` + `st` (`.cws .st`, line 164) — two stacked text rows. This is a small violation of §11 spirit, just at miniature scale. Collapse to a single line: `Coffee Shop · live` with one rule.
3. The active spine state uses both an outer ribbon `::after` and a `box-shadow` glow (lines 97–98). The glow is `0 0 20px rgba(217,179,106,.3)` — borderline neon for this hand-stitched aesthetic. Drop the glow, keep the ribbon. The ribbon alone is the warmer signal.
