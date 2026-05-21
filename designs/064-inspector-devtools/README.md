# 064 — Inspector-first (devtools)

## Thesis
Treat WordPress Playground the way Chrome treats a webpage: the rendered iframe is the document under inspection, and everything else is **devtools docked underneath**. The toolbar collapses into a slim browser-style address rail; the Site Manager becomes a familiar tabbed inspector at the bottom (Logs / Blueprint / Files / DB / Console / Network) with a left-side **Resources tree** like Sources. The launcher is a Cmd+P "Run command" overlay. The whole experience targets the user who already knows DevTools muscle memory — paste a URL, hit a tab, dive into a file.

## What I remixed / merged / removed
- **Merged** the Site Manager sidebar into a bottom-docked inspector (left-hand resource tree + right-hand main pane), eliminating the separate left sidebar entirely. The blueprint editor, file browser, DB browser, and logs all become inspector tabs, which is how DevTools already organises analogous concerns.
- **Merged** the "Saved Playgrounds" launcher and "New Playground" sources into a single **Cmd+K command palette** (`>` for actions, blank for blueprints, `pr:` for PR builds, `gh:` for GitHub repos, `url:` for blueprint URLs). The full 43-blueprint gallery still opens as a dedicated overlay accessible from the palette and the toolbar.
- **Merged** the three settings entry points (popover, sidebar tab, info notice) into ONE place — an inspector tab called **Settings** — surfaced from the toolbar gear and the toast "save now" prompt alike.
- **Removed** the visual ambiguity of "Unsaved Playground" by promoting it to a yellow address-bar pill (like an HTTPS warning in Chrome) with a single-click save.
- **Added** a Console tab that mirrors PHP `error_log()` output in a structured, filter-by-level way — the existing Logs view, but with the Network/Console DX users already understand.

## Trade-offs
DevTools metaphor is a power-user inheritance: developers will feel at home instantly, but a first-time user landing on `playground.wordpress.net` may find the bottom panel intimidating, so it ships **collapsed by default** with a single "Inspect" toggle. The iframe gets less vertical real estate when the dock is open (this matches DevTools' trade-off and is fixed by collapse/right-dock/undock controls in the top-right of the panel). Cramming the launcher into a command palette is a bet on keyboard-first users — the visual blueprint gallery exists as a fallback overlay so the casual click-through path is preserved.
