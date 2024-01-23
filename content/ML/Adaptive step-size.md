---
title: Adaptive step-size
tags:
  - ml
date: 2024-01-21
aliases:
---
Picking a value for learning rate, $\eta$, is difficult and time-consuming. 
- If it’s too small, then convergence is slow and if it’s too large, then we risk divergence or slow convergence due to oscillation. 
- This problem is even more pronounced in [[Stochastic Gradient Descent]] or [[Batch Gradient Descent|batch]] mode, because we know we need to decrease the step size for the formal guarantees to hold.

It’s also true that, within a single neural network, we may well want to have different step sizes. As our networks become deep (with increasing numbers of layers) we can find that magnitude of the gradient of the loss with respect the weights in the last layer, $\partial \text{ loss} / {\partial}W_{L}$, may be substantially different from the gradient of the loss with respect to the weights in the first layer $\partial \text{ loss} / \partial W_{1}$. The output gradient is multiplied by all the weight matrices of the network and is “fed back” through all the derivatives of all the activation functions. This can lead to a problem of exploding or vanishing gradients, in which the back-propagated gradient is much too big or small to be used in an update rule with the same step size.

Some methods for adaptive step-size:
- [[Running averages]]
- [[Momentum (ML)]]
- [[Adadelta]]
- [[Adam]]
