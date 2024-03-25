---
title: Probability Density Function
tags:
  - stats
date: 2024-03-25
aliases:
  - PDF
---
Probability density functions allow us to quantify probabilities with respect to continuous variables.

We define the probability density $p(x)$ over a continuous variable $x$ to be such that the probability of $x$ falling in the interval $(x, x+\delta x)$ is given by $p(x)\;\delta x$ for $\delta x\to0$. 

![[Probability Density Function.png]]

The probability that $x$ will lie in an interval $(a,b)$ is given by
$$
p(x\in(a,b))=\int_{a}^{b} p(x) \, dx 
$$
Probabilities are non-negative, and $x$ must lie somewhere on the real axis, so the $p(x)$ must fulfill these conditions:
$$
\begin{align}
p(x) & \geq 0 \\[2ex] 
\int_{-\infty}^{\infty} p(x) \, dx  & =1
\end{align}
$$
The [[Sum and Product Rules of Probability]] and [[Bayes' Theorem]] also apply to probability densities; we just use $p(x)$, or $p(\mathbf{x})$ for [[Multivariate Probability Density]], instead of $p(X)$ for discrete variables. The one difference is that we use continuous integrals instead of summations:
$$
\begin{align}
\text{Sum rule:} \;p(\mathbf{x})=\int p(\mathbf{x, \mathbf{y}}) \, d\mathbf{y} 
\end{align}
$$
The above is used in the denominator of Bayes' theorem as well!
