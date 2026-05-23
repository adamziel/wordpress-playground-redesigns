# Critique — 005-brutalist-editorial — by Critic 3

## Verdict
Minor revisions — the editorial idiom is the cleanest "no-icon" answer in the set; only two structural calls (rail width + rail mast) and a couple of polish notes need fixing before shipping.

## Hard violations of v11 taste constraints
- [ ] **Rail width is 160 px.** The brief specifies "One quiet left rail (~64–72 px)". A 160 px rail is more than double the upper bound and changes the perceived weight balance of the chrome — the rail starts to feel like a side panel rather than a quiet edge. If the typeset-word treatment can't fit in 72 px without truncation, the right answer may be a wider rail explicitly approved with the lead, or compressing labels to vertical typesetting / fewer characters. Right now it reads as a deviation.
- [ ] **Constraint 6 ("rail = identity mark + 5 docks, nothing else") is bent.** The rail mast renders `Playground` + an em-italic subtitle `Editorial · No. 005`. That's a two-line masthead, not "one identity mark". Strip the subtitle line; keep just `Playground` in Spectral italic.
- [ ] **Roman numerals + word together count as two pieces per dock.** Strict reading of constraint 9 ("each rail dock has one mark") is borderline here. The numeral is small and quiet enough to function as a leading initial rather than secondary text, so this is closer to "polish" than "violation" — but the lead should call it.

## Annotation overlays / explainer chrome
- [ ] In the desktop screenshot at the top, the panel-label `A · RUNNING SESSION` and panel-note `Rail a single typeset column · save pill the only red on the page` both overlap with the topstrip — the address bar and `More`/`Focus` labels are visually obscured by the explainer text. Either move the labels into the panel-cap below the desktop, or render them in a thin band above the desktop frame.
- [ ] The hero `Coffee Shop ›` `Refresh · Homepage · WP-Admin` row in the panel header conflicts with the topstrip immediately beneath it in the same dimension — visually they layer over each other. Probably a z-index or top-offset issue in the screenshot frame.

## Rail button distinctness (Forest-Botanical test)
- Strongest answer in the set. Each italic Spectral word has a genuinely unique outline: `Sites` (short, double-i), `Manager` (long, ascenders + descender g), `Blueprint` (long, descender p), `Database` (long, no descenders), `Logs` (short, descender g). At a glance they are five distinct silhouettes — exactly the Forest Botanical test.
- Verified that italic Spectral is actually loaded (`Spectral:ital,wght@…1,400;1,500;1,600`) — it's not browser-rendered italic.
- Active state correctly goes from italic-secondary to roman-bold-primary (`font-style:normal; font-weight:600`). The shape changes when active, which is a beautiful redundant cue — the brief allows it.

## Iframe primacy
- Excellent. The chrome is type-only: rail is words, pane is paragraphs, capsule is words. The iframe is the only block of color and image on screen.
- Confirmed red-ochre `#B14A39` is used only on `.save-pill.saving` (CSS line 69). No other element references it. Good.

## Typography sanity
- Spectral + Public Sans, no Inter/Roboto/JetBrains references in the chrome. Path input uses Public Sans (proportional), not monospace — correct.
- The italic Spectral subtitle inside `.legend .chip` ("rail · #101112") is gracefully done. Body running text in Public Sans 13/15 px reads well on `#161718`.

## Clarity & focus test
- A stranger would point to the rail, pane, capsule, and iframe in under 3 seconds because each is a different *typographic register*: rail = italic words, pane = serif headlines + body, capsule = small caps eyebrows, iframe = literally pictures. That's a strong taxonomy.
- The dock active-state (italic → bold roman) is visible without color but **subtle** at thumbnail size — verify it survives the desktop-tall screenshot at 50% zoom; if not, lift `font-weight: 600` to `700` for the active.

## Suggested concrete fixes (Round 2)
1. **Shrink the rail** toward 72 px. If full italic words won't fit, rotate the dock labels 90° (vertical type — still typeset, still legible, very newspaper-spine), or use a 4-character abbreviation set in italic Spectral (`Sit. Man. Blu. Dat. Log.`).
2. **Remove the rail subtitle** `Editorial · No. 005`. Keep `Playground` italic only. That brings you back to "identity mark + 5 docks, nothing else".
3. **Fix the panel-label / panel-note overlap** with the topstrip in the desktop frame so the screenshot reads cleanly.
4. **Verify the four save-pill states** are visible in one document — README mentions `Unsaved / Saving / Saved / Stale` but only `Saving` and `Saved` appear in the screenshots. Render all four in the tall layout.
5. Consider whether the Roman numerals `i. ii. iii. iv. v.` are needed at all — without them, the dock is purely the italic word, which is the design's strongest move. They feel like a belt-and-suspenders gesture that adds chrome the rail otherwise refuses.
