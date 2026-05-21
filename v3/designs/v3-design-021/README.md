# V3 Design 021 - Route Dock Sheet Shell

## Thesis
This design treats WordPress Playground as a thumb-first app wrapped around a real browser surface. The live WordPress site remains the default canvas, while a bottom Route Dock gives clear homes to Launch, Files, Data, and Settings. Launch is not a wall of generic tiles: each route expands into the input it needs, so WordPress PRs, Gutenberg PRs, GitHub imports, Blueprint URLs, and ZIP imports feel concrete before the user starts a session.

## Remix, Merge, Remove
I remixed the successful mobile-first sheet pattern, but removed the kitchen-sink More tab. Files and Blueprint authoring share one authoring home; Database and Logs share one debugging home; Settings owns runtime changes, WP Admin/Homepage jumps, save state, Export to GitHub PR, and Download .zip. The launcher keeps all current sections: the six start routes, featured blueprints, full searchable/category-filtered 43-item gallery, and Your Playgrounds. The toolbar still has refresh, path input, playground name, Save, Saved Playgrounds launcher, tools access, and settings access.

## Trade-offs
The sheet model prioritizes clarity and mobile reach over dense desktop multitasking, so users see one secondary surface at a time. Desktop gets wider sheets and the live iframe remains visible behind them, but power users cannot pin Files and Logs side by side. The route forms take more vertical space than simple launch tiles, yet that cost directly addresses the biggest V3 feedback: start routes must reveal real input states instead of hiding paste steps behind labels.

## Self-Critique And Revision Note
After checking against the V3 insights, I revised the direction around three risks: route tiles now show real forms and validation hints; Settings includes a typed `RESET` confirmation rather than a single destructive button; and Preview mode hides sheets/chrome so the iframe can become full-size without losing WP Admin, Homepage, route, and Save controls. The remaining weakness is that the mock WordPress iframe is still a static recreation, not a live embedded site, which is appropriate for the static redesign but less convincing than a real iframe would be in product code.
