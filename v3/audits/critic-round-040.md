# Critic Round 040 - V3 Redesign Swarm Audit

## Scope

Reviewed `DESIGN_BRIEF.md`, `v3/INSIGHTS.md`, liked prior reviews #006, #010, #013, #014, #015, #029, #038, #053, #055, and #064, `v3/data/designs.json`, every completed design directory under `v3/designs/`, and existing audits `critic-round-010.md`, `critic-round-020.md`, and `critic-round-030.md`.

Corpus note: completed V3 directories currently include `v3-design-001` through `v3-design-039`, plus `v3-design-042`. There are no completed `v3-design-040` or `v3-design-041` directories in this pass, so they are not audited.

## Overall Verdict

The V3 corpus is now clearly responding to the user feedback instead of repeating the broad console/dashboard clone pattern. The default posture in most completed designs is: live WordPress site first, sparse browser-like chrome, route-aware launcher on demand, Site Manager tools behind an inspector/sheet/pane, full-size focus mode, visible unsaved state, and a gated destructive reset flow. That is the right direction.

The strongest late work, especially `032` through `039` and `042`, raises the floor again. It fixes many round-030 criticisms: real `<iframe>` surfaces, real ZIP file inputs, no Adminer/phpMyAdmin/database.sqlite overreach, explicit route forms, visible save consequences, and reset flows that move from warning to cancel/save-first/confirm/progress/result. These designs no longer merely list the required features; they usually render the required state.

The new risk is sameness and density. Many late designs converge on the same formula: top browser bar, live iframe, Launch modal, Tools inspector, Settings reset modal, focus rail. That formula is viable, but future workers should stop treating it as automatically sufficient. The next quality jump is not more labels; it is sharper first-open states, lower button count, better mobile prioritization, and clearer reasons for choosing glass/tabs/settings/launcher/iPad/inspector beyond visual flavor.

## What Improved Since Round 030

- **Reset flows became product-grade.** `033`, `035`, `039`, and `042` are the clearest typed-confirmation examples. `032`, `034`, `036`, `037`, and `038` also show warning, cancel/save-first, progress, result, and changed active state. This directly addresses the repeated "red button with copy is not enough" critique.
- **Late ZIP routes are real.** `032`, `033`, `034`, `035`, `036`, `037`, `038`, `039`, and `042` all include actual file inputs for Import `.zip`. Earlier fake ZIP states should no longer be used as references.
- **Database scope is cleaner.** The early corpus frequently added Adminer, phpMyAdmin, or database download affordances. From `024` onward, designs generally stay closer to the brief: early-access database browser, notice, searchable rows/tables, and no invented DB product surface.
- **Full-site focus is now a real state.** The best designs keep Save, path/URL, refresh, WP Admin, Homepage, and Exit visible in focus mode. This is now the expected floor for any direction that otherwise puts tools around the iframe.
- **Route-specific input states are no longer exceptional.** The late designs consistently distinguish WordPress PR, Gutenberg PR/branch, GitHub repo/ref/type, Blueprint URL, and ZIP import. Generic start tiles should now be considered a miss.

## Feature Preservation

Across the corpus, the current Playground feature inventory from `DESIGN_BRIEF.md` is broadly preserved: refresh, address/path navigation, Playground name, Save, Saved Playgrounds launcher, Site Manager access, settings, all six start routes, featured blueprints, gallery search/filter, saved playgrounds, WP Admin/Homepage, export to GitHub PR, Download `.zip`, Files with New File/New Folder, Blueprint editor with Copy link/Download bundle/Run Blueprint, Database notice, Logs search, toasts, loading/working/launcher states, and mobile/desktop layouts.

Preservation problems remain concrete:

- **No actual iframe still disqualifies a candidate as a complete Playground chrome artifact.** `016`, `017`, `021`, `022`, `023`, `027`, and `029` use styled site surfaces or iframe language without an actual `<iframe>` tag. They can contribute interaction ideas, but they should not be copied as complete V3 candidates.
- **Early ZIP import states remain weak.** `003`, `004`, `006`, `007`, `010`, `012`, `014`, `015`, `016`, `017`, `019`, `020`, `021`, `022`, and `023` either fake the upload or treat ZIP as text/drop-zone theater. Use `024` onward, and especially `032` onward, for ZIP implementation patterns.
- **Extra database actions from early designs should be ignored.** Adminer, phpMyAdmin, and direct `database.sqlite` download are not in the brief. They appeared widely in `001` through `023`; late V3 correctly stops making them look like current Playground features.
- **WP Admin and Homepage need to stay near the live site.** The benchmark focus modes and frame bars keep these controls beside path navigation. Designs that only place them in an Export/Actions pane make common navigation feel like an advanced operation.
- **Final states are improved but still uneven.** Reset final states are now strong in late designs. Save, route boot, ZIP import, export selection, and Blueprint Run still need equally visible consequences in future work.

## Benchmark Designs

### `v3-design-039` - Reset-Rigorous Inspector

The best current inspector/browser hybrid. It starts with the running iframe, strong address bar, loud unsaved warning, collapsed DevTools-style Site Manager, route-specific launcher panels, real ZIP input, focus rail, event feedback, and typed reset flow from warning through result. It applies the #064 feedback without forcing a developer console on first-touch users.

Use it for: browser-topbar hierarchy, collapsed inspector, route panel clarity, focus controls, and destructive-state rigor.

Remaining risk: once the inspector opens, the tab row, dock actions, file controls, DB/log search, and launcher can become a lot. Future inspector work should design the first opened Tools state as carefully as the default state.

### `v3-design-038` - Split Guard Workspace

The strongest late iPad/multitasking candidate. Split View solves a real Playground problem: the live site remains primary while Settings, Files, Blueprint, Database, and Logs sit in a secondary pane. Slide Over handles route starts and saved sites with real inputs, and the reset sequence includes warning, save-first, progress, and result.

Use it for: site-plus-tool multitasking, explicit secondary pane switching, mobile degradation to bottom sheets, and keeping the iframe large while tools are open.

Remaining risk: iPad metaphors still need visible labels. The shelf, Slide Over, and split-pane affordances should stay explicit rather than becoming gesture-only decoration.

### `v3-design-033` - Play Deck Reset Rigor

The best launcher direction in the late batch. It preserves the Epic-style discovery strength but makes the library transient; after launch, the product returns to a full-size WordPress play mode. Route forms are concrete, ZIP is real, tools are collapsible, and reset has typed confirmation plus completion.

Use it for: launch-to-running transition, saved-site library, route form density, and a library that exits back to the live site.

Remaining risk: the library overlay is still visually dominant. Future launcher variants should keep discovery useful without turning Playground into a storefront.

### `v3-design-036` - Glass Control Center Reset Rig

The best late glass treatment. It uses glass as temporary chrome over the iframe, not as a reason to blur everything. It includes stronger backing, solid-controls treatment, real route inputs, real ZIP upload, focus mode, and a full reset sequence.

Use it for: contrast-aware glass, temporary controls, solid fallback treatment, and live-site-as-background without losing legibility.

Remaining risk: glass remains fragile on arbitrary WordPress themes. Future glass work should keep proving contrast on white default WordPress pages and dense WP Admin screens.

### `v3-design-032` - Calm Canvas Reset Rigor

The best late Figma/canvas correction alongside `042`. It keeps one selected live frame, a small left context rail, minimap/fit/focus controls, route-aware launcher, right inspector, and a reset sheet with progress/result. It does not repeat the old infinite-board problem.

Use it for: restrained canvas metaphor, selected-object plus inspector model, visible route inputs, and reset final states.

Remaining risk: the left rail plus inspector means the first opened state can still feel like a design tool. The canvas must keep earning its place by improving orientation, not adding decorative workspace chrome.

### `v3-design-042` - Saved Canvas Inspector

The strongest save/resume identity treatment in the canvas family. It explicitly shows saving to browser storage, identity changes, Your Playgrounds row consequences, resume/delete/rename states, route inputs, and typed reset gating.

Use it for: save consequences, saved identity, Your Playgrounds behavior, and canvas/inspector feature coverage.

Remaining risk: it has the highest visible action count in the late set when panels are open. The underlying idea is useful, but future workers should reduce the number of simultaneously visible small buttons.

### Durable Earlier Benchmarks

`031` remains the best mobile-first reset/sheet benchmark. `024` remains the best settings-app correction because Live Preview stays central and categories are reduced. `026` remains a strong glass reference. `030` remains the best event-history/consequence narration reference. `018` remains a durable iPad split benchmark. `013` and `002` remain useful for launcher and canvas lineage, respectively, though their later descendants now have stronger reset and upload fidelity.

## Useful But Secondary

- **`034` Reset Sheet Settings:** a competent Ventura/settings update with real iframe, real ZIP inputs, short category rail, and strong focus mode. It is a good settings reference, but still risks making everything feel like a settings category.
- **`035` Fluent Reset Workspace:** a solid Windows/settings variant with one reset path, typed confirmation, and a credible central iframe. It is calmer than many earlier settings shells, but side rail plus side pane can still read as a management console.
- **`037` Tabbed Reset Rigour:** the best late tabs-only candidate because it adds real route inputs, real ZIP upload, focus mode, and reset result. The core tabs-only weakness remains: all features become peers, and Files/Blueprint/Logs/Site are serialized.
- **`028` Pane Rig Playground:** useful as an iPad pane reference now that the directory is present, with real iframe and upload state. `038` supersedes it for destructive-state completeness.
- **`030` Route Ledger Workbench:** still valuable for showing consequences through a quiet event trail. Do not expand the ledger into a command console unless the brief changes.

## Weak Designs Or Patterns

### Fake Product Surface

`016`, `017`, `021`, `022`, `023`, `027`, and `029` should not be copied as complete V3 artifacts because the central product surface is not an actual iframe. The brief's hard constraint is that the iframe stays. A styled WordPress preview, even a polished one, is not enough.

### Fake Upload

The ZIP route must be an actual upload state. Text inputs containing `.zip`, static drop zones, fake Browse chips, or pure helper text should be treated as incomplete. Use `032` through `039` and `042` as the current floor.

### Giant Manager Panel In Calm Clothing

The most common remaining failure is not the default screen; it is the first opened manager. A design can look calm at first glance and then reveal Start, Saved, Blueprints, Settings, Files, Blueprint, Database, Logs, Export, status, events, and navigation all in one oversized panel. `034`, `035`, `039`, and `042` are all strong but still show this risk when tools or library are open.

### Button Count Creep

Late V3 solves feature coverage by adding many small controls. `033`, `034`, `038`, `039`, and especially `042` have enough buttons in opened states that "calm first touch" can become "dense second touch." Future workers should count interactive targets in both the default state and the first opened state.

### Metaphor As Costume

Settings, glass, tabs, launcher, iPad, and inspector patterns are working only when they reduce a Playground-specific problem. Weak settings makes WordPress feel like a preview in a control panel. Weak glass reduces contrast. Weak tabs flatten priority. Weak launcher overemphasizes browsing blueprints. Weak inspector intimidates first-touch users. Weak iPad chrome asks desktop users to infer gestures.

## Criteria Audit

### Applies User Feedback Instead Of Making Another Console/Dashboard Clone

Pass overall. `031`, `032`, `033`, `036`, `038`, `039`, and `042` clearly apply the V3 feedback: live site first, fewer default controls, route forms, focus mode, save consequences, reset gates, and current-feature discipline. The main caution is convergence into a standard browser-plus-inspector formula; future work should improve the formula rather than merely repeat it.

### Preserves Every Current Playground Feature

Mostly pass, but not universally. Late designs preserve the brief best. Early designs are often useful concept studies but fail artifact fidelity through fake iframes, fake ZIP, duplicated settings, or invented DB actions. Future reviewers should score rendered controls, not README promises.

### Makes The Live WordPress Site Usable At Full Size Or In Strong Focus Mode

Pass in the benchmark set. `032`, `033`, `034`, `035`, `036`, `037`, `038`, `039`, and `042` all include credible focus/full-size states. The focus control set is now clear: Save, path/URL submit, refresh, WP Admin, Homepage, and Exit should remain reachable.

### Avoids Too Many Visible Buttons At First Glance

Mixed. Default screens are usually calmer than V2 and early V3. `033`, `036`, `038`, and `039` are relatively controlled at first glance. Opened states remain dense, particularly canvas/inspector and settings variants. Future workers should avoid solving "preserve every feature" by putting every feature one click away in the same panel.

### Includes Route-Specific Input States For PR/GitHub/Blueprint URL/ZIP

Strong in late V3. `032`, `033`, `034`, `035`, `036`, `037`, `038`, `039`, and `042` are current references. Generic PR/GitHub/Blueprint/ZIP tiles should now fail this criterion unless they visibly expand into the correct inputs in the same state.

### Includes Save Consequences, Destructive Confirm/Cancel, And Final States

Greatly improved. `033`, `035`, `039`, and `042` are strongest for typed reset and identity consequences. `032`, `034`, `036`, `037`, and `038` are strong for progress/result states. Save consequences are best in `042` and `031`; future work should bring that rigor to every save entry point and every route boot.

### Handles Mobile And Desktop Credibly

Pass in the mobile-first and iPad families. `031` remains the mobile sheet reference; `038` and `018` are strongest for tablet-to-mobile degradation. Inspector/settings/canvas designs are credible only when their panels become scoped sheets and Database/Logs stay in named Data/Debug homes. Horizontal tab overflow remains the highest mobile risk in tabs-only work.

### Uses Glass/Tabs/Settings/Launcher/iPad/Inspector Patterns Only Where They Improve Usability

Best current uses:

- **Glass:** `036`, with stronger tint, solid controls, and temporary chrome over the iframe.
- **Tabs:** `037`, with real route/upload/reset states, while accepting serial work as the trade-off.
- **Settings:** `034` and `024`, where Live Preview is central and categories are reduced.
- **Launcher:** `033` and `013`, where the library leads back to full-size play mode.
- **iPad:** `038` and `018`, where Split View solves site-plus-tool work.
- **Inspector:** `039` and `032`, where depth is collapsed until requested.
- **Event/consequence trail:** `030`, where history explains consequences without becoming the product.

Weak uses remain any version where the metaphor mostly changes styling while preserving a broad dashboard underneath.

## Guidance For Future Workers

1. Start with a usable WordPress site, not a manager. The first screen should support browse, refresh, path navigation, Save, Launch, Tools, WP Admin/Homepage, and focus without teaching the whole IA.
2. Keep a real `<iframe>` in the artifact. A styled site mock can sit inside `srcdoc`, but the product surface must remain an iframe.
3. Render route-specific forms. WordPress PR, Gutenberg PR/branch, GitHub repo/ref/load type, Blueprint URL, and ZIP import need distinct controls.
4. Use an actual ZIP upload control. Do not fake file selection with a text field, label, chip, or static drop zone.
5. Keep one destructive reset path. Gear, Settings tab, and notices may enter the same flow, but they should not create competing reset UIs.
6. Show consequences after actions. Save changes identity and Your Playgrounds. Reset changes runtime and active state. Blueprint Run and route starts show booting then ready. Export and ZIP selection produce visible feedback.
7. Keep WP Admin and Homepage near the live site and in focus mode.
8. Do not add non-brief surfaces to fill space. Adminer, phpMyAdmin, direct database downloads, AI, deployment, accounts, marketplaces, collaboration, and team workflows are outside the current brief.
9. Do not bury Database and Logs in vague overflow. Use explicit Site Manager tabs or a named Data/Debug home on mobile.
10. Design the first opened state, not just the default state. The user's second click should not reveal a dashboard wall.
11. Let the metaphor earn its place. Use launcher for starting/resuming, inspector for contextual tools, iPad split for site-plus-tool multitasking, tabs for serial simplicity, settings for runtime clarity, glass for temporary chrome, and canvas only when selected context actually helps.

## Current Reference Ranking

- **Top benchmarks:** `039`, `038`, `033`, `036`, `032`, `042`, plus earlier `031`, `024`, `030`, and `018`.
- **Useful supporting references:** `034` for settings reset sheet, `035` for Fluent reset flow, `037` for tabs with real route/upload states, `028` for pane rigging, `026` for glass lineage, `013` for launcher lineage, `002` for canvas lineage.
- **Use cautiously:** `025` for settings workspace density, `027` and `029` for IA ideas only because the iframe artifact is missing, `019` for inspector structure only, `022` for route-form density minus iframe/upload fidelity.
- **Do not copy as-is:** `016`, `017`, `021`, `022`, `023`, `027`, and `029` as complete artifacts because they miss the actual iframe constraint; any early ZIP state that is only text/drop-zone theater; early DB panels that imply Adminer/phpMyAdmin/database.sqlite as current features.

The next batch should treat late V3 as the floor: real iframe, real uploads, route-specific forms, concrete save/reset consequences, and live WordPress large enough to use. The higher bar is restraint after the first click.
