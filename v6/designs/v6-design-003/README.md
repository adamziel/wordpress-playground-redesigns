# v6 design 003 - Sites Widget Map

## Thesis
This redesign treats the compact Sites widget as the canonical door into WordPress Playground. At rest, the user sees a real working Playground surface: refresh, path input, saved identity, Save, settings access through the widget map, and a focus control. Opening the widget reveals one secondary surface with three rooms only: Sites, Manager, and Export. Sites owns start routes, saved Playgrounds, and the full blueprint gallery; Manager owns Settings, Files, Blueprint editor, Database, Logs, WP Admin, and Homepage; Export owns GitHub PR export and .zip download.

## Remix, Merge, Remove
I kept the Sites-widget interaction from v5 #036 but reduced it to one widget, not four corners. I kept quiet-to-loud behavior from v5 #018 by letting the chrome start as a restrained identity capsule and expand into one clear pane. I borrowed smart resize from v5 #023 through the visible ratio gauge and focus-shift state: clicking the site collapses the pane to a widget peek, while full focus hides all chrome. I used only depth and blur from v5 #035 as polish, not as the navigation model. I did not use v5 #030's persistent two-row top bar.

## TypeUI Skill Used
The assigned TypeUI skill is `refined` from `v6/style-skills/typeui-refined.md`. It affects more than color: Playfair Display drives headings and primary UI copy, JetBrains Mono labels routes and controls, radius stays at 4px/8px, spacing follows the 4/8/12/16/24/32 scale, and the palette uses refined blue, violet, success, warning, danger, white surfaces, crisp borders, and restrained elevation.

## Trade-offs
The strict one-door map means there is no separate global Site Manager button, no separate blueprint drawer, and no top-bar export kebab. A user must open the Sites widget first, then choose Sites, Manager, or Export. That adds one click for power users, but it removes the current ambiguity around where saved sites, settings, blueprints, and exports live. The Settings tab still includes the required "Save site locally" notice button, so Save appears both in the compact identity widget and in the required warning context; both point to the same save action.

## Self-critique and Revision Note
After checking `v6/INSIGHTS.md`, I revised the structure toward stricter one-door ownership: blueprints moved under Sites, settings/files/logs/database moved under Manager, and export moved into its own room instead of a duplicated kebab. The remaining weakness is density inside the widget pane on mobile, especially the Files and Blueprint editor split views. The mobile version keeps parity with the same bottom sheet, tabs, ratio gauge, destructive confirm, and focus mode, but code-heavy tools are necessarily compact at 390px.

## Coverage Checklist
- Top bar: Refresh, path input, Playground name, Save, Sites widget access to Manager/settings, focus mode.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import .zip, featured blueprints, 43-blueprint gallery, saved Playgrounds.
- Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage.
- Export: GitHub PR export and Download .zip.
- States: active session, launcher/gallery open, loading/booting overlay, save/resume, destructive Apply & Reset confirmation, route input forms, toast notification, fullscreen focus.
