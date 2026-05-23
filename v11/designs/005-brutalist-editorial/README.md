# 005 — Brutalist Editorial (Le Monde Diplomatique After Dark)

## Thesis
A serious newspaper, run through dark mode. The chrome has the discipline of a front page: a single ruled column for navigation, a typographic mast, agate captions, no graphics, no flourishes, no decorative seals. Each tool is its own article. The eye is trained — by years of reading print — to land on the running body, not the column rules. So the eye lands on the iframe.

## What is locked vs. explored
**Locked (per v7 #010):** one iframe-primary surface; one ~64 px quiet left rail with identity mark + exactly five distinct dock buttons; one swap-content pane (no side-by-side); slim top capsule with refresh, address bar, save-state pill, fullscreen toggle and a More menu containing Export to GitHub PR and Download .zip; corner site widget at the iframe's bottom-left; modal Library overlay with 10 categories and search; mobile mirror at 390 × 844.

**Explored:** the editorial idiom. Rail buttons are a vertical typeset column — each dock is its **full italic word** in Spectral 12 px (`Sites`, `Manager`, `Blueprint`, `Database`, `Logs`). No icon glyphs anywhere on the rail. Distinct silhouettes come from each word having a unique character outline, the way headlines are recognizable by their letter rhythm. Inactive at ink-secondary; active bolds up to ink-primary and gains a 2 px ink-primary left bar — the same gesture an editor uses to mark the running article on a paper proof.

The **red-ochre #B14A39 accent appears in exactly one place** on the whole interface: the text of the **saving pill**. The active rail dock does not turn red; it simply goes ink-primary and bold. This is the constraint pushed hardest in this design — the rule is "the rail is silent; only state speaks in colour".

Corner widget is a dateline — italic site name + a dot. Pane headers carry a single thin Spectral mast above each tool name, like a section header on the editorial page.

## Focus-test answer
**Why is the iframe the loudest object on the screen?** Because the chrome has no images. The rail is words, the pane is paragraphs, the corner widget is a dateline — all the same paper. The iframe is the only object in the layout that is allowed to carry visual content; everything else is type. The eye does what it always does on paper: skips past the masthead and lands on the article.

## Trade-offs
The vertical-word rail forces the user to read instead of recognize — slower to scan than icons on a first visit. The bet is that the word "Blueprint" is faster than learning a custom Blueprint glyph, and the same word recurs as the pane title when the dock is open, so the recognition compounds. The single-accent rule (red-ochre only on saving) is enforced strictly; for users who depend on color to spot active state, the bold + 2 px left bar are the redundant cues.
