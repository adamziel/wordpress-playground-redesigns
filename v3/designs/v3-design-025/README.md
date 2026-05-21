# v3-design-025 - Route Settings Workspace

## Thesis

This redesign keeps the Windows 11 Settings strengths - whitespace, breadcrumbs, legible cards, calm categories, and restrained Mica surfaces - but refuses to make WordPress feel like a small preview inside a settings app. The live iframe stays in the center as the primary workspace, with WP Admin, Homepage, Save, address navigation, and Focus site always close at hand. The right workflow panel is for the current job: starting a route, resuming a saved Playground, editing settings, inspecting files, editing a blueprint, browsing the database, or reading logs.

## Remix, Merge, Remove

I remixed the prior Windows 11 Settings idea by turning the launcher into a route builder instead of a generic tile grid. WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import all show concrete input states before launch. The Site Manager is merged into one workflow panel with the existing five tabs, while the gear and settings entry both route into the same Settings pane and the same typed `RESET` confirmation. The full 43-blueprint gallery remains a dedicated overlay with search and category filters, because it needs room. I did not add accounts, deployment, marketplaces, AI, Adminer, phpMyAdmin, or new database powers.

## Trade-Offs

The desktop layout deliberately spends pixels on a left category rail and a right workflow panel, so the live site is not as wide as pure focus mode. That is why Focus site is a first-class route: it removes both panels while preserving Save, path navigation, WP Admin, Homepage, and Exit focus. On mobile the rail disappears and the workflow panel becomes a bottom sheet, which means some tool switching is serial rather than side-by-side. The benefit is that route inputs, Settings, Files, Blueprint, Database, and Logs keep named homes instead of collapsing into a vague More menu.

## Self-Critique and Revision Note

After reviewing the V3 insights, I revised the concept away from a broad settings dashboard and toward an active session with a workflow panel. The risky parts are button count in the Start pane and the static nature of the mock iframe. I reduced first-glance controls by making the rail categorical, keeping the active site dominant, and using explicit focus mode. ZIP import uses an actual file input, Apply & Reset has cancel/save/typed-confirm states, and unsaved storage consequences appear in the toolbar, rail notice, Settings pane, and saved-list row.
