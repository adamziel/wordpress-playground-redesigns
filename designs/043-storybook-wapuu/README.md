# Design #043 — Childrens-book / kid-friendly

## Thesis
Playground is a place where you *play*, so this redesign leans all the way into that promise. Everything is round, generous, and crayon-warm: oversized rounded rectangles with thick outlines, a buttery cream background, and chunky friendly type set in Fredoka and Quicksand. Wapuu, the official WordPress mascot, lives in a soft cloud on the right side of the screen and narrates the app like a picture-book guide — pointing at the address bar, congratulating you when you save, and reading the changelog when a blueprint finishes booting. The chrome around the WordPress iframe is rebuilt as a storybook page; the iframe sits inside a thick rounded frame with a gold ribbon at the top labelling the current "chapter" (the playground name).

## What I remixed / merged / removed
- The three separate settings entry points are merged into a single rounded "Magic Wand" popover that the toolbar AND Site Manager both open — when Site Manager is open the popover slides into the sidebar instead of floating, so there is one shared component but two homes.
- The Saved Playgrounds drawer, Blueprint gallery, and the new-playground sources (Vanilla / WP PR / Gutenberg PR / From GitHub / Blueprint URL / Import .zip) are merged into a single full-page "Storybook Shelf" modal with three rows: *Start a new adventure*, *Pick a story* (the 43 blueprints with category bubbles and search), and *Your bookshelf* (saved sites).
- The Site Manager keeps its 5 tabs (Settings, Files, Blueprint, Database, Logs) but they become rounded tabs at the top of a panel that slides in from the left; File Browser and Blueprint share a tree column so they no longer duplicate each other — the active tab just swaps the right pane.
- The "Apply Settings & Reset" destructive action is wrapped in a "This will erase your sandcastle" confirmation card with Wapuu making a worried face, replacing the small red banner.
- Toast notifications are speech bubbles that pop out of Wapuu.
- Nothing is removed from §2 — every feature is reachable; mobile collapses Wapuu into a floating button that opens a bottom sheet.

## Trade-offs
The visual exuberance (illustrated mascot, oversized type, crayon outlines) deliberately costs density: power users will have fewer features visible per square inch than the current UI. Pros doing serious blueprint authoring or PHP debugging might find the cuteness over-bearing; a "Grown-up mode" toggle would belong here but I didn't add it (would have been a new feature). The mascot must stay charming, not chatty — I capped Wapuu's narration to one short sentence per state change and gave the speech bubble a dismiss button so it never blocks input.
