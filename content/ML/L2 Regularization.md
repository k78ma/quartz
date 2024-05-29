---
title: L2 Regularization
tags:
  - ml
date: 2023-11-01
aliases: []
---
The L2 penalty is the sum of squares of the weights, represented mathematically as:
$$
\lambda \sum w_{i}^{2}
$$
L2 penalty tends to shrink the weights, but does not necessarily set them to zero. This can lead to models where the influence of each feature is small but not eliminated, resulting in a more distributed, and often more stable, set of weights.

L2 regularization is smooth and differentiable, and hence it's easier to handle in optimization algorithms, such as [[gradient descent]]. It is also used in [[Ridge Regression]].