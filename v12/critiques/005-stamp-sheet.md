# Critique — 005-stamp-sheet — Round 1

## Verdict
Minor revisions. Strong, distinct execution — the CSS perforation mask is real, the 2-column album reads as a stamp sheet, the cinnabar accent feels period-appropriate.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: 2-column grid of perforated cream stamps with centered italic Cormorant title, small "country" eyebrow, and tiny denomination corner figure. No icon, no meta-line.
- Matches `listPattern` claim precisely.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes render as `.album-strip` (3-column smaller stamps) — same dialect, marked sub-collection.
- Library overlay uses 5-column `.album` of stamps — consistent dialect, scaled.

## Hard violations of v11/v12 taste constraints
- No purple. Accent cinnabar `#C24A2C`.
- Mono: file editor only (acceptable).
- Cormorant Garamond + Atkinson Hyperlegible — both allowed.
- Rail: 5 hand-drawn motifs (compass rose, key, paper, anchor stone, fountain pen) + identity. Different silhouettes by intent.
- Borders: stamp `.stamp::after` is a single inset rule. No nesting violations visible.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five hand-drawn philatelic motifs (per meta) — need to verify they read as 5 distinct silhouettes; in the screenshot they appear as small line-drawings at low contrast. Probably passing, but they could push contrast a notch.

## Iframe primacy
Yes — iframe holds right two-thirds, pane ~440px. The cream stamps are visually bright in the pane but balanced by the iframe's coffee-warm composition.

## Typography
Cormorant Garamond italic + Atkinson Hyperlegible. Both Google-Fonts-linked. Cormorant Garamond dominates titles and even Site Manager field labels (line 157) — strong identity, consistent.

## Three concrete suggested fixes (Round 2)
1. The perforation mask uses `radial-gradient(circle at 5px 5px, transparent 3px, #000 3.5px) 0 0/10px 10px` (line 87). At 10px tile size this creates perforations only along the top-left edge of the stamp because the mask isn't fully tiled across all four edges. Verify the perforation reads on all four edges of every stamp — if not, the perforation mask needs a multi-direction variant (e.g. apply it as a layered mask with vertical and horizontal sets).
2. The stamp `.country` eyebrow currently shows things like "ENGLAND" or "WORDPRESS" — a tiny ornamental row above the title. This is verging on a per-row label, and the "denom" `WP 6.7` at the bottom right plus the corner `num` reads as TWO meta marks per stamp. Reduce to ONE meta mark (denom only) or remove the country eyebrow. Lines 94–99.
3. The active-stamp state only changes the inset border color (line 93). This is hard to see in a 2-col grid. Add a tiny cinnabar dot in the top margin or shift the active stamp's cream tone slightly warmer, so the active state is legible at a glance.
