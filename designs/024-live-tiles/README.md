# 024 — Tile dashboard (Windows 8 / live tiles)

## Thesis
WordPress Playground reimagined as a Modern UI / Metro Start screen. Every saved playground, every blueprint, every tool, and every setting is a flat, color-blocked, resizable tile that announces its own live status — Running, Idle, Booting, Error — through flipping content panels. The chrome around the iframe disappears into a Start-screen "All Tiles" grid you snap back to with the Win key; the iframe itself is just one (very large) tile pinned in place. Pinning, resizing, and live-tile content choices replace menus and tabs.

## What I remixed / merged / removed and why
- **Saved Playgrounds launcher + Site Manager + Settings popover** collapse into one Start screen of tiles. Every panel that used to be a drawer or modal is just a tile group on the same surface, demoted to the same visual weight as a blueprint.
- **The address bar / refresh / save** live on a thin Windows-8-style charm bar pinned to the right edge, so the iframe tile can be giant.
- **Tabs inside Site Manager** (Settings, Files, Blueprint, DB, Logs) became live tiles in a "Site Tools" group; each one flips through real telemetry (last error, file count, last log line). You jump straight into the tool by clicking the tile, not through tab navigation.
- **The 43-blueprint gallery** is a horizontal, snap-scrolling tile group with category "semantic zoom" pills as a filter strip; the same tiles act as both browser and launcher.
- **Additional actions menu** is just two tiles ("Export to GitHub PR", "Download .zip") pinned next to Import .zip, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL — the "new playground" sources are equal first-class citizens, not a sub-list.
- Removed the duplicate Settings entry points: one Quick Settings tile flips between WP version / PHP / Language; clicking it expands into the full popover inline.

## Trade-offs
Heavy, opinionated visual language — Metro's color blocks read as toy-ish to people who associate it with Windows 8's commercial failure, and the tile grid trades information density for personality and scannability. Resizable tiles mean state is per-user, so first-touch users see a designer-curated default. The flipping live-tile content is delightful but it can hide info behind a flip cycle — mitigated by hovering pausing the flip and by making the status pill always visible. Mobile collapses the grid to a single column of 2x-wide tiles, which is faithful to Windows Phone but means more vertical scrolling than a tab-bar layout would.
