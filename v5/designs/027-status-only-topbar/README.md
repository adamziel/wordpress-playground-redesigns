# v5 · 027 — Status-only top bar

> The 24-pixel top bar is **typography, not navigation.** Six monospace status chips report what is true about the running playground. ⌘K is the one door to everything else.

## Thesis

A WordPress Playground that respects the iframe by spending only **24 vertical pixels** on chrome and **zero pixels** on buttons. The top bar is a read-only status line — `coffee-shop.wpsite · Saved 2m · WP 6.7.1 · PHP 8.3 · DB sqlite · BP coffee-shop@v3 · ⌘K` — that *reports* state instead of *operating* on it. Every action lives in the palette, opened with ⌘K (or a bottom-center "Find anything /" fab on touch). The chips are tappable, but only to *jump to the place where that fact can be changed* (click `PHP 8.3` → palette opens to `/settings` with the PHP fragment focused; click `Saved · 2m` → palette opens to `/save`). Two paths, one room — never the reverse. The only persistent button anywhere on screen is the 32px fullscreen pill at the iframe's bottom-right corner, so v5's "explicit one-click fullscreen toggle" requirement is met without a single button in the top bar itself.

## What I merged / removed / chose

The triple-entry-point sin — popover + sidebar tab + info notice — collapses into a single `/settings` scope rendered as a Notion-style English sentence with inline-editable fragments (the lesson from direction #50; settings stop being a form). The five Site Manager tabs become five palette scopes (`/files`, `/blueprint`, `/database`, `/logs`, `/export`); the launcher becomes `/sites` (saved playgrounds + the six "Start a new" sources on the same screen, no drawer); the blueprint gallery becomes `/blueprints` with 10 category filters and 18 cards visible. Apply & Reset gets three guardrails together: a diff preview, a typed-phrase confirm ("reset coffee-shop"), and an auto-snapshot recovery path that lives in `/sites` for 24 hours. WP Admin / Homepage / Export-to-PR / Download .zip all live in `/export` only — never duplicated as toolbar buttons (the bar is read-only). The save button is gone entirely — the **save-state chip is the save door**; clicking it focuses `/save` and pressing ⌘S anywhere commits. Glass is used in exactly three places, each with a named purpose: the status bar (depth-frosted so the iframe colour bleeds through subtly, signalling "the site is behind this thin readout"); the palette (frosted modal as the everything-door); the fullscreen pill (frosted dark so it reads against any iframe content).

## Trade-offs

The discoverability tax is real and intentional. A first-time visitor sees six status chips and the words "Press ⌘K" — they may not know that the chips are jump-buttons or that ⌘K is the door. I mitigate with a one-time on-load hint ("Tap / to open anything") that fades after 2 seconds, and on mobile by replacing the desktop ⌘K hint with a persistent **bottom-center "Find anything /" pill** so phone users (who can't press ⌘) have an always-visible big touch target. The `/sites` scope deliberately co-locates saved playgrounds *and* the six "Start a new" sources, which means there's no dedicated `/new` screen — `/new` is a sub-scope that auto-scrolls to the same list. The status chips look interactive but the cursor stays an arrow (per #016's "if it's touchable, label it; if it's engraved, don't"); clicking them opens the palette, never a popover, so the gesture's destination is consistent. Cmd+R is left to the browser (refresh-iframe lives in `/export` as a row + the gesture ⌘⇧R), not intercepted — the lesson from review #015. The biggest concession: the 6-chip status bar at 24px is information-dense by design and on mobile the chips collapse to 4 (name, save, WP, PHP) — DB and BP move into `/sites` site cards.

## Three demonstrated states

1. **Working session** (Frame 1) — idle, all chrome visible, 7 affordances total.
2. **Booting** (Frame 6) — save-state chip flips to blue "Booting · 62%", DB chip reads "resetting…", boot card centred in the iframe stage; fullscreen pill becomes a Cancel-boot button.
3. **Launcher / palette open** (Frames 2, 3, 4, 5) — four palette scopes shown: `/blueprints` with 18 cards + 10 category filters, `/sites` with 4 saved playgrounds + 6 "start a new" sources, `/settings` with sentence editor + destructive Apply confirm, and a side-by-side composite of `/files` + `/blueprint` + `/database` + `/export` + `/logs`.

## Affordance accounting at idle (Frame 1)

```
[1] name + rename chip
[2] save-state chip (also the save button)
[3] WP version chip
[4] PHP version chip
[5] DB chip
[6] BP (blueprint) chip
[7] fullscreen pill (one-click toggle, Esc to exit)
[+] ⌘K hint — labelled passive text; tappable but visually distinct from a chip
                    via lower contrast and the monospace `⌘K` glyph
```

That's **7 interactive affordances + 1 passive label = 8 ceiling exactly**. All sep marks, the `WP/PHP/DB/BP` micro-labels, and the playground name's text are typography only.

## Self-critique scores

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    7 interactive + 1 passive ⌘K label = 8 exactly. Cap respected.

[x] iframe primary + fullscreen toggle?     Score: 5/5
    iframe is everything except 24 top pixels (and a 32×32 corner pill).
    Fullscreen is a real visible button + ⌘· + Esc to exit (three roads).

[x] One door per feature (no duplicates)?   Score: 5/5
    Save: only the status chip (no separate Save button anywhere).
    Settings: only /settings (sentence). No popover, no sidebar tab.
    Export/Download .zip/WP-Admin/Homepage: all and only in /export.
    Chip→palette scope is a "scope-jump" gesture, not a duplicate destination.

[x] One secondary surface (not many)?       Score: 5/5
    There is one secondary surface — the palette. Every panel
    (Settings, Files, Blueprint, DB, Logs, Sites, Blueprints, Export) is
    a scope inside it. No sidebars, no drawers, no docks.

[x] Direction expressed strongly?           Score: 5/5
    The direction is "status-only top bar; no buttons; everything via ⌘K."
    Result: 24px bar, six monospace status chips, zero buttons. ⌘K is the UI.
    The single button anywhere on screen is the fullscreen pill — which is
    required by v5 brief §2 rule 1 and lives OUTSIDE the top bar, not in it.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same 24px bar, same palette, same fullscreen pill. The bottom-center
    ⌘K fab on mobile is the touch substitute for ⌘K — desktop hover-K and
    mobile tap are equivalent gestures targeting the same palette.
    -1: DB and BP chips collapse on mobile (4 chips, not 6) — narrower
    real-estate cost. Information loss is acknowledged.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass appears three times, each named:
      · Status bar — frosted so iframe colour bleeds through, signalling
        "the site is behind this thin readout."
      · Palette — frosted modal as the everything-door.
      · Fullscreen pill — frosted dark so it reads against any iframe.
    -1: I do not implement content-aware tint (would require JS sampling).
    Static frost only.
```

**Average: 4.71 / 5.** Pre-emptively honest: the discoverability tax on first-touch is a real risk that one ephemeral hint pill cannot fully solve. The biggest design bet is that *the chips' clickability is teachable in one session* — the status bar reading is the lesson, and "click to change the thing you're reading" is a learnable pattern (same as ⌘-clicking column headers in macOS Finder, or ⌥-clicking a battery to see details).
