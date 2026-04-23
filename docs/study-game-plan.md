# Foundations II Study Game Plan

This plan uses only the course materials in `Unit-Outlines`, `Unit-Notes-Typed`, and the three final review packets.

## Working Assumptions

- The game should have one level per actual unit represented in the notes and outlines.
- The game should feel more like a playable review lab than a quiz app.
- Review-packet question styles should drive the challenge formats.
- Graph-heavy units should get the strongest interactive visuals.

## Actual Unit List

1. Asymptotic Notation
2. Loop Analysis
3. Recurrence Relations
4. Probabilistic Analysis
5. Quicksort
6. Hashing
7. Heaps
8. Binary Search Trees
9. AVL Trees
10. Red-Black Trees
11. Graph Algorithms
12. Minimum Spanning Tree
13. Shortest Path
14. Table Doubling
15. Union-Find
16. NP-Completeness

## Review-Packet Mapping

- Review Packet 1 mainly supports Units 1-5.
  It emphasizes best-case, worst-case, and expected runtime analysis from pseudocode, plus explanation of sorting algorithms.
- Review Packet 2 mainly supports Units 6-10.
  It emphasizes hand simulation of hash tables, heaps, BSTs, red-black trees, and priority-queue-based runtime analysis.
- Review Packet 3 mainly supports Units 11-16.
  It emphasizes graph runtime analysis, MST and shortest-path tree construction, union-find simulations, and NP/P/NP-complete proof style questions.

## Core Game Pitch

Make the game feel like an “Algorithms Final Tower” with 16 floors.

Each floor has the same four-part loop:

1. Learn
   A visual warmup that reminds the player what the structure or proof idea looks like.
2. Simulate
   The player manipulates the actual object: a tree, heap, graph, table, recurrence tree, or runtime heatmap.
3. Exam Sprint
   A timed challenge modeled on review-packet questions.
4. Explain Back
   The player writes or records a one-sentence justification for the move they made.

That last step matters because the review packets do not only ask for answers. They ask students to explain algorithms, defend complexity claims, and show process.

## Social Design

Ways to make friends want to use it with you:

- Head-to-head seeds:
  Both players get the same randomized instance and race.
- Pass-the-proof mode:
  One player does the simulation, the next player must explain why the step was legal.
- Co-op boss rounds:
  One player controls the structure, the other controls the written justification.
- Shareable challenge cards:
  “Beat my Dijkstra run,” “Fix my red-black insertion,” “Find the bad hash function,” and similar prompts.
- Accuracy-first leaderboard:
  Rank by score, then time. Do not reward blind speed over correctness.
- Favorite-run voting:
  Let friends upvote the cleanest explanation or slickest solve path.

## Scoring

- Correctness: 60%
- Reasoning or explanation: 20%
- Speed: 15%
- Style bonus: 5%
  Awarded for perfect runs, low-move solutions, or catching a trick condition.

This keeps the game aligned with the class, where many questions are process-heavy.

## Level Blueprints

### Level 1: Asymptotic Notation

- Focus:
  `O`, `Omega`, `Theta`, `o`, `omega`, limit comparisons, growth-rate ordering, simplifying expressions.
- Review-style question types:
  Compare functions, identify asymptotic class, justify with limits or dominant terms.
- Main mechanic:
  A “Growth Skyline” where players drag function cards onto the correct growth tier.
- Strong visual:
  A live graph panel showing relative growth as `n` increases, with toggles for linear, log, polynomial, and exponential families.
- Friend hook:
  One player places the function, the other must justify whether the placement is `Theta`, strict upper, or strict lower.

### Level 2: Loop Analysis

- Focus:
  Converting loop nests, bounds, and early returns into runtime expressions.
- Review-style question types:
  Determine runtime of pseudocode by counting iterations and spotting best-case versus worst-case exits.
- Main mechanic:
  A “Loop Heatmap” where every visited iteration cell lights up as the code runs.
- Strong visual:
  Nested loops render as shaded rectangles or triangles so players see why `n^2`, `n sqrt(n)`, and triangular sums look different.
- Friend hook:
  One player predicts the shape before running the code; the other runs it and checks the guess.

### Level 3: Recurrence Relations

- Focus:
  Building recurrences from recursive code, matching them to known forms, and identifying asymptotic solutions.
- Review-style question types:
  Write `T(n)` from code, compare recurrence families, recognize merge-sort-style versus Fibonacci-style growth.
- Main mechanic:
  A “Recursion Tree Builder” where players expand calls and attach work done at each node.
- Strong visual:
  Depth-by-depth work bars showing when total work per level stays flat, grows, or collapses.
- Friend hook:
  One player writes the recurrence, the other chooses the matching growth class.

### Level 4: Probabilistic Analysis

- Focus:
  Best, worst, expected runtime; expected value; conditional expectation; event tables.
- Review-style question types:
  Given a random choice in code, compute `B(n)`, `W(n)`, and `ET(n)`.
- Main mechanic:
  A “Probability Lab” where players build the event table by dragging branches and probabilities onto the runtime tree.
- Strong visual:
  A weighted tree or wheel showing how probability mass shifts expected runtime.
- Friend hook:
  Players can send each other random-algorithm scenarios and compare expected-value derivations.

### Level 5: Quicksort

- Focus:
  Partitioning, pivots, median pivot idea, random pivot idea, and expected behavior.
- Review-style question types:
  Explain sorting algorithms, trace partitioning, reason about expected recursive size.
- Main mechanic:
  A “Pivot Arena” where players choose or are assigned a pivot and must partition the array correctly.
- Strong visual:
  Array bars split into left, pivot, and right zones as swaps occur.
- Friend hook:
  Same input, different pivot strategies. Compare number of swaps and recursion balance.

### Level 6: Hashing

- Focus:
  Good versus bad hash functions, chained hashing, open addressing, collision behavior.
- Review-style question types:
  Simulate insert sequences by hand, explain poor hash functions, compare table behaviors.
- Main mechanic:
  A “Hash Table Lab” with switchable chained and open-address modes.
- Strong visual:
  Keys fly into buckets, collide, then either chain or probe visually.
- Friend hook:
  One player designs the key sequence, the other predicts the resulting table.

### Level 7: Heaps

- Focus:
  Heap property, nearly complete trees, insert, `ExtractMax`, `MaxHeapify`, heap sort, priority queue thinking.
- Review-style question types:
  Simulate heap operations, explain why a heap is useful, analyze priority-queue runtimes inside larger algorithms.
- Main mechanic:
  A “Heap Crane” where players bubble values up or sink them down.
- Strong visual:
  Dual tree-and-array view so the player sees the structure and the storage model at once.
- Friend hook:
  Competitive “fix the heap” race after the game intentionally breaks the heap property.

### Level 8: Binary Search Trees

- Focus:
  BST property, inorder traversal, search, insert, successor/predecessor, delete.
- Review-style question types:
  Build the tree from an insertion sequence, trace search paths, perform deletions correctly.
- Main mechanic:
  A “BST Garden” where inserted values grow into the correct location.
- Strong visual:
  Hovering a node highlights its inorder predecessor and successor path.
- Friend hook:
  One player chooses the insertion order and the other predicts the resulting shape before it is revealed.

### Level 9: AVL Trees

- Focus:
  Balance condition, height bounds, rebalancing after insertion or deletion, rotations.
- Review-style question types:
  Identify imbalance, apply the correct rotation, explain why height stays logarithmic.
- Main mechanic:
  A “Balance Clinic” where nodes visibly tilt left or right as imbalance grows.
- Strong visual:
  Height labels and balance factors appear directly on the nodes, then animate through single or double rotations.
- Friend hook:
  “Save this tree” mode where a friend sends an almost-balanced tree and you must repair it in minimal moves.

### Level 10: Red-Black Trees

- Focus:
  Red-black invariants and insertion repair logic.
- Review-style question types:
  Perform insertion sequences and restore the tree legally.
- Main mechanic:
  A “Color and Rotate” puzzle where players repair violations one step at a time.
- Strong visual:
  Illegal states flash clearly: red-red conflict, black-height mismatch, wrong root color.
- Friend hook:
  One player inserts the value, the other chooses the repair sequence.

### Level 11: Graph Algorithms Foundations

- Focus:
  Vertices, edges, degree, adjacency matrix, adjacency list, complete graphs, spanning trees, bridges, walks, and paths.
- Review-style question types:
  Translate between graph representations, reason about graph properties, identify paths and tree structure.
- Main mechanic:
  A “Graph Sandbox” with view toggles between drawing, adjacency list, and adjacency matrix.
- Strong visual:
  Clicking a vertex highlights its matrix row, its adjacency-list entries, and its incident edges at the same time.
- Friend hook:
  One player draws a graph and the other must reconstruct the matrix or list view from memory.

### Level 12: Minimum Spanning Tree

- Focus:
  Prim’s algorithm, the MST lemma, and safe-edge logic.
- Review-style question types:
  Build an MST by hand and justify why the chosen edge is legal.
- Main mechanic:
  An “MST Frontier Forge” where the current tree and the cut boundary are visible at all times.
- Strong visual:
  Vertices already in the tree glow one color, the outside set glows another, and candidate crossing edges pulse by weight.
- Friend hook:
  Co-op cut game: one player chooses the next edge, the other must defend the cut argument.

### Level 13: Shortest Path

- Focus:
  Dijkstra-style shortest-path tree growth, tentative distances, predecessor tree, priority queue usage.
- Review-style question types:
  Build shortest-path trees from a chosen start node and analyze PQ-based runtime.
- Main mechanic:
  A “Distance Relay” where players repeatedly relax the best frontier edge.
- Strong visual:
  Each vertex shows current tentative distance, predecessor, and whether it is settled or unsettled.
- Friend hook:
  Send a graph and start node to a friend and compare tree shape, not just final distance labels.

### Level 14: Table Doubling

- Focus:
  Resize-on-insert, resize-on-delete, amortized analysis, bad versus stable shrinking thresholds, hash-table resizing trigger.
- Review-style question types:
  Compute aggregate cost across many operations and explain why amortized cost stays constant under the right policy.
- Main mechanic:
  A “Resize Reactor” where the array grows and shrinks in visible chunks as elements are inserted or deleted.
- Strong visual:
  Capacity and occupancy meters show why shrinking at half-full causes thrashing while quarter-full is stable.
- Friend hook:
  A sabotage mode where one player chooses the resize threshold and the other tries to break performance.

### Level 15: Union-Find

- Focus:
  Linked-list union-find, tree-based union-find, union by height, path compression, connected components.
- Review-style question types:
  Perform operation sequences and draw the resulting sets or trees.
- Main mechanic:
  A “Connectivity Lab” where players run `MakeSet`, `Union`, `UnionByHeight`, and `FindSetPathCompress`.
- Strong visual:
  Toggle between linked-list representation and tree representation for the same current partition.
- Friend hook:
  One player sends an operation log and the other must predict the final compressed forest.

### Level 16: NP-Completeness

- Focus:
  Decision problems, polynomial-time verification, reductions, `P`, `NP`, `NP-hard`, `NP-complete`, `3-SAT`, Independent Set, Clique, Vertex Cover, TSP/Hamiltonian-style reduction thinking.
- Review-style question types:
  Prove a problem is in `P`, prove a problem is in `NP`, explain reduction direction, and reason through a gadget construction.
- Main mechanic:
  A “Reduction Courtroom” where players match source problems, target problems, and the meaning of the mapping.
- Strong visual:
  Clause gadgets and independent-set selections appear side by side so the reduction is concrete rather than symbolic only.
- Friend hook:
  Debate mode: one player states a reduction claim, the other must approve it, reject it, or explain the direction error.

## Graph Visual Systems

These are the parts most likely to make the game feel special instead of generic.

### Shared Graph Canvas

- One graph model, multiple views:
  drawing view, adjacency-list view, adjacency-matrix view.
- Clicking any vertex or edge should highlight the corresponding entries everywhere.
- Weighted edges should animate clearly and stay readable at a glance.
- The same canvas should power Levels 11, 12, 13, 15, and part of 16.

### Prim Visualizer

- Always show the current tree set and the outside set.
- Highlight only crossing edges as legal candidates.
- Sort candidate edges by weight in a side panel.
- On wrong choice, explain whether the edge failed because it did not cross the cut or because a lighter safe edge existed.

### Dijkstra Visualizer

- Show tentative distance directly inside each node.
- Show predecessor arrows as they change.
- Show a min-priority queue panel with current keys.
- Animate each relaxation so players see which estimate improved and why.

### Union-Find Visualizer

- Support both linked-list and tree modes because both appear in the materials.
- Animate `FindSetPathCompress` by pulling every node on the path up to the root.
- Show root heights during `UnionByHeight`.
- Include a “before and after compression” slider.

### NP Gadget Visualizer

- Show a Boolean formula beside the constructed graph.
- Clicking a clause should highlight the gadget region it produced.
- Selecting an independent-set node should dim incompatible nodes.
- Include a “truth assignment mirror” so the player sees the graph choice and logical choice together.

## Non-Graph Shared Components

- Code card renderer for pseudocode questions.
- Array view with indexed slots.
- Binary-tree canvas shared by heaps, BST, AVL, and red-black trees.
- Explanation box with sentence starters:
  “This edge is valid because...”
  “The runtime is dominated by...”
  “This rotation fixes...”
- Instant replay for step-by-step review after a failed run.

## Best Unit Clusters to Build First

### Cluster A: Runtime Core

- Asymptotic Notation
- Loop Analysis
- Recurrence Relations
- Probabilistic Analysis
- Quicksort

Why first:
  These levels share pseudocode parsing, runtime panels, and explanation prompts.

### Cluster B: Discrete Structures

- Hashing
- Heaps
- Binary Search Trees
- AVL Trees
- Red-Black Trees

Why second:
  These levels share array, tree, and operation-simulation components.

### Cluster C: Visual Signature Cluster

- Graph Algorithms
- Minimum Spanning Tree
- Shortest Path
- Union-Find

Why third:
  This is the part most likely to impress friends and feel uniquely interactive.

### Cluster D: Theory Finish

- Table Doubling
- NP-Completeness

Why last:
  They need more custom explanation scaffolding and less reusable simulation logic.

## Recommended MVP

If you want a smaller but still impressive first version, build these seven levels first:

1. Loop Analysis
2. Probabilistic Analysis
3. Hashing
4. Heaps
5. Binary Search Trees
6. Minimum Spanning Tree
7. Shortest Path

That set covers:

- raw runtime analysis
- expected-value questions
- hand simulation
- arrays and trees
- the strongest graph visuals

## Stretch Features

- “Explain all sorting algorithms” gallery:
  a recap room tying together insertion sort, selection sort, merge sort, quicksort, and heap sort from the materials.
- Friend-made instances:
  custom heaps, BST insert orders, or weighted graphs.
- Boss Rush:
  mixed final-exam mode pulling one task from each unit cluster.
- Mistake museum:
  save the player’s most common errors and turn them into targeted rematches.

## Success Criteria

The game is working if:

- a friend can open any level and immediately tell what object they are manipulating
- a player can practice the exact kinds of tasks that appear in the review packets
- the graph levels are visually memorable enough that people want to share them
- each level teaches process, not only final answers
