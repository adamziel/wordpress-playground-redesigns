# Critic Round 050 - V3 Redesign Swarm Audit

## Scope

Reviewed `DESIGN_BRIEF.md`, `v3/INSIGHTS.md`, the liked prior reviews `006`, `010`, `013`, `014`, `015`, `029`, `038`, `053`, `055`, and `064`, `v3/data/designs.json`, every completed directory under `v3/designs/`, and existing V3 audits `critic-round-010.md`, `critic-round-020.md`, `critic-round-030.md`, and `critic-round-040.md`.

Completed V3 directories now cover `v3-design-001` through `v3-design-050`. This audit treats the late saved-identity batch, especially `040`, `041`, and `043` through `050`, as the new material beyond the round-040 assessment.

## Overall Verdict

V3 is now clearly applying the user feedback. The best completed designs no longer make another broad console/dashboard clone: they start with a usable live WordPress iframe, keep first-glance chrome sparse, reveal launcher and Site Manager depth on demand, provide concrete PR/GitHub/Blueprint/ZIP route inputs, show browser-local save consequences, and gate destructive reset with cancel/save-first/confirm/final states.

The bar has moved again. The late corpus proves that workers can hit the required fidelity: real `<iframe>` surfaces, real file inputs for `.zip`, no Adminer/phpMyAdmin/database download overreach, no generic route tiles, and credible focus modes. The next failure mode is not missing labels; it is convergence and density. Many artifacts now share the same browser bar plus launcher modal plus inspector/tools pane formula. That formula is viable, but future workers need sharper reasons for each metaphor and more restraint in the first opened state.

Current benchmark set: `049` for inspector, `048` for iPad/split, `043` for launcher, `050` for ledger/consequence narration, `041` for mobile sheets, `046` for glass, `042` and `032` for canvas, `024`/`044` for settings, and `039`/`038`/`033` as durable reset-rigor references.

## What Improved Since Round 040

- **Saved identity is now explicit.** `041` and `043` through `050` show unsaved warning copy, local browser storage consequences, active saved identity, saved rows, resume states, and reset/reload consequences more clearly than earlier V3.
- **The route-input floor held.** The late designs consistently show WordPress PR, Gutenberg PR/branch, GitHub repo/ref/path, Blueprint URL, and real `.zip` upload controls. Generic "Paste..." cards are no longer the norm.
- **The iframe constraint is mostly respected in late work.** `040`, `041`, and `043` through `050` all use actual iframes. This matters because Playground is chrome around an iframe, not a mock website inside a card.
- **Database scope is cleaner.** Late designs keep Database as an early-access browser/notice and generally avoid making Adminer, phpMyAdmin, or direct `database.sqlite` downloads look like current product requirements.
- **Reset flows now usually include final state.** The better late artifacts show warning, Cancel, Save first, typed confirmation, progress/loading, and a ready/reset-complete state. This directly fixes the old "red button with warning copy" failure.

## Feature Preservation

Across the full corpus, the required Playground inventory is broadly preserved: refresh, editable path/address, Playground name, Save, Saved Playgrounds launcher, Site Manager access, settings, all six start routes, featured blueprints, full gallery search/filter, saved playgrounds, WP Admin/Homepage, export to GitHub PR, Download `.zip`, Files with New File/New Folder, Blueprint editor with Copy link/Download bundle/Run Blueprint, Database notice, Logs search, toasts, booting/working/launcher states, and mobile/desktop layouts.

Concrete preservation issues remain:

- **Fake or missing iframe remains a hard miss.** `016`, `017`, `021`, `022`, `023`, `027`, and `029` should not be copied as complete Playground chrome artifacts because the central live-site surface is not an actual iframe.
- **Early ZIP states remain obsolete.** `003`, `004`, `006`, `007`, `010`, `012`, `014`, `015`, `016`, `017`, `019`, `020`, `021`, `022`, and `023` still use text fields, decorative drop zones, or fake browse controls for ZIP import. Use `024` onward, especially `032` onward and `040` onward, as the current floor.
- **Early database overreach should stay rejected.** `001` through `023` often add Adminer, phpMyAdmin, or direct database download affordances. Those are not in the brief and should not be treated as requirements.
- **Save identity rigor should not become a new product expansion.** Showing browser-local save consequences is required by the flows. Rename/delete/reload row management can be useful illustration, but future workers should not turn saved Playgrounds into a broader account, sync, collaboration, or full library-management product.
- **WP Admin and Homepage still need to stay near the live site.** The best designs keep them beside path navigation and in focus mode. Burying them only in an Actions or Export pane weakens a required everyday flow.

## Benchmark Designs

### `v3-design-049` - Saved Identity Inspector

The strongest current DevTools/browser hybrid. It starts as a live browser tab with a large iframe, yellow unsaved warning, editable path, Save, Launcher, collapsed inspector, focus mode, and WP Admin/Homepage near the site. The launcher has concrete route forms and a real ZIP input, while the inspector keeps Settings, Files, Blueprint, Database, and Logs explicit without making the panel permanent.

Use it for: browser-topbar hierarchy, collapsed inspector depth, saved/unsaved identity, route forms, and keeping developer tooling one gesture away.

Remaining risk: first-open launcher and inspector density. It has many small controls once panels are open, so future inspector variants should progressively expand only the selected task.

### `v3-design-048` - Saved Split Workspace

The strongest saved-identity iPad/split variant. It uses Split View for a real Playground problem: live WordPress remains the primary app while one secondary pane handles Settings, Files, Blueprint, Database, or Logs. Slide Over owns start/resume routes, and the shelf makes saved identity visible.

Use it for: site-plus-tool multitasking, explicit pane switching, route-specific Slide Over forms, mobile degradation to sheets, and focus mode with Save/path/WP Admin/Homepage/Exit.

Remaining risk: iPad idioms still need labels on desktop. Keep the pane switcher explicit; do not rely on gesture-only chrome.

### `v3-design-043` - Play Library Identity

The best late launcher direction. It preserves the Epic-style discovery model but treats the library as temporary: choose a route or saved site, then return to the full-size running WordPress site. It keeps route forms concrete, ZIP real, Database scoped, settings canonical, and reset tied to active identity.

Use it for: launch-to-play flow, saved-site library consequences, route-form density, and keeping catalog chrome out of the way once a site is running.

Remaining risk: the launcher can still become visually dominant. Future launcher work should keep discovery useful without making Playground feel like a storefront.

### `v3-design-050` - Saved Identity Ledger

The best late console-hybrid correction. It reduces the console to a quiet read-only event ledger that explains Save, reset, import, export, logs, and blueprint consequences while visual controls remain primary. The live iframe stays central, and saved identity is visible without turning the UI into a terminal.

Use it for: consequence narration, browser-local save clarity, event feedback after destructive/route actions, and avoiding the old terminal-dominates-product failure.

Remaining risk: the left identity rail plus bottom ledger consume space. It works because focus mode exists; without focus, the live site would feel squeezed.

### `v3-design-041` - Saved Sheet Shell

The best late mobile-first saved-identity reference. It uses named Start, Tools, Data, and Settings sheets, keeps Database and Logs out of a vague "More" bucket, shows real route inputs and ZIP upload, and gives the live iframe a focus mode with essential controls.

Use it for: mobile sheets, named homes, local-save consequences, and a practical 390px collapse story.

Remaining risk: the Start sheet is long because it carries routes, gallery, and saved identity. Progressive route expansion is essential.

### `v3-design-046` - Glass Identity Control Center

The strongest saved-identity glass treatment. It uses glass as temporary chrome over the iframe, with stronger tint and solid-control treatment rather than relying on blur alone. Route inputs, ZIP upload, focus mode, Site Manager tabs, save identity, and reset confirmation are all present.

Use it for: contrast-aware glass, temporary overlays, solid fallback treatment, and avoiding glass-as-dashboard-skin.

Remaining risk: arbitrary WordPress pages can be white, dense, or visually noisy. Future glass variants must keep contrast proven on default WordPress and WP Admin-like pages.

### Durable Earlier Benchmarks

`039` remains the strongest reset-rigorous inspector from the previous batch. `038` remains a top split/workspace benchmark. `033` remains a strong launcher reset reference. `042` and `032` remain the best canvas references. `024` remains the cleanest settings-app correction, and `044` is the late settings identity variant that most clearly preserves Live Preview as the default workspace.

## Useful But Secondary

- **`040` Reset Runbook:** strong event-history and reset-final-state work, but secondary to `050` because the later ledger handles saved identity more explicitly.
- **`044` Saved Identity Settings:** useful for Ventura-style identity rows and settings clarity; still risks making Playground feel like a settings app once the category rail and identity pane are open.
- **`045` Saved Identity Settings:** a solid Windows/Fluent variant with good save/reset consequences; less distinctive than `044` and more prone to management-console drift.
- **`047` Saved Tabs Workspace:** the best saved-identity tabs version, with real iframe, real ZIP, and explicit tabs. The underlying tabs-only trade-off remains: every surface becomes a peer, and site-plus-tool work is serialized.
- **`036` Glass Control Center Reset Rig:** still valuable for reset sequence and contrast-safe glass lineage, though `046` carries the saved-identity theme further.
- **`031` Pocket Reset Sheets:** still a strong mobile reset reference even though `041` now handles saved identity better.

## Weak Designs Or Patterns

### Fake Product Surface

Do not use `016`, `017`, `021`, `022`, `023`, `027`, or `029` as complete references. A styled WordPress mock or site-looking div is not enough; the design brief is explicit that the iframe stays.

### Fake Upload

The ZIP route must look and behave like an upload state. Text inputs containing `.zip`, inert Browse chips, or purely decorative drop zones are below the current V3 floor.

### Giant Manager Panel In Calm Clothing

The most common remaining weakness is the first opened surface. Many designs look calm on first load, then reveal a large panel containing Start, Saved, Gallery, Settings, Files, Blueprint, Database, Logs, Export, identity state, events, and local action bars. That is still a dashboard if the user's second click opens "everything."

High-risk examples even among strong work: `044`, `047`, `049`, and `050` when their full manager/launcher states are open. They are useful references, but future workers should reduce simultaneous controls.

### Button Count Creep

Late designs solve feature coverage with many small buttons. Total controls are not the only measure, but `044`, `047`, and `049` have especially dense opened states. The first glance is often calm; the first-open state is not always calm.

### Metaphor As Costume

The metaphor only earns its place when it solves a Playground problem:

- Launcher helps start/resume and then exits.
- Inspector helps edit/debug without intimidating first-touch users.
- iPad split helps keep site and tools visible together.
- Settings helps clarify runtime consequences without demoting WordPress.
- Tabs help serial focus, but they flatten priority.
- Glass helps chrome recede, but only if contrast survives.
- Ledger/event history helps consequences, but should not become a second command product.

Weak versions keep the broad manager and change only the visual style.

## Criteria Audit

### Applies User Feedback Instead Of Making Another Console/Dashboard Clone

Pass overall. `041`, `043`, `046`, `048`, `049`, and `050` clearly apply V3 feedback: live site first, sparse default chrome, route forms, focus mode, save consequences, reset gates, and current-feature discipline. The caution is convergence into a standard browser-plus-panel pattern and density after the first click.

### Preserves Every Current Playground Feature

Mostly pass in late V3; mixed across the full corpus. Late designs preserve the feature inventory with real controls. Early designs remain useful concept studies but fail artifact fidelity through fake iframes, fake ZIP, duplicated settings, or invented DB actions.

### Makes The Live WordPress Site Usable At Full Size Or In Strong Focus Mode

Pass in the benchmark set. `041`, `043`, `046`, `048`, `049`, and `050` all include credible focus/full-size modes with at least Save, path/URL navigation, Refresh, WP Admin, Homepage, and Exit. This should remain the floor.

### Avoids Too Many Visible Buttons At First Glance

Mixed. Default screens are usually calmer than the prior generation. `043`, `048`, and `049` are particularly controlled before panels open. Opened states remain dense, especially settings/tabs/inspector/identity variants. Future workers should count controls in the default state and in the first opened state.

### Includes Route-Specific Input States For PR/GitHub/Blueprint URL/ZIP

Strong in late V3. `040`, `041`, and `043` through `050` all clear the route-input bar with concrete PR/Gutenberg/GitHub/Blueprint forms and real ZIP file inputs. A generic start tile should now fail this criterion.

### Includes Save Consequences, Destructive Confirm/Cancel, And Final States

Strongest in the saved-identity batch. `041`, `043`, `044`, `048`, `049`, and `050` show browser-local save consequences and reset consequences clearly. `050` is strongest for event narration; `049` is strongest for inspector identity; `048` is strongest for split-workspace identity. Future work should show final states for Save, reset, route boot, ZIP import, Blueprint Run, export selection, and resume without adding new product scope.

### Handles Mobile And Desktop Credibly

Pass in the mobile-first and iPad families. `041` is the late mobile benchmark; `048` and `038` are the split/tablet references. Inspector and settings variants are credible when their panels become scoped sheets and when Database/Logs remain named Data/Debug surfaces. Tabs remain the highest mobile-risk pattern because overflow can hide important destinations.

### Uses Glass/Tabs/Settings/Launcher/iPad/Inspector Patterns Only Where They Improve Usability

Best current uses:

- **Glass:** `046`, plus earlier `036`, because controls are temporary and contrast-aware.
- **Tabs:** `047`, because it accepts serial work and keeps all tabs explicit, though it remains a constrained pattern.
- **Settings:** `044` and `024`, because Live Preview stays central and runtime consequences are clear.
- **Launcher:** `043` and `033`, because launch leads back to full-size play mode.
- **iPad:** `048` and `038`, because Split View solves site-plus-tool work.
- **Inspector:** `049` and `039`, because depth is collapsed until requested.
- **Ledger:** `050` and `040`, because event history explains consequences without dominating the UI.

Weak uses are any variants where the metaphor mainly changes the paint while preserving a broad all-tools manager.

## Guidance For Future Workers

1. Start with a usable WordPress site. The first screen should support browse, refresh, path navigation, Save, launcher, tools, WP Admin/Homepage, and focus without teaching the whole IA.
2. Keep a real `<iframe>` in the artifact. `srcdoc` mock content is fine; replacing the iframe with a div is not.
3. Render route-specific forms. WordPress PR, Gutenberg PR/branch, GitHub repo/ref/path, Blueprint URL, and ZIP import need distinct controls.
4. Use an actual ZIP upload input or a clearly functional upload state.
5. Keep one destructive reset path. Gear, Settings tab, and notices may enter it, but the flow should share confirm/cancel/save-first/progress/final states.
6. Make Save consequences concrete: browser-local storage, active identity change, Your Playgrounds row, and refresh/reset survival.
7. Keep WP Admin and Homepage near the live site and in focus mode.
8. Keep Database and Logs explicit. On mobile, use a named Data or Debug home rather than a vague More bucket.
9. Do not add non-brief surfaces to fill space. Adminer, phpMyAdmin, direct database downloads, AI, deployment, accounts, marketplaces, collaboration, and team workflows are outside this brief.
10. Design the second click. A calm first screen is not enough if the first opened panel becomes a wall of controls.
11. Let the metaphor solve a real task: starting/resuming, site-plus-tool work, debugging, runtime settings, save consequences, or chrome receding from the iframe.

## Current Reference Ranking

- **Top benchmarks:** `049`, `048`, `043`, `050`, `041`, `046`, `042`, `039`, `038`, `033`, `032`, `024`.
- **Useful supporting references:** `040` for runbook/event states, `044` for Ventura saved identity, `045` for Fluent saved identity, `047` for tabs with saved identity, `036` for glass reset lineage, `031` for mobile reset lineage.
- **Use cautiously:** `034`/`035` for settings reset flows because they can drift into console-like management density; `037`/`047` for tabs because serial work and overflow are inherent costs; `044`/`049`/`050` when fully opened because button count is high.
- **Do not copy as-is:** `016`, `017`, `021`, `022`, `023`, `027`, and `029` as complete artifacts because they miss the iframe constraint; early fake ZIP states; early database panels that imply Adminer/phpMyAdmin/database.sqlite as current features.

The late V3 floor is now clear: real iframe, real upload, route-specific forms, local save consequences, full reset sequence, and a live WordPress site large enough to use. The next quality jump is restraint: fewer simultaneous controls after the first click, stronger rationale for the chosen metaphor, and no accidental expansion beyond the current Playground feature set.
