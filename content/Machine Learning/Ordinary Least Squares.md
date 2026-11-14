---
title: Ordinary Least Squares
tags:
  - ml
date: 2023-11-04
aliases:
  - OLS
---
Recall that Ordinary Least Squares is a regression problem aiming to minimize the mean squared loss, such that we have objective function:
$$
J(\theta, \theta_{0})=\frac{1}{n}\sum_{i=1}^{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2}
$$
This problem actually has an analytical solution based on calculus.

### Analytical/Closed-Form Solution
We can approach this like a minimization problem by taking the derivative of $J$ with respect to $\theta$, set it to 0, and then solve for $\theta$. It's possible to do this by:
- Finding $\frac{ \partial J }{ \partial \theta_{k} }$ for $k$ in $1,\dots,d$
- Constructing a set of $k$ equations of the form $\frac{ \partial J }{ \partial \theta_{k} } = 0$
- Solving the system for values of $\theta_{k}$.

We can work through this in a cool matrix view. Let's also assume that $x^{(i)}$ have been augmented with an extra input dimension with a value of $1$, so that we can ignore $\theta_{0}$.

Let us think of our training data in terms of matrices $X$ and $Y$, where each column of $X$ is an example and each column of $Y$ is the corresponding output target value:
$$
X = \begin{bmatrix}
x_{1}^{(1)} & \dots  & x_{1}^{(n)} \\
\vdots & \ddots & \vdots \\
x_d^{(1)} & \cdots & x_d^{(n)}
\end{bmatrix}, \quad
Y = \begin{bmatrix}
y^{(1)} & \dots  & y^{(n)}
\end{bmatrix}.
$$
To make this easier and more standard with most textbooks, we define a new matrix and vector, $W$ and $T$, which are just transposes of our $X$ and $Y$:
$$
W = X^{T} = \begin{bmatrix}
x_{1}^{(1)} & \dots  & x_{d}^{(1)} \\
\vdots & \ddots & \vdots \\
x_1^{(n)} & \cdots & x_d^{(n)}
\end{bmatrix}, \quad
T = Y^{T} = \begin{bmatrix}
y^{(1)}  \\
\vdots  \\
y^{(n)}
\end{bmatrix}
$$
Now, each row of $W$ corresponds to a sample.

We can then write our objective as:
$$
\begin{align}
J(\theta) &= \frac{1}{n}\sum_{i=1}^{n}\left( \left( \sum_{j=1}^{d} W_{ij}\theta j \right) - T_{i} \right)^{2}\\[3ex] 
&=\frac{1}{n}\underbrace{ (W\theta - T)^{T} }_{ 1\times n } \; \; \underbrace{ (W\theta-T) }_{ n\times {1} }
\end{align}
$$
Here $W\theta$ is a vector of predictions. so $W\theta-T$ is a vector of differences between predictions and labels. When we do $(W\theta-T)^{T}(W\theta-T)$, we're basically taking the dot product of the vector of differences with itself, which achieves a summing and squaring effect.

To solve this problem, we take the gradient and set it to zero:
$$
\begin{align}
\nabla_{\theta}J &= \begin{bmatrix}
\frac{ \partial J }{ \partial \theta_{1} } \\
\vdots \\
\frac{ \partial J }{ \partial \theta_{d} }
\end{bmatrix} \\[3ex] 
&= \frac{2}{n}W^{T}(W\theta-T)
\end{align}
$$
The gradient has the same shape as $\theta$. The simplified version is basically just the power rule and chain rule (from equation $(2)$). Verifying the shapes, we see:
$$
\frac{2}{n}\underbrace{ W^{T} }_{ d\times n }\underbrace{ (W\theta-T) }_{ n\times 1 }
$$
so our result would have shape $d\times1$, which is the shape we want!

Setting to $0$ and solving, we get:
$$
\begin{align}
\frac{2}{n}W^{T}(W\theta-T)  & = 0 \\
W^{T}(W\theta-T)  & = 0  \\
W^{T}W\theta  & =W^{T}T \\
\theta  &= (W^{T}W)^{-1}W^{T}T
\end{align}
$$
And the dimensions work out!
$$
\theta  = \underbrace{ (W^{T}W)^{-1} }_{ d \times d } \;\underbrace{ W^{T} }_{ d \times n }\;\underbrace{ T }_{ n \times 1 }
$$
This is cool because it's a rare closed-form solution!

To be really good and proper, we should also check that this solution wields a minimum, not just a critical point. Also, what if $(W^{T}W)$ is not invertible?


