# 032 — Concept-album minimal

## Thesis
The WordPress iframe is the album cover. Everything else is a B-side. The chrome collapses to a single black dot, hovering at the lower-right like the play-head on a vinyl. Tap the dot and it blooms into a radial pie of eight petals — Refresh, URL, Save, Sites, Blueprints, Settings, Tools, More. Each petal opens its own minimal overlay (still inside the same single dot's gravitational field), then returns home. The UI is silent until you ask for it, and when it speaks it speaks in concentric circles rather than rectangles. Track titles, liner notes, B-sides — every feature is still on the record, but only one needle drops at a time.

## What I remixed / merged / removed
- **Removed** the persistent top toolbar and both sidebars. The iframe is full-bleed at all times.
- **Merged** the three redundant settings entry points (popover, Site Manager Settings tab, info-notice Save) into one Settings overlay launched from the Settings petal — the same overlay surfaces the "save your work" nudge when the playground is unsaved.
- **Merged** "Saved Playgrounds" launcher and Site Manager into two petals of the same radial: *Sites* (your saved + new-from-source) and *Blueprints* (gallery with all 43, filters, search). The Site Manager's other tabs — Files, Blueprint editor, Database, Logs — collapse into a single *Tools* petal that opens a compact tabbed sheet.
- **Remixed** the address bar into the URL petal — it pops a centered, single-input bar that submits and disappears, like a search-everywhere prompt.
- **Kept** every action: Refresh, Save, WP Admin, Homepage, Export GitHub PR, Download .zip, Import .zip, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, settings (WP/PHP/lang/network/multisite), file browser, blueprint JSON editor, DB browser, Logs with filter. All re-homed inside petals or the sheets they open.

## Trade-offs
A radial menu trades discoverability for serenity. First-time users will see only a dot and the iframe — they have to commit one tap to see what Playground can do. To soften this, the dot hosts a small breathing label on first load ("tap me") and the unsaved state subtly pulses the dot's ring. Power users lose the always-on Save button and have to learn the petal positions (they're stable: 12 o'clock is always Refresh, 3 is Settings, etc.). On mobile the radial inverts into a bottom-anchored half-wheel and the sheets become full-screen — same vocabulary, different geometry. The biggest cost is that anything beyond a "first verb" lives one level deeper than today; the win is that 100% of the viewport is your WordPress site until you decide otherwise.
