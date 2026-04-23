# Tommy Fitzgerald's Foundations 2 Study Guide

An interactive, browser-based study guide for **CSE 2331 (Foundations II)** final exam review. One section per unit, with labs that mirror the review-packet question styles.

## Play it now

**[https://tfitz2006.github.io/Foundations2-StudyGuide-Game/](https://tfitz2006.github.io/Foundations2-StudyGuide-Game/)**

No install, no account, works on any modern browser.

## What's inside

16 units from the course, each with a focused interactive lab:

- **Runtime core** — Asymptotic Notation, Loop Analysis, Recurrence Relations, Probabilistic Analysis, Quicksort
- **Data structures** — Hashing, Heaps, Binary Search Trees, AVL Trees, Red-Black Trees
- **Graph algorithms** — Graph Foundations, Minimum Spanning Tree (Prim), Shortest Path (Dijkstra), Union-Find
- **Theory finish** — Table Doubling (amortized analysis), NP-Completeness

Every lab is scoped to exactly what the course PDFs cover — no extra operations or mechanics that weren't in the notes.

## How to study with it

1. Pick a unit on the left.
2. Read the **study guide** card at the top — this is the distilled review-packet pattern.
3. Run the **interactive lab** to practice: build a heap, click z on a Red-Black tree, pick MST edges, etc.
4. Compare your reasoning to the explanations that appear as you step through.

## Running locally

If you want to run it on your own machine:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/](http://localhost:8000/).

## Tech notes

- Pure static site — no framework, no build step.
- All logic in `app/app.js`, all styling in `app/styles.css`.
- If the browser serves a stale version, hard-reload or bump the `?v=` query parameter in `index.html`.
