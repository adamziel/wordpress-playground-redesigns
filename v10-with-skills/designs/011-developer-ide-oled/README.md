# Developer IDE OLED

## Thesis

This prototype treats WordPress Playground as a developer IDE where the iframe is the primary editor pane. The surrounding chrome is reduced to a single command bar and one right-side inspector, so the running WordPress site remains larger and more important than every management tool.

## Skill Material Used

Applied UI Pro Max search recommendations for Developer Tool / IDE, Dark Mode (OLED), Developer Mono, Real-Time Monitor, and Focus States. The resulting system uses a code-dark palette with run green, JetBrains Mono for technical labels, IBM Plex Sans for interface text, clear focus rings, 44px touch targets, and table-like monitor surfaces for logs and runtime data.

## Flow Model

The top bar owns live iframe actions: Refresh, path field, WP Admin, Homepage, Save, Focus Mode, and the inspector toggle. The inspector is the one secondary surface and swaps content through tabs for Launcher, Settings, Files, Blueprint, Database, Logs, and Exports. This preserves the v7 iframe primacy lesson while making the manager feel like an IDE side panel instead of several competing drawers.

## Trade-offs

The OLED IDE style is excellent for contributors and power users, but it is less warm for a first-time site builder. The density helps show every feature in one coherent place, while the cost is that the mobile version must collapse the inspector below the iframe and rely on segmented navigation.

## Self-Critique

- iframe primacy: 5/5
- one-door feature ownership: 5/5
- secondary-surface discipline: 5/5
- visual craft: 4/5
- mobile parity: 4/5
- skill expression: 5/5

