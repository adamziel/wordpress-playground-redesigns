# Critic Round 030 - V6 Playground Redesign Audit

## Scope

This audit covers the completed V6 designs present under `v6/designs/`: 001 through 030. I read the current `DESIGN_BRIEF.md`, V6 insights and style system, the named V5 source designs and reviews, the TypeUI style skill files, `v6/data/designs.json`, the existing V6 audits, and the current HTML/README/meta files for the completed V6 submissions. I also rendered the late and previously missing designs at `1440x900` and `390x844` to check first-glance chrome, iframe size, mobile overflow, and whether the claimed quiet/focus states are actually visible.

The bar stays high. V6 is a refinement round around specific V5 feedback, not a request for more product surface. The strongest entries preserve the existing Playground inventory while making the live WordPress iframe feel like the thing being used, not a preview thumbnail behind a launcher.

## Verdict

V6 now mostly understands the product map. The batch has converged on the right ownership model: Sites owns saved identity, saved playgrounds, all launch routes, import, and blueprint discovery; Site Manager owns settings, files, blueprint authoring, database, logs, WP Admin/Homepage, and export/download. The hard iframe failure from early entries has largely been corrected: every completed design now contains an actual `iframe`, usually with `srcdoc` for the static mock.

The median design is still too loud at first glance. Many entries claim quiet-to-loud but load with a launcher or workbench already open, so a first-touch user sees route cards, tabs, gauges, and manager controls before they can simply browse WordPress. The live site is present, but not always psychologically primary.

The second persistent issue is sameness. The batch overuses a top capsule, left rail or widget, side pane, ratio seam, cards, blue/violet action color, and the same WordPress `srcdoc` composition. The TypeUI styles are named and partially applied, but too often they stop at fonts, accent colors, and surface tint. The best entries change density, grouping, state behavior, and component shape.

The disliked persistent two-row top bar is mostly avoided, but it reappears indirectly when one command capsule plus rail plus pane header plus mobile wrapping behaves like a multi-row command system. V6 should not congratulate itself for avoiding the literal #030 pattern while recreating its visible-button cost.

## Benchmarks

### Strongest Overall: v6-design-023 - Premium Depth Surface

This remains the best benchmark after the full 30-design set. It starts from a genuinely quiet iframe-first state, has a slim rail and command capsule, gives Sites and Manager clear ownership, supports a strong focus preview, and handles mobile credibly. The feature inventory is thorough: concrete route inputs, `.zip` import, gallery search/categories, all manager tabs, WP Admin/Homepage, export/download, save/resume, booting, toast, and destructive reset with a gated final action.

Its lesson for future workers is subtraction. Premium works here because it reduces visual noise and uses depth as polish, not because it adds luxury decoration.

### Best Late-Batch Quiet Rail: v6-design-029 - Rail Ratio Console

029 is the strongest late entry. It opens with the pane collapsed and the iframe dominant, uses a real two-door rail, includes a `.zip` dropzone, route-specific forms, gated reset, cancel/final boot state, and a near-full preview detent before fullscreen. Its corporate style is more than color: ledger panels, controlled form rows, metrics, tables, and mono labels make it feel like an operational tool.

The weakness is shortcut duplication. The top toolbar still exposes Sites, Manager, and Settings while the rail also owns Sites and Manager. The README frames these as deep links, but visually they are still extra doors. Future corporate workers should keep 029's form quality and quiet default while cutting the duplicate top actions.

### Best Quiet Rail Skin Update: v6-design-025 - Quiet Rail Warm Product Skin

025 is the clearest answer to "quiet-rail IA/interactions yes, quiet-rail visual no." It keeps two persistent rail doors, uses the professional yellow/black system without copying the V5 dark rail, starts quiet with the pane closed, and makes the iframe large. It covers route inputs, save consequences, reset, export/download, manager tabs, toast, and mobile parity.

The main issue is that the top toolbar still repeats Sites, Manager, and Settings. On desktop the duplication is visible; on mobile those buttons are mostly hidden, which makes the small-screen version calmer than the desktop. Future rail designs should let the rail be the door and reserve the top bar for runtime controls.

### Best Strict One-Door Bento: v6-design-008 - Bento One-Door Playground

008 is one of the cleanest ownership maps. The top capsule is session-only, the rail has Sites and Manager, and Settings does not get a separate gear. The iframe is real and dominant at rest. Bento is applied as modular grouping and warm block rhythm, not just a peach tint.

Its trade-off is that the dark frame and left rail still feel close to the quiet-rail skin V6 was supposed to move away from. It is structurally excellent, but future Bento entries should keep the one-door rigor while finding a less dark-frame default.

### Best Sites Widget Refinement: v6-design-027 - Sites Passport

027 uses the Sites widget well: compact saved identity first, launcher/gallery/import inside Sites, and one shared secondary surface for Manager work. Desktop keeps the widget visible without making four corners. Mobile turns the same widget into a bottom passport and avoids a hamburger fallback. The design now uses an iframe and explicit `.zip` upload/drop behavior.

The risk is overloading the widget. It is calmer than four corner widgets, but Site Manager still needs to remain discoverable as its own named destination. 027 handles that better than 003, but future widget entries should be careful not to make "Sites" mean "the whole application."

### Best Distinctive System: v6-design-022 - Mono Slot Resize

022 is the strongest mono treatment because the WordPress iframe stays the hero. The neon/terminal vocabulary supports logs, code, paths, and ratios without turning Playground into a terminal-first product. It also has one of the best quiet iframe-first states on both desktop and mobile.

The caution is category drift: Mono can easily become a different developer tool. Keep the WordPress document dominant and use mono styling for instrumentation, not as an excuse to make all UI look like a console.

### Best Bento Variation: v6-design-020 - Bento Depth Workbench

020 is still the best example of TypeUI Bento changing structure: modular work blocks, warm surfaces, compact groupings, and depth as hierarchy. It is feature-complete and better differentiated than most white/blue smart-resize entries.

It remains pane-heavy by default. The design is useful as a style-system benchmark, not as the best first-touch iframe benchmark.

### Best Earlier IA Template: v6-design-005 - Rail Smart Resize

005 remains the cleanest early quiet-rail plus smart-resize template: two rail doors, one secondary surface, ratio gauge, Sites/Manager ownership, and complete feature coverage. Later entries surpassed its visual polish and quiet default, but future workers should still study its ownership discipline.

Its weak points have not aged away: it starts loud with Sites open, ZIP import is weaker than a true upload/dropzone, and database actions drift beyond the current brief.

## Solid But Not Benchmarks

v6-design-002 is still the canonical smart-resize baseline: complete, understandable, and well instrumented. It is no longer a top benchmark because the Clean white/blue pane/gauge/card grammar became the batch default.

v6-design-006 has the strongest editorial identity in the early set, but persistent chrome height and mobile stacking still flirt with the two-row-top-bar failure.

v6-design-017 has excellent corporate route-form quality and a useful Registry model, but its visible top/rail shortcuts make the first glance busier than its one-door story.

v6-design-018 translates Editorial into a dense production desk and has good route/state coverage. It is honest smart resize, but the desktop and mobile default are both desk-heavy, so iframe primacy depends on the user understanding the ratio system quickly.

v6-design-021 is a credible Paper translation with tactile surfaces and real route/dropzone states. It is visually differentiated, but it starts with the pane open, mobile is cramped, and the top command area feels heavier than the paper premise needs.

v6-design-026 is a competent Clean smart-resize implementation with strong detents and preview mode. It is too close to 002 and 014 visually, and it ships with the Sites pane open by default.

v6-design-028 is spacious and polished, with depth used correctly as hierarchy. It is also pane-open and top-capsule-heavy at first glance, so it reads as a comfortable console more than an iframe-first workspace.

## Weak Designs Or Patterns

### Too Many Primary Doors

This is the most repeated regression. Designs 007, 012, 015, 016, 017, 019, 025, 026, 028, and 029 all show some version of "canonical two doors" in the README while exposing extra top or rail buttons that look like independent destinations.

The weak pattern is:

- Sites plus Start plus Blueprints as separate visible choices.
- Manager plus Settings plus Files/Logs as visible primary choices.
- Export promoted to a rail/tool room instead of staying in Manager actions.
- Settings appearing as top gear plus Manager tab plus pane route.

Deep links are acceptable only when the visual hierarchy makes the canonical home unmistakable. A README explanation does not solve a UI that asks the user to choose among too many doors.

### Quiet-To-Loud Claimed, Loud State Shipped

This problem survived into the late batch. 005, 006, 018, 020, 021, 026, and 028 all default to a pane or desk that is already doing a lot. That helps the reviewer see coverage, but it undermines the first-touch flow from the brief: anonymous users should land on a usable WordPress site and then open chrome when needed.

Strong quiet defaults: 023, 022, 025, 027, 029, and 008. These should be the model. The launcher/gallery-open state is required, but it is not the same thing as idle.

### Persistent Two-Row Top Bar Avoided Literally, Recreated Indirectly

No V6 design simply copies V5 #030 as two always-visible horizontal rows. Good. The weaker recurrence is indirect:

- A single topbar wraps into two persistent mobile rows.
- A top command row plus rail plus pane header acts like a three-level command system.
- Mobile hides labels but leaves many small icon targets with unclear ownership.

006, 018, 021, 026, 028, 029, and 030 should be watched here. 030 is the clearest late failure: the desktop command layer floats over and obscures the WordPress page, and the mobile screenshot shows horizontal overflow/clipping around the command row and iframe.

### Route Inputs Improved, ZIP Is Now Mostly Fixed

The early audit correctly called out weak ZIP handling. The late designs mostly fix it: 021, 025, 027, 029, and 030 use a visible upload/dropzone or clear import state. Future workers should keep that. A `.zip` route should not look like another text URL field.

Route-specific state is strongest in 017, 021, 023, 025, 027, 029, and 030: PR number/URL, Gutenberg PR/branch/release, GitHub owner/repo/type/path, Blueprint URL, and ZIP upload are all concrete enough to evaluate. Weaker entries label the routes but do not make the input modes feel different.

### Reset Flow Often Stops At The Warning

The best reset flows show destructive consequence, cancel, gated final action, booting, and ready/toast result. 020, 021, 023, 024, 027, 029, and 030 are stronger here. Several other entries show a typed phrase or modal but do not prove disabled-to-enabled behavior or the final state clearly.

The bar is not "red button exists." The bar is "the user understands what will be wiped, can cancel, must intentionally confirm, and sees the reset complete."

### Mobile Credibility Is Still Uneven

Good mobile direction appears in 022, 023, 025, 027, and 029. These designs compress chrome, keep the iframe visible, and preserve the same product logic.

Weak mobile patterns:

- 030 has obvious horizontal overflow and command clipping.
- 021 is usable but cramped; the top command field and bottom sheet leave little room for the WordPress page.
- 028 preserves logic but opens with a large pane, making mobile feel launcher-first.
- 018 keeps the desktop desk metaphor but at 390px the page becomes a stacked document plus iframe, not a calm site-first start.
- 026 is functional, but the first viewport is a control-heavy split with Sites open.

Every future mobile pass should be judged by three visible states: quiet active site, Sites open, Manager open. If the quiet state is not visibly usable at 390px, the design has not passed.

### Extra Database Surface Creeps In

Many designs include `Download database.sqlite`, `Open Adminer`, and `Open phpMyAdmin`. The current brief only requires an early-access SQLite-backed database browser with the GitHub issue notice. Extra database tooling reads like new product surface and should not be used to make the Database tab feel richer. Keep the browser credible, but do not expand the product.

## Applying The V5 Feedback

### Quiet-Rail IA/Interactions Yes, Quiet-Rail Visual No

The high-level IA lesson is absorbed. 005, 008, 021, 023, 025, 028, and 029 keep a quiet persistent orientation surface and one reveal pane without copying V5 #018 wholesale.

The best versions are 023, 025, 029, and 008 because they keep the primary doors narrow. The weaker versions add Files, Logs, Settings, Start, Blueprints, or Export as visible persistent destinations. That reopens the exact ambiguity V6 was supposed to close.

### Smart-Resize Interaction And Design Yes

Smart resize is the strongest inheritance. Nearly every design now has a ratio gauge, detents, full preview, or focus mode. The new bar is usefulness, not presence. A gauge should change a meaningful layout and lead to a usable iframe, not merely label a decorative seam.

Best examples: 023, 029, 025, 022, 026, and 005. Weaker examples show the gauge while leaving the pane dominant by default or making the mobile split too shallow for the site.

### Two-Row Top Bar No

The literal disliked model is avoided. The next batch must avoid its functional equivalent: persistent stacked chrome, wrapped mobile command rows, and too many global controls before the user has opened a pane.

### Three-Layer Depth Visual Yes, Depth Interactions No

This lesson is mostly correct. 020, 023, 028, 027, 025, and 021 use elevation, tint, blur, paper texture, or shadow to clarify hierarchy. None of the best designs asks users to navigate an abstract z-stack. That is good.

The risk is that translucent white panes over the same iframe are becoming generic. Depth should be tied to the chosen style system: paper texture in Paper, measured elevation in Material, premium restraint in Premium, modular stacking in Bento. Do not make every depth treatment a frosted side panel.

### Sites Widget Interaction Yes

The Sites widget lesson is deeply absorbed. 023, 027, 025, 029, 020, and 011 are the strongest production-shaped versions. 003 is the purest one-widget experiment but hides too much behind one object. 019 weakens the lesson by splitting Sites, Start, and Blueprints into separate tabs at the same level.

The guidance is precise: Sites should own saved identity, resume, all start routes, import, featured blueprints, and full gallery. It should not become an ambiguous label for every Playground task.

## Product Coverage

Feature preservation is generally strong across the full set:

- Runtime controls: refresh, path/address, name/status, Save, Saved Playgrounds/Sites access, Manager access, settings access, focus/fullscreen.
- Launcher routes: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`.
- Blueprint discovery: featured entries, larger/full gallery, search, and category filters.
- Saved sites: unsaved state plus realistic saved examples in most entries.
- Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage.
- Export: GitHub PR export and Download `.zip`.
- States: active session, booting/loading, launcher/gallery open, save/resume toast, destructive reset confirm/cancel/final, mobile layout.

Remaining coverage cautions:

- Some designs still rely on README promises for final save/reset states more than clearly visible UI.
- Some top settings shortcuts are defensible only as deep links; if they look like separate popovers, they regress.
- Some designs include extra database tooling outside the current inventory.
- Several entries use `srcdoc` iframes, which is acceptable for static wireframes, but the iframe must remain sized and treated like the live WordPress site, not like a decorative screenshot.

## Visual System Audit

TypeUI usage is better in the late batch but still uneven.

Stronger translations:

- 006 and 018 use Editorial through rules, dense captions, serif hierarchy, and document-like composition.
- 020 and 008 use Bento through modular grouping and block rhythm.
- 021 uses Paper through texture, ink rules, and tactile sheets.
- 022 uses Mono through compact instrumentation, code/log affordances, and strong iframe restraint.
- 023 uses Premium through subtraction, controlled elevation, and fewer visible controls.
- 029 and 017 use Corporate through structured forms, ledgers, and enterprise density.

Repeated sameness:

- Top command capsule with address, Save, Settings, Focus.
- Left rail or compact widget.
- Side pane with route cards.
- Ratio seam with pills or dots.
- White/near-white cards, gray borders, blue/violet actions.
- The same WordPress `srcdoc` page with the oversized green mark.

Future workers should vary component systems, not just palettes. Clean should be materially cleaner than the baseline, not another white/blue card pane. Spacious should create breathing room without turning into a giant launcher. Material should use clear elevation and state mechanics. Paper should feel like provenance and documents. Editorial should stay scannable for developer tools. Corporate should reduce ambiguity, not add enterprise button density. Premium should subtract. Mono should support logs/code while keeping WordPress visually primary.

## Concrete Guidance For Future Workers

1. Start from a quiet active WordPress iframe. Then show Sites open and Manager open as separate states.

2. Keep persistent destinations to Sites, Manager, and Focus unless the design has an exceptional reason. Put Settings, Files, Logs, Blueprint editor, Database, WP Admin, Homepage, Export, and Download inside Manager or make them unmistakable deep links into Manager.

3. Make Sites the canonical home for saved identity, resume, all six launch routes, ZIP import, featured blueprints, and full gallery. Do not split Start and Blueprints into separate primary doors.

4. Preserve route-specific input states. PR, Gutenberg, GitHub, Blueprint URL, and ZIP should not all look like the same generic text field.

5. Treat Save as one state transition. Notices can explain consequence, but do not make Save look like unrelated toolbar, pane, and widget actions.

6. Reset must show consequence, cancel, gated final action, booting, and a ready/toast result.

7. Give the iframe a near-full and full-size route. Smart resize is useful only if WordPress can actually be used at a strong size on desktop and mobile.

8. Check real `390x844` screenshots. Do not accept clipped command rows, horizontal overflow, or a mobile state where the iframe is only a background strip.

9. Avoid functional two-row chrome. A topbar that wraps, plus a rail, plus a pane header is still too much visible control.

10. Push TypeUI at the component-system level: layout, density, grouping, control shape, elevation, and state language.

11. Do not add product surface to make a panel feel complete. The brief already has enough.

## Current Ranked Shortlist

1. v6-design-023 - strongest overall balance of quiet iframe, complete product coverage, focus mode, reset/save states, and premium polish.
2. v6-design-029 - strongest late quiet-rail/corporate entry, excellent route forms and quiet default, with some shortcut duplication.
3. v6-design-025 - best warm professional update of quiet-rail IA, strong iframe default, but top toolbar repeats rail destinations.
4. v6-design-022 - best quiet iframe-first mono treatment.
5. v6-design-008 - cleanest strict one-door Bento/rail map, slightly dark-framed.
6. v6-design-027 - best refined Sites-widget production shape.
7. v6-design-020 - best bento style-system variation, still pane-heavy.
8. v6-design-005 - strongest early quiet-rail/smart-resize IA template.
9. v6-design-017 - best route-form registry detail, too many visible shortcuts.
10. v6-design-026 - complete Clean smart-resize execution, visually too close to the baseline and starts loud.
11. v6-design-006 - best early editorial differentiation, but chrome-heavy.
12. v6-design-021 - credible Paper system, but cramped/mobile-heavy and starts loud.
13. v6-design-018 - distinctive Editorial desk, but iframe primacy depends on learning the split.
14. v6-design-028 - polished Spacious depth, but pane-open and top-capsule-heavy.
15. v6-design-002 - strong baseline, now too visually common.
16. v6-design-011 - solid premium Sites dock, slightly over-present at rest.
17. v6-design-013 - complete, but visible rail/topbar duplication.
18. v6-design-014 - competent Clean implementation, too close to 002.
19. v6-design-015 - polished refined surface, too many shortcuts.
20. v6-design-016 - spacious framing, but Files/Logs/Settings as rail buttons regress ownership.
21. v6-design-019 - Material is credible, but Sites/Start/Blueprints split weakens the canonical Sites door.
22. v6-design-024 - strong contemporary identity and route forms, but mobile overflow remains a blocker.
23. v6-design-012 - interesting depth, too many persistent doors.
24. v6-design-009 - useful Paper direction, three-door rail and density are weaker than 021.
25. v6-design-004 - good depth/ownership concept, surpassed by later iframe/focus proof.
26. v6-design-001 - feature-complete warm rail, but less mature and too command-heavy.
27. v6-design-003 - useful one-widget experiment, but hides too much and has weaker visual maturity.
28. v6-design-010 - distinctive mono, but terminal-heavy and less broadly appropriate than 022.
29. v6-design-007 - feature-rich but the clearest early "too many primary doors" warning.
30. v6-design-030 - feature-complete on paper, but desktop command overlap and mobile horizontal clipping make it the clearest late warning.

## Bottom Line

V6 has the right conceptual target: calm WordPress site first, one Sites door for launch/resume/discovery, one Manager door for tools/settings/export, visible smart resize, depth as polish, and no persistent two-row bar. The next workers should be stricter about proving that target in the first viewport. A design is not stronger because it shows more required features at once; it is stronger when every required feature has an obvious home and the live WordPress site remains usable until the user asks the chrome to get loud.
