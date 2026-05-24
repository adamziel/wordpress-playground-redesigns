# Critique — 011-inscription-hall — Round 1

## Verdict
Ship with minor revisions. Strong execution — centred Cinzel capitals with bronze cross-rules read as a Roman memorial tablet, distinctly different from every other v12.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.inscription` is a centered Cinzel uppercase title + Cinzel uppercase Roman-date below + bronze 60px hairline. Lines 109–112. No icon, no meta-line — the date IS the metadata, and it's typographically inseparable.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent. The "date" line beneath the title is short (e.g. `MMXXVI`), typographically integrated as a kicker, not a data row.
- Start-routes use `.inscription.route` (line 119) — same dialect, slightly smaller, marked as a sub-collection.
- Library overlay uses categorized Cinzel inscription columns — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Bronze `#9F7A3C`.
- Mono used: `ui-monospace` in `.editor-pane` (line 154), `.blueprint-json` (line 161), `.code-block` (line 179). All inside code surfaces, allowed.
- Cinzel + Atkinson Hyperlegible. Both allowed.
- Rail: 5 Roman numerals I, II, III, IV, V at the same `font-size:18px` (lines 90–94) — they all share the same size and font. Distinct silhouettes by stroke count (I = 1 stroke, II = 2, III = 3, IV = 2 + cross, V = 2-diagonal) but the variation is only inherent to the letterforms, not styled per-dock.
- Borders: inscription has bottom hairline (`::after`, line 112) only. Good.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five Roman numerals at identical size and weight. III is genuinely visually different from I, but I and IV start to read uniformly at small sizes. The meta says "each numeral a distinct silhouette by stroke count" but the styling (lines 90–94) just sets identical font-size to all five. The variation lives in the glyphs themselves but feels passive. Borderline pass.

## Iframe primacy
Yes — pane is 360px (one of the narrowest), iframe wins decisively. The dark stone palette keeps the chrome quiet.

## Typography
Cinzel (display caps) + Atkinson Hyperlegible (body). Both Google-Fonts-linked. Cinzel does heavy duty on inscriptions, save pills, even settings labels (line 134) — strong identity.

## Three concrete suggested fixes (Round 2)
1. Rail numerals at uniform 18px — vary the weight (Cinzel 400/500/600/500/700) or letter-spacing per dock to genuinely differentiate silhouettes. Currently I/IV/V are nearly identical in optical weight. Lines 90–94.
2. The corner widget `.cws` (line 127) is positioned `left:454px` (inside the pane area near the iframe edge) — it shows `nm` + `ms` (italic metadata) — two text elements on one row. Acceptable, but the `.ms` in `Atkinson Hyperlegible italic` is the only italic-non-Cinzel in the chrome, which breaks the inscription voice. Replace with a single Cinzel mini-line.
3. The `.inscription.current::before` is a `linear-gradient(90deg, transparent, rgba(159,122,60,.7), transparent)` horizontal bar across the inscription (line 114). It glows like an LED strike-through. Replace with a 1px hairline cross-rule OR a single small bronze diamond at one end — match the "chiseled rule beneath" idiom.
