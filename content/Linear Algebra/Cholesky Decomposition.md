---
title: Cholesky Decomposition
tags:
  - lin-alg
date: 2024-03-07
aliases:
---
The Cholesky decomposition decomposes a symmetric positive-definite (SPD) matrix into a product of a lower triangular matrix and its transpose:
$$
\begin{align}
A  & = L^{T}L \\[2ex] 
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & a_{14} \\
a_{21} & a_{22} & a_{23} & a_{24} \\
a_{31} & a_{32} & a_{33} & a_{34} \\
a_{41} & a_{42} & a_{43} & a_{44}
\end{bmatrix}  & = \begin{bmatrix}
l_{11} & 0 & 0 & 0 \\
l_{21} & l_{22} & 0 & 0 \\
l_{31} & l_{32} & l_{33} & 0 \\
l_{41} & l_{42} & l_{43} & l_{44}
\end{bmatrix}
\begin{bmatrix}
l_{11} & l_{12} & l_{13} & l_{14} \\
0 & l_{22} & l_{23} & l_{24} \\
0 & 0 & l_{33} & l_{34} \\
0 & 0 & 0 & l_{44}
\end{bmatrix}
\end{align}
$$
If matrix $A$ is positive semi-definite, then the diagonal entries of L are allowed to be zero.

## Cholesky Decomposition Algorithm
Diagonal elements of $L$:
$$
l_{vv}=\sqrt{ a_{vv}-\sum_{u<v} l^{2}_{vu} }
$$
Off-diagonal elements of $L$:
$$
l_{tv}=\frac{1}{l_{vv}}\left( a_{tv}-\sum_{u<v}l_{tu}l_{vu} \right)
$$

## Applications
The Cholesky decomposition enhances numerical stability when dealing with symmetric positive-definite matrices in solving linear systems or inverting matrices.
- SPD matrices: No pivoting required to maintain numerical stability, because the positive-definite condition (remember that Cholesky is specifically for SPD matrices!) ensures that all pivot elements are positive and significantly reduces the risk of encountering very small (near-zero) pivot values that can lead to numerical instability.
- Straightforward forward and backward substitution without the numerical difficulties associated with general matrices. This ensures more stable computations, especially in iterative algorithms where errors can accumulate.
- Simplifies these operations by reducing the problem to two simpler systems of equations through forward and backward substitution.

### Kalman Filter
For example, the Cholesky can be useful for [[Kalman Filter]], where you have to solve for the Kalman gain by finding:
$$
\mathbf{K}'_{k} = \mathbf{P}_{k}\mathbf{H}_{k}^{T}(\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} + \mathbf{R}_{k})^{-1}
$$
Specifically, calculating $(\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} + \mathbf{R}_{k})^{-1}$ is equivalent to solving a linear system of equations ($Ax = b$ is the same as $x=A^{-1}b$).  This matrix is SPD by construction:

Symmetry:
- $\mathbf{P}_{k}$ (predicted state covariance) is symmetric by definition
- When multiplied by $\mathbf{H}_{k}$ on the left and $\mathbf{H}_{k}^{T}$ on the right, it remains symmetric
- $\mathbf{R}_{k}$ (measurement noise covariance matrix) is also symmetric by definition maintains the symmetry

Positive-Definiteness
- For a matrix $A$ to be positive-definite, it must satisfy the condition that for any non-zero vector $x$, $x^{T}Ax > 0$. In our case, $A$ is $\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} + \mathbf{R}_{k}$.
- $P_{k}$ is positive definite to reflect the uncertainty in the system's state estimation
- $R_{k}$ is positive definite to reflect the uncertainty in measurements
- Combination should still be positive definite

The primary scenario where $\mathbf{H}_{k}\mathbf{P}_{k}\mathbf{H}_{k}^{T} + \mathbf{R}_{k}$ might not be positive-definite (and thus not suitable for Cholesky decomposition) involves numerical inaccuracies or improper initialization, like floating-point arithmetic errors, or incorrect initialization.

Cholesky is also useful in calculating [[Unscented Kalman Filters]].
