# Critique — 010-subterranean-telecom — by Critic 1

## Verdict
Minor revisions. Cleanest of the three I reviewed: rail is unambiguous (5 patch labels + identity, nothing else), single muted-teal accent is honoured, no annotation overlays, the typography decision (one variable face flexed on weight + MONO axis) is exactly the kind of single-source-of-truth the v11 brief rewards.

## Hard violations of v11 taste constraints
- [ ] **Rule 8 (no borders inside borders).** The chrome stacks borders 2-deep in places that matter:
  - `.panel` (border, index.html:45) → `.topstrip` (border, :75) → `.topstrip .addr` (border, :79). Three concentric on the address field.
  - `.panel` → `.pane` (border-right, :95) → `.src .it` cards (each `border:1px solid var(--rule)`, :128). Three-deep on the six start-routes.
  - `.panel` → `.code-editor` / `.blueprint-json` (each border, :164/:170).
  Fix: remove the inner borders, let `--bg-page` vs `--bg-card` tone do the work. The brief permits "a single bottom rule per section" only.

## Annotation overlays / explainer chrome
None. Clean. The `.panel-label` and `.panel-cap` strips sit *outside* the desktop frame as gallery captions, not as overlays on the chrome — correct usage of the Forest-Botanical pattern.

## Rail button distinctness (Forest-Botanical test)
Score: 8/10. The five patch labels — `SI/01`, `SM/02`, `BP/03`, `DB/04`, `LG/05` — are genuinely distinct silhouettes because the two-letter pairs share no letterforms (S/I vs S/M vs B/P vs D/B vs L/G all have different vertical profiles). The half-size serial code at the right reinforces difference. Better than Onyx's Roman numerals; not quite as silhouette-distinct as Tokaido's woodblock glyphs, but more legible at first contact. This direction is working.

## Iframe primacy
**Yes, unambiguously.** The screenshots show a sharp WP rendering as the only saturated rectangle; the rail patch labels are dim ink-3, the capsule is graphite with one teal pixel at the active dock's left edge. Nothing in the chrome competes — the muted-teal is exactly muted enough.

## Typography sanity
- **Recursive is loaded correctly** as a variable font with weight, CASL, MONO, slnt axes (index.html:9). 
- **MONO axis is enforced to 0 everywhere except code/blueprint/file editors** — verified at index.html:32 (root), :62/:67/:68 (rail labels and serials), :117 (form inputs), :131/:132 (start-route patch labels), etc. The serial codes `/01`–`/05` use `MONO 0` — they are proportional Recursive Linear, not the Code axis. This passes the lead's specific check.
- MONO axis flips to 1 only in `.blueprint-json` (:164) and `.code-editor` (:170) — correctly contained.
- The screenshot of `SI/01 Coffee Shop` in the corner-widget/pgtitle area reads as proportional sans because letterforms `S`, `i`, `o` show different widths (the `i` is narrow, the `o` is round) — not tabular.
- No leak of Inter/Roboto/Arial.

## Clarity & focus test
A stranger can point at the rail (left column of two-letter labels), the iframe (centre), the capsule (top row with go/WP Admin/save pill), and the corner widget in well under 5 seconds. The serial codes (`/01` etc.) double as ordinals, so even without knowing what SM stands for, "second from top" is read immediately. Passes.

## Suggested concrete fixes (Round 2)
1. **Drop the border on `.topstrip .addr`** (index.html:79 — remove `border:1px solid var(--rule)`). Switch to `background:var(--bg-page)` only; the tone separation already reads.
2. **Drop the borders on `.src .it` cards** (index.html:128). They sit inside the bordered `.pane` and inside the bordered `.panel`. Replace with a `background:var(--bg-card)` + a single `border-bottom:1px solid var(--rule-soft)` between rows, or a `:hover` background lift only.
3. **Drop the borders on `.code-editor` and `.blueprint-json`** (index.html:164, :170). The darker `#080B0C` background already separates them from the pane.
4. **Drop the border on `.topstrip`** (index.html:75) OR drop the border on `.pane` (index.html:95) — but not both. Currently every secondary surface is rectangle-in-rectangle. One outer rule per surface is the brief's ceiling.
5. **Save-pill borders** (`.save-pill`, index.html:84) read as a stamped chip — within the rule budget — but if the addr loses its border per (1), pull the save-pill border too for symmetry. Use a 1 px bottom rule under "STALE" / "SAVING" text if state needs a stronger cue.
6. **The `.pgtitle .pre` "DB/04" prefix on the playground name in the capsule** (index.html:83, used at e.g. `<span class="pre">DB/04</span>Coffee Shop`) is a clever echo but counts as decoration. Consider whether it's needed when the rail already shows DB/04 active two columns to the left. Optional cut — not a violation, just a strip opportunity.
