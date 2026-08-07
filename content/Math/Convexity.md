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
- Concave: chords lie below the function

A surface is guaranteed to be convex if the Hessian matrix $\mathbf{H}[\phi]$ is positive definite (has positive eigenvalues) for all possible parameter values. 

For example, for a linear regression loss surface characterized by $\phi=[\phi_{0}, \phi_{1}]$, we have:
$$
\mathbf{H}[\phi] = \begin{bmatrix}
\frac{ \partial^{2}L }{ \partial \phi_{0}^{2} }  & \frac{ \partial^{2}L }{ \partial \phi_{0} \partial \phi_{1} }   \\
\frac{ \partial^{2}L }{ \partial \phi_{1} \partial \phi_{0} }  & \frac{ \partial^{2}L }{ \partial \phi_{1}^{2} } 
\end{bmatrix}
$$
(see [[UDL Chapter 6 Problems]]).

For any loss function, the eigenvalues of the Hessian matrix at places where the gradient is zero allow us to classify this position as:
- a minimum (the eigenvalues are all positive)
- a maximum (the eigenvalues are all negative)
- (iii) a saddle point (positive eigenvalues are associated with directions in which we are at a minimum and negative ones with directions where we are at a maximum). 