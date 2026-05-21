# 054 — Floating Action Button (Material You)

## Thesis
The WordPress iframe is the entire stage. The chrome collapses into a single Material 3 expressive FAB anchored to the bottom-right that blooms into a radial "speed-dial" of Playground's major actions: Save, Saved Playgrounds launcher, Site Manager, Settings, New, and Refresh. Around it, smaller secondary chips dock for the URL bar and the playground name pill. Everything else — file browser, blueprint editor, database, logs — lives inside a Material You bottom sheet that rises from the FAB. The palette is generated from a single seed color (Playground purple) using Material 3's tonal-palette logic, so the whole UI is one harmonized "wallpaper".

## What I remixed / merged / removed
- **Removed** the persistent top toolbar and the left/right sidebars. The toolbar's seven affordances are now the petals of the expanding FAB plus two docked chips (URL + name).
- **Merged** the Site Manager's 5 tabs (Settings, Files, Blueprint, Database, Logs) into one bottom sheet with a Material 3 segmented selector — every panel lives in the same surface, the FAB just sets which tab is active.
- **Merged** the three settings entry points (popover, sidebar tab, info notice) into a single Settings tab in the bottom sheet; the FAB's "Settings" petal opens it directly.
- **Merged** "Saved Playgrounds" launcher + blueprint gallery + Your Playgrounds into one full-bleed Material 3 dialog with three lanes ("Start new", "Blueprints", "Your sites") plus a search bar and category chips for the 43 blueprints.
- **Remixed** the Additional Actions menu (Export to GitHub PR, Download .zip) as a sub-petal that branches off the Save FAB action — saving and exporting are conceptually one "persist" family.

## Trade-offs
A FAB-only chrome is delightful but discoverable only after the first tap; first-time users get a short pulsing hint (a "tap me" ripple) on the FAB. Bottom sheets on desktop steal vertical real estate from the iframe (we mitigate by making the sheet resizable and dismissible to a 56px handle). The expanded radial menu has 6 petals — close to the M3 sweet-spot of 3-5 — so it pushes the pattern but stays legible. Mobile uses the same FAB unchanged; the bottom sheet covers the iframe, which is acceptable since on mobile the iframe is already cramped.
