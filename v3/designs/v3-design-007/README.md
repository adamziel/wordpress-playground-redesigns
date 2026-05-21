# V3 Design 007 - Tabs Focus

## Thesis
This concept treats tabs as the only navigation primitive while keeping the first screen calm: the live Site tab is full-size, the URL and save state are prominent, and the only obvious next step is opening Launch or Tools as another tab. Management never arrives as a sidebar or drawer. Launcher, Gallery, Settings, Files, Blueprint, Database, Logs, and Actions are peers in one horizontal strip, with overflow handled by scrolling tabs and a clear overflow cue.

## Remix, Merge, Remove
I remixed the earlier tabs-only direction by correcting its biggest weakness: the live WordPress iframe can enter a focus mode that hides tab chrome without losing Save, URL, refresh, WP Admin, Homepage, or exit controls. The Saved Playgrounds drawer becomes a Launcher tab, and the full blueprint browser becomes a Gallery tab with search and category filters. The Site Manager is merged into the tab strip: Settings, Files, Blueprint, Database, Logs, and Actions are direct tabs, while toolbar buttons simply focus those tabs. The separate settings popover is removed, so destructive Apply and Reset has one canonical home and one confirmation dialog.

## Trade-offs
Tabs are legible, but they become crowded as soon as Launcher, Gallery, and all tool tabs are open. This design accepts horizontal tab scrolling because it is still simpler than mixing drawers, sidebars, popovers, and panels. It also gives up simultaneous split-view editing: Files and the live site are one tab apart rather than side-by-side. The compensation is a full-size Site tab and a focus mode for real WordPress interaction.

## Self-Critique and Revision
After checking the V3 insights, I revised the concept to make route inputs visible directly in the launch cards, added a real destructive reset confirmation, exposed Export to GitHub PR and Download .zip through an Actions tab, and made Save/Unsaved louder than a small dot. The remaining risk is that power users may still want a split pane for Files plus Site; this version prioritizes the assigned tabs-only constraint over multitasking density.
