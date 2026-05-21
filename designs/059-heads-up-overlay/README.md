# 059 — Fullscreen iframe + heads-up overlay

## Thesis
The WordPress iframe takes the whole viewport, edge-to-edge — the way a video does in a player. All chrome is collapsed into a translucent "heads-up" overlay that slides in from the edge you reach for: the top edge reveals the address bar and main controls; the bottom edge reveals an action dock with refresh, save, settings, additional actions, and a state scrubber; the left edge swipes in the launcher (new playgrounds + blueprint gallery + your saved sites); the right edge swipes in the site manager (settings, files, blueprint, database, logs). Idle for two seconds and everything fades. The site is the star; the tools are summoned, not displayed.

## What I remixed / merged / removed and why
- **Three settings entry points became one popover** on the top bar plus the same settings as a panel inside the right-edge Site Manager — but the inline "info notice + Save site locally" lives as a *single* persistent translucent pill on the bottom-center of the iframe (only when unsaved), so you cannot miss it without a wall of chrome.
- **Saved Playgrounds drawer and Site Manager** are merged into the same edge-swipe pattern: launcher = left edge, manager = right edge. Symmetric and discoverable.
- **The "additional actions" menu (Export PR, Download .zip)** lives on the bottom dock next to Save — it stays one click away because exporting is a punctuation moment for a session.
- **Blueprint gallery, "From GitHub", "WordPress PR", "Gutenberg PR", "Blueprint URL", "Import .zip"** are all sub-sections of the same left-edge launcher. Categories + search live in the gallery sub-screen.
- **Removed**: the standalone "Saved Playgrounds dropdown trigger" as a separate button. It's the same gesture as opening the launcher (left edge or top-left handle). One mental model, one motion.

## Trade-offs
The pattern rewards mouse users and people who learn the gesture. First-time visitors get a permanent dim "hint glow" on the left edge plus a brief tutorial of the four edges on first boot. Touch and keyboard fallbacks are explicit: a tiny pill at the top-left and bottom-center stays visible when no pointer is hovering, and keyboard shortcuts (cmd/ctrl + arrow keys) trigger the same edges. Cost: less information density than a permanent dashboard, which is exactly the point.
