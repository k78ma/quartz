---
title: Convergence Criterion (Diagonal Dominant)
tags:
  - mte204
date: 2023-10-12
---
Diagonal dominant matrices $[A]$ for the $[A]\{x\} = \{b\}$ is sufficient but not necessary for convergence.
- If the condition is satisfied, convergence is guaranteed, but if the convergence is not met, convergence may still be achieved.

A diagonally dominant matrix is defined to have:
$$
\mid a_{ii} \mid> \sum_{j=1;j\neq-i}^{n}|a_{ij}|
$$
Basically, the magnitude of the diagonal for each row is larger than the sum of the magnitudes of all the other entries in the row.

![[Convergence Criterion (Diagonal Dominant).png]]