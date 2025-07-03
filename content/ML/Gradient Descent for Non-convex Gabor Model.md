---
title: Gradient Descent for Non-convex Gabor Model
tags:
  - dl
date: 2025-07-01
aliases:
  - gradient descent for non-convex gabor model
---
Loss functions in the case of [[Gradient Descent for Linear Regression|gradient descent for linear regression]] always have a single well-defined global minimum. They are [[Convexity|convex]], such that every chord (line segment between two points on the surface) lies above the function and does not intersect it. Convexity implies that whenever we initialize the parameters, we are bound to reach the minimum if we keep walking downhill; the training procedure can't fail.

In practice, loss functions for most nonlinear models, including both [[Shallow Neural Network|shallow neural networks]] and [[Deep Neural Network|deep neural networks]], are non-convex. Visualizing neural network loss functions is challenging due to the number of parameters. Hence, we first explore a simpler nonlinear model with two parameters to gain properties of non-convex loss functions:
$$
f[x,\phi] = \sin[\phi_{0}+0.06\cdot \phi_{1}x] \cdot  \exp\left(  - \frac{(\phi_{0}+0.06\cdot \phi_{1}x)^{2}}{32.0}  \right)
$$
This Gabor model maps scalar input $x$ to scalar output $y$ and consists of a sinusoidal component