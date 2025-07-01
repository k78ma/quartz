---
title: Gradient Descent
tags:
  - ml
date: 2023-10-29
aliases:
  - gradient descent
  - line search
---
Gradient descent is an optimization algorithm that initializes model parameters heuristically and adjusts them repeatedly to decrease the loss. 
- The main idea is if we're trying to optimize a function *f*, we compute the derivative at our current point $x$ and move in the direction that makes the function smaller. 

Gradient descent starts with initial parameters $\phi = [\phi_{0}, \phi_{1}, \dots, \phi_{N}]^{T}$ and iterates two steps:

1. Compute the derivatives of the loss with respect to the parameters:
$$
\frac{ \partial L }{ \partial \phi } = \begin{bmatrix}
\frac{ \partial L }{ \partial \phi_{0} }  \\
\frac{ \partial L }{ \partial \phi_{1} }  \\
\vdots \\
\frac{ \partial L }{ \partial \phi_{N} } 
\end{bmatrix}
$$

2. Update the parameters according to the rule:
$$
\phi \longleftarrow \phi - \alpha \cdot  \frac{ \partial L }{ \partial \phi } 
$$
The learning rate parameter $\alpha$ is a positive scalar determining the magnitude of the update.

The first step computes the gradient of the loss function at the loss function. This determines the *uphill* direction of the loss function. The second step moves a small distance *downhill* (note the negative sign). The parameter $\alpha$ may be fixed (in which case it is called a *learning rate*), or we perform a *line search* where we try several values of $\alpha$ to find the one that most decreases the loss.

At the minimum of the loss function, the surface must be flat (or we could improve by going further downhill). Hence, the gradient will be zero, and the parameters will stop change. In practice, we monitor the gradient magnitude and terminate the algorithm when it becomes too small.



