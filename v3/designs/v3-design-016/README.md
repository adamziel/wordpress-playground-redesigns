# V3 Design 016 - Glass Control Center

## Thesis
This redesign treats the running WordPress site as the primary surface and lets Playground controls float above it as a glass control center. The default screen is an active Playground: a crisp top strip for refresh, URL, unsaved state, save, launcher, Site Manager, settings, and Focus Site, plus a collapsible frosted inspector for settings/files/blueprint/database/logs. Focus Site mode is the key move: it removes the panel chrome while preserving Save, URL, WP Admin, Homepage, and Exit Focus controls.

## Remix, Merge, Remove
I remixed the prior glass direction by adding explicit contrast safeguards: a Contrast button switches the glass to a solid treatment for white WordPress pages. I merged the Saved Playgrounds drawer, start routes, featured blueprints, full gallery filters/search, and Your Playgrounds into one bottom launcher sheet. Unlike several earlier launchers, every route tile exposes its actual input: PR number or URL, Gutenberg PR or branch, GitHub repo, blueprint URL, or ZIP chooser. The Site Manager stays as one collapsible edge inspector with the required tabs and header actions rather than scattering settings into several competing pages.

## Trade-offs
Glass UI can become visually fragile when the iframe is mostly white, so the panels use stronger tint, borders, shadows, and a solid-mode switch. The static prototype stages a booting card and a saved toast at the same time as the active session to demonstrate required states in one file; a production app would show those only when triggered. The right inspector consumes some horizontal space on desktop, but Focus Site and the mobile bottom-sheet layout restore the full-size site when interacting with WordPress is the main task.

## Self-critique and Revision Note
After checking the V3 insights, I revised the concept to make destructive reset a real confirm block with Cancel, Save first, and Apply & Reset, to keep route-specific inputs visible in the launcher, and to add solid-mode contrast rather than relying on blur alone. The main remaining risk is density: this version deliberately shows many surfaces for review coverage, so the shippable product would likely open with the inspector collapsed after a user has learned where it lives.
