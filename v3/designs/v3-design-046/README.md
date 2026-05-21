# v3-design-046 - Glass Identity Control Center

## Thesis

This design uses glassmorphism as temporary chrome over the live WordPress site rather than as a dashboard skin. The iframe remains the main surface, while the frosted toolbar, status strip, launch center, and Site Manager float over it with stronger tint, borders, and a solid-controls fallback so the UI remains legible on the default white WordPress page. The assigned "saved identity rigor" is the product center: unsaved state is prominent, Save shows progress and browser-storage consequences, Your Playgrounds contains the active row, and identity actions cover resume, rename, delete, reload risk, and reset risk.

## Remix / Merge / Remove Choices

I merged the current Saved Playgrounds launcher and the save/resume identity problem into one control center with Start, Gallery, and Your Playgrounds sections. Start routes are not generic tiles: WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, Vanilla WordPress, and Import .zip all reveal route-specific inputs, including a real file input for ZIP. I kept the Site Manager as a separate tools surface with Settings, Files, Blueprint, Database, and Logs tabs, plus WP Admin, Homepage, Export to GitHub PR, and Download .zip in its header/actions menu. The gear does not create a second reset implementation; it opens the same Settings tab and reset modal.

## Trade-offs

Glass is visually strong but fragile on arbitrary WordPress themes, so the panels use more opacity than decorative glass and include a solid-mode treatment in CSS. The layout is intentionally serial: users open either Launch/Identity or Tools, not both, which reduces the first-open button wall but limits simultaneous catalog-plus-file editing. On mobile the same IA becomes named bottom actions for Site, Start, Tools, Data, and Save so Database and Logs do not disappear into a vague More bucket.

## Self-Critique / Revision Note

After reviewing `v3/INSIGHTS.md` and the V3 audits, I revised the direction around the known failure modes: the site is a real `<iframe>` with `srcdoc`, ZIP import is an actual upload input, route starts expose concrete forms, focus mode preserves Save, path submit, refresh, WP Admin, Homepage, Tools, and Exit, and Apply & Reset uses a typed `RESET` confirmation with Cancel and Save-first. The remaining weakness is opened-state density: preserving all current Playground surfaces still creates many controls once the manager is open, so a production version would need careful keyboard focus and progressive disclosure tuning.
