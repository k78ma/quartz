---
title: Unilateral Laplace Transform
tags:
  - syde252
date: 2023-11-26
aliases:
---
The unilateral Laplace transform is a special case of the bilateral Laplace transform in which all signals are restricted to being causal, such that:
$$
	X(s)=\int_{0^{-}}^{\infty}x(t)e^{-st}  \, dt 
$$
Using $0^{-}$ as the lower limit of integration allows the inclusion of an impulse function at $t=0$ but also allows us to use initial conditions at $0^{-}$.

The Z-transform version of this is:
$$
X[z]=\sum_{n=0^{-}}^{\infty}x[n]z^{-n}
$$
