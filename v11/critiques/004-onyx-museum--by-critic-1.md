# Critique — 004-onyx-museum — by Critic 1

## Verdict
Minor revisions. The strongest of the three I reviewed — gallery idiom is intact, single accent reads as warmth not colour, nothing extra in the rail. Two small chrome bleeds to fix and one font wiring quirk.

## Hard violations of v11 taste constraints
- [ ] **Rule 1 (iframe-primary, "everything else recedes") borderline-violated by `.picture-light`** (index.html:61). The bone-cream radial gradient is positioned `top:54px;left:200px;right:30px;height:140px` and physically lays over the top of the iframe via z-index:36 (the iframe sits at the back of the desktop frame). The result is a tinted band across the upper third of the live WordPress site — chrome bleeding into the only sharp surface. Either move it strictly above the iframe (down-shift to land on the dark wall, not over the WP rendering) or drop the gradient entirely; the "gallery light" idea is already carried by the bone-cream active numeral.
- [ ] **Rule 5 (rail-button silhouettes are visibly individual).** `I` and `II` are very close in silhouette at 22 px ink-secondary; `III` and `IV` are also close; `V` is the only genuinely unique one. The screenshot bears this out — the dock column reads as five small ticks. Roman numerals carry order info but lose Forest-Botanical-style differentiation. See suggestion 3 below.

## Annotation overlays / explainer chrome
None. The `.panel-label` and `.panel-note` sit outside the prototype frame as section captions — they're presentation chrome for the gallery sheet, not overlays smudging the prototype. Good restraint.

## Rail button distinctness (Forest-Botanical test)
Score: 5/10. Forest-Botanical's rail succeeds because each glyph has a unique outer silhouette at thumbnail size (leaf, feather, key, etc.). Roman numerals I/II/III are three stacked ticks that read as the same shape at distance — only the bone-cream colour on the active one differentiates them, which is a colour cue, not a silhouette cue. The README's own trade-off section admits "visitor must learn what each numeral does."

## Iframe primacy
Yes, the iframe is the loudest object. The Coffee Shop content (cream typography on dark bg) is the only fully-saturated rectangle, the rail and capsule are properly recessive, and the corner widget is a quiet rectangle in the bottom-left. Only the picture-light gradient mildly competes by tinting the iframe top. Fix that and primacy is uncontested.

## Typography sanity
- Spectral 500 is loaded and used for `h1/h2/h3/h4`, rail numerals, pane titles, eyebrow numerals — correct. The screenshot shows Spectral italic on display headings reading the way the brief intended.
- Plus Jakarta Sans loaded and used for body, forms, log lines, tag labels — correct.
- Monospace contained to `.code-editor` and `.file-editor` only — correct.
- No leak of Inter / Roboto / Arial — clean.

## Clarity & focus test
A stranger can point at the iframe (instant), the capsule (top row), the rail (five characters left edge), and the corner widget (bottom-left rectangle) in under 5 seconds. The only friction is that "Sites" vs "Site Manager" vs "Blueprint" vs "Database" vs "Logs" requires hover to disambiguate — but the focus test was about pointing at *zones*, and on that the design passes.

## Suggested concrete fixes (Round 2)
1. **Move or drop the `.picture-light` overlay** (index.html:61). Recommend either deleting it entirely, or repositioning above the iframe with `top:14px;height:40px` so the wash falls on the dark wall between capsule and iframe — never inside the iframe rectangle. As-is it tints WP rendering, which the locked model forbids.
2. **Strengthen rail differentiation without losing the numeral idiom.** Two cheap options: (a) flip alternating numerals to italic (`II`, `IV` italic; `I`, `III`, `V` upright) so each glyph has its own letterform shape — easiest patch to `.rail .dock:nth-child(2n)`; (b) keep all upright but add a single hairline under each numeral whose length varies (1ch · 2ch · 3ch · 4ch · 5ch — a literal "Room N" labelmark). Both keep "wall label" reading while restoring silhouette individuality.
3. **Tighten the active state's visual weight.** The 2 px bone bar is barely visible at 1:1 in the desktop screenshot because it's only 22 px tall (`.rail .dock.active::before` at `top:11px;bottom:11px;width:2px`). Bump width to 3 px or extend top:0/bottom:0. Active state must read at a glance, not on inspection.
4. **The corner widget vertical bone bar** (`.cws-widget::before` at index.html:174) plus the `.cws-widget .num` text "No. 1" in bone-cream means the corner widget has *two* accent strokes when the rail also carries one. The widget already names "No. 1" — drop the bar (single accent per zone).
5. **Roman-numeral hover tip** (`.rail .dock .tip`) is good restraint (opacity:0 default) — no change. But consider also echoing the numeral in the `.pane-head` eyebrow ("Room IV" already does this in panel A) for *every* panel so the visitor pays the learning cost exactly once.
6. **Footstrip/captions are fine** — no removals needed in the chrome's actual surfaces. Don't gold-plate.
