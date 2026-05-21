# 029 — Breadcrumbs nav

## Thesis
The path is the IA. A single 44 px top strip carries a breadcrumb trail; each crumb is itself a hover-dropdown. Clicking a crumb pops back to that depth; hovering it lists siblings so you can swap leaves without first popping (Settings → Logs in one move, not two). There are no tabs, no sidebars, no rails, no drawers — only the trail and one breadcrumb-driven pane that mounts under the leaf crumb. The pane swaps content as the leaf changes. Idle paths of depth two (`playground › Stylish Coffee`) leave the iframe fullscreen-minus-44px; any deeper path mounts the secondary pane. Every Site-Manager surface (Settings, Files, Blueprint, Database, Logs) and every launcher surface (Saved playgrounds, New, Import, the 43-blueprint gallery) sits behind a single crumb-dropdown — so nothing is ever more than one hover away.

## What I merged / removed and why
The three settings entry points (popover, sidebar tab, info notice) collapse to one path: `… › Settings`. The five Site-Manager tabs collapse into five sibling leaves under `… › Site Manager`-style crumb, surfaced as a single dropdown when you hover the site crumb (panel C). The "Saved Playgrounds" launcher and the six "Start a new Playground" sources fold into the root crumb's dropdown with a 3-way segmented control (Saved / New / Import) — applying review 002's "don't ship three drawers stacked in one pane" lesson. The 43-blueprint gallery isn't a separate sub-screen any more: it's the leaf-pane shown when the path is `playground › New › Blueprints` (panel J). Export to GitHub PR + Download .zip live in one place only — the More kebab on the top strip (panel K). Apply &amp; Reset is gated behind a typed-name confirm, not a small red banner. The top strip stays at 44 px and carries exactly eight idle affordances; everything else lives inside a crumb-dropdown or the secondary pane.

## Trade-offs
A breadcrumb-only IA makes lateral switching slightly heavier than tabs — you must hover (or click-then-pick) a sibling list to move from Files to Logs, where a tabbed UI would be a single click. I accept that because the same gesture serves the deeper navigation (Settings → PHP, Files → wp-config.php), so users learn one interaction instead of two; and because the hover-to-list pattern reads as path navigation, not menu surfing, which makes the IA legible at a glance ("you are here"). The 44 px strip can't show the full path on narrow screens — mobile wraps the trail to its own row (panel M) and lets it scroll horizontally; the affordance count drops to 6 on mobile by dropping the URL pill (since the active crumb already shows location). Glass appears nowhere in this design — both the top strip and the pane are solid surfaces — because glass without an ambient-color purpose is forbidden in v5 §2.6. The pane is fixed at 56% of the stage height; power users who want a bigger editor can press F to fullscreen the iframe (and by symmetry, drag-to-resize would be a future addition, not part of this direction's promise).

## Lessons applied from earlier v5 reviews
- **Review 001 lesson** — "show the expansion gesture as a first-class state." Panels B, C, and E each render an open crumb-dropdown explicitly — including the *leaf-crumb-as-sibling-file-switcher* in E. The morph is teachable, not hidden behind an interaction users have to discover.
- **Review 002 lesson** — "don't stack three sections inside one pane." The root-crumb dropdown uses a 3-way segmented control (Saved / New / Import) instead of three scrollable sections; the site-crumb dropdown uses grouped sections with dividers and explicit headers.
- **Review 006 lesson** — "don't import a clever idea from a different direction that undermines your restraint." No frosted Control Center, no Cmd+K palette, no spatial dock, no auto-hide HUD. The trail is the entire IA. Even the "more" menu is a plain dropdown, not a flyout.
- **Review 013 lesson** — "the fullscreen toggle must be a visible icon, not keyboard-only." A maximize icon sits on every top strip (affordance #6); F is just a shortcut. The exit-pill in panel L names both the icon affordance and the Esc shortcut.
- **Review 014 lesson** — "non-overlapping destinations per gesture." A crumb's click and its hover-dropdown point at different rooms: click pops the trail, hover lists siblings. The two outputs never collide.
- **Review 018 lesson** — "cite prior v5 reviews by number and lesson." Done — six lessons applied above with specific evidence.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (exactly 8; counted in panel A's annotation strip — refresh · root crumb · site crumb · URL pill · save pill · fullscreen · more · +new)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (iframe gets 100% of the stage at depth-2 idle; panel L demonstrates true fullscreen with exit pill + Esc shortcut)
[x] One door per feature (no duplicates)?   Score: 5/5  (settings only via `… › Settings` leaf; exports only via More menu; launcher only via root crumb; the trail is the only navigation primitive)
[x] One secondary surface (not many)?       Score: 5/5  (literally one pane that mounts under the trail; segmented controls and dropdowns swap content — no second sidebar, no second drawer)
[x] Direction expressed strongly?           Score: 5/5  (path-as-IA is taken literally — even file switching in panel E is a crumb-dropdown; leaf-crumb is the file picker, not a tree-explorer-in-disguise)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same trail metaphor wraps to its own scrollable row; pane is the same; URL pill drops because the active crumb already names location; 6 affordances at idle)
[x] Critique pass on glass/ambient use?     Score: 5/5  (zero glass surfaces — top strip and pane are both solid; the only translucent element is the fullscreen exit-pill, which earns its keep by sitting *over* the iframe)
```
