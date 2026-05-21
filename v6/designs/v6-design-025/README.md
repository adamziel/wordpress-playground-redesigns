# V6 Design 025 - Quiet Rail Warm Product Skin

## Thesis
This design keeps the V5 `018-quiet-rail-to-loud` interaction shape but changes the skin into a warmer professional product shell. The default viewport is a usable WordPress Playground session: the iframe is large, the rail is quiet, and the only persistent destinations are **Sites** and **Site Manager**. Sites owns saved playgrounds, all launch routes, import, featured blueprints, and the full 43-item gallery. Site Manager owns settings, files, blueprint authoring, database, logs, WP Admin, Homepage, and export. The seam between pane and iframe is labeled as a ratio gauge so the smart-resize idea from `023` teaches itself without requiring a manual divider.

## TypeUI Skill Used
I used `professional` from `v6/style-skills/typeui-professional.md`. It is applied beyond colors: Poppins drives the compact product hierarchy, IBM Plex Mono is used for paths, labels, logs, code, and ratio controls, the color system uses the skill's yellow primary with black/white professional contrast plus semantic success/warning/danger states, radii stay crisp at 4px and 8px, spacing follows the 4/8/12/16/24/32 rhythm, and the surface model is structured product chrome with restrained borders, practical elevation, and explicit state language.

## Remix / Merge / Remove
From `018`, I kept the quiet edge rail, one reveal surface, and strong quiet-to-loud transition, but removed the dark monochrome skin. From `023`, I kept the ratio/focus idea and made it visible through a labeled seam with Pane, Site, and Preview detents. From `036`, I kept the Sites widget lesson by making Sites the canonical saved-site and launch door, without copying four corner widgets. From `035`, I borrowed depth only as polish: shadow, tint, and a little blur for overlays, not as a navigation model. I deliberately avoided `030`; there is one compact command bar, not a persistent two-row top bar.

## Trade-Offs
The top toolbar includes Sites, Manager, and Settings shortcuts because the current Playground surface expects those controls, but each shortcut deep-links to the same two canonical destinations instead of opening duplicate surfaces. The quiet default closes the pane so iframe primacy is obvious; the cost is that launch forms and tools require one click to reveal. On mobile, the same logic rotates into a bottom rail and vertical split; the iframe remains present below the active sheet, though long blueprint and log lists still need scrolling.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md` and `v6/STYLE_VARIATION_SYSTEM.md`, I revised toward two primary doors only and made the first viewport quieter: no separate Blueprint rail door, no separate Export rail door, no stacked top bars, and no styled div pretending to be the WordPress site. The design uses an actual `<iframe>` with a credible WordPress `srcdoc`, supports full preview with Esc exit, shows booting/loading, save/resume, route-specific launch inputs, the reset confirmation gate, export/download actions, all Manager tabs, toast feedback, and mobile parity at the same IA level.
