# #008 — Vertical reels feed

## Thesis

WordPress Playground reimagined as a vertical TikTok-style reel of three full-screen pages: your live site, a feed of blueprints, and your saved playgrounds. You move between them with a single vertical swipe (or ⌘↑/↓ on desktop). The iframe is not "the centre of a layout" — it *is* page 1 of the reel, full-bleed and uncontested. Discovery of the 43 blueprints is not a drawer or a sub-screen; it is page 2, where one blueprint fills the whole viewport and the next one peeks below. Your saved sites are not a list inside a launcher; they are page 3, each rendered as a hero. Every other UI — Settings, Files, Blueprint editor, Database, Logs — collapses into one frosted sheet that you raise on demand from a single "More" handle. The chrome around the iframe is exactly four pieces at idle: a 44 px top bar (URL · name · refresh · save), a 3-pip reel rail on the right, a fullscreen toggle, and the More handle. Everything else is one swipe or one tap away.

## What was merged, removed, or recast

The triple-entry-point sin (popover + Site-Manager-Settings tab + info notice → all the same thing) is destroyed: settings exist only as the Settings tab of the single sheet, and the unsaved-state warning is folded into the gold "unsaved" badge that lives next to the playground name in the top bar. The Site Manager *as a sidebar* is gone; its five tabs survive inside the one frosted sheet. The "Saved Playgrounds" drawer is gone; saved sites are reel 3 with a bottom dock for fast switching, and "Start a new playground" rises as a card-grid sheet from the same reel — six sources in one place. The featured-blueprints-vs-all-43-blueprints split is gone: it's all one reel, with a G-key flatten to a 4-column grid (same data, alternative shape) so categorical filtering still works. WP Admin / Homepage buttons survived inside the sheet header. Export to GitHub PR and Download .zip both survive in the "additional actions" menu of the sheet and inline on each saved site card (so power users don't have to enter the sheet for a one-click export of an already-resumed site).

## Trade-offs

The vertical-reel metaphor is decisive: it works gorgeously on mobile (where it was born) and elegantly on desktop, but it forces "one thing at a time" — you cannot have the blueprint gallery and your saved sites both visible at once. We mitigate this with the keyboard (G flattens reel 2 to a grid) and with the bottom dock on reel 3, but a desktop power user who wants two panes side-by-side will be frustrated. We also gamble on swipe being learnable for users who don't know TikTok: the reel pips on the right are a strong scrubber affordance, and ⌘↑/↓ + the visible "More" handle should bail people out. The frosted sheet trades depth-of-information for restraint: with five tabs in one sheet, you can't have, say, Files and Logs both visible simultaneously — the user must switch tabs. We believe that's the right trade for the brief ("one secondary surface"). Finally, the Apply+Reset destructive flow is upgraded to a typed-confirm ("reset") rather than a small red banner; this *does* add friction, but the brief required friction here and the alternative (losing a whole playground to a misclick) is worse.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?            Score: 5/5  (7 visible at idle — counted in §07 of the canvas)
[x] iframe primary + fullscreen toggle?      Score: 5/5  (Page 1 = full-bleed iframe; ⇧F toggle; Esc to exit)
[x] One door per feature (no duplicates)?    Score: 4/5  (Settings/Files/Blueprint/DB/Logs all live in the same sheet; launcher = reel 3 sheet only; blueprints = reel 2 only)
[x] One secondary surface (not many)?        Score: 5/5  (One frosted sheet swaps content via tabs — no second drawer anywhere)
[x] Direction expressed strongly?            Score: 5/5  (Three reels, vertical swipe, pip rail — direction is unmistakable)
[x] Mobile = wider-mobile desktop?           Score: 5/5  (Same metaphor, same chrome positions, same gestures at both widths)
[x] Glass / ambient critique honest?         Score: 4/5  (Frosted glass on top bar, sheet, dock — each has a purpose: let iframe colour bleed through. Not gratuitous.)
```

Notable trade-off acknowledged in scoring: row 3 (one door) is 4/5 because the "start new" sheet on reel 3 and the "discover blueprints" reel 2 are technically two ways to begin a session — but they are *different* features (custom source vs. curated blueprint) with distinct canonical homes, so this is honest restraint rather than duplication.
