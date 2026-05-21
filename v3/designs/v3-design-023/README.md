# v3-design-023 - Launch Deck to Play Mode

## Thesis

This direction treats WordPress Playground like a launchable workspace: discovery and setup happen in a compact Launch Deck, then the running WordPress site can take over the screen as the primary "play" surface. The launcher is not just a grid of generic tiles; every route that requires input shows the actual field shape up front, including WordPress PR URL, Gutenberg PR or branch, GitHub repo/ref/path, Blueprint URL, and ZIP import. The live iframe remains central, visible beside the deck by default and available in a full-size Focus/Play mode.

## Remix, Merge, Remove

I kept the Epic-style library strength from the prior launcher, but removed the oversized storefront hero because it competed with the running site. Saved Playgrounds, featured blueprints, all 43 blueprints, and new Playground routes are merged into one Launch Deck. The Site Manager is moved into a collapsible tools deck with the required Settings, Files, Blueprint, Database, and Logs tabs, plus WP Admin, Homepage, Export to GitHub PR, and Download .zip actions in the deck header. The quick settings gear becomes a small runtime popover that points users toward the same reset flow instead of hiding the destructive consequence.

## Trade-offs

The left Launch Deck is denser than a cinematic launcher, but that density is intentional: the route forms are the product's risky step, so they need to be visible and validated before boot. The tools deck consumes width on desktop when open, but the Focus button restores a full-size WordPress session without losing Save, address navigation, WP Admin, Homepage, and the top-level Launcher/Tools controls. On mobile the deck and tools become bottom sheets with separate Site, Launch, Tools, and Gallery destinations so Settings, Files, Database, and Logs are not buried in an undifferentiated More menu.

## Self-Critique and Revision Note

Critical pass against `v3/INSIGHTS.md`: the first version risked repeating earlier Epic designs by making blueprints feel more important than route setup. I revised the composition so the first viewport emphasizes route input rigor, the unsaved state is louder in the top bar and saved list, Apply & Reset renders an explicit confirm/cancel state, and the live WordPress surface has a clear Focus/Play mode. The remaining weakness is that the tools deck still shares the screen with the site on desktop; this is mitigated by making it collapsible and by preserving a full-size mode as a first-class control.
