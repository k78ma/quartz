---
title: Hyperbolic Equations
tags:
  - mte204
date: 2023-12-09
aliases:
  - wave equation
---
Hyperbolic equations have an unknown characterized by a second derivative with  
respect to time, such as the wave equation:
$$
\frac{ \partial^{2}u }{ \partial t^{2} } =a^{2}\frac{ \partial^{2} u}{ \partial x^{2} } 
$$
where:
- $u$ is the wave amplitude
- $x$ is position
- $t$ is time
- $a$ is a constant. For the 1D wave equation, $a$ is replaced with $c$ and is the wave speed

The 1D wave equation is:
$$
\begin{align}
\frac{ \partial^{2}u }{ \partial t^{2} }  & =c^{2} \frac{ \partial^{2}u }{ \partial x^{2} } \\[3ex] 
\frac{ \partial^{2}u }{ \partial t^{2} } -c^{2} \frac{ \partial^{2}u }{ \partial x^{2} }  & =0
\end{align}
$$

With initial conditions:
- Shape of wave: $u(x,0)=f(x); \; \; a \leq x\leq b$
- Velocity of wave: $\frac{ \partial u }{ \partial t }(x,0)=g(x); \; \; a\leq x\leq b$

Boundary conditions which represent the wave amplitudes at $x$ boundaries:
- $u(a,t)=l(t); \;\; t \geq 0$
- $u(b,t)=r(t); \;\; t\geq 0$

>[!note] Notation  
>Subscript $i$ is for $x$ (displacement) h is the step size in the spatial coordinate  
>Subscript $j$ is for $t$ (time), $k$ is the step size in time  
>This is a 2D problem with grid points $x_{i}$ and $t$.

We start by replacing the second derivative with the centered difference. Recall that:
$$
f''(x_{i})=\frac{f(x_{i+1})-2f(x_{i}+f(x_{i-1}))}{h^{2}}, \quad O(h^{2})
$$
So the substitution is:
$$
\frac{u_{i,j+1}-2u_{i,j}+u_{i,j-1}}{k^{2}}-c^{2} \frac{u_{i-1}-2u_{i,j}+u_{i+1},j}{h^{2}}=0
$$
We let $\sigma=\frac{ck}{h}$. Rearranging for u at the next time point ($j+1$):
$$
u_{i,j+1}=(2-2\sigma^{2})u_{i,j}+\sigma^{2}u_{i-1,j}+\sigma^{2}u_{i+1,j}-u_{i,j-1}
$$
However, we require values at two prior time steps: $j$ and$j-1$, to solve for $j+1$.

To address this challenge, we can approximate the first partial derivative of $u$ with respect to time (subscript $j$) as:
$$
\frac{ \partial u }{ \partial t } \approx \frac{u_{i,j+1}-u_{i,j-1}}{2k}
$$
And using our initial condition:
$$
\frac{ \partial u }{ \partial t } (x_{i}, t_{0})=g(x_{i}) \approx \frac{u_{i,1}-u_{i,-1}}{2k}, \quad j=0 \;\; \text{ for IC} 
$$
Rearranging:
$$
u_{i,-1} \approx u_{i,1}-2kg(x_{i})
$$
Substituting the above into the original finite difference formulation:
$$
u_{i,1}=(1-\sigma^{2})u_{i,0}+kg(x_{i})+\frac{\sigma^{2}}{2}(u_{i-1,0}+u_{i+1,0})
$$
This formula is for the first time step ($j=1$) and includes the initial velocity g. For all later time steps, we use:
$$
u_{i,j+1}=(2-2\sigma^{2})u_{i,j}+\sigma^{2}u_{i-1, j}+\sigma^{2}u_{i+1,j}-u_{i,j-1}
$$
Since we have used 2nd order formulas for both space and time derivatives, the accuracy of the calculation will be $O(h^{2})+O(k^{2})$.

We use the finite difference method. Define:
$$
A = \begin{bmatrix}
2-2\sigma^{2} & \sigma^{2} & 0 & \dots & 0 \\
\sigma^{2} & 2-2\sigma^{2} & \sigma^{2} & \ddots & \vdots \\
0 & \sigma^{2} & 2-2\sigma^{2} & \ddots & 0 \\
\vdots & \ddots & \ddots & \ddots & \sigma^{2} \\
0 & \dots & 0 & \sigma^{2} & 2-2\sigma^{2}
\end{bmatrix}
$$
Then we can write the initial equation for the next time step $j=1$:
$$
u_{i,1}=(1-\sigma^{2})u_{i,0}+kg(x_{i})+\frac{\sigma^{2}}{2}(u_{i-1,0}+u_{i+1,0})
$$
in matrix form as:
$$
\begin{bmatrix}
w_{1,1} \\
\vdots \\
w_{m,1}
\end{bmatrix}
=
\frac{1}{2}A\begin{bmatrix}
w_{1,0} \\
\vdots \\
w_{m,0}
\end{bmatrix}
+k\begin{bmatrix}
g(x_{1}) \\
\vdots \\
g(x_{m})
\end{bmatrix}
+\frac{1}{2}\sigma^{2}\begin{bmatrix}
w_{0,0}  \\
0\\
\vdots  \\
0 \\
w_{m+1,0}
\end{bmatrix}
$$
Note that $i$ goes from $1$ to $m$, based on the spatial step size $h$. This vector is $m$ elements long, all zeros except for the first and last elements.

The subsequent time steps are:
$$
\begin{bmatrix}
w_{1,j+1} \\
\vdots \\
w_{m,j+1}
\end{bmatrix}
=
A\begin{bmatrix}
w_{1,j} \\
\vdots \\
w_{m,j}
\end{bmatrix}
-\begin{bmatrix}
w_{1,j-1} \\
\vdots \\
g(x_{m})
\end{bmatrix}
+\sigma^{2}\begin{bmatrix}
w_{0,j}  \\
0\\
\vdots  \\
0 \\
w_{m+1,j}
\end{bmatrix}
$$
Including initial boundary conditions:
$$
\begin{bmatrix}
w_{1,1} \\
\vdots \\
w_{m,1}
\end{bmatrix}
=
\frac{1}{2}A\begin{bmatrix}
f(x_{1}) \\
\vdots \\
f(x_{m})
\end{bmatrix}
+k\begin{bmatrix}
g(x_{1}) \\
\vdots \\
g(x_{m})
\end{bmatrix}
+\frac{1}{2}\sigma^{2}\begin{bmatrix}
l(t_{0})  \\
0\\
\vdots  \\
0 \\
r(t_{0})
\end{bmatrix}
$$
Subsequent time steps are:
$$
\begin{bmatrix}
w_{1,j+1} \\
\vdots \\
w_{m,j+1}
\end{bmatrix}
=
A\begin{bmatrix}
w_{1,j} \\
\vdots \\
w_{m,j}
\end{bmatrix}
-\begin{bmatrix}
w_{1,j-1} \\
\vdots \\
g(x_{m})
\end{bmatrix}
+\sigma^{2}\begin{bmatrix}
l(t_{j})  \\
0\\
\vdots  \\
0 \\
r(t_{j})
\end{bmatrix}
$$
