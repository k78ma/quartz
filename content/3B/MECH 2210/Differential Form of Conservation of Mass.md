---
title: Differential Form of Conservation of Mass
tags:
  - mech2210
date: 2025-04-23
aliases:
  - differential form of conservation of mass
  - continuity equation for incompressible fluids
---
Recall the [[Fluid Conservation of Mass|continuity equation]] based on the conservation of mass:
$$
\frac{ \partial  }{ \partial t } \int _{\text{C.V.}}\rho \, d\forall  + \int_{\text{C.S.}} \rho \mathbf{V} \cdot  \text{n} \, dA  =0
$$
To derive a differential form, consider the fluid element as a small cube with sides $dx, dy, dz$.

![[Differential Form of Conservation of Mass-20250517213944538.png]]

Pressure inside the element is constant. Since the element is small, the volume integral in the continuity equation can be written as
$$
\frac{ \partial  }{ \partial t } \int_{\text{cv}} \rho  \, d\forall = \frac{ \partial \rho }{ \partial t } dx \,dy \,dz
$$

Let's consider the second term of the continuity equation describing mass flow rate. Let's start with the $x$ direction.

Inflow to the left face is given as:
$$
\rho uA = \rho udydz
$$
Outflow from the right face is:
$$
(\rho + d \rho)(u+du) A = (\rho u + \rho du + u d \rho + dud \rho) dy
$$
The net mass flowrate is then:
$$
(\rho du + u d \rho) dydz = d(\rho u ) dydz = \frac{ \partial (\rho u) }{ \partial x } dxdydz
$$
Similarly, in the $y$ and $z$ directions, we have
$$
\frac{ \partial (\rho v) }{ \partial y } dxdydz, \quad \quad \frac{ \partial (\rho w) }{ \partial z } dzdydz
$$
Combining all three directions and substituting back into the continuity equation gives us:
$$
\left[ \frac{ \partial (\rho u) }{ \partial x } +\frac{ \partial (\rho v) }{ \partial y } +\frac{ \partial (\rho w) }{ \partial z }  \right]dxdydz + \frac{ \partial \rho }{ \partial t } dxdydz = 0
$$
or simply
$$
\begin{align}
\frac{ \partial \rho }{ \partial t }+\frac{ \partial (\rho u) }{ \partial x } +\frac{ \partial (\rho v) }{ \partial y } +\frac{ \partial (\rho w) }{ \partial z }    & = 0 \\[2ex] 
\frac{ \partial \rho }{ \partial t }  + \nabla \cdot \rho \mathbf{V}  & = 0
\end{align}
$$
For steady flows:
$$
\nabla\cdot \rho V = 0
$$
For incompressible flows:
$$
\begin{align}
\nabla \cdot \mathbf{V} =0 \quad \Longrightarrow \quad  
\frac{ \partial u }{ \partial x } + \frac{ \partial v }{ \partial y } + \frac{ \partial w }{ \partial z }   = 0
\end{align}
$$
## Example
Given:
$$
\begin{align}
u  & = x^{2}+y^{2}+z^{2} \\
v & = xy + yz + z
\end{align}
$$
Determine $w$ if the flow is incompressible.

For incompressible flows, we have:
$$
\begin{align}
\nabla \cdot \mathbf{V} =0 \quad \Longrightarrow \quad  
\frac{ \partial u }{ \partial x } + \frac{ \partial v }{ \partial y } + \frac{ \partial w }{ \partial z }   = 0
\end{align}
$$
Then:
$$
\begin{align}
\frac{ \partial u }{ \partial x }  & = 2x \\[2ex] 
\frac{ \partial v }{ \partial y }  & = x+z \\[2ex] 
\frac{ \partial w }{ \partial z }   & = -3x-z
\end{align}
$$
Integrating:
$$
w=-3xz - \frac{1}{2}z^{2} + f(x,y)
$$