# V6 Design 006 — Editorial Sites Resize

## Thesis
This direction combines the Sites widget and smart resize into one product rule: identity, saved sites, new starts, imports, and blueprint discovery all enter through the compact Sites widget, while every site-management task enters through one Workbench surface. Choosing a saved site, blueprint, settings tab, file editor, database view, or log view changes the iframe/pane ratio instead of opening unrelated drawers. The live WordPress iframe remains the central surface, with a visible focus button and Esc-return fullscreen mode for uninterrupted preview.

## TypeUI Style Used
I used `typeui-editorial.md`. It shows up in more than color: Gelasio drives the display/body hierarchy, Ubuntu Mono labels the operational controls, the layout follows an 8px rhythm, groups use crisp 4px/8px radii, and the palette stays mostly black, white, and newsprint gray with restrained blue/amber/green state color. The pane is structured like an editorial work page: rules, captions, dense cards, and clearly owned sections rather than a dashboard spread.

## Remix / Merge / Remove
From `018-quiet-rail-to-loud`, I kept the restrained idle-to-loud reveal and the idea of one secondary surface, but removed the extra Blueprints door by making Blueprints a tab inside Sites. From `023-smart-resize`, I kept focus-as-layout, detents, and a teaching gauge; the iframe, Sites, and Workbench shift between site-heavy, balanced, and tool-heavy ratios. From `036-corner-widget-control-center`, I kept the useful Sites widget interaction but reduced it to one canonical widget rather than four corners. From `035-three-layer-depth`, I borrowed elevation and blur polish only. I avoided `030-two-row-top-bar` by using one compact toolbar plus one pane, not two persistent horizontal bars.

## One-Door Map
Sites owns saved identity, save/resume consequences, all six launch routes, Import `.zip`, featured blueprints, the full 43-blueprint gallery, search, and categories. Workbench owns Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. The path input is the only URL-shaped navigation control. Focus is the only full-size preview door. Settings access from the toolbar opens the Workbench directly to the Settings tab; the tab is the destination label, not a second settings surface.

## Trade-Offs
The Workbench is intentionally heavy when active, so file editing and blueprint browsing have room, but this means the iframe yields space more often than a pure rail design. The ratio gauge and focus button are the compensation: users can immediately give the iframe more room or enter full preview. The compact Sites widget is denser than a big launcher button, but it keeps saved identity and launch consequences visible in the same place. Mobile keeps the same logic by rotating the resize into vertical site/pane proportions; labels compress, but the Sites and Workbench doors do not change.

## Self-Critique / Revision Note
After checking the V6 insights, I revised the IA to remove a separate Blueprints door and made exports a Workbench tab rather than a global overflow menu. The design now proves the required one-door map more clearly: Sites for launch/saved/blueprints, Workbench for tools/settings/exports, path for navigation, focus for full preview. Remaining weakness: the toolbar still has a Settings shortcut for requirement coverage, so the README explicitly defines it as a deep link into the single Workbench Settings home rather than a separate popover.

```
[x] iframe primary + fullscreen/focus mode?       Score: 5/5
[x] One door per feature?                         Score: 4/5
[x] One secondary surface?                        Score: 5/5
[x] Sites widget plus smart resize expressed?      Score: 5/5
[x] TypeUI editorial applied beyond colors?        Score: 5/5
[x] Mobile parity at 390x844?                      Score: 4/5
[x] Feature preservation from current Playground?  Score: 5/5
```
