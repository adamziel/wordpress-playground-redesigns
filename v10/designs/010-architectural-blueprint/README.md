# 010 — Architectural Blueprint

A drafting-board interpretation of the v7 #010 Quiet Rail model. The chrome reads like a technical drawing pinned to a navy drafting board: a faint cyan grid is imprinted across the canvas, every chrome element wears 2px corner ticks instead of border-radius, and 1px cyan hairlines connect numbered callouts to the interface elements they describe. JetBrains Mono carries every dimension figure ("W=380 / H=900", "Ø8 SAVE", "Δ 11.4 MB"); Inter Tight handles labels and headings in a tight technical sans.

## Locked vs. explored

**Locked (model):** left rail + one swap pane + slim top capsule + corner site widget + modal Library overlay + mobile bottom-bar mirror. The WordPress iframe remains the only sharp surface; the rail, pane, and capsule recede behind a quiet desaturation and a translucent navy fill so the live site always wins the eye.

**Explored (idiom):** drafting / blueprint visual language — annotations, leader lines, dimension callouts, and "sheet" tabs. The pane is framed like a callout window on a technical drawing, complete with a dimension strip across its head. The top capsule becomes an annotation strip with a leader-line accent that points at the iframe; the corner widget is rendered as a dimension callout. The Library overlay is staged as a drafting board with category "sheets" running across its top.

**Pane arrangement:** 3-dock grouped (Sites · Inspector · Telemetry). Inspector folds Files + Blueprint into two tabs; Telemetry folds Database + Logs into two tabs. Settings is hosted as a sheet inside the Sites pane head.

## Trade-offs

The blueprint metaphor is heavy with ornament — leader lines, callout numbers, and dimension labels. We treat them as quiet metadata (cyan at 35–55 % opacity) so they never compete with the iframe. The temptation to letter everything in ALL CAPS is restrained to dimension figures and sheet numbers. No border-radius anywhere on chrome — the drafting square corner is the consistent vocabulary. The trade is legibility under dense data: we lean on JetBrains Mono and tight 11–12px sizing, with generous 16–24px gutters.
