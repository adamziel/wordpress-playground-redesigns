# Critique — 007-wall-labels-museum — Round 1

## Verdict
Ship as-is. Among the cleanest §11 answers — the prose-ascription pattern reads as literary writing, not as a UI list.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each entry is `roman` numeral + italic Spectral title + a single prose ascription paragraph in Plus Jakarta Sans (lines 98–103). No data row. No icon (Roman numeral is a marker, not a glyph). Reads as language.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent — the ascription is a prose sentence ("WooCommerce storefront, fourteen products, twelve days in residence"), not a data row.
- Start-routes use the same `.label-card` pattern (verifying from screenshot) — consistent dialect.
- Library overlay uses `.lib-cartouche` with the same prose-ascription format (lines 181–185) — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Accent bone-cream `#D9CFAA`.
- Mono used: `ui-monospace` in `.file-editor code`, `.blueprint-json`, `.code-editor.log-stream` — all inside code surfaces, allowed.
- Spectral + Plus Jakarta Sans. Allowed.
- Rail: 5 Roman numerals (I, II, III, IV, V) with varied weights/sizes per dock + identity avatar. Distinct silhouettes by stroke count. Good.
- Borders: label-card has bottom hairline only. No nested borders.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device. The narrative captions sit outside the frame.

## Rail button distinctness (Forest-Botanical test)
Five Roman numerals at varied weights and italics. Strokes I, II, III have very different silhouettes (1 stroke vs 3 strokes); IV and V are distinct. Passes.

## Iframe primacy
Yes. Pane is 386px, iframe wins by area. The picture-light wash above the active label is subtle and never tints the iframe.

## Typography
Spectral italic + Plus Jakarta Sans. Both Google-Fonts-linked. Spectral italic carries titles, Plus Jakarta Sans carries ascription prose — consistent. The pane reads almost like a literary catalogue.

## Three concrete suggested fixes (Round 2)
1. The corner widget `.cws` (line 159–162) currently shows roman + title + ascription as three stacked rows — that's THREE lines, which crosses into the territory of an info card. Trim to roman + title only, or roman + ascription only. Currently it's the heaviest object near the iframe corner.
2. The active-label `picture-light` wash uses `box-shadow: 0 0 10px rgba(217,207,170,.4)` on the bone left bar (line 104). Bone at 40% alpha against the dark wall reads almost yellow-green at this distance. Drop alpha to .25 and shorten the blur to 6px so the picture light feels like incandescent, not LED.
3. The "ascription" sentences for start-routes need writing: from the screenshot they look like terse setup instructions, which breaks the literary voice. Rewrite each as a single ascribed prose sentence (e.g. "Vanilla WordPress · The unembellished latest stable, English locale, no plugins." instead of a brief list).
