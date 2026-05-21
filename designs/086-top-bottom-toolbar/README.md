# 086 — Top + bottom toolbar (no sidebars)

## Thesis
The iframe is the product. Anything that isn't WordPress should sit *above* or *below* it, never beside it. This design strips both sidebars and replaces them with two narrow rails: a fixed **top rail** that handles identity (playground name, save, URL, refresh, launcher, settings) and a **context bottom rail** — a "tool dock" — whose buttons swap based on the current mode. Switch mode via the five icons in the dock's left segment (Browse, Files, Blueprint, DB, Logs); the rest of the dock fills with mode-specific actions. Heavier surfaces (blueprint gallery, file tree, log stream, settings) open as bottom sheets that rise from the dock, keeping the iframe visible above. The result reads like a console: the work is in the middle; the verbs are at the edges.

## What I remixed / merged / removed
- **Removed both sidebars.** Site Manager's left rail and Saved Playgrounds' right drawer are gone — their contents now live as bottom sheets that animate up from the dock.
- **Merged the three settings entry points** (popover, Settings tab, info-notice button) into one settings sheet, opened from a single gear in the top rail; the inline "save your work" notice now lives as a yellow chip embedded in the top rail next to the playground name.
- **Merged Files + Blueprint** into adjacent dock modes that share a file tree sheet (mode toggle inside the sheet swaps between "wp-content tree" and "blueprint bundle tree").
- **The Additional-actions menu** (Export to GitHub PR / Download .zip) is consolidated into the top rail's overflow as a single Share button, plus duplicated into each mode's bottom-rail overflow.
- **"Saved Playgrounds" launcher** is one bottom sheet with three vertical sections (Start new, Featured blueprints + "view all 43", Your Playgrounds) — the full gallery is a tab within it.
- The **address bar** is centered and large (the most-used input). Refresh, back-to-home, and wp-admin shortcut hug it.

## Trade-offs
Killing the sidebar means more vertical chrome (two bars stacked) — that costs ~96px of iframe height vs. ~360px of width reclaimed, a deliberate trade for widescreen monitors. The context-swapping dock is powerful but learnable: until you grok that the dock changes, the layout can feel like a single confusing toolbar. I countered this with a persistent "you are in: Browse" label and a clear divider between mode-picker and mode-actions. The bottom sheets prevent simultaneous viewing of, say, logs and file tree — a power-user split-pane workflow is impossible here. Mobile collapses the dock into one row of mode icons and hides text labels; the top rail becomes the URL + a single hamburger.
