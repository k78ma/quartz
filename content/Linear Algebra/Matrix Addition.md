---
title: Matrix Addition
tags:
  - lin-alg
date: 2025-03-11
aliases:
  - matrix addition
---
Assume that $U,V$ and $W$ are finite-dimensional and that a basis has been chosen for each of these vector spaces. Thus for each linear map from $V$ to $W$, we can talk about its matrix with respect to the chosen bases.

The **sum of two matrices of the same size** is the matrix obtained by adding the corresponding entries in the matrices:
$$
\begin{align}
\begin{pmatrix}
A_{1,1}  & \dots & A_{1,n} \\
\vdots  &  & \vdots \\
A_{m,1} & \dots & A_{m,n}
\end{pmatrix} + \begin{pmatrix}
C_{1,1}  & \dots & C_{1,n} \\
\vdots  &  & \vdots \\
C_{m,1} & \dots & C_{m,n}
\end{pmatrix}  \\[3ex]
= \begin{pmatrix}
A_{1,1} + C_{1,1}  & \dots & A_{1,n} + C_{1,n} \\
\vdots  &  & \vdots \\
A_{m,1}+C_{m,1} & \dots & A_{m,n}+C_{m,n}
\end{pmatrix}
\end{align}
$$

Something important to note is that the matrix of the sum of two linear maps is equal to the sum of the matrices of the two maps:

> [!theorem] Matrix of the sum of linear maps
> Suppose $S,T\in \mathcal{L}(V,W)$. Then $\mathcal{M}(S+T)=\mathcal{M}(S)+\mathcal{M}(T)$.


