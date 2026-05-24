# 001 — Newsprint Ledger

## Thesis

A serious financial newspaper from 1962, dark-mode edition. Editorial discipline replaces software ornament. Tabular figures everywhere, hairline rules, italic Spectral headlines, and a single ink-rust accent reserved for the save pill and the active dock's left bar. Nothing else gets colour. Nothing else gets weight. The page reads like the standing pages of *The Economist* if it had been set in oxidised silver on graphite.

## List pattern

**Ledger table with column headers.** The saved-sites pane and the start-routes pane are both rendered as actual `<table>` elements with `thead` columns — `Name | WP | PHP | Size | Updated` for saved sites; `Route | WP | PHP | Provenance | From` for start routes. Hairline `1px solid` rules between rows. No per-row icon. No secondary text line. The active row is marked with a thin ink-rust caret in the leading column, not a colour fill. The figures use `font-feature-settings: 'tnum'` so each column aligns numerically without recourse to a monospaced typeface. This is the v12 defining test: the row is *information*, not a card.

## Focus-test answer

> Where does the eye land?

On the italic Spectral headline of the currently-active site row, because it is the only thing on the page that is both italic and the lightest shade of ink. The accent dot in the leading column is small enough to be a punctuation mark, not a chip. The iframe is the next-loudest object; the rail is silent.

## Trade-offs

- **A table demands rigour.** If you add a sixth column the design dies. The list pattern is non-elastic and the designer should hold the line — meta is one row, not five chips.
- **Tabular figures only work for short labels.** Site names longer than ~24 characters truncate; we accept this because the typographic rhythm is more important than full-bleed names.
- **No hover state on rows.** A faint background tint exists on hover, but in a dark serious-paper design over-eager hover states feel out of register with the metaphor. The page is meant to be read, not poked.
- **The italic Spectral headlines are the design's brand mark.** If you swap to a sans the whole thing collapses into "another dark dashboard." Honour the typeface choice.
- **No icons in the rail.** Words. This is risky because the user has to read each dock, but at five items in a 64px column it is legible and the silhouette difference (Sites · Manager · Blueprint · Database · Logs) makes each visually distinct without iconography.
