# Critique — 009-cinematic-lookbook — Round 1

## Verdict
Ship with minor revisions. One of the round's most distinctive list patterns — square gradient-mock tiles with a single italic Playfair title is a clean image-led ontology.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: 2-column grid of square `.tile`s, each with a CSS-gradient mock-screenshot `fill-*` and a title overlay at the bottom in italic Playfair. NO metadata on tile face. Confirmed in markup (lines 93–102).
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes use the same `.tile` element in a 3-column grid (lines 134–138) — same dialect, smaller tiles.
- Library overlay uses a wider tile grid — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Gold `#C9A24B` accent.
- Mono used: `ui-monospace` in `.file-editor code`, `.blueprint-json`, `.code-editor.log-stream` — all inside code surfaces, allowed.
- Playfair Display + Mona Sans. Both allowed.
- Rail: 5 mini-poster swatches + identity avatar. Distinct gradient blocks (per meta).
- Borders: tiles have 1 outer border, active state changes border-color only. The `top-mark` and `title` are positioned absolutes, not nested borders.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five tiny gradient swatches — risk is they read as five small rectangles in a column unless the colors vary noticeably. From meta these are 5 distinct mini-thumbnails. Need to check the SVG/CSS for the rail at line 70+. Visually from the screenshot the rail looks more decorative-uniform than ideal; this is the design's weakest beat.

## Iframe primacy
Yes — pane is 420px, iframe wins. The tile gradients are dim, the gold accent is restrained to one active-state dot.

## Typography
Playfair Display italic + Mona Sans. Both Google-Fonts-linked. Mona Sans is well within the allowed font palette but is close to Inter visually — verify it loads (not falls back to system-ui sans).

## Three concrete suggested fixes (Round 2)
1. The mock-screenshot fills (`fill-coffee`, `fill-vueo`, `fill-gaming`, `fill-unsaved`) currently render as dark rectangles in the screenshot — they're so similar in tone that the lookbook reads as a column of identical brown tiles. Push hue separation: `fill-coffee` should be markedly warmer, `fill-gaming` deeper red, `fill-vueo` cooler. Lines 105–121.
2. The corner widget `.cws` (line 188) has `.nm` + `.meta` stacked — two rows of text exactly. This is the v11 anti-pattern in miniature on the corner widget. Either drop the meta line or collapse to one.
3. The `.tile .top-mark` (line 99) in `Mona Sans` 9.5px uppercase letter-spaced — at this size it reads as a hardcoded label, not a discoverable affordance. If the meta says NO meta on tile face, the top-mark should be a category/episode marker only (e.g. "Featured · 01") not metadata.
