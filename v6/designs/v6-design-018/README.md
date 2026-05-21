# V6 Design 018 - Editorial Resize Desk

## Thesis

Editorial Resize Desk uses the assigned **TypeUI Editorial** style as a product shell, not just a palette. The live WordPress surface is a real `iframe` beside one secondary work desk, and the core interaction is smart resize: click the site, the iframe grows; click the desk, the desk grows; press the full-size control or `F`, and the iframe becomes the whole application with an `Esc` exit. The teaching layer is intentionally visible: the black seam names the active ratio, the gauge fills as focus shifts, and a one-shot note explains the behavior on first view.

## Remix, Merge, Remove

I kept the V5 quiet-rail lesson as an ownership model rather than a visual skin: there is one secondary surface with two canonical destinations, Sites and Site Manager. Sites owns saved playgrounds, all six start routes, import `.zip`, featured blueprints, and the full searchable gallery. Site Manager owns Settings, Files, Blueprint, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. I removed the persistent two-row top bar pattern and avoided separate primary doors for Settings, Export, or Blueprints; settings can deep-link into Site Manager, but it is still the same room. The Corner-widget idea is translated into a compact Sites status button in the masthead rather than four permanent widgets.

## TypeUI Editorial Use

The style skill used is `editorial` from `v6/style-skills/typeui-editorial.md`. It drives the Gelasio serif hierarchy, Ubuntu Mono labels and code surfaces, black ink rules, warm paper background, compact 8px rhythm, 4px/8px radii, square editorial cards, rule-separated sections, and a monochrome-first palette with amber warning and green saved states. The visual model is closer to a dense editorial production desk than a blue SaaS dashboard.

## Trade-offs

The secondary desk is always present, so the iframe is not 100 percent wide at rest. That is deliberate because this design teaches focus by changing ratio rather than opening and closing drawers. The escape hatch is strong: the masthead fullscreen button and `F` hide all chrome. The masthead has eight visible controls at desktop idle: refresh, path, name state, save, Sites, Manager, fullscreen, and settings. On mobile those controls compress to icon-first shapes in one row so the page does not recreate the disliked two-row chrome, while the same smart-resize primitive rotates into a vertical split.

## Feature Coverage

Covered surfaces include refresh, address/path input, playground name, Save, Saved Playgrounds/Sites launcher, Site Manager/tools, settings, Vanilla WordPress, WordPress PR input, Gutenberg PR/branch input, GitHub repo import, Blueprint URL input, `.zip` import dropzone, featured blueprints, full 43-blueprint gallery with search and categories, saved playground resume, Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`, booting, active session, save/resume toasts, destructive Apply & Reset confirmation, cancel, and post-reset ready feedback.

## Self-critique and Revision Note

After checking against `v6/INSIGHTS.md` and `v6/STYLE_VARIATION_SYSTEM.md`, I revised the first pass to add a visible fullscreen button in the masthead. Relying only on the keyboard and pane focus controls would have been too weak for the iframe-primacy requirement. Remaining risk: the editorial grid is dense, especially in the route input area, but that density is intentional for this style and the mobile layout collapses to one-column cards with a visible iframe floor.
