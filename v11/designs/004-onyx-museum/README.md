# 004 — Onyx Museum

## Thesis
A museum gallery at midnight. Walls are matte onyx, the floor recedes into shadow, and a single warm picture-light is trained on the only object that matters tonight: your live WordPress site. Every other surface is unlit. The rail is not a toolbar — it is the row of brass wall labels you walk past on your way to the lit alcove.

## What is locked vs. explored
**Locked (per v7 #010):** one iframe-primary surface; one ~64 px quiet left rail with identity mark + exactly five distinct dock buttons (Sites · Site Manager · Blueprint · Database · Logs); one swap-content pane to the right of the rail (no side-by-side panels); slim top capsule with refresh, address bar, save-state pill, fullscreen toggle and a More menu containing Export to GitHub PR and Download .zip; corner site widget at the iframe's bottom-left; modal Library overlay for blueprints with 10 categories and search; mobile mirror at 390 × 844 where the rail rotates to a bottom tab bar.

**Explored:** the museum-curatorial idiom. Rail buttons are Roman numerals **I, II, III, IV, V** set in Spectral at 22 px, ink-secondary by default. The active dock simply lifts to bone-cream and gains a 2 px bone vertical bar on its left edge — the same gesture the gallery uses when a single track-light comes on above one painting. Section heads in panes are typographic eyebrows — no card-in-card stacking. The corner widget is a wall-label rectangle, bone-cream ink on near-black, with one state line and no frame. Each tool is "a room" — Settings is the survey; Files is the storeroom; Blueprint is the catalogue; Database is the registrar's ledger; Logs is the conservator's log.

## Focus-test answer
**Why is the iframe the loudest object on the screen?** Because the iframe is the only surface this gallery has chosen to light. Everything else — rail, capsule, corner widget, even the active wall-label — sits at the brightness of an unlit room. The single warm bone-cream highlight on dock IV (active) only points your eye back at the iframe; the picture light belongs to the painting.

## Trade-offs
Roman numerals demand the visitor learn what each numeral does. The label appears on hover and is announced by the pane title the moment you open it — so the cost is paid once, on the first visit, and then the rail becomes the silent index of a museum you have walked through before. The risk is the bone-cream accent reading as low-contrast for color-deficient users; we mitigate by pairing the accent with a 2 px positional bar so active state is shape-encoded as well as colour-encoded.
