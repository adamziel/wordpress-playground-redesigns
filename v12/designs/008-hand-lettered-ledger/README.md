# 008 — Hand-Lettered Ledger

## Thesis

A private journal entry at 11pm, written quickly with a fountain pen, but kept disciplined by 1px ruled lines underneath. The Playground adopts the shape of someone's own day-book: each saved playground is a single Caveat Brush hand-lettered line on a ruled vellum stripe. The page is honest about what a person actually does — they write the name down. The metadata, if they need it, is in smaller italic and they have to lean closer to read it.

## List pattern

**Hand-lettered single lines on ruled stripes.** Each saved playground is one Caveat Brush line at 28px, sitting on a 1px hairline rule. No icon, no second row, no visible metadata. On hover (or for the active entry), a small italic Source Serif phrase appears in the right margin — "14.2 MB · WP 6.7 / PHP 8.2 · opened 14:30" — set quietly enough that it does not become a second row. The active entry wears a red dot in the left margin and a hand-drawn underline-swoop in india-ink red. The unsaved playground is set in italic amber-cream. Start routes use the same handwriting on the same ruled stripes, separated from saved sites by a single hand-drawn red rule. The library overlay puts blueprint titles in the same handwriting in a 2-column index.

## Focus test

Look at the pane for three seconds. The line with a red dot in the margin and a red underline-swoop is the page you are on. The amber-italic line is the unsaved playground. Everything else is just your handwriting on ruled paper — visually equal, calm, low-noise. If you want detail, you have to hover or lean in.

## Trade-offs

Handwriting is harder to read at small sizes than a tabular row. We accept this in exchange for an unmistakable list shape and a softer affective tone (the Playground feels like your own notes rather than a console). The hover-only metadata is unfriendly to keyboard scanning — accessibility production would require a focused-state reveal or an "always-on" toggle. Caveat Brush has limited weight and language coverage, so non-Latin titles will fall back to Source Serif italic, which is a small consistency cost. The hand-drawn rail flourishes are inline SVG paths, each a distinct gesture, which keeps the rail's "five silhouettes" rule satisfied without resorting to letters or icons.
