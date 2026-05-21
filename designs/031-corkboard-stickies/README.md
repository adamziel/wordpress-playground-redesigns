# 031 — Trello / sticky notes

## Thesis
The whole Playground is a corkboard. Every saved site, every blueprint, every tool — even the running WordPress iframe — is a literal sticky note pinned to a cork-textured wall. You drag stickies around to organise your sandbox the way you'd arrange a brainstorm. Tapping a sticky "peels it forward" and expands it into the running site, with the other notes still visible behind it like a desk. The chrome around the iframe becomes a workspace metaphor instead of a toolbar metaphor: there is no nav bar, there are pinned things.

## What I remixed / merged / removed
- **Top toolbar → corkboard rail.** Refresh, URL bar, name, Save, Saved Playgrounds, Site Manager toggle, settings popover are now a single "pinned" rail of tape-labelled chips along the top of the cork. The address bar is the wide tape strip in the middle (the "label" on the iframe sticky).
- **Saved Playgrounds drawer + Your Playgrounds + Featured blueprints → one corkboard.** Featured blueprints are pre-pinned coloured stickies; saved playgrounds are darker stickies with screenshots; the six "Start new" entries (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) live as torn-paper note-cards in the left "Stack a sticky" tray.
- **Blueprint gallery (43 cards + categories + search) → a pull-out drawer at the bottom** styled as an index-card binder; the category filters are coloured tabs on the binder. Clicking a card "pulls it onto the board".
- **Site Manager 5-tab sidebar → a fold-out manilla-folder** that slides in from the right. Tabs become coloured paper tabs on the folder (Settings, Files, Blueprint, Database, Logs). The duplicated "Edit settings popover" is gone — the popover trigger now opens the Settings tab inside the folder.
- **Additional actions menu** (Export to GitHub PR, Download .zip) lives on a paperclip-icon dropdown on the iframe sticky itself.
- **Notifications** are post-it flags that stack in the bottom-left corner of the board.

## Trade-offs
The corkboard metaphor is playful and memorable but trades efficiency for charm: stickies take more space than rows, so the launcher needs scrolling at 1440×900 (acceptable — it never tried to fit on screen anyway). Drag-and-drop is essential to the metaphor; we keep it light (single-axis snap, position remembered) so it never blocks keyboard users — every sticky is also a real button. The biggest risk is that "pinning a new playground" might feel like a craft project rather than a tool — we counter that by making the running iframe the largest, brightest sticky so it always pulls focus. The Site Manager folder uses paper-tab styling which is heavy visually; on mobile we collapse it into a flat bottom-sheet so it doesn't feel like a craft fair.
