---
title: Normal Vectors
tags:
  - mte203
date: 2023-09-15
---
### Normal Vectors to 2D curves
Consider some curve parametrized by its length $s$:
$$
C: \quad x=x(s), y=y(s)
$$
We know that the [[Tangent Vector#Unit Tangent Vector|Unit Tangent Vector]] to this curve at $s$ is:
$$
\hat{T}(t)= \frac{ d\vec{r} }{ ds } =\frac{ dx }{ ds } \vec{i}+\frac{ dy }{ ds } \vec{j}
$$
The unit normal vector to the curve $C$ at $s$ can then simply be found by swapping the vector components and negating one of them:
$$
\hat{N}=-\frac{ dy }{ ds } \vec{i}+\frac{ dx }{ ds } \vec{j}
$$
All other normal vectors to the curve are scalar multiples of $\hat{N}$.

### Normal Vectors to 3D curves
For a 3D curve parametrized by its length $s$:
$$
C: \quad x=x(s), y=y(s), z=z(s), \quad 0 \leq s\leq L
$$
We already know how to compute the unit tangent vector, $\hat{T}$, which satisfies:
$$
1=\hat{T}\cdot \hat{T}
$$
Differentiating with respect to $s$ gives:
$$
\begin{align}
0 &= \frac{ d\hat{T} }{ ds } \cdot \hat{T} + \hat{T}\cdot \frac{ d\hat{T} }{ ds }  \\
&= 2\left( \hat{T} \cdot \frac{ d\hat{T} }{ ds }  \right)
\end{align}
$$
If $\vec{T}$ and $\frac{d\vec{T}}{ds}$ are non-zero, then $\frac{d\vec{T}}{ds}$ is orthogonal to $\hat{T}$ and can be used as a normal vector:
$$\vec{N}=\frac{d\vec{T}}{ds}$$
Unit normal vector:
$$
\hat{N}=\frac{\vec{N}}{\mid N \mid}
$$
This is also called the principal normal vector to $C$. Unlike the 2D case, there are normal vectors $C$ at $s$ that are not a scalar multiple of $\hat{N}$.

What if $C$ is not parametrized by $s$ but by some other $t$?
$$
C: \quad x=x(t), y=y(t), z=z(t), \quad \alpha \leq t \leq \beta
$$
An application to $\hat{T}$ yields this
$$
\frac{ d\hat{T} }{ ds } = \frac{ d\hat{T} }{ dt } \frac{dt}{ds}
$$
- Note: $\frac{dt}{ds}$ is non-negative since both $s$ and $t$ increase along the direction of $C$

We hence define a unit normal vector by:
$$
\begin{align}
\vec{N}&= \frac{ {d\hat{T}}/{ds} } {\mid {d\vec{T}}/{ds} \mid} \\
&= \frac{ ({d\hat{T}}/{ds})(dt / ds) } {\mid( {d\vec{T}}/{ds} )(dt / ds)\mid} \\
&= \frac{ ({d\hat{T}}/{ds})(dt / ds) } {\mid d\hat{T} / dt \mid dt / ds} \\
&= \frac{d\hat{T} / dt}{\mid d\hat{T} / dt \mid}
\end{align}
$$