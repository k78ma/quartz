---
title: Gradient Descent for Linear Regression
tags:
  - dl
date: 2025-06-30
aliases:
  - gradient descent for linear regression
---
Consider applying [[Gradient Descent|gradient descent]] to an 1D linear regression model. The model $f[x,\phi]$ maps a scalar input $x$ to a scalar output $y$ and has parameter $\phi=[\phi_{0}, \phi_{1}]^{T}$, which represents the $y$-intercept and the slope:
$$
\begin{align}
y & =f[x,\phi] \\
     & =\phi_{0}+\phi_{1}x
\end{align}
$$
Given a dataset $\{ x_{i}, y_{i} \}$ containing $I$ input/output pairs, we choose the least squares loss function:
$$
\begin{align}
L[\phi] = \sum_{i=1}^{I} \ell _{i} & = \sum_{i=1}^{I} (f[x_{i}, \phi]-y_{i})^{2} \\[2ex] 
     & = \sum_{i=1}^{I}(\phi_{0}+\phi_{1}x_{i} - y_{i})^{2}
\end{align}
$$
where the term $\ell _{i}=(\phi_{0}+\phi_{1}x_{i}-y_{i})^{2}$ is the individual contribution to loss from the $i$-th training example.

The derivative of the loss function with respect to the parameters can be decomposed into the sum of the derivates of the individual contributions:
$$
\frac{ \partial L }{ \partial \phi } = \frac{ \partial  }{ \partial \phi } \sum_{i=1}^{I} \ell _{i} = \sum_{i=1}^{I} \frac{ \partial \ell _{i} }{ \partial \phi } 
$$
where these are given by:
$$
\frac{ \partial \ell _{i} }{ \partial \phi }  = \begin{bmatrix}
\frac{ \partial \ell _{i} }{ \partial \phi_{0} } \\ 
\frac{ \partial \ell _{i} }{ \partial \phi_{1} }
\end{bmatrix} = \begin{bmatrix} 
2(\phi_{0}+\phi_{1}x_{i}-y_{i})  \\
2x_{i}(\phi_{0}+\phi_{1}x_{i}-y_{i})
\end{bmatrix}
$$
The figure below shows the progression of this algorithm as we iteratively compute the derivatives according to the equations above and update them. In this case, we have used a [[Gradient Descent|line search]] procedure to find the value of $\alpha$ that decreases the loss the most at each iteration.

![[Gradient Descent for Linear Regression-20250630235911554.png]]