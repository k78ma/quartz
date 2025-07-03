---
title: UDL Chapter 6 Problems
tags:
  - dl
date: 2025-07-01
aliases:
  - udl chapter 6 problems
---
> [!question] Problem 6.1
> Show that the derivates of the least squares loss function in equation 6.5 are given by the equations in 6.7.

Each loss component:
$$
\ell _{i} = (\phi_{0}+\phi_{1}x_{i} -y_{i})^{2}
$$
Derivatives:
$$
\frac{ \partial \ell _{i} }{ \partial \phi_{0} } = 2(\phi_{0}+\phi_{1}x_{i}-y_{i})
$$
$$
\frac{ \partial \ell _{i} }{ \partial \phi_{1} } = 2(\phi_{0}+\phi_{1}x_{i}-y_{i})(x_{i})
$$

> [!question] Problem 6.2
> A surface is guaranteed to be convex if the eigenvalues of the Hessian $\mathbf{H}[\phi]$ are positive everywhere. In this case, the surface has a unique minimum, and optimization is easy. Find an algebraic expression for the Hessian matrix,
> $$
> \mathbf{H}[\phi] = \begin{bmatrix}
> \frac{ \partial^{2}L }{ \partial \phi_{0}^{2} }  & \frac{ \partial^{2}L }{ \partial \phi_{0} \partial \phi_{1} }   \\
> \frac{ \partial^{2}L }{ \partial \phi_{1} \partial \phi_{0} }  & \frac{ \partial^{2}L }{ \partial \phi_{1}^{2} } 
>\end{bmatrix}
> $$
> for the linear regression model. Prove that this function is convex by showing that the eigenvalues are always positive. This can be done by showing that both the trace and determinant of the matrix are positive.

We have:
$$
\ell _{i} = (\phi_{0}+\phi_{1}x_{i} -y_{i})^{2}
$$
Top left $(H_{1,1})$:
$$
\begin{align}
\frac{ \partial \ell _{i} }{ \partial \phi_{0} }  & = 2(\phi_{0}+\phi_{1}x_{i}-y_{i}) \\[2ex]
\frac{ \partial^{2}\ell_{i} }{ \partial \phi_{0}^{2} }  & =2
\end{align}
$$

Bottom left ($H_{2,1}$):
$$
\begin{align}
\frac{ \partial^{2}\ell_{i} }{ \partial \phi_{1} \phi_{0} } = 2x_{i} 
\end{align}
$$
Top right ($H_{1,2}$):
$$
\begin{align}
\frac{ \partial \ell _{i} }{ \partial \phi_{1} }  & = 2x_{i}(\phi_{0}+\phi_{1}x_{i}-y_{i}) \\[2ex] 
\frac{ \partial^{2} \ell_{i} }{ \partial \phi_{0} \phi_{1} } & = 2x_{i}
\end{align}
$$
Bottom right ($H_{2,2}$):
$$
\frac{ \partial^{2} \ell_{i} }{ \partial \phi_{1}^{2} } = 2x_{i}^{2}
$$
So the result for a single point is:
$$
\begin{bmatrix}
2 & 2x_{i} \\
2x_{i} & 2x_{i}^{2}
\end{bmatrix}
$$
And the Hessian of the total loss is:
$$
H[\phi] = \sum_{i=1}^{I} \begin{bmatrix}
2 & 2x_{i} \\
2x_{i} & 2x_{i}^{2}
\end{bmatrix} = \begin{bmatrix}
2I  & 2\sum x_{i} \\
2\sum x_{i}  & 2\sum x_{i}^{2}
\end{bmatrix}
$$
The trace is positive:
$$
\text{tr}(H) = H_{1,1}+H_{2,2} = 2I + 2 \sum x_{i}^{2} >0
$$
The determinant is:
$$
\det(H) = ad - bc = (2I)\left( 2 \sum x_{i}^{2} \right) - \left( 2 \sum x_{i} \right)^{2} = 4I \sum x_{i}^{2} - 4\left( \sum x_{i}\right)^{2} > 0
$$
Thus, the surface is convex.

> [!question] Problem 6.3
> 


> [!question] Problem 6.4
> 


> [!question] Problem 6.5
> 


> [!question] Problem 6.6
> 


> [!question] Problem 6.7
> 


> [!question] Problem 6.8
> 


> [!question] Problem 6.9
> 


> [!question] Problem 6.10
> 


> [!question] Problem 6.11
> 