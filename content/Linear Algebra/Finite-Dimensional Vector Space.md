---
title: Finite-Dimensional Vector Space
tags:
  - lin-alg
date: 2024-10-27
aliases:
  - finite-dimensional vector space
  - infinite-dimensional vector space
---
> [!definition] Definition: Finite-dimensional vector space
> A vector space is called *finite-dimensional* if some list of vectors in it [[Span#Spanning a Subspace|spans]] the space.

> [!definition] Definition: Infinite-dimensional vector space
> A vector space is called *infinite-dimensional* if it is not finite-dimensional.

> [!definition] Definition: Finite-dimensional subspaces
> Every subspace of a finite-dimensional vector space is finite-dimensional.

*Proof.* Suppose $V$ is finite-dimensional and $U$ is a subspace of $V$. We need to prove that $U$ is finite-dimensional. We do this through the following multistep construction.

**Step 1**: If $U=\{ 0 \}$, then $U$ is finite-dimensional and we are done. If $U\neq \{ 0 \}$, then choose a nonzero vector $u_{1}\in U$.

**Step $k$**: If $U=\text{span}(u_{1},\dots,u_{k-1})$, then $U$ is finite-dimensional and we are done. If $U\neq \text{span}(u_{1},\dots,u_{k-1})$, then choose a vector $u_{k}\in U$ such that
$$
u_{k}\notin \text{span}(u_{1},\dots,u_{k-1})
$$
