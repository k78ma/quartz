---
title: A* Search
tags:
  - ece457a
date: 2026-02-16
aliases: a* search
---
Recall that [[A Search]] defines an algorithm framework that combines the accumulated path cost $g(n)$ with the heuristic cost to the goal $g(n)$ in the evaluation function $f(n)$, such that
$$
f(n)=g(n)+h(n)
$$
A* search is A search with the restriction that the heuristic must be [[Heuristic#Admissible Heuristic Function|admissible]]. The result is completeness (if branching factor is finite) and optimality (guarantees lowest-cost solution).

## Properties with Heuristics
Note that with a perfect heuristic ($h(n)=h^{\ast }(n)$ for all $n$), only the nodes on the optimal solution path are expanded; no extra work is performed. 

On the other hand, with a null heuristic ($h(n)=0$ for all $n$), which is technically an admissible heuristic, A* reduces to [[Uniform Cost Search]].

If we have $h_{1}(n)\leq h_{2}(n)\leq h^{\ast }(n)$ for all goal nodes, $h_{2}$ is a better heuristic than $h_{1}$. Every node expanded by A* using $h_{2}$ is also expanded by A* using $h_{1}$. A* with $h_{2}$ expands no more nodes than A* with $h_{1}$.

## Examples

![[A_ Search-1771278321894.webp]]

