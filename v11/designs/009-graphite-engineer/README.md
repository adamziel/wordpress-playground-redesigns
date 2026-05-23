# 009 — Graphite Engineer

## Thesis

An engineering report binder in dark mode. The whole chrome reads as one slab of graphite, with a single drafting-red rule used three places only: the active rail numeral, the saving/stale save pill, and the destructive Apply+Reset button outline. The rail trades icons for five stamped numerals — `01 02 03 04 05` — in Space Grotesk tabular figures. Each pane head reprints its numeral as a numbered section title (`03 · Blueprint`), so the rail, the pane, and the corner widget all speak the same shorthand: a number is your address.

## What's locked and what's explored

Locked: the v7 #010 interaction model. One iframe-primary surface, one quiet ~72 px left rail, one swap-content pane, a slim top capsule, a corner site widget, a modal Library overlay, a 390 × 844 mobile mirror.

Explored: the rail's identity. The user wanted five visibly distinct dock buttons that are not icons. Numerals are the most ruthless way to do that — each glyph has a unique silhouette already, and the active state needs nothing more than a 2 px drafting-red bar at its left edge. Space Grotesk numerals are unusually distinctive (the tabular 4 and the descending 5 in particular) which lets the rail register as a real navigation surface without ever drawing a box.

## Focus-test answer

*Why is the iframe the loudest object on the screen?* Because there is no other color on the page — every chrome surface is one of three graphite tones with off-white type, and the only chromatic hit is the 2 px drafting-red rule that marks where you currently are. The iframe is therefore both the only fully saturated rectangle and the largest one.

## Trade-offs

Numerals are less self-describing than icons in the first second of a new user's life — they need a hover tip or a one-time onboarding pass. That cost is paid back permanently afterward: a stranger can point at the rail, the pane, the capsule and the iframe in under three seconds because nothing competes with them. The drafting-red accent is restricted hard (rail bar, save pill, primary button text); if it ever spreads to status dots or hover backgrounds the whole idiom collapses, so the validator's single-accent constraint is genuinely load-bearing here.
