# Critique — 008-monastery-scriptorium — by Critic 2

## Verdict
Major revisions. The illuminated-capitals rail is the strongest answer to the Forest-Botanical test in this batch, but explainer-overlay clutter and a shortcut-tip floater drag the design out of compliance with the brief's checklist. Most fixes are deletions.

## Hard violations of v11 taste constraints
- [ ] **§10 / brief checklist — explainer floaters in the chrome.** Three `.anno` chips (`capsule · 6 affordances`, `gilt only on Saved-pill + active M's fill`, `active capital · quill flourish curling around the awake letter`) are absolutely positioned *inside* the desktop frame at `top:80px / 240px`, overlapping the capsule, address bar, and rail. Combined with the panel-label/panel-note overlays this means the working-session screenshot has more chrome-on-chrome annotations than actual chrome. Move all `.anno` into the `.panel-cap` caption area outside the desktop, or kill them.
- [ ] **brief checklist — "shortcut floater" in chrome.** The `.footstrip` ends with `Press F for focus mode · ⌘K for command palette` and a meta tag `Quiet rail · 5 docks · 1 swap pane`. Both are tip/help chrome the brief explicitly forbids ("A 'tip', 'help', 'shortcut' floater anywhere in the chrome"). Strip the keyboard tips; if you want a colophon, move it to the page wrapper above/below the desktop frame, not inside it.
- [ ] **§3 — monospace usage.** `.code-editor,.blueprint-json,.file-editor,.json-editor` set `'IBM Plex Mono','Source Code Pro',monospace`. These selectors are all editor contexts — allowed — but verify none of the four selectors appears outside an actual code-editor wrapper anywhere in the document; the breadth of selectors is a smell.
- [ ] **§6 — extras on the rail.** `.colophon` ("scriptorium · v11") sits at the bottom of the `.rail` element, *under* the five docks. Brief says the rail contains exactly the identity mark + 5 docks. That colophon is a sixth item; remove it.

## Annotation overlays / explainer chrome
- The three `.anno` chips block the capsule's address bar and the rail's `S/M` capitals in the lead screenshot. They are the single biggest reason a stranger can't pass the 5-second focus test on this design — they read as part of the UI.
- Panel labels (`A · Working session — Site Manager held open`) and panel notes (`SAVED · PANE CLOSED · IFRAME SHARP`) overlap each other and the capsule because they share the `top:14px` line. Stagger them vertically or float them in negative space *above* the frame.

## Rail button distinctness (Forest-Botanical test)
- **Strong.** Five Cormorant Garamond capitals `S M B D L` at 28 px have genuinely different silhouettes — `S` curves, `M` peaks, `B` doubles, `D` is a single arc, `L` is an L-bracket. This is the best rail in the batch per the Forest-Botanical test even though it's letters.
- The active-state quill flourish (the SVG curl wrapping the active `M`) is appropriately sparse and gilt-fill on the letter is the right second cue. Keep both.
- Minor: at 28 px the capitals fill most of the 54 px dock cell — leave more breathing room above/below each letter so the rail reads as an *index*, not a stack of paragraphs. Try 12 px vertical padding inside `.dock`.

## Iframe primacy
- Iframe wins when the chrome stops shouting. Today, the annotation overlays, footstrip tips, panel labels and panel notes collectively pull attention away from the iframe more than the rail+pane+capsule do. Remove the overlays and the design passes immediately.
- The italic Cormorant-style `<h1>` inside the iframe srcdoc (`font-family:Georgia,serif;font-style:italic`) uses the same italic-serif language as the rail capitals and pane titles. That's a small bleed between chrome-language and content-language. Either commit to it (intentional vellum echo) or pick a clearly different face for the mock site so chrome and content read as separate planes.

## Typography sanity
- Atkinson Hyperlegible is loaded and is doing the body work (forms, log lines, sec-heads). Good — the lead's note feared otherwise; the body face is in place.
- Cormorant Garamond is reserved for rail + pane titles + several decorative spots (`.saved .s .nm`, `.bp h5`, `.lib-side h5`, `.sources .src .nm`, `.db-tools .t .nm`, etc). The brief's own text says "ONLY on rail initials and pane titles" — the current design has spread it across saved-site names, blueprint card titles, source-route names, library category headings, and even apply-block headings. That breaks the discipline the README claims. Pull Cormorant back to *just* identity mark + rail capitals + pane title + pane subtitle; let Atkinson carry every other "name" in the pane.

## Clarity & focus test
- Without the annotations: 4 / 5. The rail-as-page-index metaphor is genuinely calming and the gilt accent is restrained.
- With the annotations: 1 / 5. A stranger reads the chips first.

## Suggested concrete fixes (Round 2)
1. Delete all `.anno` blocks from inside the desktop frame; if you need annotation, put them in `.panel-cap` text below.
2. Strip the `Press F for focus mode · ⌘K for command palette` and `Quiet rail · 5 docks · 1 swap pane` from `.footstrip`.
3. Remove `.colophon` from the rail — the rail is identity + 5 docks, full stop.
4. Pull Cormorant Garamond back to identity + rail capitals + pane title + pane subtitle only. Every other `Cormorant Garamond` font-family declaration should become Atkinson Hyperlegible.
5. Stagger `.panel-label` and `.panel-note` so they don't overlap each other or the capsule.
6. Add a touch more vertical padding inside `.dock` so the capitals read as an index page rather than a paragraph.
