---
title: Simple Pole Approximation
tags:
  - mte484
date: 2025-09-26
aliases:
  - simple pole approximation
  - SPA
---
The [[Input-Output Parameterization|IOP]] equations (i)-(iii) are hard to solve because $W[z], X[z], V[z]$ lie in an infinite-dimensional vector space. To make the problem tractable, we make a finite dimensional approximation of this infinite dimensional space. In particular, we choose the simple pole approximation (SPA).

We choose $\{ p_{i} \}^{m}_{i=1}$  as part of our control design. We approximate:
$$
W[z] = \sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}}
$$
- $\{ w_{i} \}_{i=1}^{m}$ are variable coefficients in $\mathbb{C}$

Assumption: Our plant $G[z]$ has no repeated plots. (But this doesn't actually matter; we can have multiple poles, it just makes it more messy.)

Then, we have
$$

$$