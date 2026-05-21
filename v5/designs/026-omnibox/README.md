# v5 / 026 — Omnibox

**Direction:** "A single combobox top-center that handles URLs, blueprint search, command palette, and quick actions. No other top-bar elements."

## Thesis

The chrome of WordPress Playground is one input. A 40px-tall pill, top-center, that speaks eight schemes: bare `/path` is the address bar, `bp:` is the 43-blueprint gallery with all ten filters, `>` is the command palette, `pr:wp/N` and `pr:gb/N` are PR boots, `gh:owner/repo` is a GitHub clone, `mgr:{settings|files|blueprint|db|logs}` is the entire Site Manager, and `db:` / `log:` are shortcuts past `mgr:` into the most-used child surfaces. The omnibox carries exactly three idle affordances — a saved-state pill on the left, the input itself, and a fullscreen toggle on the right — and a single dropdown that swaps content based on which scheme is active. Everything else (toolbars, sidebars, drawers, menus, info notices) is gone. The iframe is the only other thing on screen.

## What I merged / removed / why

The triple-entry-point sin dies the hardest. Three settings doors collapse into `mgr:settings`, rendered as a sentence editor ("This playground runs **WordPress 6.7** on **PHP 8.3**…") so settings *are* their own summary; the inline "Save site locally" info notice is folded into the state pill, which carries an amber dot + inline Save button when unsaved and a green dot when saved. The five Site-Manager tabs become sub-modes of one scheme — same surface, same legend strip across the top, body swaps. WP Admin and Homepage move into `>` commands (with `G A` / `G H` shortcuts), eliminating the duplicate-with-URL-bar door that v1 #06 caught. The Saved Playgrounds drawer / launcher / blueprint browser are not separate surfaces; they're three views in the same dropdown that the empty omnibox already shows. Export to GitHub PR and Download .zip both surface in `>exp` (commands prefixed "exp" — and "Apply &amp; reset" sits in the danger row). Each of the 6 start sources has a deep prefix (`>new`, `pr:`, `pr:gb`, `gh:`, paste-URL, `>import`) and is also reachable from a single "Quick start" section in the empty-focus dropdown — one canonical home, one shortcut to it.

## Trade-offs

The whole IA is keyboard-first, which is a risk for visitors who don't know to focus the box. I mitigate this two ways: (1) `⌘K` is permanently visible inside the idle omnibox as a hint, and (2) on focus, the dropdown opens with a *scheme legend strip* — eight clickable chips that prefill the prefix — so mouse-only users learn the schemes without typing. The omnibox uses glass, but it earns its keep: it's the only surface tinted by the iframe's dominant color (demonstrated in state 13 with a dark gaming theme below), and the legend strip is solid so it always reads. The biggest cost is that bottom-of-screen affordances (notifications, dock) are now homeless — toasts pop above the omnibox dropdown, and a saved-sites "dock" doesn't exist; saved sites live as the top section of the omnibox's empty-focus dropdown. The other trade is that the omnibox dropdown can grow tall (660px) when in `mgr:` mode, but never wider than the omnibox itself — it cannot become a panel, and it cannot dock — which keeps the "one secondary surface" rule absolute.

## States rendered

1. **Idle** — 3 affordances over the running iframe (1440×900)
2. **Focused + empty** — scheme legend strip · recent sites · quick-start sources · common actions
3. **bp:art** — blueprint gallery with 10 filter chips + 18 of 43 cards (live-filtered)
4. **&gt;exp** — command mode with Export / Apply / Save / Rename / Delete
5. **mgr:files** — File browser + editor (real `functions.php`)
6. **mgr:blueprint** — Real Coffee Shop blueprint JSON + Run/Copy/Download
7. **mgr:db** — 12 SQLite tables + wp_posts rows + early-access notice
8. **mgr:logs** — Per-request grouping, level filter, real WC fatal stack
9. **mgr:settings → confirm sheet** — Sentence editor + typed-phrase Apply &amp; Reset with diff + auto-zip safety
10. **Booting** — blue pulsing state dot, omnibox still the only chrome
11. **Unsaved → Saved → Booting** — three pill states stacked
12. **Fullscreen** — single corner pill with Esc hint; omnibox dissolved
13. **Content-aware tint** — dark gaming theme; omnibox glass adapts
14. **pr: + gh:** — both PR and GitHub source modes with realistic data
15. **Mobile** — same omnibox, four mobile states (idle · bp: · &gt;cmd · mgr:settings)
16. **Affordance ledger** — explicit count + scheme map

## Self-critique scores

```
[x] Affordance count at idle ≤ 8?           Score: 5/5   (3 idle affordances: state pill, input, fullscreen button; counted on the design itself)
[x] iframe primary + fullscreen toggle?     Score: 5/5   (iframe is the only other element at idle; fullscreen button visible on omnibox; F to enter, Esc to exit; corner pill ensures gesture is reversible per L011/L013)
[x] One door per feature (no duplicates)?   Score: 4/5   (each Site-Manager tab has exactly one prefix; settings is mgr:settings only; save lives only in the state pill; the soft overlap is that `db:` and `log:` shortcut past `mgr:` — but they target the same surface, not a duplicate, so it's a fast-path not a second door)
[x] One secondary surface (not many)?       Score: 5/5   (one omnibox dropdown; body swaps for every mode; no sidebar, no docked panel, no second drawer ever appears)
[x] Direction expressed strongly?           Score: 5/5   (the direction is the design; nothing else exists in the top bar; every feature in §2 was reshaped into a scheme)
[x] Mobile feels like wider-mobile desktop? Score: 4/5   (same omnibox component, same scheme legend, same dropdown; the only adaptation is the dropdown becomes a vertical sheet anchored to the omnibox, and filter chips horizontal-scroll — but the IA is identical)
[x] Critique pass on glass/ambient use?     Score: 4/5   (one glass surface — the omnibox + its dropdown; legend strip and dropdown body are solid for legibility; tint is content-aware, demonstrated; legend chips are not glass)
```

No row scored ≤ 2; no revision needed.

## Lessons applied from earlier reviews

- **L009 (32px micro-toolbar)**: Always show the scheme legend on first focus — solves "I didn't know about the schemes" discoverability without spending toolbar pixels. Mine is the entire pop-legend strip.
- **L013 (one floating capsule)**: Fullscreen toggle is *visibly* on the omnibox itself, not just keyboard. Costs one affordance slot but the brief demands it.
- **L014 (single word in corner)**: The state pill's click target and the omnibox's `⌘K` hint point to the same place (focus the omnibox) — non-overlapping by design. Save action lives only in the state pill when unsaved, not duplicated in `>` commands as a UI surface.
- **L005 (translucent bottom tab bar)**: I do not nest a second tab strip inside the dropdown. `mgr:` sub-modes are flat scheme chips; selecting one rewrites the input prefix and swaps the body — no nested tabs.
- **L003 (Control-Center tiles)**: Save is the state pill, not the state pill *and* a `>save` row competing for primacy. `>save` exists as a keyboard target but the canonical surface is the pill.
