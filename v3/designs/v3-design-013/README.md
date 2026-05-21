# V3 Design 013 - Launch to Play

## Thesis
This redesign treats WordPress Playground like a launcher that deliberately gets out of the way. The Library is a rich first-class surface for new Playground routes, saved sessions, featured blueprints, and the full 43-item gallery; once a session is launched, the live WordPress iframe becomes the product. Full-size play mode hides the catalog and manager chrome while preserving the essentials: URL, Save, WP Admin, Homepage, and exit controls remain reachable through the HUD or focus rail.

## Remix / merge / remove choices
I remixed the Epic-style discovery model with the inspector and iPad feedback from prior designs. The Saved Playgrounds launcher, start routes, featured blueprints, full gallery, search, category filters, and Your Playgrounds all live in one Library overlay. Each non-vanilla route reveals the input it needs: WordPress PR, Gutenberg PR or branch, GitHub repo, Blueprint URL, and Import .zip. The Site Manager becomes one collapsible edge panel with the required Settings, Files, Blueprint, Database, and Logs tabs, plus WP Admin, Homepage, Export to GitHub PR, and Download .zip in its header actions. The separate quick-settings popover is removed; the gear opens the same Settings tab, so Apply & Reset has one canonical home.

## Trade-offs
The launcher is intentionally immersive, so it covers the iframe while browsing blueprints. That is the cost of giving the 43-item gallery, route forms, and saved sessions enough room to breathe. The design pays that back by making play mode decisive: the running site can be full-size, and tools return only as edge-docked chrome or a mobile bottom sheet. Power users cannot view Files and Logs simultaneously in this version, but the single manager avoids duplicated controls and keeps the live WordPress site central.

## Self-critique and revision note
After checking against `v3/INSIGHTS.md`, I revised the design around the repeated V3 failures: route tiles expose real forms, Save is an explicit amber state rather than a tiny dot, settings are not duplicated, and Apply & Reset uses a typed `RESET` confirmation before booting. I also kept mobile navigation split across Library, Tools, Files, Logs, and Play so Database and Logs are not hidden in a generic More bucket. The weakest remaining point is that the static iframe is a credible mock rather than a live WordPress instance, but the chrome and flows are represented as a GitHub Pages prototype.
