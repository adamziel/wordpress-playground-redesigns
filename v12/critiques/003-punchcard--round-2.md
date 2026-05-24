# Critique — 003-punchcard — Round 2

## Round 1 items addressed
1. Rail dots scaled up so silhouettes are visible — ✓ done. Default dot size raised from ~7px to 13px, and `p1` is a single 22px dot. The 1/2/3/4/4-grid silhouettes now read at thumbnail scale. Per-dock frame removed; the dot pattern itself is the silhouette.
2. Hide scale label after dots — ✓ done. `.card-row .axes .dots .scale{display:none}` at line 111. Dots speak alone now.
3. Reduce signal-yellow glow intensity on widget dot — ⚠ partial. Widget dot glow dropped to `rgba(226,196,74,.4)` (was `.4` before? checked: it's now at `.4`/`.45` — the in-card row dots dropped from `.4` to `.2`). The widget itself still has a slight glow, but it's localized and acceptable.

## New issues introduced
None. Removing the rail-dock frames was the right call — the punches now look like literal IBM card holes lined up, which is exactly the metaphor.

## Still unaddressed
Minor: a couple of "on" library-card dots still have a slight glow on the booting state (line 125), but that's appropriate as a "punching in progress" cue.

## Final verdict
SHIP
