---
title: Tangent Lines and Planes
tags:
  - mte203
date: 2023-10-29
aliases:
---
Suppose we have a surface given by $F(x,y,z) = 0$ where we can parametrize $x,y,z$ by $t$. Differentiating with respect to $t$ gives:
$$
\frac{ \partial F }{ \partial x } \frac{ dx }{ dt } + \frac{ \partial F }{ \partial y } \frac{ dy }{ dt } +\frac{ \partial F }{ \partial z } \frac{ dz }{ dt } =0
$$
If we define $\vec{r} = (x,y,z)$ to be the vector valued function that defines the surface, then we can write the above as:
$$
\nabla F \cdot \frac{ d\vec{r} }{ dt }= 0 
$$
Thus, the equation for a plane that is tangent to the surface at some point $P$ is:
$$
\nabla F|_{p} \cdot (x-x_{0}, y-y_{0}, z-z_{0}) = 0
$$
