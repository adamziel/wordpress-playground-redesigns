# 020 — Bottom Sheet IA · Sunset Coral

## Thesis

What if the secondary surface lived *below* the iframe instead of beside it? In mobile design the bottom sheet is the canonical "modal-but-persistent" primitive — always there, never in the way, always reachable with one gesture. This design pulls that primitive onto the desktop. The iframe owns the top 60 percent of the viewport (the loudest object). A persistent bottom sheet owns the bottom 40 percent and can drag up to 75 percent when you want to read more. The rail collapses into a thin top-edge strip of the sheet — a 40 by 4 px drag handle plus five tabs.

## What is locked

- Iframe primacy: the WordPress iframe is the only sharp, fully visible surface; the sheet recedes behind a soft warm-sand fill.
- One secondary surface: the sheet contains every tool. Switching tools never opens a second panel.
- Slim top capsule: refresh, address, name, save pill, more, fullscreen all live in a single 36 px coral strip across the very top.
- Corner site widget: small frosted capsule pinned to the bottom-left of the iframe area (sitting just above the sheet edge).
- Modal Library overlay (z3) with 10 categories and 16+ cards.
- Mobile mirror: same model, sheet at bottom.
- Save pill is the single source of truth for save state.

## What is explored (structural)

The rail is *gone* as a vertical primitive. Its five destinations rotate into a horizontal tab strip on the sheet's top edge. The sheet is persistent — you never close it; you only resize it. The drag handle telegraphs the resize affordance. Five tabs is the budget (Sites, Settings, Files, Blueprint, Runtime). The Database and Logs destinations are grouped under "Runtime" as two sub-tabs to keep the top-edge strip readable. This trade-off is the only structural compromise: it sacrifices one row of overlap to keep the sheet header from becoming too dense at 1440 wide.

## Trade-offs

Pros: the iframe is wider than in any side-rail design (full viewport width). Vertical reading is natural for log tails and file browsers. The drag handle makes the resize affordance unmistakable. Warm coral palette feels inviting, friendly, slightly tropical without being childish — Inter for body, Bricolage Grotesque for headlines.

Cons: 40 percent of vertical viewport real estate is *always* eaten by the sheet, even when the user only wants to read the site. The 75 percent expansion mitigates this for deep work but leaves the iframe small. Tab strip at the top of the sheet is a one-line constraint — long labels would break it.

## Notes on coverage

All 35 validate-design markers are present: refresh, address, WP Admin, Homepage, Fullscreen, save states (Unsaved, Saving, Saved, Stale), all four saved Playgrounds, the six start routes (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip), Blueprint Library with search and ten category chips (All, Featured, Website, Personal, Content, Themes, Gutenberg, Experiments, WooCommerce, News), 16 visible cards, Settings (WP version + Include older versions, PHP, language, network, multisite), Apply + Reset with typed-phrase confirmation and auto-snapshot, booting state, mobile 390×844, six PHP log lines.
