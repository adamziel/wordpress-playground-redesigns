# 014 — Right Rail · Brass

## Thesis

A structural mirror of v7 #010. The quiet rail moves to the **right** edge of the workspace, and the secondary pane swings open to the **left** of that rail. The visual language is borrowed from a fountain-pen catalogue: oxidized brass (#B07840), bottle green (#0E3A2F), ivory (#F5EFE2), warm black ink (#1A1612). Cormorant Garamond sits on the section heads, Inter does the body, and JetBrains Mono carries paths and logs. Hairlines are 1px ivory-on-bottle, every chrome surface holds a faint inner shadow, and the active rail item earns a brass-gradient inner edge. The result feels like a slightly luxurious instrument tray — and because the chrome recedes into bottle green and ivory, the live WordPress iframe is the only sharp, fully-lit object on screen.

## What is locked

The v7 #010 interaction model is preserved beat for beat: one quiet rail (here mirrored to the right), one swap-content pane, one slim top capsule at the top-left, a corner site widget pinned bottom-left, a z3 modal Library overlay, and a mobile mirror where the rail rotates to a bottom tab bar and the pane becomes a bottom sheet. The save-pill is the single source of truth for save state — `Unsaved → Saving → Saved → Stale` — and never duplicates as a banner. The slim capsule carries refresh, address, name, save-pill, More, and Fullscreen on one 38px row. The Library is z3-deep with all 10 categories and 16+ blueprint cards.

## What this skin explores

**Structural shift:** the rail is on the right. Address bar and save-pill stay top-left so the reading order is *address → playground name → save-pill → rail*. The user's eye lands on the rail naturally after parsing the address. The pane swings open from the left edge of the rail toward the centre of the iframe, anchored to the rail.

**Pane arrangement:** 2 dock icons (Sites, Manage), closest to v7 #010. The Sites pane has 3 segments (Yours / New / Library); the Manage pane has 5 tabs (Settings / Files / Blueprint / Database / Logs).

## Trade-offs

- Right-mounted rails feel unusual on desktop (most chrome lives on the left); the brass edge and the capsule on the left help the user re-locate the rail in the first second.
- Bottle green at 100% saturation would compete with the iframe — we hold it at 92% lightness in the rail backdrop and reserve full bottle for divider hairlines.
- The corner widget stays on the left so it never collides with the right rail's pane swing.
- Serif headlines feel slow but elegant; we keep all dense lists (logs, files, blueprint JSON) in Inter / JetBrains Mono so scan-speed never suffers.
- Brass-gradient on the active rail item is the only place colour competes with the iframe; everywhere else the chrome stays ivory + bottle hairline.
