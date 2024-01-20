---
title: Neural Network Training
tags:
  - ml
date: 2024-01-19
aliases:
---
How do we train with [[Stochastic Gradient Descent]] on a feed-forward neural network?

Pseudo-code:
![[Neural Network Training.png]]

- The choice of weight initialization in lines 2 and 3 is explained [[Neural Network Weight Initialization|here]]
- The actual computation of the gradient values (e.g. $\partial \text{loss}/ \partial A^{L}$) is not directly defined in this code, because we want to make the structure of the computation clear.