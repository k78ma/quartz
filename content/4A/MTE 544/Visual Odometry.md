---
title: Visual Odometry
tags:
  - mte544
date: 2025-10-31
aliases: visual odometry
---
Visual odometry estimates the motion of a camera over time by tracking how feature points move between frames.

![[Visual Odometry-20251031200310713.png]]

We want to write the epipolar constraint between the two views, and determine how many matched points are required to solve for.

Camera intrinsics:
$$
\begin{align}
\alpha_u  & = f \cdot k_u = 0.004 \cdot 500 = 2, \quad  \alpha_{v} = 2 \\[2ex] 
K  & = \begin{bmatrix}
\alpha_{u}  & 0 & u_{0} \\
0 & \alpha_{v}  & v_{0} \\
0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
2 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 1
\end{bmatrix}
\end{align}
$$
Since $C_{1}$ is considered to be in world frame, we have $\lambda_{1}\overline{p}^{1} = K [I \,\, 0] \overline{p}^{w} = Kp^{w}$.

Note that we have
$$
\overline{p}^1 = \begin{bmatrix} 24 \\ 14 \\ 1 \end{bmatrix}, \quad \overline{p}^2 = \begin{bmatrix} 36 \\ 8 \\ 1 \end{bmatrix}
$$
Converting to normalized image coordinates:
$$
\begin{align}
\overline{x}^{1} = K^{-1}\overline{p}^{1} = \begin{bmatrix}
\frac{1}{2}  & 0 & 0 \\
0 & \frac{1}{2} & 0 \\
0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
24 \\
14 \\
1
\end{bmatrix} = \begin{bmatrix}
12 \\
7 \\
1
\end{bmatrix} \\[2ex] 
\overline{x}^{2} = K^{-1}\overline{p}^{2} = \begin{bmatrix}
\frac{1}{2}  & 0 & 0 \\
0 & \frac{1}{2} & 0 \\
0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
36 \\
8 \\
1
\end{bmatrix} = \begin{bmatrix}
18 \\
4 \\
1
\end{bmatrix}
\end{align}
$$
Then, the epipolar constraint is:
$$
(\overline{x}^{2})^{T} E(\overline{x}^{1}) = \begin{bmatrix}
18 & 4 & 1
\end{bmatrix} \,\,E \,\, \begin{bmatrix}
12 \\
7 \\
1
\end{bmatrix} =0
$$
This is one linear equation in the nine entries of $E$. If we write $E$ as:
$$
E = \begin{bmatrix} e_1 & e_2 & e_3\\ e_4 & e_5 & e_6\\ e_7 & e_8 & e_9 \end{bmatrix}
$$
and substituting gives a single linear constraint:
$$
216e_1 + 48e_2 + 12e_3 + 126e_4 + 28e_5 + 7e_6 + 18e_7 + 4e_8 + e_9 = 0.
$$
Typically, to solve this we need 8 points (Eight-Point Algorithm). Taking advantage of other constraints (on $R$, etc.), this can be reduced to five points (Five-Point Algorithm).