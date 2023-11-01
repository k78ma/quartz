---
title: Gradient Descent for Logistic Regression
tags:
  - ml
date: 2023-10-30
aliases:
---
Based on [[Gradient Descent]] and the idea of [[Machine Learning as Optimization]] in general, we can use gradient descent for [[Logistic Regression]].

We are considering a linear separator defined by $\theta, \theta_{0}$, where our hypothesis class or guess is $g^{(i)} = \sigma(\theta^{T}x^{(i)} + \theta_{0})$. So, our objective function is:
$$
J_{\text{lr}}(\theta, \theta_{0}) = \frac{1}{n}\sum_{i=1}^{n}L_{\text{NLL}}(g^{(i)}, y^{(i)}) + \frac{\lambda}{2} ||\theta ||^{2}
$$
We use $\frac{\lambda}{2}$ as a constant for convenience to make the differentiation nicer. The idea of using $|| \theta ||^{2}$ as a regularizer ([[L2 Penalty]]) forces the magnitude of the separator to stay small, so that it doesn't overfit to data.

Finding the gradient of $J$, we have:
$$
\nabla_{\theta}J_{\text{lr}}(\theta, \theta_{0}) = \frac{1}{n}\sum_{i=1}^{n}(g^{(i)} - y^{(i)})x^{(i)} + \lambda \theta
$$
$$
\frac{ \partial J_{\text{lr}}(\theta,\theta_{0}) }{ \partial \theta_{0} } =\frac{1}{n}\sum_{i=1}^{n}(g^{(i)}-y^{(i)})
$$
Note that $\nabla_{\theta}J$ will be of shape $d \times 1$ and $\frac{ \partial J }{ \partial \theta_{0} }$ will be a scalar (we have separated $\theta_{0}$ and $\theta$ in this case).

Putting everything together, our gradient descent for logistic regression algorithm becomes:

![[Gradient Descent for Logistic Regression.png]]