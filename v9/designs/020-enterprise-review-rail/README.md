# Enterprise Review Rail

## Thesis

Adds enterprise-grade review structure without accounts, permissions, or cloud concepts that Playground does not currently have.

## V7 Reference Analysis Applied

The v7 quiet-rail/depth-tier idea is preserved as an information architecture primitive, not as decoration. This proposal keeps the live iframe as the dominant z0 surface, limits the rail to Sites and Site Manager, uses one secondary pane for all non-iframe work, and reserves the top layer for Library and reset confirmation.

## Design System

System: Enterprise Review. The palette uses #16425b, #3a7d44, and #b5651d as functional accents for active state, health/status, and warnings. Border radii stay at 8px or below for controls and panes.

## Flow Coverage

- Refresh, address input, save state, focus/fullscreen route.
- Persistent current Playground status with site name, WordPress/PHP versions, unsaved state, and OPFS usage.
- Sites pane with saved playgrounds, Vanilla WordPress, WordPress PR, Gutenberg PR, GitHub, Blueprint URL, Import .zip, and featured blueprints.
- Library overlay with search, categories, and blueprint grid.
- Site Manager pane with Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export PR, and reset escalation.
- Destructive Apply and Reset confirmation with snapshot, diff, typed confirmation, and final action.
- Mobile layout collapses to bottom rail plus one full-width pane.

## Remixed, Merged, Removed

Remixed: v7 depth tiers and quiet rail. Merged: saved sites, new-site routes, and featured blueprints into one Sites surface. Removed: duplicate current-site labels in top chrome, multi-drawer navigation, and separate manager surfaces.

## Trade-offs

The proposal favors predictable structure over highly animated depth. It shows more pane content when open than v7, but keeps idle affordances to seven: refresh, address, save, focus, Sites, Site Manager, and current status.

## Self-Critique Rubric

[x] Affordance count at idle <= 8?             Score: 5/5
[x] Iframe primacy + fullscreen route?         Score: 5/5
[x] One door per feature?                      Score: 5/5
[x] One secondary surface?                     Score: 5/5
[x] Depth is visual hierarchy only?            Score: 4/5
[x] Sites widget persistence/status?           Score: 5/5
[x] Mobile parity without overflow?            Score: 4/5
[x] Distinct design system beyond color?       Score: 4/5
[x] Product feature coverage?                  Score: 5/5
