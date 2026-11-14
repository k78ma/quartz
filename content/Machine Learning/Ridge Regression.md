---
title: Ridge Regression
tags:
  - ml
date: 2023-12-19
aliases:
---
There are some troubles with the closed-form [[Ordinary Least Squares|OLS]] solution for [[Regression]]:
- What if $(W^{T}W)^{-1}$ isn't invertible?
- What if we overfit?

Ridge regression deals with these problems by adding a [[Regularization|regularization]] term of $|| \theta ||^{2}$ to the OLS objective, with a trade-off parameter $\lambda$.

Original linear regression objective function:
$$
J(\theta, \theta_{0})=\frac{1}{n}\sum_{i=1}^{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2}
$$
Ridge regression objective function:
$$
J_{\text{ridge}}(\theta, \theta_{0})=\frac{1}{n}\sum_{i=1}^{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2} + \lambda || \theta ||^{2}
$$
Note that $|| \theta ||^{2} = \theta^{T}\theta$ (dot product with itself). Larger values of $\lambda$ "pressure" $\theta$ values to be smaller (near zero). 

>[!question] Why don't we penalize $\theta_{0}$?
>If we think about what linear regression does, we are basically trying to fit a function $y=f(x) + b$. The point of regularization is to avoid $f(x)$ from overfitting to training data; $b$, or $\theta_{0}$ in our ML notation, is just an offset term that governs the translation the function/line, so we generally don't want to regularize it.

### Analytical Solution for Ridge Regression
Like the [[Ordinary Least Squares#Analytical/Closed-Form Solution for OLS|analytical solution for OLS]], we can also minimize $J_{\text{ridge}}$ analytically. It's a bit more complicated because $\theta_{0}$ requires special treatment. For simplicity, we will decide to not treat $\theta_{0}$ specially (so we add a 1 feature to our input vectors), then we get:
$$
\nabla J_{\text{ridge}}= \frac{2}{n}W^{T}(W\theta-T) +2\lambda \theta
$$
Setting to zero and solving:
$$
\begin{align}
\frac{2}{n}W^{T}(W\theta-T) +2\lambda \theta & = 0 \\[2ex]
\frac{1}{n}W^{T}W\theta-\frac{1}{n}W^{T}T +\lambda \theta  & = 0  \\[2ex]  
\frac{1}{n}W^{T}W\theta +\lambda \theta  & = \frac{1}{n}W^{T}T  \\[2ex] 
W^{T}W\theta +n\lambda \theta  & = W^{T}T \\[2ex]
(W^{T}W + n\lambda I) \theta& =W^{T}T \\[2ex]
\theta  &= (W^{T}W+n\lambda I)^{-1}\;W^{T}T
\end{align}
$$

This becomes invertible when $\lambda > 0$. This is called “ridge” regression because we are adding a “ridge” of $\lambda$ values along the diagonal of the matrix before inverting, since $I$ is the identity matrix for the dimension $d$. This is basically making the matrix more diagonally dominant, which makes it more invertible.

### Gradient Descent Solution
Inverting a matrix of dimensions $d \times d$ takes $O(d^{3})$ time, so the analytical solution above is impractical for large $d$. We can fall back on gradient descent and use computation.

Ridge regression objective:
$$
J_{\text{ridge}}(\theta, \theta_{0})=\frac{1}{n}\sum_{i=1}^{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2} + \lambda || \theta ||^{2}
$$
Gradient of the ridge regression objective with respect to $\theta_{0}$:
$$
\nabla J_{\text{ridge}}= \frac{2}{n} \sum_{i=1}^{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)}) +2\lambda \theta
$$
Partial derivative with respect to $\theta_{0}$:
$$
\frac{ \partial J }{ \partial \theta_{0}} = \frac{2}{n} \sum_{i=1}^{n}(\theta^{T}x^{(i)} + \theta_{0}-y^{(i)})  
$$
With these derivatives, we can do [[Gradient Descent]], using the regular or stochastic gradient methods. Even better, the objective functions for OLS and ridge regression are convex, which means they have only one minimum. This means, with a small enough step size, gradient descent is guaranteed to find the optimum.
