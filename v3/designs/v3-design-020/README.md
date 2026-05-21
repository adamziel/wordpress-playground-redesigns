# V3 Design 020 - Site-First Event Deck

## Thesis

This direction treats the running WordPress iframe as the product, not as a preview trapped inside a tool. The first viewport is a usable Playground session: a crisp translucent browser rail, an address path input, save state, WP Admin/Homepage jumps, a prominent full-size site mode, and a collapsible Site Manager inspector. The console idea is intentionally quiet. Instead of a terminal that asks for attention, the bottom event deck records what visual actions mean: save, start, route selection, blueprint run, reset confirmation, export, navigation, and log consequences.

## Remix, Merge, Remove

I remixed the strongest parts of the console hybrid, inspector-first, glass, launcher, and iPad multitasking references. The Site Manager remains one docked inspector with the required Settings, Files, Blueprint, Database, and Logs tabs. The launcher keeps the current three sections: new Playground routes, featured/full blueprint gallery, and Your Playgrounds. Unlike earlier launcher concepts, each non-vanilla route reveals a real input state for WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and Import .zip. I did not remove current features; I reduced duplication by making the gear focus the Site Manager Settings tab and by keeping the console as event history rather than a second command surface.

## Trade-Offs

The full-size site mode hides most tooling, so the top rail keeps Save, URL, WP Admin/Homepage, and Exit reachable. The right inspector is more developer-oriented than a pure beginner UI, but it is collapsed on demand and mobile turns it into a bottom sheet. The event deck uses command-like text even though Playground does not currently expose a public `pg` CLI; here it is a readable history notation for existing actions, not a new product feature.

## Self-Critique And Revision Note

After checking the design against `v3/INSIGHTS.md`, I revised the route launcher to expose paste/upload inputs instead of generic tiles, made the destructive reset a real confirm dialog with Save-first, kept the live iframe central in both default and focus modes, and avoided letting the event history dominate the screen. The remaining weak spot is that a static mock can only approximate the iframe and file editor behavior; in a production pass, the inspector would need careful keyboard focus management and real resize behavior.
