# 006 — Vertical Book Spines

## Thesis

A small Mayfair antiquarian bookshop after hours. Wood, gilt, vellum. The room is dark; one picture light pools on the shelf. The interface inherits that decorum: nothing is announced, everything is in residence. The iframe is the room you are reading in. The rail is the doorframe.

## List pattern

**Vertical book spines.** Each saved playground is rendered as a vertical-rl spine on a wooden shelf. The spine's width encodes the site's size on disk (the Coffee Shop runs 14.2 MB at width 42px; Gaming News, the largest, sits widest; an unsaved playground is the narrowest spine in italic gold). Two gilt bands run across the top and bottom of each spine; a thin gilt ribbon at the top marks the active title. There is no icon. There is no second row of metadata. There is no row at all — the shelf is the row, the spines are the items, the width is the data. Start routes inherit the same dialect: the "New Acquisitions" rack below the shelf shows the six start routes as identically-treated spines, narrower because they have not been written yet.

## Focus test

Close your eyes for three seconds. Open them. The widest spine wearing a gilt ribbon is the active site. The italic-gold narrow spine is the unsaved playground. The shelf below it is the gallery of routes you have not yet taken. Nothing else competes — no badge, no toolbar pip, no colored count.

## Trade-offs

The pattern asks the reader to *read vertically*, which is unusual; we accept the reading-cost in exchange for a list shape that cannot be confused with any other v12 design. Long site titles must be truncated by the spine height (240px) rather than ellipsised — we crop at the shelf rather than mid-word, which is honest for a bookshop and unhappy for a 60-character name. Mobile rotates the metaphor down into a bottom sheet that keeps the shelf at 200px tall; this is the one place where the metaphor strains because the sheet is shorter than a real spine wants to be. The gilt accent is used sparingly — only on the saving pill, the active dock's left bar, and the active spine ribbon — so its salience is preserved.
