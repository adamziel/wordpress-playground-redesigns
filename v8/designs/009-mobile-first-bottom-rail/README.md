# Mobile-First Bottom Rail

## Thesis

Mobile-First Bottom Rail treats 390px mobile as the canonical WordPress Playground chrome and lets desktop become only a wider phone. The live WordPress iframe is the z0 surface, a two-item quiet bottom rail is z1, the single bottom sheet is z2, and Library/reset confirmations are z3. Current site identity and run state live only in the persistent horizontal Sites status capsule, which remains visible as panes and overlays change.

## V7 Reference Analysis Applied

The v7 reference proved that quiet rail, one pane, depth tiers, and a Sites widget are the right structure, but the review called out too many idle controls, disappearing status, duplicate Coffee Shop identity, and mobile overflow. This version fixes those directly: the idle state has seven visible affordances, the Sites capsule persists and opens the same Sites surface as the rail, the top chrome has no site title, and the layout is bounded to `100vw` with bottom sheet heights tuned for `390x844`.

## Design System And Look

The visual system is phone-native utility chrome rather than desktop glass. Controls use compact 9-14px radii, thin ink rules, soft white surfaces, and semantic green/blue/orange/red status colors. Depth is communicated by shadow, blur, and placement only: z0 iframe, z1 top/bottom chrome plus Sites capsule, z2 bottom sheet, z3 Library/reset overlays. Desktop keeps the same bottom rail and sheet instead of becoming a sidebar interface.

## Flow Coverage

The prototype preserves Refresh, address/path input, Playground identity, Save, Sites access, Manager access, settings access, fullscreen route, notifications, and the real iframe. Sites includes Your Playgrounds with resume, all six start routes (Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import `.zip`), featured blueprints, and a full 43-item Library with search and category filters. Manager covers Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. Interactive states include idle, Sites open, Manager open, booting/loading, Library open, save/resume/toast, Apply Settings & Reset confirm, and reset final.

## Remix / Merge / Removal

The Saved Playgrounds drawer becomes the Sites bottom sheet. The settings popover is removed as a separate home because Manager Settings owns runtime selection and Apply Settings & Reset. Database and Logs are no longer rail-level modes; they are Manager tabs in the one secondary pane. The top chrome is intentionally slim and browser-like: Refresh, path input, Save, and Fullscreen only, with no duplicate site name.

## Trade-Offs

Two doors open Sites: the rail button and the persistent Sites capsule. They are intentionally the same destination because mobile ergonomics need both a thumb rail and a live status anchor. Advanced Manager tabs are one tap deeper than v7's five-dock rail, but that keeps idle chrome under the budget and makes the model honest. The Library and reset modal temporarily cover the iframe, but discovery and destructive reset are the two workflows that justify z3 focus.

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

Idle affordance count: Refresh, path input, Save, Fullscreen, Sites rail button, Manager rail button, Sites status capsule = 7. The z0 label and status text are passive indicators, and Manager tabs are not visible until the single bottom sheet is open.
