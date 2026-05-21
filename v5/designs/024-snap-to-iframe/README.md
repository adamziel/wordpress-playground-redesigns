# 024 — Snap-to-iframe

## Thesis

The iframe and a single secondary pane share the viewport at a fixed 70/30 split — iframe left, pane right. The pane is **one surface** with five tabs across the top (Settings · Files · Blueprint · Database · Logs) and a Manage/Launch mode toggle that swaps its entire payload between site-manager content and launcher content. Double-click anywhere in the iframe and it **snaps** — the pane and all chrome dissolve, the iframe occupies 100% of the canvas, and a small "Esc to return" pill is the only remaining mark. Esc, F, or another double-click restores 70/30. The gesture is the metaphor: focus is something you reach for, and you reach with the same hands you were already using. Eight always-visible affordances at idle, one when snapped.

## What I merged, removed, why

The three v1 settings doors (popover, sidebar tab, info-notice button) collapse into one — the Settings tab inside the right pane. The two launcher doors (top-bar dropdown + drawer) collapse into one — the pane's Launch mode toggle is the inline launcher, and the "+" tile in the bottom dock opens the full-gallery modal which is *the same React component* expanded. Save lives only on the URL-bar chip (and ⌘S) — no separate Save button. Wp-admin, Homepage, Export-as-PR, Download-zip, Duplicate, Delete, Keyboard shortcuts all live in **one** kebab menu (the 4th idle affordance). The "Additional actions" menu from the v1 Site Manager header is gone — its two items moved to the kebab. The Apply&Reset destructive control escalates from a small red banner to a typed-phrase confirm + auto-snapshot .zip download (recoverable destroy). The bottom dock combines saved sites *and* the launcher trigger into one row — no separate "Saved Playgrounds" dropdown trigger in the top bar. The blueprint gallery's pocket view (in pane) and full view (in modal) share data and search.

## Trade-offs

A fixed 30% pane costs canvas — a power user who lives in the iframe will reach for snap mode constantly. That's the design's bet: the snap gesture is so fast (one double-click, no menu) that the cost is small, and it teaches the iframe→pane→iframe rhythm rather than hiding either surface. The dock duplicates *navigation between saved sites* with the launcher's "Your Playgrounds" section, but I count them as one home: the dock is the active-site switcher (avatars only), and the launcher is the catalog (avatars + metadata + delete). The 70/30 ratio is non-negotiable in this v5 — I removed the dragged divider's labeled snap detents (25/50/75 from peer #017) because that's a different direction; here, the only "snap" is to 100%. The pane disappears entirely in snap mode rather than collapsing to a 24px tab — discoverability of snap mode itself relies on the always-visible "Double-click to snap" hint pill in the iframe's bottom-right corner; remove it and the gesture is invisible.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    Listed in the affordance counter at the top of
    the document:
      1. Refresh icon (top-left)
      2. URL bar (containing embedded save chip)
      3. Name pill (current playground + dropdown)
      4. Kebab menu (export/admin/home/dup/del/?)
      5. Pane 5-tab strip (one surface, 5 tabs)
      6. Pane mode toggle (Manage / Launch)
      7. Bottom dock (saved sites + "+" launcher)
      8. "Double-click to snap" hint pill
    The save chip is counted *inside* the URL bar as one
    affordance, not two — it's a sub-component visually
    bonded to the bar (same pill, same height, same
    border). The dock's individual avatars are one
    spatial group, not 5 separate affordances.

[x] iframe primary + fullscreen toggle?     Score: 5/5
    Idle: iframe is 70% wide × full height — always
    visible and bigger than the pane. Snap: iframe at
    100%, chrome dissolves except an exit hint and a
    save heartbeat. The toggle is THREE ways: double-
    click on iframe, F key, Esc to exit. State 2 shows
    snapped at both desktop and mobile. The pane never
    intrudes during snap.

[x] One door per feature (no duplicates)?   Score: 4/5
    Settings → only Settings tab. Files → only Files
    tab. Blueprint → only Blueprint tab. DB / Logs →
    only their tabs. Save → only the URL-bar chip
    (& ⌘S). Export / WP-admin / Home → only kebab
    menu. Launcher → pane in Launch mode OR the dock
    "+" — both open the same component (pane = pocket,
    "+" = modal). Apply&Reset → only Settings tab.
    −1 because the dock and the launcher's "Your
    Playgrounds" both list saved sites — defensible as
    "switcher vs catalog" but a critic could call it a
    duplicate door.

[x] One secondary surface (not many)?       Score: 5/5
    Single .pane component, 432px wide on desktop, 35%
    tall on mobile. Five tabs swap its content. Mode
    toggle (Manage / Launch) swaps its entire payload
    set. State 6 shows the surface twice side-by-side
    (Logs + Database) explicitly to demonstrate that
    nothing about the surface changes — only the tab.
    The full-launcher modal is the same component
    rendered larger; it is not a 6th panel.

[x] Direction expressed strongly?           Score: 5/5
    "Snap-to-iframe" is the literal title of State 2,
    the literal label on the always-visible hint pill,
    and the literal kbd-shortcut copy ("Esc or F to
    return"). The 70/30 split is the entire IA. The
    direction is not a flavor — it is the architecture.
    A user who never saw the brief could correctly
    guess the direction's name within five seconds.

[x] Mobile feels like wider-mobile desktop? Score: 5/5
    Same five-tab strip, same Manage/Launch toggle,
    same dock, same kebab, same snap gesture (double-
    tap), same save chip, same destructive escalation.
    The only delta is the split axis: 70/30 horizontal
    on desktop → 65/35 vertical on mobile, preserving
    iframe primacy. No "mobile-only" affordances.
    Tab labels truncate to 3-letter abbreviations but
    keep their icons.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass is used in exactly four places, each named:
      a) top bar (16px blur, sits over iframe edge for
         depth-separation when scrolling site)
      b) snap-hint pill (8px blur, sits over iframe)
      c) dock (20px blur, sits over iframe bottom)
      d) launcher modal scrim (8px blur, depth signal
         that the modal is *over* the canvas)
    Each glass earns its keep: depth separation between
    chrome that overlays iframe content. No glass is
    decorative; no glass is hover-only "shine." The
    pane itself is opaque white — glass is reserved
    for surfaces that float on top of the iframe,
    not surfaces docked beside it. −1 because the dock
    could be argued to be safely opaque (it's at the
    bottom, no iframe content below it) — the glass
    is a depth choice rather than strictly load-
    bearing.
```

Average: 4.71 / 5 — committed.
