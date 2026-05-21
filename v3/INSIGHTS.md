# V3 Direction Insights

This round starts from user feedback on the strongest prior concepts. The goal is not to clone those designs, but to extract what made them useful and correct their weak spots.

## Positive Signals To Carry Forward

### Mobile-first
- Good: one-thumb hierarchy, bottom navigation, sheets, and fewer always-visible controls.
- Good: mobile as the primary constraint prevents desktop-only sidebars from becoming the default mental model.
- Improve: do not bury Settings, Database, Logs, and destructive actions in an undifferentiated "More" bucket. Show paste/input states for PR, GitHub, and Blueprint URL starts. Make unsaved state louder than a small dot.

### Figma-like, But Not Its Execution
- Good: canvas, selected object, layers/assets, and right inspector are a useful mental model for managing multiple Playgrounds and blueprints.
- Improve: the prior execution exposed too many buttons immediately. V3 should use a focused selection model: one primary frame, sparse toolbar, contextual inspector, and progressive disclosure. Minimap, fit-to-site, and destructive confirmation matter more than decorative canvas controls.

### Game Launcher, Especially Epic-style
- Good: strong discovery model for blueprints, saved Playgrounds as a library, a big decisive launch/action area, and a transition into a full "playing" site.
- Improve: launch tiles must reveal route-specific inputs for WordPress PR, Gutenberg PR, GitHub import, Blueprint URL, and ZIP import. The full-size Playground interaction mode needs to hide catalog chrome without losing Save, URL, WP Admin/Homepage, and exit controls.

### macOS Settings.app
- Good: searchable category list, native-feeling rows, familiar configuration structure, and clear grouping.
- Improve: Ventura-style density can become too busy. V3 should reduce category count, use one settings home, default to Live Preview, and provide a clear way to make the Playground full-size when interacting with WordPress.

### Windows 11 Settings
- Good: calm whitespace, breadcrumbs, cards, legible categories, and low cognitive load.
- Improve: solve the full-size Playground problem. The live site should be available as a first-class, focusable page or full-screen mode, not a cramped card inside settings.

### Console + Visual Hybrid
- Good: command/log history can teach advanced users and make consequences visible.
- Improve: do not make a terminal dominate the product. Use command history or event trails as a supporting layer, with visual controls remaining primary.

### Glassmorphism
- Good: frosted layers can make the live WordPress site feel like the background/workspace rather than something trapped in a box.
- Improve: contrast must survive white WordPress pages. Include stronger tint, borders/shadows, and a visible reduced-transparency or solid mode treatment when needed.

### Tabs-only
- Good: one navigation primitive is very understandable. Tabs reduce sidebar/drawer/popup confusion.
- Improve: handle tab overflow, show active consequences per tab, and preserve or restore a full-size site mode when editing the WordPress iframe.

### iPad Multitasking
- Good: split view, Slide Over, dock, and resizable panes are strong for balancing full-size site interaction with tools.
- Improve: make the pane-switch affordance explicit. On small screens, degrade to bottom sheets without losing route inputs, save state, or destructive confirmations.

### Inspector-first / DevTools
- Good: top browser bar interactions, yellow unsaved warning in the address area, dockable inspector, and familiar tabbed tools for Files/Blueprint/DB/Logs.
- Improve: keep the inspector collapsed by default for non-developers. Add Chrome-style destructive confirms and route input forms. The top bar interaction model is the strongest part; keep that even in non-DevTools variants.

## V3 Design Bar

- The live WordPress iframe must have a credible full-size/focus mode, especially for settings-like and launcher-like concepts.
- Start routes must be differentiated with real inputs: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import cannot all be generic tiles.
- Save must show consequences: browser storage, local save wording if used, saved identity, Your Playgrounds row, and reset/reload behavior.
- Destructive actions need a visible confirm/cancel state and a final state.
- The strongest designs should be calm at first glance and deeper on demand. Avoid showing every button immediately.
- Preserve every current Playground feature from `DESIGN_BRIEF.md`; do not add AI, accounts, collaboration, deployment, marketplaces, or other product features.
