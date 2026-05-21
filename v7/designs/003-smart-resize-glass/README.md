# 003 — Smart-resize · Glass

## 1. Thesis

The iframe is the only solid surface in WordPress Playground. Everything else — top
bar, secondary pane, gauge, dialogs — is frosted glass that floats *on* the running
WordPress site and is *tinted from it*. The layout itself is the interaction: two
panes are always present, and whichever pane the user touches gains weight while
the other yields (smart-resize). The seam is not a drag handle — it is a etched
gauge in the glass that shows the current ratio (35/65, 50/50, 60/40, 75/25, F)
and a tiny arrow showing which way focus just shifted. Rest = 50/50. Click the
iframe = 75/25. Click the pane = 35/65. Press **F** = 100/0 fullscreen with all
chrome hidden. The glass picks up the iframe's color so chrome *belongs* to the
site instead of being pasted on top of it — a Coffee Shop tints the pane warm
amber, the Art Gallery cools it violet, Gaming News bleeds magenta.

## 2. Primitives composed

This design is a deliberate two-primitive composition (with one supporting
primitive used at minimum strength for the slim top bar).

- **SR — Smart resize (v5 #023).** The entire IA. Two panes always visible; no
  drag handle; focus = grow; snaps to 35/65, 50/50, 60/40, 75/25; **F**
  fullscreen; etched ratio gauge sitting *across* the seam (frame A, B, C).
  Where SR appears: the body layout, the seam gauge, the directional shift
  arrow, the per-state ratio badge in the row label.
- **GLS — Glassmorphism (v1 #38).** The visual style. The secondary pane,
  the top bar, the launcher tiles inside the pane, the more-menu, the typed-
  phrase confirm modal — all frosted glass with quantified `backdrop-filter`
  values. The iframe is the only solid surface. Each state samples a different
  ambient color from the iframe (warm-amber for Coffee Shop, violet for Art
  Gallery, magenta for Gaming, ink for boot), so chrome is *tinted from
  content*. Gauge is etched into the glass at the seam (a glass-on-glass
  bevel, not a separate widget). Idle affordances use glass capsule treatment.
- **DEV — DevTools slim top bar (v1 #64).** Used at minimum: a single ≤44px
  glass bar across the top. Single row only — no two-row chrome. Save state
  lives in the bar as a *status* pill; **Save** is a separate dark button that
  only appears when the playground is actually unsaved. The bar carries
  refresh, URL, save-status, save-action (conditional), fullscreen, more.

The conscious *non*-uses are also part of the composition:

- **3LD (three-layer depth)** is explicitly avoided as an interactive control
  (banned in v7). Blur is used here only as the *visual texture* of glass
  surfaces — never as an interaction surface, never as a "z-depth stack."
- **CWS (corner-widget Sites)** is intentionally not invoked. With smart-resize
  the secondary pane already *is* the live-status canonical door — adding a
  corner widget would multiply doors. The pane head's status row is the door.
- **TAB-on-the-seam, QR rail, Ventura sidebar** — slot 7, slot 2, etc. cover
  those. Here the seam carries only the gauge, not tabs.

## 3. What I remixed / removed and why

The three settings doors (popover · sidebar tab · info-notice) collapse into the
**Settings tab** inside the pane. The left Site-Manager sidebar and the right
Saved-Playgrounds drawer both collapse into the *same* pane via a 6-tab
segmented control (Sites · Settings · Files · Blueprint · Database · Logs) —
**one** secondary surface, swappable content. WP Admin and Homepage are no
longer global toolbar icons; they are right-anchored chips inside the pane
head, shown only on Settings/Files/Blueprint where they are contextual.
The save-state pill is *status only* (Saved / Saving / Unsaved); a separate
dark **Save** button appears only when unsaved — never both forms of "save"
on the same control. Apply&Reset uses a typed-phrase confirm
(`reset coffee-shop`) on a glass sheet — the small red banner is gone.
Top bar holds 5 chips total at 44 px. "Additional actions" (Export to GitHub
PR · Download .zip) lives in **one** kebab menu in the top bar — not also
in the pane head. The terminal-style command echo from v1 #29 (dual channel)
is rejected — the visual UI is the only channel.

## 4. Trade-offs

Glass over a live iframe is a legibility risk: when the iframe is loading a
white WordPress page, frosted-white-on-white glass can read flat. I mitigate
three ways: (1) every glass surface has a 1 px inset highlight + a 1 px outer
hairline border in `rgba(0,0,0,0.08)` so it always has an edge; (2) text in
the pane uses ≥ 13 px and ≥ 600 weight at the heading level, with `text-
shadow: 0 1px 0 rgba(255,255,255,.6)` on dark-tinted ambients; (3) the
ambient tint snaps to *six* iframe-character presets (warm-amber, violet,
magenta, mint, ink, neutral) and never to arbitrary sampled values, so we
guarantee a contrast band. The second risk is the gesture's
discoverability — new users may not know "click → grow." Same mitigations
as v5 #023: visible etched gauge, directional arrow on focus shift, and
keyboard hint in the seam (`F` · `Esc` · `⌘1–6`). Third risk: the iframe
never sits at *true* 100% in the idle state — even at 75/25 the pane is on
screen. This is intentional (the pane is how you know you're in Playground,
not just a browser); the explicit **F**/click-fullscreen toggle gives the
escape hatch and is demonstrated in State H. Fourth: on mobile the pane
becomes a bottom sheet at the same three detents (peek/half/full), so the
same SR primitive scales — but the glass tint at 390 px reads weaker than
at 1440 because the iframe's ambient color sample is forced to a narrow
strip behind the top bar.

## 5. Demonstrated states

- **State A** — Rest 50/50 (Coffee Shop ambient · launcher home in pane)
- **State B** — Iframe focus 75/25 (Art Gallery ambient · pane in shadow)
- **State C** — Pane focus 35/65 (Coffee Shop · full blueprint gallery with 18 cards · search · 10 category chips)
- **State D** — Settings tab with typed-phrase Apply&Reset (`reset coffee-shop`)
- **State E** — Files tab with `functions.php` open in editor + WP Admin chip
- **State F** — Logs tab with realistic PHP error lines + level filter
- **State G** — Booting (60/40 · Gaming News ambient · "Cancel boot" visible)
- **State H** — Fullscreen iframe 100/0 (chrome hidden · ⌘/F exit hint)
- **State I** — Mobile 390×844 (bottom-sheet smart-resize · same gauge · same 6 tabs)

## 6. Idle affordance count: 7

1. **WP-mark · refresh** glyph (combined: click the mark to refresh)
2. **URL bar** (lock + path)
3. **Name pill** (status only — Saved / Saving / Unsaved)
4. **Save action** (appears only when unsaved; otherwise hidden — so this
   is 0 at most-common idle, 1 when there is unsaved work)
5. **Fullscreen** icon (F key duplicates)
6. **More** kebab (Export to GitHub PR · Download .zip · Rename · Delete · Docs)
7. **Pane segmented control** (Sites · Settings · Files · Blueprint · DB · Logs — one cluster)
8. *(latent)* **Seam gauge** — visible but passive; counts as 0 because it
   has no click target. Pressing on it gives a tooltip only.

The pane head also surfaces **WP Admin** and **Homepage** chips, but only
contextually on Settings/Files/Blueprint — they are pane-internal, not
top-bar chrome, and are not visible in launcher home.

## 7. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5   (7 at idle; 8 when unsaved)
[x] iframe primacy + fullscreen toggle?        Score: 5/5   (iframe is the only solid surface; F key, click-icon, state H demonstrates)
[x] One door per feature?                      Score: 5/5   (settings collapsed; Save is the pill+button on one bar; WP Admin/Home pane-only; Export.zip and GitHub PR only in the kebab)
[x] One secondary surface?                     Score: 5/5   (one pane, six tabs, never two)
[x] Direction strongly expressed?              Score: 5/5   (every chrome surface is glass with quantified tint; iframe is the only solid; etched gauge at the seam is the direction made visible)
[x] Mobile = wider-mobile desktop?             Score: 4/5   (same SR; same gauge; same 6 tabs; one mobile compromise — pane becomes bottom-sheet so SR seam rotates 90°, but the primitive is preserved)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5   (SR + GLS + DEV all named and located in §2; SR carries the IA, GLS the visual, DEV the slim bar)
[x] No banned patterns (§1 DROP)?              Score: 5/5   (single-row top bar; depth never as interaction; no terminal echo of visual UI)
```

All rows ≥ 4. No revision needed before commit.
