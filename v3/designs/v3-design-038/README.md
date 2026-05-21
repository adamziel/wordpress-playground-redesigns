# V3 Design 038 - Split Guard Workspace

## Thesis
This concept treats WordPress Playground as an iPad multitasking workspace where the live WordPress iframe is the primary app and every management surface is secondary. The default screen is immediately usable: refresh, path input, unsaved state, Save, launcher, tools, settings, a large running site, and a saved-playgrounds shelf are visible without turning the first viewport into a catalog. The assigned variation is destructive-state rigor, so the Settings pane contains a reset lane that shows warning, cancel, confirm, progress, result, and changed active state as one coherent flow.

## Remix, Merge, Remove Choices
The current Site Manager becomes the swappable Split View pane with the required Settings, Files, Blueprint, Database, and Logs tabs. The Saved Playgrounds drawer becomes a Slide Over library with three homes: Start, Blueprints, and Your Playgrounds. Start routes are not generic tiles: WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, and Import .zip all expose concrete input controls, including a real file input for ZIP import. WP Admin, Homepage, Export to GitHub PR, and Download .zip remain in the tool header and actions menu. The top settings control focuses the canonical Settings pane instead of opening a competing settings form.

## Trade-offs
The iPad metaphor gives a clear answer to site-plus-tools multitasking, but it asks desktop users to understand Slide Over, Split View, and a shelf. I made the pane switch explicit with a labeled grabber and direct tabs, and mobile degrades to a bottom sheet rather than hiding Database and Logs in a vague More bucket. Split View only shows one secondary tool at a time, so a developer cannot watch Files and Logs simultaneously. The payoff is that the site stays large, and Focus Site mode removes chrome while preserving Save, URL navigation, WP Admin, Homepage, refresh, and exit.

## Self-Critique And Revision Note
After checking the design against `v3/INSIGHTS.md`, I revised around the main V3 risks: the launcher now shows route-specific forms, the ZIP route uses an actual upload control, the unsaved state is visible in the top bar and shelf, and Apply & Reset has a full confirm-to-result path instead of just a red button. The remaining weakness is that the static prototype simulates WordPress and editor behavior inside inline HTML; production would need real keyboard focus management, iframe navigation, and drag resizing for the multitasking gestures.
