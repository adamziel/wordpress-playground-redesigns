# Design #045 — WordPress Studio / Local-by-Flywheel-like

## Thesis
Reframe Playground as a native desktop application in the spirit of WordPress Studio and Local by Flywheel. Each saved playground becomes a first-class **environment** in a left rail with a Running / Stopped pill, and the right pane is a tabbed inspector (Overview, Settings, Files, Blueprint, Database, Logs) for whichever environment is selected. The hero action is a fat, unmistakable **Open Site** button — your iframe is the "site preview" inside the Overview tab, not the entire window. The result feels like macOS app chrome (traffic lights, title bar, sidebar source list) so power users get keyboard-driven, multi-environment muscle memory while the browser-app DNA of Playground stays intact.

## What I remixed / merged / removed
- **Merged the three settings entry points** (popover, sidebar tab, info-notice) into a single Settings tab inside the Overview pane, plus an Apply Settings action that is always one-click away on the Overview header. The "destructive" nature of Apply is surfaced as an explicit reset badge instead of a small red banner.
- **Merged Saved Playgrounds + Site Manager** into one left-rail "Environments" list. The launcher is no longer a drawer — "+ New environment" opens a full-screen Create Environment wizard that consolidates Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip, and the full 43-blueprint gallery (search + category filters) as one decision surface.
- **Promoted iframe and address bar into the Overview tab** so the iframe finally lives inside structured chrome rather than dominating it. Refresh, address bar, WP Admin, Homepage, Save, and the Additional actions menu (Export to GitHub PR, Download .zip) sit in the Overview's pane header.
- **Removed the bottom-left toast region** in favor of a dock-style activity strip at the bottom: PHP version, WP version, status indicator, and inline log toasts.
- File browser and Blueprint tab stay separate (they serve different jobs) but share a unified file-tree component visually.

## Trade-offs
The desktop-app metaphor costs vertical real estate — a fixed top bar plus a status dock plus a tab strip means the iframe is smaller than today's edge-to-edge view. On mobile the sidebar collapses into a sheet and the tabbed inspector becomes a bottom-sheet stack, which works but loses the simultaneous "see environments + see site" feel. The Running/Stopped distinction is also slightly fictional: every Playground is technically "running" because it's a WASM instance, so Stopped really means "unmounted from the iframe." I kept the metaphor because it dramatically clarifies what saving and resuming actually do.
