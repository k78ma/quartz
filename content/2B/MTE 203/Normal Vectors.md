---
title: Normal Vectors
tags:
  - mte203
date: 2023-09-15
---
### Normal Vectors to 2D curves
Consider some curve parametrized by its length $s$
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
