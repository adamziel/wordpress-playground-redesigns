# Critic Round 020 - V3 Redesign Swarm Audit

## Scope

Read sources: `DESIGN_BRIEF.md`, `v3/INSIGHTS.md`, liked prior reviews #006, #010, #013, #014, #015, #029, #038, #053, #055, #064, `v3/data/designs.json`, existing audit `critic-round-010.md`, and every completed design directory under `v3/designs/`.

Important corpus note: `v3-design-018` exists under `v3/designs/` and appears complete, but it is missing from `v3/data/designs.json`. This audit includes it because the completed-design directory is the broader source of truth requested here.

## Overall Verdict

V3 has mostly internalized the user feedback. The batch is no longer dominated by broad console/dashboard clones. Most designs now start from a usable live WordPress site, push launch/catalog/tooling behind deliberate entry points, expose PR/GitHub/Blueprint URL inputs, make unsaved state more visible, and include a confirm/cancel reset path.

The new risk is convergence. Many designs now share the same formula: browser-like top bar, large WordPress preview, Launch sheet, Tools/Inspector panel, Focus Site mode. That formula is directionally right, but the bar for the next batch should move from "contains the right states" to "makes the trade-offs product-grade." The weakest artifacts satisfy the checklist in copy while still using fake ZIP controls, non-iframe site mocks, too many visible actions, or giant manager panels that feel like dashboards with calmer paint.

Current benchmark references: **v3-design-002 Calm Canvas Inspector**, **v3-design-013 Launch to Play**, **v3-design-018 Full-size iPad Workspace**, **v3-design-009 Calm Inspector Playground**, and **v3-design-011 Pocket Focus Shell**. Use **v3-design-023 Launch Deck to Play Mode** only as a route-form density reference, not as a full implementation benchmark because it does not render the live site as an actual `<iframe>`.

## What The Batch Does Well

- **The live site is finally treated as primary.** Most designs open with a browser-like shell around WordPress instead of opening to a dashboard. The strongest designs make Focus/Full Site a first-class state rather than a README promise.
- **Route tiles are less generic.** PR, Gutenberg, GitHub, Blueprint URL, and ZIP starts usually reveal some kind of form. This directly fixes the repeated prior failure in #006, #010, #013, #014, #015, #038, #053, #055, and #064.
- **Settings duplication is being challenged.** Several designs route the gear to the same Settings pane rather than creating another destructive path. This is strongest in 002, 003, 013, 014, 015, 017, and 018.
- **Reset is no longer only a red button.** Confirm/cancel is common. The best variants add `RESET`, the playground name, or Save-first as a clear safety path.
- **Mobile is less hand-waved.** The mobile-first/sheet designs and iPad designs understand that Database/Logs cannot disappear into a junk "More" bucket.

## Feature Preservation Audit

The core Playground inventory is broadly represented: refresh, address/path input, playground name, Save, launcher, Site Manager/tools surface, settings, six new-playground starts, featured/full blueprint gallery, saved playgrounds, WP Admin/Homepage, export to GitHub PR, download ZIP, files with New File/New Folder, blueprint editor with Copy/Download/Run, Database notice, Logs search, notifications, booting state, working state, and responsive states.

Hard and repeated preservation problems remain:

- **Several designs do not use a real iframe element.** `v3-design-016`, `v3-design-017`, `v3-design-021`, and `v3-design-023` render a styled site mock (`.site-frame`, `.fake-iframe`, or similar) instead of an actual `<iframe>`. The brief is explicit: the iframe stays. These concepts may be useful visually, but the artifact falls short of the current product constraint.
- **ZIP import is still often fake.** Real file inputs appear in 001, 002, 005, 008, 009, 011, 013, and 018. Weak ZIP states remain in 003, 004, 006, 007, 010, 012, 014, 015, 016, 017, 019, 021, and 023, where ZIP is a text input, static "choose file" chip, drop-zone div, or absent from the actual control. A route-specific ZIP state should look and behave like an upload/drop state, not a label.
- **Final states are less mature than confirmation states.** Many designs show confirm/cancel, but fewer show the full sequence: save consequence, reset accepted, booting, ready again, and updated saved identity. 001 and 002 are among the strongest here; 010's event trail is useful for consequences; 013 and 018 handle booting/play states well.
- **WP Admin/Homepage are sometimes duplicated or demoted.** The best designs keep them in live/focus controls and in the Site Manager/tool header. Designs that bury them in an Actions tab or only show them inside a manager weaken a common navigation path.
- **The static gallery often claims 43 without fully rendering 43.** This is allowed by the brief's floor if at least 12 are shown, but future workers should be precise in the UI: if only a subset is rendered, label it as a preview or show continuation affordance. 023 is a good full-list reference.

## Benchmark Designs

### v3-design-002 - Calm Canvas Inspector

Best all-around V3 correction of the Figma direction. It keeps one selected live-site frame, a sparse top bar, minimap/fit/focus controls, a contextual inspector, route-specific launcher forms, real ZIP upload, real iframe, and a typed `RESET` confirmation. The gear routes into the inspector Settings tab instead of spawning a second settings product.

Use it for: focused canvas restraint, route detail panel, one canonical Settings home, typed destructive confirmation, and a credible full-site mode.

Remaining risk: once the inspector opens, it is still dense. Future canvas designs need to prove what spatial context adds beyond "an inspector next to a browser."

### v3-design-013 - Launch to Play

The strongest launcher evolution. It keeps the Epic-style discovery strength but makes the running site the endpoint, not the catalog. The Library has concrete route forms, saved sessions, blueprints, and ZIP upload, while play mode keeps URL, Save, WP Admin, Homepage, and Tools reachable.

Use it for: launch-to-running transition, route-specific input handling, catalog chrome that gets out of the way, and non-duplicated settings.

Remaining risk: cinematic launcher language can still overtake the product. Keep the Library functional and avoid storefront theatrics unless they clarify starting/resuming.

### v3-design-018 - Full-size iPad Workspace

The best late-batch iPad/multitasking reference. It has an actual iframe, explicit Split View pane switching, Slide Over launcher, saved-site Dock, full-size mode, inline route inputs, a real ZIP file input, and a confirm/cancel reset modal. It also keeps settings in the pane rather than duplicating them as a loose popover.

Use it for: site-plus-tool multitasking, labeled iPad affordances, full-size escape hatch, mobile fallback to sheets, and preserving WP Admin/Homepage in focus mode.

Remaining risk: the iPad metaphor asks desktop users to understand Dock/Split View/Slide Over. Labels and hover/first-use cues are not optional.

### v3-design-009 - Calm Inspector Playground

The best browser/DevTools direction when judged by hierarchy. It starts as a browser tab with a strong URL bar and yellow unsaved warning, keeps the inspector collapsed by default, and makes Launch/Tools deliberate. It uses a real iframe and real ZIP input.

Use it for: unsaved warning placement, collapsed inspector, browser muscle memory, and developer tools one step away.

Remaining risk: it still duplicates settings through quick settings plus inspector Settings. That can pass only if both entry points are clearly the same model and share the same destructive confirmation/final state.

### v3-design-011 - Pocket Focus Shell

The cleanest mobile-first answer. It keeps the site central, uses named homes instead of "More", gives Database/Logs a Data home, expands route tiles into forms, uses a real iframe and ZIP input, and provides a full-size mode with Save, URL, WP Admin, Homepage, and Exit reachable.

Use it for: mobile IA, thumb-reachable sheets, avoiding the "More" bucket, and a dark bounded rail that survives white WordPress pages.

Remaining risk: desktop power work remains serial. That is acceptable for this direction, but it should not be sold as an IDE replacement.

## Useful But Secondary

### v3-design-001 - First-Touch Sheet Shell

Strong coverage and honest mobile-first IA: real iframe, real ZIP input, route forms, Data home, typed `RESET`, save consequences, and full-size mode. It is slightly less distinctive than 011 and can show too many targets when the top rail, bottom nav, and sheet controls are staged together.

### v3-design-003 - Play Deck

Good launcher-to-play hierarchy and clear route forms. The weakness is ZIP: the artifact uses a drop-zone div rather than a file input. This is a fixable implementation gap, but it keeps 003 below 013.

### v3-design-005 - First-Touch Calm Settings

The better Windows/settings variant from the first batch: live site first, real iframe, real ZIP input, route fields, and confirmation. Still, once opened, it becomes a broad settings console. Use its restraint and focus mode, not its entire category panel.

### v3-design-008 - Calm iPad Split View

Still strong: real iframe, real ZIP input, route-specific inputs, Split View, Slide Over, full-site mode, and typed destructive confirmation. It is edged out by 018 because 018 is a cleaner full-size iPad iteration, but 008 remains a valid reference.

### v3-design-010 - Calm Site With Event Trail

The event trail is a useful correction to console-heavy thinking: it explains consequences without becoming the product. The artifact should not be copied for ZIP import, because the ZIP state is a static drop-zone. Use it only for consequence narration.

### v3-design-014 - Full Size Settings Preview

Better than the earlier Ventura settings direction because the live site is default and full-site mode is explicit. It still has a very large control surface and a fake ZIP input. Use it as a settings visual reference, not as the core IA benchmark.

### v3-design-015 - Fluent Focus Playground

Good full-site/focus hierarchy and real iframe. The settings surface is calmer than prior Windows-like designs. ZIP import is not a real file input, and the category/panel approach still feels close to a management console.

### v3-design-023 - Launch Deck to Play Mode

Excellent route-form density: GitHub repo/ref/path, Gutenberg PR/branch, PR URL, Blueprint URL, and full blueprint data are visible and specific. But it does not render the WordPress surface as a real iframe, the ZIP import has no actual upload control, and destructive confirmation is weaker than the typed/reset-name patterns. Use it as a route-form reference only.

## Weak Designs Or Weak Patterns

### v3-design-016 - Glass Control Center

The contrast/solid-mode idea is the right response to glassmorphism, but the artifact has no actual `<iframe>`, uses a fake ZIP text input, and presents enough glass panels/buttons that the visual treatment starts competing with the site. Glass should be a chrome-reduction technique, not the concept itself.

### v3-design-017 - Full-Size Site Tabs

Tabs are honest and complete, but the artifact uses a fake iframe, fake ZIP chooser, and a crowded tabbed management model. It solves focus mode in copy and layout, but tabs still make every surface feel equally important and force serial switching between Site, Files, Blueprint, DB, and Logs.

### v3-design-019 - Inspector Focus

The browser/inspector structure is reasonable, but the artifact carries the heaviest total button count in the batch and lacks a real ZIP upload. It risks becoming the broad DevTools dashboard that V3 was trying to avoid. A collapsed default is not enough if the opened state feels like every tool at once.

### v3-design-021 - Route Dock Sheet Shell

The mobile IA is good: Launch, Files, Data, Settings, focus preview, typed reset, and route forms. But the artifact does not use a real iframe and does not render a real ZIP upload. Treat it as a mobile-navigation sketch, not a complete V3 candidate.

### Repeated Weak Pattern: Checklist Compliance Without Real Controls

Several files include all the right words but not the right control states. "Choose .zip file..." inside a normal text input, a static drop-zone div, or a styled fake file chip is not enough. "Live WordPress iframe mock" without an iframe is also not enough. The next batch should be judged on artifact behavior, not README intent.

### Repeated Weak Pattern: Giant Manager Panel

Many designs open a single surface containing Start, Saved, Gallery, Settings, Files, Blueprint, Database, Logs, Export, and sometimes extra DB actions. That is calmer than showing everything at first glance, but it can still be a dashboard clone in disguise. The surface should answer the user's current task, not advertise the whole product at once.

### Repeated Weak Pattern: Button Count Creeps Back

First glance is generally calmer, but opened states often become button-heavy through stacked topbars, route cards, tabs, panel tabs, local toolbars, docks, and inline actions. The highest-risk examples are 014, 016, 017, 019, and 023. Before calling a design "calm," count the visible actions in the default state and in the first opened manager state.

## Criteria Audit

### Applies User Feedback Instead Of Making Another Console/Dashboard Clone

Mostly pass. 002, 009, 011, 013, and 018 clearly apply feedback from the liked directions rather than cloning them. 010 turns console history into supporting event narration, which is the right restraint. 014/015 improve settings shells but remain console-adjacent once opened. 016/017/019 show how easy it is to fall back into broad tool surfaces.

### Preserves Every Current Playground Feature

Mixed pass. The feature inventory is usually represented, but hard artifact gaps remain: non-iframe site mocks in 016/017/021/023, fake ZIP import in many designs, and inconsistent final states after destructive reset. No future worker should count feature preservation based only on labels.

### Makes The Live WordPress Site Full Size Or Strongly Focusable

Pass conceptually, uneven artifact-wise. 002, 003, 008, 009, 011, 013, 014, 015, and 018 are strongest because full-site/focus modes preserve Save, URL, WP Admin, Homepage, and Exit. 016/017/021/023 describe useful focus modes but weaken the brief by not rendering an actual iframe.

### Avoids Too Many Visible Buttons At First Glance

Mixed. 003, 009, 010, 011, and 013 are the calmest default states. 002 is acceptable because the inspector is contextual. 014, 016, 017, 019, and 023 carry too much visible system weight once opened. The next batch should evaluate both first glance and "first manager opened" glance.

### Includes Route-Specific Input States For PR/GitHub/Blueprint URL/ZIP

Mostly pass for PR/GitHub/Blueprint URL. Weak for ZIP. The best ZIP references are 001, 002, 005, 008, 009, 011, 013, and 018. A static drop-zone or text field should be treated as incomplete unless it clearly includes upload/drop behavior.

### Includes Save Consequences, Destructive Confirm/Cancel, And Final States

Improved but not finished. Confirm/cancel is now common, and typed confirmation is a strong pattern in 001, 002, 008, 011, 013, and 021. Save consequence is strongest when it changes identity, mentions local browser storage/OPFS, adds or highlights a saved row, and shows a toast/event entry. Final reset states should be more explicit across the board.

### Handles Mobile And Desktop Credibly

Pass for mobile-first and iPad designs: 001, 008, 011, 018, and 021. Inspector and launcher designs are credible if their sheets stay scoped. Settings and tabs designs are higher-risk on mobile because category lists and tab overflow can hide core tools. Do not let Database/Logs collapse into "More"; use Data/Debug as the clearer grouping.

### Uses Glass/Tabs/Settings/Launcher/iPad/Inspector Patterns Only Where They Improve Usability

Best use:

- Canvas/inspector: 002, because the metaphor is restrained around selected context.
- Launcher: 013, because the catalog leads into play mode.
- iPad: 018 and 008, because Split View solves site-plus-tool work.
- Inspector: 009, because DevTools depth is collapsed by default.
- Mobile sheets: 011, because named homes replace "More."

Weak use:

- Glass: 016, when the treatment becomes the reason for the layout.
- Tabs: 017, when every surface becomes a peer and multitasking disappears.
- Settings: 014/015, when the manager grows into a broad console despite a site-first default.
- Inspector: 019, when the opened state exposes too many buttons at once.

## Guidance For Future Workers

1. Start with a usable WordPress site, not a product map. The first screen needs path entry, refresh, Save/unsaved state, launcher access, tools access, and a way to enter full-site/focus mode.
2. Preserve a real iframe. A styled WordPress mock can sit inside `srcdoc`, but the artifact should still use an `<iframe>` because that is the product's central constraint.
3. Make ZIP import a real upload state. Use a file input or a clear drop/upload control, not a text placeholder or decorative chip.
4. Keep route forms specific. PR number/URL, Gutenberg PR/branch, GitHub repo/ref/path, Blueprint URL, and ZIP import need distinct shapes and validation hints.
5. Use one canonical reset flow. Quick settings can be an entry point, but Apply & Reset must land in the same confirm/cancel/final-state path as the Settings pane.
6. Show save consequences concretely: browser-local storage, changed playground identity, saved row, toast/event, and what refresh/reset would do.
7. Keep WP Admin and Homepage close to the live-site/focus controls. They are not rare advanced actions.
8. Do not hide Database and Logs in "More." On mobile, use a named Data or Debug home.
9. Count visible actions in the first opened manager state. If the user sees a catalog, tabs, local toolbars, side rail, and action buttons all at once, the design is not calm.
10. Let metaphors earn their keep. Launcher should improve starting/resuming; inspector should improve debugging/editing; iPad split should preserve site-plus-tool work; tabs should reduce navigation confusion; glass should reduce chrome without reducing contrast.

## Current Reference Ranking

- **Top benchmarks:** 002, 013, 018, 009, 011.
- **Useful supporting references:** 001 for sheet coverage, 003 for launcher staging, 005 for calmer settings, 008 for iPad split, 010 for event/consequence narration, 023 for route-form specificity.
- **Use cautiously:** 014 and 015 for settings visuals, 017 for tabs-only discipline, 019 for inspector structure.
- **Do not copy as-is:** 016 for glass density and fake iframe, 021/023 until the iframe and ZIP issues are fixed, any ZIP route that is only a text/fake chooser.

The next batch should stop proving that the required labels can be included. The higher bar is artifact fidelity: real iframe, real route controls, fewer first-open buttons, explicit consequences, and a live WordPress site that remains large enough to use.
