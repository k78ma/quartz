---
title: Lipschitz constant
tags:
  - math
date: 2026-07-31
aliases:
  - contraction mapping
---
A function $f[x]$ is *Lipschitz continuous* if for all $z_{1}, z_{2}$:
$$
|| f[z_{1}]-f[z_{2}] || \leq \beta || z_{1}-z_{2} ||
$$
where $\beta$ is known as the Lipschitz constant and determines the maximum gradient of the function (i.e., how fast the function can change) with respect to the distance metric.

If the Lipschitz constant is less than one, the function is a *contraction mapping*, and we use Banach's theorem to find the inverse of any point.

![[Lipschitz constant-1785549150154.webp]]

- Composing two functions with Lipschitz constants $\beta_{1}$ and $\beta_{2}$ creates a new Lipschitz continuous function with a constant that is less than or equal to $\beta_{1}\beta_{2}$. 
- Adding two functions with Lipschitz constants $\beta_{1}$ and $\beta_{2}$ creates a new Lipschitz continuous function with a constant that is less than or equal to $\beta_{1}+\beta_{2}$.
- The Lipschitz constant of a linear transformation $f[z]=Az+b$ with respect to a Euclidean distance measure is the maximum eigenvalue of $A$.

