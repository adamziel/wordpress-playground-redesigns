# Critique — 020-tabular-figures — Round 1

## Verdict
Ship with minor revisions. Strong execution as a treasurer's-report ontology — tabular figures aligned in columns is decisively different from #001's ledger table (different layout: no header row repeated, no per-row column heads).

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.ledger .row` is `grid-template-columns: 1fr 36px 36px 64px 60px` — title in Source Serif 4 left, then four right-aligned tabular figures (`6.7 8.2 14.2 MB 22 May`). NO header row above the rows (a key differentiator from #001). Lines 86–91.
- Matches `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent — single grid row per entry, no second text row, no icon.
- Start-routes use the same `.ledger .row` (per screenshot) — consistent dialect.
- Library overlay (per direction) is "a multi-page treasury index with tabular numerals" — consistent.

CROSS-DESIGN SIMILARITY CHECK with #001: Both designs use a serif title + tabular numbers, but #001 has a HEADER ROW (`Name | WP | PHP | Size | Updated`) and uses Spectral italic + Public Sans; #020 has NO header row repeated per-section and uses Source Serif 4 + Source Sans 3. The list shapes are distinct: #001 reads as a financial table, #020 reads as a quiet annual-report column. Acceptable separation.

## Hard violations of v11/v12 taste constraints
- No purple. Drafting-blue `#5C8AA6`.
- Mono used: `ui-monospace` only in `.json-editor` (line 146). Compliant.
- Source Serif 4 + Source Sans 3. Both allowed.
- Rail: 5 Source Serif 4 numeric tags 1·2·3·4·5 at varied weights (300/400/500/600/700) per meta. Distinct silhouettes by stroke weight + numeral shape.
- Borders: `.ledger .row` has bottom hairline only.
- No secondary text under rail buttons. The meta mentions "a small Source Sans abbreviation (St/Mg/Bp/Db/Lg) sits to the right of each numeral as a faint typographic key, not as a button-secondary-label" — this IS a secondary text under buttons. The meta tries to argue it's "a typographic key not a label" but functionally it's a 2-character label next to each numeral. This is a §9 violation in disguise.

## Annotation overlays / explainer chrome
The iframe-area corner label `the annual report · iframe` (line 116) — same critique as #016/#017/#018/#019. Designer 4 has done this on every design. Should be removed.

## Rail button distinctness (Forest-Botanical test)
Five numerals at varied weights. The numerals themselves (1, 2, 3, 4, 5) have distinct silhouettes. The extra abbreviation (`St`, `Mg`, etc.) helps but also adds the §9 violation. Borderline.

## Iframe primacy
Yes — pane is 480px (the widest in the set!). The iframe is squeezed but the mock includes a tabular-figures `<table class="report">` (lines 112–115) which reinforces the design's idiom across the iframe boundary. Iframe wins by area.

## Typography
Source Serif 4 + Source Sans 3 with `tnum`, `lnum` everywhere. Both Google-Fonts-linked. Coherent and meticulously applied.

## Three concrete suggested fixes (Round 2)
1. Remove the iframe-area corner label `the annual report · iframe` (line 116). Pedagogical chrome.
2. The "St/Mg/Bp/Db/Lg" abbreviations next to rail numerals are secondary text under rail buttons (§9 violation). Either drop them entirely or replace the numerals with just `St · Mg · Bp · Db · Lg` (single-mark per dock, not numeral + abbreviation).
3. Pane is 480px — the widest in v12. This pushes the iframe-area `left:554px` (line 96), narrowing iframe horizontal real estate vs other designs. Consider tightening pane to 420px so the iframe stays as the loudest object.
