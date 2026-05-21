# 002 — Single drag-sheet, three detents

## Thesis
One bottom sheet, six tabs, three detents. That is the entire chrome. The iframe is the document; the sheet is every other surface Playground has ever had — Settings, Files, Blueprint, Database, Logs, and the Saved-Playgrounds launcher are all just *content swaps* inside one swipeable container. Drag the handle to **peek** (the iframe owns the screen, only a 40px status pill is visible at the bottom), **half** (~45% of the viewport — work side-by-side with the live site above), or **full** (cinematic library / full-screen tool). The same gesture is the same gesture at 390×844 and 1440×900 — desktop is literally a wider phone, no "desktop fallback." This honors the v1 mobile-first principle while ruthlessly enforcing v5's "one secondary surface" rule.

## What was merged, removed, and why
The three settings entry points (top-bar popover, Site-Manager Settings tab, info-notice button) collapse into **one tab inside the sheet**. The five Site-Manager tabs (Settings, Files, Blueprint, Database, Logs) become five of six sheet tabs; the sixth is "Sites," which absorbs the entire Saved Playgrounds launcher (six new-playground sources, your saved sites, and the 43-blueprint gallery — formerly a sub-screen). The top bar shrinks to a single 44px row with five elements: refresh, URL/path/name pill, fullscreen toggle, overflow menu. "Export to GitHub PR," "Download .zip," and "Import .zip" — the additional-actions menu — live in that overflow menu, not as another bar. The destructive "Apply & Reset" is no longer a red banner; it's a confirm sheet that requires typing the site name and shows the diff. The Save state is the URL bar's name pill — color-coded (amber/unsaved → green pulse/saving → green/saved) so it can never be missed. Fullscreen iframe is one click or `F` key, Esc exits — fixing the Win11-Settings gap.

## Trade-offs
The half-detent sheet covers the bottom 45% of the iframe. For dense tools (Files, Database), that's a tighter canvas than a full-pane IDE — long log lines wrap and the file tree column is narrower than a 240px sidebar would give. Power users who want to keep, say, the file tree visible *while* the blueprint JSON is open lose simultaneous visibility — they tab between Files and Blueprint instead of seeing both. (Mitigation: the full detent gives the panel a 856px height on desktop, equal to a maximized IDE.) Spatial memory across saved playgrounds isn't supported here — that's design #45's job. Drag interaction must be discoverable; we lean on the visible handle, the peek-meta chip ("Files · style.css"), and keyboard shortcuts (`↑/↓` change detent) for accessibility. The bet: one strong gesture beats five competing surfaces.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (7 visible at peek: refresh, URL, name-pill, fullscreen, more, handle, peek-meta. Counted in the State-A overlay.)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (iframe is full-bleed under chrome at every detent; F-key + button toggles; Esc exits — explicitly shown in State B with hint.)
[x] One door per feature (no duplicates)?   Score: 5/5  (Settings: one tab. Launcher: one tab. Files: one tab. Triple-entry-point gone.)
[x] One secondary surface (not many)?       Score: 5/5  (Literally one sheet. Six tabs swap content. No sidebars.)
[x] Direction expressed strongly?           Score: 5/5  (Direction *is* the design — three detents are visible in States A/B/C; gesture is the entire IA.)
[x] Mobile feels like wider-mobile desktop? Score: 5/5  (Same sheet, same handle, same six tabs, same detents at 390 and 1440. Tab labels collapse to icons on mobile, that's the only diff.)
[x] Critique pass on glass/ambient use?     Score: 4/5  (Glass earns its keep: it lets the iframe's color glow through at peek, and signals "this is overlay, not document." Only two glass surfaces — top bar + sheet — never decorative. -1 because the sub-toolbar inside the sheet repeats the glass tone slightly; could be more solid.)
```

All rows ≥ 4. Strongest scores: idle-affordance restraint, single-surface enforcement, direction expression, and parity across breakpoints. Weakest: a hair of glass redundancy inside the sheet body, kept because it preserves visual continuity with the handle.
