---
title: Scalar Multiplication of Matrix
tags:
  - lin-alg
date: 2025-03-19
aliases:
  - scalar multiplication of matrix
---
The product of a scalar and a matrix is the matrix obtained by multiplying each entry in the matrix by the scalar:
$$
\lambda \begin{pmatrix}
A_{1,1}  & \dots & A_{1,n} \\
\vdots &  & \vdots \\
A_{m,1} & \dots & A_{m,n}
\end{pmatrix} = \begin{pmatrix}
\lambda A_{1,1}  & \dots & \lambda A_{1,n} \\
\vdots &  & \vdots \\
\lambda A_{m,1} & \dots & \lambda A_{m,n}
\end{pmatrix}
$$
The matrix of a scalar times a linear map is equal to the scalar times the matrix of the linear map.

Suppose $\lambda \in \mathbb{F}$ and $T \in \mathcal{L}(V,W)$. Then $\mathcal{M}(\lambda T)=\lambda \mathcal{M}(T)$.