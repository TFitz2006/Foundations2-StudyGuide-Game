const units = [
  {
    id: "asymptotic",
    number: 1,
    title: "Asymptotic Notation",
    cluster: "Runtime Core",
    status: "live",
    summary:
      "Growth-rate ordering, limit comparison, and the language used to simplify runtime expressions.",
    focus: ["O / Omega / Theta", "strict little-o / little-omega", "dominant terms", "growth hierarchy"],
    review: ["Compare function pairs", "justify class membership", "sort functions by growth"],
    mechanic: "Growth Skyline",
    friendHook: "One player places the function family; the other has to defend the asymptotic relationship.",
    prompts: [
      "Place a mixed expression into the correct growth tier.",
      "Explain why a limit of a positive constant implies Theta.",
      "Sort log, n^0.1, n log n, n^2, and 2^n without calculators.",
    ],
  },
  {
    id: "loop-analysis",
    number: 2,
    title: "Loop Analysis",
    cluster: "Runtime Core",
    status: "live",
    summary:
      "Visualize iteration regions so nested loops and early exits become shapes instead of guesswork.",
    focus: ["nested-loop counting", "best vs worst case", "triangular sums", "runtime heatmaps"],
    review: ["Determine asymptotic complexity", "spot early-return behavior", "count exact iterations first"],
    mechanic: "Loop Heatmap",
    friendHook: "One player predicts the shape, the other runs it and checks whether the asymptotic guess survives.",
    prompts: [
      "Tell whether the active cells form a rectangle, band, or triangle.",
      "Guess the class before revealing the answer.",
      "Use the exact iteration count to support the asymptotic choice.",
    ],
  },
  {
    id: "recurrence",
    number: 3,
    title: "Recurrence Relations",
    cluster: "Runtime Core",
    status: "live",
    summary:
      "Turn recursive code into T(n) statements and match the recurrence to the right growth family.",
    focus: ["build T(n)", "merge-sort style splits", "binary search", "Fibonacci-style blowup"],
    review: ["write the recurrence", "compare recurrence families", "identify the dominant pattern"],
    mechanic: "Recursion Tree Builder",
    friendHook: "One player writes the recurrence, the other picks the matching asymptotic behavior.",
    prompts: [
      "Translate a recursive function into T(n).",
      "Mark the work done at each recursion depth.",
      "Recognize when a recurrence is logarithmic, linear, or exponential.",
    ],
  },
  {
    id: "probabilistic",
    number: 4,
    title: "Probabilistic Analysis",
    cluster: "Runtime Core",
    status: "live",
    summary:
      "Connect event tables, expected value, and best/worst/expected runtime into a single workflow.",
    focus: ["expected value", "conditional expectation", "event tables", "B(n) / W(n) / ET(n)"],
    review: ["derive expected runtime from random branches", "compare random outcomes", "justify best and worst cases"],
    mechanic: "Probability Lab",
    friendHook: "Friends can swap randomized pseudocode and compare event-table derivations.",
    prompts: [
      "Build an event table from the algorithm.",
      "Separate best, worst, and expected cases cleanly.",
      "Use probabilities and runtimes in the same argument.",
    ],
  },
  {
    id: "quicksort",
    number: 5,
    title: "Quicksort",
    cluster: "Runtime Core",
    status: "live",
    summary:
      "Partitioning, pivot strategy, and expected behavior with median and random pivot ideas from the notes.",
    focus: ["Partition", "median pivot idea", "random pivot", "sorting explanation"],
    review: ["trace partitioning", "explain sorting methods", "reason about recursive split quality"],
    mechanic: "Pivot Arena",
    friendHook: "Run the same array with different pivot rules and compare balance, swaps, and depth.",
    prompts: [
      "Show how the pivot divides the array.",
      "Compare a balanced split and a lopsided split.",
      "Explain where the expected behavior comes from.",
    ],
  },
  {
    id: "hashing",
    number: 6,
    title: "Hashing",
    cluster: "Discrete Structures",
    status: "live",
    summary:
      "Step through the exact chained and open-address insert sequences that show up in the review packet.",
    focus: ["good vs bad hash functions", "chained hashing", "open addressing", "collision handling"],
    review: ["simulate insert sequences", "draw resulting tables", "explain poor hash functions"],
    mechanic: "Hash Table Lab",
    friendHook: "One player picks the sequence and mode, the other predicts the final table.",
    prompts: [
      "Insert the review-packet sequence into chained hashing.",
      "Repeat it with open addressing and track probes.",
      "Explain why a regular key pattern can break a bad hash function.",
    ],
  },
  {
    id: "heaps",
    number: 7,
    title: "Heaps",
    cluster: "Discrete Structures",
    status: "live",
    summary:
      "Priority queues, heap property, insert, ExtractMax, MaxHeapify, and the array/tree dual view.",
    focus: ["max-heap property", "bubble up", "sink down", "priority queue view"],
    review: ["simulate heap operations", "compare to hashing", "trace MaxHeapify"],
    mechanic: "Heap Crane",
    friendHook: "Race to repair a broken heap with the fewest legal swaps.",
    prompts: [
      "Perform successive inserts and extractions.",
      "Watch the tree and array update together.",
      "Explain why the heap supports priority-queue operations efficiently.",
    ],
  },
  {
    id: "bst",
    number: 8,
    title: "Binary Search Trees",
    cluster: "Discrete Structures",
    status: "live",
    summary:
      "Search, insertion order, inorder traversal, successor/predecessor, and delete cases.",
    focus: ["BST property", "search path", "inorder", "delete cases"],
    review: ["build trees from sequences", "trace searches", "perform delete correctly"],
    mechanic: "BST Garden",
    friendHook: "Predict the tree shape before the insert sequence fully resolves.",
    prompts: [
      "Construct the tree from a review-style sequence.",
      "Highlight the search path for a key.",
      "Choose the correct delete case and justify it.",
    ],
  },
  {
    id: "avl",
    number: 9,
    title: "AVL Trees",
    cluster: "Discrete Structures",
    status: "live",
    summary:
      "Balanced BSTs with local height checks and rotation-based repairs.",
    focus: ["balance factor", "height bound", "single rotation", "double rotation"],
    review: ["find the imbalance", "apply legal rotations", "explain logarithmic height"],
    mechanic: "Balance Clinic",
    friendHook: "A friend sends an almost-balanced tree and you rescue it with the minimum moves.",
    prompts: [
      "Identify whether the issue is left-left, left-right, right-left, or right-right.",
      "Apply the correct rotation chain.",
      "Explain why the height stays controlled.",
    ],
  },
  {
    id: "rbt",
    number: 10,
    title: "Red-Black Trees",
    cluster: "Discrete Structures",
    status: "live",
    summary:
      "Color rules, red-red conflicts, black-height intuition, and repair after insertion.",
    focus: ["red-black invariants", "repair cases", "rotations", "recoloring"],
    review: ["perform insertion sequences", "repair violations", "state which invariant broke"],
    mechanic: "Color and Rotate",
    friendHook: "Split the work: one player inserts, the other performs the repair sequence.",
    prompts: [
      "Spot the invalid color pattern.",
      "Repair the tree one legal move at a time.",
      "Track how the root and black-height conditions survive.",
    ],
  },
  {
    id: "graph-foundations",
    number: 11,
    title: "Graph Algorithms",
    cluster: "Visual Signature",
    status: "live",
    summary:
      "Adjacency matrices, adjacency lists, degree, complete graphs, bridges, walks, paths, and trees.",
    focus: ["graph representations", "degree", "bridges", "walk vs path"],
    review: ["translate between views", "reason about structure", "identify tree properties"],
    mechanic: "Graph Sandbox",
    friendHook: "One player draws the graph, the other reconstructs its matrix or adjacency list.",
    prompts: [
      "Switch the same graph between matrix and list view.",
      "Find a bridge by reasoning about connectivity.",
      "Separate walks from simple paths.",
    ],
  },
  {
    id: "mst",
    number: 12,
    title: "Minimum Spanning Tree",
    cluster: "Visual Signature",
    status: "live",
    summary:
      "Use a visible cut boundary and click only safe crossing edges, just like Prim's algorithm in the notes.",
    focus: ["Prim's algorithm", "cut boundary", "safe edges", "MST total weight"],
    review: ["build MSTs by hand", "justify the chosen edge", "reason from the frontier"],
    mechanic: "MST Frontier Forge",
    friendHook: "Co-op mode is natural: one player picks the edge and the other has to defend the cut argument.",
    prompts: [
      "Choose the lightest crossing edge from the current cut.",
      "Avoid edges that stay inside the tree or outside it.",
      "Track total weight as the tree grows.",
    ],
  },
  {
    id: "shortest-path",
    number: 13,
    title: "Shortest Path",
    cluster: "Visual Signature",
    status: "live",
    summary:
      "Settle the next correct vertex and watch tentative distances update in a Dijkstra-style relay.",
    focus: ["tentative distance", "settled vs unsettled", "predecessor tree", "priority queue intuition"],
    review: ["build shortest-path trees", "compare tentative labels", "analyze PQ-based logic"],
    mechanic: "Distance Relay",
    friendHook: "Share the same graph and compare the final predecessor tree, not only the distance numbers.",
    prompts: [
      "Pick the unsettled vertex with minimum tentative distance.",
      "Watch relaxation update both distance and parent.",
      "Read the shortest-path tree from the predecessor arrows.",
    ],
  },
  {
    id: "table-doubling",
    number: 14,
    title: "Table Doubling",
    cluster: "Theory Finish",
    status: "live",
    summary:
      "Amortized insertion, deletion, resizing thresholds, and the half-full vs quarter-full contrast.",
    focus: ["amortized cost", "doubling", "shrinking", "thrashing threshold"],
    review: ["aggregate cost across many operations", "explain stable vs unstable shrinking", "connect to hash-table resizing"],
    mechanic: "Resize Reactor",
    friendHook: "One player picks the shrink rule and the other tries to break it.",
    prompts: [
      "Show why doubling still gives constant amortized insertion.",
      "Show why shrinking at half-full causes churn.",
      "Compare the quarter-full policy against the unstable version.",
    ],
  },
  {
    id: "union-find",
    number: 15,
    title: "Union-Find",
    cluster: "Visual Signature",
    status: "live",
    summary:
      "Linked-list and tree representations, union by height, path compression, and connected components.",
    focus: ["MakeSet / Union / FindSet", "linked-list view", "tree view", "path compression"],
    review: ["run operation sequences", "draw resulting trees", "show compressed forests"],
    mechanic: "Connectivity Lab",
    friendHook: "Send an operation log and ask a friend to predict the final compressed structure.",
    prompts: [
      "Compare the linked-list and tree representations.",
      "Run FindSet with path compression.",
      "Use union by height to keep the forest shallow.",
    ],
  },
  {
    id: "np-completeness",
    number: 16,
    title: "NP-Completeness",
    cluster: "Theory Finish",
    status: "live",
    summary:
      "Decision problems, verification, reductions, and the graph-based gadgets behind 3-SAT and Independent Set.",
    focus: ["P / NP / NP-hard / NP-complete", "verification", "reduction direction", "graph gadgets"],
    review: ["prove membership in P or NP", "state reduction direction correctly", "reason through gadget constructions"],
    mechanic: "Reduction Courtroom",
    friendHook: "One player states a reduction claim and the other has to approve, reject, or fix its direction.",
    prompts: [
      "Separate solving from verifying.",
      "State the reduction direction without flipping it.",
      "Mirror a truth assignment with a graph selection.",
    ],
  },
];

const loopPatterns = [
  {
    id: "triangle",
    title: "Triangular Nest",
    asymptotic: "Theta(n^2)",
    description: "A classic triangular sum where the inner loop length grows with the outer index.",
    prompt: "Rewrite the work as 1 + 2 + ... + n before simplifying.",
    code: [
      "1: function Triangular(n)",
      "2:   count = 0",
      "3:   for i = 1 to n do",
      "4:     for j = 1 to i do",
      "5:       count = count + 1",
      "6:     end for",
      "7:   end for",
      "8: end function",
    ].join("\n"),
    exactCount(n) {
      return sumTo(n);
    },
    exactFormula(n) {
      return `1 + 2 + ... + ${n} = ${n}(${n} + 1)/2 = ${sumTo(n)}`;
    },
    reasoning(n) {
      return [
        `When i = t, the inner loop runs exactly t times.`,
        `So the total work is 1 + 2 + ... + ${n}.`,
        `That sum is ${n}(${n} + 1)/2 = ${sumTo(n)}, which is quadratic.`,
      ];
    },
    trap: "Do not write n^2 immediately. The exact sum matters first, then you simplify to Theta(n^2).",
  },
  {
    id: "sqrt-band",
    title: "Square-Root Band",
    asymptotic: "Theta(n sqrt(n))",
    description: "Each outer iteration pays for a square-root-sized strip, which is easy to underestimate.",
    prompt: "Treat floor(sqrt(n)) like a repeated inner-loop width across all n rows.",
    code: [
      "1: function RootBand(n)",
      "2:   count = 0",
      "3:   for i = 1 to n do",
      "4:     for j = 1 to floor(sqrt(n)) do",
      "5:       count = count + 1",
      "6:     end for",
      "7:   end for",
      "8: end function",
    ].join("\n"),
    exactCount(n) {
      return n * Math.floor(Math.sqrt(n));
    },
    exactFormula(n) {
      return `${n} * floor(sqrt(${n})) = ${this.exactCount(n)}`;
    },
    reasoning(n) {
      return [
        `The outer loop contributes n rows of work.`,
        `The inner loop always runs floor(sqrt(n)) = ${Math.floor(Math.sqrt(n))} times.`,
        `Multiply them: ${n} * ${Math.floor(Math.sqrt(n))} = ${this.exactCount(n)} -> Theta(n sqrt(n)).`,
      ];
    },
    trap: "Students often collapse this to Theta(n) by forgetting that sqrt(n) still grows with n.",
  },
  {
    id: "log-band",
    title: "Log Band",
    asymptotic: "Theta(n log n)",
    description: "A repeated logarithmic-width inner loop across all n outer iterations.",
    prompt: "Count one logarithmic strip, then multiply by the outer loop.",
    code: [
      "1: function LogBand(n)",
      "2:   count = 0",
      "3:   for i = 1 to n do",
      "4:     for j = 1 to floor(log2(n)) do",
      "5:       count = count + 1",
      "6:     end for",
      "7:   end for",
      "8: end function",
    ].join("\n"),
    exactCount(n) {
      return n * floorLog2(n);
    },
    exactFormula(n) {
      return `${n} * floor(log2(${n})) = ${n} * ${floorLog2(n)} = ${this.exactCount(n)}`;
    },
    reasoning(n) {
      return [
        `The inner loop runs floor(log2(n)) = ${floorLog2(n)} times for every outer iteration.`,
        `That makes the total work n * floor(log2(n)).`,
        `At n = ${n}, the exact count is ${this.exactCount(n)}, and asymptotically that is Theta(n log n).`,
      ];
    },
    trap: "Do not confuse a repeated log-width strip with a triangular sum. This is multiplication, not addition.",
  },
  {
    id: "doubling-staircase",
    title: "Doubling Staircase",
    asymptotic: "Theta(n)",
    description: "The outer loop doubles, but the inner work grows with it, creating a geometric series.",
    prompt: "Write the work as 1 + 2 + 4 + ... and use the geometric-series bound.",
    code: [
      "1: function DoublingStaircase(n)",
      "2:   count = 0",
      "3:   for i = 1 to n by doubling do",
      "4:     for j = 1 to i do",
      "5:       count = count + 1",
      "6:     end for",
      "7:   end for",
      "8: end function",
    ].join("\n"),
    exactCount(n) {
      return sumDoublingSeries(n);
    },
    exactFormula(n) {
      return `${formatSeries(doublingTermsUpTo(n))} = ${this.exactCount(n)}`;
    },
    reasoning(n) {
      return [
        `The outer loop values are ${doublingTermsUpTo(n).join(", ")}.`,
        `So the inner-loop costs add as ${formatSeries(doublingTermsUpTo(n))}.`,
        `That geometric series is ${this.exactCount(n)} and stays below 2n, so the runtime is Theta(n).`,
      ];
    },
    trap: "Seeing a doubling loop does not automatically mean Theta(log n). Here each step costs more than the previous one.",
  },
  {
    id: "halving-cascade",
    title: "Halving Cascade",
    asymptotic: "Theta(n)",
    description: "The outer variable shrinks by half, but each round still pays for its current size.",
    prompt: "Treat the work as n + n/2 + n/4 + ... instead of multiplying the loop counts.",
    code: [
      "1: function HalvingCascade(n)",
      "2:   count = 0",
      "3:   for i = n downto 1 by halving do",
      "4:     for j = 1 to i do",
      "5:       count = count + 1",
      "6:     end for",
      "7:   end for",
      "8: end function",
    ].join("\n"),
    exactCount(n) {
      return sumHalvingSeries(n);
    },
    exactFormula(n) {
      return `${formatSeries(halvingTermsFrom(n))} = ${this.exactCount(n)}`;
    },
    reasoning(n) {
      return [
        `The outer loop values are ${halvingTermsFrom(n).join(", ")}.`,
        `That gives the sum ${formatSeries(halvingTermsFrom(n))}.`,
        `The series totals ${this.exactCount(n)} and is bounded by 2n, so the runtime is Theta(n).`,
      ];
    },
    trap: "A halving outer loop does not force Theta(log n) when the inner loop still does linear work each round.",
  },
  {
    id: "triangle-log-tax",
    title: "Triangular With Log Tax",
    asymptotic: "Theta(n^2 log n)",
    description: "A triangular nested loop gets an extra logarithmic factor from a third loop.",
    prompt: "Find the triangular base first, then multiply by the extra log n layer.",
    code: [
      "1: function TriangleLogTax(n)",
      "2:   count = 0",
      "3:   for i = 1 to n do",
      "4:     for j = 1 to i do",
      "5:       for k = 1 to floor(log2(n)) do",
      "6:         count = count + 1",
      "7:       end for",
      "8:     end for",
      "9:   end for",
      "10: end function",
    ].join("\n"),
    exactCount(n) {
      return sumTo(n) * floorLog2(n);
    },
    exactFormula(n) {
      return `floor(log2(${n})) * ${n}(${n} + 1)/2 = ${floorLog2(n)} * ${sumTo(n)} = ${this.exactCount(n)}`;
    },
    reasoning(n) {
      return [
        `The i and j loops contribute the triangular count ${sumTo(n)}.`,
        `Inside each of those iterations, the k loop runs floor(log2(n)) = ${floorLog2(n)} times.`,
        `Multiply them: ${sumTo(n)} * ${floorLog2(n)} = ${this.exactCount(n)} -> Theta(n^2 log n).`,
      ];
    },
    trap: "Do not collapse the extra k-loop into a constant. It adds a real log n factor to the triangular sum.",
  },
];

const loopComplexityChoices = [
  "Theta(log n)",
  "Theta(n)",
  "Theta(n log n)",
  "Theta(n sqrt(n))",
  "Theta(n^2)",
  "Theta(n^2 log n)",
  "Theta(n^3)",
];

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

function floorLog2(n) {
  return Math.max(1, Math.floor(Math.log2(n)));
}

function doublingTermsUpTo(n) {
  const terms = [];
  for (let value = 1; value <= n; value *= 2) {
    terms.push(value);
  }
  return terms;
}

function halvingTermsFrom(n) {
  const terms = [];
  for (let value = n; value >= 1; value = Math.floor(value / 2)) {
    terms.push(value);
    if (value === 1) break;
  }
  return terms;
}

function formatSeries(terms) {
  return terms.join(" + ");
}

function sumDoublingSeries(n) {
  return doublingTermsUpTo(n).reduce((total, value) => total + value, 0);
}

function sumHalvingSeries(n) {
  return halvingTermsFrom(n).reduce((total, value) => total + value, 0);
}

const asymptoticFunctions = [
  { id: "nlogn", label: "n log n", skyline: 56, rank: 4, note: "divide-and-conquer sorting range" },
  { id: "2n", label: "2^n", skyline: 100, rank: 6, note: "exponential search-tree blowup" },
  { id: "n", label: "n", skyline: 36, rank: 3, note: "linear pass through the input" },
  { id: "logn", label: "log n", skyline: 14, rank: 1, note: "binary search territory" },
  { id: "n2", label: "n^2", skyline: 78, rank: 5, note: "quadratic double-loop growth" },
  { id: "n01", label: "n^0.1", skyline: 24, rank: 2, note: "still polynomial, but slower than n" },
];

const asymptoticOrder = ["logn", "n01", "n", "nlogn", "n2", "2n"];

const recurrenceScenarios = [
  {
    id: "binary-search",
    title: "Binary Search",
    prompt: "One recursive call survives, and each level does only constant extra work.",
    code: [
      "BinarySearch(A, x)",
      "  if interval empty: return false",
      "  mid = floor((lo + hi) / 2)",
      "  if A[mid] == x: return true",
      "  recurse on one half",
    ].join("\n"),
    recurrence: "T(n) = T(n/2) + Theta(1)",
    growth: "Theta(log n)",
    expansion: [
      "T(n) = T(n/2) + Theta(1)",
      "     = T(n/4) + Theta(1) + Theta(1)",
      "     = T(n/8) + 3Theta(1)",
      "     = T(n/16) + 4Theta(1)",
      "After k levels: T(n/2^k) + kTheta(1), so k = Theta(log n).",
    ],
    layers: [
      { label: "Level 0", nodes: "1 subproblem of size n", work: "Theta(1)" },
      { label: "Level 1", nodes: "1 subproblem of size n/2", work: "Theta(1)" },
      { label: "Level 2", nodes: "1 subproblem of size n/4", work: "Theta(1)" },
      { label: "Level 3", nodes: "1 subproblem of size n/8", work: "Theta(1)" },
      { label: "Depth", nodes: "repeat until size 1", work: "Theta(log n) levels" },
    ],
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    prompt: "Every level splits in two, but the merge step costs linear work across the whole level.",
    code: [
      "MergeSort(A)",
      "  split A into left and right halves",
      "  recursively sort each half",
      "  merge the two sorted halves",
    ].join("\n"),
    recurrence: "T(n) = 2T(n/2) + Theta(n)",
    growth: "Theta(n log n)",
    expansion: [
      "T(n) = 2T(n/2) + Theta(n)",
      "     = 2[2T(n/4) + Theta(n/2)] + Theta(n)",
      "     = 4T(n/4) + 2Theta(n/2) + Theta(n)",
      "     = 8T(n/8) + 4Theta(n/4) + 2Theta(n/2) + Theta(n)",
      "After k levels: 2^k T(n/2^k) + kTheta(n), so the total is Theta(n log n).",
    ],
    layers: [
      { label: "Level 0", nodes: "1 subproblem of size n", work: "Theta(n)" },
      { label: "Level 1", nodes: "2 subproblems of size n/2", work: "2 · Theta(n/2) = Theta(n)" },
      { label: "Level 2", nodes: "4 subproblems of size n/4", work: "4 · Theta(n/4) = Theta(n)" },
      { label: "Level 3", nodes: "8 subproblems of size n/8", work: "8 · Theta(n/8) = Theta(n)" },
      { label: "Depth", nodes: "log n levels", work: "Theta(n) per level" },
    ],
  },
  {
    id: "fibonacci",
    title: "Fibonacci Recursion",
    prompt: "The recursion branches twice and heavily overlaps, so the tree expands exponentially.",
    code: [
      "Fib(n)",
      "  if n <= 1: return n",
      "  return Fib(n - 1) + Fib(n - 2)",
    ].join("\n"),
    recurrence: "T(n) = T(n-1) + T(n-2) + Theta(1)",
    growth: "Exponential",
    expansion: [
      "T(n) = T(n-1) + T(n-2) + Theta(1)",
      "     = [T(n-2) + T(n-3)] + [T(n-3) + T(n-4)] + Theta(1)",
      "     = T(n-2) + 2T(n-3) + T(n-4) + Theta(1)",
      "     = T(n-3) + 3T(n-4) + 3T(n-5) + T(n-6) + Theta(1)",
      "The call tree keeps branching and repeating subproblems, so naive Fibonacci grows exponentially.",
    ],
    layers: [
      { label: "Level 0", nodes: "1 subproblem", work: "Theta(1)" },
      { label: "Level 1", nodes: "2 subproblems: Fib(n-1), Fib(n-2)", work: "Theta(1) each" },
      { label: "Level 2", nodes: "4 branches with overlap", work: "repeated Fib(n-3) terms appear" },
      { label: "Level 3", nodes: "about 8 branches", work: "tree width keeps expanding" },
      { label: "Shape", nodes: "branching keeps repeating", work: "tree width explodes" },
    ],
  },
];

const recurrenceChoices = recurrenceScenarios.map((scenario) => scenario.recurrence);
const recurrenceGrowthChoices = ["Theta(log n)", "Theta(n)", "Theta(n log n)", "Exponential"];

const probabilityScenario = {
  title: "Sequential Search Event Table",
  prompt: "Target is equally likely to be at positions 1 through 6, or absent entirely.",
  expectedExact: "27/7",
  expectedApprox: "3.86",
  events: [
    { label: "found at position 1", probability: "1/7", value: 1 / 7, comparisons: 1 },
    { label: "found at position 2", probability: "1/7", value: 1 / 7, comparisons: 2 },
    { label: "found at position 3", probability: "1/7", value: 1 / 7, comparisons: 3 },
    { label: "found at position 4", probability: "1/7", value: 1 / 7, comparisons: 4 },
    { label: "found at position 5", probability: "1/7", value: 1 / 7, comparisons: 5 },
    { label: "found at position 6", probability: "1/7", value: 1 / 7, comparisons: 6 },
    { label: "not present", probability: "1/7", value: 1 / 7, comparisons: 6 },
  ],
};

const npScenarios = [
  {
    id: "sat-iset",
    title: "SAT to Independent Set",
    source: "3-SAT",
    target: "Independent Set",
    prompt: "To prove Independent Set NP-hard, the known hard problem has to reduce into it.",
    direction: "3-SAT <=p Independent Set",
    witness:
      "Give a polynomial-time verifier that checks a proposed set of k pairwise non-adjacent vertices.",
    clue: "A clause gadget lets you choose one literal per clause, while edges block inconsistent picks.",
  },
  {
    id: "iset-clique",
    title: "Independent Set to Clique",
    source: "Independent Set",
    target: "Clique",
    prompt: "Once Independent Set is known NP-complete, prove Clique hard by reducing from it.",
    direction: "Independent Set <=p Clique",
    witness:
      "Give a polynomial-time verifier that checks a proposed clique of size k by testing all pairs.",
    clue: "The reduction uses the complement graph, where non-edges become edges.",
  },
  {
    id: "sat-clique",
    title: "SAT to Clique",
    source: "3-SAT",
    target: "Clique",
    prompt: "Each clause becomes a column, and only mutually compatible literals stay connected across columns.",
    direction: "3-SAT <=p Clique",
    witness:
      "Give a polynomial-time verifier that checks a proposed clique of size k by testing all pairs.",
    clue: "A valid clique chooses one literal from each clause and keeps every chosen pair consistent.",
  },
  {
    id: "sat-vcover",
    title: "SAT to Vertex Cover",
    source: "3-SAT",
    target: "Vertex Cover",
    prompt: "To prove Vertex Cover NP-hard, reduce a known hard problem into it and verify a candidate cover in polynomial time.",
    direction: "3-SAT <=p Vertex Cover",
    witness:
      "Give a polynomial-time verifier that checks a proposed vertex set of size k touches every edge.",
    clue: "Variable gadgets force a true/false choice, and clause gadgets require at least one satisfying literal to be covered.",
  },
];

const npDirectionChoices = [
  "3-SAT <=p Independent Set",
  "Independent Set <=p 3-SAT",
  "Independent Set <=p Clique",
  "Clique <=p Independent Set",
  "3-SAT <=p Clique",
  "Clique <=p 3-SAT",
  "3-SAT <=p Vertex Cover",
  "Vertex Cover <=p 3-SAT",
];

const hashSequence = [5, 10, 11, 13, 6, 14, 7];
const quicksortBaseArray = [58, 30, 28, 54, 43, 41, 61, 29, 68, 10, 37];

const heapInitialArray = [84, 53, 70, 50, 43, 12, 66, 36, 27, 38, 4, 10, 11, 59, 32, 30, 21, 14, 6, 2];
const heapActionOptions = [
  { id: "insert", label: "Insert(value)" },
  { id: "extract", label: "ExtractMax()" },
  { id: "heapify", label: "MaxHeapify(node)" },
];

const bstInsertSequence = [58, 30, 28, 54, 43, 41, 61, 29, 68, 10, 37];
const bstQuickKeys = [...bstInsertSequence];
const bstOperationOptions = [
  { id: "insert", label: "Insert" },
  { id: "search", label: "Search" },
  { id: "inorder", label: "Inorder" },
  { id: "successor", label: "Successor" },
  { id: "predecessor", label: "Predecessor" },
  { id: "delete", label: "Delete" },
];

const avlRepairLabels = {
  "single-right": "Single right rotation",
  "single-left": "Single left rotation",
  "left-right": "Left then right rotation",
  "right-left": "Right then left rotation",
};

const avlChallenges = [
  {
    id: "ll",
    title: "Left-Left imbalance",
    sequence: [40, 20, 60, 10, 30, 5],
    correctRepair: "single-right",
    prompt: "A deeper left branch under the left child makes the root too left-heavy.",
    fixedTree: {
      id: "avl-20",
      label: "20",
      left: {
        id: "avl-10",
        label: "10",
        left: { id: "avl-5", label: "5" },
      },
      right: {
        id: "avl-40",
        label: "40",
        left: { id: "avl-30", label: "30" },
        right: { id: "avl-60", label: "60" },
      },
    },
  },
  {
    id: "rr",
    title: "Right-Right imbalance",
    sequence: [20, 10, 40, 30, 50, 60],
    correctRepair: "single-left",
    prompt: "A deeper right branch under the right child makes the root too right-heavy.",
    fixedTree: {
      id: "avl-40",
      label: "40",
      left: {
        id: "avl-20",
        label: "20",
        left: { id: "avl-10", label: "10" },
        right: { id: "avl-30", label: "30" },
      },
      right: {
        id: "avl-50",
        label: "50",
        right: { id: "avl-60", label: "60" },
      },
    },
  },
  {
    id: "lr",
    title: "Left-Right imbalance",
    sequence: [40, 20, 60, 10, 30, 25],
    correctRepair: "left-right",
    prompt: "The root is left-heavy, but the growth happens through the right branch of the left child.",
    fixedTree: {
      id: "avl-30",
      label: "30",
      left: {
        id: "avl-20",
        label: "20",
        left: { id: "avl-10", label: "10" },
        right: { id: "avl-25", label: "25" },
      },
      right: {
        id: "avl-40",
        label: "40",
        right: { id: "avl-60", label: "60" },
      },
    },
  },
  {
    id: "rl",
    title: "Right-Left imbalance",
    sequence: [20, 10, 40, 30, 50, 35],
    correctRepair: "right-left",
    prompt: "The root is right-heavy, but the growth happens through the left branch of the right child.",
    fixedTree: {
      id: "avl-30",
      label: "30",
      left: {
        id: "avl-20",
        label: "20",
        left: { id: "avl-10", label: "10" },
      },
      right: {
        id: "avl-40",
        label: "40",
        left: { id: "avl-35", label: "35" },
        right: { id: "avl-50", label: "50" },
      },
    },
  },
];

const rbtCaseLabels = {
  "case-1": "Case I — Recolor parent, auncle, grandparent",
  "case-2": "Case II — Rotate on parent (triangle → line)",
  "case-3": "Case III — Rotate grandparent + recolor",
};

const rbtCaseSummaries = {
  "case-1":
    "Parent and auncle are both red. Color the parent black, the auncle black, the grandparent red, and repeat on the grandparent.",
  "case-2":
    "Parent is red, auncle is black, and z sits opposite its parent (a triangle). Rotate on the parent, reassign z to the old parent, then continue with Case III.",
  "case-3":
    "Parent is red, auncle is black, and z lines up with its parent. Rotate on the grandparent, color the parent black, and color the sibling red.",
};

const rbtScenarios = [
  {
    id: "uncle-red",
    title: "Red auncle",
    prompt: "Node 22 was just inserted. Click z (the new red node) and pick the case that applies.",
    insertedValue: 22,
    zNodeId: "rbt-22",
    correctCase: "case-1",
    initialTree: {
      id: "rbt-20",
      label: "20",
      variant: "black",
      left: { id: "rbt-10", label: "10", variant: "black" },
      right: {
        id: "rbt-30",
        label: "30",
        variant: "black",
        left: {
          id: "rbt-25",
          label: "25",
          variant: "red",
          left: { id: "rbt-22", label: "22", variant: "red", highlight: true },
        },
        right: { id: "rbt-35", label: "35", variant: "red" },
      },
    },
    fixedTree: {
      id: "rbt-20-f",
      label: "20",
      variant: "black",
      left: { id: "rbt-10-f", label: "10", variant: "black" },
      right: {
        id: "rbt-30-f",
        label: "30",
        variant: "red",
        left: {
          id: "rbt-25-f",
          label: "25",
          variant: "black",
          left: { id: "rbt-22-f", label: "22", variant: "red", highlight: true },
        },
        right: { id: "rbt-35-f", label: "35", variant: "black" },
      },
    },
  },
  {
    id: "ll-black-uncle",
    title: "Left-left, black auncle",
    prompt: "Node 5 was just inserted under a red parent; the auncle is a black NIL. Click z and pick the case.",
    insertedValue: 5,
    zNodeId: "rbt-5",
    correctCase: "case-3",
    initialTree: {
      id: "rbt-50",
      label: "50",
      variant: "black",
      left: {
        id: "rbt-20",
        label: "20",
        variant: "black",
        left: {
          id: "rbt-10",
          label: "10",
          variant: "red",
          left: { id: "rbt-5", label: "5", variant: "red", highlight: true },
        },
      },
      right: { id: "rbt-70", label: "70", variant: "black" },
    },
    fixedTree: {
      id: "rbt-50-f",
      label: "50",
      variant: "black",
      left: {
        id: "rbt-10-f",
        label: "10",
        variant: "black",
        left: { id: "rbt-5-f", label: "5", variant: "red", highlight: true },
        right: { id: "rbt-20-f", label: "20", variant: "red" },
      },
      right: { id: "rbt-70-f", label: "70", variant: "black" },
    },
  },
  {
    id: "lr-black-uncle",
    title: "Left-right, black auncle",
    prompt: "Node 15 was just inserted; it bends right under a red left child. Click z and pick the case.",
    insertedValue: 15,
    zNodeId: "rbt-15",
    correctCase: "case-2",
    initialTree: {
      id: "rbt-50",
      label: "50",
      variant: "black",
      left: {
        id: "rbt-20",
        label: "20",
        variant: "black",
        left: {
          id: "rbt-10",
          label: "10",
          variant: "red",
          right: { id: "rbt-15", label: "15", variant: "red", highlight: true },
        },
      },
      right: { id: "rbt-70", label: "70", variant: "black" },
    },
    fixedTree: {
      id: "rbt-50-f",
      label: "50",
      variant: "black",
      left: {
        id: "rbt-15-f",
        label: "15",
        variant: "black",
        highlight: true,
        left: { id: "rbt-10-f", label: "10", variant: "red" },
        right: { id: "rbt-20-f", label: "20", variant: "red" },
      },
      right: { id: "rbt-70-f", label: "70", variant: "black" },
    },
  },
  {
    id: "rl-black-uncle",
    title: "Right-left, black auncle",
    prompt: "Node 75 was just inserted; it bends left under a red right child. Click z and pick the case.",
    insertedValue: 75,
    zNodeId: "rbt-75",
    correctCase: "case-2",
    initialTree: {
      id: "rbt-50",
      label: "50",
      variant: "black",
      left: { id: "rbt-30", label: "30", variant: "black" },
      right: {
        id: "rbt-70",
        label: "70",
        variant: "black",
        right: {
          id: "rbt-80",
          label: "80",
          variant: "red",
          left: { id: "rbt-75", label: "75", variant: "red", highlight: true },
        },
      },
    },
    fixedTree: {
      id: "rbt-50-f",
      label: "50",
      variant: "black",
      left: { id: "rbt-30-f", label: "30", variant: "black" },
      right: {
        id: "rbt-75-f",
        label: "75",
        variant: "black",
        highlight: true,
        left: { id: "rbt-70-f", label: "70", variant: "red" },
        right: { id: "rbt-80-f", label: "80", variant: "red" },
      },
    },
  },
];

const graphFoundationExamples = [
  {
    id: "dense-five",
    title: "Dense Five",
    description: "A compact graph with no bridges, useful for comparing degree and adjacency representations.",
    defaultVertex: "v2",
    nodes: [
      { id: "v1", x: 110, y: 110 },
      { id: "v2", x: 300, y: 86 },
      { id: "v3", x: 238, y: 220 },
      { id: "v4", x: 430, y: 180 },
      { id: "v5", x: 372, y: 316 },
    ],
    edges: [
      { id: "g1", a: "v1", b: "v2" },
      { id: "g2", a: "v1", b: "v3" },
      { id: "g3", a: "v2", b: "v3" },
      { id: "g4", a: "v2", b: "v4" },
      { id: "g5", a: "v2", b: "v5" },
      { id: "g6", a: "v3", b: "v5" },
      { id: "g7", a: "v4", b: "v5" },
    ],
  },
  {
    id: "bridge-six",
    title: "Bridge Split",
    description: "A single bridge connects two dense pieces, so one cut edge changes connectivity immediately.",
    defaultVertex: "v3",
    nodes: [
      { id: "v1", x: 110, y: 86 },
      { id: "v2", x: 240, y: 86 },
      { id: "v3", x: 176, y: 208 },
      { id: "v4", x: 364, y: 156 },
      { id: "v5", x: 492, y: 106 },
      { id: "v6", x: 492, y: 252 },
    ],
    edges: [
      { id: "g1", a: "v1", b: "v2" },
      { id: "g2", a: "v1", b: "v3" },
      { id: "g3", a: "v2", b: "v3" },
      { id: "g4", a: "v3", b: "v4" },
      { id: "g5", a: "v4", b: "v5" },
      { id: "g6", a: "v4", b: "v6" },
      { id: "g7", a: "v5", b: "v6" },
    ],
  },
  {
    id: "tree-six",
    title: "Tree Only",
    description: "A pure tree example where every edge is a bridge and the adjacency matrix stays sparse.",
    defaultVertex: "v2",
    nodes: [
      { id: "v1", x: 112, y: 98 },
      { id: "v2", x: 256, y: 82 },
      { id: "v3", x: 184, y: 212 },
      { id: "v4", x: 390, y: 94 },
      { id: "v5", x: 334, y: 232 },
      { id: "v6", x: 500, y: 214 },
    ],
    edges: [
      { id: "g1", a: "v1", b: "v2" },
      { id: "g2", a: "v1", b: "v3" },
      { id: "g3", a: "v2", b: "v4" },
      { id: "g4", a: "v2", b: "v5" },
      { id: "g5", a: "v4", b: "v6" },
    ],
  },
  {
    id: "cycle-chord",
    title: "Cycle + Chord",
    description: "A longer cycle with one shortcut edge, good for contrasting walks, paths, and non-bridges.",
    defaultVertex: "v5",
    nodes: [
      { id: "v1", x: 124, y: 142 },
      { id: "v2", x: 218, y: 78 },
      { id: "v3", x: 358, y: 82 },
      { id: "v4", x: 474, y: 148 },
      { id: "v5", x: 390, y: 286 },
      { id: "v6", x: 204, y: 286 },
    ],
    edges: [
      { id: "g1", a: "v1", b: "v2" },
      { id: "g2", a: "v2", b: "v3" },
      { id: "g3", a: "v3", b: "v4" },
      { id: "g4", a: "v4", b: "v5" },
      { id: "g5", a: "v5", b: "v6" },
      { id: "g6", a: "v6", b: "v1" },
      { id: "g7", a: "v2", b: "v5" },
    ],
  },
];

const tableOperationSequence = ["insert", "delete", "insert", "delete", "insert", "delete"];

const unionFindExamples = [
  {
    id: "balanced-seven",
    title: "Balanced Merge",
    description: "A short sequence that creates two trees, joins them, then compresses one deep search path.",
    nodeIds: ["x1", "x2", "x3", "x4", "x5", "x6", "x7"],
    operations: [
      { type: "union", a: "x1", b: "x3", label: "UnionByHeight(x1, x3)" },
      { type: "union", a: "x5", b: "x7", label: "UnionByHeight(x5, x7)" },
      { type: "union", a: "x1", b: "x5", label: "UnionByHeight(x1, x5)" },
      { type: "find", target: "x7", label: "FindSetPathCompress(x7)" },
    ],
  },
  {
    id: "full-fusion",
    title: "Full Fusion",
    description: "Two balanced forests grow separately, then a final union creates one large component before compression.",
    nodeIds: ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8"],
    operations: [
      { type: "union", a: "x1", b: "x2", label: "UnionByHeight(x1, x2)" },
      { type: "union", a: "x3", b: "x4", label: "UnionByHeight(x3, x4)" },
      { type: "union", a: "x1", b: "x3", label: "UnionByHeight(x1, x3)" },
      { type: "union", a: "x5", b: "x6", label: "UnionByHeight(x5, x6)" },
      { type: "union", a: "x7", b: "x8", label: "UnionByHeight(x7, x8)" },
      { type: "union", a: "x5", b: "x7", label: "UnionByHeight(x5, x7)" },
      { type: "union", a: "x1", b: "x5", label: "UnionByHeight(x1, x5)" },
      { type: "find", target: "x8", label: "FindSetPathCompress(x8)" },
    ],
  },
  {
    id: "bridge-components",
    title: "Bridge Components",
    description: "Two partial components form, path compression fires in the middle, and then a late union connects everything.",
    nodeIds: ["x1", "x2", "x3", "x4", "x5", "x6"],
    operations: [
      { type: "union", a: "x1", b: "x4", label: "UnionByHeight(x1, x4)" },
      { type: "union", a: "x2", b: "x5", label: "UnionByHeight(x2, x5)" },
      { type: "union", a: "x1", b: "x2", label: "UnionByHeight(x1, x2)" },
      { type: "find", target: "x5", label: "FindSetPathCompress(x5)" },
      { type: "union", a: "x3", b: "x6", label: "UnionByHeight(x3, x6)" },
      { type: "union", a: "x1", b: "x3", label: "UnionByHeight(x1, x3)" },
      { type: "find", target: "x6", label: "FindSetPathCompress(x6)" },
    ],
  },
  {
    id: "ladder-find",
    title: "Ladder Find",
    description: "A staggered merge pattern makes the late finds visually dramatic because the forest flattens in stages.",
    nodeIds: ["x1", "x2", "x3", "x4", "x5", "x6", "x7"],
    operations: [
      { type: "union", a: "x2", b: "x3", label: "UnionByHeight(x2, x3)" },
      { type: "union", a: "x4", b: "x5", label: "UnionByHeight(x4, x5)" },
      { type: "union", a: "x6", b: "x7", label: "UnionByHeight(x6, x7)" },
      { type: "union", a: "x2", b: "x4", label: "UnionByHeight(x2, x4)" },
      { type: "find", target: "x5", label: "FindSetPathCompress(x5)" },
      { type: "union", a: "x1", b: "x2", label: "UnionByHeight(x1, x2)" },
      { type: "find", target: "x7", label: "FindSetPathCompress(x7)" },
    ],
  },
];

const mstExamples = [
  {
    id: "frontier-a",
    title: "Frontier A",
    description: "The original six-vertex practice graph with a clear Prim frontier at each step.",
    start: "v1",
    nodes: [
      { id: "v1", x: 110, y: 90 },
      { id: "v2", x: 270, y: 72 },
      { id: "v3", x: 212, y: 190 },
      { id: "v4", x: 392, y: 184 },
      { id: "v5", x: 332, y: 324 },
      { id: "v6", x: 520, y: 268 },
    ],
    edges: [
      { id: "m1", a: "v1", b: "v2", weight: 4 },
      { id: "m2", a: "v1", b: "v3", weight: 2 },
      { id: "m3", a: "v2", b: "v3", weight: 1 },
      { id: "m4", a: "v2", b: "v4", weight: 5 },
      { id: "m5", a: "v2", b: "v5", weight: 7 },
      { id: "m6", a: "v3", b: "v4", weight: 8 },
      { id: "m7", a: "v3", b: "v5", weight: 10 },
      { id: "m8", a: "v4", b: "v5", weight: 2 },
      { id: "m9", a: "v4", b: "v6", weight: 6 },
      { id: "m10", a: "v5", b: "v6", weight: 3 },
    ],
  },
  {
    id: "frontier-b",
    title: "Frontier B",
    description: "A five-vertex graph where the frontier shifts from the left side into a low-weight interior edge.",
    start: "v1",
    nodes: [
      { id: "v1", x: 118, y: 110 },
      { id: "v2", x: 248, y: 74 },
      { id: "v3", x: 248, y: 226 },
      { id: "v4", x: 410, y: 132 },
      { id: "v5", x: 498, y: 266 },
    ],
    edges: [
      { id: "m1", a: "v1", b: "v2", weight: 2 },
      { id: "m2", a: "v1", b: "v3", weight: 6 },
      { id: "m3", a: "v2", b: "v3", weight: 3 },
      { id: "m4", a: "v2", b: "v4", weight: 5 },
      { id: "m5", a: "v3", b: "v4", weight: 1 },
      { id: "m6", a: "v3", b: "v5", weight: 7 },
      { id: "m7", a: "v4", b: "v5", weight: 4 },
      { id: "m8", a: "v2", b: "v5", weight: 8 },
    ],
  },
  {
    id: "frontier-c",
    title: "Frontier C",
    description: "This one rewards careful cut checking because the next best edge often comes from a newly added middle vertex.",
    start: "v1",
    nodes: [
      { id: "v1", x: 100, y: 100 },
      { id: "v2", x: 240, y: 74 },
      { id: "v3", x: 212, y: 214 },
      { id: "v4", x: 398, y: 108 },
      { id: "v5", x: 392, y: 270 },
      { id: "v6", x: 548, y: 190 },
    ],
    edges: [
      { id: "m1", a: "v1", b: "v2", weight: 3 },
      { id: "m2", a: "v1", b: "v3", weight: 5 },
      { id: "m3", a: "v2", b: "v3", weight: 4 },
      { id: "m4", a: "v2", b: "v4", weight: 6 },
      { id: "m5", a: "v3", b: "v5", weight: 2 },
      { id: "m6", a: "v4", b: "v5", weight: 1 },
      { id: "m7", a: "v4", b: "v6", weight: 7 },
      { id: "m8", a: "v5", b: "v6", weight: 4 },
      { id: "m9", a: "v2", b: "v6", weight: 9 },
    ],
  },
  {
    id: "frontier-d",
    title: "Frontier D",
    description: "A longer frontier race where Prim has to decide between a near edge and a later interior shortcut.",
    start: "v1",
    nodes: [
      { id: "v1", x: 110, y: 84 },
      { id: "v2", x: 246, y: 74 },
      { id: "v3", x: 212, y: 210 },
      { id: "v4", x: 388, y: 118 },
      { id: "v5", x: 384, y: 286 },
      { id: "v6", x: 540, y: 214 },
    ],
    edges: [
      { id: "m1", a: "v1", b: "v2", weight: 1 },
      { id: "m2", a: "v1", b: "v3", weight: 4 },
      { id: "m3", a: "v2", b: "v3", weight: 2 },
      { id: "m4", a: "v2", b: "v4", weight: 7 },
      { id: "m5", a: "v3", b: "v5", weight: 3 },
      { id: "m6", a: "v4", b: "v5", weight: 5 },
      { id: "m7", a: "v4", b: "v6", weight: 6 },
      { id: "m8", a: "v5", b: "v6", weight: 8 },
      { id: "m9", a: "v3", b: "v6", weight: 9 },
    ],
  },
];

const dijkstraExamples = [
  {
    id: "relay-a",
    title: "Relay A",
    description: "The original shortest-path relay with one strong shortcut through the lower branch.",
    start: "v1",
    nodes: [
      { id: "v1", x: 96, y: 124 },
      { id: "v2", x: 274, y: 78 },
      { id: "v3", x: 238, y: 232 },
      { id: "v4", x: 418, y: 170 },
      { id: "v5", x: 418, y: 326 },
      { id: "v6", x: 576, y: 240 },
    ],
    edges: [
      { id: "d1", a: "v1", b: "v2", weight: 4 },
      { id: "d2", a: "v1", b: "v3", weight: 1 },
      { id: "d3", a: "v2", b: "v4", weight: 5 },
      { id: "d4", a: "v2", b: "v5", weight: 7 },
      { id: "d5", a: "v3", b: "v4", weight: 2 },
      { id: "d6", a: "v3", b: "v5", weight: 8 },
      { id: "d7", a: "v4", b: "v5", weight: 2 },
      { id: "d8", a: "v4", b: "v6", weight: 6 },
      { id: "d9", a: "v5", b: "v6", weight: 1 },
    ],
  },
  {
    id: "relay-b",
    title: "Relay B",
    description: "A forked five-vertex graph where one local improvement changes the whole queue ordering.",
    start: "v1",
    nodes: [
      { id: "v1", x: 118, y: 140 },
      { id: "v2", x: 246, y: 78 },
      { id: "v3", x: 250, y: 232 },
      { id: "v4", x: 422, y: 154 },
      { id: "v5", x: 516, y: 286 },
    ],
    edges: [
      { id: "d1", a: "v1", b: "v2", weight: 2 },
      { id: "d2", a: "v1", b: "v3", weight: 5 },
      { id: "d3", a: "v2", b: "v3", weight: 1 },
      { id: "d4", a: "v2", b: "v4", weight: 4 },
      { id: "d5", a: "v3", b: "v4", weight: 2 },
      { id: "d6", a: "v4", b: "v5", weight: 3 },
      { id: "d7", a: "v2", b: "v5", weight: 8 },
    ],
  },
  {
    id: "relay-c",
    title: "Relay C",
    description: "This example makes the queue revisit a middle hub after a cheaper route appears through the left branch.",
    start: "v1",
    nodes: [
      { id: "v1", x: 100, y: 120 },
      { id: "v2", x: 248, y: 82 },
      { id: "v3", x: 232, y: 238 },
      { id: "v4", x: 418, y: 122 },
      { id: "v5", x: 432, y: 286 },
      { id: "v6", x: 582, y: 212 },
    ],
    edges: [
      { id: "d1", a: "v1", b: "v2", weight: 3 },
      { id: "d2", a: "v1", b: "v3", weight: 1 },
      { id: "d3", a: "v3", b: "v2", weight: 1 },
      { id: "d4", a: "v2", b: "v4", weight: 4 },
      { id: "d5", a: "v3", b: "v5", weight: 6 },
      { id: "d6", a: "v4", b: "v5", weight: 1 },
      { id: "d7", a: "v4", b: "v6", weight: 5 },
      { id: "d8", a: "v5", b: "v6", weight: 2 },
    ],
  },
  {
    id: "relay-d",
    title: "Relay D",
    description: "The start vertex moves, so you have to rebuild the shortest-path tree from a different source.",
    start: "v2",
    nodes: [
      { id: "v1", x: 96, y: 118 },
      { id: "v2", x: 240, y: 80 },
      { id: "v3", x: 224, y: 238 },
      { id: "v4", x: 404, y: 90 },
      { id: "v5", x: 418, y: 254 },
      { id: "v6", x: 578, y: 176 },
    ],
    edges: [
      { id: "d1", a: "v1", b: "v2", weight: 6 },
      { id: "d2", a: "v1", b: "v3", weight: 3 },
      { id: "d3", a: "v2", b: "v3", weight: 2 },
      { id: "d4", a: "v2", b: "v4", weight: 4 },
      { id: "d5", a: "v3", b: "v5", weight: 5 },
      { id: "d6", a: "v4", b: "v5", weight: 1 },
      { id: "d7", a: "v4", b: "v6", weight: 7 },
      { id: "d8", a: "v5", b: "v6", weight: 2 },
    ],
  },
];

const state = {
  selectedUnitId: "mst",
  asymptotic: {
    selectedIds: [],
    feedback: "Click the functions from slowest growth to fastest growth.",
    feedbackTone: "neutral",
  },
  loop: {
    patternId: "triangle",
    n: 10,
    guess: "",
    feedback: "Pick a pattern, choose n, and guess the asymptotic class before checking yourself.",
    feedbackTone: "neutral",
  },
  hashing: {
    mode: "chained",
    step: 0,
  },
  recurrence: {
    scenarioId: "merge-sort",
    selectedRecurrence: "",
    selectedGrowth: "",
    submitted: false,
    feedback: "Choose the matching recurrence and the final asymptotic class.",
    feedbackTone: "neutral",
  },
  probabilistic: {
    selectedBest: "",
    selectedWorst: "",
    selectedExpected: "",
    feedback: "Use the event table to pin down the best, worst, and expected comparisons.",
    feedbackTone: "neutral",
  },
  quicksort: {
    pivotMode: "median",
  },
  heap: createInitialHeapState(),
  bst: createInitialBstState(),
  avl: createInitialAvlState(avlChallenges[0].id),
  rbt: {
    scenarioId: "uncle-red",
    selectedNodeId: "",
    selectedCase: "",
    showSolution: false,
    feedback: "Click the newly inserted red node z, then pick the case (I, II, or III) that applies.",
    feedbackTone: "neutral",
  },
  graphFoundations: {
    exampleId: graphFoundationExamples[0].id,
    selectedVertex: graphFoundationExamples[0].defaultVertex,
  },
  tableDoubling: createInitialTableDoublingState(),
  unionFind: {
    exampleId: unionFindExamples[0].id,
    step: 0,
    view: "forest",
  },
  np: {
    scenarioId: "sat-iset",
    selectedDirection: "",
    selectedWitness: "",
    feedback: "Pick the correct reduction direction and the evidence that the target problem is in NP.",
    feedbackTone: "neutral",
  },
  mst: createInitialMstState(mstExamples[0].id),
  dijkstra: createInitialDijkstraState(dijkstraExamples[0].id),
};

const graphPriorityUnitIds = new Set(["graph-foundations", "mst", "shortest-path", "union-find"]);

function createInitialMstState(exampleId) {
  const graph = getMstExample(exampleId);
  return {
    exampleId: graph.id,
    selectedEdgeIds: [],
    feedback: `Start at ${graph.start}. Click the minimum-weight edge crossing from the current tree to the outside set.`,
    feedbackTone: "neutral",
    flashEdgeId: "",
  };
}

function createInitialDijkstraState(exampleId) {
  const graph = getDijkstraExample(exampleId);
  const distances = buildLookup(graph.nodes, Infinity);
  const predecessors = buildLookup(graph.nodes, "");
  const settled = [graph.start];
  distances[graph.start] = 0;
  relaxNeighbors(graph.start, distances, predecessors, settled, graph);
  return {
    exampleId: graph.id,
    distances,
    predecessors,
    settled,
    lastSettledEdgeId: "",
    feedback: `${graph.start} is settled. Click the unsettled vertex with the smallest tentative distance.`,
    feedbackTone: "neutral",
  };
}

function createInitialHeapState() {
  return {
    array: [],
    selectedIndex: -1,
    action: "insert",
    insertValue: 50,
    history: ["Heap is empty. Insert values to build it."],
    extracted: [],
    feedback: "Insert values one at a time with Insert, then try ExtractMax and MaxHeapify.",
    feedbackTone: "neutral",
  };
}

function createInitialBstState() {
  return {
    root: null,
    operation: "insert",
    targetKey: bstInsertSequence[0],
    history: ["Start with an empty BST and build it yourself from the packet sequence."],
    feedback: "Start with Insert, then use Search, Inorder, Successor, Predecessor, and Delete on the tree you build.",
    feedbackTone: "neutral",
    lastPath: [],
    highlightKeys: [],
    resultSummary: "The tree is empty. Insert a key to begin.",
  };
}

function createInitialAvlState(caseId = avlChallenges[0].id) {
  const challenge = avlChallenges.find((item) => item.id === caseId) || avlChallenges[0];
  return {
    caseId: challenge.id,
    root: buildBSTFromValues(challenge.sequence),
    lastOperation: "None yet",
    history: ["Drag a child node across its parent to perform a legal rotation."],
    feedback: "Drag a left child across its parent for a right rotation, or a right child across its parent for a left rotation.",
    feedbackTone: "neutral",
  };
}

function createInitialTableDoublingState() {
  return {
    shrinkMode: "quarter",
    items: [],
    capacity: 2,
    minCapacity: 2,
    nextValue: 1,
    totalCost: 0,
    resizeCount: 0,
    history: ["Start empty: capacity 2, 0 items. Click Insert to grow it."],
    lastCost: 0,
  };
}

function relaxNeighbors(vertexId, distances, predecessors, settled, graph = getDijkstraExample()) {
  const settledSet = new Set(settled);
  const neighbors = graph.edges.filter((edge) => edge.a === vertexId || edge.b === vertexId);
  for (const edge of neighbors) {
    const other = edge.a === vertexId ? edge.b : edge.a;
    if (settledSet.has(other)) continue;
    const candidate = distances[vertexId] + edge.weight;
    if (candidate < distances[other]) {
      distances[other] = candidate;
      predecessors[other] = vertexId;
    }
  }
}

function render() {
  renderTower();
  renderSummary();
  renderLab();
}

function renderTower() {
  const mount = document.querySelector("#tower-list");
  mount.innerHTML = units
    .map((unit) => {
      const isActive = unit.id === state.selectedUnitId ? "is-active" : "";
      return `
        <button class="tower-button ${isActive}" data-unit-id="${unit.id}">
          <div class="tower-row">
            <span class="tower-number">${unit.number}</span>
            <span class="tower-status ${unit.status}">${unit.status}</span>
          </div>
          <div class="tower-title">${unit.title}</div>
          <div class="tower-cluster">${unit.cluster}</div>
        </button>
      `;
    })
    .join("");

  mount.querySelectorAll("[data-unit-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedUnitId = button.dataset.unitId;
      render();
    });
  });
}

function renderSummary() {
  const unit = getSelectedUnit();
  document.querySelector("#unit-kicker").textContent = `Level ${unit.number} · ${unit.cluster}`;
  document.querySelector("#unit-title").textContent = unit.title;
  document.querySelector("#unit-summary").textContent = unit.summary;
  document.querySelector("#unit-badge").textContent = unit.status === "live" ? "Live lab in this checkpoint" : "Planned next";
  document.querySelector("#unit-mechanic").textContent = unit.mechanic;
  document.querySelector("#unit-friend-hook").textContent = unit.friendHook;
  document.querySelector("#lab-caption").textContent =
    unit.status === "live"
      ? graphPriorityUnitIds.has(unit.id)
        ? "This floor stays visual-first because the graph structure is the main thing to study."
        : "This floor now reads like a review guide first, with a smaller self-check underneath."
      : "This floor is mapped and framed, but the lab is still queued behind the current checkpoint.";

  const focusMount = document.querySelector("#unit-focus");
  focusMount.innerHTML = unit.focus.map((item) => `<span class="chip">${item}</span>`).join("");

  const reviewMount = document.querySelector("#unit-review");
  reviewMount.innerHTML = unit.review.map((item) => `<li>${item}</li>`).join("");
}

function renderLab() {
  const unit = getSelectedUnit();
  const mount = document.querySelector("#lab-mount");
  if (unit.id === "asymptotic") {
    mount.innerHTML = renderAsymptoticLab();
    bindAsymptoticLab();
    return;
  }
  if (unit.id === "loop-analysis") {
    mount.innerHTML = renderLoopLab();
    bindLoopLab();
    return;
  }
  if (unit.id === "recurrence") {
    mount.innerHTML = renderRecurrenceLab();
    bindRecurrenceLab();
    return;
  }
  if (unit.id === "probabilistic") {
    mount.innerHTML = renderProbabilisticLab();
    bindProbabilisticLab();
    return;
  }
  if (unit.id === "hashing") {
    mount.innerHTML = renderHashLab();
    bindHashLab();
    return;
  }
  if (unit.id === "quicksort") {
    mount.innerHTML = renderQuicksortLab();
    bindQuicksortLab();
    return;
  }
  if (unit.id === "heaps") {
    mount.innerHTML = renderHeapLab();
    bindHeapLab();
    return;
  }
  if (unit.id === "bst") {
    mount.innerHTML = renderBstLab();
    bindBstLab();
    return;
  }
  if (unit.id === "avl") {
    mount.innerHTML = renderAvlLab();
    bindAvlLab();
    return;
  }
  if (unit.id === "rbt") {
    mount.innerHTML = renderRbtLab();
    bindRbtLab();
    return;
  }
  if (unit.id === "graph-foundations") {
    mount.innerHTML = renderGraphFoundationsLab();
    bindGraphFoundationsLab();
    return;
  }
  if (unit.id === "mst") {
    mount.innerHTML = renderMstLab();
    bindMstLab();
    return;
  }
  if (unit.id === "shortest-path") {
    mount.innerHTML = renderDijkstraLab();
    bindDijkstraLab();
    return;
  }
  if (unit.id === "table-doubling") {
    mount.innerHTML = renderTableDoublingLab();
    bindTableDoublingLab();
    return;
  }
  if (unit.id === "union-find") {
    mount.innerHTML = renderUnionFindLab();
    bindUnionFindLab();
    return;
  }
  if (unit.id === "np-completeness") {
    mount.innerHTML = renderNpLab();
    bindNpLab();
    return;
  }

  mount.innerHTML = `
    <article class="summary-card planned-card">
      <h3>${unit.mechanic}</h3>
      <p>${unit.summary}</p>
      <div class="chip-wrap">
        ${unit.focus.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
      <ul class="prompt-list">
        ${unit.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderAsymptoticLab() {
  const picked = new Set(state.asymptotic.selectedIds);
  const chain = state.asymptotic.selectedIds.map((id) => getAsymptoticFunction(id).label).join(" -> ");
  const nextId = asymptoticOrder[state.asymptotic.selectedIds.length] || "";
  const nextLabel = nextId ? getAsymptoticFunction(nextId).label : "complete";
  const studyCards = buildNonGraphStudyCards("asymptotic", { chain, nextLabel });

  return `
    ${renderStudyGuideSection("Asymptotic Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Self-check Order</h3>
        <p>Pick the next-slowest function. This matches the review style where you sort growth rates without plugging in giant numbers.</p>
        <div class="control-row">
          <button id="asymptotic-reset">Reset Order</button>
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Placed correctly</span>
            <strong>${state.asymptotic.selectedIds.length} / ${asymptoticOrder.length}</strong>
          </div>
          <div class="mini-stat">
            <span>Next target</span>
            <strong>${nextLabel}</strong>
          </div>
          <div class="mini-stat">
            <span>Current chain</span>
            <strong>${chain || "start here"}</strong>
          </div>
        </div>
        <div class="feedback ${state.asymptotic.feedbackTone}">${state.asymptotic.feedback}</div>
      </article>
      <article class="lab-card">
        <h3>Order Notes</h3>
        <div class="graph-list">
          ${asymptoticOrder
            .map((id, index) => {
              const item = getAsymptoticFunction(id);
              return `
                <div class="graph-list-item ${picked.has(id) ? "is-selected" : ""}">
                  <strong>${index + 1}. ${item.label}</strong>
                  <span>${item.note}</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
    </div>
    <article class="graph-card">
      <h3>Quick Drill</h3>
      <div class="growth-grid">
        ${asymptoticFunctions
          .map((item) => {
            const done = picked.has(item.id) ? "is-done" : "";
            const next = !picked.has(item.id) && item.id === nextId ? "is-next" : "";
            return `
              <button class="growth-card ${done} ${next}" data-growth-id="${item.id}">
                <span class="partition-label">${item.label}</span>
                <div class="growth-bar-shell">
                  <div class="growth-bar" style="height:${item.skyline}%"></div>
                </div>
                <strong>${picked.has(item.id) ? "locked in" : "choose"}</strong>
              </button>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function bindAsymptoticLab() {
  document.querySelectorAll("[data-growth-id]").forEach((button) => {
    button.addEventListener("click", () => {
      handleAsymptoticChoice(button.dataset.growthId);
    });
  });
  document.querySelector("#asymptotic-reset").addEventListener("click", () => {
    state.asymptotic.selectedIds = [];
    state.asymptotic.feedback = "Reset. Start again from the slowest-growing function.";
    state.asymptotic.feedbackTone = "neutral";
    render();
  });
}

function handleAsymptoticChoice(id) {
  if (state.asymptotic.selectedIds.includes(id)) return;
  const expectedId = asymptoticOrder[state.asymptotic.selectedIds.length];
  if (id === expectedId) {
    state.asymptotic.selectedIds.push(id);
    if (state.asymptotic.selectedIds.length === asymptoticOrder.length) {
      state.asymptotic.feedback = "Complete. You built the full growth hierarchy from logarithmic up to exponential.";
      state.asymptotic.feedbackTone = "";
    } else {
      state.asymptotic.feedback = `${getAsymptoticFunction(id).label} is in the correct spot. Keep climbing the hierarchy.`;
      state.asymptotic.feedbackTone = "";
    }
  } else {
    state.asymptotic.feedback = `Not yet. ${getAsymptoticFunction(expectedId).label} still grows more slowly than ${getAsymptoticFunction(id).label}.`;
    state.asymptotic.feedbackTone = "error";
  }
  render();
}

function renderRecurrenceLab() {
  const scenario = getRecurrenceScenario();
  const studyCards = buildNonGraphStudyCards("recurrence", { scenario });
  const submitted = state.recurrence.submitted;
  return `
    ${renderStudyGuideSection("Recurrence Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Self-check Match</h3>
        <p>${scenario.prompt}</p>
        <div class="control-row">
          ${recurrenceScenarios
            .map(
              (item) => `
                <button data-recurrence-scenario="${item.id}" class="${item.id === scenario.id ? "primary" : ""}">
                  ${item.title}
                </button>
              `
            )
            .join("")}
        </div>
        <p class="partition-label" style="margin-top:16px;">Pick the recurrence</p>
        <div class="chip-wrap">
          ${recurrenceChoices
            .map(
              (choice) => `
                <button data-recurrence-choice="${choice}" class="${state.recurrence.selectedRecurrence === choice ? "primary" : ""}">
                  ${choice}
                </button>
              `
            )
            .join("")}
        </div>
        <p class="partition-label" style="margin-top:16px;">Pick the final growth</p>
        <div class="chip-wrap">
          ${recurrenceGrowthChoices
            .map(
              (choice) => `
                <button data-recurrence-growth="${choice}" class="${state.recurrence.selectedGrowth === choice ? "primary" : ""}">
                  ${choice}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="control-row" style="margin-top:12px;">
          <button class="primary" id="recurrence-check">Check Match</button>
          <button id="recurrence-show">Show Match</button>
        </div>
        <div class="feedback ${state.recurrence.feedbackTone}">${state.recurrence.feedback}</div>
      </article>
      <article class="lab-card">
        <h3>Worked Pattern</h3>
        <pre class="code-block">${scenario.code}</pre>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Scenario</span>
            <strong>${scenario.title}</strong>
          </div>
          <div class="mini-stat">
            <span>${submitted ? "Correct recurrence" : "Your recurrence"}</span>
            <strong>${submitted ? scenario.recurrence : state.recurrence.selectedRecurrence || "hidden until submit"}</strong>
          </div>
          <div class="mini-stat">
            <span>${submitted ? "Correct class" : "Your class"}</span>
            <strong>${submitted ? scenario.growth : state.recurrence.selectedGrowth || "hidden until submit"}</strong>
          </div>
        </div>
      </article>
    </div>
    ${
      submitted
        ? `
          <div class="tree-dual">
            <article class="graph-card">
              <h3>Substitution Build</h3>
              <pre class="code-block">${scenario.expansion.join("\n")}</pre>
            </article>
            <article class="graph-card">
              <h3>Shape Snapshot</h3>
              <div class="recursion-tree">
                ${scenario.layers
                  .map(
                    (layer) => `
                      <div class="recursion-level">
                        <strong>${layer.label}</strong>
                        <span>${layer.nodes}</span>
                        <span>${layer.work}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </article>
          </div>
        `
        : `
          <article class="graph-card">
            <h3>Shape Snapshot</h3>
            <div class="tree-placeholder">
              Submit your match first. Then this floor reveals the first few substitution steps and the recursion shape.
            </div>
          </article>
        `
    }
  `;
}

function bindRecurrenceLab() {
  document.querySelectorAll("[data-recurrence-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      state.recurrence.scenarioId = button.dataset.recurrenceScenario;
      state.recurrence.selectedRecurrence = "";
      state.recurrence.selectedGrowth = "";
      state.recurrence.submitted = false;
      state.recurrence.feedback = "Scenario changed. Match the recurrence and the final class again.";
      state.recurrence.feedbackTone = "neutral";
      render();
    });
  });
  document.querySelectorAll("[data-recurrence-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      state.recurrence.selectedRecurrence = button.dataset.recurrenceChoice;
      render();
    });
  });
  document.querySelectorAll("[data-recurrence-growth]").forEach((button) => {
    button.addEventListener("click", () => {
      state.recurrence.selectedGrowth = button.dataset.recurrenceGrowth;
      render();
    });
  });
  document.querySelector("#recurrence-check").addEventListener("click", () => {
    const scenario = getRecurrenceScenario();
    if (!state.recurrence.selectedRecurrence || !state.recurrence.selectedGrowth) {
      state.recurrence.feedback = "Choose both the recurrence and the final asymptotic class first.";
      state.recurrence.feedbackTone = "error";
      render();
      return;
    }
    state.recurrence.submitted = true;
    if (
      state.recurrence.selectedRecurrence === scenario.recurrence &&
      state.recurrence.selectedGrowth === scenario.growth
    ) {
      state.recurrence.feedback = "Correct. The worked expansion is now visible below.";
      state.recurrence.feedbackTone = "";
    } else {
      state.recurrence.feedback = "Not quite. Compare your choice to the worked expansion below.";
      state.recurrence.feedbackTone = "error";
    }
    render();
  });
  document.querySelector("#recurrence-show").addEventListener("click", () => {
    const scenario = getRecurrenceScenario();
    state.recurrence.selectedRecurrence = scenario.recurrence;
    state.recurrence.selectedGrowth = scenario.growth;
    state.recurrence.submitted = true;
    state.recurrence.feedback = "Revealed. Study the unrolling and the tree below.";
    state.recurrence.feedbackTone = "neutral";
    render();
  });
}

function renderProbabilisticLab() {
  const studyCards = buildNonGraphStudyCards("probabilistic");
  return renderStudyGuideSection("Probability Study Guide", studyCards);
}

function bindProbabilisticLab() {}

function renderNpLab() {
  const studyCards = buildNonGraphStudyCards("np-completeness");
  return renderStudyGuideSection("NP-Completeness Study Guide", studyCards);
}

function bindNpLab() {}

function renderLoopLab() {
  const pattern = getLoopPattern();
  const n = state.loop.n;
  const studyCards = buildNonGraphStudyCards("loop-analysis", {
    pattern,
    n,
    exactCount: pattern.exactCount(n),
    exactFormula: pattern.exactFormula(n),
  });

  return `
    ${renderStudyGuideSection("Loop Analysis Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Challenge Set</h3>
        <div class="control-row">
          ${loopPatterns
            .map(
              (item) => `
                <button class="chip-button ${item.id === pattern.id ? "is-active" : ""}" data-loop-pattern="${item.id}">
                  ${item.title}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="slider-row">
          <label for="loop-n">Input size n: <strong>${n}</strong></label>
          <input id="loop-n" type="range" min="4" max="18" value="${n}" />
        </div>
        <div class="guess-grid">
          ${loopComplexityChoices
            .map(
              (guess) => `
                <button data-loop-guess="${guess}" class="${state.loop.guess === guess ? "primary" : ""}">
                  ${guess}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="control-row" style="margin-top: 12px;">
          <button class="primary" id="check-loop-guess">Check Guess</button>
          <button id="reset-loop-guess">Reset</button>
        </div>
        <div class="feedback ${state.loop.feedbackTone}">${state.loop.feedback}</div>
      </article>
      <article class="lab-card">
        <h3>Current Snippet</h3>
        <p>${pattern.description}</p>
        <pre class="code-block">${pattern.code}</pre>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Prompt</span>
            <strong>${pattern.prompt}</strong>
          </div>
          <div class="mini-stat">
            <span>Sample n</span>
            <strong>${n}</strong>
          </div>
          <div class="mini-stat">
            <span>Exact count</span>
            <strong>${pattern.exactCount(n)}</strong>
          </div>
        </div>
      </article>
    </div>
    <div class="tree-dual">
      <article class="graph-card">
        <h3>Counting Path</h3>
        <div class="graph-list">
          ${pattern.reasoning(n)
            .map(
              (step, index) => `
                <div class="graph-list-item">
                  <strong>Step ${index + 1}</strong>
                  <span>${step}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
      <article class="graph-card">
        <h3>Exam Notes</h3>
        <div class="graph-list">
          <div class="graph-list-item">
            <strong>Exact formula</strong>
            <span>${pattern.exactFormula(n)}</span>
          </div>
          <div class="graph-list-item">
            <strong>Asymptotic class</strong>
            <span>${pattern.asymptotic}</span>
          </div>
          <div class="graph-list-item">
            <strong>Common mistake</strong>
            <span>${pattern.trap}</span>
          </div>
        </div>
      </article>
    </div>
    <article class="graph-card">
      <h3>Algorithm Bank</h3>
      <div class="graph-list">
        ${loopPatterns
          .map(
            (item) => `
              <div class="graph-list-item ${item.id === pattern.id ? "is-selected" : ""}">
                <strong>${item.title}</strong>
                <span>${item.prompt}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function bindLoopLab() {
  document.querySelectorAll("[data-loop-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      state.loop.patternId = button.dataset.loopPattern;
      state.loop.guess = "";
      state.loop.feedback = "Pattern changed. Guess the class again before checking.";
      state.loop.feedbackTone = "neutral";
      render();
    });
  });

  document.querySelector("#loop-n").addEventListener("input", (event) => {
    state.loop.n = Number(event.target.value);
    render();
  });

  document.querySelectorAll("[data-loop-guess]").forEach((button) => {
    button.addEventListener("click", () => {
      state.loop.guess = button.dataset.loopGuess;
      render();
    });
  });

  document.querySelector("#check-loop-guess").addEventListener("click", () => {
    const pattern = getLoopPattern();
    if (!state.loop.guess) {
      state.loop.feedback = "Choose a class first. The point of this floor is to commit before revealing.";
      state.loop.feedbackTone = "error";
      render();
      return;
    }
    if (state.loop.guess === pattern.asymptotic) {
      state.loop.feedback = `Correct. ${pattern.title} simplifies to ${pattern.asymptotic}.`;
      state.loop.feedbackTone = "";
    } else {
      state.loop.feedback = `Not this time. ${pattern.title} is ${pattern.asymptotic}, not ${state.loop.guess}.`;
      state.loop.feedbackTone = "error";
    }
    render();
  });

  document.querySelector("#reset-loop-guess").addEventListener("click", () => {
    state.loop.guess = "";
    state.loop.feedback = "Guess cleared. Rebuild the exact sum or product before simplifying.";
    state.loop.feedbackTone = "neutral";
    render();
  });
}

function renderHashLab() {
  const sim = buildHashSimulation(state.hashing.mode, state.hashing.step);
  const explanation =
    state.hashing.mode === "chained"
      ? "h(K) = 2K mod 7. Collisions stay in the same bucket and extend the linked list."
      : "h(K, j) = (2K + 3j) mod 7. On each collision, increment j and re-probe until an empty slot appears.";
  const studyCards = buildNonGraphStudyCards("hashing", {
    mode: state.hashing.mode,
    nextKey: hashSequence[state.hashing.step] === undefined ? "done" : hashSequence[state.hashing.step],
  });

  return `
    ${renderStudyGuideSection("Hashing Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Worked Example</h3>
        <div class="control-row">
          <button data-hash-mode="chained" class="${state.hashing.mode === "chained" ? "primary" : ""}">Chained</button>
          <button data-hash-mode="open" class="${state.hashing.mode === "open" ? "primary" : ""}">Open Address</button>
        </div>
        <p>${explanation}</p>
        <div class="control-row" style="margin-top: 12px;">
          <button class="primary" id="hash-step">Insert Next Key</button>
          <button id="hash-run-all">Run All</button>
          <button id="hash-reset">Reset</button>
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Keys inserted</span>
            <strong>${state.hashing.step}</strong>
          </div>
          <div class="mini-stat">
            <span>Keys remaining</span>
            <strong>${hashSequence.length - state.hashing.step}</strong>
          </div>
          <div class="mini-stat">
            <span>Next key</span>
            <strong>${hashSequence[state.hashing.step] === undefined ? "done" : hashSequence[state.hashing.step]}</strong>
          </div>
        </div>
      </article>
      <article class="lab-card">
        <h3>Packet Sequence</h3>
        <p>Use the exact insert order from the review packet to compare chained hashing and open addressing directly.</p>
        <div class="chip-wrap">
          ${hashSequence.map((key, index) => `<span class="chip">${index + 1}. Insert ${key}</span>`).join("")}
        </div>
        <ol class="history-log">
          ${sim.history.map((line) => `<li>${line}</li>`).join("")}
        </ol>
      </article>
    </div>
    <article class="graph-card">
      <h3>${state.hashing.mode === "chained" ? "Chained Buckets" : "Open-Address Table"}</h3>
      <div class="hash-table">
        ${sim.tableMarkup}
      </div>
    </article>
  `;
}

function bindHashLab() {
  document.querySelectorAll("[data-hash-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.hashing.mode = button.dataset.hashMode;
      state.hashing.step = 0;
      render();
    });
  });

  document.querySelector("#hash-step").addEventListener("click", () => {
    state.hashing.step = Math.min(hashSequence.length, state.hashing.step + 1);
    render();
  });

  document.querySelector("#hash-run-all").addEventListener("click", () => {
    state.hashing.step = hashSequence.length;
    render();
  });

  document.querySelector("#hash-reset").addEventListener("click", () => {
    state.hashing.step = 0;
    render();
  });
}

function buildHashSimulation(mode, steps) {
  if (mode === "chained") return buildChainedSimulation(steps);
  return buildOpenSimulation(steps);
}

function buildChainedSimulation(steps) {
  const table = Array.from({ length: 7 }, () => []);
  const history = [];
  for (let index = 0; index < steps; index += 1) {
    const key = hashSequence[index];
    const bucket = (2 * key) % 7;
    table[bucket].push(key);
    history.push(`${key} hashes to bucket ${bucket}, so it appends to that chain.`);
  }

  const tableMarkup = table
    .map(
      (bucket, index) => `
        <div class="hash-bucket">
          <div class="bucket-index">H[${index}]</div>
          <div class="bucket-content">
            ${bucket.length ? bucket.map((key) => `<span class="token">${key}</span>`).join("") : '<span class="token ghost">empty</span>'}
          </div>
        </div>
      `
    )
    .join("");

  return { history, tableMarkup };
}

function buildOpenSimulation(steps) {
  const table = Array.from({ length: 7 }, () => "");
  const history = [];
  for (let index = 0; index < steps; index += 1) {
    const key = hashSequence[index];
    const probes = [];
    for (let j = 0; j < 7; j += 1) {
      const slot = (2 * key + 3 * j) % 7;
      probes.push(slot);
      if (!table[slot]) {
        table[slot] = key;
        history.push(
          probes.length === 1
            ? `${key} probes j=0 and lands at slot ${slot}.`
            : `${key} probes ${probes.map((p, idx) => `j=${idx}→${p}`).join(", ")} and lands at slot ${slot}.`
        );
        break;
      }
    }
  }

  const tableMarkup = `
    <div class="bucket-content" style="display:grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px;">
      ${table
        .map(
          (value, index) => `
            <div class="hash-bucket" style="grid-template-columns: 1fr; gap: 8px; text-align:center;">
              <div class="bucket-index">H[${index}]</div>
              <div class="bucket-content" style="justify-content:center;">
                ${value ? `<span class="token">${value}</span>` : '<span class="token ghost">empty</span>'}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  return { history, tableMarkup };
}

function renderQuicksortLab() {
  const sim = simulateQuicksortPartition(state.quicksort.pivotMode);
  const leftMarkup = sim.left.length
    ? sim.left.map((value) => renderArrayCell(value, "left")).join("")
    : renderArrayEmpty();
  const rightMarkup = sim.right.length
    ? sim.right.map((value) => renderArrayCell(value, "right")).join("")
    : renderArrayEmpty();
  const historyMarkup = sim.history.map((line) => `<li>${line}</li>`).join("");
  const studyCards = buildNonGraphStudyCards("quicksort", { sim });

  return `
    ${renderStudyGuideSection("Quicksort Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Pivot Comparison</h3>
        <p>Compare the exact median idea from the notes against a fixed random-pivot sample and see how the partition balance changes.</p>
        <div class="control-row">
          <button data-pivot-mode="median" class="${state.quicksort.pivotMode === "median" ? "primary" : ""}">Median pivot idea</button>
          <button data-pivot-mode="random" class="${state.quicksort.pivotMode === "random" ? "primary" : ""}">Random pivot sample</button>
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Pivot</span>
            <strong>${sim.pivot}</strong>
          </div>
          <div class="mini-stat">
            <span>Left size</span>
            <strong>${sim.left.length}</strong>
          </div>
          <div class="mini-stat">
            <span>Right size</span>
            <strong>${sim.right.length}</strong>
          </div>
        </div>
        <div class="feedback ${sim.balanceTone}">${sim.balanceMessage}</div>
      </article>
      <article class="lab-card">
        <h3>Partition Walkthrough</h3>
        <ol class="history-log">
          ${historyMarkup}
        </ol>
      </article>
    </div>
    <article class="graph-card">
      <h3>Worked Split</h3>
      <div class="partition-layout">
        <div class="partition-column">
          <span class="partition-label">Left of pivot</span>
          <div class="array-strip">
            ${leftMarkup}
          </div>
        </div>
        <div class="partition-column pivot-column">
          <span class="partition-label">Pivot</span>
          <div class="array-strip">
            ${renderArrayCell(sim.pivot, "pivot")}
          </div>
        </div>
        <div class="partition-column">
          <span class="partition-label">Right of pivot</span>
          <div class="array-strip">
            ${rightMarkup}
          </div>
        </div>
      </div>
      <div class="feedback neutral">Original array: ${quicksortBaseArray.join(", ")}</div>
    </article>
  `;
}

function bindQuicksortLab() {
  document.querySelectorAll("[data-pivot-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.quicksort.pivotMode = button.dataset.pivotMode;
      render();
    });
  });
}

function simulateQuicksortPartition(mode) {
  const array = [...quicksortBaseArray];
  const pivot = mode === "median" ? getMedianValue(array) : 54;
  const left = [];
  const right = [];
  const history = [];
  let pivotConsumed = false;

  for (const value of array) {
    if (value === pivot && !pivotConsumed) {
      history.push(`${value} is selected as the pivot and held in the middle partition.`);
      pivotConsumed = true;
      continue;
    }
    if (value < pivot) {
      left.push(value);
      history.push(`${value} goes left because it is smaller than ${pivot}.`);
    } else {
      right.push(value);
      history.push(`${value} goes right because it is larger than ${pivot}.`);
    }
  }

  const difference = Math.abs(left.length - right.length);
  const balanced = difference <= 1;
  return {
    pivot,
    left,
    right,
    history,
    balanceTone: balanced ? "" : "warning",
    balanceMessage: balanced
      ? "This split is nearly even. Good pivots keep the recursion balanced."
      : "This split is noticeably uneven. Random pivots can do this, which is why the expected analysis matters.",
  };
}

function getMedianValue(array) {
  const sorted = [...array].sort((left, right) => left - right);
  return sorted[Math.floor(sorted.length / 2)];
}

function renderHeapLab() {
  const selectedIndex = clampHeapIndex(state.heap.selectedIndex, state.heap.array.length);
  const selectedValue = selectedIndex >= 0 ? state.heap.array[selectedIndex] : null;
  const root = decorateTree(heapArrayToTree(state.heap.array), (node) => {
    const nodeIndex = Number(String(node.meta).replace("i ", "")) - 1;
    const isSelected = nodeIndex === selectedIndex;
    return { variant: isSelected ? "accent" : "default", highlight: isSelected };
  });
  const studyCards = buildNonGraphStudyCards("heaps", {
    selectedAction: getHeapActionLabel(state.heap.action),
    selectedNode: selectedIndex >= 0 ? `i ${selectedIndex + 1} = ${selectedValue}` : "none",
    extracted: state.heap.extracted.join(", ") || "-",
  });
  const nodeDetails = buildHeapNodeDetails(state.heap.array, selectedIndex);

  return `
    ${renderStudyGuideSection("Heap Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Heap Sandbox</h3>
        <p>Use the packet operations only: Insert, ExtractMax, and MaxHeapify. Pick a node only when you are tracing MaxHeapify.</p>
        <div class="control-row">
          ${heapActionOptions
            .map(
              (option) => `
                <button data-heap-action="${option.id}" class="${state.heap.action === option.id ? "primary" : ""}">
                  ${option.label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="slider-row">
          <label for="heap-insert-value">Insert value</label>
          <input id="heap-insert-value" class="number-input" type="number" value="${state.heap.insertValue}" />
        </div>
        <div class="control-row" style="margin-top: 12px;">
          <button class="primary" id="heap-apply">Apply Operation</button>
          <button id="heap-reset">Reset Heap</button>
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Selected action</span>
            <strong>${getHeapActionLabel(state.heap.action)}</strong>
          </div>
          <div class="mini-stat">
            <span>Current size</span>
            <strong>${state.heap.array.length}</strong>
          </div>
          <div class="mini-stat">
            <span>Selected node</span>
            <strong>${selectedIndex >= 0 ? `i ${selectedIndex + 1}` : "none"}</strong>
          </div>
        </div>
        <div class="feedback ${state.heap.feedbackTone}">${state.heap.feedback}</div>
      </article>
      <article class="lab-card">
        <h3>Node Details</h3>
        <div class="graph-list">
          ${nodeDetails
            .map(
              (item) => `
                <div class="graph-list-item">
                  <strong>${item.label}</strong>
                  <span>${item.value}</span>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Current max</span>
            <strong>${state.heap.array[0] === undefined ? "-" : state.heap.array[0]}</strong>
          </div>
          <div class="mini-stat">
            <span>Extracted so far</span>
            <strong>${state.heap.extracted.join(", ") || "-"}</strong>
          </div>
          <div class="mini-stat">
            <span>Insert value</span>
            <strong>${state.heap.insertValue}</strong>
          </div>
        </div>
        <ol class="history-log" style="margin-top:14px;">
          ${state.heap.history.map((line) => `<li>${line}</li>`).join("")}
        </ol>
      </article>
    </div>
    <div class="tree-dual">
      <article class="graph-card">
        <h3>Tree View</h3>
        ${renderBinaryTree(root, { emptyLabel: "The heap is empty." })}
      </article>
      <article class="graph-card">
        <h3>Array View</h3>
        <div class="array-strip">
          ${state.heap.array.length
            ? state.heap.array
            .map(
              (value, index) => `
                <button class="array-cell array-cell-button ${index === selectedIndex ? "selected" : ""}" data-heap-index="${index}">
                  <span class="array-index">${index + 1}</span>
                  <strong>${value}</strong>
                </button>
              `
            )
            .join("")
            : '<div class="tree-placeholder">The heap is empty.</div>'}
        </div>
      </article>
    </div>
  `;
}

function bindHeapLab() {
  document.querySelectorAll("[data-heap-action]").forEach((button) => {
    button.addEventListener("click", () => {
      state.heap.action = button.dataset.heapAction;
      render();
    });
  });
  document.querySelectorAll("[data-heap-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.heap.selectedIndex = Number(button.dataset.heapIndex);
      render();
    });
  });
  document.querySelector("#heap-insert-value").addEventListener("input", (event) => {
    state.heap.insertValue = Number(event.target.value);
  });
  document.querySelector("#heap-apply").addEventListener("click", () => {
    applyHeapSandboxAction();
  });
  document.querySelector("#heap-reset").addEventListener("click", () => {
    state.heap = createInitialHeapState();
    render();
  });
}

function getHeapActionLabel(actionId) {
  const option = heapActionOptions.find((item) => item.id === actionId);
  return option ? option.label : actionId;
}

function clampHeapIndex(index, length) {
  if (!length) return -1;
  return Math.max(0, Math.min(index, length - 1));
}

function buildHeapNodeDetails(array, index) {
  if (!array.length) {
    return [{ label: "Heap", value: "The heap is empty." }];
  }
  const safeIndex = clampHeapIndex(index, array.length);
  const parentIndex = safeIndex > 0 ? Math.floor((safeIndex - 1) / 2) : -1;
  const leftIndex = safeIndex * 2 + 1;
  const rightIndex = safeIndex * 2 + 2;
  return [
    { label: "Selected node", value: `i ${safeIndex + 1} holds ${array[safeIndex]}` },
    { label: "Parent", value: parentIndex >= 0 ? `i ${parentIndex + 1} holds ${array[parentIndex]}` : "root has no parent" },
    { label: "Left child", value: leftIndex < array.length ? `i ${leftIndex + 1} holds ${array[leftIndex]}` : "none" },
    { label: "Right child", value: rightIndex < array.length ? `i ${rightIndex + 1} holds ${array[rightIndex]}` : "none" },
  ];
}

function appendSandboxHistory(history, line) {
  return [...history, line].slice(-10);
}

function applyHeapSandboxAction() {
  const action = state.heap.action;
  const array = [...state.heap.array];
  const selectedIndex = clampHeapIndex(state.heap.selectedIndex, array.length);
  let nextSelectedIndex = selectedIndex;
  let feedback = state.heap.feedback;
  let feedbackTone = "neutral";
  let historyLine = "";
  let extracted = [...state.heap.extracted];

  if (action === "heapify") {
    if (selectedIndex < 0) {
      feedback = "Pick a node first. MaxHeapify needs a valid heap position.";
      feedbackTone = "error";
    } else {
      const result = heapSiftDownDetailed(array, selectedIndex);
      feedback = result.feedback;
      feedbackTone = result.feedbackTone;
      historyLine = result.historyLine;
      nextSelectedIndex = result.finalIndex;
    }
  } else if (action === "extract") {
    const result = heapExtractMaxDetailed(array);
    feedback = result.feedback;
    feedbackTone = result.feedbackTone;
    historyLine = result.historyLine;
    nextSelectedIndex = result.finalIndex;
    if (result.extracted !== null) {
      extracted.push(result.extracted);
    }
  } else if (action === "insert") {
    if (Number.isNaN(state.heap.insertValue)) {
      feedback = "Enter a numeric key before inserting into the heap.";
      feedbackTone = "error";
    } else {
      const result = heapInsertDetailed(array, state.heap.insertValue);
      feedback = result.feedback;
      feedbackTone = result.feedbackTone;
      historyLine = result.historyLine;
      nextSelectedIndex = result.finalIndex;
    }
  }

  state.heap.array = array;
  state.heap.selectedIndex = array.length ? clampHeapIndex(nextSelectedIndex, array.length) : -1;
  state.heap.extracted = extracted;
  state.heap.feedback = feedback;
  state.heap.feedbackTone = feedbackTone;
  if (historyLine) {
    state.heap.history = appendSandboxHistory(state.heap.history, historyLine);
  }
  render();
}

function heapInsertDetailed(array, value) {
  array.push(value);
  let index = array.length - 1;
  const path = [`append ${value} at i ${index + 1}`];
  while (index > 0) {
    const parent = Math.floor((index - 1) / 2);
    if (array[parent] >= array[index]) break;
    path.push(`swap with parent i ${parent + 1} (${array[parent]})`);
    [array[parent], array[index]] = [array[index], array[parent]];
    index = parent;
  }
  return {
    feedback: `Inserted ${value}. Bubble-up stops at i ${index + 1}.`,
    feedbackTone: "",
    historyLine: `Insert ${value}: ${path.join(" -> ")}.`,
    finalIndex: index,
  };
}

function heapBubbleUpDetailed(array, index) {
  if (index <= 0) {
    return {
      feedback: "That node is already at the root, so BubbleUp changes nothing.",
      feedbackTone: "neutral",
      historyLine: `BubbleUp(i ${index + 1}): already at the root.`,
      finalIndex: index,
    };
  }
  const startIndex = index;
  const value = array[index];
  const swaps = [];
  while (index > 0) {
    const parent = Math.floor((index - 1) / 2);
    if (array[parent] >= array[index]) break;
    swaps.push(`i ${index + 1} with parent i ${parent + 1}`);
    [array[parent], array[index]] = [array[index], array[parent]];
    index = parent;
  }
  return {
    feedback: swaps.length
      ? `${value} bubbled up from i ${startIndex + 1} to i ${index + 1}.`
      : `${value} already satisfies the heap property above it.`,
    feedbackTone: swaps.length ? "" : "neutral",
    historyLine: swaps.length
      ? `BubbleUp(i ${startIndex + 1}): ${swaps.join(" -> ")}.`
      : `BubbleUp(i ${startIndex + 1}): no swaps needed.`,
    finalIndex: index,
  };
}

function heapExtractMaxDetailed(array) {
  if (!array.length) {
    return {
      extracted: null,
      feedback: "The heap is empty, so ExtractMax has nothing to remove.",
      feedbackTone: "error",
      historyLine: "",
      finalIndex: -1,
    };
  }
  const max = array[0];
  const last = array.pop();
  const swaps = [];
  if (array.length) {
    array[0] = last;
    heapSiftDownDetailed(array, 0, swaps);
  }
  return {
    extracted: max,
    feedback: `ExtractMax removed ${max}.`,
    feedbackTone: "",
    historyLine: swaps.length
      ? `ExtractMax(): remove ${max}, move ${last} to the root, then ${swaps.join(" -> ")}.`
      : `ExtractMax(): remove ${max}${array.length ? `, move ${last} to the root with no further swaps` : ""}.`,
    finalIndex: array.length ? 0 : -1,
  };
}

function heapSiftDownDetailed(array, index, swapHistory = []) {
  if (index < 0 || index >= array.length) {
    return {
      feedback: "Pick a valid node inside the heap.",
      feedbackTone: "error",
      historyLine: "",
      finalIndex: -1,
    };
  }
  const startIndex = index;
  const startValue = array[index];
  let current = index;
  while (true) {
    const left = current * 2 + 1;
    const right = current * 2 + 2;
    let largest = current;
    if (left < array.length && array[left] > array[largest]) largest = left;
    if (right < array.length && array[right] > array[largest]) largest = right;
    if (largest === current) break;
    swapHistory.push(`swap i ${current + 1} with i ${largest + 1}`);
    [array[current], array[largest]] = [array[largest], array[current]];
    current = largest;
  }
  return {
    feedback: swapHistory.length
      ? `MaxHeapify pushed ${startValue} from i ${startIndex + 1} down to i ${current + 1}.`
      : `MaxHeapify at i ${startIndex + 1} makes no swaps because the subtree is already a heap.`,
    feedbackTone: swapHistory.length ? "" : "neutral",
    historyLine: swapHistory.length
      ? `MaxHeapify(i ${startIndex + 1}): ${swapHistory.join(" -> ")}.`
      : `MaxHeapify(i ${startIndex + 1}): no swaps needed.`,
    finalIndex: current,
  };
}

function renderBstLab() {
  const root = state.bst.root;
  const highlighted = new Set(state.bst.highlightKeys.map(String));
  const tree = decorateTree(root, (node) => ({
    variant: highlighted.has(String(node.label)) ? "accent" : "default",
    meta: node.meta || "",
    highlight: highlighted.has(String(node.label)),
  }));
  const studyCards = buildNonGraphStudyCards("bst", {
    operationLabel: getBstOperationLabel(state.bst.operation),
    resultSummary: state.bst.resultSummary,
    inorder: inorderTraversal(root).join(", ") || "-",
  });

  return `
    ${renderStudyGuideSection("BST Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>BST Sandbox</h3>
        <p>Start from an empty BST. Insert the packet keys to build the tree, then use the packet operations on the version you created.</p>
        <div class="control-row">
          ${bstOperationOptions
            .map(
              (option) => `
                <button data-bst-operation="${option.id}" class="${state.bst.operation === option.id ? "primary" : ""}">
                  ${option.label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="slider-row">
          <label for="bst-target">Target key</label>
          <input id="bst-target" class="number-input" type="number" value="${state.bst.targetKey}" />
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Current operation</span>
            <strong>${getBstOperationLabel(state.bst.operation)}</strong>
          </div>
          <div class="mini-stat">
            <span>Current root</span>
            <strong>${root ? root.label : "-"}</strong>
          </div>
          <div class="mini-stat">
            <span>Target key</span>
            <strong>${state.bst.targetKey}</strong>
          </div>
        </div>
        <p style="margin-top:12px; color: var(--muted);">
          Suggested packet insert order: ${bstInsertSequence.join(" -> ")}
        </p>
        <div class="chip-wrap" style="margin-top:12px;">
          ${bstQuickKeys
            .map(
              (value) => `
                <button data-bst-key="${value}" class="${state.bst.targetKey === value ? "primary" : ""}">
                  ${value}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="control-row" style="margin-top:12px;">
          <button class="primary" id="bst-apply">Apply Operation</button>
          <button id="bst-reset">Reset Tree</button>
        </div>
        <div class="feedback ${state.bst.feedbackTone}">${state.bst.feedback}</div>
      </article>
      <article class="lab-card">
        <h3>Operation Result</h3>
        <div class="graph-list">
          <div class="graph-list-item">
            <strong>Current result</strong>
            <span>${state.bst.resultSummary}</span>
          </div>
          <div class="graph-list-item">
            <strong>Highlighted path</strong>
            <span>${state.bst.lastPath.length ? state.bst.lastPath.join(" -> ") : "none"}</span>
          </div>
        </div>
        <div class="mini-stat-grid" style="margin-top:14px;">
          <div class="mini-stat">
            <span>Inorder traversal</span>
            <strong>${inorderTraversal(root).join(", ") || "-"}</strong>
          </div>
          <div class="mini-stat">
            <span>Node count</span>
            <strong>${inorderTraversal(root).length}</strong>
          </div>
          <div class="mini-stat">
            <span>Level count</span>
            <strong>${root ? getTreeHeight(root) + 1 : 0}</strong>
          </div>
        </div>
        <ol class="history-log" style="margin-top:14px;">
          ${state.bst.history.map((line) => `<li>${line}</li>`).join("")}
        </ol>
      </article>
    </div>
    <article class="graph-card">
      <h3>Current Tree</h3>
      ${renderBinaryTree(tree, { emptyLabel: "No keys inserted yet." })}
    </article>
  `;
}

function bindBstLab() {
  document.querySelectorAll("[data-bst-operation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bst.operation = button.dataset.bstOperation;
      render();
    });
  });
  document.querySelectorAll("[data-bst-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bst.targetKey = Number(button.dataset.bstKey);
      render();
    });
  });
  document.querySelector("#bst-target").addEventListener("input", (event) => {
    state.bst.targetKey = Number(event.target.value);
  });
  document.querySelector("#bst-apply").addEventListener("click", () => {
    applyBstSandboxAction();
  });
  document.querySelector("#bst-reset").addEventListener("click", () => {
    state.bst = createInitialBstState();
    render();
  });
}

function getBstOperationLabel(operationId) {
  const option = bstOperationOptions.find((item) => item.id === operationId);
  return option ? option.label : operationId;
}

function applyBstSandboxAction() {
  const operation = state.bst.operation;
  const key = Number(state.bst.targetKey);
  const root = state.bst.root;
  let result = {
    root,
    feedback: state.bst.feedback,
    feedbackTone: "neutral",
    historyLine: "",
    lastPath: [],
    highlightKeys: [],
    resultSummary: state.bst.resultSummary,
  };

  if (["search", "insert", "delete", "successor", "predecessor"].includes(operation) && Number.isNaN(key)) {
    state.bst.feedback = "Enter a numeric key before applying that BST operation.";
    state.bst.feedbackTone = "error";
    render();
    return;
  }

  if (operation === "search") {
    const search = bstSearchPath(root, key);
    const trace = formatBstTrace(search.path);
    result = {
      ...result,
      feedback: search.found ? `Found ${key}.` : `${key} is not in the current BST.`,
      feedbackTone: search.found ? "" : "neutral",
      historyLine: search.found
        ? `Search(${key}): ${trace} (found).`
        : `Search(${key}): ${trace} -> NIL.`,
      lastPath: search.path,
      highlightKeys: search.path,
      resultSummary: search.found ? `Found ${key} along ${trace}.` : `${key} misses after ${trace} -> NIL.`,
    };
  } else if (operation === "insert") {
    const inserted = bstInsertDetailed(root, key);
    const trace = formatBstTrace(inserted.path);
    result = {
      ...result,
      root: inserted.root,
      feedback: inserted.inserted ? `Inserted ${key} into the BST.` : `${key} is already in the BST, so insert changes nothing.`,
      feedbackTone: inserted.inserted ? "" : "neutral",
      historyLine: inserted.inserted
        ? `Insert(${key}): follow ${trace} and attach the new node.`
        : `Insert(${key}): duplicate key, no structural change.`,
      lastPath: inserted.path,
      highlightKeys: inserted.inserted ? inserted.path : inserted.path,
      resultSummary: inserted.inserted ? `Inserted ${key} along ${trace}.` : `${key} already exists in the tree.`,
    };
  } else if (operation === "delete") {
    const deleted = bstDeleteDetailed(root, key);
    const trace = formatBstTrace(deleted.path);
    result = {
      ...result,
      root: deleted.root,
      feedback: deleted.deleted ? `Deleted ${key} using the ${deleted.caseLabel} case.` : `${key} is not in the BST, so delete changes nothing.`,
      feedbackTone: deleted.deleted ? "" : "neutral",
      historyLine: deleted.deleted
        ? `Delete(${key}): search path ${trace} using the ${deleted.caseLabel} case${deleted.replacement ? ` and replacement ${deleted.replacement}` : ""}.`
        : `Delete(${key}): ${trace} -> NIL.`,
      lastPath: deleted.path,
      highlightKeys: deleted.deleted ? deleted.highlightKeys : deleted.path,
      resultSummary: deleted.deleted
        ? deleted.replacement
          ? `Deleted ${key}; the node was replaced by successor ${deleted.replacement}.`
          : `Deleted ${key} using the ${deleted.caseLabel} case.`
        : `${key} was not found, so the tree is unchanged.`,
    };
  } else if (operation === "successor") {
    const successor = bstSuccessorInfo(root, key);
    const trace = formatBstTrace(successor.path);
    result = {
      ...result,
      feedback: !successor.found
        ? `${key} is not in the BST.`
        : successor.result === null
          ? `${key} has no successor because it is already the maximum key.`
          : `The successor of ${key} is ${successor.result}.`,
      feedbackTone: successor.found && successor.result !== null ? "" : "neutral",
      historyLine: !successor.found
        ? `Successor(${key}): ${trace} -> NIL.`
        : successor.result === null
          ? `Successor(${key}): searched ${trace} and found no larger ancestor.`
          : `Successor(${key}): ${successor.result}.`,
      lastPath: successor.path,
      highlightKeys: successor.highlightKeys,
      resultSummary: !successor.found
        ? `${key} is not in the tree.`
        : successor.result === null
          ? `${key} has no successor in the current BST.`
          : `Successor(${key}) = ${successor.result}.`,
    };
  } else if (operation === "predecessor") {
    const predecessor = bstPredecessorInfo(root, key);
    const trace = formatBstTrace(predecessor.path);
    result = {
      ...result,
      feedback: !predecessor.found
        ? `${key} is not in the BST.`
        : predecessor.result === null
          ? `${key} has no predecessor because it is already the minimum key.`
          : `The predecessor of ${key} is ${predecessor.result}.`,
      feedbackTone: predecessor.found && predecessor.result !== null ? "" : "neutral",
      historyLine: !predecessor.found
        ? `Predecessor(${key}): ${trace} -> NIL.`
        : predecessor.result === null
          ? `Predecessor(${key}): searched ${trace} and found no smaller ancestor.`
          : `Predecessor(${key}): ${predecessor.result}.`,
      lastPath: predecessor.path,
      highlightKeys: predecessor.highlightKeys,
      resultSummary: !predecessor.found
        ? `${key} is not in the tree.`
        : predecessor.result === null
          ? `${key} has no predecessor in the current BST.`
          : `Predecessor(${key}) = ${predecessor.result}.`,
    };
  } else if (operation === "inorder") {
    const traversal = inorderTraversal(root);
    result = {
      ...result,
      feedback: traversal.length ? "Inorder traversal listed the keys in sorted order." : "The BST is empty.",
      feedbackTone: traversal.length ? "" : "neutral",
      historyLine: traversal.length ? `Inorder(): ${traversal.join(", ")}.` : "Inorder(): tree is empty.",
      lastPath: [],
      highlightKeys: traversal,
      resultSummary: traversal.length ? `Inorder traversal = ${traversal.join(", ")}.` : "The tree is empty.",
    };
  }

  state.bst.root = result.root;
  state.bst.feedback = result.feedback;
  state.bst.feedbackTone = result.feedbackTone;
  state.bst.lastPath = result.lastPath;
  state.bst.highlightKeys = result.highlightKeys;
  state.bst.resultSummary = result.resultSummary;
  if (result.historyLine) {
    state.bst.history = appendSandboxHistory(state.bst.history, result.historyLine);
  }
  render();
}

function bstInsertDetailed(root, key) {
  const path = [];

  function insert(node) {
    if (!node) {
      return { node: { id: `bst-${key}`, label: String(key) }, inserted: true };
    }
    const current = Number(node.label);
    path.push(current);
    if (key === current) return { node, inserted: false };
    if (key < current) {
      const result = insert(node.left || null);
      return { node: { ...node, left: result.node }, inserted: result.inserted };
    }
    const result = insert(node.right || null);
    return { node: { ...node, right: result.node }, inserted: result.inserted };
  }

  const result = insert(root);
  return {
    root: result.node,
    inserted: result.inserted,
    path: result.inserted ? [...path, key] : path,
  };
}

function bstDeleteDetailed(root, key) {
  const search = bstSearchPath(root, key);
  if (!search.found) {
    return { root, deleted: false, path: search.path, caseLabel: "missing", replacement: null, highlightKeys: search.path };
  }

  let caseLabel = "";
  let replacement = null;

  function deleteNode(node, value) {
    if (!node) return null;
    const current = Number(node.label);
    if (value < current) {
      return { ...node, left: deleteNode(node.left || null, value) };
    }
    if (value > current) {
      return { ...node, right: deleteNode(node.right || null, value) };
    }
    if (!node.left && !node.right) {
      caseLabel = "leaf";
      return null;
    }
    if (!node.left || !node.right) {
      caseLabel = "one-child";
      return node.left || node.right;
    }
    caseLabel = "two-child";
    const successor = bstMinimumInfo(node.right || null).result;
    replacement = successor;
    return {
      ...node,
      id: `bst-${successor}`,
      label: String(successor),
      right: deleteNode(node.right || null, successor),
    };
  }

  return {
    root: deleteNode(root, key),
    deleted: true,
    path: search.path,
    caseLabel,
    replacement,
    highlightKeys: replacement ? [...search.path, replacement] : search.path,
  };
}

function bstSuccessorInfo(root, key) {
  const search = bstSearchPath(root, key);
  if (!search.found) return { found: false, path: search.path, result: null, highlightKeys: search.path };
  const target = findBstNode(root, key);
  if (target && target.right) {
    const rightPath = bstMinimumInfo(target.right).path;
    const result = rightPath[rightPath.length - 1];
    return { found: true, path: [...search.path, ...rightPath], result, highlightKeys: [...search.path, ...rightPath] };
  }
  let current = root;
  let candidate = null;
  while (current) {
    const currentValue = Number(current.label);
    if (key < currentValue) {
      candidate = currentValue;
      current = current.left || null;
    } else if (key > currentValue) {
      current = current.right || null;
    } else {
      break;
    }
  }
  return {
    found: true,
    path: search.path,
    result: candidate,
    highlightKeys: candidate === null ? search.path : [...search.path, candidate],
  };
}

function bstPredecessorInfo(root, key) {
  const search = bstSearchPath(root, key);
  if (!search.found) return { found: false, path: search.path, result: null, highlightKeys: search.path };
  const target = findBstNode(root, key);
  if (target && target.left) {
    const leftPath = bstMaximumInfo(target.left).path;
    const result = leftPath[leftPath.length - 1];
    return { found: true, path: [...search.path, ...leftPath], result, highlightKeys: [...search.path, ...leftPath] };
  }
  let current = root;
  let candidate = null;
  while (current) {
    const currentValue = Number(current.label);
    if (key > currentValue) {
      candidate = currentValue;
      current = current.right || null;
    } else if (key < currentValue) {
      current = current.left || null;
    } else {
      break;
    }
  }
  return {
    found: true,
    path: search.path,
    result: candidate,
    highlightKeys: candidate === null ? search.path : [...search.path, candidate],
  };
}

function bstMinimumInfo(root) {
  const path = [];
  let current = root;
  while (current) {
    path.push(Number(current.label));
    current = current.left || null;
  }
  return { path, result: path.length ? path[path.length - 1] : null };
}

function bstMaximumInfo(root) {
  const path = [];
  let current = root;
  while (current) {
    path.push(Number(current.label));
    current = current.right || null;
  }
  return { path, result: path.length ? path[path.length - 1] : null };
}

function formatBstTrace(path) {
  return path.length ? path.join(" -> ") : "empty tree";
}

function findBstNode(root, key) {
  let current = root;
  while (current) {
    const currentValue = Number(current.label);
    if (currentValue === key) return current;
    current = key < currentValue ? current.left || null : current.right || null;
  }
  return null;
}

function renderAvlLab() {
  const challenge = getAvlChallenge();
  const annotated = annotateAvlTree(cloneTree(state.avl.root));
  const imbalanceSummary = describeAvlBalance(state.avl.root);
  const studyCards = buildNonGraphStudyCards("avl", { challenge, balanceSummary: imbalanceSummary, lastOperation: state.avl.lastOperation });

  return `
    ${renderStudyGuideSection("AVL Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <span class="partition-label">Scenario</span>
        <h3>Drag To Rotate</h3>
        <p>${challenge.prompt}</p>
        <div class="control-row">
          ${avlChallenges
            .map(
              (item) => `
                <button data-avl-case="${item.id}" class="${item.id === challenge.id ? "primary" : ""}">
                  ${item.title}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="mini-stat-grid" style="margin-top:14px;">
          <div class="mini-stat">
            <span>Last operation</span>
            <strong>${state.avl.lastOperation}</strong>
          </div>
          <div class="mini-stat">
            <span>Balance status</span>
            <strong>${imbalanceSummary}</strong>
          </div>
          <div class="mini-stat">
            <span>Node count</span>
            <strong>${countTreeNodes(state.avl.root)}</strong>
          </div>
        </div>
        <div class="feedback ${state.avl.feedbackTone}">${state.avl.feedback}</div>
      </article>
      <article class="lab-card">
        <span class="partition-label">Rotation Rule</span>
        <h3>How To Use It</h3>
        <ul class="study-list">
          <li>Drag a left child across its parent to perform a right rotation at that parent.</li>
          <li>Drag a right child across its parent to perform a left rotation at that parent.</li>
          <li>Double-rotation cases take two drags: first at the child, then at the ancestor.</li>
        </ul>
        <h3 style="margin-top:16px;">Insertion Pattern</h3>
        <div class="chip-wrap">
          ${challenge.sequence.map((value, index) => `<span class="chip">${index + 1}. ${value}</span>`).join("")}
        </div>
        <p style="margin-top:12px; color: var(--muted);">
          Each node shows <code>h</code> for subtree height and <code>bf</code> for balance factor.
        </p>
      </article>
    </div>
    <div class="tree-dual">
      <article class="graph-card">
        <h3>Interactive AVL Tree</h3>
        <p class="study-lead">
          Drag a child node past its parent. The tree will rotate immediately, and the log will show which operation fired.
        </p>
        ${renderAvlInteractiveTree(annotated)}
      </article>
      <article class="graph-card">
        <h3>Rotation Log</h3>
        <ol class="history-log">
          ${state.avl.history.map((line) => `<li>${line}</li>`).join("")}
        </ol>
      </article>
    </div>
  `;
}

function bindAvlLab() {
  document.querySelectorAll("[data-avl-case]").forEach((button) => {
    button.addEventListener("click", () => {
      state.avl = createInitialAvlState(button.dataset.avlCase);
      render();
    });
  });
  bindAvlDragInteractions();
}

function renderAvlInteractiveTree(root) {
  if (!root) {
    return '<div class="tree-placeholder">No AVL tree is loaded.</div>';
  }

  const layout = layoutBinaryTree(root, 760);
  const relationMap = buildTreeRelationMap(root);
  const positionMap = new Map(layout.nodes.map((node) => [node.id, node]));

  return `
    <div class="tree-frame avl-drag-frame">
      <svg class="tree-svg avl-drag-svg" viewBox="0 0 ${layout.width} ${layout.height}" role="img" aria-label="Interactive AVL tree">
        ${layout.edges
          .map(
            (edge) => `
              <line
                class="tree-link"
                x1="${edge.from.x}"
                y1="${edge.from.y}"
                x2="${edge.to.x}"
                y2="${edge.to.y}"
              ></line>
            `
          )
          .join("")}
        ${layout.nodes
          .map((node) => {
            const relation = relationMap.get(node.id) || {};
            const parentNode = relation.parentId ? positionMap.get(relation.parentId) : null;
            return `
              <g
                class="avl-drag-node ${relation.parentId ? "is-draggable" : "is-root"}"
                data-avl-node="${node.id}"
                data-label="${node.label}"
                data-parent-id="${relation.parentId || ""}"
                data-parent-label="${relation.parentLabel || ""}"
                data-side="${relation.side || ""}"
                data-x="${node.x}"
                data-y="${node.y}"
                data-parent-x="${parentNode ? parentNode.x : ""}"
              >
                <circle class="tree-circle ${node.variant || "default"} ${node.highlight ? "highlight" : ""}" cx="${node.x}" cy="${node.y}" r="28"></circle>
                <text class="tree-value ${node.variant || "default"}" x="${node.x}" y="${node.y - 2}">${node.label}</text>
                ${node.meta ? `<text class="tree-meta" x="${node.x}" y="${node.y + 46}">${node.meta}</text>` : ""}
              </g>
            `;
          })
          .join("")}
      </svg>
    </div>
  `;
}

function bindAvlDragInteractions() {
  document.querySelectorAll("[data-avl-node]").forEach((group) => {
    if (!group.dataset.parentId) return;

    group.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      const svg = group.closest("svg");
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const viewBox = svg.viewBox.baseVal;
      const scaleX = viewBox && rect.width ? viewBox.width / rect.width : 1;
      const scaleY = viewBox && rect.height ? viewBox.height / rect.height : 1;

      const drag = {
        group,
        nodeId: group.dataset.avlNode,
        label: group.dataset.label,
        parentId: group.dataset.parentId,
        parentLabel: group.dataset.parentLabel,
        side: group.dataset.side,
        nodeX: Number(group.dataset.x),
        parentX: Number(group.dataset.parentX),
        startClientX: event.clientX,
        startClientY: event.clientY,
        scaleX,
        scaleY,
      };

      group.classList.add("is-dragging");

      function moveDrag(moveEvent) {
        const dx = (moveEvent.clientX - drag.startClientX) * drag.scaleX;
        const dy = (moveEvent.clientY - drag.startClientY) * drag.scaleY;
        group.setAttribute("transform", `translate(${dx} ${dy})`);
      }

      function endDrag(endEvent) {
        window.removeEventListener("pointermove", moveDrag);
        window.removeEventListener("pointerup", endDrag);
        window.removeEventListener("pointercancel", endDrag);
        group.classList.remove("is-dragging");
        group.removeAttribute("transform");

        const dx = (endEvent.clientX - drag.startClientX) * drag.scaleX;
        const currentX = drag.nodeX + dx;
        const threshold = 24;
        let direction = "";

        if (drag.side === "left" && currentX > drag.parentX + threshold) {
          direction = "right";
        } else if (drag.side === "right" && currentX < drag.parentX - threshold) {
          direction = "left";
        }

        if (!direction) {
          state.avl.feedback = "Drag the child node all the way across its parent to trigger a rotation.";
          state.avl.feedbackTone = "neutral";
          render();
          return;
        }

        applyAvlRotationFromDrag(drag.parentId, drag.parentLabel, drag.label, direction);
      }

      window.addEventListener("pointermove", moveDrag);
      window.addEventListener("pointerup", endDrag);
      window.addEventListener("pointercancel", endDrag);
    });
  });
}

function applyAvlRotationFromDrag(parentId, parentLabel, draggedLabel, direction) {
  const result = rotateTreeAtId(state.avl.root, parentId, direction);
  if (!result.rotated) {
    state.avl.feedback = "That drag did not correspond to a legal single rotation on this tree.";
    state.avl.feedbackTone = "error";
    render();
    return;
  }

  const operation = direction === "left" ? "Left rotation" : "Right rotation";
  const balanceSummary = describeAvlBalance(result.node);

  state.avl.root = result.node;
  state.avl.lastOperation = `${operation} at ${parentLabel}`;
  state.avl.history = appendSandboxHistory(state.avl.history, `${operation} at ${parentLabel} after dragging ${draggedLabel} across the edge.`);
  state.avl.feedback = `${operation} at ${parentLabel} applied. ${balanceSummary}.`;
  state.avl.feedbackTone = balanceSummary === "Balanced" ? "" : "warning";
  render();
}

function rotateTreeAtId(root, targetId, direction) {
  if (!root) return { node: null, rotated: false };
  if (root.id === targetId) {
    return direction === "left" ? rotateLeftNode(root) : rotateRightNode(root);
  }

  const left = rotateTreeAtId(root.left || null, targetId, direction);
  if (left.rotated) {
    return { node: { ...root, left: left.node }, rotated: true };
  }

  const right = rotateTreeAtId(root.right || null, targetId, direction);
  if (right.rotated) {
    return { node: { ...root, right: right.node }, rotated: true };
  }

  return { node: root, rotated: false };
}

function rotateLeftNode(node) {
  if (!node || !node.right) return { node, rotated: false };
  const pivot = node.right;
  return {
    rotated: true,
    node: {
      ...pivot,
      left: {
        ...node,
        right: pivot.left || null,
      },
    },
  };
}

function rotateRightNode(node) {
  if (!node || !node.left) return { node, rotated: false };
  const pivot = node.left;
  return {
    rotated: true,
    node: {
      ...pivot,
      right: {
        ...node,
        left: pivot.right || null,
      },
    },
  };
}

function buildTreeRelationMap(root, parentId = "", side = "", parentLabel = "") {
  const map = new Map();

  function visit(node, currentParentId, currentSide, currentParentLabel) {
    if (!node) return;
    map.set(node.id, {
      parentId: currentParentId,
      side: currentSide,
      parentLabel: currentParentLabel,
    });
    visit(node.left || null, node.id, "left", node.label);
    visit(node.right || null, node.id, "right", node.label);
  }

  visit(root, parentId, side, parentLabel);
  return map;
}

function countTreeNodes(root) {
  if (!root) return 0;
  return 1 + countTreeNodes(root.left || null) + countTreeNodes(root.right || null);
}

function getAvlImbalances(root) {
  const badNodes = [];

  function walk(node) {
    if (!node) return -1;
    const leftHeight = walk(node.left || null);
    const rightHeight = walk(node.right || null);
    const balance = leftHeight - rightHeight;
    if (Math.abs(balance) > 1) {
      badNodes.push(`${node.label} (bf ${balance})`);
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }

  walk(root);
  return badNodes;
}

function describeAvlBalance(root) {
  const badNodes = getAvlImbalances(root);
  return badNodes.length ? `Still unbalanced at ${badNodes.join(", ")}` : "Balanced";
}

function renderRbtLab() {
  const scenario = getRbtScenario();
  const studyCards = buildNonGraphStudyCards("rbt", { scenario });
  const nodeSelected = Boolean(state.rbt.selectedNodeId);
  const caseSummary = state.rbt.selectedCase ? rbtCaseSummaries[state.rbt.selectedCase] : "";

  return `
    ${renderStudyGuideSection("Red-Black Study Guide", studyCards)}
    <div class="stage-grid">
      <article class="control-card stage-card">
        <span class="partition-label">Step 1</span>
        <h3>Pick The Example</h3>
        <p>${scenario.prompt}</p>
        <div class="control-row">
          ${rbtScenarios
            .map(
              (item) => `
                <button data-rbt-scenario="${item.id}" class="${item.id === scenario.id ? "primary" : ""}">
                  ${item.title}
                </button>
              `
            )
            .join("")}
        </div>
      </article>
      <article class="control-card stage-card">
        <span class="partition-label">Step 2</span>
        <h3>Select z, Then Pick The Case</h3>
        <p>Click the node z in the tree below, then choose which case from the notes applies.</p>
        <div class="chip-wrap" style="margin-top:12px;">
          ${Object.entries(rbtCaseLabels)
            .map(
              ([value, label]) => `
                <button data-rbt-case="${value}" class="${state.rbt.selectedCase === value ? "primary" : ""}" ${nodeSelected ? "" : "disabled"}>
                  ${label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="control-row" style="margin-top:12px;">
          <button class="primary" id="rbt-check">Check</button>
          <button id="rbt-show">Show Fix</button>
          <button id="rbt-reset">Reset</button>
        </div>
        <div class="feedback ${state.rbt.feedbackTone}">${state.rbt.feedback}</div>
        ${caseSummary ? `<p style="margin-top:8px; color: var(--muted);"><strong>${rbtCaseLabels[state.rbt.selectedCase]}:</strong> ${caseSummary}</p>` : ""}
      </article>
    </div>
    <div class="lab-grid">
      <article class="lab-card">
        <h3>Legend</h3>
        <div class="tree-legend">
          <span class="legend-pill black">black node</span>
          <span class="legend-pill red">red node</span>
          <span class="legend-pill accent">new insertion</span>
        </div>
        <p style="margin-top:12px; color: var(--muted);">
          The only three insertion-fixup cases from the notes: Case I (recolor), Case II (parent rotation + continue to Case III), Case III (grandparent rotation + recolor).
        </p>
      </article>
    </div>
    <div class="tree-dual">
      <article class="graph-card">
        <h3>Before Fix — click z</h3>
        ${renderBinaryTree(scenario.initialTree, {
          emptyLabel: "No tree.",
          clickAttr: "data-rbt-node",
          selectedId: state.rbt.selectedNodeId,
        })}
      </article>
      <article class="graph-card">
        <h3>After Fix</h3>
        ${
          state.rbt.showSolution
            ? renderBinaryTree(scenario.fixedTree, { emptyLabel: "No tree." })
            : '<div class="tree-placeholder">Select z, pick the case, and click Check — or Show Fix to reveal it.</div>'
        }
      </article>
    </div>
  `;
}

function bindRbtLab() {
  document.querySelectorAll("[data-rbt-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      state.rbt.scenarioId = button.dataset.rbtScenario;
      state.rbt.selectedNodeId = "";
      state.rbt.selectedCase = "";
      state.rbt.showSolution = false;
      state.rbt.feedback = "Click the newly inserted red node z, then pick the case that applies.";
      state.rbt.feedbackTone = "neutral";
      render();
    });
  });
  document.querySelectorAll("[data-rbt-node]").forEach((circle) => {
    circle.addEventListener("click", () => {
      const scenario = getRbtScenario();
      const nodeId = circle.dataset.rbtNode;
      state.rbt.selectedNodeId = nodeId;
      if (nodeId === scenario.zNodeId) {
        state.rbt.feedback = `z selected. Now pick the case (I, II, or III) that applies.`;
        state.rbt.feedbackTone = "";
      } else {
        state.rbt.feedback = `That is not z. z is the newly inserted red node that creates the red-red conflict with its parent.`;
        state.rbt.feedbackTone = "error";
      }
      render();
    });
  });
  document.querySelectorAll("[data-rbt-case]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.rbt.selectedNodeId) {
        state.rbt.feedback = "Select z first by clicking a node in the tree.";
        state.rbt.feedbackTone = "error";
        render();
        return;
      }
      state.rbt.selectedCase = button.dataset.rbtCase;
      render();
    });
  });
  document.querySelector("#rbt-check").addEventListener("click", () => {
    const scenario = getRbtScenario();
    if (!state.rbt.selectedNodeId) {
      state.rbt.feedback = "Select z first.";
      state.rbt.feedbackTone = "error";
      render();
      return;
    }
    if (state.rbt.selectedNodeId !== scenario.zNodeId) {
      state.rbt.feedback = "That node is not z. Click the new red node that has a red parent.";
      state.rbt.feedbackTone = "error";
      state.rbt.showSolution = false;
      render();
      return;
    }
    if (!state.rbt.selectedCase) {
      state.rbt.feedback = "Pick a case (I, II, or III).";
      state.rbt.feedbackTone = "error";
      render();
      return;
    }
    if (state.rbt.selectedCase === scenario.correctCase) {
      state.rbt.feedback = `Correct. ${rbtCaseLabels[scenario.correctCase]} applies here.`;
      state.rbt.feedbackTone = "";
      state.rbt.showSolution = true;
    } else {
      state.rbt.feedback = `Not this one. ${scenario.title} starts with ${rbtCaseLabels[scenario.correctCase]}.`;
      state.rbt.feedbackTone = "error";
      state.rbt.showSolution = false;
    }
    render();
  });
  document.querySelector("#rbt-show").addEventListener("click", () => {
    const scenario = getRbtScenario();
    state.rbt.showSolution = true;
    state.rbt.selectedCase = scenario.correctCase;
    state.rbt.selectedNodeId = scenario.zNodeId;
    state.rbt.feedback = `Revealed. ${rbtCaseLabels[scenario.correctCase]} applies. Result is shown on the right.`;
    state.rbt.feedbackTone = "neutral";
    render();
  });
  document.querySelector("#rbt-reset").addEventListener("click", () => {
    state.rbt.selectedNodeId = "";
    state.rbt.selectedCase = "";
    state.rbt.showSolution = false;
    state.rbt.feedback = "Click the newly inserted red node z, then pick the case that applies.";
    state.rbt.feedbackTone = "neutral";
    render();
  });
}

function renderGraphFoundationsLab() {
  const example = getGraphFoundationExample();
  const selected = example.nodes.some((node) => node.id === state.graphFoundations.selectedVertex)
    ? state.graphFoundations.selectedVertex
    : example.defaultVertex;
  const neighbors = getGraphNeighbors(selected, example);
  const incidentEdges = new Set(
    example.edges.filter((edge) => edge.a === selected || edge.b === selected).map((edge) => edge.id)
  );
  const adjacencyMatrix = buildAdjacencyMatrix(example);

  return `
    <div class="graph-layout">
      <article class="graph-card graph-frame">
        <svg viewBox="0 0 560 400" role="img" aria-label="Graph foundations graph">
          ${example.edges
            .map((edge) => {
              const a = getNode(edge.a, example.nodes);
              const b = getNode(edge.b, example.nodes);
              return `
                <line class="edge-line ${incidentEdges.has(edge.id) ? "frontier" : ""}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"></line>
              `;
            })
            .join("")}
          ${example.nodes
            .map(
              (node) => `
                <g>
                  <circle class="node-circle ${node.id === selected ? "in-tree" : ""}" data-graph-vertex="${node.id}" cx="${node.x}" cy="${node.y}" r="30"></circle>
                  <text class="node-label" x="${node.x}" y="${node.y}">${node.id}</text>
                </g>
              `
            )
            .join("")}
        </svg>
      </article>
      <div class="graph-list">
        <article class="control-card">
          <h3>Vertex Inspector</h3>
          <p>${example.description}</p>
          <div class="chip-wrap" style="margin-top:12px;">
            ${graphFoundationExamples
              .map(
                (item) => `
                  <button data-graph-example="${item.id}" class="${item.id === example.id ? "primary" : ""}">
                    ${item.title}
                  </button>
                `
              )
              .join("")}
          </div>
          <div class="mini-stat-grid">
            <div class="mini-stat">
              <span>Example</span>
              <strong>${example.title}</strong>
            </div>
            <div class="mini-stat">
              <span>Selected vertex</span>
              <strong>${selected}</strong>
            </div>
            <div class="mini-stat">
              <span>Degree</span>
              <strong>${neighbors.length}</strong>
            </div>
          </div>
          <div class="feedback neutral">Neighbors: ${neighbors.join(", ")}</div>
        </article>
        <article class="lab-card">
          <h3>Adjacency Lists</h3>
          <div class="graph-list">
            ${example.nodes
              .map((node) => {
                const row = getGraphNeighbors(node.id, example);
                return `
                  <div class="graph-list-item ${node.id === selected ? "is-selected" : ""}">
                    <strong>${node.id}</strong>
                    <span>${row.join(", ")}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
        </article>
      </div>
    </div>
    <article class="graph-card">
      <h3>Adjacency Matrix</h3>
      <div class="matrix-wrap">
        <table class="matrix-table">
          <thead>
            <tr>
              <th></th>
              ${example.nodes.map((node) => `<th>${node.id}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${example.nodes
              .map(
                (rowNode) => `
                  <tr class="${rowNode.id === selected ? "is-selected" : ""}">
                    <th>${rowNode.id}</th>
                    ${example.nodes
                      .map((colNode) => {
                        const value = adjacencyMatrix[rowNode.id][colNode.id];
                        const active = rowNode.id === selected || colNode.id === selected ? "is-active" : "";
                        return `<td class="${active}">${value}</td>`;
                      })
                      .join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </article>
    <article class="graph-card">
      <h3>Study Guide Lens</h3>
      ${renderStudyGuideCards([
        {
          title: "How To Read It",
          items: [
            "Adjacency-list row length equals the vertex degree.",
            "Because the graph is undirected, the adjacency matrix is symmetric across the diagonal.",
            `For ${selected}, the degree is ${neighbors.length} because it touches ${neighbors.join(", ")}.`,
          ],
        },
        {
          title: "Exam Moves",
          items: [
            "Translate between picture, list, and matrix without changing the edge set.",
            "Check whether the graph is a tree by asking if it is connected and has n-1 edges.",
            "A bridge is an edge whose removal disconnects the graph.",
          ],
        },
        {
          title: "Current Example",
          body: example.id === "tree-six"
            ? "This example is a tree, so every edge is a bridge and the matrix stays sparse."
            : example.id === "bridge-six"
              ? "This example is split by one key bridge, so it is good for testing connectivity reasoning."
              : example.id === "dense-five"
                ? "This example is denser, so it is better for practicing degree counts and representation switching than bridge-finding."
                : "This example has a large cycle plus a shortcut edge, so it is useful for walks, paths, and non-bridge reasoning.",
        },
      ])}
    </article>
  `;
}

function bindGraphFoundationsLab() {
  document.querySelectorAll("[data-graph-example]").forEach((button) => {
    button.addEventListener("click", () => {
      const example = getGraphFoundationExample(button.dataset.graphExample);
      state.graphFoundations.exampleId = example.id;
      state.graphFoundations.selectedVertex = example.defaultVertex;
      render();
    });
  });
  document.querySelectorAll("[data-graph-vertex]").forEach((node) => {
    node.addEventListener("click", () => {
      state.graphFoundations.selectedVertex = node.dataset.graphVertex;
      render();
    });
  });
}

function buildAdjacencyMatrix(graph = getGraphFoundationExample()) {
  const matrix = {};
  for (const rowNode of graph.nodes) {
    matrix[rowNode.id] = {};
    for (const colNode of graph.nodes) {
      matrix[rowNode.id][colNode.id] = 0;
    }
  }
  for (const edge of graph.edges) {
    matrix[edge.a][edge.b] = 1;
    matrix[edge.b][edge.a] = 1;
  }
  return matrix;
}

function getGraphNeighbors(vertexId, graph = getGraphFoundationExample()) {
  return graph.edges
    .filter((edge) => edge.a === vertexId || edge.b === vertexId)
    .map((edge) => (edge.a === vertexId ? edge.b : edge.a))
    .sort();
}

function renderNpVisual(scenario) {
  if (scenario.id === "sat-iset") {
    return `
      <div class="graph-layout">
        <article class="graph-card graph-frame">
          <svg viewBox="0 0 620 280" role="img" aria-label="3-SAT to Independent Set gadget">
            <line class="edge-line" x1="110" y1="70" x2="220" y2="70"></line>
            <line class="edge-line" x1="400" y1="170" x2="500" y2="110"></line>
            <line class="edge-line" x1="500" y1="110" x2="520" y2="220"></line>
            <line class="edge-line" x1="520" y1="220" x2="400" y2="170"></line>
            <line class="edge-line frontier" x1="220" y1="70" x2="400" y2="170"></line>
            <line class="edge-line frontier" x1="110" y1="70" x2="520" y2="220"></line>

            <g>
              <circle class="node-circle settled" cx="110" cy="70" r="26"></circle>
              <text class="node-label" x="110" y="70">x</text>
            </g>
            <g>
              <circle class="node-circle unsettled" cx="220" cy="70" r="26"></circle>
              <text class="node-label" x="220" y="70">x'</text>
            </g>
            <g>
              <circle class="node-circle settled" cx="400" cy="170" r="26"></circle>
              <text class="node-label" x="400" y="170">c1</text>
            </g>
            <g>
              <circle class="node-circle unsettled" cx="500" cy="110" r="26"></circle>
              <text class="node-label" x="500" y="110">c2</text>
            </g>
            <g>
              <circle class="node-circle unsettled" cx="520" cy="220" r="26"></circle>
              <text class="node-label" x="520" y="220">c3</text>
            </g>
          </svg>
        </article>
        <div class="graph-list">
          <div class="graph-list-item">
            <strong>Variable pair</strong>
            <span>You cannot choose both a variable and its negation.</span>
          </div>
          <div class="graph-list-item">
            <strong>Clause triangle</strong>
            <span>An independent set can take at most one literal from each clause gadget.</span>
          </div>
          <div class="graph-list-item">
            <strong>Consistency edges</strong>
            <span>Cross edges block contradictory literal selections across clauses.</span>
          </div>
        </div>
      </div>
    `;
  }

  if (scenario.id === "sat-clique") {
    return `
      <div class="graph-layout">
        <article class="graph-card graph-frame">
          <svg viewBox="0 0 620 300" role="img" aria-label="3-SAT to Clique gadget">
            <text class="edge-weight" x="118" y="42">Clause 1</text>
            <text class="edge-weight" x="306" y="42">Clause 2</text>
            <text class="edge-weight" x="496" y="42">Clause 3</text>

            <line class="edge-line frontier" x1="130" y1="92" x2="300" y2="92"></line>
            <line class="edge-line frontier" x1="130" y1="92" x2="490" y2="218"></line>
            <line class="edge-line frontier" x1="300" y1="92" x2="490" y2="218"></line>
            <line class="edge-line frontier" x1="130" y1="208" x2="300" y2="208"></line>

            ${[
              ["x", 130, 92, "settled"],
              ["¬y", 130, 150, "unsettled"],
              ["z", 130, 208, "unsettled"],
              ["y", 300, 92, "settled"],
              ["¬z", 300, 150, "unsettled"],
              ["x", 300, 208, "unsettled"],
              ["x", 490, 92, "unsettled"],
              ["y", 490, 150, "unsettled"],
              ["¬x", 490, 218, "settled"],
            ]
              .map(
                ([label, x, y, variant]) => `
                  <g>
                    <circle class="node-circle ${variant}" cx="${x}" cy="${y}" r="24"></circle>
                    <text class="node-label" x="${x}" y="${y}">${label}</text>
                  </g>
                `
              )
              .join("")}
          </svg>
        </article>
        <div class="graph-list">
          <div class="graph-list-item">
            <strong>Clause columns</strong>
            <span>You must choose one node from each clause column to build a size-k clique.</span>
          </div>
          <div class="graph-list-item">
            <strong>Compatibility edges</strong>
            <span>Edges only connect literals from different clauses that can be true together.</span>
          </div>
        </div>
      </div>
    `;
  }

  if (scenario.id === "sat-vcover") {
    return `
      <div class="graph-layout">
        <article class="graph-card graph-frame">
          <svg viewBox="0 0 620 300" role="img" aria-label="3-SAT to Vertex Cover gadget">
            <line class="edge-line" x1="124" y1="110" x2="236" y2="110"></line>
            <line class="edge-line" x1="124" y1="200" x2="236" y2="200"></line>
            <line class="edge-line frontier" x1="236" y1="110" x2="404" y2="150"></line>
            <line class="edge-line frontier" x1="236" y1="200" x2="404" y2="150"></line>
            <line class="edge-line" x1="404" y1="150" x2="512" y2="102"></line>
            <line class="edge-line" x1="404" y1="150" x2="512" y2="198"></line>
            <line class="edge-line" x1="512" y1="102" x2="512" y2="198"></line>

            ${[
              ["x", 124, 110, "settled"],
              ["¬x", 124, 200, "unsettled"],
              ["y", 236, 110, "unsettled"],
              ["¬y", 236, 200, "settled"],
              ["clause", 404, 150, "settled"],
              ["l1", 512, 102, "unsettled"],
              ["l2", 512, 198, "unsettled"],
            ]
              .map(
                ([label, x, y, variant]) => `
                  <g>
                    <circle class="node-circle ${variant}" cx="${x}" cy="${y}" r="24"></circle>
                    <text class="node-label" x="${x}" y="${y}">${label}</text>
                  </g>
                `
              )
              .join("")}
          </svg>
        </article>
        <div class="graph-list">
          <div class="graph-list-item">
            <strong>Variable gadget</strong>
            <span>The cover size forces a single choice between a variable and its negation.</span>
          </div>
          <div class="graph-list-item">
            <strong>Clause gadget</strong>
            <span>At least one satisfying literal must help cover the clause edges.</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="graph-layout">
      <article class="graph-card graph-frame">
        <svg viewBox="0 0 640 260" role="img" aria-label="Independent Set to Clique complement graph">
          <text class="edge-weight" x="156" y="32">Original graph</text>
          <text class="edge-weight" x="484" y="32">Complement graph</text>

          <line class="edge-line" x1="96" y1="72" x2="196" y2="140"></line>
          <line class="edge-line" x1="196" y1="140" x2="96" y2="208"></line>
          <line class="edge-line" x1="96" y1="72" x2="96" y2="208"></line>

          <line class="edge-line frontier" x1="424" y1="72" x2="544" y2="72"></line>
          <line class="edge-line frontier" x1="544" y1="72" x2="544" y2="208"></line>
          <line class="edge-line frontier" x1="424" y1="208" x2="544" y2="208"></line>

          ${[
            ["a", 96, 72],
            ["b", 196, 140],
            ["c", 96, 208],
            ["d", 264, 72],
            ["a", 424, 72],
            ["b", 544, 72],
            ["c", 424, 208],
            ["d", 544, 208],
          ]
            .map(
              ([label, x, y]) => `
                <g>
                  <circle class="node-circle ${x > 320 ? "settled" : "unsettled"}" cx="${x}" cy="${y}" r="24"></circle>
                  <text class="node-label" x="${x}" y="${y}">${label}</text>
                </g>
              `
            )
            .join("")}
        </svg>
      </article>
      <div class="graph-list">
        <div class="graph-list-item">
          <strong>Key move</strong>
          <span>Independent sets in G become cliques in the complement graph G̅.</span>
        </div>
        <div class="graph-list-item">
          <strong>Parameter</strong>
          <span>The target size k stays the same through this reduction.</span>
        </div>
      </div>
    </div>
  `;
}

function buildNpWitnessChoices(scenario) {
  return [
    scenario.witness,
    "Give a polynomial-time algorithm that solves every instance directly from scratch.",
    "Nothing extra; NP-hardness already proves the target is in NP.",
  ];
}

function renderTableDoublingLab() {
  const td = state.tableDoubling;
  const fillPercent = td.capacity ? (td.items.length / td.capacity) * 100 : 0;
  const ops = Math.max(1, td.history.length - 1);
  const amortizedCost = (td.totalCost / ops).toFixed(2);
  const studyCards = buildNonGraphStudyCards("table-doubling", { td });

  return `
    ${renderStudyGuideSection("Table Doubling Study Guide", studyCards)}
    <div class="lab-grid">
      <article class="control-card">
        <h3>Dynamic Array Sandbox</h3>
        <p>Click Insert and Delete to drive the table yourself. Most operations cost 1 and leave the capacity alone; doubling and shrinking only happen at the threshold.</p>
        <div class="control-row">
          <button data-shrink-mode="half" class="${td.shrinkMode === "half" ? "primary" : ""}">Shrink at half-full</button>
          <button data-shrink-mode="quarter" class="${td.shrinkMode === "quarter" ? "primary" : ""}">Shrink at quarter-full</button>
        </div>
        <div class="control-row" style="margin-top:12px;">
          <button class="primary" id="table-insert">Insert</button>
          <button id="table-delete" ${td.items.length ? "" : "disabled"}>Delete</button>
          <button id="table-reset">Reset</button>
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Size / capacity</span>
            <strong>${td.items.length} / ${td.capacity}</strong>
          </div>
          <div class="mini-stat">
            <span>Total cost</span>
            <strong>${td.totalCost}</strong>
          </div>
          <div class="mini-stat">
            <span>Resizes</span>
            <strong>${td.resizeCount}</strong>
          </div>
          <div class="mini-stat">
            <span>Amortized cost</span>
            <strong>${amortizedCost}</strong>
          </div>
        </div>
        <div class="feedback neutral">Last op cost: ${td.lastCost || 0}. Shrink policy: ${td.shrinkMode === "half" ? "halve when size ≤ m/2 (thrashy)" : "halve when size ≤ m/4 (stable)"}.</div>
      </article>
      <article class="lab-card">
        <h3>Operation Log</h3>
        <ol class="history-log">
          ${td.history.map((line) => `<li>${line}</li>`).join("")}
        </ol>
      </article>
    </div>
    <div class="tree-dual">
      <article class="graph-card">
        <h3>Capacity View</h3>
        <div class="capacity-bar">
          <div class="capacity-fill" style="width:${fillPercent}%"></div>
        </div>
        <div class="array-strip" style="margin-top:14px;">
          ${Array.from({ length: td.capacity }, (_, index) => {
            const value = td.items[index];
            if (value !== undefined) {
              return `
                <div class="array-cell occupied">
                  <span class="array-index">slot ${index}</span>
                  <strong>${value}</strong>
                </div>
              `;
            }
            return `
              <div class="array-cell empty">
                <span class="array-index">slot ${index}</span>
                <strong>empty</strong>
              </div>
            `;
          }).join("")}
        </div>
      </article>
      <article class="graph-card">
        <h3>What To Watch For</h3>
        <div class="graph-list">
          <div class="graph-list-item">
            <strong>Insert at non-full</strong>
            <span>Cost 1. Capacity does not change.</span>
          </div>
          <div class="graph-list-item">
            <strong>Insert at full</strong>
            <span>Double capacity and copy the current items. Cost 1 + n.</span>
          </div>
          <div class="graph-list-item">
            <strong>Delete above threshold</strong>
            <span>Cost 1. Capacity does not change.</span>
          </div>
          <div class="graph-list-item">
            <strong>Delete at threshold</strong>
            <span>Halve capacity and copy the surviving items. Cost 1 + remaining.</span>
          </div>
        </div>
      </article>
    </div>
  `;
}

function bindTableDoublingLab() {
  document.querySelectorAll("[data-shrink-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tableDoubling = createInitialTableDoublingState();
      state.tableDoubling.shrinkMode = button.dataset.shrinkMode;
      state.tableDoubling.history = [
        `Switched to ${button.dataset.shrinkMode === "half" ? "half-full" : "quarter-full"} shrink policy. Table reset.`,
      ];
      render();
    });
  });
  document.querySelector("#table-insert").addEventListener("click", () => {
    applyTableDoublingInsert();
    render();
  });
  document.querySelector("#table-delete").addEventListener("click", () => {
    if (state.tableDoubling.items.length === 0) return;
    applyTableDoublingDelete();
    render();
  });
  document.querySelector("#table-reset").addEventListener("click", () => {
    state.tableDoubling = createInitialTableDoublingState();
    render();
  });
}

function applyTableDoublingInsert() {
  const td = state.tableDoubling;
  const value = td.nextValue;
  let cost = 0;
  if (td.items.length === td.capacity) {
    const oldCapacity = td.capacity;
    const copyCost = td.items.length;
    td.capacity *= 2;
    td.resizeCount += 1;
    cost += copyCost;
    td.history.push(
      `Insert ${value}: table is full (${oldCapacity}/${oldCapacity}). Double capacity to ${td.capacity} and copy ${copyCost} items. Then place ${value}. Cost ${copyCost + 1}.`
    );
  } else {
    td.history.push(`Insert ${value}: free slot available (${td.items.length + 1}/${td.capacity}). Cost 1.`);
  }
  td.items.push(value);
  cost += 1;
  td.totalCost += cost;
  td.lastCost = cost;
  td.nextValue += 1;
}

function applyTableDoublingDelete() {
  const td = state.tableDoubling;
  const removed = td.items.pop();
  let cost = 1;
  const threshold = td.shrinkMode === "half" ? td.capacity / 2 : td.capacity / 4;
  if (td.capacity > td.minCapacity && td.items.length <= threshold) {
    const oldCapacity = td.capacity;
    const copyCost = td.items.length;
    td.capacity = Math.max(td.minCapacity, Math.floor(td.capacity / 2));
    td.resizeCount += 1;
    cost += copyCost;
    td.history.push(
      `Delete ${removed}: size ${td.items.length} at or below the ${td.shrinkMode === "half" ? "m/2" : "m/4"} threshold. Halve capacity ${oldCapacity} → ${td.capacity} and copy ${copyCost} items. Cost ${copyCost + 1}.`
    );
  } else {
    td.history.push(`Delete ${removed}: size now ${td.items.length}/${td.capacity}. No resize. Cost 1.`);
  }
  td.totalCost += cost;
  td.lastCost = cost;
}

function renderUnionFindLab() {
  const example = getUnionFindExample();
  const sim = simulateUnionFind(state.unionFind.step, example);
  const nextOp = example.operations[state.unionFind.step] || null;

  return `
    <div class="lab-grid">
      <article class="control-card">
        <h3>Connectivity Lab</h3>
        <p>${example.description}</p>
        <div class="chip-wrap" style="margin-top:12px;">
          ${unionFindExamples
            .map(
              (item) => `
                <button data-uf-example="${item.id}" class="${item.id === example.id ? "primary" : ""}">
                  ${item.title}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="control-row">
          <button class="primary" id="uf-step">Advance One Operation</button>
          <button id="uf-run-all">Run All</button>
          <button id="uf-reset">Reset</button>
        </div>
        <div class="control-row" style="margin-top:12px;">
          <button data-uf-view="forest" class="${state.unionFind.view === "forest" ? "primary" : ""}">Forest view</button>
          <button data-uf-view="parents" class="${state.unionFind.view === "parents" ? "primary" : ""}">Parent table</button>
        </div>
        <div class="mini-stat-grid">
          <div class="mini-stat">
            <span>Example</span>
            <strong>${example.title}</strong>
          </div>
          <div class="mini-stat">
            <span>Applied ops</span>
            <strong>${state.unionFind.step}</strong>
          </div>
          <div class="mini-stat">
            <span>Component count</span>
            <strong>${sim.components.length}</strong>
          </div>
        </div>
        <div class="feedback neutral">Next op: ${nextOp ? nextOp.label : "done"}</div>
        <div class="feedback ${sim.feedbackTone}">${sim.feedback}</div>
      </article>
      <article class="lab-card">
        <h3>Operation Log</h3>
        <div class="chip-wrap">
          ${example.operations
            .map(
              (op, index) => `
                <span class="chip ${index < state.unionFind.step ? "chip-done" : ""}">
                  ${index + 1}. ${op.label}
                </span>
              `
            )
            .join("")}
        </div>
        <ol class="history-log" style="margin-top:14px;">
          ${sim.history.map((line) => `<li>${line}</li>`).join("")}
        </ol>
      </article>
    </div>
    <div class="tree-dual">
      <article class="graph-card">
        <h3>${state.unionFind.view === "forest" ? "Disjoint-Set Forest" : "Parent Pointers"}</h3>
        ${
          state.unionFind.view === "forest"
            ? renderUnionFindForest(sim.nodes, sim.compressedNodes)
            : renderUnionFindParentGrid(sim.nodes, sim.compressedNodes)
        }
      </article>
      <article class="graph-card">
        <h3>Connected Components</h3>
        <div class="set-grid">
          ${sim.components
            .map(
              (component) => `
                <div class="set-card">
                  <span class="array-index">root ${component.root}</span>
                  <strong>${component.members.join(", ")}</strong>
                  <span class="array-meta">size ${component.members.length}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    </div>
    <article class="graph-card">
      <h3>Study Guide Lens</h3>
      ${renderStudyGuideCards([
        {
          title: "Union By Height",
          items: [
            "Find each root first, then attach the shorter tree under the taller root.",
            "If the two roots have equal height, pick one root and increase its height by 1.",
            "The only node whose height can grow is the surviving root in an equal-height union.",
          ],
        },
        {
          title: "Path Compression",
          items: [
            "A FindSet call follows parent pointers to the root.",
            "After the root is found, every node on that search path can point directly to the root.",
            "Compression changes parent pointers, not the connected components themselves.",
          ],
        },
        {
          title: "Current Example",
          body: `${example.title} has ${example.operations.length} operations. Right now there are ${sim.components.length} components, and the next move is ${nextOp ? nextOp.label : "complete"}.`,
        },
      ])}
    </article>
  `;
}

function bindUnionFindLab() {
  document.querySelectorAll("[data-uf-example]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unionFind.exampleId = button.dataset.ufExample;
      state.unionFind.step = 0;
      state.unionFind.view = "forest";
      render();
    });
  });
  document.querySelector("#uf-step").addEventListener("click", () => {
    const example = getUnionFindExample();
    state.unionFind.step = Math.min(example.operations.length, state.unionFind.step + 1);
    render();
  });
  document.querySelector("#uf-run-all").addEventListener("click", () => {
    const example = getUnionFindExample();
    state.unionFind.step = example.operations.length;
    render();
  });
  document.querySelector("#uf-reset").addEventListener("click", () => {
    state.unionFind.step = 0;
    state.unionFind.view = "forest";
    render();
  });
  document.querySelectorAll("[data-uf-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unionFind.view = button.dataset.ufView;
      render();
    });
  });
}

function simulateUnionFind(steps, example = getUnionFindExample()) {
  const nodes = buildLookup(example.nodeIds.map((id) => ({ id })), { parent: "", height: 0 }, true);
  const history = [`Start with ${example.nodeIds.length} singleton sets.`];
  let feedback = "Each element begins as its own root.";
  let feedbackTone = "neutral";
  let compressedNodes = new Set();

  for (let index = 0; index < steps; index += 1) {
    const op = example.operations[index];
    if (op.type === "union") {
      const result = unionByHeight(nodes, op.a, op.b);
      history.push(result.historyLine);
      feedback = result.feedback;
      feedbackTone = "neutral";
      compressedNodes = new Set();
      continue;
    }

    const result = findSetPathCompress(nodes, op.target);
    history.push(result.historyLine);
    feedback = result.feedback;
    feedbackTone = "";
    compressedNodes = new Set(result.compressed);
  }

  return {
    nodes,
    history,
    components: getUnionFindComponents(nodes),
    compressedNodes,
    feedback,
    feedbackTone,
  };
}

function unionByHeight(nodes, leftId, rightId) {
  const leftRoot = findSet(nodes, leftId);
  const rightRoot = findSet(nodes, rightId);
  if (leftRoot === rightRoot) {
    return {
      historyLine: `${leftId} and ${rightId} are already in the same set rooted at ${leftRoot}.`,
      feedback: "Union on the same component changes nothing.",
    };
  }

  const leftHeight = nodes[leftRoot].height;
  const rightHeight = nodes[rightRoot].height;
  let root = leftRoot;
  let child = rightRoot;
  let raised = false;

  if (leftHeight < rightHeight) {
    root = rightRoot;
    child = leftRoot;
  }

  nodes[child].parent = root;
  if (leftHeight === rightHeight) {
    nodes[root].height += 1;
    raised = true;
  }

  return {
    historyLine: `${leftId} and ${rightId} merge by attaching root ${child} under root ${root}${raised ? `, raising ${root}'s height to ${nodes[root].height}` : ""}.`,
    feedback: raised
      ? `The roots had equal height, so ${root} stays root and its height increases.`
      : `The shorter tree attaches under ${root}, keeping the forest shallow.`,
  };
}

function findSet(nodes, id) {
  let current = id;
  while (nodes[current].parent !== current) {
    current = nodes[current].parent;
  }
  return current;
}

function findSetPathCompress(nodes, id) {
  const path = [id];
  let current = id;
  while (nodes[current].parent !== current) {
    current = nodes[current].parent;
    path.push(current);
  }
  const root = current;
  const compressed = [];
  for (const nodeId of path.slice(0, -1)) {
    if (nodes[nodeId].parent !== root) {
      nodes[nodeId].parent = root;
      compressed.push(nodeId);
    }
  }
  return {
    root,
    path,
    compressed,
    historyLine: `${id} follows ${path.join(" -> ")} and returns root ${root}${compressed.length ? `. Path compression rewires ${compressed.join(", ")} directly to ${root}.` : "."}`,
    feedback: compressed.length
      ? `Path compression shortens future searches by pointing ${compressed.join(", ")} straight at ${root}.`
      : `${id} was already one edge away from its root.`,
  };
}

function getUnionFindComponents(nodes) {
  const groups = new Map();
  for (const id of Object.keys(nodes).sort()) {
    const root = findSet(nodes, id);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(id);
  }
  return [...groups.entries()]
    .map(([root, members]) => ({ root, members }))
    .sort((left, right) => left.root.localeCompare(right.root));
}

function buildBSTFromValues(values) {
  let root = null;
  for (const value of values) {
    root = bstInsert(root, value);
  }
  return root;
}

function bstInsert(root, value) {
  if (!root) {
    return { id: `bst-${value}`, label: String(value) };
  }
  if (value < Number(root.label)) {
    return { ...root, left: bstInsert(root.left || null, value) };
  }
  return { ...root, right: bstInsert(root.right || null, value) };
}

function bstSearchPath(root, key) {
  const path = [];
  let current = root;
  while (current) {
    path.push(Number(current.label));
    const currentKey = Number(current.label);
    if (currentKey === key) return { path, found: true };
    current = key < currentKey ? current.left || null : current.right || null;
  }
  return { path, found: false };
}

function inorderTraversal(root) {
  if (!root) return [];
  return [...inorderTraversal(root.left || null), Number(root.label), ...inorderTraversal(root.right || null)];
}

function getTreeHeight(root) {
  if (!root) return -1;
  return 1 + Math.max(getTreeHeight(root.left || null), getTreeHeight(root.right || null));
}

function annotateAvlTree(root) {
  const result = annotateAvlNode(root);
  return result.node;
}

function annotateAvlNode(root) {
  if (!root) return { node: null, height: -1 };
  const left = annotateAvlNode(root.left || null);
  const right = annotateAvlNode(root.right || null);
  const height = 1 + Math.max(left.height, right.height);
  const balance = left.height - right.height;
  return {
    height,
    node: {
      ...root,
      left: left.node,
      right: right.node,
      meta: `h ${height} · bf ${balance}`,
      variant: Math.abs(balance) > 1 ? "warning" : "default",
    },
  };
}

function cloneTree(root) {
  if (!root) return null;
  return {
    ...root,
    left: cloneTree(root.left || null),
    right: cloneTree(root.right || null),
  };
}

function decorateTree(root, decorate) {
  if (!root) return null;
  const extra = decorate(root) || {};
  return {
    ...root,
    ...extra,
    left: decorateTree(root.left || null, decorate),
    right: decorateTree(root.right || null, decorate),
  };
}

function heapArrayToTree(array, index = 0) {
  if (index >= array.length) return null;
  return {
    id: `heap-${index}`,
    label: String(array[index]),
    meta: `i ${index + 1}`,
    left: heapArrayToTree(array, index * 2 + 1),
    right: heapArrayToTree(array, index * 2 + 2),
  };
}

function renderBinaryTree(root, options = {}) {
  if (!root) {
    return `<div class="tree-placeholder">${options.emptyLabel || "Nothing to display."}</div>`;
  }

  const layout = layoutBinaryTree(root, options.width || 680);
  const clickAttr = options.clickAttr || "";
  const selectedId = options.selectedId || "";
  return `
    <div class="tree-frame">
      <svg class="tree-svg ${clickAttr ? "interactive" : ""}" viewBox="0 0 ${layout.width} ${layout.height}" role="img" aria-label="Binary tree">
        ${layout.edges
          .map(
            (edge) => `
              <line
                class="tree-link"
                x1="${edge.from.x}"
                y1="${edge.from.y}"
                x2="${edge.to.x}"
                y2="${edge.to.y}"
              ></line>
            `
          )
          .join("")}
        ${layout.nodes
          .map((node) => {
            const isSelected = selectedId && selectedId === node.id;
            const clickData = clickAttr ? `${clickAttr}="${node.id}"` : "";
            return `
              <g>
                <circle class="tree-circle ${node.variant || "default"} ${node.highlight ? "highlight" : ""} ${clickAttr ? "clickable" : ""} ${isSelected ? "selected" : ""}" ${clickData} cx="${node.x}" cy="${node.y}" r="28"></circle>
                <text class="tree-value ${node.variant || "default"}" x="${node.x}" y="${node.y - 2}">${node.label}</text>
                ${node.meta ? `<text class="tree-meta" x="${node.x}" y="${node.y + 46}">${node.meta}</text>` : ""}
              </g>
            `;
          })
          .join("")}
      </svg>
    </div>
  `;
}

function layoutBinaryTree(root, width = 680) {
  const nodes = [];
  const rawEdges = [];
  let order = 0;
  let maxDepth = 0;

  function visit(node, depth, parentId = "") {
    if (!node) return;
    maxDepth = Math.max(maxDepth, depth);
    visit(node.left || null, depth + 1, node.id);
    nodes.push({ ...node, order, depth, parentId });
    order += 1;
    if (parentId) rawEdges.push({ from: parentId, to: node.id });
    visit(node.right || null, depth + 1, node.id);
  }

  visit(root, 0);
  const span = Math.max(nodes.length - 1, 1);
  const innerWidth = width - 96;
  const idToNode = new Map();
  const laidOutNodes = nodes.map((node) => {
    const x = 48 + (innerWidth * node.order) / span;
    const y = 72 + node.depth * 118;
    const laidOut = { ...node, x, y };
    idToNode.set(node.id, laidOut);
    return laidOut;
  });
  const edges = rawEdges
    .map((edge) => ({ from: idToNode.get(edge.from), to: idToNode.get(edge.to) }))
    .filter((edge) => edge.from && edge.to);

  return {
    width,
    height: 150 + maxDepth * 118,
    nodes: laidOutNodes,
    edges,
  };
}

function renderStudyGuideCards(cards) {
  return `
    <div class="study-grid">
      ${cards
        .map((card) => {
          const listMarkup = card.items
            ? `<ul class="study-list">${card.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
            : `<p>${card.body}</p>`;
          return `
            <div class="study-card">
              <span class="partition-label">${card.title}</span>
              ${listMarkup}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderStudyGuideSection(title, cards, lead = "Read this section first. The example below is just a self-check from the notes, outlines, and review packets.") {
  return `
    <article class="graph-card study-guide-panel">
      <h3>${title}</h3>
      <p class="study-lead">${lead}</p>
      ${renderStudyGuideCards(cards)}
    </article>
  `;
}

function buildNonGraphStudyCards(unitId, context = {}) {
  const unit = getUnitById(unitId);
  if (!unit) return [];

  switch (unitId) {
    case "asymptotic":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "How To Compare",
          items: [
            "Drop constant factors and lower-order terms before comparing functions.",
            "Use dominant terms or a limit comparison instead of plugging in giant numbers.",
            "If f(n) / g(n) tends to a positive constant, that is the clean Theta signal.",
          ],
        },
        {
          title: "Growth Ladder",
          items: [
            "Slowest to fastest: log n -> n^0.1 -> n -> n log n -> n^2 -> 2^n.",
            "O gives an upper bound, Omega gives a lower bound, and Theta means both hold.",
            "little-o and little-omega mean the growth gap is strict.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [...unit.review, `Current chain: ${context.chain || "start here"}.`, `Next missing spot: ${context.nextLabel || "complete"}.`],
        },
      ];
    case "loop-analysis":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Workflow",
          items: [
            "Translate the inner loop into how many times it runs for each outer-loop value.",
            "Write the exact sum or product before simplifying to Theta.",
            "If the code can exit early, separate best-case and worst-case behavior explicitly.",
          ],
        },
        {
          title: "Pattern Clues",
          items: [
            "Repeated width means multiplication: n times a band like log n or sqrt(n).",
            "Growing or shrinking bounds often create a sum, not a product.",
            "Doubling and halving indices usually lead to geometric series.",
            "A third nested loop can add an extra factor such as log n on top of a triangular base.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [
            ...unit.review,
            `Current pattern: ${context.pattern.title} -> ${context.pattern.asymptotic}.`,
            `At n = ${context.n}, the exact count is ${context.exactCount}.`,
            `Formula snapshot: ${context.exactFormula}.`,
          ],
        },
      ];
    case "recurrence":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Write The Recurrence",
          items: [
            "Count how many recursive calls survive.",
            "Track the size of each recursive subproblem.",
            "Add the nonrecursive work done around the calls.",
          ],
        },
        {
          title: "Family Clues",
          items: [
            "One half plus constant work usually signals logarithmic growth.",
            "Two halves plus linear combine work gives the classic n log n merge-sort pattern.",
            "Overlapping branches like Fibonacci blow up exponentially without memoization.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [
            ...unit.review,
            `Current scenario: ${context.scenario.title}.`,
            "Build the recurrence from the code first, then solve for the final class.",
          ],
        },
      ];
    case "probabilistic":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Workflow",
          items: [
            "List the mutually exclusive events the algorithm can experience.",
            "Best case is the minimum cost, worst case is the maximum cost.",
            "Expected cost is the weighted sum of probability times work.",
          ],
        },
        {
          title: "Current Example",
          items: [
            "Sequential search must include the unsuccessful-search event.",
            "Best = 1 comparison, worst = 6 comparisons, expected = 27/7.",
            "Expected value sits between the extremes because it averages all events by probability.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [...unit.review, "Do not average raw positions without the matching probabilities.", "Keep B(n), W(n), and ET(n) as separate answers."],
        },
      ];
    case "quicksort":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Partition Story",
          items: [
            "Choose a pivot, then send smaller values left and larger values right.",
            "The pivot lands in its final sorted position after partitioning.",
            "Quicksort finishes by recursively sorting the two sides.",
          ],
        },
        {
          title: "Split Quality",
          items: [
            "Balanced splits keep the recursion tree shallow.",
            "Lopsided splits drive the recursion deeper and can approach quadratic behavior.",
            "Random pivots are analyzed in expectation, not because every single split is balanced.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [...unit.review, `Current pivot: ${context.sim.pivot}.`, `This split is ${context.sim.left.length} left and ${context.sim.right.length} right.`],
        },
      ];
    case "hashing":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Chaining Vs Open Addressing",
          items: [
            "Chaining keeps all colliding keys in the same bucket list.",
            "Open addressing keeps probing until it finds an empty slot.",
            "The exact insert order matters because collisions accumulate step by step.",
          ],
        },
        {
          title: "Hash Function Checklist",
          items: [
            "A good hash spreads patterned keys across the table.",
            "A bad hash creates clustering, so even simple packets become messy.",
            `Current mode: ${context.mode === "chained" ? "chaining" : "open addressing"}.`,
          ],
        },
        {
          title: "Review Packet Moves",
          items: [...unit.review, `Packet order: ${hashSequence.join(", ")}.`, `Next key in the walkthrough: ${context.nextKey}.`],
        },
      ];
    case "heaps":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Core Operations",
          items: [
            "Insert: append the new value, then bubble it up until the heap property holds.",
            "ExtractMax: remove the root, move the last value up, then heapify down.",
            "MaxHeapify repairs one local violation by pushing a value toward its correct level.",
          ],
        },
        {
          title: "Array And Tree View",
          items: [
            "The tree picture and the array are the same heap, just viewed differently.",
            "The root is always the current maximum in a max-heap.",
            "Exam questions often expect you to move cleanly between the array and tree forms.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [
            ...unit.review,
            `Selected operation: ${context.selectedAction}.`,
            `Selected node: ${context.selectedNode}.`,
            `Extracted values so far: ${context.extracted}.`,
          ],
        },
      ];
    case "bst":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "BST Rules",
          items: [
            "Every left subtree key is smaller than the node, and every right subtree key is larger.",
            "Search and insert follow a single root-to-leaf path.",
            "An inorder traversal must return the keys in sorted order.",
          ],
        },
        {
          title: "Delete Cases",
          items: [
            "Leaf: remove it directly.",
            "One child: splice the child into the deleted node's position.",
            "Two children: replace with successor or predecessor, then clean up that node.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [
            ...unit.review,
            `Current operation: ${context.operationLabel}.`,
            `Current result: ${context.resultSummary}.`,
            `Current inorder traversal: ${context.inorder}.`,
          ],
        },
      ];
    case "avl":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Balance Check",
          items: [
            "Balance factor is height(left) - height(right).",
            "A node is legal only when its balance factor is -1, 0, or 1.",
            "Repairs happen at the first ancestor that becomes unbalanced after an insertion.",
          ],
        },
        {
          title: "Rotation Cheatsheet",
          items: [
            "LL -> single right rotation.",
            "RR -> single left rotation.",
            "LR -> left rotation on the child, then right rotation on the ancestor.",
            "RL -> right rotation on the child, then left rotation on the ancestor.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [
            ...unit.review,
            `Current case: ${context.challenge.title}.`,
            `Repair to remember: ${avlRepairLabels[context.challenge.correctRepair]}.`,
            `Current tree status: ${context.balanceSummary || "Balanced"}.`,
            `Last move performed: ${context.lastOperation || "None yet"}.`,
          ],
        },
      ];
    case "rbt":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Invariants",
          items: [
            "The root is black.",
            "A red node cannot have a red child.",
            "Every root-to-null path must have the same black height.",
          ],
        },
        {
          title: "Insertion Fixup Cases",
          items: [
            "Case I — parent and auncle both red: recolor parent/auncle black, grandparent red, then repeat on the grandparent.",
            "Case II — parent red, auncle black, z on the opposite side: rotate on the parent, reassign z, then continue with Case III.",
            "Case III — parent red, auncle black, z on the same side: rotate on the grandparent, color parent black, sibling red.",
            "After the fixup, force the root to be black.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [...unit.review, `Current scenario: ${context.scenario.title}.`, `Case to remember: ${rbtCaseLabels[context.scenario.correctCase]}.`],
        },
      ];
    case "table-doubling":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Amortized Story",
          items: [
            "A single resize is expensive because it copies many items.",
            "Amortized analysis spreads that copy cost across the long run of cheap operations around it.",
            "The packet is asking about total sequence cost, not the luck of one operation.",
          ],
        },
        {
          title: "Policy Contrast",
          items: [
            "Doubling on full still gives constant amortized insertion.",
            "Shrinking at half-full can thrash when deletes and inserts alternate near the boundary.",
            "Shrinking at quarter-full leaves slack and avoids immediate regrowth.",
          ],
        },
        {
          title: "Review Packet Moves",
          items: [...unit.review, `Current size / capacity: ${context.td.items.length} / ${context.td.capacity}.`, `Resizes so far: ${context.td.resizeCount}. Total cost: ${context.td.totalCost}.`],
        },
      ];
    case "np-completeness":
      return [
        { title: "From The Notes", items: unit.focus },
        {
          title: "Proof Recipe",
          items: [
            "First show the target problem is in NP by giving a polynomial-time verifier.",
            "Then reduce a known NP-hard problem into the target.",
            "Keep the instance mapping and the parameter mapping explicit.",
          ],
        },
        {
          title: "Direction Rule",
          items: [
            "To prove B is hard, start from a known hard A and build A <=p B.",
            "Do not flip the reduction arrow just because B is the problem you care about.",
            "The verifier argument is separate from the hardness argument.",
          ],
        },
        {
          title: "Classic Reductions In The Notes",
          items: [
            "3-SAT reduces to Independent Set (literal vertices, clause triangles, negation edges).",
            "Independent Set reduces to Clique via the graph complement.",
            "Independent Set reduces to Vertex Cover via the complement set V − V'.",
            "Vertex Cover reduces to Set Cover by making one set per vertex containing its incident edges.",
          ],
        },
        { title: "Review Packet Moves", items: unit.review },
      ];
    default:
      return [
        { title: "From The Notes", items: unit.focus },
        { title: "Review Packet Pattern", items: unit.review },
      ];
  }
}

function renderArrayCell(value, variant = "") {
  return `
    <div class="array-cell ${variant}">
      <strong>${value}</strong>
    </div>
  `;
}

function renderArrayEmpty() {
  return `
    <div class="array-cell empty">
      <strong>empty</strong>
    </div>
  `;
}

function renderUnionFindParentGrid(nodes, compressedNodes) {
  return `
    <div class="array-strip parent-grid">
      ${Object.keys(nodes)
        .sort()
        .map((id) => {
          const node = nodes[id];
          const variant = compressedNodes.has(id) ? "compressed" : node.parent === id ? "root" : "";
          return `
            <div class="array-cell ${variant}">
              <span class="array-index">${id}</span>
              <strong>${node.parent === id ? "root" : node.parent}</strong>
              <span class="array-meta">${node.parent === id ? `h ${node.height}` : `parent ${node.parent}`}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderUnionFindForest(nodes, compressedNodes) {
  const layout = buildUnionFindLayout(nodes);
  return `
    <div class="forest-frame">
      <svg class="forest-svg" viewBox="0 0 ${layout.width} ${layout.height}" role="img" aria-label="Union-find forest">
        ${layout.edges
          .map(
            (edge) => `
              <line class="forest-link" x1="${edge.from.x}" y1="${edge.from.y}" x2="${edge.to.x}" y2="${edge.to.y}"></line>
            `
          )
          .join("")}
        ${layout.nodes
          .map((node) => {
            const variant = node.parent === node.id ? "accent" : "default";
            const highlight = compressedNodes.has(node.id) ? "highlight" : "";
            const meta = node.parent === node.id ? `root · h ${node.height}` : `p ${node.parent}`;
            return `
              <g>
                <circle class="tree-circle ${variant} ${highlight}" cx="${node.x}" cy="${node.y}" r="26"></circle>
                <text class="tree-value ${variant}" x="${node.x}" y="${node.y - 2}">${node.id}</text>
                <text class="tree-meta" x="${node.x}" y="${node.y + 42}">${meta}</text>
              </g>
            `;
          })
          .join("")}
      </svg>
    </div>
  `;
}

function buildUnionFindLayout(nodes) {
  const children = new Map();
  for (const id of Object.keys(nodes)) {
    children.set(id, []);
  }
  for (const node of Object.values(nodes)) {
    if (node.parent !== node.id) {
      children.get(node.parent).push(node.id);
    }
  }
  for (const list of children.values()) {
    list.sort();
  }

  const roots = Object.keys(nodes)
    .filter((id) => nodes[id].parent === id)
    .sort();
  const layouts = roots.map((root) => {
    const placedNodes = [];
    const placedEdges = [];
    let leafIndex = 0;
    let maxDepth = 0;

    function visit(id, depth) {
      const childIds = children.get(id) || [];
      maxDepth = Math.max(maxDepth, depth);
      let x;
      if (!childIds.length) {
        x = leafIndex * 92;
        leafIndex += 1;
      } else {
        const childXs = childIds.map((childId) => {
          const childX = visit(childId, depth + 1);
          placedEdges.push({ from: id, to: childId });
          return childX;
        });
        x = (childXs[0] + childXs[childXs.length - 1]) / 2;
      }
      placedNodes.push({
        ...nodes[id],
        x,
        y: 64 + depth * 118,
      });
      return x;
    }

    visit(root, 0);
    return {
      width: Math.max(1, leafIndex) * 92,
      height: 150 + maxDepth * 118,
      nodes: placedNodes,
      edges: placedEdges,
    };
  });

  let xOffset = 56;
  let maxHeight = 260;
  const placedNodes = [];
  const rawEdges = [];
  const nodeMap = new Map();
  for (const layout of layouts) {
    maxHeight = Math.max(maxHeight, layout.height);
    for (const node of layout.nodes) {
      const shifted = { ...node, x: node.x + xOffset };
      placedNodes.push(shifted);
      nodeMap.set(node.id, shifted);
    }
    rawEdges.push(...layout.edges);
    xOffset += layout.width + 72;
  }

  return {
    width: Math.max(420, xOffset),
    height: maxHeight,
    nodes: placedNodes,
    edges: rawEdges
      .map((edge) => ({ from: nodeMap.get(edge.from), to: nodeMap.get(edge.to) }))
      .filter((edge) => edge.from && edge.to),
  };
}

function renderMstLab() {
  const graph = getMstExample();
  const layout = buildScaledGraphLayout(graph.nodes, 820, 520, 74);
  const treeVertices = deriveMstVertices(graph);
  const completed = state.mst.selectedEdgeIds.length === graph.nodes.length - 1;
  const selectedSet = new Set(state.mst.selectedEdgeIds);
  const eligible = getMstEligibleEdges(treeVertices, graph);
  const minWeight = eligible.length ? Math.min(...eligible.map((edge) => edge.weight)) : 0;
  const totalWeight = graph.edges
    .filter((edge) => selectedSet.has(edge.id))
    .reduce((sum, edge) => sum + edge.weight, 0);

  return `
    <div class="graph-layout">
      <article class="graph-card graph-frame graph-frame-spacious">
        <svg viewBox="0 0 820 520" role="img" aria-label="Minimum spanning tree graph">
          ${graph.edges
            .map((edge) => {
              const a = layout.get(edge.a);
              const b = layout.get(edge.b);
              const active = selectedSet.has(edge.id) ? "active" : "";
              const frontier = !selectedSet.has(edge.id) && eligible.some((item) => item.id === edge.id) ? "frontier" : "";
              const incorrect = state.mst.flashEdgeId === edge.id ? "incorrect" : "";
              const label = getGraphEdgeLabelPosition(edge, a, b);
              return `
                <g>
                  <line class="edge-line ${active} ${frontier} ${incorrect}" data-mst-edge="${edge.id}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"></line>
                  ${renderEdgeWeightBadge(label.x, label.y, edge.weight)}
                </g>
              `;
            })
            .join("")}
          ${graph.nodes
            .map((node) => {
              const placed = layout.get(node.id);
              const inTree = treeVertices.has(node.id) ? "in-tree" : "";
              return `
                <g>
                  <circle class="node-circle ${inTree}" cx="${placed.x}" cy="${placed.y}" r="28"></circle>
                  <text class="node-label" x="${placed.x}" y="${placed.y}">${node.id}</text>
                </g>
              `;
            })
            .join("")}
        </svg>
      </article>
      <div class="graph-list">
        <article class="control-card">
          <h3>Prim Tracker</h3>
          <p>${graph.description}</p>
          <div class="chip-wrap" style="margin-top:12px;">
            ${mstExamples
              .map(
                (item) => `
                  <button data-mst-example="${item.id}" class="${item.id === graph.id ? "primary" : ""}">
                    ${item.title}
                  </button>
                `
              )
              .join("")}
          </div>
          <p style="margin-top:12px;">Current tree starts at <strong>${graph.start}</strong>. Only edges crossing the cut are legal candidates.</p>
          <div class="mini-stat-grid">
            <div class="mini-stat">
              <span>Example</span>
              <strong>${graph.title}</strong>
            </div>
            <div class="mini-stat">
              <span>Edges chosen</span>
              <strong>${state.mst.selectedEdgeIds.length}</strong>
            </div>
            <div class="mini-stat">
              <span>Tree weight</span>
              <strong>${totalWeight}</strong>
            </div>
          </div>
          <div class="feedback neutral">Lightest frontier edge: ${eligible.length ? minWeight : "-"}</div>
          <div class="control-row" style="margin-top: 12px;">
            <button id="mst-reset">Reset Floor</button>
          </div>
          <div class="feedback ${state.mst.feedbackTone}">${completed ? `Tree complete. Total weight: ${totalWeight}.` : state.mst.feedback}</div>
        </article>
        <article class="lab-card">
          <h3>Frontier</h3>
          <div class="graph-list">
            ${
              eligible.length
                ? eligible
                    .sort((left, right) => left.weight - right.weight)
                    .map(
                      (edge) => `
                        <div class="graph-list-item">
                          <strong>${edge.a} - ${edge.b}</strong>
                          <span>weight ${edge.weight}</span>
                        </div>
                      `
                    )
                    .join("")
                : '<div class="graph-list-item"><strong>No frontier edges</strong><span>The tree is finished.</span></div>'
            }
          </div>
        </article>
      </div>
    </div>
    <article class="graph-card">
      <h3>Prim Study Guide</h3>
      ${renderStudyGuideCards([
        {
          title: "Algorithm Recipe",
          items: [
            "Start with the source vertex already inside the tree.",
            "At each step, consider only edges that cross from the tree to the outside set.",
            "Choose the lightest crossing edge, then add its new vertex to the tree.",
          ],
        },
        {
          title: "What To Write",
          items: [
            "Name the cut or the current tree vertex set.",
            "List the legal frontier edges before choosing.",
            "Explain that the chosen edge is safe because it is the minimum crossing edge.",
          ],
        },
        {
          title: "Common Mistakes",
          items: [
            "Choosing the globally smallest edge even if it does not cross the current cut.",
            "Adding an edge that keeps both endpoints inside the tree and creates a cycle.",
            `So far the chosen edges are ${selectedSet.size ? graph.edges.filter((edge) => selectedSet.has(edge.id)).map((edge) => `${edge.a}-${edge.b}`).join(", ") : "none yet"}.`,
          ],
        },
      ])}
    </article>
  `;
}

function bindMstLab() {
  document.querySelectorAll("[data-mst-example]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mst = createInitialMstState(button.dataset.mstExample);
      render();
    });
  });
  document.querySelectorAll("[data-mst-edge]").forEach((line) => {
    line.addEventListener("click", () => {
      handleMstEdgeClick(line.dataset.mstEdge);
    });
  });

  document.querySelector("#mst-reset").addEventListener("click", () => {
    state.mst = createInitialMstState(state.mst.exampleId);
    render();
  });
}

function handleMstEdgeClick(edgeId) {
  const graph = getMstExample();
  const edge = graph.edges.find((item) => item.id === edgeId);
  if (!edge || state.mst.selectedEdgeIds.includes(edgeId)) return;

  const treeVertices = deriveMstVertices(graph);
  const crossesCut = treeVertices.has(edge.a) !== treeVertices.has(edge.b);
  if (!crossesCut) {
    state.mst.feedback = `${edge.a} - ${edge.b} does not cross the current cut, so Prim cannot take it now.`;
    state.mst.feedbackTone = "error";
    state.mst.flashEdgeId = edgeId;
    render();
    return;
  }

  const eligible = getMstEligibleEdges(treeVertices, graph);
  const minWeight = Math.min(...eligible.map((item) => item.weight));
  if (edge.weight !== minWeight) {
    state.mst.feedback = `That edge crosses the cut, but a lighter safe edge of weight ${minWeight} is available.`;
    state.mst.feedbackTone = "error";
    state.mst.flashEdgeId = edgeId;
    render();
    return;
  }

  state.mst.selectedEdgeIds.push(edgeId);
  state.mst.flashEdgeId = "";
  if (state.mst.selectedEdgeIds.length === graph.nodes.length - 1) {
    state.mst.feedback = "Tree complete.";
    state.mst.feedbackTone = "";
  } else {
    state.mst.feedback = `Accepted ${edge.a} - ${edge.b}. Recompute the frontier and continue.`;
    state.mst.feedbackTone = "";
  }
  render();
}

function deriveMstVertices(graph = getMstExample()) {
  const selected = graph.edges.filter((edge) => state.mst.selectedEdgeIds.includes(edge.id));
  const visited = new Set([graph.start]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const edge of selected) {
      if (visited.has(edge.a) && !visited.has(edge.b)) {
        visited.add(edge.b);
        changed = true;
      }
      if (visited.has(edge.b) && !visited.has(edge.a)) {
        visited.add(edge.a);
        changed = true;
      }
    }
  }
  return visited;
}

function getMstEligibleEdges(treeVertices, graph = getMstExample()) {
  const chosen = new Set(state.mst.selectedEdgeIds);
  return graph.edges.filter(
    (edge) => !chosen.has(edge.id) && treeVertices.has(edge.a) !== treeVertices.has(edge.b)
  );
}

function renderDijkstraLab() {
  const graph = getDijkstraExample();
  const layout = buildScaledGraphLayout(graph.nodes, 840, 530, 76);
  const unsettled = getDijkstraUnsettledQueue(graph);
  const completed = state.dijkstra.settled.length === graph.nodes.length;
  const settledSet = new Set(state.dijkstra.settled);
  const treeEdgeIds = new Set(getDijkstraTreeEdgeIds(graph));

  return `
    <div class="graph-layout">
      <article class="graph-card graph-frame graph-frame-spacious">
        <svg viewBox="0 0 840 530" role="img" aria-label="Shortest path graph">
          ${graph.edges
            .map((edge) => {
              const a = layout.get(edge.a);
              const b = layout.get(edge.b);
              const label = getGraphEdgeLabelPosition(edge, a, b);
              const active = treeEdgeIds.has(edge.id) ? "active" : "";
              const recent = state.dijkstra.lastSettledEdgeId === edge.id ? "recent" : "";
              return `
                <g>
                  <line class="edge-line ${active} ${recent}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"></line>
                  ${renderEdgeWeightBadge(label.x, label.y, edge.weight, recent)}
                </g>
              `;
            })
            .join("")}
          ${graph.nodes
            .map((node) => {
              const placed = layout.get(node.id);
              const statusClass = settledSet.has(node.id) ? "settled" : "unsettled";
              const distance = state.dijkstra.distances[node.id];
              return `
                <g>
                  <circle class="node-circle ${statusClass}" data-dijkstra-node="${node.id}" cx="${placed.x}" cy="${placed.y}" r="30"></circle>
                  <text class="node-label" x="${placed.x}" y="${placed.y - 4}">${node.id}</text>
                  <text class="distance-label" x="${placed.x}" y="${placed.y + 24}">${distance === Infinity ? "inf" : distance}</text>
                </g>
              `;
            })
            .join("")}
        </svg>
      </article>
      <div class="queue-list">
        <article class="control-card">
          <h3>Dijkstra Tracker</h3>
          <p>${graph.description}</p>
          <div class="chip-wrap" style="margin-top:12px;">
            ${dijkstraExamples
              .map(
                (item) => `
                  <button data-dijkstra-example="${item.id}" class="${item.id === graph.id ? "primary" : ""}">
                    ${item.title}
                  </button>
                `
              )
              .join("")}
          </div>
          <p style="margin-top:12px;">Click the unsettled vertex with minimum tentative distance. Relaxation happens automatically after a correct choice.</p>
          <div class="mini-stat-grid">
            <div class="mini-stat">
              <span>Example</span>
              <strong>${graph.title}</strong>
            </div>
            <div class="mini-stat">
              <span>Settled vertices</span>
              <strong>${state.dijkstra.settled.length}</strong>
            </div>
            <div class="mini-stat">
              <span>Next distance</span>
              <strong>${unsettled.length ? unsettled[0].distance : "-"}</strong>
            </div>
            <div class="mini-stat">
              <span>Tree edges</span>
              <strong>${treeEdgeIds.size}</strong>
            </div>
          </div>
          <div class="feedback neutral">Start vertex: ${graph.start}</div>
          <div class="control-row" style="margin-top: 12px;">
            <button id="dijkstra-reset">Reset Floor</button>
          </div>
          <div class="feedback ${state.dijkstra.feedbackTone}">${completed ? "Every vertex is settled. Read the predecessor tree from the queue panel." : state.dijkstra.feedback}</div>
        </article>
        <article class="lab-card">
          <h3>Priority Queue Snapshot</h3>
          <div class="queue-list">
            ${
              unsettled.length
                ? unsettled
                    .map(
                      (item) => `
                        <div class="queue-item">
                          <strong>${item.id}</strong>
                          <span>distance ${item.distance}</span><br />
                          <span>parent ${state.dijkstra.predecessors[item.id] || "-"}</span>
                        </div>
                      `
                    )
                    .join("")
                : '<div class="queue-item"><strong>Queue empty</strong><span>All vertices are settled.</span></div>'
            }
          </div>
        </article>
      </div>
    </div>
    <article class="graph-card">
      <h3>Dijkstra Study Guide</h3>
      ${renderStudyGuideCards([
        {
          title: "Algorithm Recipe",
          items: [
            "Keep tentative distances for every unsettled vertex.",
            "Settle the unsettled vertex with the smallest tentative distance.",
            "Relax every incident edge from that settled vertex and update parents when a shorter route appears.",
          ],
        },
        {
          title: "What To Track",
          items: [
            `The settled order is ${state.dijkstra.settled.join(" -> ")}.`,
            "The priority queue is just the unsettled vertices sorted by tentative distance.",
            "The predecessor pointer tells you the final shortest-path tree.",
          ],
        },
        {
          title: "Common Mistakes",
          items: [
            "Settling a vertex too early before checking which tentative distance is actually smallest.",
            "Updating a neighbor without comparing the new route against its old tentative distance.",
            `Right now the next correct distance is ${unsettled.length ? unsettled[0].distance : "done"}.`,
          ],
        },
      ])}
    </article>
  `;
}

function bindDijkstraLab() {
  document.querySelectorAll("[data-dijkstra-example]").forEach((button) => {
    button.addEventListener("click", () => {
      state.dijkstra = createInitialDijkstraState(button.dataset.dijkstraExample);
      render();
    });
  });
  document.querySelectorAll("[data-dijkstra-node]").forEach((node) => {
    node.addEventListener("click", () => {
      handleDijkstraNodeClick(node.dataset.dijkstraNode);
    });
  });

  document.querySelector("#dijkstra-reset").addEventListener("click", () => {
    state.dijkstra = createInitialDijkstraState(state.dijkstra.exampleId);
    render();
  });
}

function handleDijkstraNodeClick(nodeId) {
  if (state.dijkstra.settled.includes(nodeId)) return;

  const graph = getDijkstraExample();
  const queue = getDijkstraUnsettledQueue(graph);
  if (!queue.length) return;
  const correct = queue[0];
  if (nodeId !== correct.id) {
    state.dijkstra.feedback = `${nodeId} is not the next settled vertex. ${correct.id} has the current minimum tentative distance ${correct.distance}.`;
    state.dijkstra.feedbackTone = "error";
    render();
    return;
  }

  state.dijkstra.lastSettledEdgeId = getGraphEdgeIdBetween(state.dijkstra.predecessors[nodeId], nodeId, graph);
  state.dijkstra.settled.push(nodeId);
  relaxNeighbors(nodeId, state.dijkstra.distances, state.dijkstra.predecessors, state.dijkstra.settled, graph);
  state.dijkstra.feedback = `Accepted ${nodeId}. Its tree edge is highlighted, and relaxation has updated the next queue state.`;
  state.dijkstra.feedbackTone = "";
  render();
}

function getDijkstraUnsettledQueue(graph = getDijkstraExample()) {
  const settledSet = new Set(state.dijkstra.settled);
  return graph.nodes
    .filter((node) => !settledSet.has(node.id) && state.dijkstra.distances[node.id] < Infinity)
    .map((node) => ({ id: node.id, distance: state.dijkstra.distances[node.id] }))
    .sort((left, right) => left.distance - right.distance || left.id.localeCompare(right.id));
}

function buildScaledGraphLayout(nodes, width, height, padding = 70) {
  const xs = nodes.map((node) => node.x);
  const ys = nodes.map((node) => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = Math.max(maxX - minX, 1);
  const spanY = Math.max(maxY - minY, 1);
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  const scale = Math.min(innerWidth / spanX, innerHeight / spanY);
  const xInset = padding + (innerWidth - spanX * scale) / 2;
  const yInset = padding + (innerHeight - spanY * scale) / 2;

  return new Map(
    nodes.map((node) => [
      node.id,
      {
        ...node,
        x: xInset + (node.x - minX) * scale,
        y: yInset + (node.y - minY) * scale,
      },
    ])
  );
}

function getGraphEdgeLabelPosition(edge, a, b) {
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy) || 1;
  const numericId = Number(String(edge.id).replace(/\D/g, "")) || 1;
  const defaultOffset = numericId % 2 === 0 ? -20 : 20;
  const offset = edge.labelOffset === undefined ? defaultOffset : edge.labelOffset;

  return {
    x: midX + (-dy / length) * offset + (edge.labelDx || 0),
    y: midY + (dx / length) * offset + (edge.labelDy || 0),
  };
}

function renderEdgeWeightBadge(x, y, weight, extraClass = "") {
  const text = String(weight);
  const width = Math.max(34, text.length * 12 + 18);
  const height = 28;
  return `
    <g class="edge-weight-group ${extraClass}">
      <rect class="edge-weight-badge ${extraClass}" x="${x - width / 2}" y="${y - height + 7}" width="${width}" height="${height}" rx="12" ry="12"></rect>
      <text class="edge-weight ${extraClass}" x="${x}" y="${y}" text-anchor="middle">${text}</text>
    </g>
  `;
}

function getGraphEdgeIdBetween(leftId, rightId, graph) {
  if (!leftId || !rightId) return "";
  const edge = graph.edges.find(
    (item) => (item.a === leftId && item.b === rightId) || (item.a === rightId && item.b === leftId)
  );
  return edge ? edge.id : "";
}

function getDijkstraTreeEdgeIds(graph = getDijkstraExample()) {
  return state.dijkstra.settled
    .map((nodeId) => getGraphEdgeIdBetween(state.dijkstra.predecessors[nodeId], nodeId, graph))
    .filter(Boolean);
}

function getSelectedUnit() {
  return units.find((unit) => unit.id === state.selectedUnitId);
}

function getUnitById(id) {
  return units.find((unit) => unit.id === id);
}

function getAsymptoticFunction(id) {
  return asymptoticFunctions.find((item) => item.id === id);
}

function getLoopPattern() {
  return loopPatterns.find((pattern) => pattern.id === state.loop.patternId);
}

function getGraphFoundationExample(id = state.graphFoundations.exampleId) {
  return graphFoundationExamples.find((example) => example.id === id) || graphFoundationExamples[0];
}

function getRecurrenceScenario() {
  return recurrenceScenarios.find((scenario) => scenario.id === state.recurrence.scenarioId);
}

function getAvlChallenge() {
  return avlChallenges.find((challenge) => challenge.id === state.avl.caseId);
}

function getRbtScenario() {
  return rbtScenarios.find((scenario) => scenario.id === state.rbt.scenarioId);
}

function getUnionFindExample(id = state.unionFind.exampleId) {
  return unionFindExamples.find((example) => example.id === id) || unionFindExamples[0];
}

function getNpScenario() {
  return npScenarios.find((scenario) => scenario.id === state.np.scenarioId);
}

function getMstExample(id) {
  const selectedId = id === undefined ? ((state.mst && state.mst.exampleId) || mstExamples[0].id) : id;
  return mstExamples.find((example) => example.id === selectedId) || mstExamples[0];
}

function getDijkstraExample(id) {
  const selectedId = id === undefined ? ((state.dijkstra && state.dijkstra.exampleId) || dijkstraExamples[0].id) : id;
  return dijkstraExamples.find((example) => example.id === selectedId) || dijkstraExamples[0];
}

function getNode(id, nodes) {
  return nodes.find((node) => node.id === id);
}

function buildLookup(items, seedValue, includeOwnId = false) {
  const lookup = {};
  items.forEach((item) => {
    if (includeOwnId) {
      lookup[item.id] = { id: item.id, ...seedValue, parent: item.id };
      return;
    }
    lookup[item.id] = seedValue;
  });
  return lookup;
}

function markBootStatus(ok, detail) {
  if (typeof window === "undefined") return;
  window.__studyTowerBooted = ok;
  const banner = document.querySelector("#boot-status");
  if (!banner) return;
  if (ok) {
    banner.hidden = true;
    banner.textContent = "";
    return;
  }
  banner.hidden = false;
  banner.textContent = detail || "The study app did not finish loading.";
}

try {
  render();
  markBootStatus(true);
} catch (error) {
  markBootStatus(false, `The study app hit a JavaScript error: ${error && error.message ? error.message : "Unknown error"}`);
  throw error;
}
