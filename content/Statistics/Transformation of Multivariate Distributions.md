---
title: Transformation of Multivariate Distributions
tags:
  - stats
date: 2024-04-03
aliases:
---
For [[Transformation of Densities]], we found that if we make a change of variables $x=f(y)$ for a density $p_{x}(x)$, we have:
$$
\begin{align}
p_{y}(y) & =p_{x}(x) \left| \frac{ dx }{ dy }  \right| \\[2ex]
	 & = p_{x}(g(y)) \left| \frac{ dg }{ dy }  \right|
\end{align}
$$
This can be extended to [[Multivariate Probability Density|densities defined over multiple variables]]. Consider a density $p(\mathbf{x})$ over a $D$-dimensional variable $\mathbf{x}=(x_{1}, \dots, x_{D})^{T}$, that we transform to a new variable $\mathbf{y}=(y_{1}, \dots, y_{D})^{T}$, where $\mathbf{x}=\mathbf{g}(\mathbf{y})$. Both variables have the same dimensionality.

The transformed density is then given by the generalization of equation (2) in the form:
$$
p_{\mathbf{y}}(\mathbf{y})=p_{\mathbf{x}}(\mathbf{x}) | \det J |
$$
where $\mathbf{J}$ is the Jacobian matrix whose elements are given by the partial derivatives $J_{ij}=\partial g_{i} / \partial y_{j}$, such that:
$$
\mathbf{J}=\begin{bmatrix}
\frac{ \partial g_{1} }{ \partial y_{1}} & \dots & \frac{ \partial g_{1} }{ \partial y_{D} }  \\
\vdots  & \ddots  & \vdots \\
\frac{ \partial g_{D} }{ \partial y_{1}} & \dots & \frac{ \partial g_{D} }{ \partial y_{D} }  \\
\end{bmatrix}
$$
The absolute value of the determinant of the Jacobian represents the ratio of these volumes and is the same factor that arises when changing variables within an integral. The formula for the Jacobian follows from the fact that the probability mass in region $\Delta \mathbf{x}$ is the same as the probability mass in $\Delta\mathbf{y}$. Once again, we take the modulus to ensure that the density is nonnegative.
### Intuition
Intuitively, we can view the change of variables as expanding some regions of space and contracting others, with an infinitesimal region $\Delta \mathbf{x}$ around a point $\mathbf{x}$ being transformed to a region $\Delta \mathbf{y}$ around the point $\mathbf{y}=\mathbf{g}(\mathbf{x})$. 

This illustrated below by applying a change of variables to a Gaussian distribution in 2 dimensions (top row). The transformation from $\mathbf{x}$ to $\mathbf{y}$ is given by:
$$
\begin{align}
y_{1} & =x_{1}+\tanh(5x_{1}) \\
y_{2} & =x_{2}+\tanh(5x_{2})+\frac{x_{1}^{3}}{3}
\end{align}
$$
On the bottom row are samples from a Gaussian distribution in $\mathbf{x}$-space along with the corresponding transformed samples in $\mathbf{y}$-space.

![[Transformation of Multivariate Distributions.png]]

