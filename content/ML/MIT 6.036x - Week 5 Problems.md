---
title: MIT 6.036x - Week 5 Problems
tags:
  - ml
  - problems
date: 2024-01-15
aliases:
---
### Gradient Calculations

>[!question] 1A
>Write an expression for $g(x^{(i)}, y^{(i)})$ using the symbols: `x_i`, `y_i`, `theta` and `theta_0`, where $g(x^{(i)}, y^{(i)})$ is the derivative of the $L_{s}$​ function described above with respect to $\theta$. Remember that you can use `@` for matrix product, and you can use `transpose(v)` to traanspose a vector. Note that this $g(\cdot)$ function is just the derivative with respect to a single data point.

$L_{s}$ refers to squared loss, such that:
$$
L_{s}(x^{(i)}, y^{(i)}, \theta, \theta_{0})= (\hat{y}^{(i)}- y^{(i)})^{2}= (\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2}
$$
So we want to take the derivative of this with respect to $\theta$:
$$
\begin{align}
\frac{ \partial }{ \partial \theta } (L_{s})  & = \frac{ \partial }{ \partial \theta } ((\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2}) \\[2ex] 
	 & = 2 (\theta^{T}x^{(i)}+\theta_{0}-y^{(i)}) \cdot \frac{ \partial }{ \partial \theta }(\theta^{T}x^{(i)} + \theta_{0}-y^{(i)}) \\[2ex] 
	 & = \boxed{2 (\theta^{T}x^{(i)}+\theta_{0}-y^{(i)}) \cdot x^{(i)}}
\end{align}
$$
The terms in the second expression simplify to $x^{(i)}$ because $\theta^{T}x^{(i)}$ is treated as a linear function of $\theta$, while $\theta_{0}$ and $y^{(i)}$ are treated as constants, since they do not change depending on the value of $thet$.

>[!question] 1B
>What is the gradient of the squared loss/empirical risk now with $\theta_{0}$?

$$
\begin{align}
\frac{ \partial }{ \partial \theta_{0} } (L_{s})  & = \frac{ \partial }{ \partial \theta_{0} } ((\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2}) \\[2ex] 
	 & = 2 (\theta^{T}x^{(i)}+\theta_{0}-y^{(i)}) \cdot \cancel{ \frac{ \partial }{ \partial \theta_{0} }(\theta^{T}x^{(i)}C + \theta_{0}-y^{(i)})  }\\[2ex] 
	 & = \boxed{2 (\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})}
\end{align}
$$

>[!question] 1C
>Next we're interested in the gradient of the empirical loss with respect to $\theta$, $\nabla_{\theta}J_{emp}$​, but now for a whole data set $X$ (of dimensions $d$ by $n$).

We can recognize that $L_{s}(x^{(i)}, y^{(i)})$ is the square of the $i$-th element of $\theta^{T}X +\theta_{0}-Y$. So, a sum of $L_{s}(x^{(i)}, y^{(i)})$ over the whole dataset is just is equivalent to the norm squared:
$$
\sum_{i=1}^{n}L_{s}(x^{(i)}, y^{(i)})= \big|\big| (\theta^{T}X + \theta_{0} - Y)^{T} \big|\big|^{2}
$$
The square of a norm is is equivalent to taking the dot product of itself: 
$$
\big|\big| (\theta^{T}X + \theta_{0} - Y)^{T} \big|\big|^{2} = (\theta^{T}X + \theta_{0}-Y)(\theta^{T}X + \theta_{0}-Y)^{T}
$$
Using the chain rule to take our derivative:
$$
\frac{d}{d\theta} \frac{1}{n} \big|\big| (\theta^{T}X + \theta_{0} - Y)^{T} \big|\big|^{2} = \frac{2}{n}X(\theta^{T}X+\theta_{0}-Y)^{T}
$$
where $\frac{d}{d\theta}(\theta^{T}X) = X$.

Checking dimensions:
- $X$ is $d\times n$
- $\theta^{T}X$ is $1\times n$
- $y$ is $1\times n$
- Therefore, $\theta^{T}x+\theta_{0}-y$ is $1\times n$
- The matrix product of a $d\times n$ matrix with an $n\times 1$ matrix (the transpose of $1\times n$) thus gives us a gradient that is $d\times 1$, as expected (i.e., $\nabla_{\theta}J_{emp}$ is a vector where each element is the gradient of $J$ with respect to the corresponding element of $\theta$).

### Sources of Error
**2A.** Penalizing $|| \theta ||^{2}$ during training can reduce [[Regularization#Types of Errors|estimation error]].
- Structural error is the error due to selecting an inadequate model class
- Estimation error arises when parameters of a hypothesis were not estimated well during training. 
- Adding $|| \theta ||^{2}$ is not selecting for a model class (aka selecting the order of polynomial basis) but for preventing overfitting – thus it reduces estimation error.

### Minimizing empirical risk

>[!question] 3A
>Let data matrix $Z=X^{T}$ be $n\times d$, let target output vector $T = Y^{T}$ be $n\times 1$ and recall that $\theta = d\times 1$. Then we can write the whole linear regression as $Z\theta$. Write an equation expressing the mean squared loss of $\theta$ in terms of $Z, T, n, \theta$.

$$
\begin{align}
J_{emp}  & = \frac{1}{n}\sum_{i=1}^{n}L_{s}(x^{(i)}, y^{(i)}, \theta, \theta_{0}) \\[2ex] 
	 & = \frac{1}{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2} \\[2ex] 
	 & = \frac{1}{n}|| (Z\theta-T) ||^{2} \\[2ex] 
	 & = \boxed{\frac{1}{n}(Z\theta-T)^{T} (Z\theta-T)}
\end{align}
$$

>[!question] 3B
>What is $\nabla_{\theta}J(\theta)$ in terms of $Z, T, \theta, \theta_{0}$?

