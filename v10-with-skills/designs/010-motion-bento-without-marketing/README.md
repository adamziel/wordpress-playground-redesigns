# Motion Bento Without Marketing

## Thesis

This design uses bento composition and subtle motion for operational feedback, not for a sales page. The live iframe stays largest and central. The secondary surface is one command bento that swaps between Launcher, Manager, and State, with small animated indicators for saving, booting, logs, and destructive reset.

## Skill material used

Used `taste-skill/SKILL.md` for the motion guidance, single accent, tactile controls, loading/error/empty states, anti-card-overuse judgment, and strong layout variance. Used `redesign-skill/SKILL.md` to audit against generic AI habits and preserve one door per feature. The bento panels are functional controls rather than marketing feature cards.

## Flow model

The top command band owns refresh, address/path, Save, WP Admin, Homepage, and fullscreen focus. The one secondary surface owns saved playgrounds, start routes, blueprint gallery, settings, files, blueprint JSON, database, logs, exports, and Apply+Reset confirmation. Launcher, Manager, and State are mutually exclusive modes inside the same bento area.

## Trade-offs

Motion is intentionally subtle and CSS-only. It adds state clarity without requiring libraries or packages, but the bento layout is less austere than the minimalist document variant. Mobile collapses the bento panels below the iframe and keeps the controls reachable at about 390x844.

## Self-critique

- iframe primacy: 5/5
- one-door feature ownership: 5/5
- secondary-surface discipline: 5/5
- visual craft: 4/5
- mobile parity: 4/5
- skill expression: 5/5
