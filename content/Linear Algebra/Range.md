---
title: Range
tags:
  - lin-alg
date: 2025-01-21
aliases:
  - range
  - range of a linear map
  - "3.16"
---

> [!definition] Range
> For $T \in \mathcal{L}(V,W)$, the *range* of $T$ is the subset of $W$ consisting of those vectors that are equal to $Tv$ for some $v \in V$:
> $$
> \text{range }  T = \{ Tv\, : \,v \in  V \}
> $$

The range is essentially the set of outputs of a linear map.
### Examples
- If $T$ is the zero map from $V$ to $W$, meaning that $Tv=0$ for every $v \in V$, then $\text{range } T=\{ 0 \}$.

- Suppose $T \in \mathcal{L}(\mathbf{R}^2, \mathbf{R}^3)$ is defined by $T(x,y) = (2x, 5y, x+y)$. Then   
    $$
    \text{range} T = \{(2x, 5y, x+y) : x,y \in \mathbf{R} \}   
    $$
    Note that $\text{range} T$ is a subspace of $R^3$. We will soon see that the range of each element of $\mathcal{L}(V,W)$ is a subspace of $W$.
