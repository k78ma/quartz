---
title: Basic Equation for Pressure Field
tags:
  - mech2210
date: 2025-02-24
aliases:
  - basic equation for pressure field
---
How does the pressure in a fluid in which there are no shearing stresses vary from point to point? There are two types of forces acting on this element: **surface forces** due to to the pressure and a **body force** equal to the weight of the element. 

Let's consider the pressure change in the $y$ direction for the element below.

![[Basic Equation for Pressure Field.png|548]]

The force on the left face is $p_{y} \,\delta x\,\delta z$ and the pressure on the right face is $(p_{y}+\delta p_{y})\cdot\delta_{x}\,\delta_{z}$. Thus, the net force in the $y$-direction is
$$
\begin{align}
\delta F_{y} & =p_{y} \,\delta x\,\delta z - (p_{y}+\delta p_{y})\,\delta x \,\delta z \\
     & = -\delta p_{y}\,\delta x\,\delta z
\end{align}
$$
Note that the pressure at any point is a function of spatial coordinates:
$$
p=p(x,y,z)
$$
By considering the Taylor series expansion, the pressure change in any direction is given by:
$$
dp=\frac{ \partial p }{ \partial x } dx+\frac{ \partial p }{ \partial y } dy+\frac{ \partial p }{ \partial z } dz
$$
For an isolated direction, we can write
$$
\delta p_{y}=\frac{ \partial p }{ \partial y } \delta y
$$
where $\delta p_{y}$ is the small pressure difference between two points separated by $\delta y$, $\frac{ \partial p }{ \partial y }$ represents how pressure changes per unit distance in the $y$-direction, and $\delta y$ is a small displacement in the $y$-direction.

We can substitute into our previous $\delta F_{y}=-\delta p_{y}\,\delta x\,\delta z$ to get:
$$
\delta F_{y}=- \frac{ \partial p }{ \partial y } \delta y \,\delta x\,\delta z
$$
Similarly, we can derive the other directions:
$$
\begin{align}
\delta F_{x}=- \frac{ \partial p }{ \partial x } \delta y \,\delta x\,\delta z \\[2ex] 
\delta F_{z}=- \frac{ \partial p }{ \partial z } \delta y \,\delta x\,\delta z
\end{align}
$$
The **total surface force** on the element can be expressed in vector form:
$$
\begin{align}
\delta  \mathbf{F}_{s} & =\delta F_{x}\,\mathbf{i}+\delta F_{y}\,\mathbf{j}+\delta F_{z}\,\mathbf{k} \\[2ex]
     & = -{ \left( \frac{ \partial p }{ \partial x } \mathbf{i}+\frac{ \partial p }{ \partial y }\mathbf{j}+\frac{ \partial p }{ \partial z } \mathbf{k} \right)}\,\delta y\,\delta x\,\delta z \\[2ex]
     & =-\nabla p \cdot \,\delta y\,\delta x\,\delta z 
\end{align}
$$
The **body force** or weight of the element is given by:
$$
\delta \mathbf{F}_{b}=-\delta w\mathbf{k}=-\delta m\cdot g\mathbf{k}=-\gamma \, \delta x\,\delta y\,\delta z \,\mathbf{k}
$$
Then, the total force on the element is given by:
$$
\begin{align}
\delta \mathbf{F} & =\delta \mathbf{F}_{s}+\delta \mathbf{F}_{b} \\
 & =(-\nabla p-\gamma \mathbf{k}) \delta x\,\delta y\,\delta z \\
     & =\rho\delta x\,\delta y\,\delta z\cdot \mathbf{a}
\end{align}
$$
where $\mathbf{a}=a_{x}\mathbf{i}+a_{y}\mathbf{j}+a_{z}\mathbf{k}$ is the acceleration of the element.

Therefore, we can also write
$$
-\nabla p-\gamma \mathbf{k}=\rho\mathbf{a}
$$
and
$$
\begin{align}
-\frac{ \partial p }{ \partial x } =\rho a_{x} \\[2ex] 
-\frac{ \partial p }{ \partial y } =\rho a_{y} \\[2ex] 
-\frac{ \partial p }{ \partial z } =\rho a_{z}
\end{align}
$$


