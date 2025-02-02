---
title: Linear Map to Higher-Dimensional Space is Not Surjective
tags:
  - lin-alg
date: 2025-01-25
aliases:
  - linear map to higher-dimensional space is not surjective
  - "3.24"
---

> [!theorem] Linear map to a higher-dimensional space is not surjective
> Suppose $V$ and $W$ are finite-dimensional vector spaces such that $\dim V<\dim W$. Then, no linear map from $V$ to $W$ is [[Surjectivity|surjectivity]].

Let $T \in \mathcal{L}(V,W)$. Then
$$
\begin{align}
\dim  \text{range }  T & =\dim  V-\dim  \text{null }  T \\
     & \leq \dim  V \\
     & <\dim  W
\end{align}
$$
where the first equality comes from the [[Fundamental Theorem of Linear Maps|fundamental theorem of linear maps]]. The inequality states that $\dim \text{range } T<\dim W$; this means that $\text{range } T$ cannot equal $W$. Thus $T$ is not surjective.

