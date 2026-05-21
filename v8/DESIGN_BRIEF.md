# WordPress Playground Redesigns V8

V8 explores ten visual/design-system variations of the V7 `Quiet rail · depth tiers` structure.

Read first:

- `DESIGN_BRIEF.md`
- `BLUEPRINTS.md`
- `v7/DESIGN_BRIEF.md`
- `v7/designs/010-quiet-rail-depth-tiers/README.md`
- `v7/reviews/010.md`
- `v8/ANALYSIS.md`
- `v8/DIRECTIONS.md`

## Non-Negotiable Product Coverage

Preserve the existing WordPress Playground feature surface:

- Refresh, address/path input, current Playground identity, Save state, Saved Playgrounds/Sites access, Manager/tools access, settings access.
- Start routes: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`.
- Blueprint discovery: featured blueprints plus full gallery with search and category filters.
- Your Playgrounds saved/resume list.
- Site Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States: idle active session, loading/booting, Sites/launcher open, full Library open, save/resume, destructive Apply & Reset confirmation, reset final state, toast/notification.
- Responsive desktop at `1440x900` and mobile at `390x844`.
- The live WordPress surface must be a real `<iframe>` element.

Do not add product features such as AI assistants, accounts, collaboration, plugin marketplaces, analytics products, or cloud sync.

## Structural Pattern To Keep

Each V8 design is a variation of this structure:

- One live iframe at `z0`, visually dominant at rest.
- One quiet rail, or mobile bottom rail, for primary mode choice.
- One secondary pane that swaps content.
- One deeper Library/reset overlay at `z3`.
- A persistent Sites widget that shows live status and opens the same Sites surface as the rail.
- A single slim top capsule/row for browser-like controls, or a deliberate no-topbar treatment.
- Depth tiers as visual hierarchy only. Blur/shadow/elevation may communicate state; it must never be the thing users click.

## Fixes Required Versus V7 #010

- Keep idle visible affordances at eight or fewer, with an honest count in the README.
- Make the Sites widget persistent or explain exactly how live site status remains visible while the pane is open.
- Do not duplicate the current site name in both the top capsule and Sites widget unless one is clearly passive status.
- Mobile must not crop the first frame or force horizontal page overflow.
- If rail docks deep-link to Manager tabs, they must still open the same Manager pane, not separate surfaces.

## Required Files Per Design

Each design folder must contain:

- `index.html` — self-contained high-fidelity static HTML/CSS/JS.
- `meta.json`:

```json
{
  "num": 1,
  "title": "...",
  "summary": "...",
  "slug": "001-example"
}
```

- `README.md` with:
  1. thesis,
  2. V7 reference analysis applied,
  3. design-system/look-and-feel choices,
  4. flow coverage,
  5. what was remixed/merged/removed,
  6. trade-offs,
  7. self-critique rubric.

## Self-Critique Rubric

```text
[ ] Affordance count at idle <= 8?             Score: __/5
[ ] Iframe primacy + fullscreen route?         Score: __/5
[ ] One door per feature?                      Score: __/5
[ ] One secondary surface?                     Score: __/5
[ ] Depth is visual hierarchy only?            Score: __/5
[ ] Sites widget persistence/status?           Score: __/5
[ ] Mobile parity without overflow?            Score: __/5
[ ] Distinct design system beyond color?       Score: __/5
[ ] Product feature coverage?                  Score: __/5
```

Any score at or below 2 requires revision before completion.
