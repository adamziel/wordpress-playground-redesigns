# 010 — Figma-like

## Thesis
WordPress Playground reimagined as a design tool: an **infinite zoomable canvas** where every playground is a **frame** placed at a fixed coordinate. The active iframe is just the currently-selected frame at 100% zoom; zooming out reveals every playground you've ever saved arranged spatially, plus blueprint "stickers" you can drag onto the canvas to instantiate. The chrome borrows Figma's three-zone shell — **left layers panel**, **center canvas/viewport**, **right inspector** — and a top toolbar with selection / hand / zoom tools. Settings are properties of the selected frame. Files, Blueprint, Database, Logs are tabs inside the right inspector when a frame is selected, the way Figma tucks Design / Prototype / Inspect into one rail.

## What was remixed / merged / removed
- **Saved Playgrounds drawer + Site Manager + Settings popover** all collapse into the right Inspector. The selected frame *is* the site manager target; its properties (WP version, PHP, language, network, multisite) live in a "Properties" subtab next to Files / Blueprint / Database / Logs.
- **Blueprints gallery** lives in the left "Assets" panel — exactly like Figma's components library. Drag a blueprint onto the canvas → it boots as a new frame at the drop coordinate. The 43 blueprints are grouped by category headers, with a search box at the top.
- **"Start new" entries** (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) become a single "+ New Frame" toolbar dropdown — the way Figma has "Frame", "Rectangle", "Text" all under one tool.
- **Address bar + Refresh + Save** stay top-center, but only act on the focused frame.
- **Additional actions** (Export to GitHub PR, Download .zip) live in a kebab inside each frame's title-bar AND in the right inspector header — both surfaces are useful.
- The notification toast becomes a small floating pill above the zoom controls, like Figma's connection/save status.
- **Mobile**: canvas becomes single-frame full-screen; the layers panel becomes a bottom sheet (handle-bar); inspector becomes a right-edge slide-in. Bottom dock has Layers / Canvas / Inspector / + .

## Trade-offs
- Spatial memory is the whole UX bet: returning users navigate by location ("the WooCommerce store is over there") instead of by list. New users may need a moment to realize they can pan/zoom. We mitigate with a small minimap and a "Fit all" button.
- Treating Site Manager tabs as Inspector subtabs is dense — power users love it, glance-users may miss tabs hidden behind a scroll. The compromise is making the active tab a colored pill.
- An infinite canvas implies persistent positions for saved playgrounds, which is a behavior change in storage shape (we'd store x/y per saved site) — but no new *features*: same OPFS sites, just remembered coordinates.
- Loading state has to feel intentional in a canvas world; we render a "frame skeleton" with a progress fill, not a spinner over chrome.
