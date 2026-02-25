---
title: Tabu Search
tags:
  - ece457a
date: 2026-02-21
aliases: tabu search
---
Tabu search is a memory-guided [[Metaheuristics|metaheuristic]] trajectory optimization method. With a memoryless method like [[Simulated Annealing|simulated annealing]], we run the risk of revisiting the same states repeatedly. On the other hand, TS is a metaheuristic for local search with adaptive memory; recently visited moves are declared tabu, preventing cycling and enabling escape from local minima.

![[Tabu Search-1771727240296.webp]]

The Tabu restriction forbids or penalizes moves that return to previously visited solutions. It uses deterministic acceptance, although non-improving moves may be accepted, enabling escape from local optima when all neighbors are worse.

When tuning a Tabu search, we want to consider the following:
- Tabu tenure
- Move-based vs. attribute based tabu
- Candidate list strategies
- Aspiration choice

## Basic Tabu Search Algorithm
**Initialization:**
- Generate an initial solution $s_{0}$.
- Set current and best: $s \leftarrow s_{0}$, $s^{\ast } \leftarrow s_{0}$

**While termination criteria is not met:**
- Generate neighborhood $N(s)$
- Construct admissible candidate set $\mathcal{C}(s)=(N(s) \setminus \mathcal{T}) \cup \mathcal{A}(s)$
    - Neighborhood excluding tabu moves, and aspiration moves
- Select best admissible move: $s' = \underset{s' \in \mathcal{C}(s)}{\operatorname{argmin}}E(s')$
- Update best solution if improved: If $E(s')<E(s ^{\ast })$, $s ^{\ast }\leftarrow s'$
- Move to new solution: $s\leftarrow s'$

## Tabu List
$\mathcal{T}$ is the Tabu set (short-term memory). It prevents immediate cycling. Typically, we store:
- Recent moves (most common). This means that a specific move is hidden, like reserving a recent swap. This is simple to implement but less flexible.
- Move attributes (swapped elements, edges). This means that only key components of a move are forbidden which is more general and scalable. 
    - Example: forbid adding a recently removed edge
- Complete solutions (rare, due to high memory cost)

Each tabu entry remains active for a fixed *tabu tenure*, $T$. After $T$ iterations, the move or attribute becomes admissible again.

## Candidate List
Evaluating the entire neighborhood at each iteration may be computationally expensive. Thus, TS operates on a candidate list, which is a subset of promising neighboring solutions selected for evaluation at each iteration.

The selection of candidates can involve generic strategies like random neighborhood sampling, best $k$ improving moves, and least-worsening moves. It can also include informed strategies like moves involving recently modified attributes, and problem-specific heuristics.

## Intensification and Diversification
### Intensification (Recency memory)
Intensification means focusing the search more deeply on regions that already look promising, refining and improving good solutions. During search, some solution components may appear repeatedly across many iterations. This persistence suggests that these components are important or high quality, so we should concentrate our search around them.

A method to do this is recency-based intensification. We use a *recency memory* to track how long components remain unchanged, counting consecutive unchanged iterations. When this count is high, the search temporarily freezes persistent components, and performs a local search around the best-known solution by modifying only the remaining unfrozen components.

![[Tabu Search-1771728687983.webp]]

### Diversification (Long term memory)
Despite tabu lists, Tabu search may be too local at times, causing it to miss good solutions in unexplored areas. Diversification aims to overcome this problem using a long-term *frequency memory*. This memory holds the total number of iterations in which certain components appear in the current solution or are involved in selected moves.

Then, we can do **restart diversification** by forcing rarely-used components and restarting search. Or, we can do **continuous diversification**, where we bias the move evaluation by adding a frequency-related term to the objective. We can also penalize solutions that are too close to the current solution.

![[Tabu Search-1771728908959.webp]]

### Explore vs. exploit
Typically, we need to find a good interplay between intensification to exploit promising regions and diversification to force exploration of new regions.

![[Tabu Search-1771728970850.webp]]

## Aspiration
$\mathcal{A}(s)$ is the aspiration set that **overrides the tabu list** when a tabu move represents genuine progress. Tabu restrictions prevent cycling, but they may also block important improving moves; aspiration prevents tabu memory from becoming overly restrictive.

A canonical aspiration rule is:
$$
\mathcal{A}(s)=\{ s' \in  N(s) \, | \,E(s')<E(s ^{\ast  }) \}
$$
This makes sense; obviously, if $s'$ is the best candidate we've seen so far we should allow it to be explored more than once.

![[Tabu Search-1771729245590.webp]]


## Examples

![[module-design-tabu.pdf]]

![[n-queens-tabu.pdf]]

![[tsp-tabu.pdf]]