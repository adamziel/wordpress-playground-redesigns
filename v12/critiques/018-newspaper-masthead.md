# Critique — 018-newspaper-masthead — Round 1

## Verdict
Ship with minor revisions. Strong execution — every entry IS a tiny broadsheet, double-rule above + Playfair title centred + italic dateline = unmistakably its own ontology.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.masthead` (line 80) has a `.double-rule` (2px above + 1px below, line 81), a centred Playfair 24px `.title` (line 82), and a centred italic `.dateline` carrying `Vol. III · No. 22 · WP 6.7 · 14.2 MB · 24 May 2026` (line 83). No icon, no second meta-row — the dateline IS the metadata and is typographically inseparable.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent — the structure is centred title + dateline, not icon-left + 2-row.
- Start-routes use the same `.masthead` element (per screenshot section bar reading "start a new playground") — consistent dialect.
- Library overlay (per direction) is "16+ mini-mastheads in a 4-column grid" — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Ink-rust `#A14538`.
- Mono used: `ui-monospace` only in `.json-editor` (line 142). Compliant.
- Playfair Display + Source Serif 4. Both allowed.
- Rail: 5 Playfair word marks (Sites · Manager · Blueprint · Database · Logs) at varied length — meta says active becomes italic. Distinct silhouettes by word length.
- Borders: masthead has bottom hairline (line 80) PLUS its own double-rule (line 81) above the content. The double-rule is part of the broadsheet idiom, not nested chrome. Borderline pass.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
The iframe-area corner label `the broadsheet · iframe surface` (line 111) — same critique as #016 and #017. Designer 4 seems to share this CAD-corner-label habit. Should be removed.

## Rail button distinctness (Forest-Botanical test)
Five Playfair word marks (italic + length variation). Similar to #001 newsprint-ledger (Spectral words). Should pass.

## Iframe primacy
Yes — pane is 400px. The masthead's `wp-masthead` inside the iframe mock (lines 105–107) has a 60px Playfair title that becomes the loudest object in the iframe — which is appropriate because the iframe content SHOULD win.

## Typography
Playfair Display + Source Serif 4 italic. Both Google-Fonts-linked. Playfair carries display, Source Serif 4 italic does ascription text. Coherent. The pane reads as a tiny newspaper.

## Three concrete suggested fixes (Round 2)
1. Remove the iframe-area corner label `the broadsheet · iframe surface` (line 111) — pedagogical chrome that obscures the iframe. The iframe is self-evidently the iframe.
2. The corner widget `.corner-widget` (line 95–97) has `ttl` (bold) + `sep` + (probably more text). Confirm it's a single horizontal compound, not two stacked rows.
3. The `.masthead` and `.section-bar` share the bottom-border-soft styling AND the masthead has a top double-rule, so the pane reads as a vertical accumulation of horizontal rules. Lovely for the idiom, but at high density this becomes visual noise. Add 24px+ vertical breathing room between mastheads (currently `margin-bottom:14px`, line 80).
