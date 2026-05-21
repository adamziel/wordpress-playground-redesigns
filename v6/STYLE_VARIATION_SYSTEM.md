# V6 Style Variation System

## Online Skill Source

Before starting V6, the swarm uses TypeUI design skills as external style source material. TypeUI describes its library as curated `SKILL.md` / `DESIGN.md` files for agents including Codex, and its CLI can pull individual registry specs into a project. I pulled these local `DESIGN.md` references into `v6/style-skills/`:

- `professional`
- `clean`
- `refined`
- `spacious`
- `corporate`
- `editorial`
- `material`
- `bento`
- `paper`
- `mono`
- `premium`
- `contemporary`

Superdesign's prompt-library guidance reinforces the same operating rule: start with a style prompt before building so the visual direction is not generic, then combine it with layout or component prompts. V6 workers must therefore use an assigned style skill as a concrete design system input, not as decorative seasoning.

## How Workers Must Use Style Skills

Every V6 design gets one assigned TypeUI style skill from `scripts/v6-design-brief.mjs`. The worker must read that file and name it in the README.

The style skill must influence at least four of these:

- Typography family and type hierarchy.
- Color palette, including neutrals and accent behavior.
- Radius and border treatment.
- Surface model: flat, layered, paper, bento, editorial, material, premium, mono, etc.
- Density and spacing rhythm.
- Icon weight and button shape.
- Motion or state language represented statically.

Do not clone TypeUI examples. Translate the skill into a WordPress Playground product shell.

## V6 Variety Guardrails

- Avoid defaulting every design to Inter, WordPress blue, white cards, and slate text.
- Avoid making every design dark glass.
- Avoid beige/cream-only dashboards.
- Avoid using novelty styles as jokes. Product-ready means the interface can plausibly ship for a serious developer tool.
- Use real data and real controls. Style variety cannot replace feature coverage.
- Preserve WCAG-minded contrast, visible focus, legible text, and usable hit targets.
- The visual system must support the assigned interaction; it cannot fight it.

## Allowed Range

Professional variation is welcome:

- Editorial density for blueprint browsing.
- Paper-like tactility for saved identity and provenance.
- Premium dark surfaces for focused developer use.
- Bento grouping for launch routes and tool states.
- Mono utility for logs and command echoes, if visual UI stays primary.
- Spacious or refined modes for calmer first-touch workflows.
- Material-like surfaces for clear mobile parity and state feedback.

Outlandish variation is not welcome:

- No cyberpunk, gamer HUD, joke retro arcade, sketch-only, or anti-design unless a specific worker can make it product-ready and the assigned skill supports it.
- No new product features to fill visual space.
- No hidden-core-feature minimalism.

