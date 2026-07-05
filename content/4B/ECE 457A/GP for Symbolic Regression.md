---
title: GP for Symbolic Regression
tags:
  - ece457a
date: 2026-04-10
aliases: gp for symbolic regression
---
In this problem, we use GP to search for an analytical expression that fits the data.

For example, given a target example:
$$
y= x^{4} + x^{3}+x^{2}+x
$$
Given samples $(x_{i}, y_{i})$, GP must discover $\hat{f}(x)\approx y$.

The GP system only sees input-output samples:

![[GP for Symbolic Regression-1775813681147.webp|455]]

We aim to minimize MSE:
$$
\text{MSE} = \frac{1}{N} \sum_{i=1}^{N} (\hat{f}(x_{i})-y_{i})^{2}
$$
With parsimony pressure, our objective becomes becomes:
$$
J= \text{MSE} + \lambda\cdot \text{size}(T)
$$
Tracing the progress:

![[GP for Symbolic Regression-1775813767348.webp]]

![[GP for Symbolic Regression-1775813782474.webp]]

![[GP for Symbolic Regression-1775813798843.webp]]

Despite its strengths, symbolic regression with GP has challenges:
- Large computational cost
- Potential overfitting
- Sensitivity to function set design
- Multiple semantically equivalent expressions

