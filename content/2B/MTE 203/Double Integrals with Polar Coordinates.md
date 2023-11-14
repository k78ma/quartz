---
title: Double Integrals with Polar Coordinates
tags:
  - mte203
date: 2023-11-13
aliases:
---
Polar coordinates are $(r, \theta)$ such that $x=r\cos (\theta)$ and $y=r\sin(\theta)$.

How do we write an integral $\int \int _{R}f(x,y) \, dA$ in terms of $r$ and $\theta$? 

Two options:

- Partition a polar sector by concentric circles with radii $a=r_{0}<r_{1}<\dots r_{n}=b$ and radial lines $\alpha < \theta_{0}<\theta_{1}<\dots<\theta_{m} = \beta$ and then use the definition of the integral to find what $dA$ changes to.

- Linear algebra: Recall that the determinate tells us the area of a parallelogram given by the vectors that form its rows. Hence the change in area caused by changing coordinate systems can be found computing the Jacobian?

#### Theorem 1
If $f(x,y)$ is some function in Cartesian coordinates, $R$ is some region in space, $x=g(u,v)$ and $y=h(u,v)$ and $S$ is the region $R$ written in $(u,v)$ coordinates then:
$$
\int \int _{R}f(x,y) \, dA  = \int\int _{S}f(g(u,v), h(u,v)) \Big| \frac{ \partial (x,y) }{ \partial (u,v) }  \Big| \, dA'
$$
where $dA'$ is the area with the respect to $u$ and $v$. We take the absolute values of the Jacobian matrix not just the determinate.

#### Theorem 2
In polar coordinates, $dA = r dr d\theta$.

>[!proof] Proof
>In polar coordinates $x=r\cos(\theta)$ and $y=r\sin(\theta)$. Hence,
>$$
>\begin{align}
\frac{ \partial (x,y) }{ \partial (r,\theta) }  & = \begin{vmatrix}
> \frac{ \partial x }{ \partial r }  & \frac{ \partial x }{ \partial \theta } \\
>\frac{ \partial y }{ \partial r }  & \frac{ \partial x }{ \partial \theta } 
>\end{vmatrix} \\[3ex]
>  & =  \begin{vmatrix}
>\cos \theta  & -r\sin \theta \\
>\sin \theta & r \cos \theta
>\end{vmatrix} \\[3ex]
>&=r
>\end{align}
>$$
>Hence $dA = | r |dr d\theta=r dr d\theta$.
>This means that
>$$
>\int \int _{R} f(x,y) \, dA = \int \int _{s} f(r\cos(\theta),r\sin \theta)r dr d\theta
>$$
