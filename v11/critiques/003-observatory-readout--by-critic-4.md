# Critique — 003-observatory-readout — by Critic 4

## Verdict
Minor revisions. The rail is genuinely the best-of-set Forest-Botanical-style five-distinct-marks attempt; the chrome is calm and disciplined. One real problem (panel-label overlays sitting on top of the chrome) and a few small typographic mismatches.

## Hard violations of v11 taste constraints
- [ ] `panel-label` and `panel-note` (positioned `top:14px`, `z-index:60`, with their own `border:1px solid var(--rule)` and `background:var(--bg-deep)` chip styling) sit **inside** the chrome rectangle, overlapping the top capsule (`top:14px` too). In the desktop screenshot, "FIVE CELESTIAL MARKS · ONE WARM STAR" overlays the topstrip and the WP Admin / Homepage / Coffee Shop / save-pill cluster; it reads as a second row of chrome the user has to mentally subtract. Constraint #10 (simplicity / focus test) fails the five-second test specifically *because* of these labels.
- [ ] The `pane-foot` for Panel C reads "Five dials on the rail · settings is one of them" — that is **explainer chrome inside the working pane** (constraint #10 again). It is not a status, not a hint, not a shortcut — it is your README leaking onto the screen. Same problem with Panel A's `panel-cap` *outside* the chrome, which is fine, but the `pane-foot` is inside the swappable pane and must go.
- [ ] `.topstrip .ksw` (e.g. `F` next to Fullscreen) is set to `font-family: 'Public Sans'` so it isn't a mono violation, but it's still a "kbd hint" chip that adds a 9th micro-affordance to the capsule slot. The brief says "Under 8 affordances total" — the Fullscreen `F` keycap pushes it over. Drop the keycap.

## Annotation overlays / explainer chrome
- [ ] Every single panel has both a `panel-label` (top-left) AND a `panel-note` (top-right). That is 22 explainer chips across the 11 panels, every one sitting on top of the actual chrome. Move them **outside** the `.desktop` frame — they are designer-mode labels, not chrome. The `panel-cap` *below* each desktop is the correct place for those captions; you already have them there.
- [ ] The footer block under the grid ("Observatory Readout. Fraunces carries the antique-instrument voice...") is fine — it's outside the chrome. Keep that, kill the floating chips.
- [ ] Hero `<p>` is fine. The legend chips (`rail #0B0E12`, `pane #10141A`, etc.) at the top right of the hero are also fine — they're outside the chrome.

## Rail button distinctness (Forest-Botanical test)
- Strongest in the set. Five silhouettes, five very different shapes: ringed-dot circle, italic Fraunces SM ligature (literal letterform — fine because it's the *only* literal one), transit-dash with vertical tick and small dot, three parallel horizontals, and dash-dash-dot. No two could be confused at speed.
- One nit: the **Logs** Morse triplet (— — ·) at 24 px is two long horizontals and a tiny dot, which can read as "horizon bars minus one" from the corner of the eye. The Database mark is three horizontals at full width; Logs is two horizontals plus a dot. Make Logs vertically biased (e.g. `· — ·` arranged with a slight diagonal slant, or `—\n— ·` on two rows) so its silhouette is even less like Database.
- The identity mark `★` at the top is a single Unicode glyph and reads fine, but it's the *only* glyph in the system that isn't drawn or set in Fraunces — feels like a stray decoration. Either replace with a small ringed-dot in the same SVG vocabulary, or a Fraunces italic `P` consistent with the brief's "tiny `P`" suggestion in 001/004/009.

## Iframe primacy
- Good. Iframe is the only chromatic surface; chrome is flat `#0B0E12` / `#10141A`. The amber star shows up in exactly the briefed places (save-pill dot, active-dock bar, toggle on-state, primary CTA). The booting orbit is also amber but lives inside the iframe area, which is acceptable.
- The pane's `border-left` and `border-right` (`border:1px solid var(--rule)` on both sides) creates a faint sandwich rule on the rail/pane boundary; visually clean.

## Typography sanity
- Fraunces and Public Sans both load (verified via `<link>`). Fraunces is at variable optical sizing, used italic in section topics and pane headings — looks correct in the desktop screenshot.
- `Geist Mono` is loaded and confined to `.file-editor`, `.blueprint-json`, `.code-editor.logs`, and `.code-block.diff` — all four are legitimate code-zone uses. No mono leakage.
- Saved-Playgrounds "right" column ("today / 14.2 MB", "2 days / 8.6 MB") is set in Public Sans — proportional, not mono. Good.
- `font-weight:300` on the closex (`pane-head .closex`) is fine; Public Sans 300 isn't loaded but the browser will use 400 — visually identical given the size.

## Clarity & focus test
- Once the floating `panel-label`/`panel-note` chips are removed, the focus test passes easily: rail at far left with 5 distinct marks, capsule across the top, single pane swap surface, iframe occupies the rest. The corner widget is unframed and quiet. A stranger could point at each in well under five seconds.

## Suggested concrete fixes (Round 2)
1. Move `panel-label` and `panel-note` out of `.desktop` and place them above each panel as a single caption row (or fold them into the existing `panel-cap` beneath). Remove the absolute positioning and the chip borders.
2. Delete the `pane-foot` strings that read like designer commentary ("Five dials on the rail…", "one mono zone", "Tail mode · auto-scroll" if it isn't actually a status). Keep only true status: `style.css · 1.4 KB · saving…`, `Esc to close · ⌘K to switch dock` is borderline — keep one, not both.
3. Drop the `.ksw F` keycap chip next to Fullscreen — fullscreen has its own button already.
4. Reshape the Logs Morse mark so its silhouette differs more from Database's three-bars stack — add vertical offset or slant.
5. Replace the `★` identity mark with either a small ringed-dot (echoes the Sites mark) or a Fraunces italic `P` in amber.
