# 079 — Dual-iframe split

## Thesis
Playground reimagined as a comparison tool. The chrome is built around **two iframes living side by side** — Pane A and Pane B — each a complete WordPress instance with its own URL, WP version, PHP runtime, and blueprint. A center "rail" hosts a **sync lock** that mirrors navigation, scroll, and settings across panes, turning the whole app into a portable A/B harness: WP 6.4 vs 7.0, classic theme vs block theme, PR #5421 vs trunk, with vs without a plugin. Every existing Playground feature is still here — but they are now per-pane, and the single most powerful new behavior (compare) was already implicit in why people use Playground.

## What I remixed, merged, and removed
- The top toolbar is split into **two stacked mini-toolbars** (one per pane) joined by a thin center rail. Each pane carries its own refresh, address bar, name label, Save, Saved-Playgrounds trigger, Site Manager toggle, and settings popover — i.e. every item from §2.1 is duplicated, intentionally, because comparison demands it.
- The **Site Manager** collapses from a full sidebar into a **per-pane bottom sheet** with the same five tabs (Settings, Files, Blueprint, Database, Logs). Pulling its handle expands it; in mobile it becomes a full-screen modal.
- The **Saved Playgrounds launcher** is now a unified overlay invoked from either pane. When a tile is clicked, you choose "Load into A", "Load into B", or "Load into both". This lets the launcher serve both single-pane and comparison flows without growing.
- **Additional actions** (Export to GitHub PR, Download .zip) live in the pane name menu next to the playground title.
- The "Apply Settings & Reset" destructive flow gets a real footprint: a sticky banner in the Settings sheet plus an inline reset confirm. The third settings entry point (info notice) is merged into the Settings sheet's top.
- Logs gain log levels and a filter; the Database tab keeps its early-access notice.

## Trade-offs
Duplicating the toolbar costs horizontal space, which on mobile means we collapse to a stacked single-pane view with a tiny "Swap to B" pill (still functional, just not simultaneous). The sync rail introduces a learning curve — first-timers might not realize the panes are independent — so we lean on the lock icon, the divider color, and a brief tour toast on first open. Comparison is the win, but solo users will see a slightly busier UI than a one-pane competitor; we mitigate this by allowing pane B to be collapsed to a 32px "ghost rail" until needed.
