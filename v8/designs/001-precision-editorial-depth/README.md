# V8 #001 — Precision Editorial Depth

## Thesis

Precision Editorial Depth treats WordPress Playground like a publication editing desk: the live WordPress iframe is the paper on the table, the quiet rail chooses the desk drawer, and one loud editorial pane opens for curation, inspection, settings, files, blueprints, database, and logs. The visual system is intentionally black, white, typographic, and ruled with thin lines. Depth is expressed through hierarchy, shade, and line weight only: `z0` is the real iframe, `z1` is the quiet rail and top chrome, `z2` is the single editing pane, and `z3` is the Library/reset overlay.

## V7 Reference Analysis Applied

The V7 reference worked because it kept the iframe dominant and separated rail, pane, and modal jobs. This version keeps that structure but fixes the review issues: the rail has only two idle docks, Sites and Manager; the current site name is not repeated in the top chrome; the Sites status capsule stays persistent while panes and overlays open; and mobile uses the same rail/pane/overlay model as a bottom rail plus bottom sheet without horizontal overflow.

## Design System

The direction is Precision Editorial: high-contrast black and white, sharp serif display type, compact grotesk UI labels, tabular numerals, hairline dividers, square controls, and a single loud pane that feels like an editor's working column. There are no colored gradients, glass ornaments, nested cards, or decorative imagery. State is conveyed with precise labels, active rules, checkered loading marks, and restrained inverted black actions.

## Flow Coverage

The prototype preserves the current Playground surface: refresh, path/address input, save state, Sites access, Manager access, fullscreen, start routes for Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, and Import `.zip`; featured blueprints plus a full 43-item Library with search and category filters; saved playground resume; Site Manager Settings, Files, Blueprint editor, Database, and Logs tabs; WP Admin/Homepage shortcuts; Export to GitHub PR and Download `.zip`; save/resume/toast states; booting state; and destructive Apply Settings & Reset confirmation plus final reset state.

## What Was Remixed, Merged, Or Removed

The old launcher drawer becomes the Sites section inside the one pane. The settings popover is removed as a separate surface because Manager Settings already owns version, PHP, language, network, multisite, Apply, and Reset. Database and Logs are not rail docks; they are Manager tabs. The full blueprint browser escalates to the only `z3` Library overlay. The Sites status capsule and the Sites rail dock intentionally open the same Sites pane, but the capsule is primarily live status and remains visible across states.

## Trade-Offs

This layout is stricter and less immediately labeled than a conventional toolbar. The payoff is a defensible idle affordance count and a calmer iframe. The top chrome omits the playground title to avoid duplicate identity, so users rely on the persistent Sites capsule and Manager title field for site identity. On mobile, the Sites capsule floats above pane content when the bottom sheet is open; that preserves status visibility at the cost of a small persistent overlay.

## Self-Critique Rubric

```text
[x] Affordance count at idle <= 8?             Score: 5/5
[x] Iframe primacy + fullscreen route?         Score: 5/5
[x] One door per feature?                      Score: 4/5
[x] One secondary surface?                     Score: 5/5
[x] Depth is visual hierarchy only?            Score: 5/5
[x] Sites widget persistence/status?           Score: 5/5
[x] Mobile parity without overflow?            Score: 5/5
[x] Distinct design system beyond color?       Score: 5/5
[x] Product feature coverage?                  Score: 5/5
```

Idle affordance count: Refresh, address/path input, Save, Fullscreen, Sites rail dock, Manager rail dock, persistent Sites status capsule = **7**. The WordPress mark is passive identity, not a control.
