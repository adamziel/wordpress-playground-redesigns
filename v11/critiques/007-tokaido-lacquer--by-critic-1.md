# Critique — 007-tokaido-lacquer — by Critic 1

## Verdict
Major revisions. The idiom (lacquered black + one vermilion seal + woodblock glyphs) is strong and the rail is the most genuinely distinct of the three I reviewed. But the prototype is buried under explainer overlays, the iframe srcdoc is rendered in browser-default Georgia bold italic (which is what reads as "blocky" in the screenshot), and there are nested borders three levels deep across the chrome.

## Hard violations of v11 taste constraints
- [ ] **Rule 8 (no borders inside borders) — multiple sites.** The chrome stacks rectangles 3-deep:
  - `.panel` (border, index.html:42) → `.cap` (border, :62) → `.cap .addr` (border, :66). That's three concentric borders on the address bar.
  - `.panel` → `.pane` (border, :94) → `.code-editor` / `.blueprint-json` / `.file-editor` (each `border:1px solid var(--rule)`, :154/:158/:162). Three-deep again on the JSON.
  - `.panel` → `.iframe-wrap` (border, :79). The iframe gets a chrome border even though the panel already frames it.
  - `.bp` cards inside `.lib` (also bordered, :232) — same pattern.
  Fix: drop borders on all *inner* surfaces; let tone separate them as `--pane` vs `--bg`. Keep one outer border per pane.
- [ ] **Rule 6 (no icon proliferation / rail = identity + 5 docks only).** The rail has a sixth element: `<div class="footer">tokaido · v11</div>` at index.html:364 (and repeated at every rail instance: :470, :580, etc.). Vertical text reading "tokaido · v11" violates "Nothing else" in §6. Remove the `.rail .footer` rule (:59) and all instances.
- [ ] **Red-pencil list — "no 'tip', 'help', 'shortcut' floater anywhere in the chrome."** The `.footstrip` (index.html:89, instance at :401–:408) contains literally: *"Press F for focus mode · ⌘K for command palette"*. That's a tip/shortcut floater pinned to the bottom of the chrome. Remove the entire `.footstrip` element (the locked model doesn't include it — there's a corner widget for site state and a capsule for controls).
- [ ] **Rule 1 / iframe primacy — srcdoc background is `#fbf6ea` (cream).** index.html:389 srcdoc body has `background:#fbf6ea`. This is the actual WordPress site rendering, so a light surface here is legitimate (WP sites are commonly light); the iframe is permitted to be chromatic. *Not* a hard violation, but worth flagging: the cream is so warm it competes with the vermilion seal for "warmest thing on screen." Consider tinting WP content toward an off-white (#F4F0E2) so the vermilion seal stays the only saturated warm.

## Annotation overlays / explainer chrome
This is the biggest single problem. Seven `<div class="anno">` overlays sit on top of the prototype chrome (index.html:411–413, :551–:552, :670–:671):
- [ ] Remove `capsule · 6 affordances` (:411) — occludes the capsule
- [ ] Remove `vermilion only on save pill (saved) + active-dock seal` (:412) — occludes the save pill itself
- [ ] Remove `active glyph · key · seal at left` (:413) — occludes the rail glyph it's describing
- [ ] Remove `single swap pane · never two side-by-side` (:551)
- [ ] Remove `4 saved sites · realistic mock data` (:552)
- [ ] Remove `save-pill cycle · Saving → Saved → Stale` (:670)
- [ ] Remove `typed-phrase + diff + auto-snapshot — destructive confirm mechanic` (:671)

Also delete the `.anno` CSS rule entirely (index.html:288–289). If any of these notes are essential, move them into the existing `.panel-cap` (the caption strip already below each panel) — that's the appropriate place per the Forest-Botanical pattern.

## Rail button distinctness (Forest-Botanical test)
Score: 9/10. This is the most successful rail of the three. Horizon-over-water, key, paper-crease, stone-cairn, brush-stroke — each silhouette is genuinely different at thumbnail. The brush-stroke (Logs) and the cairn (Database) are particularly readable. Only fix: the key glyph (Site Manager, :332–:338) and the database cairn both read as "centred horizontal mass" at squint distance; consider shifting the key 2 px up or rotating 12 ° so its silhouette tilts diagonal.

## Iframe primacy
**Borderline no, in the screenshot.** Two competing claims for attention: (a) the seven red-bordered annotation overlays sit *above* the iframe in z-index and shout louder than the WP rendering; (b) the `.footstrip` at the bottom is a wide bordered rectangle that horizontally rivals the iframe. Strip both and the iframe wins instantly — the underlying composition is correct.

## Typography sanity
- **Newsreader is loaded italic-only**, weights 500/600 (index.html:9 — `family=Newsreader:ital,opsz,wght@1,6..72,500;1,6..72,600`). This means *every* italic h3/h1/save-pill renders in Newsreader italic correctly — the chrome typography is fine.
- **But the iframe srcdoc does not load Newsreader.** Inside the srcdoc (index.html:389) the body is `font-family:Georgia,serif` and the h1 has `font-style:italic`. Georgia bold italic at 46 px is exactly what the lead saw as "blocky bold italic, not calligraphic." This is the bug. Two fixes:
  1. **Preferred:** load Newsreader inside the srcdoc by injecting `<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@1,6..72,500&display=swap" rel="stylesheet">` into the srcdoc `<head>` and changing the h1 to `font-family:'Newsreader',Georgia,serif`. The display cut at 46 px will then carry the calligraphic tilt the brief asks for.
  2. **Cheaper:** remove `font-style:italic` from the srcdoc h1 (line ~389, inline `h1{...font-style:italic}` → drop). Upright Georgia at this weight is at least not blocky.
- Monospace is contained to `.code-editor` / `.blueprint-json` / `.file-editor` — correct.

## Clarity & focus test
With the annotation overlays present: **fails** — a stranger's eye lands first on the red `vermilion only on save pill…` overlay, then the `active glyph · key…` overlay, then the iframe. Strip the overlays + footstrip + rail footer and the test passes confidently (rail left, capsule top, iframe centre, corner bottom-left, vermilion = active).

## Suggested concrete fixes (Round 2)
1. Delete every `<div class="anno">` (7 instances at index.html:411–413, :551–:552, :670–:671) and delete the `.anno` CSS rule (:288–289).
2. Delete the entire `.footstrip` element (instance at index.html:401–408) and its CSS (:89–91). The locked model has no such bar.
3. Delete `<div class="footer">tokaido · v11</div>` from every rail instance (:364, :470, :580, plus matches at :685, :791, etc.) and remove the `.rail .footer` CSS (:59).
4. Drop borders on `.cap .addr` (:66 → remove `border:1px solid var(--rule)`), `.code-editor`/`.blueprint-json`/`.file-editor` (:154/:158/:162), `.iframe-wrap` (:79), and `.bp` cards (:249). Keep tone separation only.
5. Fix the iframe srcdoc heading: inject Newsreader font link into srcdoc `<head>` (index.html:389) and change the h1 to `font-family:'Newsreader',Georgia,serif;font-weight:500`. The display cut at opsz 48 should be what the user expected.
6. Optional: tint the srcdoc body background from `#fbf6ea` to `#F4F0E2` so the vermilion seal stays the warmest, most-saturated thing on screen.
