# V3 Design 002 - Calm Canvas Inspector

## Thesis
This direction treats WordPress Playground as a quiet design canvas with one selected frame, not a busy infinite board. The first viewport is intentionally calm: a credible live WordPress iframe, an editable path, an unsaved-local-storage warning, Save, and one clear Library path into launching or resuming work. Figma influence shows up as the selected frame, contextual right inspector, minimap, and fit/focus controls, while the default experience remains approachable for someone who only wants to use the running site.

## Remix, Merge, Remove
The Saved Playgrounds launcher, blueprint discovery, import flows, and route-specific starts are merged into a single Library overlay. Unlike earlier tile-only concepts, WordPress PR, Gutenberg PR, GitHub, Blueprint URL, and ZIP each reveal the exact input they require. The Site Manager becomes a collapsible inspector with the required Settings, Files, Blueprint, Database, and Logs tabs plus WP Admin, Homepage, Export to GitHub PR, and Download .zip actions. The separate quick-settings surface is removed; the gear opens the inspector's Settings tab so Apply & Reset has one canonical home.

## Trade-offs
This is less spatially ambitious than a true infinite canvas because V3 feedback asked for first-touch calm and fewer visible controls. It keeps only one primary frame visible, with a minimap as orientation rather than a full multi-frame workspace. The inspector can reduce site width on desktop, so there is a full-site focus mode that hides canvas chrome while preserving path, WP Admin, Homepage, and exit controls. On mobile the inspector becomes a bottom sheet and a small bottom dock exposes Site, Library, Tools, Settings, and Save without hiding everything in a generic More menu.

## Self-Critique and Revision Note
Critical pass against `v3/INSIGHTS.md`: I revised the launcher so route tiles expose real forms, added a typed `RESET` confirmation for Apply & Reset, made Save state louder than a tiny dot, and added a full-size focus mode so the live WordPress site is not trapped inside tooling. The main unresolved trade-off is that the Figma metaphor is present but restrained; that is deliberate for the assigned "First-touch calm" variation, but a heavier canvas version could show multiple saved frames at once for returning users.
