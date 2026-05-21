# V6 Design 040 - Spacious Consequence Capsule

## Thesis
This design solves the two-row top-bar problem with one stable command capsule and a quiet left rail. The capsule carries refresh, path, identity, Save, Sites, Manager, Settings, and full-site focus without splitting identity and context into persistent stacked rows. `Sites` is the canonical door for saved playgrounds, start routes, ZIP import, and blueprint discovery; `Manager` is the canonical door for settings, files, blueprint authoring, database, logs, WP Admin, Homepage, GitHub PR export, and ZIP download. The live WordPress site stays in an actual iframe and is the first usable surface.

## TypeUI Skill
I used the assigned TypeUI `Spacious` style skill. It is applied through Open Sans body text, Montserrat headings, IBM Plex Mono labels/statuses, an 8px spacing rhythm, 4px/8px radius tokens, generous panel padding, restrained white surfaces, and state colors mapped to consequences: blue for primary run/save work, amber for unsaved/reset warning, green for saved/final state, and red only for the typed destructive confirmation.

## Remix / Merge / Remove
I kept quiet-rail-to-loud as the information architecture, not the skin: two rail destinations plus one secondary surface. I kept smart-resize as a visible gauge with site/work detents and a full-site focus mode. I borrowed depth only as polished surface hierarchy, using blur and elevation to clarify the panel and command capsule rather than making depth the navigation model. I kept the useful Sites-widget idea by making `Sites Ledger` the saved/start/blueprint/import door. I removed the persistent two-row bar entirely and avoided splitting Start, Blueprints, Files, Logs, Settings, or Export into separate primary doors.

## Trade-offs
The command capsule is denser than a pure rail-only interface, but it keeps the current Playground top-bar capabilities discoverable without a second row. The secondary surface opens wide enough for real forms and code, which means the iframe yields space while a tool is active; the ratio gauge and full-site mode make that consequence explicit. Mobile uses the same model as a bottom rail plus bottom sheet, so the iframe remains visible but the panel covers more of the screen during tool work. The ZIP route is represented as an upload/drop replacement state, while export actions use toast final states instead of a full GitHub flow because the current product only exposes the actions.

## Consequence Flow
The Settings tab finishes the destructive Apply and Reset flow: warning copy, typed `RESET` gate, cancel state, final confirm, progress overlay, toast, and changed active identity (`Reset Playground - WP 7.0`). Save changes `Unsaved Playground` to `Local Playground` and updates the saved-state chip and rail status. Import .zip, blueprint boot, resume, export PR, and download .zip each show the immediate consequence through loading or toast state.

## Self-critique / Revision Note
After checking the V6 insights and audits, I revised toward a quieter first viewport, two primary destinations only, a visible ZIP upload state, and a stronger reset final state. The remaining weakness is that Settings is also reachable from the capsule as a deep link into Manager; the UI labels it as version/settings access rather than a separate settings surface, but a stricter version could remove that capsule button and rely only on Manager.
