---
title: Covariance
tags:
  - stats
date: 2024-03-27
aliases:
---
For two random variables $x$ and $y$, the *covariance* measures the extent to which the two variables vary together. This is defined by:
$$
\begin{align}
\text{cov}[x,y] & =E_{x,y}\left[ \{ x-E[x] \} \{ y-E[y] \} \right] \\[1.5ex]
	 & = E_{x,y}[xy]-E[x]E[y]
\end{align}
$$
If $x$ and $y$ are independent, then their covariance equals zero.

For two vectors $\mathbf{x}$ and $\mathbf{y}$, their covariance is a matrix given by:
$$
\begin{align}
\text{cov}[\mathbf{x}, \mathbf{y}] & =E_{\mathbf{x},\mathbf{y}} \left[ \{ \mathbf{x} -E[\mathbf{x}]\} \,\{ \mathbf{y}^{T} - E[\mathbf{y}^{T}] \}\right] \\[1.5ex]
	 & =E_{\mathbf{x},\mathbf{y}}[\mathbf{xy}^{T}]-E[\mathbf{x}]\,E[\mathbf{y}^{T}]
\end{align}
$$
If we consider the covariance of the components of a vector $\mathbf{x}$ with each other, then we use a slightly simpler notation $\text{cov}[x] \equiv \text{cov}[x, x$].