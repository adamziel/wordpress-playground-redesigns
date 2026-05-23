# 015 — Floating Dock · Aurora

A structural exploration of the v7 #010 Quiet Rail model: the rail is **unpinned and floats** at the bottom-center of the iframe area, exactly like a macOS Dock. The pane becomes a translucent floating sheet anchored to the dock, connected by a small specular arrow that points at the active dock icon.

## What's locked (the v7 #010 model)

- **One iframe-primary surface** — the WordPress iframe is the only sharp, edge-to-edge surface. Everything else is translucent glass that recedes.
- **One quiet rail** holding the 5 IA destinations (Sites, Site Manager, Blueprint, Database, Logs) plus identity + settings.
- **One swap-content pane** — only one secondary surface is ever visible.
- **Slim top capsule** with refresh, address, name, save-pill, more, fullscreen.
- **Corner site widget** (bottom-left) showing site name + status.
- **Modal Library overlay** (z3) with 10 categories + search + 16+ cards.
- **Mobile mirror** — dock stays at the bottom, sheet expands upward.

## What's structurally explored

- The rail is **not pinned to the screen edge**. It's a 5-icon capsule floating bottom-center over the iframe — a macOS Dock.
- The pane is a **frosted floating sheet** (~620×420) anchored above the dock, with a subtle pointer connecting to the active dock icon.
- The dock and sheet live above the iframe; the iframe extends edge-to-edge underneath.
- The top capsule is also unpinned — it floats as a small "island" at top-center, not edge-to-edge.

## Visual idiom

iOS-26-flavored **liquid glass aurora**: thick frosted panels with backdrop blur, very low-saturation prismatic gradients (violet → pink → cyan brushed across an iridescent white base), specular highlights, inset white-glow rings, and 18–22px radii. No hard borders — depth comes from ring-shadows and glow.

Type: Inter (UI) + SF Mono / JetBrains Mono (code). Numbers use tabular-nums.

## Trade-offs

- Pro: the iframe gets the entire viewport; chrome feels weightless and theatrical.
- Pro: dock metaphor reads instantly to macOS users.
- Con: floating dock can occlude bottom-of-page content; mitigated by an auto-fade-on-scroll behavior (hinted in the design).
- Con: the connector pointer requires care when the active icon is at the dock edge.

## Panels

A working session, B sites pane, C settings, D files, E blueprint, F database, G logs, H library, I apply+reset confirmation, J booting, K mobile (390×844).
