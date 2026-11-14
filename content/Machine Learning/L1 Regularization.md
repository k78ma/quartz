---
title: L1 Regularization
tags:
  - ml
date: 2023-11-01
aliases:
  - Lasso Regularization
---
The L1 penalty is the sum of the absolute value of the weights:
$$
\lambda \sum | w_{i} | \quad \text{or} \quad \lambda \sum_{i=1}^{n}| \theta_{i} |
$$
This penalty tends to produce sparse models, meaning that it encourages weights to be exactly zero. This is basically a form of automatic feature selection since it effectively removes certain features from the model entirely.

**Note on Optimization**: Because the absolute value function is not differentiable at zero, optimization methods used with L1 regularization need to be capable of dealing with this, such as [[coordinate descent]] or the use of [[subgradients]].