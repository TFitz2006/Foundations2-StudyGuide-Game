# Foundation2 Study Game

## Purpose

Static browser study app for a Foundations II final exam review game. The project is designed around the course notes, outlines, and review packets, with one floor per unit.

## Run

From the repo root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/study-fresh.html
```

`study-fresh.html` is the safest entry page when the browser cache gets stale.

## Key Files

- `app/app.js`: all unit data, state, rendering, and interactions
- `app/styles.css`: all styling
- `index.html`: main entry page with bootstrap/cache-busting loader
- `study-fresh.html`: simpler direct entry page for testing
- `debug.html`: minimal debug page that confirms whether the app booted
- `docs/study-game-plan.md`: higher-level design plan

## Current Structure

- 16 units are implemented in a single-file static app.
- Graph-heavy units stay visual-first.
- Most non-graph units lean more like study guides with focused interactions.
- No framework or build step is used.

## Important Interactions

- Hashing:
  open addressing uses linear probing correctly now.
- Heaps:
  restricted to packet-style operations: `Insert`, `ExtractMax`, `MaxHeapify`.
- BST:
  starts empty so the student builds the tree manually; operations are limited to packet-style BST work.
- AVL:
  user drags a child node across its parent to trigger left/right rotations.
- Red-Black:
  larger insertion-case examples with clearer separation between example selection and repair selection.
- MST:
  Prim-style edge picking with larger graph layouts and offset weight badges.
- Shortest Path:
  Dijkstra-style node settling with highlighted predecessor-tree edges.

## Design Direction

- The user prefers graph sections to stay interactive and visual.
- Several non-graph sections should feel more like guided study materials than games.
- Visual clarity matters more than novelty when a mechanic does not help learning.

## Notes For Future Edits

- If the browser appears stuck on an old version, bump the asset version in:
  - `index.html`
  - `study-fresh.html`
  - `debug.html`
- The app is sensitive to stale cache more than build issues because everything is static.
- Keep edits in `app/app.js` coherent with the unit notes/review-packet wording rather than adding extra algorithm features that were not covered in class.
