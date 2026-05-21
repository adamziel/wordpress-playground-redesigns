# Material Elevation Rail

## Thesis

Material Elevation Rail keeps the V8 structure but swaps V7's dark glass for Material 3 surfaces, state layers, compact navigation, and explicit elevation tokens. The iframe remains the only z0 surface and carries the live WordPress site. The rail is z1, the single secondary pane is z2, and Library/reset confirmations are z3 overlays expressed with shadows and tonal surfaces rather than blur.

## V7 Reference Analysis Applied

The V7 reference proved that quiet rail, one pane, and one deeper overlay are the right information architecture. This version fixes the weaknesses called out in the review: the idle rail has only two doors, Sites and Manager; the persistent Sites widget remains visible while panes and reset dialogs are open; the top chrome does not repeat the site name; and mobile uses the same bottom rail plus bottom sheet model without horizontal overflow.

## Design System And Look

The look is Material 3 without turning the prototype into a stock Android screen. Surfaces use `surface`, `surface-container`, and tonal containers; controls use hover/focus state layers; and depth is represented by named elevation shadows (`z0/e0`, `z1/e1`, `z2/e3`, `z3/e5`). The palette is mostly warm neutral with teal primary, amber secondary, and red destructive states so the interface has semantic range without becoming a one-color theme.

## Flow Coverage

The prototype covers idle browsing, Sites open, Manager open, Library open, booting from start routes or blueprints, saving locally from the top chrome or Manager notice, resuming saved sites, toasts, WordPress Admin/Homepage navigation, settings changes, destructive Apply Settings & Reset confirmation, reset final state, export to GitHub PR, Download `.zip`, file browsing, blueprint editing, database browsing, logs, and mobile parity at 390 px. The live WordPress area is a real `<iframe>` with realistic WordPress mock content.

## Remix / Merge / Removal

Saved Playgrounds becomes a Sites pane reached by the rail or the persistent Sites status widget; both open the same surface. Settings, Files, Blueprint, Database, and Logs are merged into the Manager pane instead of being five rail icons, which buys back idle affordance budget. Additional actions move into the Manager header. The separate quick settings popover is removed as an independent home because Manager Settings owns the same controls and reset flow.

## Trade-Offs

The design is intentionally quieter than V7 and may feel less dramatic because shadows are subtler than blur. That is the point of the Material direction: depth is hierarchy, not spectacle. The top chrome still exposes Refresh, path input, Save, and Fullscreen because those are core browser-like controls; advanced actions are one click deeper in Manager. Library uses a full z3 overlay, which interrupts the iframe, but discovery and destructive reset are the two moments that justify full focus.

## Self-Critique Rubric

```text
[x] Affordance count at idle <= 8?             Score: 5/5
[x] Iframe primacy + fullscreen route?         Score: 5/5
[x] One door per feature?                      Score: 4/5
[x] One secondary surface?                     Score: 5/5
[x] Depth is visual hierarchy only?            Score: 5/5
[x] Sites widget persistence/status?           Score: 5/5
[x] Mobile parity without overflow?            Score: 5/5
[x] Distinct design system beyond color?       Score: 5/5
[x] Product feature coverage?                  Score: 5/5
```

Idle affordance count: Refresh, path input, Save, Fullscreen, Sites rail button, Manager rail button, persistent Sites widget = 7. The WP mark and z1 token are passive identity/status, and the close rail button is not visible as a useful action until a pane is open.
