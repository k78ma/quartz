---
title: Multivariate Probability Density
tags:
  - stats
date: 2024-03-25
aliases:
---
If we have several continuous variables $x_{1}, \dots, x_{D}$ denoted collectively by the vector $\mathbf{x}$, then we can define a joint probability density
$$
p(\mathbf{x})=p(x_{1}, \dots, x_{D})
$$
such that the probability of $\mathbf{x}$ falling in an infinitesimal volume $\delta \mathbf{x}$ containing the point $\mathbf{x}$ is given by $p(\mathbf{x})\,\delta\mathbf{x}$.

This multivariate [[Probability Density Function|PDF]] must satisfy:
$$
\begin{align}
p(\mathbf{x}) \geq 0 \\[2ex] 
\int p(\mathbf{x}) \, dx =1
\end{align}
$$
in which the integral is taken over the whole $\mathbf{x}$ space. 

More generally, we can also consider joint probability distributions over a combination of discrete and continuous variables.