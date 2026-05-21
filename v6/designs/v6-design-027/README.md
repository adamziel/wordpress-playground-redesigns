# V6 Design 027 - Sites Passport

## Thesis
Sites Passport treats the compact Sites widget as the canonical door into saved playgrounds, new starts, ZIP import, and blueprint discovery. The idle screen stays quiet: a single command row, a compact status widget, and a real WordPress iframe dominate the first viewport. Opening Sites, Blueprints, Settings, Files, Database, Logs, or Export uses one shared secondary surface; the live site keeps a visible focus gauge and can be returned to near-full or full preview with one click.

## Remix / Merge / Remove
I kept the useful interaction model from Corner-widget Control Center but reduced it to one widget instead of four corners. I merged the launcher and saved playgrounds into Sites, kept all six start routes with route-specific inputs, and folded the full blueprint gallery into that same Sites-owned surface. Site Manager remains a distinct destination, but it uses the same panel geometry and swaps tabs for Settings, Files, Blueprint editor, Database, Logs, and Export. I avoided the disliked two-row top bar: identity and context are handled through the Sites widget, one slim command row, and the reusable resize surface.

## TypeUI Refined
This design uses the assigned `refined` TypeUI skill. It applies Playfair Display as the primary UI/display voice, JetBrains Mono for labels, paths, tags, code, logs, and status metadata, the 4/8/12/16/24/32 spacing rhythm, 4px and 8px radii, a white/paper surface model, and restrained blue/violet/success/warning/danger accents. The visual system also borrows V5 three-layer depth only as polish: tinted paper, blur, and quantified shadows clarify hierarchy without becoming navigation.

## Trade-Offs
The Sites widget is deliberately powerful, so the main risk is overloading one object. I limited that by keeping Site Manager as a named button in the command row on desktop and a Tools action in the widget on mobile while still using the same secondary surface. The blueprint gallery includes all 43 known blueprint entries with search and the required category filters, but it uses compact generated thumbnails rather than screenshot assets to keep the single file self-contained. The iframe uses `srcdoc` so the GitHub Pages file is reliable offline while still proving that the WordPress site is an actual iframe surface, not a div mock.

## Self-Critique / Revision Note
After checking the V6 audit, I revised toward a visible real `<iframe>`, explicit ZIP upload/dropzone, a disabled-to-enabled destructive reset confirmation, and a mobile layout where the same Sites widget becomes the bottom passport rather than a fallback hamburger. Idle visible affordances are within the restrained target: refresh, address, Save, Site Manager, Settings, fullscreen, and the Sites widget cluster. The weakest point is that the refined serif typography gives the shell a strong editorial flavor; production testing should verify dense developer panes remain fast to scan.
