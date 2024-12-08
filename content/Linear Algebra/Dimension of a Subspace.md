---
title: Dimension of a Subspace
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - dimension of a subspace
  - "2.37"
---

Every subspace of a finite-dimensional vector space is finite-dimension (see [[Finite-Dimensional Vector Space|here]]) and so has a dimension. The next result gives the expected inequality about the dimension of the subspace.

> [!definition] Dimension of a subspace
> If $V$ is finite-dimensional and $U$ is a subspace of $V$, then $\dim U\leq \dim V$.

*Proof.* Suppose $V$ is finite-dimensional and $U$ is a subspace of $V$. Think of a basis of $U$ as a linearly independent list in $V$, and think of a basis of $V$ as a spanning list in $V$. Now, we can use the fact that
$$
\text{length of linearly independent list} \leq \text{length of spanning list}
$$
to conclude that $\dim U\leq \dim V$.