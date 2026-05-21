# V3 Design 014 - Full Size Settings Preview

## Thesis
This direction keeps the clarity of macOS Ventura Settings but reverses the old settings-app weakness: the live WordPress iframe is not a category you must find, it is the default canvas. A searchable Ventura-style dock sits over the left edge, while Site Manager panes slide over the right only when needed. Full-site mode removes the dock and panels but keeps the URL field, Save, Playgrounds, WP Admin, Homepage, and exit control reachable in the floating top bar.

## Remix, Merge, Remove
I merged the quick settings popover and Site Manager Settings tab into one Settings pane; the gear and Settings row both focus the same surface. The launcher keeps the current Start / Blueprint / Your Playgrounds structure, but every route tile exposes its required input state for WordPress PR, Gutenberg PR or branch, GitHub, Blueprint URL, and ZIP import. Files, Blueprint, Database, and Logs remain the five Site Manager tabs, with WP Admin, Homepage, Export to GitHub PR, and Download .zip in the tool header and actions menu. Nothing from the current feature inventory is removed.

## Trade-offs
The translucent dock adds a small layer over the live site, so full-site mode is prominent and one click away. The design chooses a single right-side tool pane rather than multiple simultaneous inspectors; this keeps the first viewport calm, but power users cannot view files and logs side by side. The blueprint gallery renders all 43 mock entries, but thumbnails are generated visual placeholders rather than real screenshots to keep the file self-contained.

## Self-Critique And Revision
After checking against the V3 insights, I revised the design to make Apply & Reset a native-feeling confirmation sheet, not a red button alone. I also kept route-specific inputs visible in the launcher and made the mobile fallback use direct bottom destinations for Preview, Launcher, Settings, and Logs instead of hiding core tools under a generic More button.
