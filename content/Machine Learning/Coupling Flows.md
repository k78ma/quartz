---
title: Coupling Flows
tags:
  - dl
date: 2026-08-03
aliases:
  - coupling flows
  - coupling flow
---
Coupling flows divide the input $h$ into two parts so that $h=[h_{1}^{T}, h_{2}^{T}]^{T}$ and define the flow $f[h, \phi]$ as:
$$
\begin{align*}
h_{1}' &= h_{1} \\
h_{2} &= g[h_{2}, \phi[h_{1}]]
\end{align*}
$$
Here $g[\bullet, \phi]$ is an [[Elementwise Flows|elementwise flow]] (or other invertible layer) with parameters $\phi[h_{1}]$ that are themselves a nonlinear function of the inputs $h_{1}$. The function $\phi[\bullet]$ is usually a neural network of some kinda and does not have to be invertible. 

![[Coupling Flows-1785814000422.webp]]

The original variables can be recovered as:
$$
\begin{align*}
h_{1}&= h_{1}' \\
h_{2}&= g^{-1}[h_{2}', \phi[h_{1}]]
\end{align*}
$$
If the function $g[\bullet, \phi]$ is an [[Elementwise Flows|elementwise flow]], the Jacobian will be lower triangular with the identity matrix in the top-left quadrant and the derivatives of the elementwise transformation in the bottom right. Its determinant is the product of these diagonal values.

With coupling flows, the inverse and Jacobian can be computed efficiently, but this approach only transforms the second half of the parameters in a way that depends on the first half. To make a more general transformation, the elements of $h$ are randomly shuffled using permutation matrices between layers, so every variable is ultimately transformed by every other. In practice, these permutation matrices are difficult to learn. Hence, they are initialized randomly and then frozen. For structured data like images, the channels are divided into two halves $h_{1}$ and $h_{2}$ and permuted using [[Operations on Image Representations|1x1 convolutions]].