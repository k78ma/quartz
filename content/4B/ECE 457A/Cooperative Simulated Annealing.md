---
title: Cooperative Simulated Annealing
tags:
  - ece457a
date: 2026-02-21
aliases: cooperative simulated annealing
---
Cooperative [[Simulated Annealing|simulated annealing]] implements concurrent synchronous runs of multiple SA processes. The concurrent processes are coupled through cooperative transitions, which replace the uniform distribution used to select the neighbours. Essentially, the algorithm manipulates multiple solutions (a population of solutions) at once.

To get a better idea of this, assume we have five solutions. We start with a randomly chosen population:
$$
\text{Pop}_{0} = [S_{1}, S_{2}, S_{3}, S_{4}, S_{5}]
$$
The new population is iteratively produced. Any new solution is cooperatively produced by the previous value of that solution, and the previous value of another randomly selected solution.

![[Cooperative Simulated Annealing-1771719357963.webp]]

How do we find $S_{1\text{new}}$ from $S_{1}$ and $S_{4}$? We find the neighbours of $S_{1}$ 