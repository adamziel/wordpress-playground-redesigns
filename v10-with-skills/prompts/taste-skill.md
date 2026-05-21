You are working in `/home/claude/redesign/site`.

Task: create five WordPress Playground v10 prototypes using the external reference skill `taste-skill`. Do not install any skill or package. Use the cloned reference at `/home/claude/redesign/external-skills/taste-skill` only as reading material.

Read first:

- `v10-with-skills/BRIEF.md`
- `v10-with-skills/DIRECTIONS.md`
- `README.md`
- `DESIGN_BRIEF.md`
- `v7/DESIGN_BRIEF.md`
- `/home/claude/redesign/external-skills/taste-skill/README.md`
- `/home/claude/redesign/external-skills/taste-skill/skills/taste-skill/SKILL.md`
- `/home/claude/redesign/external-skills/taste-skill/skills/redesign-skill/SKILL.md`
- For specific variants, read relevant files under `/home/claude/redesign/external-skills/taste-skill/skills/`: `minimalist-skill/SKILL.md`, `soft-skill/SKILL.md`, and `brutalist-skill/SKILL.md`.

The skill lens: Taste Skill should remove generic AI UI habits. Use stronger layout variance, typography with character, a restrained single accent, tactile states, visible loading/error/empty states, and anti-card-overuse judgment. No emojis. No default purple-blue AI gradient aesthetic.

Own only these folders:

- `v10-with-skills/designs/006-high-variance-focus-split`
- `v10-with-skills/designs/007-minimalist-document-playground`
- `v10-with-skills/designs/008-soft-agency-control-room`
- `v10-with-skills/designs/009-brutalist-runtime-switchboard`
- `v10-with-skills/designs/010-motion-bento-without-marketing`

For each folder, create exactly:

- `index.html`
- `README.md`
- `meta.json`

Use the matching direction from `v10-with-skills/DIRECTIONS.md`. Set `meta.skill` to `taste-skill`. In `meta.skillSource`, name the exact Taste skill files used, for example "taste-skill/SKILL.md + minimalist-skill/SKILL.md". In the visible UI, include a small source annotation saying the design came from Taste Skill.

Implementation requirements:

- Single self-contained HTML file per design with inline CSS and inline JS.
- Include a real `<iframe>` with `srcdoc` that renders a plausible WordPress site preview.
- Each design must visibly cover every hard requirement in `v10-with-skills/BRIEF.md`.
- Preserve v7 lessons: iframe primacy, one secondary surface, one door per feature, explicit fullscreen/focus, no two-row top bar.
- Make each design materially different from the others in flow and visual system.
- Use ASCII text only. No emoji.
- Use realistic mock content: saved playgrounds, at least 16 blueprint cards, settings, files, blueprint JSON, database, logs, exports, typed reset or snapshot confirmation.
- Include responsive CSS for about 390x844 mobile.
- You may use external Google Fonts or icon CDNs, but do not add build tooling or packages.

After creating the files, run validation for all five:

```bash
node v10-with-skills/scripts/validate-design.mjs 006-high-variance-focus-split
node v10-with-skills/scripts/validate-design.mjs 007-minimalist-document-playground
node v10-with-skills/scripts/validate-design.mjs 008-soft-agency-control-room
node v10-with-skills/scripts/validate-design.mjs 009-brutalist-runtime-switchboard
node v10-with-skills/scripts/validate-design.mjs 010-motion-bento-without-marketing
```

Fix any validation failures before finishing. Do not edit `v10-with-skills/index.html`, `v10-with-skills/designs.json`, root files, or another worker's folders.

