---
title: Linear Flows
tags:
  - dl
date: 2026-08-03
aliases:
  - linear flows
  - linear flow
---
A linear flow has the form $f[h] = \beta+\Omega h$. If the matrix $\Omega$ is invertible, the linear transform is invertible. 

For $\Omega \in \mathbb{R}^{D\times D}$, the computation of the inverse is $O(D^{3})$. The determinant of the Jacobian is just the determinant of $\Omega$, which also be computed in $O(D^{3})$. This means that linear flows become expensive as the dimension $D$ increases.

If the matrix $\Omega$ takes a special form, then inversion of the determinant can become more efficient, but the transformation becomes less general.
- Diagonal matrices require only $O(D)$ computation for inversion and determinant, but the elements of $h$ don't interact.
- Orthogonal matrices are also more efficient to invert, and their determinant is fixed, but they do not allow scaling of the individual dimensions.
- Triangular matrices are more practical; they are invertible using a back-substitution process, which is $O(D^{2})$, and the determinant is just the product of the diagonal values.

One way to make a linear flow that is general, efficient to invert, and for which the Jacobian can be computed efficiently is to parameterize it directly in terms of the LU decomposition. In other words, we use
$$
\Omega = PL(U+D)
$$
where $P$ is a pre-determined [[Permutation Matrix|permutation matrix]], $L$ is a lower triangular matrix, $U$ is an upper triangle matrix with zeros on the diagonal, and $D$ is a diagonal matrix that supplies those missing diagonal elements. This can be inverted in $O[D^{2}]$, and the log determinant is just the sum of the log of the absolute values on the diagonals of $L$ and $D$.

Unfortunately, linear flows are not sufficiently expressive. When a linear function $f[h]=\beta+\Omega h$ is applied to a normally distributed input $\text{Norm}_{h}[\mu, \Sigma]$, the result is also normally distributed with mean $\beta+\Omega \mu$ and variance $\Omega\Sigma\Omega^{T}$. Thus, it is not possible to map a normal distribution to an arbitrary density using linear flows alone.