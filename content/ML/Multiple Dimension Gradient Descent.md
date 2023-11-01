---
title: Multiple Dimension Gradient Descent
tags:
  - ml
date: 2023-10-30
aliases:
---
The extension to multi-dimensional $\Theta$ from [[1D Gradient Descent]] is fairly straightforward.

Let us assume our parameters $\Theta \in \mathbb{R}^{m}$, so that our [[Machine Learning as Optimization|objective function]] $f: \mathbb{R}^{m} \to \mathbb{R}$. The gradient of $J$ with respect to $\Theta$ is:
$$
\nabla_{\Theta}f = \begin{bmatrix}
\frac{ \partial f }{ \partial \Theta_{1} } \\
\vdots \\
\frac{ \partial f }{ \partial \Theta_{m} }
\end{bmatrix}
$$
The algorithm remains the same as the 1D case, except that the update step (line 5 in [[1D Gradient Descent]]) becomes:
$$
\Theta^{(t)} = \Theta^{(t-1)}-\eta \nabla_{\Theta}f(\Theta^{(t-1)})
$$
Remember that the [[Gradient Vector|gradient]] points in the direction of the greatest rate of increase. Thus, we take the negative of it to descend.