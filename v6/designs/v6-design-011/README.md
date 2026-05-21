# V6 Design 011 - Premium Sites Dock

## Thesis
This redesign makes the Sites widget the canonical identity and launch surface. At rest it can collapse to a compact WordPress status card; expanded, the same object becomes the full launcher for saved sites, start routes, imports, and blueprint discovery. A single Site Manager surface shares that dock rather than opening a second drawer, while the live WordPress iframe remains the dominant product surface and can move from balanced, to site focus, to full preview.

## TypeUI Skill Used
I used `v6/style-skills/typeui-premium.md`. It is applied beyond color through Inter for the full hierarchy, JetBrains Mono for labels/code/state pills, the 12/14/16/18/24/30/36 scale, precise 4px and 8px radii, white premium surfaces, subtle blur and quantified elevation, blue/violet accents for active state, green/amber/red semantic states, compact icon buttons, and a 4/8/12/16/24/32 spacing rhythm.

## Remix, Merge, Remove
I kept V5 #036's Sites widget interaction but reduced it to one widget rather than four corners. I applied the V5 #018 quiet-to-loud lesson by rendering the dock as a compact status widget that expands into one reliable surface; blueprints are folded into Sites, not given their own rail door. I kept V5 #023's smart resize idea with labeled detents and a visible ratio gauge, including an almost-iframe-only compact state. I borrowed polish from V5 #035 as surface treatment only: blur, elevation, and tint clarify hierarchy but are not the navigation model. I avoided V5 #030's persistent two-row top bar; identity, path, save, Sites, tools, actions, and preview live in one command capsule.

## Feature Coverage
The mock preserves refresh, address/path input, Playground name, Save, Saved Playgrounds launcher, Site Manager/tools access, and settings access. Sites contains Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, featured blueprints, a full 43-blueprint gallery with search and category filters, and Your Playgrounds. Site Manager contains Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip`. The page includes active session, booting/loading, launcher/gallery open, save/resume consequence, destructive Apply & Reset confirmation, route-specific inputs, toast notification, and full preview mode.

## Trade-Offs
The expanded Sites dock takes real horizontal space, so the ratio gauge is explicit and reversible instead of pretending the iframe is always full width. On mobile, the same dock becomes a bottom sheet because a side dock would make the WordPress page too narrow at 390px. Save appears in the toolbar and in the unsaved notice; both point to the same state transition, but a strict one-door reviewer may still count that as duplication. The design uses a small amount of blur for premium hierarchy, but all controls remain on opaque enough surfaces for contrast.

## Critical Pass And Revision Note
After rereading `v6/INSIGHTS.md`, I removed a separate Blueprints destination and made the Sites widget own saved sites, launch routes, imports, featured blueprints, and the gallery. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I tightened the premium system through type, spacing, radius, elevation, state language, and icon button shape rather than only recoloring a previous layout. The remaining weakness is density in the Tools tab on narrow screens; the mobile version preserves parity by turning tool labels into icons and stacking editor panes.

## Self-Critique
Affordance count at idle: 7 clusters in the command capsule plus the Sites widget surface. The design is intentionally slightly more present than a pure rail because the assigned direction requires the Sites widget to carry status and launch consequence.

Iframe primary + fullscreen toggle: 5/5. The WordPress iframe is central, ratio states are visible, and full preview hides all chrome with an Esc exit pill.

One door per feature: 4/5. Sites owns launch/resume/gallery/import. Site Manager owns settings/files/blueprint/database/logs/export. Save has toolbar and notice entry points that update one state.

One secondary surface: 5/5. The dock swaps Sites and Site Manager content; no separate drawer or second panel competes with it.

Interaction clarity: 5/5. The compact-to-expanded Sites widget, active dock switch, ratio gauge, detent buttons, boot card, toast, and preview exit state are all visible in the UI.
