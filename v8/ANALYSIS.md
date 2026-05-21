# V8 Analysis — Quiet Rail · Depth Tiers

Reference: `v7/designs/010-quiet-rail-depth-tiers/`.

## What Makes The Reference Work

The strong idea is not the dark/glass skin. The strong idea is the contract:

- The live WordPress iframe is the only `z0` sharp surface.
- A quiet rail is the one persistent IA object.
- A single loud pane opens beside the rail and swaps content.
- A deeper modal/library layer is allowed, but only as an escalation.
- Depth is visual state, not navigation. Users click rail docks, tabs, widgets, and buttons; they never click blur.
- Mobile mirrors the same model by rotating rail to bottom tabs and pane to a bottom sheet.

The visual hierarchy is successful because every layer has a job. The iframe owns content, the rail owns mode choice, the pane owns detail work, and the library/reset modal owns temporary focus. The quantified blur labels make that system explicit enough to evaluate.

## Visual Analysis

The reference uses a dark, high-contrast editorial shell with frosted chrome. The live site is a deep purple/blue canvas, while rail, pane, and library each get stronger blur. The rail is quiet because it is narrow, icon-only, and visually subordinate to the iframe. The pane feels loud because it expands into reading/editing density. The top capsule works because it is one row and behaves like browser chrome, not an app toolbar.

The best visual details:

- z-tier chips explain the depth system at a glance.
- Rail and pane share material language without looking like one giant sidebar.
- The iframe remains visually uninterrupted at idle.
- Status is encoded in small pips, not banners.
- The destructive reset state uses a diff and typed confirmation rather than a warning blob.

The weakest visual details:

- The default dark glass skin can become samey if copied.
- Several controls are tiny, especially in the top capsule.
- The mobile screenshot overflows and crops important chrome.
- The Sites widget is too easy to lose once the pane opens.
- Coffee Shop appears in multiple places, duplicating identity.

## User Flow Analysis

The structure maps well to current Playground flows:

- **Browse current site:** iframe is visible first, with a direct fullscreen route.
- **Start/resume/import:** Sites rail dock and Sites widget open the same pane, where saved sites, six start routes, and import live.
- **Browse all blueprints:** Sites pane escalates to a z3 Library overlay with search and category filters.
- **Inspect/change current site:** Manager pane contains Settings, Files, Blueprint, Database, and Logs.
- **Reset:** Settings escalates to a typed/diff/snapshot destructive flow.
- **Export:** More menu and/or Manager actions surface GitHub PR export and Download zip.
- **Debug:** Logs live in Manager; boot states should show structured progress, not terminal echo.
- **Mobile:** Bottom rail plus bottom sheet preserves the same mental model.

The reference’s main flow weaknesses are affordance count and duplicate doors. V8 should reduce idle control count by treating Site Manager as the home for Settings, Files, Blueprint, Database, and Logs instead of putting every tab on the rail. Sites may have two ergonomic anchors only if both open the same Sites surface and the widget remains persistent.

## V8 Structural Rules

All V8 variations keep the same product structure but explore different design systems:

1. Iframe is the only `z0` surface at rest.
2. One quiet rail or bottom rail chooses the secondary surface.
3. One loud pane swaps content. No competing sidebars.
4. Depth tiers are visual hierarchy only.
5. Sites widget remains visible as live status and opens the Sites surface.
6. Top chrome is one slim row/capsule or intentionally absent; never two rows.
7. Settings is not a separate home if Manager already has Settings.
8. Mobile must be a first-class equivalent, not a cropped desktop.
9. Each variation must prove at least these states: idle site, Sites open, Manager open, Library open, Reset confirm/final, mobile.
10. Each variation must preserve every feature in `DESIGN_BRIEF.md` without adding product features.

## V8 Improvement Targets

- Reduce idle visible affordances to a defensible eight or fewer.
- Keep the Sites widget persistent when pane content changes.
- Remove duplicate site identity between top capsule and Sites widget.
- Make smart focus or depth state legible without adding a draggable resize control.
- Use a distinct design system per variation: typography, density, surface, color, motion language, icon treatment, and component shape must all change, not just accent color.
