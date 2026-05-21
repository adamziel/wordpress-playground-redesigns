# Critic Round 010 - V3 Redesign Swarm Audit

## Overall Verdict

V3 is a real step up from the liked prior directions. The batch clearly absorbed the repeated feedback from reviews #006, #010, #013, #014, #015, #029, #038, #053, #055, and #064: most completed designs now keep the live WordPress site as the default surface, expose route-specific inputs for PR/GitHub/Blueprint URL starts, make unsaved state more visible than a tiny dot, and interrupt destructive reset with a confirm/cancel step.

The strongest work is no longer a broad console/dashboard clone. It treats Playground as a live browser first and a manager second. The weaker work still slips into "one large management surface with many buttons" or uses a visual metaphor as styling rather than as a usability decision.

Benchmarks for the next batch: **v3-design-002 Calm Canvas Inspector**, **v3-design-003 Play Deck**, **v3-design-008 Calm iPad Split View**, **v3-design-009 Calm Inspector Playground**, and **v3-design-011 Pocket Focus Shell**. These are not perfect, but they demonstrate the right V3 correction: live site first, deeper tools on demand, explicit launch forms, and credible focus modes.

## What V3 Fixed

- **Route inputs are mostly real now.** Designs 001, 002, 003, 005, 008, 009, and 011 show concrete forms for WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and ZIP import instead of generic start tiles. This directly fixes a repeated failure in #006, #010, #013, #014, #015, #038, #053, #055, and #064.
- **The live iframe is usually treated as the product.** Designs 001, 002, 003, 005, 006, 008, 009, 010, and 011 all include either full-size/focus mode or a default live-site workspace. This is the most important correction from settings-app and launcher concepts that previously trapped WordPress in a card.
- **Destructive reset is no longer just a red button.** Every completed design shows a confirm/cancel interrupt somewhere. The best versions add a typed confirmation or save-first path.
- **Unsaved state is louder.** The batch generally uses warning pills, notices, browser-storage copy, saved-list consequences, or event history instead of relying only on a dot.
- **Mobile is treated as a real constraint.** The mobile-first and pocket designs are strongest here, but most concepts include 390-ish responsive behavior, bottom nav/sheets, or mobile docks rather than assuming desktop sidebars.

## Feature Preservation

Most designs preserve the current Playground feature inventory from `DESIGN_BRIEF.md`: refresh, editable address/path, Playground name, Save, Saved Playgrounds launcher, Site Manager toggle/surface, settings, all six start routes, featured blueprints plus full gallery/search/filter, saved playgrounds, WP Admin/Homepage, export to GitHub PR, download ZIP, file browser with New File/New Folder, blueprint editor with Copy link/Download bundle/Run Blueprint, Database notice, Logs search, toasts, loading state, working state, launcher/gallery state, and mobile/desktop breakpoints.

Feature preservation issues are mostly quality issues rather than hard omissions:

- **ZIP import is often faked.** Designs 004, 006, 007, and 010 weaken the ZIP route. 004 changes the route input to `type="text"` even for ZIP. 006 renders a "Browse" affordance without a file input. 007 uses a text field containing a ZIP filename. 010 renders a drop zone label but no real file input. Future workers should use an actual file input or a clearly rendered upload/drop state.
- **Several designs add database actions not in the brief.** "Open Adminer", "Open phpMyAdmin", and "Download database.sqlite" appear in many designs. The brief only requires the early-access database browser and notice. These may be reasonable mock affordances, but they are not current Playground requirements and should not become new expectations.
- **Quick settings duplication survives in some concepts.** Designs 008 and 009 intentionally keep top-gear quick settings plus full Settings pane. That preserves the current product entry point, but it also keeps the original pain point alive. If duplicated, the gear must clearly route to the same confirmation flow and not become a second destructive path.
- **WP Admin/Homepage are sometimes present but demoted.** The stronger designs keep them in focus/live-site controls and Site Manager headers. Concepts that bury them in an Actions tab or manager pane should be treated as weaker because these are common navigation shortcuts, not rare exports.

## Benchmark Designs

### v3-design-002 - Calm Canvas Inspector

This is the best Figma-derived correction. It keeps the canvas metaphor but avoids the previous infinite-board problem: one selected live-site frame, sparse toolbar, contextual inspector, minimap/fit/focus controls, route-specific launcher forms, and typed `RESET` confirmation. It also removes separate quick settings by routing the gear into the inspector Settings tab.

Use it as the benchmark for: restrained metaphor, focused selection model, full-site mode, route detail panel, and one canonical settings home.

Remaining risk: the inspector still contains a lot of controls once opened, and the Figma metaphor becomes less distinctive because it was correctly restrained. That is a good trade for V3, but future canvas work should prove what the canvas adds beyond a normal inspector.

### v3-design-003 - Play Deck

This is the strongest launcher reinterpretation. It carries forward the Epic-style discovery model but stops making the catalog the whole product. The live WordPress "play mode" is primary, Launch and Tools are on demand, route forms render through data, and the launcher still includes saved playgrounds, featured blueprints, all 43 gallery data, and ZIP import.

Use it as the benchmark for: decisive launcher flow that gets out of the way, route-specific starts, saved-site library, and a full-size running mode that keeps Save/URL/tools reachable.

Remaining risk: the top-level launcher/store metaphor can still overemphasize discovery versus day-to-day editing. Keep the cinematic library restrained.

### v3-design-008 - Calm iPad Split View

This is the best multitasking answer. It uses iPad Split View for an actual Playground problem: live WordPress stays primary while Settings/Files/Blueprint/Database/Logs occupy a swappable secondary pane. The Slide Over launchpad handles route forms, featured blueprints, gallery, and saved sites. It also has one of the strongest destructive confirmations by requiring the Playground name.

Use it as the benchmark for: full-size live site plus tools, explicit pane swap affordance, mobile degradation to sheets, and high-signal confirm copy.

Remaining risk: iPad idioms need labels. The design correctly labels "Tap to swap pane"; future iPad-like work should keep that clarity rather than relying on decorative dots or gestures.

### v3-design-009 - Calm Inspector Playground

This is the best DevTools-derived direction because it starts as a browser, not as an IDE. The yellow unsaved/session pill is strong, the inspector is collapsed by default, route details are generated with real forms, and focus mode makes the live site first-class.

Use it as the benchmark for: browser-topbar interaction, collapsed inspector, prominent unsaved state, route forms, and developer tools one gesture away.

Remaining risk: it keeps a quick settings popover and full Settings pane. That is acceptable only if the destructive confirmation is shared and users never see two conflicting versions of the same setting.

### v3-design-011 - Pocket Focus Shell

This is the clearest mobile-first/pocket answer. It keeps the iframe central, uses named homes instead of "More", gives Data a home for Database/Logs, expands route tiles into forms, and provides a full-size mode with Save, URL, WP Admin, Homepage, and Exit still reachable.

Use it as the benchmark for: mobile honesty, named bottom-sheet homes, focus rail, route expansion, and not burying Database/Logs in a junk drawer.

Remaining risk: desktop users still lose simultaneous Files/Blueprint/Logs visibility. That is acceptable for the direction, but future variants should not pretend this is a power-user IDE.

## Solid But Less Distinct

### v3-design-001 - First-Touch Sheet Shell

001 is a competent mobile-first correction: route inputs, Data home, typed `RESET`, save consequences, full-size mode, and all major Site Manager features are present. It is useful but less benchmark-worthy because first glance is busier than its thesis suggests: topbar actions plus bottom dock plus in-site WP Admin/Homepage/Full-size controls create many visible targets. It also feels close to 011, which executes the same pocket/sheet idea with a stronger full-size rail.

### v3-design-005 - First-Touch Calm Settings

005 is the better settings-app variant. It defaults to the live site, keeps a focus mode, renders route fields directly, includes settings confirmation, and has a credible management panel. It still risks becoming a broad Settings console once opened, and Windows styling is not doing as much usability work as the iPad/inspector/launcher metaphors.

### v3-design-010 - Calm Site With Event Trail

010 is a valuable console-hybrid correction because the event trail is supporting context, not a terminal that dominates the product. The event trail explains save/reset/import/export consequences without intimidating first-touch users. However, it has the weakest ZIP start state among otherwise strong designs, and the event-history idea should remain a supplement; do not let it become a second product language that every action must maintain.

## Weak Designs Or Weak Patterns

### v3-design-004 - First-touch Settings

004 correctly defaults to live preview and uses a smaller manager taxonomy than the prior macOS Settings design, but it still reads as a settings shell once the manager opens. The route forms are less strong than the benchmark designs: one generic input is reused, and ZIP is treated as text. The mobile nav exposes Site/Start/Files/Settings/Logs, but Database and Blueprint are not as clearly first-class from the mobile shortcuts. This is a competent patch to #014, not a new high bar.

### v3-design-006 - Calm Glass Control Center

006 solves an important glassmorphism flaw by adding solid controls and stronger tint, but the glass metaphor still does more aesthetic work than interaction work. It has good live-site default and route inputs, but ZIP import is a fake browse row, not a real upload state. Its focus mode is useful, but several controls are still decorative text/icon hybrids. Use this only as a visual-treatment reference, not as the core IA benchmark.

### v3-design-007 - Tabs Focus

007 is the cleanest tabs-only version and it preserves the core surfaces, but it shows the central weakness of the pattern: many peer tabs become visible system weight. It improves over #053 with focus mode and route forms, yet it still trades away split editing and forces Files/Blueprint/Logs/Site into serial tab switching. ZIP is also not a real upload input. The tabs-only constraint is understandable; future workers should not copy it unless the tab overflow and active-consequence model are made visibly excellent.

### Repeated Weak Pattern: "All Tools In One Giant Manager"

Several designs claim first-touch calm and then open a huge panel containing Start, Saved, Blueprints, Settings, Files, Blueprint, Database, Logs, Export, and sometimes extra DB tools. That is better than showing everything at first glance, but it can still feel like a renamed dashboard. The next batch should keep asking: what does this surface help the user decide right now? If the answer is "everything", the IA is probably too broad.

### Repeated Weak Pattern: Button Count Creeps Back

V3 reduced first-glance overload, but button count often creeps back through stacked topbars, docks, tabs, manager navs, and inline toolbars. Designs 001, 007, 008, and 011 are especially at risk because they combine persistent rails/docks with panel tabs and local action bars. Future workers should stage controls by task phase: browsing WordPress, starting a route, editing files/blueprint, debugging data/logs, or applying runtime settings.

## Criteria Audit

### Applies Feedback Instead Of Cloning A Console/Dashboard

Pass overall. 002, 003, 008, 009, 010, and 011 clearly incorporate feedback from prior liked directions rather than cloning them. 004/005 are improved settings-app shells but still close to "manager console" once opened. 006 is improved glass styling, but not a major IA breakthrough. 007 is intentionally tabs-only and useful mainly as a constraint study.

### Preserves Current Playground Features

Mostly pass. The required features are present across the corpus. Watch ZIP import, WP Admin/Homepage prominence, duplicated settings, and extra database actions. Future reviewers should treat "Open Adminer/phpMyAdmin" as non-brief decoration unless the product brief changes.

### Live WordPress Full Size Or Strong Focus Mode

Pass in the better designs. 002, 003, 008, 009, 010, and 011 provide credible focus modes. 001 also provides full-size mode. 004/005 improve settings concepts by defaulting to live preview and adding focus. 006 has focus, but the glass control center can still visually compete with the site. 007 has focus but loses simultaneous tool/site work.

### Avoids Too Many Visible Buttons At First Glance

Mixed. 003, 009, and 010 are the calmest at first glance. 002 is acceptable because its inspector is contextual. 001/011 are mobile-honest but can be button-heavy due to top rail plus dock. 007 necessarily exposes many tabs. 008's saved-site dock is useful but visually persistent. The next batch should count initial interactive targets before calling a design calm.

### Route-Specific Input States

Mostly pass, with concrete weak spots. Benchmarks: 001, 002, 003, 005, 008, 009, 011. Weak ZIP states: 004, 006, 007, 010. A route tile with "Paste..." copy is no longer enough; the form state must be visible or one click away in the same composition.

### Save Consequences, Destructive Confirm/Cancel, Final States

Improved but uneven. The best save treatments state browser storage, change the identity, add the saved site to Your Playgrounds, and show a toast or event entry. 001, 002, 008, 009, 010, and 011 are strongest. Destructive confirm/cancel is now common, but the best versions require `RESET` or the Playground name and offer Save first. Final states should be more explicit: after reset, show a booting and then ready state, not only a modal disappearing.

### Mobile And Desktop Credibility

Pass overall. 001 and 011 are the mobile benchmarks. 008 has the strongest tablet-to-mobile story. 002/009/010 are credible if the inspector/launcher sheets do not overwhelm 390px. 004/005 can work but need careful mobile category pruning. 007 tabs remain the highest mobile-risk pattern because horizontal overflow can become a hidden navigation problem.

### Metaphors Used Where They Improve Usability

Best use: 002's restrained canvas/inspector, 003's launcher-to-play transition, 008's Split View, 009's collapsed inspector, 010's event trail, 011's pocket focus rail.

Weak use: 006's glass, when it becomes primarily visual; 004/005's settings shell, when it demotes Playground to a management app; 007's tabs, when they make all surfaces look equally important.

## Guidance For Future Workers

1. Keep the first screen as a usable WordPress site. The user should be able to browse, type a path, Save, open WP Admin/Homepage, and enter focus mode without understanding the whole manager.
2. Treat the launcher as a workflow, not a grid. Each route needs its own input: PR number/URL, Gutenberg PR/branch, GitHub repo plus load-as choice if shown, Blueprint JSON URL, and real ZIP upload.
3. Use one canonical destructive settings flow. Quick settings may be an entry point, but Apply & Reset must land in the same confirmation/final-state path as the Settings tab.
4. Make Save consequences concrete. Say browser storage/OPFS or local browser storage, change the Playground name/state, show a saved row, and show what refresh/reset would do.
5. Do not collapse Database and Logs into "More". If mobile needs grouping, use a named Data/Debug home.
6. Avoid adding features while filling empty space. Adminer, phpMyAdmin, AI helpers, deployment, accounts, marketplaces, and collaboration are not part of the current brief.
7. Use focus mode as a first-class state. It must preserve at least Save, URL/path submit, WP Admin, Homepage, and Exit.
8. Count visible actions. A calm design with a topbar, bottom dock, panel tabs, route buttons, and inline toolbars can still overwhelm users.
9. If using a metaphor, make it solve a Playground problem. Launcher should improve starting/resuming, inspector should improve debugging/editing, tabs should reduce panel confusion, iPad split should preserve site-plus-tool multitasking, glass should keep chrome out of the way without hurting contrast.
10. Show final states. Booting, saved, reset accepted, reset complete, export selected, ZIP import selected, and blueprint run should have visible consequences, not only buttons.

## Ranking For Next-Batch Reference

- **Top benchmarks:** 002, 003, 008, 009, 011.
- **Useful supporting references:** 001 for mobile sheet coverage, 005 for a calmer settings manager, 010 for consequence/event narration.
- **Use cautiously:** 004 for settings IA, 006 for glass treatment, 007 for tabs-only IA.

The next batch should not broaden the product. The bar is now higher: preserve every current feature, show fewer controls first, make route and reset states concrete, and let the running WordPress site stay large enough to use.
