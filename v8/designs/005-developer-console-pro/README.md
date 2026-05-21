# V8 005 - Developer Console Pro

## Thesis

Developer Console Pro treats WordPress Playground like a focused browser DevTools surface: the live WordPress iframe is the product, while the surrounding chrome behaves like a compact inspector. The persistent structure stays V8-native: a real iframe at `z0`, a quiet two-item rail at `z1`, one dense secondary pane at `z2`, and z3 overlays only for the Blueprint Library and destructive reset flow. The design leans on monospace metadata, small structured tables, inspector tabs, and status pips instead of decorative glass or terminal-style command echo.

## V7 Reference Analysis Applied

V7 #010 worked because it had a strong layer contract: iframe, quiet rail, one pane, and a deeper modal. This version keeps that contract but fixes the review issues directly. The idle rail has only `Sites` and `Manager`, with Settings, Files, Blueprint, Database, and Logs as Manager tabs instead of five separate rail docks. The Sites widget remains visible when the pane opens and shifts to the iframe edge on desktop. The top chrome no longer repeats the current site name, leaving the Sites widget as the single persistent site identity and status surface.

## Design System

The look is modeled after professional inspector tools: dense dark chrome, one-pixel dividers, small-radius controls, JetBrains Mono metadata, compact tables, and structured log rows with level, timestamp, message, and source columns. Depth is expressed through blur/elevation tokens only: `z0` iframe stays sharp, the quiet rail uses `8px`, the pane uses `18px`, and the Library/reset overlays use `36px`. The palette is DevTools-neutral with blue focus, green runtime health, yellow unsaved state, and red destructive confirmation.

## Flow Coverage

The prototype covers idle browsing, path navigation, refresh, save locally, saved playground resume, all six start routes, featured blueprints, the full 43-blueprint Library with search and category filters, Manager Settings, Files, Blueprint editor, Database, Logs, WP Admin/Home navigation, Export to GitHub PR, Download `.zip`, Import `.zip`, boot/loading, toast notifications, Apply Settings & Reset typed confirmation, reset final state, and mobile parity at 390px with a bottom rail and bottom sheet.

## What Was Remixed / Merged / Removed

The separate launcher drawer and Site Manager sidebar are merged into one pane. Sites owns saved/resume, new Playground routes, import, and blueprint discovery. Manager owns the five product tabs and all settings access, so there is no separate settings popover. Additional actions are visible in Manager rather than duplicated in top chrome. The design deliberately removes terminal-like command transcripts; logs are structured records, not an echoed CLI.

## Trade-offs

The interface is denser than the V7 glass reference and assumes users are comfortable with inspector-style controls. That density is intentional for the Developer Console Pro direction, but it means labels are shorter and some secondary actions sit inside tabs. The top bar keeps only refresh, address, save, and focus, which preserves a low idle count but makes new-session discovery depend on the rail or Sites widget.

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

Idle affordance count: Refresh, address input, Save, Focus, Sites rail button, Manager rail button, and Sites status widget = **7**. The rail status dot is passive runtime telemetry, not a control.
