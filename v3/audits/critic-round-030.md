# Critic Round 030 - V3 Redesign Swarm Audit

## Scope

Reviewed `DESIGN_BRIEF.md`, `v3/INSIGHTS.md`, liked prior reviews #006, #010, #013, #014, #015, #029, #038, #053, #055, and #064, `v3/data/designs.json`, completed V3 directories under `v3/designs/`, and existing audits `critic-round-010.md` and `critic-round-020.md`.

Corpus note: completed design directories currently cover `v3-design-001` through `v3-design-027`, then `v3-design-029`, `v3-design-030`, and `v3-design-031`. There is no completed `v3-design-028` directory in this pass.

## Overall Verdict

V3 is now mostly applying the user feedback instead of making another broad console/dashboard clone. The center of gravity has moved from "show all Playground management features" to "start with a usable live WordPress site, then reveal launch, tools, settings, files, data, and logs on demand." That is the right correction.

The bar has also moved. Early V3 proved that workers could include the right labels; late V3 proves that the artifacts can use real iframes, real ZIP inputs, route-specific forms, typed reset confirmations, focus modes, and fewer invented database affordances. Future work should no longer be credited for a generic tile that says "Import .zip" or a styled box labeled "live iframe." The artifact needs to render the state.

Best current benchmarks: **v3-design-031 Pocket Reset Sheets**, **v3-design-024 Route Settings Live**, **v3-design-026 Glass Route Control Center**, **v3-design-029 Route Inspector Playground**, **v3-design-030 Route Ledger Workbench**, plus the earlier durable references **v3-design-018 Full-size iPad Workspace**, **v3-design-013 Launch to Play**, and **v3-design-002 Calm Canvas Inspector**.

## What Improved Since Round 020

- **Late designs fixed the hard artifact gaps.** `024`, `025`, `026`, `027`, `029`, `030`, and `031` all render real `<iframe>` elements and real ZIP file inputs. This directly fixes the previous fake-frame and fake-upload critique.
- **Database overreach was cleaned up.** Designs `001` through `023` commonly added `Download database.sqlite`, `Open Adminer`, and `Open phpMyAdmin`. Designs `024` through `031` generally stop doing that and stay closer to the brief's early-access database browser and notice.
- **Route inputs are no longer an afterthought.** The stronger late designs show PR number/URL, Gutenberg PR or branch, GitHub repo, Blueprint URL, and ZIP upload in the visible launcher state.
- **Reset flows are closer to product-grade.** `031` is the clearest full sequence: warning, typed confirmation, Cancel, Save first, progress, reset complete, toast, and changed active state.
- **Metaphors are less decorative.** The better late work uses settings, glass, tabs, inspector, launcher, and mobile sheets as interaction models, not only visual costumes.

## Feature Preservation

The V3 corpus broadly preserves the required Playground inventory: refresh, editable path/address, Playground name, Save, Saved Playgrounds launcher, Site Manager/tools surface, runtime settings, all six start routes, featured and full blueprint browsing, saved playgrounds, WP Admin/Homepage, export to GitHub PR, download ZIP, file browser with New File/New Folder, blueprint editor with Copy link/Download bundle/Run Blueprint, Database notice, Logs search, toasts, loading/working/launcher states, and mobile/desktop layouts.

Remaining preservation problems are specific and should be treated as real failures, not polish gaps:

- **No fake iframe.** `016`, `017`, `021`, and `023` still use a styled site frame or fake iframe rather than the product's central `<iframe>` constraint. These can inspire visuals, but they are not complete V3 artifacts.
- **No fake ZIP route.** Weak ZIP states remain in `003`, `004`, `006`, `007`, `010`, `012`, `015`, `016`, `017`, `019`, `020`, `021`, `022`, and `023`. A text field containing `playground.zip`, a static drop zone, or a fake "Browse" chip is not enough.
- **Do not add database tools.** Adminer, phpMyAdmin, and direct database downloads were widespread in `001` through `023`. The brief does not require them. Late designs correctly stop making these look like current Playground features.
- **Final states still lag behind forms.** Many designs now show confirm/cancel, but fewer show what happens after Save, route boot, blueprint run, export selection, reset acceptance, reset completion, and returning to the live site.
- **WP Admin and Homepage must stay near the live site.** They should not live only in an Actions tab or deep manager pane. The best focus modes keep them visible alongside URL/path and Save.

## Benchmark Designs

### v3-design-031 - Pocket Reset Sheets

The strongest end-to-end mobile-first artifact. It has a real iframe, visible route forms, real ZIP input, named Start/Files/Data/Settings homes, a large focus mode, WP Admin/Homepage near the live site, and the best destructive reset sequence in the batch. It also makes save consequences concrete: local browser storage, Your Playgrounds, refresh survival, changed active name, and toast feedback.

Use it for: mobile sheet IA, reset final states, save consequence copy, and keeping Database/Logs out of "More."

Remaining risk: Files and Blueprint share one authoring home. That is acceptable for the mobile direction, but future workers should keep Blueprint clearly reachable inside that home.

### v3-design-024 - Route Settings Live

The best settings-app correction. It keeps Ventura-style legibility but starts from a full live preview, uses fewer categories, has a real iframe, real ZIP inputs, strong route states, a full-size Playground mode, and a named Database & Logs home. It also avoids the extra database tools that polluted many earlier designs.

Use it for: settings IA that does not demote WordPress to a card, reduced categories, route form quality, and full-size preview controls.

Remaining risk: it still has both a sidebar Start & Resume destination and a large Saved Playgrounds launcher. The duplication is understandable because the current product has a launcher trigger, but future settings variants should avoid two competing start homes.

### v3-design-026 - Glass Route Control Center

The best glassmorphism answer. It uses glass to make chrome feel temporary over the live site, but adds solid-controls mode, stronger tint, borders, and real dense surfaces for editors and data. It has a real iframe, real ZIP input, route forms, status pane, typed reset confirmation, and no invented Adminer/phpMyAdmin/database.sqlite actions.

Use it for: contrast-safe glass, temporary controls, solid fallback treatment, and keeping live WordPress as the room rather than a preview object.

Remaining risk: glass still competes with arbitrary WordPress themes. Future glass work should show a white default site and a busy admin screen, not only a friendly marketing page.

### v3-design-029 - Route Inspector Playground

The strongest late DevTools/browser hybrid. It starts with the live iframe, loud unsaved state, collapsed inspector, route-specific launcher details, real ZIP upload, typed reset confirmation, and a focus strip with WP Admin/Homepage/Exit.

Use it for: browser top-bar hierarchy, collapsed inspector, precise route forms, and keeping developer depth one gesture away.

Remaining risk: once the inspector and launcher are open, button count climbs quickly. Future inspector work should keep the first opened manager state calmer than the full power-user state.

### v3-design-030 - Route Ledger Workbench

The best console-hybrid correction. The event trail is a supporting layer rather than a terminal that dominates the product. It explains consequences for route boot, Save, focus, export, logs, and reset while the primary UI remains visual. It uses a real iframe, real ZIP input, route-specific forms, WP Admin/Homepage, and a typed reset modal.

Use it for: consequence narration, quiet event history, and avoiding the prior #029 problem where the terminal became the main product.

Remaining risk: the right pane carries launcher, tools, and event-history responsibility. Keep the event trail small and read-only unless a future brief explicitly asks for command input.

### v3-design-018 - Full-size iPad Workspace

Still the best iPad multitasking reference. It uses real Split View for a real Playground problem: live WordPress plus one swappable tool pane. Slide Over handles launcher and saved sites; focus mode keeps URL, Save, WP Admin, Homepage, and Exit close.

Use it for: site-plus-tool multitasking, explicit pane switching, and tablet-to-mobile degradation.

Remaining risk: iPad idioms need labels. A three-dot pull-tab without explanatory text is too subtle for desktop users.

### v3-design-013 - Launch to Play

Still the best launcher evolution. It preserves the Epic-style discovery strength while making the running site the destination. It has real route forms, real ZIP input, full-size play mode, and tools that collapse out of the way.

Use it for: route-to-running transition, saved session library, and launcher chrome that exits after boot.

Remaining risk: any launcher direction can drift back into storefront theater. Keep the catalog useful, not cinematic.

### v3-design-002 - Calm Canvas Inspector

Still the best canvas benchmark. It keeps one selected frame, sparse toolbar, minimap, inspector, real iframe, real ZIP input, typed reset confirmation, and focus mode. It does not repeat the old Figma infinite-board excess.

Use it for: restrained canvas metaphor, selected context, minimap/focus controls, and one canonical settings home.

Remaining risk: if the canvas only shows one site, workers must justify what the canvas adds beyond a browser plus inspector.

## Useful But Secondary

- **v3-design-025 - Route Settings Workspace:** a solid Windows/settings variant with real iframe, real ZIP input, strong route forms, and explicit reset flow. It is useful, but the left rail plus right workflow panel can still feel like a broad management console.
- **v3-design-027 - Tabs Route Workbench:** the best tabs-only implementation because it now uses a real iframe and real ZIP input. Still, tabs make every surface feel like a peer and force serial switching between Site, Files, Blueprint, Database, and Logs.
- **v3-design-011 - Pocket Focus Shell:** remains a strong mobile reference for named homes and focus mode, though `031` now handles reset final states better.
- **v3-design-008 - Calm iPad Split View:** still good, edged out by `018` as the cleaner full-size iPad version.
- **v3-design-010 - Calm Site With Event Trail:** useful for consequence narration, but its ZIP route remains fake.
- **v3-design-022 - Calm Canvas Route Inspector:** useful route-form density and canvas restraint, but the ZIP state is a drop zone without a real file input.

## Weak Designs Or Patterns

### Fake Product Surface

`016`, `017`, `021`, and `023` should not be copied as complete candidates because they do not preserve the iframe constraint. A polished fake WordPress surface is not enough for Playground's chrome redesign.

### Fake Upload States

The most repeated concrete failure is still ZIP import. Do not use `015`'s text input with a ZIP filename, `017`'s fake file chip, `021`/`022`/`023`'s decorative drop zones, or `019`'s "Choose exported .zip..." text field as references. Use `024`, `025`, `026`, `027`, `029`, `030`, or `031`.

### Giant Manager Panel

Many designs claim first-touch calm and then open a single giant panel containing Start, Saved, Blueprints, Settings, Files, Blueprint, Database, Logs, Export, shortcuts, and status. This is a dashboard clone with better staging. `019`, `023`, `024`, and `025` are the highest-risk examples once opened. The next batch should design the first opened manager state as carefully as the default site state.

### Button Count Creeps Back

The default screens are calmer, but first-open states often include a topbar, side rail, launcher cards, tabs, local action bars, status events, and inline buttons all at once. `027` is constrained by tabs; `029` and `030` are constrained by inspector/event density; `024`/`025` are constrained by category panels. Count visible actions before calling a design calm.

### Settings Shell Drift

Settings patterns are much better than the original #014/#015, but they still risk making Playground feel like an operating-system control panel with a WordPress preview attached. `024` is the strongest correction because Live Preview is dominant; future settings designs should copy that, not the earlier category sprawl.

### Decorative Metaphor

Glass, tabs, launcher, iPad, and inspector patterns are useful only when they solve a Playground problem. Weak glass makes contrast worse; weak tabs flatten priority; weak launcher overemphasizes discovery; weak inspector intimidates first-touch users; weak iPad chrome asks users to learn unlabeled gestures.

## Criteria Audit

### Applies User Feedback Instead Of Making Another Console/Dashboard Clone

Pass overall, with convergence risk. `031`, `026`, `029`, `030`, `018`, `013`, and `002` clearly apply the feedback: live site first, fewer default controls, route forms, focus mode, save consequences, and reset gates. `024` and `025` are improved settings shells but still need restraint when the manager opens. `019` and `023` are the clearest reminders that an opened tools deck can become a broad dashboard even if the default state is calm.

### Preserves Every Current Playground Feature

Mostly pass, but not universally. The biggest hard misses are fake/non-iframe site surfaces and fake ZIP upload states. Feature labels alone should not count. The late designs are now the preservation benchmark because they pair labels with real controls.

### Makes The Live WordPress Site Full Size Or Strongly Focusable

Pass in the strong candidates. `031`, `024`, `026`, `029`, `030`, `018`, `013`, `011`, and `002` all preserve credible full-size or focus modes with essential controls. The required focus strip is now clear: Save, path/URL submit, WP Admin, Homepage, and Exit must remain reachable.

### Avoids Too Many Visible Buttons At First Glance

Mixed. `031`, `013`, `026`, and `030` are among the calmer first screens. `024` and `025` are calm before the manager opens but dense after. `027` necessarily exposes more tabs. `029` is good while collapsed and busy when the inspector/launcher is open. Future reviews should score both first glance and first-open manager glance.

### Includes Route-Specific Input States For PR/GitHub/Blueprint URL/ZIP

Strong in late V3. `024`, `025`, `026`, `027`, `029`, `030`, and `031` are the best references. `022` has good PR/GitHub/Blueprint form detail but weak ZIP implementation. A route card with "Paste..." helper text is no longer enough.

### Includes Save Consequences, Destructive Confirm/Cancel, And Final States

Improved, still uneven. `031` is the benchmark because it shows the full reset sequence and final state. `030` is strong for event-based consequence narration. `024`, `025`, `026`, and `029` have good confirmation and Save-first patterns, but should push final states harder. Future workers should show saved identity, saved row, toast/event, reset progress, reset completion, and the live site returning.

### Handles Mobile And Desktop Credibly

Pass for the mobile-first and iPad families: `031`, `011`, `001`, `018`, and `008`. Inspector and settings designs are credible if their panels become scoped bottom sheets and Database/Logs stay in a named Data/Debug home. Tabs remain the highest mobile-risk pattern because overflow can hide essential tools.

### Uses Glass/Tabs/Settings/Launcher/iPad/Inspector Patterns Only Where They Improve Usability

Best use:

- **Glass:** `026`, because it includes solid fallback and real controls.
- **Tabs:** `027`, because it accepts serial focus and adds real route/upload states.
- **Settings:** `024`, because Live Preview stays central and categories are reduced.
- **Launcher:** `013`, because the launcher leads into play mode instead of staying the product.
- **iPad:** `018`, because Split View solves site-plus-tool work.
- **Inspector:** `029`, because it starts collapsed and preserves browser muscle memory.
- **Event/console hybrid:** `030`, because history explains consequences without becoming a terminal.

Weak use:

- **Glass:** `016`, because the visual treatment competes with the product and lacks real iframe/upload controls.
- **Tabs:** `017`, because it uses a fake iframe and fake upload state while making every tool a peer.
- **Settings:** older `014`/`015` patterns when the category shell dominates the live site.
- **Launcher:** `023`, because route density is useful but the site is not a real iframe and ZIP is fake.
- **Inspector:** `019`, when the opened state exposes too many controls at once.

## Guidance For Future Workers

1. Start from a usable WordPress site. The first screen should let users browse, refresh, type a path, Save, open Launch, open Tools, and enter focus mode without understanding the whole product map.
2. Preserve a real `<iframe>`. If the content is mocked with `srcdoc`, that is fine; the container should still be an iframe.
3. Use real route controls. PR number/URL, Gutenberg PR or branch, GitHub repo/ref/path, Blueprint URL, and ZIP upload need distinct visible states.
4. Use a real ZIP input or a clearly functional upload/drop control. Do not fake it with text.
5. Keep one destructive settings path. Gear and Settings tab can be different entry points, but Apply & Reset must land in the same confirm/cancel/save-first/final-state sequence.
6. Show consequences, not just buttons. Save should affect identity and Your Playgrounds; reset should progress and complete; export/import/blueprint run should produce a visible state or toast.
7. Keep WP Admin and Homepage near the live site and focus controls.
8. Do not add non-brief product features to fill panels. Adminer, phpMyAdmin, direct database downloads, AI, accounts, deployment, collaboration, and marketplaces should not become implied requirements.
9. Do not bury Database and Logs in "More." Use Data, Debug, or an explicit Site Manager tab.
10. Count controls in the first opened manager state. Calm default chrome is not enough if the first panel becomes a cockpit.
11. Let each metaphor earn its place. If the metaphor does not reduce confusion, protect the live site, clarify consequences, or improve route selection, it is decoration.

## Current Reference Ranking

- **Top benchmarks:** `031`, `024`, `026`, `029`, `030`, `018`, `013`, `002`.
- **Useful supporting references:** `025` for Windows/settings restraint, `027` for tabs with real route/upload states, `011` for mobile sheet homes, `008` for iPad split, `010` for event narration, `022` for route-form density minus ZIP.
- **Use cautiously:** `019` for inspector structure only, `014`/`015` for settings visuals only, `023` for route density only.
- **Do not copy as-is:** `016`, `017`, `021`, `023` for fake iframe/site surfaces; any ZIP state that is only a text field, decorative chip, or non-functional drop zone; early database panels that add Adminer/phpMyAdmin/database.sqlite actions.

The next batch should stop proving that Playground features can be listed. The bar is now artifact fidelity plus restraint: real iframe, real upload states, route-specific forms, concrete save/reset consequences, fewer first-open buttons, and a live WordPress site large enough to use.
