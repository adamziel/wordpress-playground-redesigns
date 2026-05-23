# Critique — 009-graphite-engineer — by Critic 2

## Verdict
Minor revisions. Visually this is the strongest of the three I reviewed — the stamped-numeral rail genuinely reads as silhouette-distinct, the drafting-red is held to three places, and the pane-as-numbered-section is a clean idiom. But it ships with two hard-banned-font violations and a §9 violation in the routes list. All are surgical fixes.

## Hard violations of v11 taste constraints
- [ ] **§4 — `JetBrains Mono` is referenced.** `.blueprint-json` and `.code-editor` set `font-family:'JetBrains Mono','Menlo','Monaco',ui-monospace,monospace`. The brief's §4 explicitly bans JetBrains Mono ("Avoid Inter, Roboto, Helvetica, Arial, ui-sans-serif default, JetBrains Mono") and the validator forbids it. Replace with something like `'IBM Plex Mono','Berkeley Mono',ui-monospace,monospace` or just `ui-monospace,Menlo,Monaco,monospace`. Either way, also drop `ui-sans-serif` if it appears as the actual rendered face anywhere.
- [ ] **§8 — borders inside borders.** `.topstrip` has `border:1px solid var(--rule)` and the `.addr` input inside it also has `border:1px solid var(--rule)`. Stacked rectangles, exactly what the brief calls out. Fix: drop the border on `.addr` and rely on the inner background tone difference (`var(--bg-page)` against `var(--bg-card)`) to separate them. Same pattern probably repeats in `select.mini,input.mini` rows inside `.pane` — audit and remove the inner borders.
- [ ] **§8 — borders inside borders, part 2.** `.src .it` (start-route cards) has `border:1px solid var(--rule)`, and the surrounding pane has its own pane-level rule. Drop the per-route border and let `background:var(--bg-card)` alone separate the rows.
- [ ] **§9 — secondary text under buttons.** The six start-route cards each show a label + a description line (`Vanilla WordPress / Latest stable WordPress, no plugins.` etc — the `.tx .dx` paragraph). The brief says "Buttons in the pane have one label, no helper line beneath." Drop the `.dx` description and let the label stand alone.

## Annotation overlays / explainer chrome
- No floating annotations inside the desktop frame. Panel labels (`A · WORKING SESSION`) and panel-num (`01 · SITES`) sit cleanly at the top-edge negative space. Good.
- One nit: the More menu in the capsule includes labels like `⇧G`, `⇧S` — these are inside a menu item, which is legitimate; they're not floating tips.

## Rail button distinctness (Forest-Botanical test)
- **Genuinely strong.** Five stamped numerals `01 02 03 04 05` in Space Grotesk tabular medium each have a unique silhouette (the descending 5, the closed 4, the open 3 vs the closed 8-shape, etc). The identity `P` at the top matches numeral style — verified.
- Active state is appropriately quiet: 2 px drafting-red bar at left + ink lifts to primary. Combined with the numeral changing colour, the active state reads clearly without a box.
- Verify the rail numerals actually render with `font-variant-numeric:tabular-nums` — the CSS declares it, so they should.

## Iframe primacy
- Yes. The chrome is three graphite tones plus ink, and the only chromatic hit is the drafting-red rail bar. When the pane is closed, the iframe is unambiguously the largest, most saturated rectangle.
- Working session screenshot (panel A) reads instantly: rail at left, capsule at top, iframe centre, corner widget bottom-left. Pass on 5-second focus test for that state.
- When the Sites pane is open (panel A in the tall view), the pane gets ~480 px and the iframe is partially occluded. That's expected for the swap-pane idiom; the corner widget anchors the iframe well enough that you still know which surface is "the live site". Fine.

## Typography sanity
- Space Grotesk and Public Sans both loaded from Google Fonts — good, and both are off the banned list.
- The decision to use Space Grotesk for *names* (`.saved .s .info .nm`, `.bp-small .meta .nm`, `.src .it .tx .nm`) and Public Sans for *descriptions* gives the pane a nice two-tone rhythm. Keep that.
- The hero `.iframe-content h2.post-title` is also Space Grotesk at 56 px inside the iframe content panel (`.iframe-content`). That's the panel showing a mock WordPress site preview rendered without the real `<iframe srcdoc>`. The actual iframe srcdoc uses Georgia for the site, which is correct — chrome and content read as different planes. Good.
- The "P" identity at the top of the rail is `font-weight:600`, while the dock numerals are `font-weight:500`. The lead asked to verify the identity matches the numerals' style — close, but the weight bump on `P` makes it slightly louder than the inactive `01–05`. Consider matching weight (both 500) and just relying on the larger size + ink-primary colour.

## Clarity & focus test
- Pass. Rail / pane / capsule / iframe are pointable in under 3 seconds in the working session. The numbered section idiom (`01 Sites`, `02 Site Manager`) is reinforced across the rail, the pane head, and the corner widget's `01:` prefix — a stranger picks up the language in one screen.

## Suggested concrete fixes (Round 2)
1. Replace `'JetBrains Mono'` everywhere with `'IBM Plex Mono',ui-monospace,Menlo,monospace` (or omit the named face entirely — `ui-monospace` is allowed because it's the editor face, not chrome).
2. Drop the border on `.topstrip .addr` and on `.src .it`; let the background-tone shift separate them from their containers.
3. Remove the `.dx` description paragraph from each start-route card. One label per button.
4. Match identity-mark `P` weight to inactive numeral weight (both 500). Let size + colour carry the identity.
5. Optional polish: bring the active drafting-red bar to 3 px so it remains unmistakable when the rail is glanced at peripherally.
