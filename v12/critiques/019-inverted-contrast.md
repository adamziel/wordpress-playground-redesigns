# Critique — 019-inverted-contrast — Round 1

## Verdict
Ship with minor revisions. Among the most decisive answers to §11 — Bodoni Moda opsz 72 hairlines on near-black is unmistakably its own ontology, no card chrome at all.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.contrast .entry` is `ord` (1-char ordinal) + `ttl` (Bodoni 36px opsz 72) + right-aligned `sz` (Manrope 11px tabular). Lines 77–83. The hairline-thick-thin contrast IS the visual.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent — single line per entry, no second row, no icon (the `ord` is a 1-char Bodoni italic ordinal, typographic not iconic).
- Start-routes use the same `.contrast .entry` pattern (per screenshot showing "Vanilla WordPress" at the bottom in same style) — consistent dialect.
- Library overlay (per direction) is "16+ blueprint titles set as a column of Bodoni inversions" — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Bone-warm `#E8DEC2`. Per meta this is a tonal lift not a chromatic accent.
- Mono used: `ui-monospace` in `.json-editor` (line 133). Compliant.
- Bodoni Moda + Manrope. Both allowed.
- Rail: 5 Bodoni hairline capitals S · M · B · D · L at 26px opsz 14. Distinct silhouettes by Bodoni letterforms. Strong.
- Borders: `.contrast .entry` has bottom hairline only.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
The iframe-area corner label `hairline · iframe surface` (line 103) — same critique as #016/#017/#018. Designer 4 (#016–#020) is consistently adding this. Should be removed.

## Rail button distinctness (Forest-Botanical test)
Five Bodoni hairline capitals at small size. Bodoni's high-contrast letterforms (very thin horizontals, thick verticals) give S/M/B/D/L distinct silhouettes. Passes.

## Iframe primacy
Yes — pane is 440px (wider than most). The Bodoni titles in the pane are visually loud due to the hairline contrast, but the iframe mock's 96px `h1.post` in Bodoni opsz 96 (line 101) is even louder. Iframe wins.

## Typography
Bodoni Moda variable opsz + Manrope. Both linked. The opsz axis is used (14 for small UI, 24 for medium, 72 for large titles, 96 for iframe headlines) — sophisticated, the design genuinely uses the type-design idiom it claims.

## Three concrete suggested fixes (Round 2)
1. Remove the iframe-area corner label `hairline · iframe surface` (line 103). Pedagogical chrome.
2. The `.contrast .entry .sz` (line 80) right-aligned tabular size suffix is technically a meta — but it's typographically subordinate (11px Manrope vs 36px Bodoni). Acceptable as a "tabular numeral suffix" per meta. BUT confirm it's only ONE figure (size), not a cluster (`6.7 8.2 14.2 MB`). If multiple, it becomes a covert ledger row.
3. The corner widget `.corner-widget` (line 90) shows `ttl` + `sep` + (probably more). Confirm one-line compound only.
