# Critic Round 020 - V6 Playground Redesign Audit

## Scope

This audit covers the completed V6 folders present under `v6/designs/` at review time: 001-007, 009-017, 019, 020, 022-024. Designs 008, 018, and 021 are not present. I read the V6 brief, insights, style-variation system, the named V5 source designs and reviews, all V6 READMEs/meta files, the current HTML, `v6/data/designs.json`, and the existing `critic-round-010.md`. I also rendered desktop `1440x900` and mobile `390x844` screenshots locally.

The bar should remain high. V6 is not a broad metaphor round. It is a refinement round around four proven behaviors: quiet-rail IA without the quiet-rail skin, smart resize, Sites as the canonical saved/launch/blueprint door, and depth as polish rather than a navigation model. The disliked persistent two-row top bar should stay out.

## Verdict

The batch is stronger than round 010 because the current completed set now consistently uses an actual iframe container for the WordPress site, has fuller route-specific forms, and more designs show reset consequences, save consequences, toasts, booting states, and mobile CSS. The median design now preserves the Playground feature inventory. That is progress.

The remaining problem is sameness and first-glance loudness. Too many designs claim quiet-to-loud but ship with the secondary pane open, route cards visible, and a toolbar plus rail plus pane controls all visible at once. That makes the iframe usable, but it often fails the spirit of restraint. V6 workers also converged on a common shell: top capsule, left rail or widget, side pane, ratio gauge, white cards, blue/purple accents, and a srcdoc WordPress mock. The best designs prove the product map; the weaker designs are feature-complete but feel like variations of the same component grammar.

## Benchmarks

### Strongest Overall: v6-design-023 - Premium Depth Surface

This is the cleanest current benchmark. It starts from a genuinely quiet iframe-first desktop state: slim rail, single command capsule, visible Save/settings/focus, and no default launch drawer shouting over the site. Sites and Manager are distinct primary doors; focus preview is a real state; the pane can collapse to an iframe-dominant mode; mobile keeps the site usable with a bottom rail and a strong preview state.

It also checks the feature inventory thoroughly: all six start routes have concrete inputs, ZIP import is represented as a dropzone/import state, the full blueprint gallery has search/categories, Site Manager covers Settings/Files/Blueprint/Database/Logs plus WP Admin/Homepage/export/download, reset uses a typed gate with cancel and ready state, and save/resume/booting/toast states are wired. Premium is applied as surface discipline, density, elevation, and state polish rather than only a blue accent.

### Best Quiet Rail Plus Product Ownership: v6-design-005 - Rail Smart Resize

This remains the best direct descendant of V5 #018 plus #023. Two canonical rail doors, Sites and Site Manager, are the right model. The rail avoids a separate Blueprints door, settings lives in Manager, exports live in Manager actions, and the ratio gauge makes the iframe/work-surface trade visible.

Its weakness is still first-glance loudness: the Sites pane is open and route cards dominate the default desktop view. ZIP import is a text field instead of a visible file/drop action. Still, the IA is the clearest template for future quiet-rail workers.

### Best Corporate/Registry Refinement: v6-design-017 - Corporate Quiet Rail Registry

Design 017 is a strong later-batch entry because it makes route-specific launch forms real, uses a warm corporate rail rather than copying 018's dark skin, and gives Sites Registry a clear consequence model. The screenshots show credible desktop and mobile behavior, with the iframe still present while the registry is open.

The strict issue is duplicate-looking access: top toolbar Tools/Settings plus rail Sites/Manager/Settings makes the first glance busier than the README's two-destination story. Future corporate entries should keep its route form quality but reduce visible primary doors.

### Best Quiet Iframe State: v6-design-022 - Mono Slot Resize

Design 022 proves the value of an actual quiet/default state. Desktop and mobile both give the iframe nearly the whole surface, with the saved-site widget and top controls acting as compact chrome. The mono style is distinctive and coherent for logs, code, route fields, and ratio labels.

The risk is that the neon/terminal language can pull Playground toward a different developer-tool category. It works here because the WordPress document remains visually dominant. Future mono entries should keep that restraint and avoid making the chrome the hero.

### Strongest New Style System Candidate: v6-design-020 - Bento Depth Workbench

Design 020 is the clearest bento translation: warm peach surfaces, modular functional blocks, compact grids, and a self-teaching preview/workbench ratio. It covers route inputs, manager tools, save/reset/final states, and uses depth as polish only.

It is not the overall benchmark because the default state is pane-heavy and mobile shows mild horizontal pressure in the top controls. But it is the right direction for style variety: it changes grouping and surface rhythm, not just font and accent color.

### Best Editorial Differentiation: v6-design-006 - Editorial Sites Resize

Design 006 still has the strongest editorial identity: Gelasio/Ubuntu Mono, rules, dense captions, and document-like grouping. It also keeps Sites and Workbench ownership understandable. Its weakness is persistent chrome height and mobile stacking: the design can start to resemble the disliked "stacked top chrome" failure when controls wrap.

## Solid But Not Benchmarks

v6-design-002 is a strong smart-resize/product-coverage implementation, but now reads as the batch's baseline: white surface, blue action, left pane, seam gauge, route cards. Keep its interaction proof, not its visual sameness.

v6-design-011 is a credible premium Sites dock with good save/boot states and mobile behavior. It is slightly too present at rest and has repeated Sites/Tools switches in several locations, but the product coverage is solid.

v6-design-012 has useful depth polish and visible resize teaching, but it carries too many direct rail entries: Sites, Tools, Files, Logs, Focus, plus command buttons for Site Manager and Settings. That dilutes the one-door lesson.

v6-design-014 is competent and complete, but it is too close to 002: clean white smart-resize shell, blue/violet actions, side surface, route cards, gauge. It is a good implementation baseline rather than a new design direction.

v6-design-015 has refined polish, but the rail exposes Sites, Tools, Setup, and Focus while the topbar also exposes Manager. It risks recreating the current product's duplicate entry points with nicer surfaces.

v6-design-016 has strong spacious structure and credible mobile, but the rail includes Site Manager, Files, Logs, Settings, and Focus. Files/Logs as primary rail buttons undermine the V6 instruction to reduce doors, even if they deep-link into the same Manager pane.

v6-design-019 applies Material reasonably with tonal surfaces and elevation, but the internal sheet splits into Sites, Start, Blueprints, and Tools tabs. That partially reverses the V6 consolidation of launch/saved/blueprint discovery into one Sites door. Its mobile screenshot also shows right-side clipping in the sheet controls.

v6-design-024 has a strong contemporary/magenta identity and concrete route forms, but mobile has clear horizontal overflow: the command capsule and panel content extend beyond the 390px viewport. It should not move forward until the mobile layout is repaired.

## Weak Designs Or Patterns

### Too Many Visible Primary Doors

The biggest repeated regression is not missing features; it is over-exposed navigation. Designs 007, 012, 015, 016, 017, and 019 all add direct buttons for things that should be destinations inside Sites or Manager. The weak pattern is:

- Sites plus Start plus Blueprints as separate visible destinations.
- Manager plus Settings plus Files/Logs as separate visible destinations.
- Export promoted to a primary rail/tool door instead of staying in Manager actions.
- Topbar shortcut plus rail shortcut plus pane tab for the same setting.

Deep links are acceptable only when the UI makes the canonical home unmistakable. Several entries say "this routes to the same surface" in README, but the visible UI still asks the user to choose between too many doors.

### Quiet-To-Loud Claimed, Loud State Shipped

Designs 001, 004, 005, 006, 007, 011, 012, 014, 016, 017, 019, 020, and 024 commonly open a Sites/launcher/workbench surface by default. That helps feature reviewers see route forms, but it weakens the first-touch Playground promise: the user should land on a usable WordPress site, then ask for chrome.

Future workers should render both states clearly in the same file: default quiet active site, then launcher/gallery open. Do not make the gallery-open state masquerade as idle.

### Route Inputs Are Better, ZIP Still Uneven

Most later designs now include real fields for WordPress PR, Gutenberg PR/branch, GitHub repo/type, Blueprint URL, and ZIP import. Strong examples: 017, 019, 022, 023, 024. Weak examples remain: 005, 010, 015, and 016 sometimes represent ZIP as a text value or generic label instead of a file/drop/upload state. ZIP import is an import flow, not a typed path.

### Reset Flow Often Shows Confirmation But Not Consequence

The strongest reset flows show destructive copy, cancel, disabled/gated final action, then booting/ready/toast final state. Designs 012, 013, 023, 024, and 020 are good here. Some designs show the phrase UI but not a convincingly disabled-to-ready action or final reset-ready result. The brief needs consequence clarity, not just a red button with scary words.

### Mobile Overflow And Cropping

The mobile screenshots reveal a real split. 005, 011, 013, 017, 022, and 023 are credible at 390px. 024 visibly overflows horizontally. 019 clips sheet controls on the right. 020 is close but the top command area presses against the right edge. 006 and 012 are usable but chrome-heavy. Future workers must inspect actual 390px screenshots, not only rely on media queries.

## Applying The V5 Feedback

### Quiet-Rail IA/Interactions Yes, Quiet-Rail Visual No

The batch learned the high-level lesson. 005, 017, 020, 022, and 023 are good examples of keeping a quiet persistent orientation surface without copying the dark monochrome V5 #018 visual. The best versions limit the primary doors to Sites and Manager plus focus. The weaker versions keep adding "Files", "Logs", "Settings", "Start", or "Blueprints" to the persistent layer.

### Smart-Resize Interaction And Design Yes

This is the strongest V6 inheritance. Almost every design now has a ratio gauge, detents, full preview, or focus mode. The benchmark is no longer "does a gauge exist?" The benchmark is whether the gauge changes a useful layout and whether the iframe can be used at a strong size. 023, 022, 005, 002, and 020 pass that bar. Some designs use the gauge as decoration while the pane remains the default dominant object.

### Two-Row Top Bar No

No current design directly copies V5 #030 as two persistent horizontal rows. Good. The failure mode is indirect: mobile toolbars wrap into stacked chrome, or topbar plus rail plus pane header acts like a three-row command system. 006, 012, 016, 017, 019, 020, and 024 should be watched here. A single command capsule is acceptable only if it remains one row at mobile sizes or collapses aggressively.

### Three-Layer Depth Visual Yes, Depth Interactions No

This lesson is mostly applied correctly. 004, 012, 015, 020, and 023 use blur/elevation/tint as hierarchy polish instead of asking users to navigate an abstract z-stack. None of the stronger entries revives V5 #035's depth-as-IA problem. The remaining risk is visual overuse: repeated translucent white panes over the same WordPress srcdoc start to feel generic rather than nuanced.

### Sites Widget Interaction Yes

The Sites widget lesson is now deeply absorbed. Nearly every design understands that saved identity, saved playgrounds, start routes, ZIP import, and blueprint discovery should live together. The best production versions are 023, 005, 017, 020, and 011. The weaker version is 019, where Sites, Start, and Blueprints become separate sheet tabs and make the user re-choose within what should be one canonical door.

## Product Coverage

Feature preservation is now generally strong:

- Top toolbar/control inventory: refresh, address/path, name/status, Save, saved launcher access, Manager/tools access, settings route, focus/fullscreen.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`.
- Blueprints: featured items, larger/full 43 gallery, search, and category filters.
- Saved sites: current unsaved state plus 2-4 realistic saved examples in most entries.
- Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage.
- Actions: Export to GitHub PR and Download `.zip`.
- States: active session, booting/loading, launcher/gallery open, save/resume, destructive reset confirm/cancel/final, toast.

Remaining coverage cautions:

- Some files expose extra database/download/adminer-like actions that read close to new product surface. Do not expand database tooling beyond the current early-access browser concept.
- Some "Settings shortcut opens Manager Settings" implementations are defensible, but only if the visible UI treats Manager as the canonical home.
- Full-size iframe mode must not be only a README promise. 023, 022, 013, 012, and 005 prove it visually. Others need a stronger quiet/focus state in the first viewport.

## Live Site Usability

All current completed designs now include an iframe element. That fixes the hard failure noted in round 010. Most use `srcdoc` to mock the WordPress site rather than a remote Playground instance, which is acceptable for a static wireframe if the iframe remains the central live-site frame.

The stronger designs make the site usable at full size or near-full size:

- 023 starts quiet and gives the iframe almost the whole screen.
- 022 makes the iframe the actual hero on desktop and mobile.
- 005 and 017 keep the iframe usable even with Sites open and provide full preview.
- 013 and 012 have explicit fullscreen classes and Esc exits.

The weaker designs make the iframe feel secondary by default because the launcher/workbench pane is always open and heavy. The test should be: can a first-time anonymous visitor immediately browse WordPress, and can a returning developer get to a full-size site without hunting? If the answer depends on closing a dense launcher first, the design is not yet iframe-primary.

## Visual System Audit

TypeUI usage is visible but uneven. Workers name the assigned skill and often apply fonts, radii, colors, and spacing. The stronger entries translate the skill into component behavior:

- 006 uses Editorial as rules, captions, dense document sections, and black/white hierarchy.
- 020 uses Bento as modular work blocks and warm grouped surfaces.
- 022 uses Mono as a compact instrument shell without hiding WordPress.
- 023 uses Premium as measured polish, fewer visible surfaces, and controlled elevation.
- 017 uses Corporate through structured registry forms and enterprise grouping.

The repeated sameness is still obvious:

- Top command capsule with path input, Save, Settings, Focus.
- Rail or widget on one side.
- Side pane with route cards.
- Ratio gauge/seam.
- White or near-white cards, blue/violet action color, gray borders.
- The same WordPress srcdoc page with the green "W" ring.

Future workers must vary the system at the layout and component level. Paper should feel like documents and provenance, not just beige cards. Material should use stronger state/elevation rules, not just purple chips. Bento should use modular information blocks with clear density choices. Premium should subtract controls. Corporate should organize workflows like a serious operational tool. Mono should serve logs/code without becoming a terminal app. Contemporary should be bold without breaking mobile.

## Repeated Guidance For The Next Batch

1. Keep primary persistent destinations to Sites, Manager, and Focus unless the design has a very strong reason. Settings, Files, Logs, Blueprint editor, Database, WP Admin, Homepage, Export, and Download belong inside Manager or as clear deep links into it.

2. Show the quiet active-site state as a first-class state. The launcher-open state is required, but it is not idle.

3. Make Sites the canonical door for saved identity, resume, all six start routes, ZIP import, featured blueprints, and the full gallery. Do not split Start and Blueprints away from Sites.

4. Treat the ZIP route as an upload/drop/browse state. A text field containing `site.zip` is not enough.

5. Reset flow needs destructive consequence, cancel, gated final action, and final boot/ready/toast state.

6. Save can appear in a toolbar and in the unsaved notice only if the UI makes them the same state transition. Avoid two visually unrelated Save doors.

7. Do real mobile screenshot review at `390x844`. Fix horizontal overflow before calling a design responsive.

8. Avoid wrapping one toolbar into two or three persistent mobile rows. Collapse labels, move controls into the single sheet, or prefer focus mode.

9. Use depth as visual hierarchy only. Do not revive z-stack navigation.

10. Push TypeUI beyond color and font. Change density, grouping, control shape, state behavior, and surface model.

11. Do not add product surface to fill space. The current Playground feature set is already enough.

## Current Ranked Shortlist

1. v6-design-023 - strongest overall, best balance of quiet iframe, feature coverage, reset/save states, mobile credibility, and premium polish.
2. v6-design-005 - best quiet rail plus smart resize IA, with a strong Sites/Manager ownership model.
3. v6-design-017 - best corporate registry route-form implementation, despite visible shortcut duplication.
4. v6-design-022 - best quiet iframe-first mono treatment and strongest full-site emphasis.
5. v6-design-020 - best bento/system variation, useful but still pane-heavy by default.
6. v6-design-006 - best editorial differentiation, but mobile/topbar density keeps it below the top tier.
7. v6-design-011 - solid premium Sites dock with good coverage, slightly over-present.
8. v6-design-002 - strong smart-resize baseline, visually too common now.
9. v6-design-013 - complete and energetic, but rail/topbar duplication is visible.
10. v6-design-014 - competent clean implementation, too close to 002.
11. v6-design-015 - polished refined surface, but too many visible shortcuts.
12. v6-design-016 - good spacious framing, but Files/Logs/Settings as rail buttons are a regression.
13. v6-design-019 - Material treatment is credible, but Sites/Start/Blueprints split weakens the canonical Sites door and mobile clips.
14. v6-design-024 - strong contemporary style and route forms, but mobile overflow is a blocker.
15. v6-design-012 - visually interesting, but too many persistent doors.
16. v6-design-009 - useful paper direction, still too dense and three-door rail is less disciplined.
17. v6-design-004 - good depth/ownership concept, but now surpassed by later entries with stronger iframe/focus proof.
18. v6-design-001 - feature-complete warm rail, but starts too loud and is visually less mature than later rail entries.
19. v6-design-003 - useful one-widget experiment, but the single widget hides too much and the visual system is weaker than later Sites designs.
20. v6-design-007 - feature-rich but still the clearest "too many primary doors" warning.
21. v6-design-010 - distinctive mono smart-resize, but the terminal-heavy shell is less broadly appropriate than 022 and starts too busy.

## Bottom Line

V6 is converging on the right product model: Sites owns saved/start/blueprint/import; Manager owns settings/tools/export; the iframe gets focus modes; smart resize is visible; two-row top bars are mostly gone. The next batch should be less forgiving about visual sameness and visible-button inflation. The target is not "all features shown at once"; it is a calm WordPress site with one reliable way to get loud when the user needs to launch, inspect, reset, save, or export.
