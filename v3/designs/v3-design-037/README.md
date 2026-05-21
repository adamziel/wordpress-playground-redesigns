# V3 Design 037 - Tabbed Reset Rigour

## Thesis
This design treats tabs as the only navigation primitive: Site, Launcher, Blueprints, Settings, Files, Blueprint, Database, and Logs are peers on one strip, with overflow handled by a tab menu rather than a sidebar or drawer. The Site tab remains the default and uses a real `iframe srcdoc`, plus a Focus Site mode that removes the tab strip while preserving Save, path entry, WP Admin, Homepage, and exit.

## Remix, Merge, Remove
I merged the Site Manager tabs and the Saved Playgrounds drawer into the same global tab system. The top-bar launcher button opens the Launcher tab, and the gear/tools buttons open the Settings tab instead of spawning a second settings popover. The Launcher keeps every current start route but expands each route into its own form, including PR number/URL, Gutenberg PR or branch, GitHub repo/ref/path, Blueprint URL, and a real `.zip` file input. The Blueprint gallery is a sibling tab with search, category filters, and all 43 blueprints.

## Trade-offs
Tabs make location obvious, but they serialize power work: a user cannot see Files and Logs beside the Site at the same time. The design compensates with a full-size Site tab and a quick overflow menu, but this is still less multitasking-friendly than an inspector or iPad split view. The first opened management state is calmer than a giant dashboard, yet the tab strip itself has system weight on small screens, so mobile uses horizontal scrolling plus the same overflow menu rather than hiding Database or Logs in a vague "More" area.

## Self-critique and Revision Note
After checking the V3 insights, I revised the concept around three risks: route tiles now reveal concrete input states, ZIP import is a real file input, and Apply & Reset is no longer just a red button. The destructive flow now shows warning copy, Cancel, Save first, Confirm, a boot progress state, a result notice, a changed Playground name, and a toast. The remaining weakness is inherent to tabs-only: serial switching is legible, but not as efficient as split editing for heavy debugging.
