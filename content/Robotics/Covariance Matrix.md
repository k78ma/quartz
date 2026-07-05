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
1. The diagonal entries of the covariance matrix are the variances of the components of the multivariate random variable.
$$
\Sigma_{ii}=\sigma _{i}^{2}
$$
2. Since the diagonal entries are all non-negative, the [[trace]] (sum of diagonal entries) is also non-negative:
$$
\text{tr}(\Sigma)=\sum_{i=1}^{n} \Sigma_{i i}\geq 0
$$
3. Since $\Sigma_{ij}=\sigma_{ij}=\sigma_{ji}=\Sigma_{ji}$, the covariance matrix is symmetric:
$$
\Sigma=\Sigma^{T}
$$
4. The covariance matrix is positive semidefinite. The matrix $A$ is called positive semidefinite if $v^{T}Av\geq 0$ for any vector $v$. The eigenvalues of $A$ are non-negative.

## Covariance Matrix and Expectation
Assume a vector $x$ with $k$ elements:
$$
x=\begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{k}
\end{bmatrix}
$$
The covariance matrix of the vector $x$ is
$$
\text{COV}(x)=E((x-\mu_{k})(x-u_{x})^{T})
$$
where $\mu_{x}$ is the mean of the random variable.

![[Covariance Matrix.png|616]]
