# 006 — Inked Schema (Technical Journal)

## Thesis
An 1890s engineering journal — diagram, caption, plate, schedule — printed in dark mode. The user is a draftsman at a roll-top desk; the rail is a column of captioned figures cut into copper. Each tool is its own plate; each plate has a number, a caption, and a hand-drawn schema mark. Decoration is illegal. The eye learns "Fig. 3" the way it learns chapter numbers — without effort.

## What is locked vs. explored
**Locked (per v7 #010):** one iframe-primary surface; one ~64 px quiet left rail with identity mark + exactly five distinct dock buttons (Sites · Site Manager · Blueprint · Database · Logs); one swap-content pane to the right of the rail; slim top capsule with refresh, address bar, save-state pill, fullscreen toggle and a More menu containing Export to GitHub PR and Download .zip; corner site widget at the iframe's bottom-left; modal Library overlay with 10 categories, search, and ≥ 16 blueprint cards; mobile mirror at 390 × 844 with the rail rotated to a bottom tab bar.

**Explored:** the engineering-journal idiom. Each rail dock is a **"Fig. N" caption** in Crimson Pro italic 10 px paired with a unique hand-drawn SVG schema mark beneath:
- **Fig. 1 · Sites** — a draftsman's triangle (three intersecting strokes)
- **Fig. 2 · Manager** — a gear-tooth notch (circle with cut teeth)
- **Fig. 3 · Blueprint** — a cross-section ladder (horizontal strata)
- **Fig. 4 · Database** — a cylinder stack (three nested ellipses)
- **Fig. 5 · Logs** — a scribble line (recorded oscillation)

Every mark is genuinely different in silhouette; no two could be confused at a glance. Inactive: ink-secondary stroke on dark plate. Active: caption brightens to ink-primary; the schema mark gains a 1 px ink-blue **underline** running beneath it — the way a journal underlines the figure currently referenced in the text.

Single accent **ink-blue #5C8AA6** lives in just two places: the underline under the active mark and the saving pill text. No second hue anywhere. Section heads inside the pane use a single hairline rule; cards do not nest borders.

## Focus-test answer
**Why is the iframe the loudest object on the screen?** Because the rest of the chrome reads as captioned plates — the brain treats it as the periphery of a page, not as content. The iframe is the only zone large enough and bright enough to be "the figure being studied"; everything else is captions and schedules around the edge.

## Trade-offs
The schema marks demand the user learn five hand-drawn shapes. They are reinforced by the Fig. number and the underlined active state, so the cost is paid in the first session. Crimson Pro italic at 10 px risks reading as decorative — we keep the line short (`Fig. 3`) so it functions as a label, not a sentence. Single-accent strictness means status (saved / stale / unsaved) reads as muted neutrals, which can feel low-contrast for users skimming status at speed; the 2 px ink-blue underline on the active dock and the position-encoded save-pill dot keep state legible without adding a second hue.
