# Critique — 002-charcoal-foundry — by Critic 2

## Verdict
Minor revisions. The idiom holds — matte slab, one amber filament, no chrome stunts — but the rail fails the Forest-Botanical distinctness test and the wide Mona Sans isn't actually loading wide.

## Hard violations of v11 taste constraints
- [ ] **§4 / §5 — Mona Sans width axis is not requested.** The Google Fonts URL (`family=Mona+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400`) omits the `wdth` axis, so `font-stretch:115%` and `125%` are silently ignored by the browser; the rail and headlines render at default width. The wide cut is load-bearing for the foundry idiom — request `Mona+Sans:ital,wdth,wght@0,75..125,400..700;1,75..125,400` and verify the rail ligatures actually look industrial.
- [ ] **§3 — `Geist Mono` family stays inside `.code-editor`/`.blueprint-json`/`.file-editor` blocks (allowed), but also leaks into `.code-block.diff` inside the danger modal.** That diff is editor-adjacent, fine, but the modal is *outside* the file editor — borderline. Either rename the class to make the editor-scope explicit or swap to the design's body face.
- [ ] **§10 — `Esc to close · ⌘K · switch dock`** in the pane-foot is a shortcut floater (brief checklist forbids those). Drop it or move it into the `More` menu.

## Annotation overlays / explainer chrome
- The desktop panels are clean of overlay annotations (good). Panel labels and the legend chips at the top are reasonable wrapper-chrome.
- The `pane-foot` shortcut hint above is the only explainer that bleeds into the working chrome — kill it.

## Rail button distinctness (Forest-Botanical test)
- The five rail items `Si Mn Bp Db Lg` at 14 px small-caps are **textually** distinct but **visually** nearly identical: each is a pair of similar uppercase glyphs of similar width, all in the same face/weight/colour. The Forest Botanical reference uses five *different SVG silhouettes* — the test is silhouette, not letters. Right now a user can't see "where Blueprint is" peripherally; they have to read.
- Concrete fixes that keep the foundry idiom:
  1. **Render only the first letter at large size**, with the second letter as a small superscript or subscript next to it — `S` with a tiny `i` baseline-shifted; `M` with a tiny `n`. Distinct silhouettes from caps height alone.
  2. **Vary the weight per item** (300 / 400 / 500 / 600 / 700 across the five), so each pair has a different ink-weight rhythm.
  3. **Or commit to the text-only call** and lean harder on the 2 px amber bar — make it 3 px and full-height so the active state is unmistakable even though the inactive pairs blur together.

## Iframe primacy
- Strong. Matte rail + matte pane + amber-only-on-active means the iframe is the loudest object as soon as the pane closes. The corner widget's ember dot is appropriately one pixel of glow.
- One nit: the pane in panel B and beyond is 480 px wide and pulls a lot of the visual centre. Consider 420 px so the iframe stays the loudest rectangle.

## Typography sanity
- Mona Sans request is wrong (see violation above). Fix that and the wide cut idiom will start carrying its weight.
- `font-stretch:125%` is sprayed on dozens of unrelated chrome elements (panel-label, db-tables headers, danger-modal action button, bp-toolbar). Once the wdth axis is actually loaded this will read as everything-shouting; pull stretched type back to just the rail + headlines + identity mark and let body sit at 100%.

## Clarity & focus test
- Pass on rail / pane / capsule / iframe location in working session (panel A). The clarity drop happens in panel B (Sites pane open) where the saved list + 6 routes + featured blueprints stack vertically without breathing room and the 480 px pane visually competes with the iframe.

## Suggested concrete fixes (Round 2)
1. Fix the Google Fonts URL to request the `wdth` axis on Mona Sans, then verify rail glyphs render visibly wider.
2. Make rail buttons silhouette-distinct: cap-letter + small superscript, or vary weights per dock. Bring the active amber bar to 3 px so it reads from peripheral vision.
3. Remove the `Esc to close · ⌘K · switch dock` pane-foot hint.
4. Narrow the pane to 420 px in panels B–E so the iframe stays the largest object.
5. Restrict `font-stretch:125%` to rail + identity + h1/h3 only; everything else sits at 100%.
