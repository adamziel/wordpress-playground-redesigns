# 018 — Quiet-rail-to-loud

## Thesis
The entire persistent chrome is a 56-pixel monochrome rail on the left, holding three icons (Sites, Site Manager, Blueprints) plus a logo, a help button and an avatar. Until you touch it, the rail is silent — no labels, no badges, no color — and the iframe gets 1384 of 1440 desktop pixels. Click an icon and a single 320-pixel pane swings open *between* the rail and the iframe. The pane is loud: solid surface, white-on-black text, a colored top edge, a saturated rail icon. Click X (or the icon again) and it retracts. The pane is always the same width, always in the same place; only its content changes. That is the whole IA.

## What I merged / removed and why
The three settings entry points (popover, sidebar tab, info notice) collapse to **one**: the Site Manager pane's Settings tab. The info notice still appears, but only there. The five Site-Manager tabs (Settings, Files, Blueprint, Database, Logs) live behind a single 5-way segmented control inside the pane — the secondary surface swaps content the way iPad multitasking does. The "Saved Playgrounds" launcher and the six "Start a new Playground" sources fold into one Sites pane with a 3-way sub-segmented control (Yours / New / Import), because review 002 warned against stacking three sections in one drawer — they're proper segments now. The 43-blueprint gallery isn't a separate sub-screen any more: it *is* the Blueprints pane, with search + 10 category chips + scrollable list. Apply+Reset is no longer a small red banner; it's a typed-phrase confirm sheet (you must type the playground name). The top strip carries the URL, the editable playground name, and the save-state pill in one 32-pixel capsule à la DevTools — but the address bar is the ONLY URL-shaped door in the design (no separate "Open URL" affordance). Export to GitHub PR + Download .zip live in one place — the More kebab on the topstrip, shown opened in panel E.

## Trade-offs
A 56px rail can only hold three primary doors comfortably; everything else has to live inside those panes. That means power users who flip frequently between Files and Database pay one extra click (Files tab → Database tab via the 5-way segmented control). I accept this because the alternative — surfacing all five Site-Manager tabs on the rail — would blow the 8-affordance idle budget and dilute the "quiet" thesis. The pane is fixed at 320px and doesn't resize; that's restraint, not laziness. Glass appears nowhere in this design — the rail and pane are both solid dark surfaces — because glass without an ambient-color purpose is forbidden in v5 and the quiet-to-loud contrast reads more clearly with opaque chrome. Mobile keeps the same three-door metaphor: the rail becomes a 64px bottom bar; the pane becomes a sheet that rises to 62% of the iframe area, never covering the URL or letting the iframe drop below 38% of screen.

## Lessons applied from earlier v5 reviews
- **Review 001 lesson** — "show the morph as a first-class state." Panel A renders the transition in three explicit frames: A1 quiet, A2 peek (hover tooltip), A3 loud. The expansion gesture is annotated, not hidden.
- **Review 002 lesson** — "don't ship three drawers stacked in one pane." The Sites pane uses a proper sub-segmented control (Yours / New / Import) instead of three scrollable sections; the Site Manager pane uses a 5-way segmented control.
- **Review 006 lesson** — "don't import a clever idea from a different direction that undermines your restraint." I resisted adding a spatial Figma-style dock, a Cmd+K palette, or a frosted Control Center widget; this design is literally one rail, one pane, one strip. The five Site-Manager tabs are all rendered at full fidelity (D1–D5) so the critic can see Database and Files aren't stubs.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (8 of 8 used; counted in panel B; logo/avatar are decorative)
[x] iframe primary + fullscreen toggle?     Score: 4/5  (iframe gets ~96% of width at idle; F3 demonstrates true fullscreen with Esc-to-exit pill)
[x] One door per feature (no duplicates)?   Score: 5/5  (settings unified to Site Manager → Settings; URL bar is the only navigation entry; exports live only in the More menu)
[x] One secondary surface (not many)?       Score: 5/5  (literally one 320px pane that always opens in the same place; segmented controls swap content)
[x] Direction expressed strongly?           Score: 5/5  (quiet=monochrome rail; loud=saturated pane with colored top edge and active-icon glow; the transition is a first-class state)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same three doors, same one-pane metaphor rotated 90°; rail becomes bottom bar; iframe never drops below 38% of screen)
[x] Critique pass on glass/ambient use?     Score: 4/5  (no glass surfaces — both rail and pane are solid; the only translucent element is the fullscreen-exit pill; restraint earns its keep here)
```
