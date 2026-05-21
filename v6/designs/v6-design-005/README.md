# V6 Design 005 - Rail Smart Resize

## Thesis
This design combines quiet rail IA with smart resize by reducing Playground to two canonical doors: Sites and Site Manager. The rail chooses which single secondary surface is visible; the vertical gauge between that surface and the iframe teaches the current ratio and lets the user snap to site focus, balanced, or work focus. The iframe remains the credible center of the app, with a full preview mode that hides chrome and exits with Esc.

## TypeUI Skill Used
I used `v6/style-skills/typeui-corporate.md` as the style source. It is applied through Poppins headings, Open Sans body text, IBM Plex Mono labels and code, a blue/violet enterprise accent system, 4px and 8px radii, crisp borders, white structured surfaces, restrained elevation, and an 8pt spacing rhythm. The result is intentionally product-office rather than glassy or editorial.

## Remix, Merge, Remove
I kept the quiet-to-loud rail interaction from V5 #018 but changed the skin and reduced the rail to two real doors. I kept the ratio gauge and focus-shift idea from V5 #023, adding labeled detents so the resize behavior is visible without a tutorial. I borrowed only the polished elevation discipline from V5 #035, not depth as navigation. I used the Sites-widget lesson from V5 #036 by making Sites the single place for saved identity, new starts, imports, resume, and blueprint discovery. I avoided V5 #030's persistent two-row top bar; identity, path, save, and preview live in one command bar while destination choice lives in the rail.

## One-Door Map
Sites: rail button only. It contains saved identity, Save consequence, Your Playgrounds, Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip, featured blueprints, full 43-blueprint gallery, search, and categories.

Site Manager: rail button only. It contains Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, and the Additional actions menu.

Settings: Site Manager -> Settings only. The command bar does not expose a separate gear.

Exports: Site Manager -> Additional actions only, showing Export to GitHub PR and Download .zip.

Saved identity: one status capsule in the command bar, with the same Save action mirrored inside the Sites save notice because both update the same Sites-owned state.

Fullscreen/focus: one Full preview button plus the rail preview icon, both entering the same iframe-only state; Esc exits.

## Trade-Offs
The rail means the current top bar inventory is redistributed: the command bar owns path, refresh, identity, save, and preview, while Sites and Manager access move to the rail. This is stricter one-door IA but less literal than the current product's all-in-one horizontal toolbar. The secondary surface is always present on desktop, so the iframe is not full width unless users choose Site focus or Full preview. That is deliberate: the resize gauge makes the trade visible and reversible.

## Critical Pass And Revision Note
After checking `v6/INSIGHTS.md`, I revised the concept to remove a separate Blueprints rail item and folded all blueprint discovery into Sites. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I tightened the corporate treatment beyond color by adding the specified type stack, 8pt spacing, compact radii, visible borders, and enterprise action grouping. The remaining weakness is that Save appears in the command bar and in the Sites notice; I treat the notice button as the same Sites-owned state transition, but a strict critic may still see it as a duplicate affordance.

## Feature Coverage
The static mock includes refresh, address/path input, playground name, save, saved playgrounds launcher, site manager/tools, settings, route forms for PR/GitHub/Blueprint URL/ZIP, featured blueprints, full gallery with filters/search, saved sessions, Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download .zip, loading state, active session, save/resume toast, destructive reset confirm/cancel/final state, and fullscreen preview.
