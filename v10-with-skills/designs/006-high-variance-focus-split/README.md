# High Variance Focus Split

## Thesis

This prototype treats WordPress Playground as a live browser first and a command studio second. The iframe is oversized, tilted slightly off the centerline, and protected by a single slim toolbar. The right studio is the one door for launcher, saved playgrounds, site manager tabs, exports, logs, and destructive reset.

## Skill material used

Used `taste-skill/SKILL.md` for high layout variance, a single restrained accent, tactile button states, non-generic typography, loading/error/empty states, and anti-card-overuse judgment. Used `redesign-skill/SKILL.md` for auditing against common AI UI habits: no purple-blue gradient wallpaper, no anonymous content, no duplicate doors, and no static-only success state.

## Flow model

The flow extends v7 smart resize: interacting with the iframe puts the preview in a 75/25 focus split; interacting with Launch or Manage gives the studio more room without adding a second sidebar. Saved Playgrounds, start routes, blueprint gallery, manager tabs, export actions, and reset confirmation all live in one secondary surface.

## Trade-offs

The asymmetry makes the product feel less like a standard admin shell, but it can make long blueprint browsing feel compressed on medium screens. Mobile collapses the studio below the iframe as a bottom-sheet-like panel to preserve iframe primacy.

## Self-critique

- iframe primacy: 5/5
- one-door feature ownership: 5/5
- secondary-surface discipline: 5/5
- visual craft: 4/5
- mobile parity: 4/5
- skill expression: 5/5
