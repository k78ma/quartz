---
title: PSO Neighborhood Topologies
tags:
  - ece457a
date: 2026-04-09
aliases: pso neighborhood topologies
---
In particle swarm optimization, particles do not necessarily communicate with the entire swarm; instead, they may only interact with a subset of neighbours. **Neighborhood topology** defines which particles share information, how the best solution spreads throughout the swarm, and the balance between exploration and convergence.

Two common PSO variants arise from this: global best PSO and local best PSO.

## Global Best Topology
In global topology (gbest), every particle has access to the best position discovered by the entire swarm:
$$
g= \underset{i}{\operatorname{argmin}}f(p_{i})
$$
The velocity update is then:
$$
v_{i}(t+1) = wv_{i} + c_{1}r_{1}(p_{i}-x_{i}) + c_{2}r_{2}(g-x_{i})
$$
This allows very fast information propagation with rapid convergence. However, there is also a higher risk of premature convergence.

![[PSO Neighborhood Topologies-1775789423407.webp|428]]

## Local Best Topology
In local-best topology (lbest), every particle communicates with a limited neighborhood. Each particle uses:
$$
\ell_{i} = \text{best article within neighborhood}
$$
Then, the velocity update is:
$$
v_{i}(t+1) = wv_{i} + c_{1}r_{1}(p_{i}-x_{i}) + c_{2}r_{2}(\ell-x_{i})
$$
This means information propagation is slower. However, diversity is better, with more exploration.

An example of a local-best method is ring topology:

![[PSO Neighborhood Topologies-1775789524839.webp|430]]

## Comparison

![[PSO Neighborhood Topologies-1775789546796.webp]]

Note that ring and grid/lattice are both lbest.

![[PSO Neighborhood Topologies-1775789661601.webp]]

![[PSO Neighborhood Topologies-1775789669588.webp]]
