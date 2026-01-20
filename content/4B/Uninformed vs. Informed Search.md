---
title: Uninformed vs. Informed Search
tags:
  - ece457a
date: 2026-01-20
aliases: uninformed vs. informed search
---
**Uninformed search:** 
- Use no information about the likely "direction" of the goal node(s). 
- Only has the information provided by the problem formulation (initial state, set of actions, goal test, cost)
- Examples: BFS, DFS, depth-limited, uniform-cost, depth-first iterative deepening, bidirectional

**Informed search:**
- Heuristic search: Use information about the domain to head in the general direction of the goal node(s)
- Additional information that allows it to judge the promise of an action, i.e. the estimated cost from a state to a goal
- Examples: Hill climbing, best-first, greedy search, beam search, A, A*