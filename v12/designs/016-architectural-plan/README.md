# v12 #016 — Architectural Plan

## Thesis
An architect's plan view at 11pm. The paper is black, the linework is muted blueprint cyan, and the labels are Cormorant Garamond italic — the long-S, low-x-height kind that you'd find on a drafting sheet. The interface refuses to "card" anything. Every list that the v11 round rendered as `[icon] name / meta-line` is here rendered as **a rectangle whose width is the datum**, with a single italic label inside it. Reading the saved-sites pane should feel like reading a floor plan: you know which room is bigger before you know its name, because the rectangle says so.

## List pattern
Plan-view rectangles. Each saved playground is a horizontal rectangle whose width is proportional to its disk footprint (Coffee Shop fills the column at 14.2 MB; the four-megabyte Unsaved Playground is a stubby 30% strip). Inside the rectangle, just the title in Cormorant italic, vertically centred. No icon, no meta-row, no secondary text. The "active" rectangle gains a stroke and four corner ticks. Start-route rows use the same dialect — they're rectangles too, sized to suggest the route's typical end-state footprint. The library overlay uses the same primitive arranged as a 4-column floor plan.

## Focus-test answer
**Q: How do I know which site is largest?** A: It's the widest rectangle. The data is geometry, not text. You don't read a number; you read a length.

## Trade-offs
The pattern's biggest cost is one of literal "data hierarchy" — a non-architect user might miss that width = size without the legend ("Scale 1 : 1 MB") in the pane footer. We keep the legend small and unobtrusive, but it is necessary scaffolding for the first encounter. The Cormorant italic at 15px stays readable down to ~5-character titles; longer titles ellipsize cleanly inside the rectangle. We've kept the accent strictly single (blueprint cyan #5C8AA6) — used for the saving pill, the active rectangle's stroke, and the rail tick. Nothing else borrows the colour. Nested-border rule respected: each rectangle has a single border, no inner border lives inside it. Sites pane and start-routes pane speak the same dialect; library cards are the same primitive at smaller grid size.
