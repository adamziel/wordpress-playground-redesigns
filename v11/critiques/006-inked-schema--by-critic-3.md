# Critique — 006-inked-schema — by Critic 3

## Verdict
Minor revisions — the captioned-figure concept is strong, the five marks are genuinely distinct silhouettes, and the single ink-blue accent is correctly scoped. Two structural calls (rail width, "Fig. N · Sites" as caption-under-mark) and a polish pass are all that stand between this and ship.

## Hard violations of v11 taste constraints
- [ ] **Rail width is 104 px.** Brief asks for "~64–72 px". A 104 px rail is 30–60% over budget. The dock layout (mark on top + `Fig. N · Sites` caption beneath) doesn't comfortably fit at 64 px, so the design has paid for distinctness by widening the rail — a real trade. The lead should bless this or you should compress (single-line `Fig 3` only, drop the dot-bullet name, move "Sites" into the pane heading).
- [ ] **Constraint 9 ("each rail dock has one mark; no secondary text under buttons") is borderline.** Each dock shows a schema mark AND a "Fig. N · Sites" caption below it. The DIRECTIONS spec explicitly asks for this layout, so the designer is following orders — but reading constraint 9 strictly, the caption beneath the mark IS the secondary text the brief forbids. Two paths: (a) get an explicit exception logged from the lead because the caption IS the mark in your idiom; or (b) collapse to mark-only on the rail and put `Fig. 3 · Blueprint` only as the pane title when active.
- [ ] **Identity mark has two pieces** (`P` + `Pl. VI` caption) — same caption-under-mark issue as the docks. Pick one: just `P`, or just `Pl. VI`.

## Annotation overlays / explainer chrome
- [ ] Same overlap issue as several other v11 designs: the panel-label `PLATE A · Running Session` and panel-note `Fig. 3 active · Blueprint plate referenced from the running text` appear over the topstrip in the desktop screenshot. Either move them above the desktop frame or reduce the topstrip height so it doesn't fight for the same vertical band.
- [ ] The pane eyebrow `PLATE · FEATURED` is good — that's pane chrome, not annotation chrome, and it earns its place.

## Rail button distinctness (Forest-Botanical test)
- **Passes cleanly.** The five SVG marks have genuinely different silhouettes:
  - `fig1`: solid triangle (filled outline) — closed shape
  - `fig2`: circle with radial tick-marks — gear/sun
  - `fig3`: 4 horizontal strata bracketed by 2 verticals — ladder/strata
  - `fig4`: stacked ellipses (cylinder) — barrel
  - `fig5`: jagged scribble polyline — oscillogram
  Each one would be recognized at thumbnail size. Best rail-distinctness in your set, alongside 005.
- The 1 px ink-blue underline beneath the active mark is a quietly perfect active cue — verified at CSS line 96 (`.rail .dock.active .mark::after { ... background: var(--inkblue) }`).

## Iframe primacy
- Strong. Chrome is journal-paper grey on dark; iframe wallpaper is the warm cream-coffee `#fdfaf1`. The single ink-blue is small enough that it reads as an editorial mark, not a color zone.
- Confirmed `--inkblue: #5C8AA6` is referenced only by: `.save-pill.saving` color, `.rail .dock.active .mark::after` background, the `em` in pane headings (`<h3>Your <em>Playgrounds</em></h3>`), and the booting-state lantern stroke. The pane-heading em IS a third use site beyond the spec ("saving pill + active dock left bar") — DIRECTIONS for 006 says ink-blue lives in two places. **Strip the `em` color from pane headings** to stay strict.

## Typography sanity
- Crimson Pro + Public Sans. No Inter/Roboto/JetBrains references in chrome. Mono is correctly limited to code-editor zones (logs, blueprint JSON, file editor).
- Path input in the address bar uses Public Sans — proportional, correct.
- Crimson Pro italic at 10–11 px (the `Fig. N` caption) is at the bottom edge of legibility — verify on a non-HiDPI display. If it disappears, bump to 11.5 or 12 and tighten letter-spacing.

## Clarity & focus test
- A stranger would point to the iframe and pane in 2 seconds and to the rail in 3 seconds because the captions `Fig. 1 · Sites`, `Fig. 2 · Manager` literally name themselves. The rail teaches itself on first read — that's the strongest property of the idiom.
- They would NOT instantly understand the corner widget `Fig. — Coffee Shop` because there is no figure number — feels like an incomplete caption. Either give it a number (`Fig. § · Coffee Shop`) or drop the `Fig.` prefix.

## Suggested concrete fixes (Round 2)
1. **Decide on rail width** with the lead. If 104 px stays, log it as an approved deviation. If not, compress to mark-only docks at 64–72 px and move the caption into a hover-tooltip-equivalent / pane title.
2. **Strip the inkblue tint from pane heading `<em>`** — single accent should be saving pill + active mark underline only. Use ink-secondary or italic for the `<em>` instead.
3. **Collapse the identity mark** to a single piece — drop either the `P` or the `Pl. VI` caption to match constraint 9.
4. **Fix the panel-label / panel-note overlap** with the topstrip in the desktop screenshot.
5. **Number or de-Fig the corner widget** so it doesn't read as an unfinished caption.
6. Verify the `Fig. N` caption stays legible at 100% zoom on a 1× display — if not, lift to 11.5 px.
