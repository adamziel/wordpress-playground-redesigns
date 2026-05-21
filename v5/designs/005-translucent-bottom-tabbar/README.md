# v5 / 005 — Translucent bottom tab bar

## Thesis

The WordPress site is the document; the chrome is a quiet glass floor under it. A single frosted tab bar floats at the bottom of the viewport — four tabs, eight idle affordances, one secondary sheet that swaps between Sites (launcher), Manage (Site Manager) and Menu (overflow). The bar is the same primitive on desktop and mobile; "desktop is just a wider phone." When the user scrolls the iframe, the bar drops to 0.15 opacity and the WordPress site is the loudest thing on screen; touching the bar brings it back. The same glass picks up the iframe's dominant tone (warm cream for a Coffee Shop, near-black for the Gaming News theme) so the glass earns its keep — it's a depth signal, not decoration. A small Esc pill marks the explicit fullscreen mode that hides every chrome element, fixing the Win11-Settings gap the user named.

## What was merged / removed and why

Three settings entry points become one — the inline info notice, the popover, and the Site-Manager Settings tab collapse into **Manage › Settings**, with quick-access shortcuts in the Menu sheet pointing back at it. The triple-entry sin is gone. The Saved-Playgrounds dropdown, the launcher panel, and the blueprint gallery fuse into a single **Sites** sheet with two columns: start-new (six sources) + Your Playgrounds on the left, full 16-card blueprint browser with search and 10 category filters on the right. "Save site locally" inside the Site-Manager info notice is removed — saving is the primary verb in the top capsule, marked by a colored pill that flips red → green as state changes. Additional actions (Export to GitHub PR, Download .zip) live in the Menu sheet where keyboard shortcuts and quick toggles also live. Apply & Reset is no longer a button with a red banner; it requires typing the playground's slug to confirm — the kind of friction the brief asks for.

## Trade-offs

A bottom tab bar on desktop is unusual — power users expect Cmd+K and tight top chrome, not a "phone widget" floating over the page. The wager is that one consistent primitive at all widths is worth the surprise, and the Menu tab carries ⌘K and shortcuts so the keyboard-first crowd is one tap away. The Manage sheet's five inner tabs (Settings / Files / Blueprint / DB / Logs) re-introduce a small bit of nesting (tab → tab) — defensible because they all live in **one** secondary surface, but it's two clicks to deep features. The blueprint gallery thumbnails are CSS gradients rather than real screenshots; on a shipping site you'd want actual previews. Glass blur is a real cost on lower-end devices; the design degrades gracefully (the panels remain opaque if backdrop-filter is unsupported) but the visual signature softens. Finally, the iframe-content tinting is shown as two examples (warm / dark); in production it'd sample a few pixels of the iframe — solvable with `postMessage`, but it's a real engineering item, not a screenshot trick.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (exactly 8, listed in HTML footer)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (corner toggle + dedicated state with Esc pill)
[x] One door per feature (no duplicates)?   Score: 4/5  (settings consolidated; Menu sheet has a shortcut to Manage › Settings — pointer, not duplicate)
[x] One secondary surface (not many)?       Score: 5/5  (one sheet primitive; content swaps based on active tab)
[x] Direction expressed strongly?           Score: 5/5  (translucent tab bar is the centerpiece, with scroll-fade and tone-tint shown as distinct states)
[x] Mobile feels like wider-mobile desktop? Score: 5/5  (same tab bar primitive on 390 and 1440; only the sheet column count differs)
[x] Critique pass on glass/ambient use?     Score: 4/5  (glass earns keep via tone-tint + scroll-fade hierarchy; the danger is over-blur on slow GPUs)
```
