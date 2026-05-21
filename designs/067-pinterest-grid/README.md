# 067 — Pinterest grid

## Thesis
WordPress Playground is, more than anything, a *catalog of starting points*. This redesign treats every blueprint, every saved playground, and the live iframe itself as a **Pin** on a masonry board. The home screen is a visual gallery — rich preview thumbnails, variable card heights, infinite-feeling scroll — instead of a chrome-heavy app shell. Browsing replaces clicking; you discover by scrolling, and the "current playground" itself is just the topmost, expanded Pin. The chrome (toolbar, settings, site manager) is collapsed into a slim Pinterest-style top bar plus a single floating action ("New Pin") that opens all start-from-scratch sources.

## What I remixed / merged / removed
- **Merged** the launcher's "Start a new Playground" and "Start from a Blueprint" into one feed. New-from-source items (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) are pinned at the top of the board as distinct "source" Pins; the 43 blueprints follow as standard Pins. Categories become Pinterest-style topic chips along the top.
- **Merged** the Site Manager into a single right-hand "Pin detail" drawer that opens when you click the currently-active Pin (the iframe). Its tabs (Settings / Files / Blueprint / Database / Logs) become sub-sections of that drawer — the same JSON, the same file tree, the same log viewer, just framed as "details of this Pin."
- **Merged** the three settings entry points into one settings popover, accessible both from the toolbar and from the active-Pin drawer.
- **Removed** no features. Refresh, address bar, save, saved-playgrounds launcher, additional-actions (Export to GitHub PR, Download .zip), blueprint browser, file browser, blueprint editor, DB browser, logs, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip — all present, all reachable.
- **Reframed** "Your Playgrounds" as a saved board: a horizontal strip of "Boards You Saved" that sits above the main feed.

## Trade-offs
A visual-first IA is gorgeous for blueprint discovery but adds cognitive weight when you just want to *use* the running site — that's why the live iframe gets its own elevated "Now Playing" card and a one-click expand to fullscreen. Mobile sacrifices the masonry's variable widths in favor of a single column of pins; the toolbar collapses behind a hamburger and the Site Manager becomes a bottom sheet. Preview imagery is mocked here as SVG/gradient compositions because the real Playground has no thumbnail pipeline yet — shipping this would require generating canonical screenshots for each blueprint. Finally, dense power users (file browsing, log scrubbing) may find the drawer narrower than the current sidebar; we counter this with an "Expand drawer" affordance.
