---
title: Ant System
tags:
  - ece457a
date: 2026-04-03
aliases:
  - ant system
  - AS
---
AS is a basic form of [[Ant Colony Optimization|ant colony optimization]].

Let us consider a graph search problem. We operate on a graph $G=(V,E)$, where nodes $V$ are locations, and edges $E$ are possible moves/transitions. A solution is a path or tour, constructed step-by-step. An example problem would be to find the shortest path from $s$ to $t$. 

![[ACO Graph Search-1775237440632.webp|242]]

## Information Storage
With ACO, we have many agents constructing paths on a graph with shared edge memory. Decisions combine a learned desirability $\tau$ and a local desirability $\eta$.
- **Pheromone memory:** Each edge $(i,j)$ has a pheromone level $\tau_{ij}$. High $\tau_{ij}$ means that this edge often appears in good solutions. Pheromone is shared across the colony (collective memory).
- **Heuristic information:** Each edge also has a local desirability $\eta_{ij}$. For example, $\eta_{ij} = \frac{1}{d_{ij}}$ for distances.

![[ACO Graph Search-1775237965974.webp|216]]

### Heuristic design
Note that the common choice in routing/TSP is $\eta_{ij}=\frac{1}{d_{ij}}$. Short edges are locally attractive, and thus if $\beta$ is large, ants will behave more greedily in this local manner.

In general, we just want $\eta_{ij}$ to be cheap to compute and locally informative. 

## AS Components
- Ants: Construct solutions by moving on the graph
- Pheromone matrix $\tau$: Shared memory on edges
- Heuristic $\eta$: Problem-specific local guidance
- Probabilistic choice rule: Balances exploration vs. exploitation
- Evaporation $\rho$: Forgetting mechanism
- Reinforcement: Deposit pheromone on good edges

![[ACO Graph Search-1775238101669.webp|262]]

We already saw how $\tau$ and $\eta$ works.

### Probabilistic Move Rule
At node $i$, an ant chooses the next node $j$ stochastically. It prefers edges with high pheromone $\tau_{ij}$, and edges with good heuristic $\eta_{ij}$. Because of randomness, we still allow exploration, such that non-best edges can be selected.

Strength of pheromone influence is controlled with parameter $\alpha$, and strength of heuristic influence is controlled with $\beta$.

![[ACO Graph Search-1775238288335.webp|296]]

The **transition probability** is then determined as:
$$
P_{ij}^{(k)} = \frac{\tau_{ij}^{\alpha}\eta_{ij}^{\beta}}{\sum_{\ell=\mathcal{N}_{i}^{(k)}}\tau_{i\ell}^{\alpha}\eta_{i\ell}^{\beta}} 
$$
which is essentially just normalized probability for each path:
- $P_{ij}^{(k)}$: probability ant $k$ moves from $i\to j$
- $\mathcal{N}_{i}^{(k)}$: feasible next nodes (e.g., unvisited cities)

If $\alpha=0$, we are purely using heuristic (probabilistically greedy). If we are using $\beta$, we are purely using pheromone (memory only).

We can pick a next action through **roulette-wheel sampling**. We compute the transition probabilities using the formula above, draw a random threshold $u \sim \text{Uniform}(0,1)$, then select the next city cumulative probability:
$$
\sum_{h\leq j} P_{ih}^{(k)} \geq u
$$

> [!example]- Numerical example:
> ![[ACO Graph Search-1775238818989.webp]]
> 
> ![[ACO Graph Search-1775238845267.webp]]
> 
> ![[ACO Graph Search-1775238885531.webp]]

Parameter effects:
- Increased $\alpha$ means that ants follow pheromone trails more strongly (exploitation), exploiting experience
- Increased $\beta$ means that ants prefer locally good edges more strongly (heuristic greediness), exploiting problem structure
### Pheromone Update
Pheromones are updated using some update rule. A generic global update is:
$$
\tau_{ij} \leftarrow (1-\rho)\tau_{ij}+\sum_{k=1}^{m} \Delta \tau_{ij}^{(k)}
$$
- $\rho \in (0,1]$ is the evaporation rate. Higher $\rho$ means faster evaporation (more exploration).
- $m$ is the number of ants
- $\Delta \tau_{ij}^{(k)}$ is the deposit (reinforcement) by ant $k$, which is usually based on solution quality.

For example, a typical deposit rule is:
$$
\Delta \tau_{ij}^{(k)} = \begin{cases}
\frac{Q}{L_{k}}  & \text{if ant } k \text{ uses edge}(i,j)\\[2ex] 
0 & \text{otherwise}
\end{cases}
$$
where $L_{k}$ is the tour/path cost, and $Q$ is a pheromone scaling constant.

![[ACO Graph Search-1775239095079.webp|386]]

Thus, we can think of this pheromone update rule as combining the evaporation and reinforcement:
$$
\tau_{ij} \leftarrow \underbrace{ (1-\rho)\tau_{ij} }_{ \text{evaporation} }+\underbrace{ \sum_{k=1}^{m} \Delta \tau_{ij}^{(k)} }_{ \text{reinforcement} }
$$
### Stagnation
Note that a common failure mode is stagnation: if one trail becomes too dominant early, the colony may stop exploring alternatives. Some solutions to this include:
- Increasing evaporation rate $\rho$
- Limiting pheromone values ([[Max-Min Ant System]])
- Restarting pheromones when diversity collapses
- Injecting random/exploratory ants.

Convergence vs. Stagnation: For convergence, ants increasingly select the same edges, with pheromones concentrating on a few tours. For stagnation, no new tours are explored, with all ants following the same path (stuck in local optima).

## Walkthrough
For one iteration $t$ of ACO:
1. Each ant constructs a path using $P_{ij}^{(k)}$
2. Evaluate cost $L_{k}$ for each ant's solution
3. Evaporate pheromones
4. Reinforce edges using good solutions

Early on, this will explore many edges (diversity). Later on, strong trails will emerge (exploitation).

This basic version we have introduced here is called the Ant System.


