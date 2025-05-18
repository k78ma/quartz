---
title: Stream Function
tags:
  - mech2210
date: 2025-05-17
aliases:
  - stream function
---
Steady, incompressible, plane, two-dimensional flow represents one of the simplest types of flow of practical importance. By plane, two-dimensional flow we mean that there are only two velocity components, such as u and when the flow is considered to be in the $x$–$y$ plane.

The continuity equation for an incompressible fluid in 3D is expressed as:
$$
\nabla \cdot \mathbf{V} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0
$$
For 2D flows, this simplifies to:
$$
\begin{align}
\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y}  & = 0 \\[2ex] 
\frac{ \partial u }{ \partial x }  & = \frac{ \partial (-v) }{ \partial y } 
\end{align}
$$
This possible to relate $u$ and $v$ using a single function $\psi$?

If $\psi(x,y)$ has continuous second-order derivatives:
$$
\frac{ \partial^{2}\omega }{ \partial x \partial y }  = \frac{ \partial^{2}\omega }{ \partial y \partial x }  \quad \Longrightarrow \quad u= \frac{ \partial \psi }{ \partial y },  \,  v=-\frac{ \partial \psi }{ \partial x } 
$$
This definition automatically satisfies the continuity equation.

What exactly is $\psi(x,y)$? 
$$
d\psi = \frac{ \partial \psi }{ \partial x } dx + \frac{ \partial \psi }{ \partial y } dy = -vdx + udy
$$
On a curve on which $\psi=\text{const}$, we would have
$$
d\psi = -vdx + udy = 0 \quad \Longrightarrow \quad  \frac{dy}{dx} = \frac{v}{u}
$$
Thus, $\psi=\text{const}$ defines a streamline.

What is the meaning of the value of the value of $\psi$?

![[Stream Function-20250517225929866.png]]

Consider the difference between difference in the stream function values between two streamlines:
$$
dq = u dy - vdx
$$
Substituting the definitions of $u$ and $v$:
$$
dq = \frac{ \partial \psi }{ \partial y } dy + \frac{ \partial \psi }{ \partial x } dx
$$
Integrating from one streamline to another:
$$
    q = \int_{\psi_{1}}^{\psi_{2}}  \, d\psi = \psi_{2}-\psi_{1}
$$
The difference in $\psi$ values is equal to the flow rate between those two streamlines. This is a powerful result because it allows us to compute **mass flow rates** just by knowing the stream function!
