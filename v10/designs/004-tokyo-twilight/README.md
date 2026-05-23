# 004 — Tokyo Twilight

**Visual idiom:** deep indigo (#0B0E27) base with neon plum (#C792EA) and a cool cyan (#5BC0EB) used as a third-tier highlight. Inter for product type and JetBrains Mono for paths and JSON. Faint radial glow sits behind the rail and the pane — it's a halo, not a glow effect. The mood is a quiet Tokyo street at twilight: navy sky, distant neon, no shouting.

**What's locked (v7 #010 IA):** one persistent left rail, one swap-content pane, a slim top capsule floating over the iframe, a corner site widget in the bottom-left, and a modal library overlay reachable from the Sites pane or via ⌘K. Mobile mirrors the same model with a bottom tab bar, a draggable bottom sheet, and a thin site capsule above the rail. The iframe is the only fully saturated surface in every panel; every chrome element recedes through opacity and blur.

**Pane arrangement (2-dock-segmented):** the rail carries only two dock destinations — Sites and Manage — plus identity, settings, help. The Sites pane has three top segments (Yours / New / Library). The Manage pane has five tabs (Settings / Files / Blueprint / Database / Logs). This keeps the rail extremely calm while still surfacing the full feature inventory inside the one secondary surface.

**Visual discipline:** plum is reserved for active rail items, segmented selection, top-edge accents on the pane, and the save-pill while Saving. Cyan handles inline links, status dots, monospace highlights, and the booting progress sweep. Neutral hairlines are rgba(199,146,234,0.18) with a 0.5px inner top highlight so panels read as etched, not painted. Radii are 12px; the top capsule is a slightly rotated diamond shape so it feels like jewelry sitting on top of the iframe.

**Trade-offs:** plum + cyan on indigo risks gaming-night saturation. We counter it by using only a sliver of plum on active state, keeping accent fills under 14% opacity, and letting the iframe's natural saturation be the loudest thing on screen. Compared to v7 #010 (which leans into mid-purple glow), Tokyo Twilight reads two tiers darker and one tier calmer.
