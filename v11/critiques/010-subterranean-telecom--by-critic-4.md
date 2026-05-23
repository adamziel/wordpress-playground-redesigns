# Critique — 010-subterranean-telecom — by Critic 4

## Verdict
Minor revisions. The strongest patch-label rail in the set, an honest single-face system (Recursive Linear proportional + Recursive Mono in the editor), real muted teal, no annotation chrome on top of the iframe, and a corner widget that finally looks like an engraved data plate rather than a chip. Two small problems and a handful of small polish items.

## Hard violations of v11 taste constraints
- [ ] **Body page background `#111516` is *just* inside the dark range** but the hero text "010 Subterranean Telecom" sits on this base while the actual chrome `.panel` sits on `#11161A`. The two backgrounds are nearly identical, so the chrome's outline is barely visible; the `panel-label` "A · WORKING SESSION" sits *on top of* the 1 px border-rule with `top:-10px`, creating a notched-tag look that is fine — but the `.panel-num` "SI/01 · SITES" in the top-right has the same treatment. Together they read as two extra micro-bands of chrome on top of an already busy top edge. Not a constraint violation, but cluttered.
- [ ] **Counts of teal** — README claims "the only chromatic accent on the entire interface is a 2 px teal rule". In practice teal appears on: active rail bar, saving-pill dot, stale-pill dot, primary CTA `.btn-primary` background, danger button border, toggle `.on` background + thumb, check `.on` fill, sect-head active underline in library, file-tree `.sel` left rule, library cat `.on` underline, corner-widget dot, mobile bottom-bar active rule, mobile corner-capsule dot, gcard `.gpatch .lab` colour, blueprint-json `.s` string colour (inside `.code-editor` — fair use because it's inside the code zone), boot-frame `.progress::after`, diff `.add .sign`. That is a teal-saturated set of widgets. Constraint #7 says "single accent only … status colors should be a single muted lift, not a separate hue". Teal *is* the single hue (good), but its use as a primary CTA fill, a toggle on-state, a check on-state, AND a left rule pushes it past "rare accent" into "second skin". Reserve the saturated teal for one role (active rail + a single primary button), and switch toggles/checks to a neutral ink lift.

## Annotation overlays / explainer chrome
- [ ] None — verified, no `.anno` class, no panel-internal explainer overlays. `panel-label` and `panel-num` sit on the outer panel border (not over the chrome interior), so they're acceptable as panel captions. This is the cleanest of the three designs I reviewed on this dimension.
- [ ] The hero `<p>` and `<div class="legend">` are below/beside the panels, not on top of them. Good.

## Rail button distinctness (Forest-Botanical test)
- The patch-label vocabulary is the strongest rail in the set on the principle "distinct named labels" — each dock is a unique uppercase pair plus a serial. `SI/01 SM/02 BP/03 DB/04 LG/05` reads as a piece of switching equipment and a stranger remembers them by name within a minute.
- BUT the strict Forest-Botanical test is about *silhouette* distinctness — and a column of five two-letter-plus-fraction tags has nearly identical silhouettes (rectangle, rectangle, rectangle, rectangle, rectangle). The distinction is *content*, not *shape*. That is a legitimate idiom choice (and consistent with the brief's "patch label / Fig.-N caption" option), but call it out in the README as such: the rail trades shape-distinctness for naming-clarity. The reference 012-forest-botanical mixes per-dock-unique woodblock-style icons; this design takes the opposite bet.
- (a) **Does the patch-label rail work at smaller screens?** Mobile screenshot at 390 px shows the bottom-bar with all five patches readable (SI SM BP DB LG with their serials) — they fit comfortably, and the active SI gains a teal underbar. Yes, this scales. Verified.
- (c) **Is the serial code proportional, not monospace?** Verified in CSS: `.rail .dock .patch .ser` uses `font-variation-settings: "MONO" 0` (proportional axis of Recursive Linear). Confirmed correct — `/01`, `/02` render in proportional widths. The README's claim is honored.
- One small nit: the identity mark "P/00" at the top of the rail uses the *same* patch treatment as the docks. Per the brief, the identity mark should be visually distinct from the dock buttons. As is, the rail reads as six docks numbered /00 through /05, where /00 is meant to be identity. Either bump the P to a single larger glyph (no serial), or visually separate it (e.g. a rule beneath /00 before the docks begin).

## Iframe primacy
- (b) **Is the teal genuinely muted, not phosphor?** `#3E8A78` measured: HSL ≈ 167°, 38% S, 39% L — yes, muted teal, not the high-saturation `#00FFC8` Cold-War phosphor cliché. Confirmed.
- The iframe is the only large saturated rectangle. Chrome is `#0C0F0E` rail / `#11161A` pane / `#070A0B` iframe slot — all in the dark range. The teal rule is small enough not to compete. Good.

## Typography sanity
- Recursive Sans Variable is loaded with all four axes (`wght,CASL,MONO,slnt`), and every chrome surface explicitly sets `font-variation-settings: "MONO" 0` (Linear, proportional). The `.code-editor` and `.blueprint-json` flip `"MONO" 1` — the only place mono is engaged. This is exactly the constraint-3 requirement: mono confined to the code editor zone, and even there it's done via the axis switch on the *same* family rather than introducing a second face.
- The `Go` chip inside the address bar (`<span style="…">Go</span>`) is set with explicit font-variation-settings to `wght 600` — proportional, not mono. Verified.
- The address text itself "playground.wordpress.net/scope:coffee-shop/?p=14" sits in `.topstrip .addr` which uses `font-variation-settings: "MONO" 0, "wght" 400` — proportional. Confirmed.

## Clarity & focus test
- Passes. Rail at far left (5 named patches + a P/00 identity), capsule across the top, single swap pane next to the rail, iframe in the remaining space, engraved corner widget at the bottom-left. A stranger could point at each surface in under five seconds. The teal-as-accent does pull the eye in too many places, but each pull is small (2 px rules, 6 px dots).

## Suggested concrete fixes (Round 2)
1. Reduce teal to one or two structural roles: keep the 2 px active-rail rule and the primary CTA. Switch toggles, checks, save-pill dots, mobile bar underlines, library category underlines, file-tree-sel left rule, and corner-widget dot to a neutral ink lift (e.g. `--ink-2`) — same affordance, no extra teal.
2. Differentiate the rail identity mark from the dock patches. Either remove the `/00` serial and bump the `P` to 22 px, or insert a hairline rule between identity and the SI/01 dock.
3. Drop one of the two panel chips (either `panel-label` or `panel-num`) — having both creates a "filing-cabinet tab" doubling on the top edge that is more decoration than information.
4. Tone down the panel-page background so chrome is clearly inset (`#0A0D0E` instead of `#111516`) — this also gives the panel labels a darker negative-space backdrop and the chrome a clearer figure-ground.
5. README is currently honest about most tradeoffs but should explicitly own that the patch-label rail is *content-distinct, not silhouette-distinct* — it's a deliberate inversion of the Forest-Botanical "five different shapes" rule, and the bet is that named labels are easier to recall than per-dock glyph vocabularies.
