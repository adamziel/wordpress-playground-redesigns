# v3-design-043 - Play Library Identity

## Thesis
This direction treats Playground like a launch library only while the user is choosing what to run. The default screen is the running WordPress iframe with a crisp browser bar, loud unsaved identity, Save, launcher, Site Manager, settings, and focus mode. The launcher is a decisive start/resume surface, then it gets out of the way so the live site remains the product.

## Remix, Merge, Remove
I kept the Epic-style discovery strengths from the prior launcher direction: route rows, featured blueprints, the full 43-item gallery, and a Your Playgrounds library. I merged the settings gear and Site Manager Settings into one canonical destructive flow, while the gear simply opens that tab. I removed cinematic storefront excess and avoided adding non-current database tools; Database stays an early-access browser/notice, not Adminer, phpMyAdmin, or a database download center.

## Trade-offs
The launcher is denser than a pure play screen because it must preserve start routes, saved sites, featured blueprints, full gallery search/filter, and import. To keep it from becoming a dashboard, it is hidden by default and each start route reveals one specific input form, including a real `.zip` file input. The Site Manager is still broad, but it stays docked and collapsible, with WP Admin/Homepage and export/download actions in the manager header.

## Self-critique and Revision Note
After checking the V3 insights, I revised toward concrete consequences: the top identity warns about refresh loss, Save changes the active name and Your Playgrounds row, reset requires typing the active name, reset copy names what is wiped, and reset returns through the loading state. The remaining risk is that the launcher plus tools can still feel heavy when both are open; the intended product behavior is one open surface at a time, with focus mode available for uninterrupted WordPress use.
