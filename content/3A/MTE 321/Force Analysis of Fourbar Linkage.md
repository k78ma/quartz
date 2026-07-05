---
title: Force Analysis of Fourbar Linkage
tags:
  - mte321
date: 2024-08-11
aliases:
  - force analysis of fourbar linkage
---
For a fourbar linkage, the problem set-up first requires that we know:
- Angular and linear accelerations (determined through kinematic analysis)
- Masses of links
- Position information (link lengths, link positions, location of center of gravity for each link)
- Mass moment of inertia with respect to CG, $I_{G}$, for each link

![[Force Analysis of Fourbar Linkage.png]]

We then write out the forces and moments for each link.

Link 2:
$$
\begin{align}
F_{12x} & +F_{32x}=m_{2}a_{G_{2x}} \\[2ex]
F_{12y} & +F_{32y}=m_{2}a_{G_{2y}} \\[2ex]
T_{12} & +(R_{12x}F_{12y}-R_{12y}F_{12x})+(R_{32x}F_{12y}-R_{32y}F_{32x})=I_{G_{2}}\alpha_{2}
\end{align}
$$
Link 3:
$$
\begin{align}
F_{43x} & -F_{32x}+F_{Px}=m_{3}a_{G_{3x}} \\[2ex]
F_{12y} & -F_{32y}+F_{Py}=m_{3}a_{G_{3y}} \\[2ex]
(R_{43x} & F_{43y}-R_{43y}F_{43x})+(R_{23x}F_{32y}-R_{23y}F_{32x})+(R_{Px}F_{Py}-R_{Py}F_{Px})=I_{G_{3}}\alpha_{3}
\end{align}
$$

Link 4:
$$
\begin{align}
F_{14x} & -F_{43x}=m_{4}a_{G_{4x}} \\[2ex] 
F_{14y} & -F_{43y}=m_{4}a_{G_{4y}}\\[2ex] 
(R_{14x} & F_{14y}-R_{14y}F_{14x})-(R_{34x}F_{43y}-R_{34y}F_{43x})+T_{4}=I_{G_{4}}\alpha_{4}
\end{align}
$$

This can be written in matrix form as a simultaneous system of equation with 9 unknowns:
$$
\begin{bmatrix}
1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
-R_{12y} & R_{12x} & -R_{32y} & R_{32x} & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & -1 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 &  R_{23y} & -R_{23x} & -R_{43y} & R_{43x} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & -1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & R_{34y} & -R_{34x} & -R_{14y} & R_{14x} & 0
\end{bmatrix}\times \begin{bmatrix}
F_{12x} \\
F_{12y} \\
F_{32x} \\
F_{32y} \\
F_{43x} \\
F_{43y} \\
F_{14y} \\
F_{14x} \\
T_{12}
\end{bmatrix}
=
\begin{bmatrix}
m_{2}a_{G_{2x}} \\
m_{2}a_{G_{2y}} \\
I_{G_{2}}\alpha_{2} \\
m_{3}a_{G_{3x}}-F_{Px} \\
m_{3}a_{G_{3y}}-F_{py} \\
I_{G_{3}}\alpha_{3}-R_{px}F_{Py}+R_{Py}F_{Px} \\
m_{4}a_{G_{4x}} \\
m_{4}a_{G_{4y}} \\
I_{G_{4}}\alpha_{4}-T_{4}
\end{bmatrix}
$$
$$
\begin{bmatrix}
\mathbf{A}
\end{bmatrix}\begin{bmatrix}
\mathbf{B}
\end{bmatrix}=\begin{bmatrix}
\mathbf{C}
\end{bmatrix}
$$

We can then take the inverse of the matrix to solve:
$$
\begin{bmatrix}
\mathbf{B}
\end{bmatrix}=\begin{bmatrix}
\mathbf{A}
\end{bmatrix}^{-1} \begin{bmatrix}
\mathbf{C}
\end{bmatrix}
$$
