---
title: Bernoulli Distribution
tags:
  - stats
  - dl
date: 2025-12-21
aliases: bernoulli distribution
---
The [[Bernoulli Distribution]] is defined on the domain $\{ 0,1 \}$. It has a single parameter $\lambda \in [0,1]$ that represents the probability that $y=1$:
$$
Pr(y|\lambda)= \begin{cases}
1-\lambda & &  y=0 \\
\lambda & &  y=1
\end{cases}
$$
![[Binary Classification-20250624101346084.png]]

This can equivalently be written as
$$
Pr(y|\lambda)=(1-\lambda)^{1-y} \cdot \lambda^{y}
$$