# V6 Design 028 - Spacious Depth Preview

## Thesis
Spacious Depth Preview treats the live WordPress iframe as the workspace and everything else as measured support. A single runtime capsule carries refresh, path, saved identity, Save, Sites, Manager, Settings, and full preview. A quiet rail has only two canonical doors: Sites and Manager. Opening either reveals one airy, depth-tinted secondary pane with a labeled resize seam, so the app can move between site-heavy, balanced, and work-heavy ratios without turning depth into navigation.

## TypeUI Skill
I used the assigned **TypeUI Spacious** skill from `v6/style-skills/typeui-spacious.md`. It is applied beyond color through Montserrat headings, Open Sans body text, IBM Plex Mono labels/code, an 8pt spacing rhythm, 4px/8px radius rules, generous content padding, calm white surfaces, semantic blue/violet/success/warning/danger states, and wide breathing room around dense controls. Depth appears as measured elevation, blur, and content-aware tint, not as a z-stack the user has to understand.

## Remix / Merge / Remove
From V5 #018, I kept the quiet-to-loud reveal and one secondary surface, but changed the visual skin to a bright spacious system and removed the extra Blueprints door. From V5 #023, I kept smart resize, ratio detents, focus shift, and a teaching seam. From V5 #035, I borrowed depth polish only: shadow, blur, and subtle tint clarify hierarchy without becoming the navigation model. From V5 #036, I kept the Sites widget as the canonical saved-site and launcher door, but did not copy four corner widgets. I avoided V5 #030 by using one compact capsule instead of a persistent two-row top bar.

## Trade-offs
The top capsule is busier than a pure rail because the current Playground toolbar requirements are explicit, so I made it a single, rounded runtime object instead of spreading controls across rows. The secondary pane pushes the iframe on desktop, but site-heavy and full preview modes keep the WordPress surface credible and large. Mobile uses the same product logic: the rail becomes a compact bottom dock, the pane becomes the same single surface below the iframe, and full preview is still one tap plus Esc.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md`, I kept primary destinations to Sites and Manager, made Settings a deep link into Manager, and kept exports inside Manager actions. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I revised the initial white/blue shell toward a more spacious component system: larger negative space, clearer typographic contrast, soft content-aware tint, and fewer cramped cards. Remaining risk: route forms and the 43-blueprint gallery still create a long pane on mobile, but the iframe remains available through site focus and full preview.

## Feature Coverage
The static mock includes refresh, path input, Playground name, Save, Saved Playgrounds launcher, Site Manager access, Settings access, full preview, all six launch routes with route-specific inputs, featured blueprints, a searchable/filterable 43-blueprint gallery, saved playgrounds, Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`, loading state, active session, launcher/gallery open, save/resume toast, destructive reset confirmation with cancel/final state, and responsive mobile parity.
