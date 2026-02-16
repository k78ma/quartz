---
title: Breadth-First Search
tags:
  - ece457a
date: 2026-01-20
aliases:
  - breadth-first search
  - BFS
---
In BFS, we traverse a search tree by expanding the shallowest unexpanded node first. The fringes are added in a FIFO queue, which guarantees level-by-level exploration. Thus, we explore the state space in waves of increasing depth.

Strengths:
- simple and easy to implement complete (finite branching factor)
- optimal for unit-cost problems

Limitations:
- memory-intensive: stores all frontier nodes 
- poor scalability for deep or wide trees 
- blind to cost, energy, or risk

## Algorithm

![[Breadth-First Search-1768941871471.webp]]

## Properties

### Number of states and upper bound
The upper bound case of BFS is where the goal is the last node of depth $d$. 

![[Breadth-First Search-1768942185504.webp]]

### Time and space complexity
From the above, we can see that both the time and space complexity are given by
$$
O(b^{d+1})
$$
where
- $b$ is the branching factor (maximum number of children at each node)
- $d$ is the depth of the solution

This cost is quite high. For example, with depth = 14, we would have $10^{15}$ nodes, which would take ~3000 years and 1 exabyte.

### Completeness and optimality
BFS is:
- Complete, if $b$ is finite
- Optimal, if path cost is equal to depth (all operators have the same cost). It is guaranteed to return the shallowest goal (depth $d$).

If step costs vary, BFS may return a non-optimal solution. It would ignore cheaper but deeper paths. We can think of BFS as optimizing the number of steps, not the cost, energy, or delay.

## Examples
- **Problem:** Search for state $D$

We search through a tree one level at a time. We traverse through one entire level of children nodes first, before moving on to traverse through the grandchildren nodes. Similarly, we traverse through on entire level of grandchildren nodes before going on to traverse great-grandchildren nodes.

![[Breadth-First Search-1768940488457.webp|421x247]]


First, we expand the shallowest unexpanded node. **New successors go in the end of the queue.** (Right side is the start of queue for some reason)

![[Breadth-First Search-1768941469217.webp]]


![[Breadth-First Search-1768941482892.webp]]


![[Breadth-First Search-1768941446642.webp]]

Another example:

![[Breadth-First Search-1768941512362.webp|425x397]]

