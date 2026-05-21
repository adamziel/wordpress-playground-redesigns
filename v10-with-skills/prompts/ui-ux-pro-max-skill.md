You are working in `/home/claude/redesign/site`.

Task: create five WordPress Playground v10 prototypes using the external reference skill `ui-ux-pro-max-skill`. Do not install any skill or package. Use the cloned reference at `/home/claude/redesign/external-skills/ui-ux-pro-max-skill` only as reading material.

Read first:

- `v10-with-skills/BRIEF.md`
- `v10-with-skills/DIRECTIONS.md`
- `README.md`
- `DESIGN_BRIEF.md`
- `v7/DESIGN_BRIEF.md`
- `/home/claude/redesign/external-skills/ui-ux-pro-max-skill/README.md`
- `/home/claude/redesign/external-skills/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/SKILL.md`
- The local search outputs are available by running the skill's script, for example:
  - `python3 /home/claude/redesign/external-skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "developer tool sandbox playground interface" --domain product -n 5`
  - `python3 /home/claude/redesign/external-skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "developer tool sandbox playground interface" --domain style -n 10`
  - `python3 /home/claude/redesign/external-skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "developer tool sandbox playground interface" --domain color -n 5`
  - `python3 /home/claude/redesign/external-skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "developer tool sandbox playground interface" --domain typography -n 5`

The skill lens: UI/UX Pro Max is a searchable design-intelligence system. Use its product, style, color, typography, accessibility, interaction, and responsive rules. Name the recommendations you applied in the README and metadata.

Own only these folders:

- `v10-with-skills/designs/011-developer-ide-oled`
- `v10-with-skills/designs/012-interactive-product-demo-shell`
- `v10-with-skills/designs/013-spatial-ui-manager`
- `v10-with-skills/designs/014-accessible-ethical-playground`
- `v10-with-skills/designs/015-data-dense-monitor`

For each folder, create exactly:

- `index.html`
- `README.md`
- `meta.json`

Use the matching direction from `v10-with-skills/DIRECTIONS.md`. Set `meta.skill` to `ui-ux-pro-max-skill`. In `meta.skillSource`, name exact recommendations, for example "UI Pro Max search: Developer Tool / IDE, Developer Mono, Real-Time Monitor". In the visible UI, include a small source annotation saying the design came from UI/UX Pro Max.

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
node v10-with-skills/scripts/validate-design.mjs 011-developer-ide-oled
node v10-with-skills/scripts/validate-design.mjs 012-interactive-product-demo-shell
node v10-with-skills/scripts/validate-design.mjs 013-spatial-ui-manager
node v10-with-skills/scripts/validate-design.mjs 014-accessible-ethical-playground
node v10-with-skills/scripts/validate-design.mjs 015-data-dense-monitor
```

Fix any validation failures before finishing. Do not edit `v10-with-skills/index.html`, `v10-with-skills/designs.json`, root files, or another worker's folders.

