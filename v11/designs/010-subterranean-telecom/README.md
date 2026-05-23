# 010 — Subterranean Telecom

## Thesis

A Cold-War switching room reduced to the smallest set of marks that still feel like infrastructure. Graphite housing, a single muted-teal signal bar, and a row of hand-cut "patch labels" where icons would normally sit. Each dock is an engraved uppercase pair followed by a half-size serial: `SI/01`, `SM/02`, `BP/03`, `DB/04`, `LG/05`. The labels are proportional Recursive Sans Linear — they read as engineering markings, not as a monospaced code-tape — and the active dock simply brightens its label and gains a 2 px teal rule at its left edge. No icon font, no glyph set, no badge. The same patch idea echoes through the pane heads, the sources, the saved sites, and the library cards, so the whole interface speaks one alphabet.

## What's locked and what's explored

Locked: the v7 #010 interaction model. One iframe-primary surface, one quiet ~72 px left rail, one swap-content pane, a slim top capsule, a corner site widget, a modal Library overlay, a 390 × 844 mobile mirror.

Explored: the rail's identity and the corner widget. The brief asked for "five hand-cut patch labels" instead of icons — the engineering decision was to mock that effect with one variable font (Recursive) flexed on its weight axis instead of swapping faces or reaching for a display cut. The corner widget became a horizontal engraved bar with bullet-separated stats and a single 1 px underline — no box, no chip, no badge — which is the most data the lock budget will allow without re-introducing visual chrome.

## Focus-test answer

*Why is the iframe the loudest object on the screen?* Because every chrome surface is rendered in muted graphite with off-white type and the only chromatic accent on the entire interface is a 2 px teal rule that says "you are here." The iframe is therefore the only saturated rectangle, the only large rectangle, and the only thing that ever changes content under the cursor.

## Trade-offs

Patch labels carry more cognitive weight per second than abstract icons — a stranger needs the tooltip on first contact. The payoff is that the rail then reads as a finite, named navigation surface forever after, and the same vocabulary teaches every other surface (saved sites, blueprint cards, the booting frame, the mobile bar). The serial codes (`/01`–`/05`) double as URL-style breadcrumbs in the capsule and corner widget, which keeps the address bar honest without ever switching to a monospace font outside the editor. The two-letter pair limits naming to roughly 26² combinations — a hard ceiling for the rail surface forever, which is exactly the simplicity the brief is asking for.
