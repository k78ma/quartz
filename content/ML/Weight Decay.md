---
title: Weight Decay
tags:
  - ml
date: 2024-01-27
aliases:
---
Weight decay is a simple regularization strategy that penalizes the norm of all weights, as we did in [[Ridge Regression]]. We take the gradient of the objective
$$
J(W) = \sum_{i=1}^{n}L(x^{(i)}, y^{(i)})+\lambda || W ||^{2}
$$
and end up with an update of the form
$$
\begin{align}
W_{t} & =W_{t-1} - \eta \big((\nabla_{W}\text{Loss}(\text{NN}(x^{(i)}), y^{(i)}; W_{t-1}))+\lambda W_{t-1} \big) \\[2ex]
	 & =W_{t-1}(1-\lambda \eta) - \eta(\nabla_{W}\text{Loss}(\text{NN}(x^{(i)}), y^{(i)}; W_{t-1}))
\end{align}
$$
So, we are "decaying" $W_{t-1}$ by a factor of $(1-\lambda \eta)$ and then taking a gradient step.

Weight decay seems to be very similar to [[L2 Regularization]] and is equivalent in some cases. I don't understand the distinction yet.