---
title: Convexity
tags:
  - math
date: 2025-07-01
aliases:
  - convexity
  - convex
  - convex function
---
In a convex function, every chord (line segment between two points on the surface) lies above the function and does not intersect it.

A surface is guaranteed to be convex if the eigenvalues of the Hessian $\mathbf{H}[\phi]$ are positive everywhere. In this case, the surface has a unique minimum, and optimization is easy.

For example, for a linear regression loss surface characterized by $\phi=[\phi_{0}, \phi_{1}]$, we have:
$$
\mathbf{H}[\phi] = \begin{bmatrix}
\frac{ \partial^{2}L }{ \partial \phi_{0}^{2} }  & \frac{ \partial^{2}L }{ \partial \phi_{0} \partial \phi_{1} }   \\
\frac{ \partial^{2}L }{ \partial \phi_{1} \partial \phi_{0} }  & \frac{ \partial^{2}L }{ \partial \phi_{1}^{2} } 
\end{bmatrix}
$$
(see [[UDL Chapter 6 Problems]]).