# Critic Round 040 - V6 Playground Redesign Audit

## Scope

This audit covers all completed V6 designs under `v6/designs/`, 001 through 040. I read the current `DESIGN_BRIEF.md`, `v6/INSIGHTS.md`, `v6/STYLE_VARIATION_SYSTEM.md`, the named V5 source designs and reviews, the TypeUI style skill files, `v6/data/designs.json`, the existing V6 audits, and the current README/meta/HTML for the completed V6 submissions.

V6 is not a new-feature round. The bar is still: preserve the current Playground surface, make the live WordPress iframe usable, apply the user's exact V5 feedback, and produce varied professional systems rather than forty small variations of the same shell.

## Verdict

The completed V6 set is now substantially stronger than the early batch. The hard iframe failure has been corrected across the set: every completed design now includes an actual `iframe` for the WordPress site, usually with `srcdoc` so the static mock renders reliably. Route-specific launch states are also much better by the end of the round. The late consequence designs, especially 033-040, mostly show PR/GitHub/Blueprint URL/ZIP as different input modes rather than six identical launch cards.

The main regression is now visible command duplication. Many designs say "Sites and Manager are the two canonical doors" while also showing Sites, Manager, Settings, Focus, Logs, and sometimes the same Sites/Manager actions in both a rail and a top command row. A deep link is acceptable only when the UI visually makes it subordinate. In too many designs, the deep links look like equal primary doors.

The second problem is sameness. V6 learned the right IA, then repeated it as top capsule + left rail/widget + side pane + ratio seam + route cards + white/blue or blue/violet buttons. The TypeUI skills are named in the READMEs, but the median rendered design changes fonts, accent color, radius, and copy while keeping the same component grammar.

The disliked V5 two-row top bar is avoided literally. Good. But its cost reappears when a top command row, rail, pane header, tab row, seam controls, and mobile collapsed buttons all coexist at first glance. The user did not dislike only "two horizontal rows"; they disliked persistent chrome that makes Playground feel like a control console before it feels like a live site.

## Benchmarks

### Strongest Overall: v6-design-023 - Premium Depth Surface

023 remains the best all-around benchmark after the full forty. It starts quiet, gives the iframe a strong default and focus route, keeps Sites and Manager understandable, preserves the feature inventory, and uses premium depth through subtraction and polish rather than decoration. It is still the design future workers should study first for balance.

The lesson is not "make everything premium." The lesson is that the product gets better when the chrome is disciplined: Sites for saved/start/import/blueprints, Manager for tools/settings/export, and focus for the live site.

### Best Late Consequence Benchmark: v6-design-035 - Consequence Sites Widget

035 is the strongest late entry. It starts quiet and iframe-first, uses a compact Sites widget as both saved identity and launcher, keeps Manager as the only tools surface, represents ZIP as a dropzone, and finishes reset with warning, typed `RESET`, cancel, progress, result, changed identity, and toast. The Premium style is controlled enough that the reset/save/import consequences feel designed, not pasted on as audit compliance.

Its weakness is still the dense top command capsule: refresh, path, Sites widget, Save, Manager, settings, and full-size preview are all visible. That is defensible here because the widget is doing real identity work and labels collapse on mobile, but future designs should not treat this as permission to keep adding top-row destinations.

### Best Strict Ownership Map: v6-design-008 - Bento One-Door Playground

008 is still the cleanest map of responsibilities: session mechanics in the capsule, Sites and Manager in the rail, and no separate Settings/Blueprints/Export door. Bento changes grouping and rhythm, not just color. Its only real strike is visual: the dark frame still leans close to the quiet-rail skin V6 was supposed to move past.

### Best Quiet Rail Update: v6-design-025 - Quiet Rail Warm Product Skin

025 is the most direct answer to "quiet-rail IA/interactions yes, quiet-rail visual no." It keeps the rail/pane behavior, starts with the pane closed, and makes the iframe large. The professional yellow/black system is distinct enough from V5 #018 while staying product-ready. The top toolbar repeats rail destinations more than it should, but the underlying rail model is strong.

### Best Route/Form Discipline: v6-design-029 - Rail Ratio Console

029 remains the route-form benchmark. Corporate is expressed as ledgers, controlled rows, metrics, and clear forms; ZIP is a real dropzone; reset has cancel/final states; the default is quiet. Its defect is visible duplication: the top toolbar and rail both expose Sites/Manager/Settings. Future workers should borrow the form quality and quiet default, not the extra shortcuts.

### Best Paper Consequence Direction: v6-design-033 - Paper Consequence Rail

033 is a strong late style benchmark. Paper is used as a consequence language: casefiles, ledgers, before/after identity, stamped labels, tactile surfaces, and reset progress. It starts closed and iframe-first, which makes the paper panel feel like a deliberate reveal rather than a default dashboard.

It is held back by a third rail Settings door and by extra database actions (`Download database.sqlite`, Adminer/phpMyAdmin) that go beyond the current brief. Keep the paper consequence language; cut the product creep and primary-door creep.

### Best Mono Consequence System: v6-design-034 - Reset Ledger Resize

034 has one of the most complete reset ledgers: route forms, ZIP drop, save state, reset warning, typed confirm, progress, result, and changed runtime/storage metrics. Mono supports code, logs, paths, metrics, and reset accounting well.

It is not an iframe-first benchmark because the ledger pane is always present and starts with Sites content open. It is valuable for consequence-state design, not for quiet first-touch behavior.

### Strong Clean Consequence Baseline: v6-design-038 - Consequence Resize

038 is the best late Clean entry because it knows Clean is visually samey and tries to differentiate through consequence grammar. The quiet mode, real iframe, preview/fullscreen modes, route-specific panel, ZIP dropzone, and before/after reset copy are all solid.

It still looks close to the V6 average: white flat surfaces, blue/violet accents, capsule, widget, side panel, cards, and ratio seam. Future Clean designs must change structure or density, not only state copy.

## Weak Designs And Patterns

### v6-design-039 - Honest Self-Critique, Still Too Many Doors

039 is useful because it says the quiet part out loud: its own README counts rail logo, Sites, Manager, Settings, Focus, refresh/path, Sites status widget, Save, top Manager, top Settings, and top Focus. That is above the restraint bar, and the UI shows it. The design is feature-complete and has a quiet default, but the rail plus top status widget plus top Manager/Settings/Focus makes the canonical Sites/Manager story visually unconvincing.

This is the pattern to avoid in future refined/depth entries: do not solve discoverability by duplicating every destination in both the rail and topbar.

### v6-design-037 - Logs As Rail Door Reopens The Manager Split

037 has good route inputs, ZIP import, reset consequence states, and a professional black/yellow system. But the rail exposes Sites, Manager, Logs, and Focus, while the top row also exposes Playgrounds, Tools, and Settings. Logs is explicitly a Manager tab in the brief. Promoting it to a persistent rail button is exactly how one-door discipline erodes.

The command row is also busier than the thesis admits. Deep links are not free when they look like independent destinations.

### v6-design-032 - Good Bento Surface, Loud Initial State

032 is complete and has a strong bento tray, but it starts in `pane-open ratio-site` with the launcher visible. That makes it a good feature review canvas and a weaker Playground first-touch screen. V6 requires launcher/gallery-open states, but idle should still prove that an anonymous user can browse the live WordPress site before opening a catalog.

The reset confirm is also less persuasive than the later consequence entries because the typed phrase is shown already filled in. The final state exists, but the intentional disabled-to-enabled moment is weaker.

### v6-design-034 - Consequence Complete, Quiet Incomplete

034's ledger is high quality, but the secondary pane is always visible. That is acceptable for a smart-resize interpretation, yet it does not answer the V6 quiet-to-loud lesson as cleanly as 023, 025, 029, 033, 035, 038, or 040. If a worker wants an always-present pane, the near-full iframe detent must be extremely visible and credible on mobile.

### v6-design-040 - Complete, But Spacious Becomes Another White Capsule Shell

040 preserves the inventory and has strong save/reset/import/export consequence states. It also starts iframe-first and avoids a literal two-row top bar. But the visual system is mostly the familiar V6 grammar: white surfaces, blue actions, command capsule, rail, side pane, ratio teacher, tabs, and cards. Spacious should change the experience through breathing room and prioritization; here it mainly softens the same shell.

The capsule also repeats Sites/Manager/Settings while the rail owns Sites/Manager/Focus. The README names this as a trade-off; the next version should actually remove one layer of duplicated access.

### Early Weaknesses That Still Matter

The existing audits already covered these, but they remain important:

- 007 is the clearest early warning against too many primary doors.
- 030 is the clearest late warning for command overlap and mobile clipping.
- 019 weakens the Sites-widget lesson by splitting Sites, Start, and Blueprints.
- 016 exposes Files/Logs/Settings too prominently as primary shortcuts.
- 005 is a good IA template but starts too loud.
- 006 and 018 are visually distinctive Editorial entries, but their persistent chrome can feel heavy.
- 021 and 028 are credible style explorations but begin too pane-heavy.

## Applying The V5 Feedback

### Quiet-Rail IA/Interactions Yes, Quiet-Rail Visual No

The IA lesson is mostly absorbed. 005, 008, 023, 025, 029, 031, 033, 037, 039, and 040 all use a quiet orientation surface and one reveal pane in some form. The best are 008, 023, 025, 029, 033, and 035/038's widget equivalents because they keep the primary model narrow.

The weak pattern is adding Settings, Logs, Files, Export, or Blueprints as visible peer destinations. V6 should not recreate the current product's scattered entry points with nicer icons.

### Smart-Resize Interaction And Design Yes

Smart resize is the strongest inherited idea. Ratio labels, detents, preview modes, and fullscreen escape appear throughout the set. The bar is no longer "has a gauge." The bar is whether the gauge leads to a usable WordPress site at full or near-full size.

Best examples: 023, 029, 035, 038, 025, 022, and 034 for consequence-heavy resize. Weaker examples either leave the pane dominant by default or make the gauge feel like a diagram beside a static layout.

### Two-Row Top Bar No

The literal V5 #030 structure is gone. The functional equivalent still appears when:

- a top capsule plus rail plus pane header all show persistent commands;
- a mobile toolbar collapses labels but keeps too many icon targets;
- Settings and Manager appear as peer commands even though Settings is only a Manager tab;
- Sites appears as both widget/status and separate command in the same viewport.

Avoiding two rows is not enough. The first glance must avoid the same visible-button burden.

### Three-Layer Depth Visual Yes, Depth Interactions No

This lesson is mostly correctly applied. 020, 023, 025, 027, 028, 031, 033, 035, 036, and 039 use depth as hierarchy: elevation, blur, tint, shadow, paper stack, premium surface, or modal layer. None of the strongest designs asks users to reason through a z-stack.

The caution is sameness. "Depth" has often become a translucent white side panel over the same iframe. Depth should be style-specific: Material should have stateful elevation, Paper should have tactile provenance, Premium should subtract, Bento should layer modules, Refined should use thin rules and careful hierarchy.

### Sites Widget Interaction Yes

The Sites-widget lesson is well absorbed. 023, 027, 035, 036, and 038 are the strongest production-shaped versions. 003 is still the purest experiment but hides too much behind one object. 035 is the best late answer because the widget carries saved identity and consequence without becoming four corner widgets or an everything drawer.

Sites should own saved identity, resume, all six start routes, ZIP import, featured blueprints, and full gallery. It should not also be the name for Manager, Settings, Files, Logs, and export.

## Product Coverage

Across the full forty, feature preservation is now generally strong:

- Runtime controls: refresh, path/address, playground name/status, Save, Saved Playgrounds/Sites, Manager/tools, settings access, focus/fullscreen.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`.
- Blueprint discovery: featured blueprints, search, categories, and large/full galleries.
- Saved sites: unsaved identity plus realistic saved playground examples.
- Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage.
- Export: GitHub PR export and Download `.zip`.
- States: active session, booting/loading, launcher/gallery open, save/resume, destructive reset confirm/cancel/final, toast, and responsive mobile layouts.

The remaining product cautions:

- Extra database tooling appears repeatedly: `Download database.sqlite`, Adminer, phpMyAdmin. The brief only requires the early-access SQLite-backed database browser and notice. Do not add product surface to make Database feel richer.
- Some settings shortcuts still look like duplicate settings homes rather than deep links into Manager.
- Some save actions appear in toolbar, Sites notice, and Manager notice. That is acceptable only when the UI clearly shows one saved identity changing everywhere.
- Some reset flows are still static warnings rather than an intentional sequence. The best late designs show before/after, cancel, typed gate, progress, changed active identity, and toast.

## Mobile And Desktop

Desktop is credible in most entries now that every design uses an iframe. The stronger desktop defaults are quiet and iframe-first: 023, 025, 027, 029, 031, 033, 035, 036, 038, 039, and 040. The weaker desktop defaults are review-catalog-first: 005, 006, 020, 021, 026, 028, 032, and 034.

Mobile remains uneven but improved. Stronger mobile patterns collapse labels before wrapping, make the pane a bottom sheet, keep a visible iframe floor, and provide full preview. 035, 036, 038, 023, 025, 027, and 029 are the safer references. Weak mobile patterns are still: launcher open by default, command rows that become crowded icon strips, and panes that make the iframe feel like a background sliver.

Future workers should always prove three mobile states: quiet active site, Sites open, Manager open. The same product logic can be preserved in a sheet, but the iframe must still feel usable.

## Visual System Audit

Best TypeUI translations:

- 006 and 018: Editorial through rules, serif hierarchy, dense reading surfaces.
- 008 and 020: Bento through modular grouping and block rhythm.
- 021 and 033: Paper through tactile documents, ink rules, casefiles, and consequence ledgers.
- 022 and 034: Mono through logs/code/metrics, with 022 stronger for quiet iframe primacy and 034 stronger for reset accounting.
- 023 and 035: Premium through restraint, measured elevation, compact controls, and state polish.
- 029 and 017: Corporate through forms, ledgers, and operational tables.
- 036: Contemporary through Jost/Overpass, magenta state color, and bolder but still usable surfaces.

Repeated sameness:

- one command capsule with refresh/path/name/Save/Settings/Focus;
- one left rail or Sites widget;
- one side pane with route cards;
- ratio seam with pills/dots/letters;
- white or near-white cards, gray borders, blue/violet actions;
- the same WordPress `srcdoc` mock with large green artwork;
- "Settings deep-link" used as a rationale for visually duplicating Manager.

The next batch should vary at the component-system level. Clean should reduce structure, not just use blue on white. Spacious should create calmer prioritization, not larger cards. Material should use elevation and state mechanics. Refined should not merely put Playfair on the same shell. Premium should remove controls. Corporate should clarify ownership, not add shortcuts.

## Guidance For Future Workers

1. Start from the quiet active WordPress iframe. Then show Sites open and Manager open as explicit additional states.

2. Keep persistent destinations to Sites, Manager, and Focus unless the design has an exceptional reason. Settings, Files, Logs, Blueprint editor, Database, WP Admin, Homepage, Export, and Download should live inside Manager or be visibly subordinate deep links.

3. Let Sites be the canonical saved/start/import/blueprint door. Do not split Start and Blueprints into separate primary destinations.

4. Route inputs must be specific: PR number/URL, Gutenberg PR/branch/build, GitHub repo/type/path, Blueprint JSON URL, and ZIP upload/drop.

5. Save should read as one state transition across toolbar, Sites identity, and notices. Do not make it feel like several unrelated actions.

6. Reset should show consequence, cancel, gated confirm, progress, changed active identity, and final toast/ready state.

7. Give the iframe a near-full and full-size route. Smart resize only matters if WordPress is genuinely usable after the resize.

8. Avoid functional two-row chrome. A rail plus top command row plus pane header can cost as much attention as the disliked top bar.

9. Cut extra product surface, especially database tooling not in the brief.

10. Use TypeUI as a system input: layout, density, grouping, control shape, state language, and surface behavior. Do not stop at font and accent color.

## Current Ranked Shortlist

1. v6-design-023 - best overall balance of quiet iframe, complete coverage, focus mode, reset/save states, and premium polish.
2. v6-design-035 - best late consequence/Sites-widget execution with quiet iframe default.
3. v6-design-029 - best route-form and corporate quiet-rail discipline, with some shortcut duplication.
4. v6-design-025 - best warm professional quiet-rail skin update.
5. v6-design-008 - cleanest strict Sites/Manager ownership map.
6. v6-design-033 - strongest Paper consequence direction, held back by third settings door and extra DB tools.
7. v6-design-038 - strongest Clean consequence baseline, but visually close to the V6 average.
8. v6-design-022 - best quiet iframe-first Mono treatment.
9. v6-design-027 - best refined Sites-widget production shape before the consequence batch.
10. v6-design-034 - best Mono reset ledger, but too pane-present for first-touch.
11. v6-design-031 - solid Material quiet rail with real iframe and route inputs; visually less distinctive than it claims.
12. v6-design-036 - good contemporary quiet shell and consequence flow; watch secondary-pane density.
13. v6-design-020 - best earlier Bento style variation, still pane-heavy.
14. v6-design-005 - strong early IA template, starts too loud.
15. v6-design-040 - complete Spacious capsule, but duplicated access and familiar white shell.
16. v6-design-026 - competent Clean smart-resize, too close to 002/014 and starts loud.
17. v6-design-006 - strongest Editorial differentiation, but chrome-heavy.
18. v6-design-021 - credible Paper system, but cramped and starts loud.
19. v6-design-018 - distinctive Editorial desk, but iframe primacy depends on learning the split.
20. v6-design-028 - polished Spacious depth, but pane-open and command-heavy.
21. v6-design-032 - complete Bento surface, but idle is launcher-open.
22. v6-design-039 - quiet and complete, but too many visible doors by its own count.
23. v6-design-002 - strong baseline, now visually common.
24. v6-design-011 - solid premium Sites dock, slightly over-present at rest.
25. v6-design-013 - complete, but rail/topbar duplication.
26. v6-design-014 - competent Clean implementation, too close to 002.
27. v6-design-015 - polished refined surface, too many shortcuts.
28. v6-design-016 - spacious framing, but Files/Logs/Settings as rail buttons regress ownership.
29. v6-design-017 - strong registry detail, too many visible shortcuts.
30. v6-design-019 - Material is credible, but Sites/Start/Blueprints split weakens the canonical Sites door.
31. v6-design-024 - strong contemporary identity and route forms, but mobile overflow remains a blocker.
32. v6-design-012 - interesting depth, too many persistent doors.
33. v6-design-009 - useful Paper direction, three-door rail and density are weaker than later Paper entries.
34. v6-design-004 - good depth/ownership concept, surpassed by later iframe/focus proof.
35. v6-design-001 - feature-complete warm rail, less mature and command-heavy.
36. v6-design-003 - useful one-widget experiment, but hides too much and has weaker visual maturity.
37. v6-design-010 - distinctive mono, but terminal-heavy and less broadly appropriate than 022/034.
38. v6-design-037 - good consequence work, but Logs as rail door and top/rail duplication are regressions.
39. v6-design-007 - feature-rich but the clearest early too-many-primary-doors warning.
40. v6-design-030 - feature-complete on paper, but command overlap and mobile clipping make it the clearest late warning.

## Bottom Line

V6 found the right product center: live WordPress first, Sites for saved/start/import/blueprints, Manager for tools/settings/export, smart resize for focus, depth as polish, and no persistent two-row bar. The final ten designs improved consequence states significantly. The next improvement is stricter subtraction. Do not prove feature coverage by exposing more buttons; prove it by giving every current Playground feature one obvious home while the iframe remains usable until the user asks the chrome to get loud.
