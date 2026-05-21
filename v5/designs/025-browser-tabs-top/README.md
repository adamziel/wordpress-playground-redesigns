# 025 — Browser Tabs Across the Top

## Thesis
The strongest interpretation of "Playground as a browser" isn't a metaphor — it's a *reuse* of every primitive Chrome already taught the user. Each saved playground is a **real browser tab** at the top. The "+" tab is the only door to the launcher. The URL bar acts on the active tab. The "Unsaved" state lives in the address bar as Chrome's familiar https-style indicator. The five Site-Manager surfaces become a **DevTools dock** below the iframe — collapsed by default to a 32-px status rail so the iframe is the document being inspected, not a passenger in its own chrome. Where #64 went DevTools, #25 goes *the whole browser*: tabs and address bar inherited too, not just the bottom panel.

## What I merged / removed and why
The most violent simplifications: (1) The "Saved Playgrounds" dropdown is **gone** — the tab strip *is* the saved list, with active state, favicons, and an unsaved-dot. One door. (2) The quick-settings popover is **gone** — folded into the dock's Settings tab; the inline info-notice Save button is **gone** — folded into the address-bar pill. So Settings has *one* door (dock → Settings) and Save has *one* door (pill in URL bar). (3) The Site Manager open/close button is **replaced** by the dock toggle — the dock is the one secondary surface, swapping its content between Settings/Files/Blueprint/Database/Logs, exactly matching the v5 principle. (4) "Additional actions" (Export-to-GitHub-PR / Download-zip) live as two icon buttons in the dock's chrome strip, not as a hidden menu — visible only when the dock is open, which is the context where export makes sense. (5) "Apply + Reset" gets a proper typed-phrase confirm sheet because a red banner is not enough.

## Trade-offs
Tabs-as-playgrounds is a strong commitment: if you have 20 saved sites the tab strip will overflow (mitigation: tabs scroll horizontally and the New-Tab page surfaces "Your Playgrounds" tiles for the long tail — same surface as Chrome's "frequently visited"). The browser metaphor is so familiar it risks invisibility — designers may expect playgrounds to feel "more like a tool" — but the v5 brief explicitly told us that familiarity is a feature, and the user understood #64 instantly for the same reason. Fullscreen-iframe and the explicit Esc toggle are first-class affordances (idle icon in toolbar; hint band in the fullscreen state), fixing the Win11 Settings gap. The mobile design preserves all primitives — tabs scroll horizontally, dock becomes a bottom sheet with the same five sub-tabs along its top edge — no "mobile fallback".

## Lessons applied from earlier v5 reviews
- *Review 005*: "Don't nest a second tab strip inside a sheet." → Mobile dock-sheet keeps the five Site-Manager sub-tabs as a single chip strip with a remembered last-used tab.
- *Review 009*: "A kebab can hide as much complexity as a visible bar." → The kebab here holds only meta items (Sign in, Docs, About) — *not* duplicates of dock items. Export-to-GitHub-PR and Download-zip live on the dock chrome where the action is contextual.
- *Review 003*: "Don't ship the same verb in three forms." → Save lives in the pill only. No "Save" button anywhere else.
- *Review 006*: "Don't import clever ideas from other v1 winners." → No spatial dock, no glass surfaces — the design is pure browser-metaphor and resists adding Stage-Manager peers or content-aware tint that would dilute the direction.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    Counted 8 exactly: tab strip, +, refresh, URL bar, save-state pill,
    fullscreen, dock toggle, more. No hidden affordances at idle.

[x] iframe primary + fullscreen toggle?     Score: 5/5
    Dock collapsed by default → 76px chrome + 32px status rail = iframe
    gets 792 of 900 px. Explicit fullscreen icon + Esc to exit + a hint
    state demonstrated.

[x] One door per feature (no duplicates)?   Score: 4/5
    Settings: dock-only. Save: pill-only. Saved sites: tabs-only.
    Launcher: New Tab only. Files = Blueprint share the same tree
    column by design (parity, not duplication). Half-point off because
    the URL bar accepts navigation AND, on the New-Tab page, search —
    but that's literally how Chrome's omnibox works.

[x] One secondary surface (not many)?       Score: 5/5
    The dock is the only secondary surface. Five tabs swap its content.
    No sidebars, no popovers, no drawers.

[x] Direction expressed strongly?           Score: 5/5
    "Browser tabs across the top" is taken to its logical end: tabs,
    address bar, save-state pill, new-tab page, window controls — the
    whole Chrome primitive set is inherited, not just the tab strip.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same five primitives, same dock contents, same five sub-tabs. Tab
    strip and dock-sheet sub-tabs both scroll horizontally — desktop
    behaviour preserved. Half-point off because mobile dock-sheet drops
    the kebab (folded into dock-sheet handle gesture).

[x] Critique pass on glass/ambient use?     Score: 5/5
    Zero glass. Zero ambient tint. Surfaces are solid by intent — the
    browser metaphor uses real chrome, not frosted overlays. The two
    backdrop-filters in the file (toast, fullscreen hint) earn their
    keep as floating-over-content elements.
```

Total: **33 / 35**. No row ≤ 2. Committing.
