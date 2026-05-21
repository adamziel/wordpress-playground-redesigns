# Critic Round 010 - V6 Playground Redesign Audit

## Verdict

The V6 batch is pointed in the right direction, but the bar should stay high. Most completed designs understand the V5 feedback at the README level: Sites owns saved identity, new starts, import, and blueprint discovery; Site Manager owns settings/files/blueprint/database/logs; smart resize and focus mode are common; persistent two-row top bars are mostly avoided.

The weaker part is execution. Several designs pass by claiming the right ownership map while still showing too many permanent controls, defaulting into an already-loud pane, or using a styled WordPress mock instead of the required live-site iframe. Visual variation is also narrower than the assigned TypeUI range suggests: the round leans heavily toward white surfaces, blue accents, 56px top bars, cards, tabs, and ratio gauges. The best entries are credible product shells; the median entry is a checklist-complete remix of the same Sites/Manager pane.

## Benchmarks

### Strongest Overall: v6-design-002 - Ratio Map Playground

This is the cleanest benchmark for applying `023-smart-resize` without losing product coverage. It uses an actual `<iframe>`, a labeled seam with snap ratios, fullscreen escape, route-specific inputs, all six launch routes, saved sites, blueprint search/category filters, Site Manager tabs, export/download, loading, save/resume, reset confirmation, toast state, and responsive CSS. It also keeps the two-row top-bar lesson out of the structure.

Its weakness is visual sameness: Clean becomes the common V6 white/blue product shell. Future workers should borrow its interaction proof, not its exact palette and component grammar.

### Best IA Synthesis: v6-design-005 - Rail Smart Resize

This is the strongest quiet-rail plus smart-resize synthesis. Two rail doors, Sites and Site Manager, are easier to defend than designs that add separate Settings, Tools, and Export doors. The actual iframe, route forms, saved-state consequence, destructive confirm, manager tabs, export menu, and focus/full preview behavior are present.

The design still exposes a lot once the secondary surface is visible, and it duplicates Save as a command-bar button plus Sites notice action. That may be acceptable because both are the same state transition, but the next batch should make the consequence visible without making Save feel like two unrelated doors.

### Best Visual Differentiation: v6-design-006 - Editorial Sites Resize

This is the clearest TypeUI translation in the batch. The editorial typography, rule-based grouping, monochrome-first palette, and denser work-page composition feel genuinely different from the default white/blue dashboard pattern. It uses an actual iframe, keeps Sites and Workbench ownership legible, includes export as a Workbench surface, and makes smart resize part of the layout.

The risk is mobile and topbar density. The CSS allows the topbar to grow to 104px and then 208px at small widths, which starts to recreate the disliked "persistent stacked chrome" problem even though it is technically one toolbar. Mobile needs stronger compression and a clearer iframe minimum.

### Strongest Style Risk That Still Mostly Works: v6-design-010 - Resize Gauge Playground

The Mono treatment is not just color. Space Mono/JetBrains Mono, hard edges, compact density, and visible ratio labels make logs, code, and route state feel coherent. It uses an actual iframe, keeps the pane as one surface, and the seam is readable as an interaction rather than decoration.

The risk is that the green mono shell can drift toward terminal-first flavor. It remains product-credible here, but future Mono entries should keep the WordPress site visually primary and avoid making the chrome feel like a different developer tool category.

### Strong But Disqualified Until Fixed: v6-design-004 - Spacious Depth Map

The IA is one of the cleaner versions: two rail doors, Sites and Site Manager; depth used as polish; no separate blueprint door; save consequence; route-specific forms; manager tabs; exports in the Manager menu; focus mode; mobile consideration. But it does not render the WordPress site as an `<iframe>`. The preview is a handcrafted `.site-surface` mock. That violates the hard "iframe stays" constraint and weakens the "live WordPress site usable at full size" test.

If future workers fix only one thing in this design family, replace the styled preview mock with an iframe and keep the rest of the ownership map.

## Concrete Weak Designs And Patterns

### v6-design-001 - Good Warm Rail, Missing Iframe

The warm professional rail is a useful answer to "quiet-rail IA yes, quiet-rail visual no." It also includes route-specific forms, save consequences, reset modal, exports, toasts, and mobile rail rotation. The fatal issue is that the WordPress site is not an iframe. The design uses a custom `.site` mock, so it cannot prove that the real live site remains usable.

It also starts in a loud/pane-open state, which makes the quiet-to-loud promise harder to evaluate at first glance.

### v6-design-003 - Useful Single Widget, Too Much Hidden Behind One Object, Missing Iframe

The one Sites widget is directionally correct: it avoids copying four corner widgets and treats saved identity plus launch as a canonical door. The three rooms, Sites/Manager/Export, are understandable. But the design again uses a styled site mock instead of an iframe. It also overloads the Sites widget as the only persistent door for nearly everything. That is cleaner than four widgets, but it risks making Site Manager discovery too indirect for a tool with Files, Database, Logs, Blueprint editor, and Settings.

The Refined style is less convincing than its README claims. Playfair-style UI copy makes the shell feel polished, but much of the structure still reads as the same white card grid used elsewhere.

### v6-design-007 - Material Shell, But The IA Regresses

This is the clearest weak pattern to avoid. It uses an actual iframe and covers many features, but the rail has separate Sites, Settings, Tools, Export, Focus, and Full buttons while the topbar also carries refresh, path, name, and Save. That is too many visible doors at first glance and it weakens the V6 lesson: Sites and Manager should be canonical, with Settings and Export as destinations inside Manager or deep links into the same surface.

The separate Export rail door is especially questionable. It is not a new product feature, but it is a third primary destination for something the current product treats as Site Manager additional actions. V6 should reduce doors, not promote every task to rail level.

### v6-design-009 - Good Paper Direction, But Three Rail Doors

The paper styling is a welcome break from the white/blue shells, and the actual iframe plus full gallery and route inputs are valuable. However, the rail has Sites, Tools, and Settings. That split partially revives the current product's settings duplication problem. Settings should be a Manager/Tools tab or a deep link into that tab, not a separate primary rail concern.

The deck is also dense at 390px. It preserves product logic, but future paper entries need stronger small-screen hierarchy so the iframe does not feel like a background behind a form catalog.

### v6-design-014 - Competent, But Too Close To The Batch Average

This is a solid Clean smart-resize implementation with an actual iframe, clear ratio labels, feature coverage, route-specific inputs, and final-state affordances. It is also visually and structurally close to v6-design-002: white surfaces, blue/violet accents, top command bar, left pane, seam gauge, card grid, and Manager tabs. It is a good baseline, not a new direction.

The top-bar Site Manager and Settings buttons still risk reading as two doors even though the README defines Settings as a deep link. The UI needs to make that deep-link relationship unmistakable.

## Product Coverage

Most completed V6 designs preserve the visible feature inventory better than earlier rounds. The common coverage is strong:

- Top controls: refresh, path/address, name/unsaved state, Save, Sites/Saved Playgrounds access, Site Manager access, settings route, focus/fullscreen.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`.
- Blueprints: the five named featured entries plus a larger/full 43 gallery in most entries, with search and the required category filters.
- Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States: loading/booting, active session, launcher/gallery open, save/resume toast, destructive reset confirmation, cancel path, and some final/ready state.

The main product gaps are execution-specific:

- v6-design-001, v6-design-003, and v6-design-004 do not use an iframe for the WordPress site.
- Some ZIP routes are represented as text fields rather than upload/file states, especially v6-design-005, v6-design-006, v6-design-007, and v6-design-010. That is weaker than a visible `.zip` picker/dropzone.
- Several reset confirms show the phrase UI but do not strongly demonstrate disabled-to-enabled final action plus post-reset ready state. v6-design-002, v6-design-005, v6-design-007, and v6-design-010 are stronger here than the static-confirm entries.
- Several entries default to a pane-open/loud state, so idle restraint and first-touch iframe primacy are asserted more than proven.

## Applying V5 Feedback

### Quiet Rail IA/Interactions Yes, Quiet Rail Visual No

The batch largely learned this. v6-design-001, 004, 005, 007, and 009 keep rail/pane ownership without copying the dark monochrome V5 #018 skin. v6-design-005 is the best version because the rail has two true doors. v6-design-007 and 009 weaken the lesson by adding extra rail destinations.

### Smart Resize Interaction And Design Yes

This is the strongest V6 uptake. v6-design-002, 005, 006, 010, and 014 all make ratios visible and offer focus/full preview. The next bar is functional clarity: the gauge should visibly change layout and should not become just a decorative seam label.

### Two-Row Top Bar No

No completed design directly copies V5 #030 as two persistent horizontal rows. Good. But the anti-pattern reappears indirectly when top bars wrap or when global controls multiply. v6-design-006's mobile topbar expansion and v6-design-007's rail-plus-topbar button load are the clearest warnings.

### Three-Layer Depth Visual Yes, Depth Interactions No

Most designs use depth correctly as polish: elevation, tint, blur, modal layer. None of the stronger entries asks users to navigate a z-stack. v6-design-004 is the best conceptual depth treatment, but its no-iframe implementation blocks it from being a benchmark.

### Sites Widget Interaction Yes

The Sites widget lesson is broadly applied. v6-design-003 is the purest one-widget experiment; v6-design-006 and 014 are better production-shaped versions because Sites is prominent without making every management task feel hidden behind it. Future workers should keep Sites as the launch/saved/blueprint door, not as a catch-all label for the entire product.

## Visual System Audit

The TypeUI requirement is only partially successful. Workers name the assigned skills, and most apply fonts, radii, spacing, and state colors. But the rendered systems converge:

- Common structure: topbar plus left pane plus seam gauge plus card grid.
- Common palette: white/near-white surfaces, blue primary, gray borders, blue active chips.
- Common controls: pill buttons, segmented tabs, cards, Lucide icons, bordered inputs.
- Common content rhythm: "Sites owns..." map cards followed by route cards and manager tabs.

The most differentiated entries are v6-design-006 Editorial, v6-design-009 Paper, and v6-design-010 Mono. The least differentiated are v6-design-002 and v6-design-014, which are both competent but visually samey. v6-design-007 claims Material, but the result reads like another white card shell with purple accents rather than a distinctly Material surface model.

Future visual systems should vary at the layout/component level, not only in fonts and accent colors. Editorial can use rule-based dense reading surfaces; Paper can use tactile document sheets and ink hierarchy; Corporate can use precise enterprise tables and command grouping; Material can use stronger elevation/state mechanics; Premium can use tighter polish and fewer visible controls. Keep it professional, but stop letting every design become "white pane, blue cards, gauge."

## Mobile And Desktop

Desktop is generally credible when the iframe exists. The common failure is not desktop layout but first-glance restraint: many designs open the secondary pane by default and therefore show dozens of controls in the first viewport.

Mobile is more uneven. Rotating smart resize into a vertical split is a good shared solution. The weak cases let the toolbar consume too much height, collapse labels without preserving hierarchy, or make the blueprint gallery a long scroll with little iframe presence. v6-design-006 explicitly risks a 208px mobile topbar. v6-design-009 and v6-design-014 are credible but dense. Future mobile work should prove three states: quiet active site, Sites open, Manager tool open, each with a visible path back to full preview.

## Guidance For The Next Batch

1. Use a real `<iframe>` for the WordPress site. A styled mock does not satisfy the brief, even if it looks like Playground.

2. Show the quiet state as a real state. If the default screenshot is already a pane full of route cards, the design has not proven "quiet-to-loud."

3. Keep primary destinations to Sites and Site Manager unless a design has a very strong reason. Settings, Files, Blueprint, Database, Logs, WP Admin, Homepage, Export to GitHub PR, and Download `.zip` should live in or deep-link into the Manager surface.

4. Make the Sites door canonical but not overloaded. Sites should own saved identity, resume, all six start routes, import, and blueprint discovery. It should not become an ambiguous "everything drawer."

5. Treat route-specific input states as required UI, not labels. PR needs PR number/URL, Gutenberg needs PR/branch/URL, GitHub needs repository plus type/path, Blueprint URL needs URL, ZIP needs upload/dropzone.

6. Make save consequences visible without multiplying Save. A notice can explain loss on refresh, but the action should clearly be the same Save state as the toolbar/name/Sites identity.

7. Destructive reset must show consequence, cancel, disabled or gated final confirmation, and a post-action loading/ready/toast state.

8. Full-size site focus must be obvious. Smart resize detents are good, but there must be a strong iframe-first mode where WordPress is actually usable, especially on mobile.

9. Do not let mobile recreate the two-row top-bar failure by wrapping one toolbar into multiple persistent rows. Collapse labels, move secondary content to a sheet, and keep a usable iframe floor.

10. Push TypeUI at the component-system level. The next batch should not all be topbar/pane/gauge/card variations in blue and white.

11. Avoid extra product surface. The problem is not missing features; it is ownership, discoverability, and focus around the existing Playground feature set.

## Ranked Shortlist

1. v6-design-002 - best overall smart-resize/product-coverage benchmark.
2. v6-design-005 - best quiet rail plus Sites/Manager ownership.
3. v6-design-006 - best visual differentiation with credible product logic.
4. v6-design-010 - strongest distinctive technical style with a real iframe.
5. v6-design-014 - solid but too similar to v6-design-002.
6. v6-design-009 - promising paper direction, but Settings as a rail door is a regression.
7. v6-design-004 - strong IA/depth concept, but fails the iframe constraint.
8. v6-design-001 - good warm rail direction, but fails the iframe constraint and starts too loud.
9. v6-design-003 - useful widget experiment, but fails the iframe constraint and overloads one object.
10. v6-design-007 - feature-rich, but too many visible primary doors and a weaker V6 IA.

