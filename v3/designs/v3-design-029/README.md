# V3 Design 029 - Route Inspector Playground

## Thesis
This design treats WordPress Playground as a browser with a precise inspector attached. The live WordPress iframe is the default working surface, the top bar carries the path input and loud yellow unsaved warning, and the Site Manager opens as a dockable DevTools-style inspector only when the user asks for deeper tools. The assigned variation, route input rigor, is handled by making every launcher route show its own concrete form instead of generic launch tiles.

## Remix / Merge / Remove Choices
I kept the top bar browser model from the strongest inspector designs, merged the Site Manager into docked tabs for Settings, Files, Blueprint, Database, and Logs, and made the toolbar gear focus the same Settings tab rather than creating another destructive path. The launcher still contains new routes, featured blueprints, the full searchable gallery, and Your Playgrounds, but it is staged as a workflow sheet. The live site has a Focus mode with Save, path navigation through the main top bar, WP Admin, Homepage, and Exit controls so settings or launcher work never traps WordPress in a tiny preview.

## Trade-offs
The inspector layout is best for developers and blueprint authors, so it starts collapsed to keep first-touch users on the live site. The launcher exposes many route forms at once because this direction specifically needs input rigor; that makes the launcher taller, but it avoids the prior weakness where PR, GitHub, Blueprint URL, and ZIP routes were indistinguishable tiles. On mobile, the inspector becomes a bottom sheet and the navigation uses named homes rather than a catch-all More tab.

## Self-critique and Revision Note
After checking the V3 insights, I revised the concept away from a permanently open DevTools pane. The first viewport now favors the live iframe, the unsaved state is more prominent, ZIP import uses a real file input, destructive reset requires a typed confirmation, and Database/Logs remain first-class surfaces on mobile through the Data entry rather than being buried.
