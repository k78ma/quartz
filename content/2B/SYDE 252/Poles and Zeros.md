---
title: Poles and Zeros
tags:
  - syde252
  - mte484
date: 2023-11-22
aliases:
---
> [!definition] Poles and zeros
> For a transfer function $P(s)$ or $G[z]$, $\lambda \in \mathbb{C}$ is a:
> - *Zero* if $P(\lambda)=0$ or $Z[\lambda]=0$
> - *Pole* if $P(\lambda)=\infty$ or $Z[\lambda]=\infty$
> 


### Laplace / Continuous Time
- $H(s)$ has a pole at $s=a$ if $| H(a) |=\infty$
- $H(s)$ has a zero at $s=a$  if $| H(a) |=0$

### Z-transform / Discrete Time
- $H[z]$ has a pole at $z=a$ if $| H(a) |=\infty$
- $H[z]$ has a zero at $s=a$  if $| H[a] |=0$

Poles: $x$
Zeros: $0$