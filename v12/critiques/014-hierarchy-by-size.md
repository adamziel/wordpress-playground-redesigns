# Critique — 014-hierarchy-by-size — Round 1

## Verdict
Ship as-is. The size-is-data idea is one of the most graphically pure answers to §11 — the saved-sites pane is a typographic mountain, not a list of cards.

## Distinct-list-pattern test (the v12 round's primary test)
- Saved-sites: each `.h-item` is just a DM Serif Display title at a font-size proportional to recency: 56px → 36px → 24px → 18px (lines 110–113). No icon, no meta-line, no card.
- Matches `listPattern` exactly — the size IS the data.
- Forbidden icon-left + 2-row-text pattern is absent.
- Start-routes use the same dialect: r-vanilla 32px, r-wppr 24px, r-gbpr 22px italic, ..., r-zip 15px (lines 116–121). The size encodes canonicality, mirroring the saved-sites recency encoding. Excellent dialect carry-over.
- Library overlay is "a typographic mountain where blueprint titles vary in size by popularity" (per direction) — consistent.

## Hard violations of v11/v12 taste constraints
- No purple. Bone `#E2DDC8`.
- Mono used: `ui-monospace` in `.editor-pane`, `.code-block`, `.blueprint-json` — all code surfaces.
- DM Serif Display + DM Sans. Both allowed.
- Rail: 5 DM Serif Display capitals (S, M, B, D, L) at varied sizes 12/16/22/28/16px (lines 85–88). Distinct silhouettes by SIZE — which is exactly the design's idiom. Strong.
- Borders: items have no borders, just typographic margins. Good.
- No secondary text under rail buttons.

## Annotation overlays / explainer chrome
None floating on the device.

## Rail button distinctness (Forest-Botanical test)
Five letters at five different sizes (12, 16, 22, 28, 16 — note: positions 2 and 5 are same size, mitigated by position 5 being italic). The variation is the loudest of any v12 design's rail. PASSES strongly.

## Iframe primacy
Yes — pane is 390px. The 56px "Coffee Shop" headline at the top of the pane is visually loud, but the iframe still wins by total surface area. Worth monitoring at Round 2 whether the 56px title actually competes with iframe headlines.

## Typography
DM Serif Display + DM Sans, both Google-Fonts-linked. DM Serif Display does all titles, DM Sans handles body/inputs. Clean and consistent.

## Three concrete suggested fixes (Round 2)
1. The 56px "Coffee Shop" newest title can pull visual focus from the iframe at narrow viewports — the iframe headline ("Single-origin pour-overs") is the loudest object only if the iframe's headline weight beats the pane. Verify at 1440×900 that the iframe wins, and if not, cap the active size at 44px. Line 110.
2. The corner widget `.cws` (line 128) uses `DM Serif Display 16px` + `.ms` in `DM Sans 11px` — two text elements horizontally. The `ms` italic metadata is a second text item that reads as a secondary line. Drop the `ms` and trust the title.
3. `.h-item.current::before` (line 107) is a 6px bone dot at left:-14px. With a 56px-tall title this dot is tiny and easily lost; the active state is hard to read. Either bump dot to 10px OR draw a small bone underline beneath the active title (matching the design's reductive aesthetic).
