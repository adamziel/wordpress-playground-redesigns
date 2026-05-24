# Critique — 015-marquee-letterboard — Round 2

## Round 1 items addressed
1. Typed-phrase input switched off Anton — ✓ done. `.typed-row input` now uses `'Public Sans', sans-serif` at 14px with `tnum`. The Anton label stays on the row label only.
2. Corner widget switched off mixed-typeface compound — ✓ done. `.cws` is now pure Anton uppercase, single horizontal compound: `COFFEE SHOP — NOW SHOWING`. The Public Sans `.ms` element is gone.
3. Cut aggregate text-shadow glows — ✓ done. Rail dock and rail mark text-shadows removed (active dock now uses a bulb-yellow dot at left:-3px instead of glow). Only `.slot.current .marquee-title` retains a `0 0 14px rgba(255,208,104,.32)` glow — at .32 alpha and only on the active marquee, this reads as a single lit marquee bulb, not neon.

## New issues introduced
None. The reduced text-shadow profile is exactly the "10pm indie marquee" voice Round 1 asked for.

## Still unaddressed
Nothing.

## Final verdict
SHIP
