---
title: Vanishing + Exploding Gradient Problem
tags:
  - ml
date: 2024-01-28
aliases:
  - vanishing gradient
  - exploding gradient
---
This is a common problem – side effect of [[Backpropagation]]. It can occur due to poor [[Parameter Initialization|parameter initialization]].

The gradient is the slope of the loss function along the error curve. 
- When the gradient is too small, it continues to become smaller, updating the weight parameters until they become insignificant, which means that the algorithm is no longer learning. 
- Exploding gradients occur when the gradient is too large, creating an unstable model (NaN results).

Ways to stop vanishing gradients:
- Residual/skip connections

Ways to stop exploding gradients:
- Gradient clipping