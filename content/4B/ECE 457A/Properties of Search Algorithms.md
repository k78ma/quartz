---
title: Properties of Search Algorithms
tags:
date: 2026-01-20
aliases:
  - properties of search algorithms
  - completeness
  - optimality
---
- **Completeness:** Will the algorithm eventually find a solution if one exists?
    - depends on branching factor, cycles, and termination conditions

- **Optimality:** Will the algorithm return the best solution according to the cost function?
    - requires admissible evaluation or exhaustive guarantees
    - often sacrificed in exchange for speed or scalability

- **Time complexity:** How many nodes are generated/expanded?
    - Typically exponential in depth for uninformed search
    - Strongly affected by branching factor and heuristic guidance

- **Space complexity:** How much memory is retained during search?
    - Includes frontier/fringe storage and closed lists
    - In practice, this is often the first limiting factor
    - Motivates memory-bounded and local search methods