# V3 Design 008 - Calm iPad Split View

## Thesis

This direction treats WordPress Playground as an iPad multitasking workspace, but starts calmer than the earlier iPad concept. The first viewport is the running WordPress site, a path field, the unsaved state, Save, and one clear Launchpad entry. Tools are present as a collapsed Split View rail, not a permanent wall of controls. When opened, the secondary pane swaps between Settings, Files, Blueprint, Database, and Logs through an explicit pull-tab affordance; the iframe remains the primary app and can enter a full-size focus mode.

## Remix / Merge / Remove Choices

The Saved Playgrounds launcher becomes a Slide Over sheet with three sections: route-specific new Playground forms, featured blueprints plus the full 43-card gallery, and Your Playgrounds. WordPress PR, Gutenberg PR, GitHub, Blueprint URL, and Import .zip all show their required input controls instead of acting like generic tiles. Site Manager tabs become the swappable Split View pane, with WP Admin, Homepage, Export to GitHub PR, and Download .zip in the pane header/actions menu. Quick settings still exist from the top gear because the current product has that entry point, but they point to the same reset-confirmation flow as the Settings pane rather than creating a separate destructive path.

## Trade-offs

The design depends on users understanding iPad patterns such as Slide Over, a dock, and a pull-tab pane switcher, so the pane switcher is labeled in plain language instead of relying on a bare three-dot control. Collapsing the Site Manager by default helps first-touch calm, but power users must open the pane before editing files or reading logs. The saved-site dock is intentionally compact; it works for a handful of local playgrounds and would need overflow behavior in a production implementation. On mobile, Split View degrades to a bottom sheet so Settings, Database, Logs, and destructive actions remain reachable without dumping everything into a single "More" bucket.

## Self-Critique And Revision Note

After checking the design against `v3/INSIGHTS.md`, I revised the first pass to make the route inputs visible in the launcher, added a typed destructive confirmation for Apply Settings & Reset, promoted a true full-size Focus site mode, and kept the Site Manager collapsed on first load. The remaining weakness is that the top gear and Settings pane still duplicate the settings surface visually, but the destructive operation is unified behind one confirmation and the pane remains the canonical detailed view.
