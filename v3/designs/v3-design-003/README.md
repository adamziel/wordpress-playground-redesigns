# V3 Design 003 - Play Deck

## Thesis
Play Deck treats WordPress Playground like a calm launcher that gets out of the way the moment a site is running. The first viewport is intentionally quiet: a full-size WordPress preview, the current path, a louder unsaved state, Save, one Launch entry, and one Tools entry. The Epic-style influence shows up in the launch library, saved Playground dock, decisive route cards, and full blueprint gallery, but the running WordPress site remains the center of gravity.

## Remix, Merge, Remove
The Saved Playgrounds drawer, new Playground starts, featured blueprints, full 43-item gallery, and import flow are merged into one Launch sheet. Unlike several prior launcher designs, every route tile reveals its required input in place: WordPress PR, Gutenberg PR or branch, GitHub repo, Blueprint URL, and Import .zip all show a concrete form before launch. The Site Manager becomes a collapsible Tools panel with the five required tabs: Settings, Files, Blueprint, Database, and Logs. WP Admin, Homepage, Export to GitHub PR, and Download .zip remain available from the tools header or overflow menu. Quick settings no longer duplicate a separate popover; the gear focuses the Settings tab.

## Trade-offs
The launcher is less cinematic than a full Epic storefront because the assigned variation calls for first-touch calm, not a marketing-heavy catalog. The Tools panel uses familiar tabs instead of a more experimental inspector so Settings, Files, Blueprint, Database, and Logs stay legible, but only one tool tab is visible at a time. On mobile, Launch and Tools become bottom-sheet style panels; this preserves all routes and inputs, though the saved Playground dock collapses into the bottom navigation.

## Self-critique and Revision Note
The first pass risk was overexposing the library and making the launch surface feel like the product instead of the running site. I revised toward a default play mode with launcher/tools hidden, route inputs only after selection, and a full-size focus control that dismisses panels. Against the V3 insights, the design now preserves the Epic discovery strength, avoids burying everything under More, includes destructive reset confirmation, promotes unsaved state, and keeps the iframe credible at both desktop and mobile widths.
