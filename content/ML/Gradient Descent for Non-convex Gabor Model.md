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
This Gabor model maps scalar input $x$ to scalar output $y$ and consists of a sinusoidal component (creating an oscillatory function) multiplied by a negative exponential component (causing the amplitude to decrease as we move from the center). It has two parameters $\phi=[\phi_{0}, \phi_{1}]^{T}$, where $\phi_{0} \in \mathbb{R}$ determines the mean position of the function and $\phi_{1} \in \mathbb{R}^{+}$ stretches or squeezes it along the $x$-axis.

![[Gradient Descent for Non-convex Gabor Model-20250702213047310.png|578]]

Consider a training set of $I$ examples $\{ x_{i}, y_{i} \}$. The least squares loss function for $I$ training examples is defined as:
$$
L[\phi] = \sum_{i=1}^{I} (f[x_{i}, \phi]-y_{i})^{2}
$$
The goal is to find the parameters $\hat{\phi}$ that minimize this loss.

![[Gradient Descent for Non-convex Gabor Model-20250702213939206.png|552]]

## Local Minima & Saddle Points
The figure below shows the loss function associated with the Gabor model for this dataset. There are numerous **local minima** (cyan circles); the gradient is zero, and the loss increases if we move in any direction, but we are not at the **global minimum** (gray circle).

![[Gradient Descent for Non-convex Gabor Model-20250702214041744.png]]

If we start in a random position and use gradient descent to go downhill, there's no guarantee that we'll wind up at the global minimum and find the best parameters. It's equally or even more likely that the algorithm will terminate in one of the local minima. There's also no way of knowing whether there's a better solution elsewhere.

The loss function also contains **saddle points** (blue cross). Here, the gradient is zero, but the function increases in some directions and decreases in other. If the current parameters are not exactly at the saddle point, then gradient descent can escape by moving downhill. However, the surface near the saddle point is flat, so it's hard to be sure that training hasn't converged; if we terminate the algorithm when the gradient is small, we may erroneously stop near a saddle point.