# V3 Design 036 - Glass Control Center Reset Rig

## Thesis
This design uses glass as a chrome-reduction system, not just a surface style. The live WordPress iframe is the backdrop and the product; refresh, path entry, save state, launcher, tools, settings, and focus mode sit in a compact frosted top bar. The control center opens only when needed, with enough tint, borders, shadows, and a solid-controls toggle to survive the default white WordPress page.

## Remix, Merge, Remove
I merged the Saved Playgrounds launcher, route starts, featured blueprints, full gallery, and saved sites into one Launch Center. I kept the Site Manager as a Tools view with the required Settings, Files, Blueprint, Database, and Logs tabs plus WP Admin, Homepage, Export to GitHub PR, and Download .zip in the manager header. The gear no longer creates a separate destructive settings path; it routes to the same canonical Settings flow, while the toolbar and focus rail preserve the current top-bar features.

## Trade-offs
Glass is fragile on arbitrary WordPress themes, especially white pages, so the panels use stronger backing color than pure glass and include a Solid controls mode. The control center is intentionally serial: only Launcher, Tools, Settings, or Activity is open at once, which keeps the first viewport calm but limits simultaneous Files plus Logs work. Mobile turns the same surfaces into a bottom sheet with named homes for Start, Files, Data, and Settings rather than hiding Database and Logs in a generic More bucket.

## Self-Critique And Revision Note
After checking `v3/INSIGHTS.md` and the V3 audits, I revised the concept around the known failure modes: the WordPress surface is a real `<iframe>`, ZIP import is a real file input, PR/GitHub/Blueprint starts expose route-specific fields, Focus mode keeps Save, URL, WP Admin, Homepage, Refresh, and Exit available, and Apply & Reset shows warning, cancel, save-first, confirm, progress, result, and a changed active runtime state. I also did a final responsive revision after screenshot review so the 390px view opens on the live site, keeps Start/Save/Tools visible, and wraps the iframe content instead of clipping it. The remaining weakness is that a single control center can still feel dense when opened, so production would need careful disclosure and keyboard focus management.
