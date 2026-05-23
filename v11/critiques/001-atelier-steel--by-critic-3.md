# Critique — 001-atelier-steel — by Critic 3

## Verdict
Minor revisions — the discipline is real and almost everything lands; the rail-distinctness problem is the one structural issue that must be fixed before shipping.

## Hard violations of v11 taste constraints
- [ ] **Constraint 5 (Forest-Botanical distinctness) fails.** The five rail marks `Si SM Bp Db Lg` are all the same shape: two uppercase Latin glyphs at the same x-height, same weight, same width. Forest-Botanical's test wants each dock to have its own silhouette. Right now you cannot tell `Si` from `SM` from `Bp` in peripheral vision; you have to read each one. Concrete fix: introduce **typographic variation** between docks — e.g. mix small-caps with italic, or use `Si · SM · iii · DB · Lg` with one numeral and one italic to break the uniformity — without adding icons. Even a Roman numeral prefix (as 005 does) would solve it.
- [ ] **Identity `P` mark vs. dock `Si` are visually identical.** Both are sans-serif Geist letters at ~14 px. The identity should read as different in kind from the docks (e.g. larger, italic, or boxed by a single hairline) so the eye reads "logo · 5 controls" rather than "6 nearly-identical letter blocks".

## Annotation overlays / explainer chrome
- [ ] The desktop legend chips (`rail #0E1013 · pane #14171B · iframe #080A0D · foil #D7CDB6`) live inside the panel-cap and are acceptable as documentation, but the panel-note text in the top-right (`iframe is the only sharp...`) overlaps the topstrip in the desktop screenshot. Move it above the panel or shorten it so it doesn't sit on top of the address bar.

## Rail button distinctness (Forest-Botanical test)
- The single biggest issue. All five docks fail the squint test. The README acknowledges the trade-off ("a user may need one beat longer to learn Si SM Bp Db Lg") but the brief is not asking for the user to learn five tokens — it is asking for **five distinct silhouettes**. Two-letter Geist monograms is the most icon-replacement-by-letters move possible, and it doesn't carry distinctness. Concrete options that keep the typeset-only spirit: (a) mix register and style: `Si` `sm` `Bp` `db` `Lg`; (b) one letter + one numeral: `S` `M2` `B3` `D4` `L5`; (c) treat each as a ligature with a small caps lockup variant.

## Iframe primacy
- Strong. The chrome's three-tone charcoal palette + zero chromatic accent means the iframe (warm cream + ochre) genuinely is the only color object on the screen. This is the design's biggest win.
- One small leak: the bone foil on the saving pill is the only warm note in the chrome; it pairs well with the iframe's cream — keep it.

## Typography sanity
- One face (Geist) throughout. Geist Mono is correctly scoped to `.file-editor`, `.blueprint-json`, `.code-editor.logs`. No Inter / Roboto / JetBrains references. Path input in the address bar uses proportional Geist as the brief requires. Good.
- Sectional eyebrows (e.g. `FEATURED · ESPRESSO BAR`) inside the iframe srcdoc use `system-ui` — that's inside the mock and not part of v11 chrome, so fine.

## Clarity & focus test
- A stranger would point to the iframe, the pane, the capsule, and the rail in under 5 seconds. But they would point to the rail as "a column of letters" rather than "five different controls" — which is exactly the distinctness failure above.
- The active-state cue (color lift from `--ink-mute` to `--ink` + 2 px bone bar) is genuinely visible without color. Verified by inspection — the bar shows up even at small sizes.

## Suggested concrete fixes (Round 2)
1. **Rebreak the monograms** so each dock has a unique silhouette. Cheapest fix: italic-roman alternation (`Si` roman, `SM` italic, `Bp` roman, `Db` italic, `Lg` roman) — already in your typeface, zero new ink.
2. **Distinguish the identity `P`** from the dock letters: larger (18 px), italic, or set in Geist 600 — so the eye reads "header · five items" not "six items".
3. **Move the panel-note** so it doesn't overlap the topstrip address bar in the desktop screenshot (or shorten it to two words).
4. **Verify the save-pill cycle visibly differs** between `Unsaved / Saving / Saved / Stale` with only bone-tints and dot positions — currently the README claims this works but the desktop image only shows one state; the tall layout should render all four side by side so the constraint is provable.
5. Consider giving the active dock a 1 px bone underline beneath the letter pair (in addition to the left bar) as a second redundant cue — the brief allows it because bone is your only foil.
