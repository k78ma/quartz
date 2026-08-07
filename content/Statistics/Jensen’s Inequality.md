---
title: Jensen’s Inequality
tags:
  - stats
  - math
date: 2024-04-11
aliases:
---
Jensen's inequality says that a [[Convexity|convex]] function $g[\bullet]$ of the expectation of data $y$ is greater than or equal to the expectation of the function of the data:
$$
g[\mathbb{E}[y]] \geq \mathbb{E}[g[y]]
$$

![[Evidence Lower Bound-1785985156807.webp]]

![[Evidence Lower Bound-1785985068077.webp]]

## DLFC Version
A [[Convex Function|convex function]] $f(x)$ satisfies
$$
f\left( \sum_{i=1}^{M} \lambda_{i}x_{i}\right) \leq \sum_{i=1}^{M}\lambda _{i}f(x_{i})
$$
where $\lambda_{i} \geq 0$ and $\sum_{i}\lambda _i=1$, for any set of points $\{ x_{i} \}$. This is known as *Jensen's Inequality*. 

If we interpret $\lambda _{i}$ as the probability distribution over a discrete variable $x$ taking the values $\{ x_{i} \}$, then we can rewrite the above as:
$$
f(E[x])\leq E[f(x)]
$$
where $E[\cdot]$ denotes the [[Expected Value|expectation]].

### Continuous Form
For continuous variables, Jensen's Inequality takes the form
$$
f\left( \int \mathbf{x}p(\mathbf{x}) \, dx  \right) \leq \int f(\mathbf{x})p(\mathbf{x}) \, dx 
$$