# Critique — 001-newsprint-ledger — Round 1

## Verdict
Ship as-is with minor revisions. This is one of the round's most coherent answers to §11 — the ledger table reads as a 1962 financial paper, not as a v11 card.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites list does NOT resemble any other v12 I'll see — true tabular HTML `<table>` with `Name / WP / PHP / Size / Updated` columns, hairlines between rows, no per-row icon, header row with small-cap labels. Confirmed in markup at lines 84–96 (`table.ledger`).
- Matches claimed `listPattern` exactly.
- Forbidden icon-left + 2-row-text pattern is absent. There is no per-row icon and no second text line — the meta is in tabular figure columns, not stacked under the title.
- Start-routes use the same `table.ledger` element with a `Route | WP | PHP | Provenance | From` head — same dialect.
- Library overlay (per direction note) is a 4-column index with tabular logic. Should be verified at Round 2 — it is the only place a designer could regress.

## Hard violations of v11/v12 taste constraints
- No purple. Accent is ink-rust `#B14A39` and only on the saving-pill underline and the active row "›" mark. Single accent.
- No mono outside the code editor; everything is Spectral/Public Sans.
- No forbidden fonts.
- Rail has identity mast + 5 docks. Clean.
- Borders: card has border, inner blocks use only bottom rules — passes the "no borders inside borders" test.
- No secondary text under rail buttons. The italic Spectral words are single labels.

## Annotation overlays / explainer chrome
None visible in the desktop screenshot. The "PLATE I — WORKING SESSION" strip above the frame is a between-panel caption, not a floater obscuring chrome.

## Rail button distinctness (Forest-Botanical test)
Italic Spectral words `Sites · Manager · Blueprint · Database · Logs` — distinct silhouettes by length and italic letterforms. Passes, but the silhouettes are subtle; this is the design's most fragile point. A user scanning quickly may struggle to differentiate Sites/Logs.

## Iframe primacy
Yes. Iframe occupies the right two-thirds, pane is 420px, rail 64px. The "Quiet Mountain Coffee" type in the mock dominates the visual weight.

## Typography
Spectral and Public Sans are linked via Google Fonts CSS2 (line 9). Headlines use Spectral 500/italic, body Public Sans 400 with `tnum` enabled. Clean and consistent.

## Three concrete suggested fixes (Round 2)
1. The rail's vertical italic words are visually close in silhouette (Sites/Logs share x-heights). Add a tiny non-italic optical anchor — e.g. a single small numeral `I·II·III·IV·V` to the left of each word, or vary `font-weight` per dock (400/500/400/500/400) to push silhouette differentiation. Selector: `.rail .dock`, line 67.
2. The ledger header row's small-caps tracking is `.18em` (line 86) — at 10px this is bordering on illegible at retina. Drop to `.14em` or bump the font-size to 11px.
3. The `widget` at iframe bottom-left (line 101–104) currently reads `Coffee Shop · edited 14:30 · 14.2 MB` — that meta-line is exactly the v11 two-row anti-pattern in miniature. Either drop the meta or move it into a single hairline-divided horizontal compound (e.g. `Coffee Shop  ·  14.2 MB`).
