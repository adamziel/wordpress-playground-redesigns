# 032 — Top bar with embedded Apple-style traffic lights

## Thesis
The macOS traffic lights are the most universally-recognized control cluster in computing — and they cost only 14 px. This design repurposes them: **red = Settings, yellow = Refresh, green = Save (also: save-state)**. Familiar shape, unfamiliar use. The whole UI then leans into the macOS document-window metaphor: a 34 px title bar carries the lights and the window title, a 40 px address row carries URL + name pill + Sites menu, and a single bottom dock (collapsed at idle) swaps between Settings/Files/Blueprint/Database/Logs — the macOS Inspector pattern. Spotlight (⌘K) is the launcher. The iframe is the window's "document" — the hero, primary, fullscreen-able with one key. The traffic lights aren't merely decoration; each dot *carries state*: red pulses red-deep when settings have unapplied changes, green flips hollow-pulsing when unsaved, yellow gets a spinning halo when the iframe is refreshing or booting.

## What I merged / removed and why
The most violent simplifications: **(1)** The quick-settings popover, the Site Manager Settings tab, and the inline Save info-notice are all gone — they collapsed into *two* primitives: the red light (door) and the dock's Settings tab (content). One door per feature. **(2)** The Save button is gone; the green light is the save affordance and the save-state indicator in a single 14 px circle. **(3)** The Site Manager "open/close" button + 5 separate panel surfaces collapsed into one bottom dock with a segmented tab strip. **(4)** Three "find a site" entry points (saved-dropdown, blueprint search, import-zip) merged into one Spotlight overlay with 4 sub-tabs (Saved / Start new / Blueprints / Commands) — the same surface is summoned by the Sites button *and* by ⌘K. **(5)** The macOS "title-bar centered text" pattern gives free passive surfacing of WP version, PHP version, and playground name without spending an additional affordance — it's pure label, not a button. **(6)** Apply & Reset now requires typing the playground name in a confirm sheet (v5 principle 8 — a red banner is not enough). **(7)** Export-to-GitHub-PR and Download-zip live on the dock's right rail as visible icon buttons only when the dock is open — contextual to where the action makes sense, not hidden in a "more" kebab.

## Trade-offs
The biggest risk is the lights' unfamiliar meaning: macOS users *expect* red = close. Mitigation: hover any light → an icon glyph fades in inside the circle (sliders for red, rotate for yellow, check for green); a one-time pulse on first visit + a tooltip name. Power users learn it in 5 seconds; new users get the glyph-on-hover. The dot-as-state pattern actually *strengthens* the metaphor — these dots are alive, they signal, they're not window controls. Second trade-off: by hiding the dock fully at idle (not even a peek strip), discoverability of Files/DB/Logs depends on the panel-bottom icon being recognizable. Mitigated by giving the red-dot tooltip a deep-link into Settings, which surfaces the dock once and teaches the rest. Mobile is the same primitives at a narrower window: title bar shrinks the WP version sub-label, address row drops the "Sites" word but keeps the count badge, dock tabs become icon-only — no "mobile fallback."

## Lessons applied from earlier v5 reviews
- **Review 009** ("decide what the kebab is for"): there's no kebab. Export/Download live visibly on the dock when relevant; rare commands live in Spotlight's "Commands" tab. No junk drawer.
- **Review 013** ("expose the fullscreen toggle on the chrome"): a dedicated `maximize-2` icon sits on the title bar, plus an `F` shortcut. The fullscreen state retains a 40%-opacity persistent corner with the three lights — so the metaphor still teaches in fullscreen, satisfying both "iframe primary" and "the gesture must be discoverable from idle."
- **Review 014** ("hover-output and click-output must point at non-overlapping rooms"): the red light *clicks* into Settings (dock); it never duplicates another door. Same for green (save) and yellow (refresh).
- **Review 017** ("cite reviews by number and label the implementing element"): each lesson above maps to a concrete element — the confirm-sheet (`#open-confirm`), the dock-right action group, the `.fs-corner` persistent fullscreen lights, the `.fs-hint` Esc/F hint.
- **Review 011** ("an auto-hide UI needs a one-shot teaching state"): the fullscreen hint pill fades after 6 s; the persistent corner-lights at 40% opacity are the *always-visible* teaching layer for the auto-hide.

## Counted affordances at idle (Scene 1)
1. Red traffic light (Settings)
2. Yellow traffic light (Refresh)
3. Green traffic light (Save / save-state)
4. URL address bar
5. Name pill ("Coffee Shop" saved indicator)
6. Sites menu trigger (with count badge)
7. Fullscreen icon (`maximize-2`)
8. Site Manager dock toggle (`panel-bottom`)

**Exactly 8.** The dock is fully hidden at idle (no peek strip); the WP version / PHP version in the title bar is passive label text, not interactive. The toast region surfaces ephemeral notifications and is not chrome.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    Exactly 8 counted above. Dock hidden at idle. Title-bar text
    is passive label, not a button. Toast is ephemeral notification.

[x] iframe primary + fullscreen toggle?     Score: 5/5
    Idle iframe = ~840 of 900 px (93%). Dedicated fullscreen icon
    in title bar + F shortcut + Esc to exit. Scene 8 demonstrates
    fullscreen with persistent corner-lights (40% opacity) so the
    metaphor still teaches. Hint pill fades after 6 s.

[x] One door per feature (no duplicates)?   Score: 5/5
    Settings: red-light only (no popover, no sidebar duplicate).
    Save: green-light only (no inline notice button, no top-bar
    Save). Saved sites: Spotlight only. Launcher: Spotlight only.
    Site Manager: dock toggle only. Each verb has exactly one door.

[x] One secondary surface (not many)?       Score: 5/5
    The bottom dock is the *one* secondary surface. Settings, Files,
    Blueprint, Database, Logs are all the same dock with content
    swapped by a 5-tab segmented control. No sidebars, no second
    panels. Spotlight is the launcher (a separate, modal surface,
    but it's the launcher, not a secondary content surface).

[x] Direction expressed strongly?           Score: 5/5
    Traffic lights aren't a flourish — they are the design's
    central IA primitive. Each light carries state (red.dirty,
    green.unsaved, yellow.spinning). The whole chrome is the macOS
    document-window metaphor: title bar, title text, address row,
    inspector dock. Even the confirm sheet uses macOS conventions.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same 8 primitives at 390 × 844. Title bar shrinks WP sub-label;
    address row keeps URL + name + Sites; dock tabs become icon-only;
    Spotlight becomes full-height with horizontally-scrollable
    sub-tabs. Same IA, narrower window — no "mobile fallback."
    Half-point off because the dock-tab labels drop on mobile,
    relying on icons to teach the 5 surfaces.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Frosted blur appears in exactly 3 places: Spotlight overlay
    (the launcher needs to feel summoned over the iframe — depth),
    fullscreen hint pill (floating over content), fullscreen
    corner lights (40% opacity, layered above iframe). Each glass
    surface has a named purpose: depth, float, persistence-while-
    unobtrusive. No decorative glass on top bar or dock — those
    are solid macOS chrome. Half-point off because the toast is
    also glass and could be solid without losing meaning.
```

**Total: 33 / 35.** No row ≤ 2. Committing.
