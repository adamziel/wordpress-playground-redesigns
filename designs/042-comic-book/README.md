# Design #042 — Comic book

## Thesis
WordPress Playground rendered as a Sunday-funnies comic strip. The chrome is drawn in bold black ink with chunky 3px outlines, halftone Ben-Day dot fills, and primary comic-book colors (red, yellow, sky-blue, paper-white). Every panel is a literal comic panel — the toolbar is the title strip, the iframe is the splash page, and contextual help arrives as speech bubbles that *POW!* into the screen. Destructive actions trigger sound-effect callouts ("KAPOW!" for "Apply & Reset"), turning consequence into spectacle so users can't miss it. The result is a UI that reads like a graphic novel about hacking WordPress — playful but every feature stays in plain sight.

## What I remixed / merged / removed
- **Three settings entry points → one Quick Settings speech bubble** that pops out of the gear button. The Site Manager's Settings tab still exists, but it now shares one form schema with the popover (rendered identically), so users learn it once.
- **Saved Playgrounds drawer + blueprint gallery + new-from-source actions → one "LAUNCH PAD" full-screen comic spread**, divided into three comic panels: "START FRESH" (Vanilla, WP PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip), "PICK A BLUEPRINT!" (43 cards with category filters drawn as filter tabs), "YOUR SAVES" (saved playgrounds). One panel per concept, like a 3-panel splash.
- **File browser + Blueprint tab → merged "WORKSHOP" tab** where the file tree is the left rail and the right pane swaps between any selected file and the blueprint JSON (which is just `_playground/blueprint.json` virtually pinned to the top of the tree). One mental model, one editor.
- **Logs unstyled text → "EVIDENCE LOCKER" panel** with comic-style level chips (ERROR is a red KAPOW burst, WARNING is a yellow ZAP, INFO is a blue speech-bubble dot). Search box stays.
- **"Unsaved Playground" small text → giant SAVE-ME! thought balloon** above the playground title that pulses until you save, so nobody loses a session.

## Trade-offs
- The aesthetic is loud. For long professional sessions, the halftone backgrounds and sound-effect callouts might fatigue users — there's no "quiet mode" toggle (would be a new feature, off-brief). A real ship would need one.
- 3px ink outlines and chunky type cost vertical real estate; the iframe area shrinks vs. the current UI. I claw some of it back on mobile by collapsing the toolbar into a single comic-panel header with a hamburger.
- "Comic" branding could clash with serious enterprise users testing WP core PRs. The trade is that Playground is fundamentally a *play* tool — leaning into that makes the chrome match the product's purpose better than a neutral grey shell does.
- Speech-bubble help is delightful but space-greedy; the bubbles are toggleable via the `?` mascot in the corner so power users can dismiss them.
