---
title: Elementwise Flows
tags:
  - dl
date: 2026-08-03
aliases:
  - elementwise flows
  - elementwise flow
---
Since [[Linear Flows|linear flows]] are not sufficiently expressive, we turn to nonlinear flows. The simplest of these are elementwise flows, which apply a pointwise nonlinear function $f[\bullet, \phi]$ with parameters $\phi$ to each element of the input so that:
$$
f[h] = \Big[f[h_{1}, \phi], f[h_{2}, \phi], \dots, f[h_{D}, \phi] \Big]^{T}
$$
The Jacobian $\partial f[h] / \partial h$ is diagonal since the $d$-th input to $f[h]$ only affects the $d$-th output. Its determinant is the product of the entries in the diagonal, so:
$$
\left| \frac{ \partial f[h] }{ \partial h }  \right| = \prod_{d=1}^{D} \left| \frac{ \partial f[h_{d}] }{ \partial h_{d} }  \right| 
$$

The function $f[\bullet,, \phi]$ could be a fixed invertible nonlinearity like the leaky ReLU, in which case there are no parameters. It can also be any parameterized invertible one-to-one mapping. A simple example is a linear piecewise function with $K$ regions, which maps $[0,1]$ to $[0,1]$ as:
$$
f[h, \phi] = \left( \sum_{k=1}^{b-1} \phi_{k} \right) + (hK-b+1)\phi_{b}
$$
where the parameters $\phi_{1}, \phi_{2}, \dots, \phi_{K}$ are positive and sum to $1$, and $b=\lfloor Kh \rfloor+1$ is the index of the bin that contains $h$. The first term is the sum of all the preceding bins, and the second term represents the proportion of the way through the current bin that $h$ lies. This function is easy to invert, and its gradient can be calculated almost everywhere. There are many similar schemes for creating smooth functions, often using splines with parameters that ensure the function is monotonic and hence invertible.

## Analysis
Elementwise flows are nonlinear but don't mix input dimensions, so they can't create correlations between variables. When alternated with linear flows (which do mix dimensions), more complex transformations can be modeled. However, in practice, elementwise flows are used as components of more complex layers like [[Coupling Flows|coupling flows]].