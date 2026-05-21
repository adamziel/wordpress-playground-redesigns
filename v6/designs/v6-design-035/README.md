# V6 Design 035 - Consequence Sites Widget

## Thesis
This design uses the assigned **TypeUI Premium** skill as more than color: Inter plus JetBrains Mono, tight 4/8/12/16/24/32 spacing, 8px component radii, polished titanium/glass surfaces, measured elevation, compact icon buttons, and a precise state language around save/reset/import/export consequences. The default screen is quiet and iframe-first. The compact Sites widget in the top bar is both status and the canonical door into saved Playgrounds, all start routes, ZIP import, featured blueprints, and the full blueprint gallery.

## Remix / Merge / Remove
I kept V5 #036's Sites widget interaction but reduced it to one widget, kept V5 #018's quiet-to-loud reveal without the dark rail skin, kept V5 #023's self-teaching resize gauge/focus mode, and borrowed V5 #035's depth only as surface polish. I removed the disliked V5 #030 persistent two-row structure. Site Manager is the only tools surface: Settings, Files, Blueprint editor, Database, Logs, WP Admin/Homepage, Export to GitHub PR, and Download .zip all live there or deep-link into that same pane.

## Trade-Offs
The top command capsule still has several required controls because the brief explicitly requires refresh, address, name/status, Save, saved launcher, Manager, settings, and full-size preview. I compressed those into one row and let labels collapse on mobile rather than wrapping into a second row. The Sites pane is information-dense when opened, but it is not the default state, and the iframe remains visible behind every non-fullscreen workflow. The reset flow intentionally takes extra space because this variation emphasizes consequences and final states.

## Self-Critique / Revision Note
Critical pass against `v6/INSIGHTS.md`: there is a real iframe, the quiet active-site state is the initial state, Sites owns saved identity/start/import/blueprints, Manager owns tools/settings/export, depth is visual polish only, and fullscreen/focus is explicit. Critical pass against `v6/STYLE_VARIATION_SYSTEM.md`: TypeUI Premium affects typography, palette, radius, surface model, density, icon button shape, elevation, and the save/reset state language. I revised once after reviewing the V6 audits by making the default state quiet, representing ZIP as a dropzone, and finishing the destructive reset through warning, cancel, typed confirm, progress, result, and changed active identity.
