---
title: Special Orthogonal Group
tags:
  - lin-alg
  - mte544
date: 2025-09-09
aliases: special orthogonal group
---
A special orthogonal group is the set of matrices that has the following properties:
- They are [[Orthogonal Matrix|orthogonal]] such that $Q^{T}Q=I$
- The determinant is $\det(Q)=+1$.

$$
\text{SO}(n)=\begin{Bmatrix}
\mathbf{R} \in \mathbb{R}^{n\times n} | \mathbf{R}\mathbf{R}^{T}= \mathbf{I}, \det(\mathbf{R}) = 1
\end{Bmatrix}
$$
## Geometric Interpretation
First, orthogonality preserves dot products, lengths, and angles (see [[Orthogonal Matrix#Geometric Meaning|here]]) between any set of give vectors – for example, two vectors that define a coordinate frame.

Orthogonal matrices always have determinant of $+1$ or $-1$. Matrices with determinant $-1$ reverse the orientation. For example,
$$
Q=\begin{bmatrix}
1 & 0 \\
1 & -1
\end{bmatrix}, \quad  \det(Q)=-1
$$
Applying $Q$ to the standard basis:
$$
\begin{align}
e_{1} = (1, 0) \quad &  \longrightarrow \quad (1,0) \\
e_{2} = (0, 1) \quad &  \longrightarrow \quad (0,-1)
\end{align}
$$
Thus, choosing only matrices where $\det(Q)=+1$ preserves only rotations, not reflections/inversions. This is why [[Rotation Matrix|rotation matrices]] for robotics belong to SO(2) or SO(3).
