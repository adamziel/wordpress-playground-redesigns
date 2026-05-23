# 002 — Linear Onyx

## Thesis

Linear Onyx recasts the v7 #010 Quiet Rail model into the matte, hairline-precise aesthetic of runtime-ops software. The chrome is built almost entirely from a single matte near-black (#0A0A0B) backdrop, a six-step gray ramp, and a single indigo to fuchsia gradient accent (#7C3AED through #EC4899). The accent is used like a punctuation mark — never to decorate a surface, only to mark the active rail dock, the top edge of the active pane, and the save-state pill in its "Saving" moment. Everything else is a 1px hairline at rgba(255,255,255,0.06) or a 0.5px subpixel row separator at rgba(255,255,255,0.04). The iframe stays the loudest object; the chrome around it recedes into a calm, expensive-looking quiet.

## What's locked vs reshaped

Locked from v7 #010: left rail at 64px, single swap-content pane to the right of the rail, slim 36–40px top capsule floating over the iframe, frosted corner site widget in the iframe's bottom-left, modal Library overlay at z3, and a bottom-tab-bar mobile mirror at 390×844. All eleven user flows reach the same destinations through the same gestures. Reshaped: the rail collapses from five docks down to two (Sites, Manage) with the Sites pane carrying a three-segment control (Yours / New / Library) and the Manage pane carrying a five-tab control (Settings / Files / Blueprint / Database / Logs) — the closest possible reading of v7 #010 with a calmer rail. Apply Settings & Reset uses a typed-phrase confirmation plus a structured diff plus an automatic snapshot.

## Trade-offs

The single-accent discipline means there is no color-coded affordance for "danger" outside of the typed-phrase modal — the design relies entirely on type weight, position, and the explicit modal to communicate destructive intent. Two rail destinations is the absolute floor for an IA primitive; users who expect a one-click jump to Logs will need two clicks (Manage → Logs) instead of one. The matte near-black palette is unapologetically dark — there is no light-mode variant in this prototype. The gradient accent reads as a brand mark; teams that need to swap the brand will have to swap the gradient stops in one place.
