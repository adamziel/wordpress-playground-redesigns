# V6 Design 030 - Folio Resize Playground

## Thesis
Folio Resize Playground combines the V6 Sites widget direction with smart resize. The compact Sites widget is the canonical saved-identity door: it opens saved playgrounds, new starts, import, and blueprint discovery. The only other durable destination is the Site Manager workbench. Opening either surface changes the app ratio instead of launching unrelated drawers: quiet is full-site, Sites is 66/34, Manager is 60/40, focus is 92/8, and fullscreen hides all chrome around the iframe.

## Remix, Merge, Remove
I kept the quiet-to-loud reveal from `018`, the ratio teaching from `023`, and the compact saved-site widget idea from `036`. I borrowed only the surface polish from `035`: soft elevation, blur, and ink-on-paper hierarchy, not depth as a navigation model. I removed the persistent two-row model from `030`; identity, address, save, settings deep-link, tools, and fullscreen fit into one floating command row, while contextual work lives in the single secondary panel. Settings are still reachable from the top control, but it deep-links into Manager -> Settings rather than creating a second settings room.

## TypeUI Skill Used
The assigned TypeUI skill is **Editorial** (`v6/style-skills/typeui-editorial.md`). It is applied beyond color: Gelasio drives the display and body voice, Ubuntu Mono drives labels and controls, the layout uses rule-based sectioning and magazine-like hierarchy, radius stays at 4-8px, the palette is monochrome-first with restrained blue/amber/red state color, and spacing follows an 8px rhythm. The blueprint gallery is intentionally denser and more editorial than a generic card dashboard.

## Trade-Offs
The Sites panel carries a lot because it owns all launch and resume flows. I kept that cost because splitting blueprints, saved sites, and imports into separate primary doors would regress the V6 IA. The top command row has a settings gear and a Tools button, but both resolve into the same Manager surface; that preserves the required top-bar settings access without duplicating settings content. The iframe uses an actual `<iframe>` with `srcdoc` so the static GitHub Pages artifact remains reliable while still proving iframe sizing, fullscreen, and mobile behavior.

## Self-Critique And Revision Note
- Feature preservation: all required top controls, six launcher routes with route-specific inputs, saved sites, featured/full blueprint gallery with search and filters, five Manager tabs, WP Admin/Homepage, export PR, `.zip`, database, logs, save/resume, destructive reset, booting, toast, and fullscreen are present.
- V6 feedback pass: primary destinations are Sites and Manager; no persistent two-row top bar; depth is styling only; focus/full preview is explicit; mobile uses the same ratio primitive as a vertical split.
- Revision after the audit pass: I compressed mobile chrome to one row, hid secondary labels at 390px, and kept the iframe above the bottom sheet with a minimum visible site area so mobile does not become a form-only fallback.
- Remaining weakness: the editorial panel is still information-dense when Sites -> Blueprints is open. The density is intentional for browsing 43 blueprints, but it asks more scanning effort than a spacious launcher.
