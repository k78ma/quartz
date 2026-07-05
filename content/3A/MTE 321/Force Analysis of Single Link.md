---
title: Force Analysis of Single Link
tags:
  - mte321
date: 2024-08-11
aliases:
  - force analysis of single link
---
For a single link in pure rotation, the problem set-up first requires that we know:
- Angular and linear accelerations (determined through kinematic analysis)
- Mass of link
- Position information (link length, location of center of gravity)
- Mass moment of inertia with respect to center of gravity $I_{G}$

![[Force Analysis of Single Link.png]]

Then, we take the following steps:
- Set-up a non-rotating, local coordinate system (LNCS) at the member's center of gravity
- Draw a FBD
- Establish position vectors to point of application of forces with respect to local coordinate system
- Determine position components according to local coordinate system. For example, in the FBD shown above in Fig 11-1 (b) we might write find the components of $R_{12}$ as $R_{12x}$ and $R_{12y}$.

Our unknowns are $F_{12x}, F_{12y}, T_{12}$. We can set up a set of equations based on N2L:
$$
\begin{align}
\text{Resultant force:}  & \quad \sum F=F_{P}+F_{12} = m_{2}a_{G} \\[2ex]
\text{Resultant moment:}  & \quad \sum T=T_{12}+(R_{12}\times F_{12})+(R_{P}\times F_{P})=I_{G}\alpha \mathbf{ k}
\end{align}
$$
Note that the $\mathbf{k}$ is because the resultant moment acts in the $z$-dimension.

We can then write these in scalar forms:
$$
\begin{align}
m_{2}a_{Gx}  &=F_{Px}+  F_{12x} \\[2ex]
m_{2}a_{Gy} & =F_{Py}+ F_{12y} \\[2ex]
I_{G\alpha} & =T_{12}+ (R_{12x}F_{12y}-R_{12y}F_{12x})+(R_{Px}F_{Py}-R_{Py}F_{Px})
\end{align}
$$
This can be written in matrix form as a set of simultaneous linear equations:
$$
\begin{align}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
-R_{12y} & R_{12x} & 1
\end{bmatrix}
 & \times
\begin{bmatrix}
F_{12x} \\
F_{12y} \\
T_{12}
\end{bmatrix}
=
\begin{bmatrix}
m_{2}a_{Gx}-F_{Px} \\
m_{2}a_{Gy}-F_{Py} \\
I_{G}\alpha-(R_{Px}F_{Py}-R_{Py}F_{Px})
\end{bmatrix} \\[2ex] 
\begin{bmatrix}
\mathbf{A}
\end{bmatrix}  & \times \begin{bmatrix}
\mathbf{B}
\end{bmatrix}=\begin{bmatrix}
\mathbf{C}
\end{bmatrix}
\end{align}
$$
We can then take the inverse of this matrix to solve for the unknowns in matrix B:
$$
\begin{bmatrix}
\mathbf{B}
\end{bmatrix}=\begin{bmatrix}
\mathbf{A}
\end{bmatrix}^{-1}\times \begin{bmatrix}
\mathbf{C}
\end{bmatrix}
$$
