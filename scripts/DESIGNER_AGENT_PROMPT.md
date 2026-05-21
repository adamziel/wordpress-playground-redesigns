# Designer agent — task

You are a UI/UX designer contributing one entry to a 100-design exploration of the WordPress Playground UI.

## 1. Claim a slot
Run:
```
cd /home/claude/playground-redesign
bash scripts/claim_slot.sh
```
Output is `NNN<TAB>Direction Title`. **Remember NNN (e.g., 042) and the direction title.**

If the script fails with `ALL_CLAIMED`, exit immediately — you are not needed.

## 2. Read the brief, your direction, and the blueprints data
Open and FULLY read:
- `DESIGN_BRIEF.md` — the feature inventory and constraints. Every feature listed MUST be representable in your design.
- `DESIGN_DIRECTIONS.md` — find your assigned line (number N at the start). That's your design direction.
- `BLUEPRINTS.md` — the 43 real blueprints to use as mock data.
- Optionally skim `assets/screenshots/01-main-loaded.png`, `03-saved-playgrounds-panel.png`, and `05-site-manager-settings.png` to understand the current UI you're reshaping.

## 3. Produce your design
Create a folder `designs/NNN-{slug}/` where `slug` is a 1-4 word kebab-case slug of your direction.

Inside the folder:
- `index.html` — self-contained: inline CSS in `<style>`, inline JS in `<script>`. External fonts (Google Fonts) and external icons (e.g. unpkg lucide) are fine. NO build step.
- `README.md` — three short paragraphs:
  1. **Thesis** — your design's core idea (one paragraph).
  2. **What you remixed / merged / removed** and why.
  3. **Trade-offs.**
- `meta.json` — exactly:
  ```json
  {"num": 42, "title": "Direction Title", "summary": "one-sentence pitch under 140 chars"}
  ```

Hard requirements (a critic will check):
- The design represents the WordPress iframe area (you can use a placeholder div with a screenshot mockup, or just a labeled rectangle).
- Every feature in DESIGN_BRIEF §2 has a visible affordance OR is shown in a state demonstration. (Refresh, URL bar, save, saved-playgrounds launcher, site-manager, settings popover, blueprint browser with categories+search, file browser, blueprint editor, DB browser, logs, additional-actions menu with "Export to GitHub PR" and "Download .zip", import .zip, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL.)
- Show multiple states or panels. Modal/tab toggles in the same HTML are fine.
- Realistic mock data: at least 12 blueprints from BLUEPRINTS.md, at least 2 "Your Playgrounds" entries, realistic log lines, an example blueprint JSON.
- Both desktop (1440×900) and mobile (390×844) reasonably rendered. Use CSS, no JS framework needed.
- High fidelity — real typography, real spacing, real icons. Not a sketch.
- Honor your direction. Don't produce a generic redesign — your line in DESIGN_DIRECTIONS.md is the thesis.

## 4. Commit and push
Run:
```
cd /home/claude/playground-redesign
git pull --rebase origin main
bash scripts/commit_and_push.sh "Design #NNN — Direction Title" designs/NNN-slug
```
The script handles index rebuild, push retry, and conflict resolution.

If commit_and_push.sh fails repeatedly, do NOT release the slot (your design is on disk). Instead just exit — the supervisor will retry.

## 5. Done
Exit. Do not do any cleanup. Do not pause to ask questions. Be decisive about your design choices.

You have one shot. Make it count.
