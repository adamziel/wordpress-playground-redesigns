# v3-design-042 - Saved Canvas Inspector

## Thesis

This direction treats a Playground as one selected frame on a calm design-canvas, not as an infinite board full of competing previews. The live WordPress iframe stays central and large, while layers, saved identity, route assets, and tool tabs sit around it as context. The main product bet is that "selected object plus inspector" gives Playground enough power for Files, Blueprint, Database, Logs, and runtime settings without making the first screen feel like a dashboard.

## Remix / Merge / Remove Choices

I remixed the old Figma-like direction by removing canvas sprawl and most always-visible tooling: there is one focused frame, a sparse top bar, a minimap/fit cluster, and a collapsible contextual inspector. The Saved Playgrounds launcher becomes a Library panel with three modes: Start new, Blueprint gallery, and Your Playgrounds. Start routes are not generic tiles; WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, and Import .zip all reveal route-specific inputs, including a real file input for ZIP. The gear does not open a separate duplicate settings popover; it focuses the same Settings tab used by the inspector.

## Trade-offs

The design is calmer because it hides deep tools until the user asks for Library or Tools, but it still has a lot of surface area once both are open. That is the unavoidable cost of preserving the current Playground feature set. The left Layers panel is intentionally supportive rather than mandatory; it disappears at narrower widths. Mobile uses named bottom actions for Site, Start, Tools, Data, and Focus so Database and Logs are not buried in a vague More menu.

## Self-critique / Revision Note

After checking the V3 insights, I revised the concept to make the iframe a real `<iframe>` with `srcdoc`, added the real ZIP upload input, kept WP Admin/Homepage in the live frame bar and focus mode, made Save alter the active identity and Your Playgrounds row, and changed reset into a typed `RESET` confirmation with Save-first and boot-complete states. The remaining risk is that the inspector can become dense for first-time users, so the default screen keeps the site usable before any panel opens.
