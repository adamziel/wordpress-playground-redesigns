# v7 #006 — Smart-resize × Epic recede

## 1. Thesis

Two panes. Always. The right pane is the chrome — but what it *contains* changes
based on whether a site is running. When no playground is mounted, the right
pane **is** a cinematic Epic launcher at 50/50: full-bleed hero, one decisive
LAUNCH verb, blueprint shelf, your sites. The instant a site begins to boot,
the launcher physically recedes (blur, opacity, scale) and the seam glides to
75/25 — at which point the same pane's content swaps to the six functional
Site-Manager tabs (Sites · Settings · Files · Blueprint · DB · Logs). One IA
spine, two pieces of clothing on it. The launcher never "closes" and the
panel never "opens" — they are different lives of the same surface.

## 2. Primitives composed (named per the KEEP list)

- **SR — Smart-resize (v5 #023).** The backbone. Two panes, focus-driven
  snap at 35/65, 50/50, 60/40, 75/25; `F` for 100/0 fullscreen, `Esc` to
  return. The seam carries a passive momentum gauge — ratio number, vertical
  fill column, directional arrow, snap-marker list. Never a drag handle.
  Visible in **every** desktop frame.

- **EPC — Epic launcher (v1 #13, refined in v5 #044).** The cinematic hero
  *is* the right pane when no site is running (Frame A). One decisive
  **LAUNCH** verb. Featured shelf, sources grid (all 6 starting points
  visible), Your Playgrounds list (3 saved). When boot begins, the launcher
  visibly recedes (Frame B: blur 2px + opacity .5 + scale .98 + scale-origin
  top-right so it visually slides into the corner).

- **DEV — DevTools top bar (v1 #64).** Single-row 44 px slim chrome.
  Save-state lives as a pill where HTTPS would, like a browser address bar.
  No two-row chrome; no popovers fighting the sidebar.

- **3LD — Three-layer depth, visual only (v5 #035).** Used strictly as the
  *recede transition*, never as the interactive control. Frames B / D / G
  show the iframe pane gaining sharpness while the secondary pane (or
  receding launcher) loses it. Depth = focus history, not depth = clickable.
  Banned interaction usage avoided.

- **CWS — Corner-widget Sites (v5 #036), light reuse.** The leftmost
  compact-pane tab carries a live status dot + saved-count ("Sites · 3").
  It's the canonical door to Library inside a running session. I kept the
  widget *inside* the pane (rather than corner-pinned) so the design stays
  within "one secondary surface" — the spirit of CWS (status-doubling-as-door)
  is preserved without spawning a second persistent chrome element.

## 3. What I remixed / removed and why

The triple-door settings problem (popover + sidebar tab + info-notice) is
collapsed to a single door: the **Settings** tab inside the right pane. The
inline "Save site locally" button in the Settings notice is **deleted** —
there is exactly one Save: the dark pill in the top bar. WP Admin / Homepage
chips are moved into the More menu (they're navigational, used rarely, and
the URL bar already covers them with G A / G H shortcuts). The "Saved
Playgrounds" right drawer and the Site-Manager left sidebar both vanish into
the one pane that swaps content. **Apply & Reset** is upgraded from a red
banner to typed-phrase confirm + auto-snapshot + ⌘Z within 30 s — three
layers of safety, not one (Frame C). The launcher's 43-blueprint browser
lives in the Sites tab when running (Frame D) and in the launcher shelf
when idle (Frame A) — but those are *mode-disjoint*, not duplicate doors.

## 4. Trade-offs

The biggest risk is that a user who boots a saved playground from a deep
link skips Mode A entirely and never sees the cinematic launcher — they
encounter the design as "DevTools + 6 tabs", which doesn't telegraph its
own richness. Mitigation: the Sites tab is the first tab in the compact
pane and uses CWS visual treatment (live dot, count) to advertise that
Library is one click away; clicking it summons the same blueprint browser
shown in Frame D. A second trade-off: at 75/25 the secondary pane is
narrow (~340 px on a 1440 viewport) — fine for Settings or Logs, tight
for the Files editor (Frame E uses 60/40 deliberately) and the blueprint
gallery (Frame D forces 35/65 with `⌘1` style pane-focus shortcut). I
think this is fine: the system *teaches* that interacting with the pane
grows it. Third: there is no manual drag of the seam — the gauge tells
you the ratio is changing, but power users who want 62/38 are out of luck.
This is the same trade-off v5 #023 made; I retain it. Mobile keeps the
same primitive with a horizontal seam, swapping the icon-bar across the
bottom instead of beneath the seam.

## 5. Demonstrated states

- **Frame A** — Idle 50/50: Epic launcher in right pane (1 hero, 6 sources, 8 blueprint tiles, 3 saved sites)
- **Frame B** — Booting: seam mid-glide 65/35 → 75/25, launcher receding with blur+opacity+scale, live boot-step log
- **Frame C** — Working 75/25: iframe focus, Settings tab in compact pane, typed-phrase Apply+Reset, "Saved" toast
- **Frame D** — Pane focus 35/65: full blueprint gallery, search, 10 category chips, 16 cards from the real 43
- **Frame E** — Files tab 60/40: live code editor on functions.php with WP admin Themes page in iframe
- **Frame F** — Logs tab 50/50: 7 realistic PHP log lines (notice / warn / error), filters, search
- **Frame G** — Blueprint tab 40/60: real blueprint JSON with `installTheme`, `installPlugin`, `importWxr`, `setSiteOptions`, `runPHP` steps
- **Frame H** — DB tab + More-menu open: SQLite tables, both Export-to-GitHub-PR and Download-.zip surfaced
- **Frame I** — Fullscreen 100/0: corner-pill with save state + "Esc to exit" hint
- **Mobile A / B / C** — same SR + Epic recede at 390×844 with vertical seam and bottom tab-bar

## 6. Counted idle affordances (Frame A, annotated in-canvas)

1. **Refresh** (top bar)
2. **URL bar** (with ⌘L hint)
3. **Save-state pill** ("Unsaved Playground" status)
4. **Save** dark button (appears only when unsaved → 0 most of the time)
5. **Fullscreen** (icon + F key)
6. **More** kebab (Homepage, WP Admin, Export PR, .zip, Rename, Delete, ⌘K)
7. **Seam gauge** (passive read-out: ratio + arrow + snaps)
8. **LAUNCH** verb (the one decisive primary action of the cinematic hero)

**Exactly 8.** The launcher's blueprint tiles, source cards, and Your-Playgrounds
rows are *content* in the secondary pane, not chrome affordances. Once a site
boots, the LAUNCH verb is replaced by the 6-tab strip (still one cluster, like
a segmented control = one affordance), keeping the count at 7 in Mode B.

## 7. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 4/5
    Exactly 8 counted, annotated in Frame A. The seam gauge is passive
    (no click target) but I'm counting it conservatively. The 6-tab
    compact-pane strip in Mode B is one cluster (segmented control),
    which keeps the count under 8 in the running state too.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    Iframe is always the left pane (or full screen). Fullscreen icon is
    in the top bar with F shortcut; Frame I demonstrates 100/0 with a
    corner pill that teaches the way out ("Esc to exit"). The launcher
    never occupies more than 50% of the viewport, even at boot.

[x] One door per feature?                      Score: 5/5
    Settings: only in the Settings tab. Save: only the top-bar pill
    (inline-notice Save button deleted). WP Admin / Homepage: only in
    More menu. Library/Blueprints: launcher (pre-boot) XOR Sites tab
    (post-boot) — mode-disjoint, not duplicate. Export PR / .zip: only
    in More menu. No triple-door surfaces.

[x] One secondary surface?                     Score: 5/5
    The right pane IS the secondary surface. Its content swaps between
    Epic launcher (pre-boot) and 6-tab compact (post-boot). There is no
    sidebar, no drawer, no second panel. Site Manager left-sidebar and
    Saved Playgrounds right-drawer have both collapsed into this pane.

[x] Direction strongly expressed?              Score: 5/5
    "Smart-resize × Epic recede" is literal: Frame A shows EPC at 50/50;
    Frame B shows the recede mid-glide with blur+opacity+scale on the
    pane and the gauge animating 65/35; Frame C shows the post-recede
    25% pane with functional content. The seam, gauge, and recede are
    all visible across frames.

[x] Mobile = wider-mobile desktop?             Score: 4/5
    Same two-pane SR (vertical seam). Same Epic launcher in the lower
    pane (Mobile A). Same recede + content-swap on boot (Mobile B/C).
    Same bottom-tabbar replaces what the right edge does on desktop.
    Half-point off because the top-bar collapses (no More button at
    390 px — it migrates into the bottom-tab Manage stack) — same
    information architecture, slightly different chrome density.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    Five primitives named & integrated: SR (assigned, backbone) +
    EPC (assigned, secondary-pane content pre-boot) + DEV (slim top
    bar) + 3LD-visual (recede transition only, never interactive) +
    CWS (Sites tab live status, light reuse inside the pane).
    The README §2 maps each to a specific frame.

[x] No banned patterns (§1 DROP)?              Score: 5/5
    NO two-row top bar (single 44 px row, ≤ 6 chips).
    NO depth-as-interactive-control (blur appears ONLY on the receding
    pane in B/D/G as a transition affordance, never as a click target).
    NO dual-channel duplication (no terminal echoing the visual UI;
    Logs is read-only output from PHP, not a mirror of GUI actions).
```

**Total: 38 / 40.** All rows ≥ 4. No revision needed.
