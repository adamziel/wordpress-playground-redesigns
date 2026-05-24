# v12 #018 — Newspaper Masthead

## Thesis
A serious dark-mode broadsheet. Playfair Display for headlines and the rail; Source Serif 4 for the body and the italic prose that the chrome uses for status and hints. The thesis is simple: the v11 round drew saved-sites as `[icon] name / meta-line` because it could not imagine a way to give the metadata its own typographic dignity. This design gives the meta a *dateline* — `Vol. III · No. 22 · WP 6.7 / PHP 8.2 · 14.2 MB · 24 May 2026` — that sits below the title in Playfair italic, separated only by a double rule from the title above. The dateline is the metadata, and the metadata is the dateline. There is no second row because the dateline is built into the masthead.

## List pattern
Mini-mastheads. Each entry has three vertical strata: (1) a top double-rule (2px solid above, 1px solid below, classic broadsheet flourish), (2) a centred Playfair Display 700 title at 24px, and (3) a Playfair italic dateline at 11px in muted ink-soft, with the data inlined and separated by hairline middots. The active entry takes ink-rust for both the dateline and the double rule. Start routes are rendered as the same primitive — `Vanilla WordPress / Vol. 0 · Latest stable · en_US` — keeping the dialect consistent. Library cards are smaller mastheads in a 4-column grid, each with its own double rule, title, and "Vol." dateline.

## Focus-test answer
**Q: How do I know which playground is "the current one"?** A: The dateline is set in ink-rust, and the double-rule above the title takes the same colour. Identity is signalled inside the masthead, not by a second-row pill or a meta-trailing chip.

## Trade-offs
The mini-masthead is a *single* typographic object, which means the dateline shrinks as titles grow — long titles can compress the dateline visually. We bound this by capping title size at 24px and centring the dateline below; very long datelines wrap inside the masthead instead of overflowing. The masthead reads as an editorial column rather than a list, which is the point — the saved-sites pane gains a slight "library catalogue" feel. The cost is that ordering data sequentially (most-recent-on-top) reads less obviously than in a true ledger; we add a small Roman-numeral `corner-num` (i, ii, iii, iv) at the top-right to recover order without breaking the dateline. Accent rule respected: ink-rust appears in the saving pill, the active dateline, the active double-rule, the active dock italic, and nowhere else. No nested borders: the masthead has rules above and below the title but no surrounding card border.
