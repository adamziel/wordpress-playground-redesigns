# 010 — Ambient Side Rails

## Thesis

The WordPress site already owns 96% of the pixels. The remaining chrome should sound like it belongs to that site rather than a separate application. Two 24px vertical rails on the iframe's left and right edges sample the iframe's dominant theme color and glow it back — they are not decoration, they are *the doors*. Hover or click expands a single secondary pane: the left rail opens the Launcher (your saved sites, six "start new" sources, the 43-blueprint gallery); the right rail opens the Site Manager (Settings, Files, Blueprint, Database, Logs). Five tickmarks on the right rail show which Site Manager section is currently active without expanding anything. A slim 40px top bar carries identity, the URL pill (with embedded refresh and saved-state), a fullscreen icon, and a menu. That's it — 8 always-visible affordances, and only two of them are explicit "doors". Press F to make the iframe absolutely full-bleed; Esc returns. The rails earn the glass by being color-sampled extensions of the WordPress site rather than glassy add-ons floating above it.

## What I merged, removed, why

The three settings entry points (popover, sidebar tab, info-notice button) collapse into **one** home: the Site Manager · Settings tab inside the right rail. The Saved Playgrounds drawer, "Start new" sources, and the 43-blueprint gallery merge into **one** Launcher pane behind the left rail with three tabs (Your sites / Start new / Blueprints). Apply & Reset is now a typed-phrase confirmation — typing the playground name unlocks the destructive button — because a small red banner has not earned the trust of a destructive action. WP-admin/Homepage shortcuts are surfaced only in the Site Manager header (icons next to the playground name) rather than duplicated in the top bar. The "Saved Playgrounds dropdown trigger" disappears — clicking the left rail *is* opening saved playgrounds. The unsaved-state warning lives inside the URL pill as a colored save-chip; the "Save site locally" button in the Settings tab's info notice is gone because the same chip in the URL pill always does it. Export to GitHub PR and Download .zip live in one canonical menu (the top-right kebab), not three places.

## Trade-offs

The 24px rails work brilliantly when the WordPress theme has a strong dominant color (Coffee Shop's deep blue, Art Gallery's warm orange demonstrated on mobile) and weakly when the iframe is mostly white — the rail can read as a thin gray border. I compensate with a 1px brighter "seam" line at the rail/iframe boundary and a small "5" badge on the left rail so the rail is never invisible. The ambient color sampling needs to be debounced (run on iframe load + every navigation) to avoid the chrome chattering as the user clicks around inside WordPress. Tickmarks on the right rail showing 5 dots is a learnable but not immediately legible signal — first-time users probably won't read them as Settings/Files/Blueprint/DB/Logs without hovering for a tooltip; a long-press or hover-reveal of the section labels closes the loop. Pulling the same pane component to both sides (rail-left and rail-right) keeps the IA simple but means power users can't compare, say, Logs and Files side-by-side without leaving fullscreen view.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    Counted: site name+dot · URL pill · refresh-in-pill · save-in-pill ·
    fullscreen · menu · left rail · right rail = 8. Version chip is text.

[x] iframe primary + fullscreen toggle?     Score: 4/5
    iframe spans 100% minus 40px top bar and two 24px rails. F toggles
    chrome-off fullscreen; Esc exits; scene 10 demonstrates. Loses 1 because
    rails are still technically intrusive on the iframe's edges at idle.

[x] One door per feature (no duplicates)?   Score: 4/5
    Settings — one tab. Apply&Reset — one place, typed confirm. Launcher —
    left rail only. Export — kebab only. WP-admin/Homepage are in TWO places
    (URL pill + Site Manager header) so −1, but URL pill is a free side-effect
    of address-bar typing rather than a dedicated button.

[x] One secondary surface (not many)?       Score: 4/5
    The .pane component is identical on both sides; the LEFT rail opens it
    docked left (Launcher), the RIGHT rail opens it docked right (Site
    Manager). Same component, swappable content. Technically two instances
    can be visible (rare, demonstrated only in side-crop scenes), so −1.

[x] Direction expressed strongly?           Score: 5/5
    Ambient rails are the design's namesake and load-bearing — both visually
    and functionally. Tickmarks on right rail signal active Site Manager tab
    without expanding. Dual cool/warm ambient on mobile shows the
    color-sampling premise.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same rails, same top bar, same pane component. The pane just narrows.
    Tabs in the pane shrink to icon-only on mobile. No "mobile fallback".
    −1 because Site Manager pane on a 390px screen still consumes ~85% of
    the width — at this size the rail metaphor is more cramped than at
    1440px.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Rails: ambient color sampling, not glass. They EARN their keep by
    belonging to the site, not floating above it. Glass blur only used on
    the secondary pane and the menu, where they overlap the iframe and
    need depth separation. Top bar is gradient-to-transparent so it doesn't
    block the iframe content while reading the site name. No glass for
    decoration's sake. −1 because the secondary pane is still fairly
    aggressive at 28px blur — could be defended down to 18-20px.
```

Average: 4.28 / 5 — committed.
