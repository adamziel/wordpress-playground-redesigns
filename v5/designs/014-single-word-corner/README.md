# 014 — Single word in a corner

## Thesis

At idle, the WordPress Playground UI is a single word. A monospace pill in the top-right corner of the iframe — the playground's name plus one save-state LED — is the entire chrome. Everything else is summoned. Hovering the pill grows it into a 44px-tall toolbar that anchors top-right and extends leftward (URL + back/forward + refresh + save + launcher + site manager + fullscreen). Clicking the pill drops a command menu directly beneath it — the *single* door to the launcher, your saved playgrounds, and every action. The right edge holds one Site Manager drawer whose five tabs (Settings, Files, Blueprint, Database, Logs) swap content within the same frame. There is no second sidebar, no third entry-point to settings, no info-notice with its own save button. The iframe never reflows; every revealed surface overlays it.

## What I merged, removed, and why

I deleted the triple-entry-point sin entirely. The classic Playground has three doors to settings (top-bar popover, sidebar tab, info-notice "save site locally" button) — I kept only the drawer's Settings tab and a single save action in the command menu (and its <kbd>⌘S</kbd> shortcut). I collapsed the launcher's right-side drawer, the saved-playgrounds dropdown, and the address-bar quick-actions into one popover that drops from the name pill (state 3) — so "open launcher," "switch saved playground," "save," "export," and "fullscreen" are all behind the same one-click affordance. The five Site Manager tabs share one drawer surface (states 6–10) instead of being scattered across separate panels. The two "Additional actions" (Export to GitHub as PR, Download .zip) live in the command menu next to Save — not in a hidden overflow under a second header. The destructive "Apply & Reset" is now a typed-phrase confirm with an auto-prepared .zip restore-snapshot (state 10), so the small red banner can't catastrophically misfire.

## Trade-offs

Single-affordance restraint trades discoverability for calm. A new visitor sees `roast-and-bean ⌘K` in the corner and has to *try* — hover or click — to learn the rest. I mitigate this with three things: a built-in `⌘K` hint inside the pill, the same gesture working on mobile (tap to open the bottom sheet), and the toolbar materialising as a *grow* from the corner so it's clearly the pill's expansion, not a separate surface. The other trade-off: hover-to-reveal isn't a touch primitive, so on mobile the corner pill is *tap-only* (no hover preview of the toolbar — the menu is the primary affordance). I'm comfortable with that because mobile users prefer one canonical entry-point anyway. Finally: dimming the iframe when the launcher overlays it (state 4) softens the "never reflow" rule visually, but the iframe still doesn't move — only its luminance drops to push the launcher's depth.

## Glass justification

I use three frosted surfaces, named: (1) the corner pill — needs ambient-color transparency so it doesn't stamp a hard rectangle over the iframe's content; (2) the chrome-bar — same justification, materialises briefly; (3) the drawer/launcher — heavier blur establishes them as the *secondary* depth layer, behind which the iframe lives. Solid surfaces (the inner SQLite table, the editor, the boot panel, the typed-phrase confirm) carry content; glass surfaces carry *chrome*. No frosted decoration without purpose.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  — Exactly 1 (the name pill). LED is a status indicator, not interactive.
[x] iframe primary + fullscreen toggle?     Score: 5/5  — Explicit F key, Esc to exit, persistent corner-hint in fullscreen, no chrome ever pushes the iframe.
[x] One door per feature (no duplicates)?   Score: 4/5  — Save is reachable from the menu AND ⌘S; otherwise every feature has exactly one canonical home. Mild overlap I'm keeping is the cmd-menu's "Open Site Manager" row plus the dedicated icon in the hovered toolbar — same destination, two roads.
[x] One secondary surface (not many)?       Score: 5/5  — One right drawer; its five tabs swap content. No second sidebar, no overlapping panels.
[x] Direction expressed strongly?           Score: 5/5  — The direction is "single word in a corner. All chrome appears on hover. Period." That is exactly what this is. No imported metaphors from other v1 winners.
[x] Mobile feels like wider-mobile desktop? Score: 4/5  — Same corner pill, same monospace word, same gesture (tap = menu). The drawer becomes a bottom sheet, the launcher becomes a full sheet — but the IA is byte-for-byte the same. Loses one point because hover-on-pill toolbar preview is desktop-only.
[x] Critique pass on glass/ambient use?     Score: 4/5  — Three glass surfaces, each justified. The launcher's frosted overlay is the most generous use and could be tightened; I kept it because the depth hierarchy reads better this way.
```

Idle affordance count: **1**.
Surfaced features count: **all 14 from the brief** (refresh, URL, name, save, launcher, site-manager, settings popover-equivalent, 6 sources, 43 blueprints, 5 SM tabs, additional actions, save-state, fullscreen, toasts).
