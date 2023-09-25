---
title: Curvature
tags:
  - mte203
date: 2023-09-18
---
At any point along a curve $C$ with
$$
C: \quad x=x(s), y=y(s), z=z(s), \quad 0\leq s\leq L
$$
we can define a tangent line but also a tangent circle.

Note that the unit tangent vector does not change its length along the curve but can change its direction.

>[!info] Curvature of Tangent Circle
>The magnitude of $\frac{d\hat{T}}{ds}$ is the curvature of the tangent circle.

>[!proof]-
>Consider the parametric equations of a circle at $(R,0)$ of radius $R$:
>$$
>x=R+R\cos\left( \frac{s}{R} \right), y = R\sin\left( \frac{s}{R} \right), 0\leq s\leq 2\pi R
>$$
>It follows that
>$$
>\hat{T}=-\sin\left( \frac{s}{R} \right)\hat{i}+\cos\left( \frac{s}{R} \right)\hat{j}
>$$
>and
>$$
>\frac{ d\hat{T} }{ ds } = -\frac{1}{R}\cos\left( \frac{s}{R} \right)\hat{i}-\frac{1}{R}\sin\left( \frac{s}{R} \right)\hat{j}
>$$
>Note that at the origin, $s=\pi R$. At this point, we also have
>$$
>\frac{d\hat{T}}{ds}=\frac{1}{R}\hat{i}+0\hat{j}
>$$
>For any cricle, the vector above has a fixed direction but the magnitude $\mid \frac{d\hat{T}}{ds} \mid = \frac{1}{R}$  is the inverse of the radius of the circle, also called the curvature. The inverse ($R$) is also called the radius of curvature.

>[!info] Curvature
>$$
>\kappa = \Bigg | \frac{d\hat{T}}{ds} \Bigg | 
>$$
>where $\vec{T}$ is the unit tangent and $s$ is the arc length

>[!info] Radius of curvature
>$$
>\rho(s)=\frac{1}{\kappa(s)}
>$$
>where $\kappa(s)$ is the curvature defined above.

>[!info] Circle of curvature
>The circle of curvature is the circle in the plane defined by $\hat{T}$ and $\hat{N}$ with center at $\vec{r}(s)+\rho(s)\vec{N}$ and radius $\rho (s)$.
