---
title: Covariance Matrix
tags:
  - state-estimation
date: 2024-11-15
aliases:
  - covariance matrix
---
A covariance matrix is a square matrix that represents that covariance between each pair of elements in a given multivariate random variable.

For a 2D random variable, the covariance matrix is
$$
\Sigma=\begin{bmatrix}
\sigma_{xx} & \sigma_{xy} \\
\sigma_{yx} & \sigma_{yy}
\end{bmatrix}=\begin{bmatrix}
\sigma_{x}^{2} & \sigma_{xy} \\
\sigma_{yx} & \sigma_{y}^{2}
\end{bmatrix}=\begin{bmatrix}
\text{VAR}(x) & \text{COV}(x,y) \\
\text{COV}(y,x) & \text{VAR}(y)
\end{bmatrix}
$$
The off-diagonal entries are equal since $\text{COV}(x,y)=\text{COV}(y,x)$. If $x$ and $y$ are uncorrelated, the off-diagonal entries of the covariance matrix are zero.

For a $n$-dimensional random variable, the covariance matrix is given by
$$
\Sigma=\begin{bmatrix}
\sigma_{1}^{2} & \sigma_{12} & \dots & \sigma_{1n} \\
\sigma_{21} & \sigma_{2}^{2} & \dots & \sigma_{2n} \\
\vdots  &  \vdots  & \ddots  & \vdots \\
\sigma_{n1} & \sigma_{n 2} & \dots & \sigma_{n n}
\end{bmatrix}
$$
## Properties
1. The 