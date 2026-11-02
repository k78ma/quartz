---
title: Matrix Diagonalization
tags:
  - lin-alg
date: 2026-10-29
aliases: matrix diagonalization
---
#cards/lin-alg 
Diagonalizable matrix
?
A square matrix $A$ is called diagonalizable if there exists a diagonal matrix $D$ and an invertible matrix $P$ such that $A=PDP^{-1}$.

The columns of $P$ are given by independent eigenvectors $v_{1}$ and $v_{2}$, while the diagonal values of $D$ are the corresponding eigenvalues:
$$
A = \begin{bmatrix}
|  &  |  \\
v_{1} & v_{2} \\
|  & |
\end{bmatrix} \begin{bmatrix}
\lambda_{1} & 0 \\
0 & \lambda_{2}
\end{bmatrix} \begin{bmatrix}
|  &  |  \\
v_{1} & v_{2} \\
|  & |
\end{bmatrix}^{-1}
$$
+++
<!--SR:!fsrs,2026-11-03T05:56:21.779Z,4,3.94605407,1,2,2,0,0,2026-10-30T05:56:21.779Z-->

Steps to diagonalize:
1. Find eigenvalues of the matrix by solving the characteristic equation $\left| A-\lambda I \right|=0$.
2. Find the basis of $\mathbb{R}^{n}$ consisting of eigenvectors of the matrix.
3. Construct the matrices $D$ and $P$.
    - The matrix $D$ has the eigenvalues of $A$ as entries on the diagonal.
    - The columns of $P$ are the corresponding eigenvectors. Note that the columns should match.

The diagonalization of a matrix is unique up to the permutations of the order of the eigenvalues.

## Powers with diagonalization
One benefit of diagonalizing a matrix is it lets us find the power of a matrix easily. For example:
$$
\begin{align*}
A^{2}&= PDP^{-1} \cdot  PDP^{-1}\\[2ex]
&= PD\cancel{ P^{-1}\cdot P }DP^{-1} \\[2ex] 
&= P(DD)P^{-1}\\[2ex] 
&= PD^{2}P^{-1}
\end{align*}
$$
In general:
$$
A^{k}=P D^{k}P^{-1}
$$
and since $D$ is diagonal, $D^{k}$ is easy to obtain.