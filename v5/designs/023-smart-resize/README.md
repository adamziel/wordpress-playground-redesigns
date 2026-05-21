# 023 — Smart resize

## Thesis
The chrome around Playground has always been a static container: side panels, drawers, modals — each demanding a click to enter and another to exit. **Smart resize** turns the layout itself into the interaction. There are exactly two panes — the iframe and one secondary surface — and they are always both present. Whichever pane the user interacts with **gains weight**; the other yields. No drag handle, no manual divider, no "open / close" verbs. Focus *is* the layout. Rest = 50/50; click into the WP site = 75/25; click into the pane = 35/65; press F = 100/0 fullscreen with chrome auto-hidden (Esc returns). The seam between the two panes carries a tiny gauge so the user sees the ratio shift before they have to think about it.

## What I merged / removed / why
The triple settings doors (popover + sidebar tab + info notice) collapse into the single **Settings** tab inside the pane. The Site Manager left sidebar and the Saved-Playgrounds right drawer both collapse into the same pane via a 6-tab segmented control (Sites / Settings / Files / Blueprint / DB / Logs) — one secondary surface, swappable content. **WP Admin** and **Homepage** are no longer global icons; they live as right-anchored chips in the pane head only when contextual (visible on Settings/Files), eliminating duplicates with the URL bar. The save-state pill is *status only* (saved / saving / unsaved) and a separate dark **Save** button only appears when unsaved (lesson from review #001, #003, #005: never mix status and action on the same pill). Apply &amp; Reset requires a typed phrase (`reset coffee shop`) — a typed-phrase confirm replaces the inline red banner, satisfying v5 §2 rule 8. Top bar holds 5 chips total at 44px height. The pane is never closed — the closest analogy is iPad multitasking #55, but pushed further: the divider is not a thing you grab, it's a thing that *follows your eye*.

## Trade-offs
The biggest risk is **discoverability of the gesture**. New users may not realize that simply clicking the iframe makes it grow. I mitigate three ways: (1) the seam carries a tiny ↞ / ↠ arrow + ratio gauge that updates with every focus shift, so users see the system reacting; (2) the focused pane gains an inset blue bar on its inner edge so the cause-effect link is visible; (3) the keyboard shortcut row in the seam tooltip (`F`, `Esc`, `⌘1–6` to jump tabs) trains power users fast. A second trade-off: the iframe is *never* fully maximised in idle — even at 75% iframe focus, the pane occupies 25%. This is intentional (the iframe IS the document, but the pane is the chrome that proves you're in Playground, not just a browser), and the explicit fullscreen toggle gives the escape hatch. Third: with no manual divider, users cannot set an arbitrary ratio — the system snaps to four levels (35/65, 50/50, 60/40, 75/25). I think this is a feature, not a bug: it eliminates fiddling and makes the layout predictable. Mobile uses the same primitive with a horizontal seam — same affordances, same gauge, same 6 tabs (icon-only at small width but tappable).

## Demonstrated states (7)
- **State A** — Rest 50/50 (idle, both panes peer)
- **State B** — iframe focus 75/25 (user clicks the WP site)
- **State C** — Pane focus 35/65 with Settings + typed-phrase reset
- **State D** — Blueprint pane 40/60 with 18 visible blueprints, 10 category chips, search
- **State E** — Files pane with functions.php open in editor
- **State F** — Logs pane with PHP error stream + level filters (mobile)
- **State G** — Booting (60/40, pane keeps blueprint context, "Cancel boot")
- **State H** — Database pane (mobile, early-access notice + table view)
- **State I** — Fullscreen iframe (100/0, chrome hidden, F/Esc hint)
- **State J** — Unsaved → Saving → Saved transition with toast

## Idle affordance count: 7
1. **WP/Refresh** glyph (combined — clicking the mark refreshes the iframe)
2. **URL bar** (address + lock)
3. **Name pill** (status only: Saved / Saving / Unsaved)
4. **Save** button (appears only when unsaved → otherwise hidden, so this is 0 at the most-common idle state)
5. **Fullscreen** icon (iframe toggle)
6. **More** kebab (Export to GitHub PR / Download .zip / Rename / Delete / Docs)
7. **Pane segmented control** (Sites · Settings · Files · Blueprint · DB · Logs — counted as one cluster)

The pane also surfaces **WP Admin** and **Home** as contextual chips in the pane head (visible on Settings/Files/etc.), but those are pane-internal, not top-bar chrome.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (7 counted, with Save only appearing when unsaved)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (F key, Esc to exit, fully demonstrated in State I)
[x] One door per feature (no duplicates)?   Score: 4/5  (settings collapsed; WP Admin / Home moved into pane head — one place; the More menu does carry export/.zip/rename, which is fine as the destructive/IO drawer)
[x] One secondary surface (not many)?       Score: 5/5  (single pane, 6 swap-tabs; never two panes at once)
[x] Direction expressed strongly?           Score: 4/5  (the gauge + ratio shift makes the metaphor visible; discoverability of "click → grow" is the soft spot; the seam annotation helps but a first-time user may need a tooltip — I considered an onboarding pulse animation but left it out to keep affordance count honest)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same 6 tabs, same gauge, same seam — but rotated 90°; tab labels collapse to icons at 390 which is the only stated deviation)
[x] Critique pass on glass/ambient use?     Score: 5/5  (no glass used; the iframe stays white; chrome is solid white — restraint earns the keep)
```

All rows ≥ 4. No revision needed.
