# 011 — Auto-hide HUD

## Thesis

WordPress Playground rendered like a video player. The iframe is the document; chrome is the heads-up display. At idle, after two seconds of mouse stillness, every surface dissolves — the iframe occupies 100% of the screen and a single heartbeat pill in the upper-right confirms the playground is alive and saved. A single mouse-move within the viewport fades the HUD back in: a 44px top strip (URL, name, save chip, version, menu), a 64px bottom strip (saved-sites dock + fullscreen pill), and two 36px slim rails on the left (Launcher) and right (Site Manager). Each rail is one door — clicking opens **the** pane: a single secondary surface that docks from the rail that summoned it and carries content via tabs. The same component renders Launcher (43 blueprints, 6 sources, 4 saved sites) on the left, Site Manager (5 tabs) on the right. Press F for absolute fullscreen, Esc to exit. Eight always-visible affordances when revealed; one when truly idle.

## What I merged, removed, why

The three v1 settings entry points (popover, sidebar tab, info-notice button) collapse into one canonical home: the Site Manager · Settings tab on the right rail. The Saved Playgrounds drawer, six "Start new" sources, and the 43-blueprint gallery merge into one Launcher pane on the left rail with three tabs (Your sites · Start new · Blueprints). Save lives only in the URL pill as a colored save-chip — no separate Save button anywhere; clicking the chip is the save gesture. Apply & Reset escalates from a small red banner to a typed-phrase confirm (the user must type the playground name) plus an auto-snapshot .zip download — destructive but recoverable. WP-admin and Homepage shortcuts live only inside the Site Manager header (not duplicated in top bar). Export to GitHub PR and Download .zip live only in the top-bar kebab menu. The bottom dock replaces the old "Saved Playgrounds dropdown trigger" entirely — clicking a dock avatar switches the active site. The four rail-icons on the left aren't four doors; they're deep-links into one door (the Launcher pane with the matching tab pre-selected).

## Trade-offs

Auto-hide trades discoverability for restraint. First-time users may not realize chrome exists at all — the corner heartbeat hint and a one-time onboarding flash compensate, but a returning user who hasn't touched the app in months would notice the gap. The 2-second timer is the trickiest detail: too short and the HUD flickers as the user pauses to read; too long and the iframe is partly covered. I picked 2s as a video-player industry baseline, with the HUD locked open during boots and any pane being open. The slim 36px side rails are technically chrome that the iframe never breaks past, so the iframe at the "revealed" state is 1368×792 (~83% of the screen) rather than truly 100% — only the idle state is 100%. On mobile, when a pane opens, it covers the iframe entirely; this preserves the iframe at 100% in the idle state but loses iframe primacy when a pane is open. I judged that an acceptable trade because mobile screens cannot host a side-docked pane without making it useless.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    True idle: 1 (heartbeat pill). Revealed:
      TOP   refresh · URL pill · name · menu   (4)
      LEFT  Launcher rail                       (1)
      RIGHT Site Manager rail                   (1)
      BOT   dock · fullscreen pill              (2)
    = 8. Version chip is passive text. Rail icons
    inside a rail are deep-links to one door, not
    eight doors (counted in audit).

[x] iframe primary + fullscreen toggle?     Score: 5/5
    At idle the iframe is 100% bleed. State 10
    demonstrates F → absolute fullscreen with even
    the heartbeat pill removed; Esc exits. The HUD
    locks open during boot (State 8) and panes; at
    every other moment the iframe is the document.

[x] One door per feature (no duplicates)?   Score: 5/5
    Settings only in Site Manager · Settings. Save
    only in URL pill chip. Launcher only on left
    rail. Site Manager only on right rail. Export/
    Download only in top-bar kebab. WP-admin/Home
    only in Site Manager header. Apply & Reset only
    inside Site Manager · Settings.

[x] One secondary surface (not many)?       Score: 5/5
    Single .pane component. Docks from the left
    rail (Launcher) OR the right rail (Site Manager).
    Tabs inside swap content (Your sites/Start new/
    Blueprints on Launcher; Settings/Files/Blueprint/
    Database/Logs on Site Manager). Same React node
    in production, mirrored by edge.

[x] Direction expressed strongly?           Score: 5/5
    The entire IA is auto-hide HUD. The 2-second
    idle timer is named in copy. State 1 shows the
    iframe with NO chrome (just one tiny corner pill).
    Edge annotations name the four edges and their
    contents. The naming "HUD" is honored everywhere.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same component, same tabs, same idle behavior,
    same fullscreen toggle. The phone uses 8px edge-
    gradients in place of 36px rails (touch targets
    expand on tap). −1 because the pane covers the
    iframe at 390px wide — unavoidable but a violation
    of iframe primacy *while a pane is open* on mobile.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass earns its keep: it overlays the iframe and
    needs depth separation. The blur is 18px on edge
    HUD, 28px on the pane (heavier blur for the
    deeper surface — depth as hierarchy). No glass
    is decorative; every glass surface is also
    auto-hiding. −1 because the pane could be
    defended at 22px instead of 28px and the
    saturation boost on the pane is a stylistic
    rather than a functional choice.
```

Average: 4.71 / 5 — committed.
