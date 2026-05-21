# v5 / 015 — Cmd+K is the UI

**Direction:** "No visible chrome at all except a 'Press ⌘K' hint. Every action lives in the palette."

## Thesis

The WordPress site is the product. Everything Playground chrome ever did — refresh, address bar, save, sites switcher, blueprint browser, file editor, DB browser, log viewer, settings, import, export, PR boot, blueprint-URL boot — is one keystroke (`⌘ K`) or one click away in a single command palette. At idle, three small pills float over the iframe: a saved-state cue, a fullscreen toggle, and the `⌘ K` hint. That's the whole UI. The palette has *modes* (slash commands: `/blueprints`, `/files`, `/blueprint`, `/db`, `/logs`, `/settings`, `/new`, `/sites`) — but the **surface** is one container with one input bar. Body swaps, surface doesn't multiply. Power users skip the palette entirely with bare shortcuts (`G A` = WP Admin, `⌘ S` = save, `F` = fullscreen); new users *learn* the shortcuts by reading them next to each row.

## What I merged / removed / why

- **Three settings doors → one mode.** v1's popover + Site-Manager tab + info-notice all collapse into `/settings`, rendered as a sentence editor ("This playground runs **WordPress 6.7** on **PHP 8.3**…") so the canonical setting *is* a glance and a click. The "save site locally" notice is gone; the saved-state pill carries that message permanently.
- **Site Manager sidebar → five palette modes.** Settings, Files, Blueprint, Database, Logs are each their own `/mode` inside the palette body. WP Admin / Homepage become first-class palette commands with `G A` / `G H` shortcuts (extending the Site-Manager-header buttons rather than letting them rot in an Additional-actions menu).
- **Saved Playgrounds drawer → /sites and /new.** /new shows the 6 start sources as a tile grid (each with its inline input) + Featured Blueprints + Your Playgrounds. /blueprints is the full 43-card gallery with all 10 category filters. Export / Import / Download are top-level palette commands.
- **Apply & Reset escalation.** The brief warns a small red banner is not enough. Mine uses a confirm sheet inside the palette with a diff (`+ wp 6.7 / - 6.6`), a typed-phrase verification (must type the playground name), and an auto-downloaded .zip safety net before the wipe.
- **Fullscreen gap (v1 #15's flaw) closed.** Press `F`: even the three idle pills disappear. The iframe is the only visible thing. `Esc` returns.

## Trade-offs

- **Discoverability tax.** A new user who doesn't read the hint pill could in theory miss the entire UI. The mitigation is that the pill is the loudest thing on screen, is mid-bottom (eye-line for chrome), and the palette opens on any keystroke — even typing `r` in the iframe area focuses the palette. But: this design is honest that it pushes restraint past comfort. The user explicitly asked for ≤8 idle affordances; I delivered 3 and named the cost.
- **Slash-modes are state.** Going from /blueprints back to root costs a backspace (or `⌫`). That's a deliberate echo of CLIs — each mode is a sub-shell, not a tab. Tabs would re-introduce visible navigation chrome.
- **No always-visible refresh button.** Refresh is `⌘ R` or palette row 1. For a tool whose users *love* keyboard shortcuts (devs, theme authors), this is fine; for first-time visitors it's the biggest leap of faith. The state pill clicking focuses palette to save row but does *not* duplicate save — it's a single cue pointing at one canonical action.
- **Mobile keyboard burden.** Phones don't have ⌘ K. The hint pill is tappable (it's literally a button), and the palette docks to the bottom 78% on phones. Slash-commands still work because the input field is the same — the slash key is on every soft keyboard.

## States rendered

1. Idle (3 affordances over the iframe)
2. Palette / root (15 commands with shortcut hints)
3. Palette / blueprints (18 of 43 visible, 10 filter chips with counts)
4. Palette / settings (sentence editor + Apply&Reset danger row)
5. Palette / confirm (typed-phrase Apply&Reset with diff)
6. Palette / files (tree + functions.php in editor)
7. Palette / blueprint (real Coffee Shop blueprint JSON with toolbar)
8. Palette / db (12 SQLite tables + wp_posts rows + early-access notice)
9. Palette / logs (grouped by request, ERR/WARN/INFO/DBG filter, real WC fatal stack)
10. Palette / new (6 sources, 5 featured blueprints, 3 saved + add-new card)
11. Booting (no chrome except amber state pill + boot log)
12. Fullscreen (zero chrome)
13. Mobile idle · mobile palette root · mobile /blueprints

## Self-critique scores

```
[x] Affordance count at idle ≤ 8?           Score: 5/5   (3 idle affordances; explicitly counted)
[x] iframe primary + fullscreen toggle?     Score: 5/5   (dedicated state, F/Esc shortcuts, nothing reflows)
[x] One door per feature (no duplicates)?   Score: 4/5   (state pill is a status cue, not a save button; settings/files/blueprint/db/logs each have exactly one home — but /new and /blueprints both surface blueprints, which is a soft overlap)
[x] One secondary surface (not many)?       Score: 5/5   (one palette container; only the body swaps)
[x] Direction expressed strongly?           Score: 5/5   (the direction IS the design — no chrome, palette is everything)
[x] Mobile feels like wider-mobile desktop? Score: 4/5   (same input, same modes, same shortcuts; chip strip horizontal-scrolls instead of wrapping)
[x] Critique pass on glass/ambient use?     Score: 4/5   (3 glass surfaces — pills blur to read against unknown WP-site colors; palette body is solid dark, not glass)
```

No row scored ≤ 2; no revision needed.
