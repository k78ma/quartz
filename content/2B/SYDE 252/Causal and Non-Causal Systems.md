---
title: Causal and Non-Causal Systems
tags:
  - syde252
date: 2023-10-16
---
**Causal:** Output only depends on past or present values of input (no future input)

Examples:
$$
\begin{align}
\text{Causal: } \quad & x(t)+x(t-2)\\
\text{Causal: } \quad & x(t)\sin(t+2)\\
\text{Noncausal: } \quad & x(t+1)-x(t)\\
\text{Noncausal: } \quad & x[n+3] + x[n-3]
\end{align}
$$
