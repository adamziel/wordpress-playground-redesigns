# WordPress Playground — Redesign Brief (v5)

> You are one of 10 designers producing one entry in a 50-design *refinement* of the WordPress Playground UI. This is **not** v1. v1 explored 100 wide-ranging metaphors. v5 takes the 10 designs the user explicitly liked and pushes their underlying principles further.

The full feature inventory and user flows are in [`../DESIGN_BRIEF.md`](../DESIGN_BRIEF.md) (the v1 brief). You must preserve every feature listed there. **No new features. No dropped features.** Read it first.

This document layers extra constraints on top, derived from the user's reaction to v1.

---

## 1. v1 designs the user liked — and why

| # | Design | What worked | What didn't |
|---|--------|------------|-------------|
| 06 | Mobile-first | "Desktop = wider phone" — one design at all widths. Triple-entry-point collapses to one sheet. | — |
| 10 | Figma-canvas | Spatial memory: saved sites have a position you navigate by. | "Too many visible buttons right away." |
| 13 | Epic launcher | Cinematic hero, one decisive LAUNCH verb. | — |
| 14 | Ventura Settings | Clean category sidebar; search-topped; one home per feature. | "Too much happening." |
| 15 | Win11 Settings | Fluent restraint, breadcrumbs, generous whitespace. | "Needs a good way to handle the full-sized Playground when interacting." |
| 29 | Console hybrid | Click → command echo. Beginner GUI + power-user transcript. | Visual hybrid was "okay but not great" — duplication unjustified. |
| 38 | Glassmorphism | Frosted blur lets the WordPress site's color glow through; chrome never opaque. | — |
| 53 | Tabs-only | One nav primitive everywhere; no sidebars, no drawers. | — |
| 55 | iPad multitasking | Pull-tab swaps secondary content. Dock at bottom for sites. | — |
| 64 | DevTools | Slim browser-style top bar; iframe is the document; unsaved as an HTTPS-style pill in the address bar. | — |

## 2. Extracted principles (apply ALL)

1. **iframe primacy.** The WordPress site is the hero. It must be visible at idle AND there must be an explicit *fullscreen iframe* mode that hides chrome with a one-key/one-click toggle (Esc to exit). This fixes the Win11 Settings gap.
2. **Restraint.** At idle, **≤ 8 always-visible affordances**. Count them in your README. Everything else lives behind hover, focus, or explicit reveal.
3. **One door per feature.** Eliminate the triple-entry-point sin (popover + sidebar tab + info notice = three doors to the same room). Pick one canonical home.
4. **One secondary surface, swaps content.** Don't have 5 sidebars or 5 panels. Have *one* secondary pane (pull-tab, drawer, sheet, dock) that swaps between Settings/Files/Blueprint/DB/Logs.
5. **One primary verb.** Save / Apply / Run / Boot are scattered today. Pick one. Make the saved-state pill clear.
6. **Glass or ambient color is welcome ONLY if it earns its keep.** Frosted decoration without a purpose is forbidden. If you use glass, name what it does (ambient color, depth hierarchy, content-aware tint).
7. **Mobile = wider mobile for desktop.** The design must feel the same at 390×844 and 1440×900. No "mobile fallback".
8. **Apply + Reset is destructive.** A small red banner is not enough. Use a confirm sheet, a typed phrase, or an irreversible-but-recoverable model.
9. **Spatial memory is a feature.** If you take Figma's lead, saved playgrounds may have a remembered position. (No new persistent storage shapes beyond x/y.)
10. **Top bar can carry a lot if it stays slim.** ≤ 48px height, ≤ 6 chips. The DevTools direction nailed this; the Console-hybrid one didn't.

## 3. Hard requirements (a critic will check)

- The five Site-Manager tabs (Settings, Files, Blueprint, Database, Logs) all reachable; each has visible content in your demo.
- All six "Start a new Playground" sources visible: Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- Full 43-blueprint browser with search + 10 category filters (≥ 16 cards visible).
- Additional actions menu surfaces *both* "Export to GitHub PR" and "Download .zip".
- "Unsaved Playground" → save state transition is visible.
- Three demonstrated states minimum: working session, booting, launcher/library open.
- Realistic mock data: ≥ 3 saved playgrounds, real blueprint JSON, realistic PHP log lines.
- Both 1440×900 desktop and 390×844 mobile rendered.
- High fidelity — real typography, real spacing, real icons (Lucide / Heroicons / Phosphor / Tabler). No Balsamiq sketches.
- Single self-contained `index.html`. External Google Fonts + icons via CDN are fine.

## 4. Mandatory self-critique pass

Before you commit, score yourself 1-5 honestly against this rubric:

```
[ ] Affordance count at idle ≤ 8?           Score: __/5
[ ] iframe primary + fullscreen toggle?     Score: __/5
[ ] One door per feature (no duplicates)?   Score: __/5
[ ] One secondary surface (not many)?       Score: __/5
[ ] Direction expressed strongly?           Score: __/5
[ ] Mobile feels like wider-mobile desktop? Score: __/5
[ ] Critique pass on glass/ambient use?     Score: __/5
```

If any score is ≤ 2, revise before committing. Save the rubric scores at the bottom of your README.

## 5. Output

Folder `v5/designs/NNN-{slug}/`:
- `index.html` — self-contained, all the requirements above.
- `README.md` — thesis (one paragraph) · what you merged/removed and why (one paragraph) · trade-offs (one paragraph) · self-critique rubric scores.
- `meta.json` — `{"num": N, "title": "Direction title", "summary": "one-sentence pitch under 140 chars"}`.

Then `bash v5/scripts/commit_and_push.sh "Design v5 #NNN — Title" v5/designs/NNN-{slug}`.
