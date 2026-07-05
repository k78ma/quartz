---
title: Adaptive and Cooperative Tabu Search
tags:
  - ece457a
date: 2026-02-21
aliases: adaptive and cooperative tabu search
---
One of the most important parameters of [[Tabu Search]] is the length of the tabu list. If the length is too small, the search can be trapped into cycles; if the length too large, too many moves could be prevented at each iteration.

One of the adaptive approaches incorporated into TS is to allow the length of the short term memory (tabu list) to vary dynamically. A range for the list length is computed in advance according to the problem size; a new list length is randomly selected from this range every predetermined number of iterations.

![[Adaptive and Cooperative Tabu Search-1771730375379.webp|382x311]]

One adaptive approach is as follows:
- The tabu list length is restricted between $L_{\text{min}}$ and $L_{\text{max}}$
- If the current solution is better than the best-so-far, the tabu list length is set to 1
- If in an improving phase (the solution has improved over the last iteration), the tabu list length is increased by $1$
- The values of $L_{\text{min}}$ and $L_{\text{max}}$ are randomly changed every $A$ iterations

The idea is to shorten the tabu list to intensify the search when improvement occurs, and to lengthen it to promote diversification when the search deteriorates.

## Cooperation
Another method is cooperation. For example, doing synchronous coordinated searches, where $p$ independent Tabu searches run concurrently and exchange information every $K$ iterations. Different processes may use different initial solutions, parameter settings, and import policy (simple import vs. conditional import).

Another asynchronous communication with central memory. This has no fixed synchronous period, broadcasting only when best-so-far improves. A central memory manages the exchange, essentially acting as a pool of the best found solutions. When requesting, a process receives a random solution from the pool (not always the global best). If the process stagnates for $T$ iterations, it requests a solution from the pool. If the sent solution is worse than the stored one, the process uses the stored solution.

