---
title: Week 5
tags:
  - ml
date: 2024-01-13
aliases:
---
>[!faq] 1A
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
	 & = 2 (\theta^{T}x^{(i)}+\theta_{0}-y^{(i)}) \cdot x^{(i)}
\end{align}
$$
The terms in the second expression simplify to $x^{(i)}$ because $\theta^{T}x^{(i)}$ is treated as a linear function of $\theta$, while $\theta_{0}$ and $y^{(i)}$ are treated as constants, since they do not change depending on the value of $thet$.

**1B**.

**1C.**

