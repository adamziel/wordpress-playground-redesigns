# 003 — Punchcard

## Thesis

A 1965 IBM machine room — graphite, gridded, mechanical. Cutive serif (typewriter-feeling, but proportional, not monospaced) paired with DM Sans for body. Single signal-yellow accent for the active card edge, the save pill, and the lit perforations. Every saved site is a literal punchcard: a title at the top, then *holes*. Counting the holes is reading the data.

## List pattern

**Punchcard rows.** Each saved site renders as a card-row with a `<div class="title">` followed by three perforation axes — WP, PHP, SIZE — each drawn as ten small circular `<span>` dots. The dots that are "punched" (lit) encode the value; the right-most lit dot is the cursor (`cur` class). A tiny end-of-row scale label (`6.7 of 10` · `14.2 MB`) is the only piece of inline text — and it sits *inside* the dot row, not as a secondary meta line. There is no per-row icon. There is no second text row of meta. The dots ARE the meta. The Library overlay extends the punch metaphor: each blueprint card has a six-dot strip showing relative popularity.

## Focus-test answer

> Where does the eye land?

On the actively-edited card, because the left-edge accent strip is the only signal-yellow stroke on the entire page and the title shifts to a brighter ink. The dots themselves are visually quiet — they invite *reading*, not glancing. The iframe is the loudest object after the active card.

## Trade-offs

- **Reading dots is slower than reading numbers.** Five dots filled of ten is "5/10"; you have to count. We add a tiny inline scale label as a courtesy, but the design's whole point is that the spatial pattern lets you compare cards across the stack at a glance — Coffee Shop has more storage filled than Vueo, you can see it instantly. Numeric reading is sacrificed for visual comparison.
- **The dot axis has a fixed maximum of 10.** Site size goes past that scale; we encode "≥10" by filling the whole strip. Honest, but it caps differentiation between very large sites.
- **Perforation patterns on the rail need to stay visually distinct.** The five patterns (1, 2, 3, 4-with-gap, 4) read as different silhouettes; if someone "tidies" them they'll all become squares. Hold the line.
- **Cutive is a typewriter-feeling proportional serif.** It will be misread as monospace by some users — that is the intended optical effect, but it means we should NEVER apply monospace fonts to any in-pane prose, lest the chrome go all-typewriter.
- **The "stack of cards" library view has a lot of empty corners.** Each card is roughly square; on dense category browses some users will want a denser grid. We trade density for metaphor coherence.
