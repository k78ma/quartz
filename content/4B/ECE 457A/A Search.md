---
title: A Search
tags:
  - ece457a
date: 2026-02-16
aliases: a search
---
A search is a a general best-first framework using an evaluation function of the form
$$
f(n)=g(n)+h(n)
$$
- $g(n)$: cost from start node to node $n$
- $h(n)$: heuristic estimate from $n$ to goal

We maintain a priority queue ordered by $f(n)$, and then expand the node with the smallest $f(n)$. Thus, we combine search depth/cost (via $g$) with goal guidance (via $h$).

Note that Algorithm A is a framework, not a specific algorithm. Its properties depend entirely on the heuristic $h(n)$.

For example, if $h(n)$ overestimates the true cost, A search might expand a suboptimal path first. 

![[A Search-1771277863359.webp]]

In the above case, if the $g(n)$ for path 1 is overestimated, we would return a suboptimal path.