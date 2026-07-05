---
title: Best-First Search
tags:
  - ece457a
date: 2026-02-15
aliases: best-first search
---
Best-first search is a family of algorithms tree-search or graph-search strategy. The key idea is that nodes are selected for expansion using an evaluation function, $f(n)$. We expand the node that appears the best according to $f(n)$. Thus, different choices of $f(n)$ yields different search behaviors.

We use a priority queue ordered by increasing $f(n)$, where the node with the lowest $f(n)$ is expanded next. Typically, $f(n)$ incorporates domain knowledge via a heuristic $h(n)$. 