# 013 — Top Tab Strip · Graphite

## Thesis

This is a **structural** exploration of the v7 #010 "Quiet Rail" interaction model. Every interaction rule from v7 #010 is preserved — iframe-primacy, one secondary pane, slim top capsule, corner site widget, modal Library overlay, mobile mirror, save-pill as the single source of truth for save state. The only structural change is the **rail primitive itself**: the 64px-wide vertical rail at the left has been rotated 90 degrees and now sits as a **horizontal tab strip across the top**, directly under the capsule and above the iframe. The 5 dock icons become 5 horizontal tabs — Sites, Site Manager, Blueprint, Database, Logs. When a tab is activated, the secondary pane drops **down** from the top edge of the iframe as a sliding overlay roughly 40% of viewport tall.

## What is locked vs. explored

**Locked from v7 #010 (interaction logic — unchanged):** Exactly one secondary surface that swaps content per IA destination. A persistent slim top capsule (refresh, address, Playground name, save-pill, More menu with Export to GitHub PR and Download .zip, Fullscreen). A corner site widget at the iframe's bottom-left. A modal Library overlay at z3 with 10 categories and 16+ cards, reachable from the Sites pane and from Cmd-K. A mobile mirror in which the rail rotates to a tab row, the pane becomes a sheet, and the Library stays full-screen. The destructive Apply+Reset always has a visible confirmation mechanic (here: typed-phrase plus diff sheet plus auto-snapshot).

**Explored (structural — reshaped primitive):** The rail is no longer a vertical strip; it is a horizontal strip of 5 evenly-weighted tabs above the iframe. The "pane" no longer slides in from the left edge — it drops down from the top edge of the iframe as an overlay. This moves the user's reading axis from horizontal (left rail → right iframe) to vertical (top tabs → down pane → iframe below). The corner site widget still anchors bottom-left so the iframe's status remains visible no matter which tab is open.

## Visual idiom

Monochrome **graphite**: Anthracite (#1A1D21), 7 measured grays (#2B2D31, #3A3D41, #555861, #7B7D82, #9A9DA3, #BDC0C5, #E5E7EA), a single moss-green accent (#8A9A5B) used only for the active tab underline, the corner-widget dot, and the pane's top edge. Inter for UI text, JetBrains Mono for paths and code. 1px graphite hairlines. 6px corner radii. No gradients beyond a 5% wash. No glass effects — the recede technique is desaturation and weight, not blur.

## Trade-offs

The top-tab-strip primitive makes the IA legible at a glance (all 5 destinations sit above the workspace in one read), but it consumes ~42 vertical pixels of always-on chrome compared to the left rail's 64 horizontal pixels. The dropping-overlay pane covers the top 40% of the iframe rather than the left edge, which obscures a different region — the WP admin bar — but it preserves the iframe's full width, which is the more valuable axis for most editing tasks. Save-pill remains the single source of truth.
