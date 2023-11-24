---
title: Finite Element Method - 1D Poission
tags: 
date: 2023-11-24
aliases:
---
Consider the 1D Poisson's equation:
$$
\frac{d^{2}T}{dx^{2}}=-f(x), \quad T(0,t)=T_{1}, \quad T(L,t)=T_{2}
$$
This describes the temperature in a rod with boundary conditions and where $f(x)$ defines a heat source along the length of the rod (10cm).

![[Finite Element Method - 1D Poission.png|616]]

### Analytical Solution
We can solve this by considering the analytical solution form of a quadratic:
$$
\begin{align}
T=ax^{2}+bx+c \\
T'' = 2a
\end{align}
$$
The boundary conditions
Solving for $a,b,c$ using boundary conditions:
$$
\begin{align}
f(x) & =10 \\
T''  & =2a=-f(x) \\
a & =-5
\end{align}
$$
Boundary conditions:
$$
\begin{align}
T(0,t)=40 \\
T(10,t)=200
\end{align}
$$
Analytical solution:
$$
T=-5x^{2}+66x+40
$$
### FEM: Direct Method
If we assume $f(x)=0$, a direct method can be employed to generate the element equations. 

![[Finite Element Method - 1D Poission-1.png|376]]

The relationship between heat flux and temperature gradient can be represented by Fourier's Law:
$$
q=-k'\frac{ dT }{ dx } 
$$
where $q=\text{flux} \; \; [\text{cal/}(\text{cm}^{2}\text{s})]$ and $k'$ is the coefficient of thermal conductivity. If a linear approximation function is used to characterize the element’s temperature, the heat flow into the element through node 1 can be represented by:
$$
q_{1}=k' \frac{T_{1}-T_{2}}{x_{2}-x_{1}}
$$
where $q_{1}$ is heat flux at node 1. Similarly, for node 2:
$$
q_{1}=k' \frac{T_{2}-T_{1}}{x_{2}-x_{1}}
$$
These two equations express the relationship of the element’s internal temperature distribution (as reflected by the nodal temperatures) to the heat flux at its ends. As such, they constitute our desired element equations. 

They can be simplified further by recognizing that Fourier’s law can be used to couch the end fluxes themselves in terms of the temperature gradients at the boundaries:
$$
q_{1}=-k' \frac{dT(x_{1})}{dx}, \quad q_{2}=k'\frac{ dT (x_{2})}{ dx } 
$$
which can be substituted into the element equations to give
$$
\frac{1}{x_{2}-x_{1}}
\begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
\begin{Bmatrix}
T_{1} \\
T_{2}
\end{Bmatrix}
=
\begin{Bmatrix}
-\frac{dT(x_{1})}{dx} \\
\frac{dT(x_{2})}{dx}
\end{Bmatrix}
$$
### FEM: Method of Weighted Residuals
This is similar to the direct method but also includes external effects.

The differential equation can be re-expressed as:
$$
0=\frac{d^{2}T}{dx^{2}}+f(x)
$$
The approximate solution is:
$$
\tilde{T}=N_{1}T_{1}+N_{2}T_{2}
$$
This can be substituted into this equation, which will result in a residual:
$$
R=\frac{d^{2}\tilde{T}}{dx^{2}}+f(x)
$$
The method of weighted residuals consists of finding a minimum for the residual according to the general formula
$$
\int_{D} RW_{i} \, dD \quad \quad i=1,2,\dots,m 
$$
where $D$ is the solution domain and $W_{i}$ are linearly independent weighting functions.

We need to decide on weighting functions. One common approach is to use the interpolation functions $N_{i}$ as the weighting functions (Galerkin's method), such that:
$$
\int_{D} RN_{i} \, dD \quad \quad i=1,2,\dots,m 
$$
For our one-dimensional rod, our previous residual $R=\frac{d^{2}\tilde{T}}{dx^{2}}+f(x)$ can be substituted into this formulation to give:
$$
\int_{x_{1}}^{x_{2}} \left[ \frac{d^{2}\tilde{T}}{dx^{2}}+f(x) \right]N_{i} \, dx \quad \quad i=1,2 
$$
which can be re-expressed as:
$$
\int_{x_{1}}^{x_{2}} \frac{d^{2}\tilde{T}}{dx^{2}}N_{i} \, dx = - \int_{x_{1}}^{x_{2}}f(x)N_{i}(x)\, dx \quad \quad i=1,2 
$$
This solves to:
$$
\frac{1}{x_{2}-x_{1}}
\begin{bmatrix}
1 & -1 \\
-1 & 1
\end{bmatrix}
\begin{Bmatrix}
T
\end{Bmatrix}
=
\begin{Bmatrix}
-\frac{dT(x_{1})}{dx} \\
\frac{dT(x_{2})}{dx}
\end{Bmatrix}
+
\begin{Bmatrix}
\int_{x_{1}}^{x_{2}}f(x)N_{1}(x)\, dx \\[2ex]
\int_{x_{1}}^{x_{2}}f(x)N_{2}(x)\, dx
\end{Bmatrix}
$$
So, given our boundary conditions of:
$$
\begin{align}
T(0,t) & =40 \\
T(10,t) & =200
\end{align}
$$
Given $f(x)=10$ and elements of length 2.5cm. We have:
- Heat source term, first row:
$$
\int_{0}^{2.5} 10 \frac{2.5-x}{2.5} \, dx =12.5
$$
- Heat source term, second row:
$$
\int_{0}^{2.5} 10 \frac{x-0}{2.5} \, dx =12.5
$$
For a single element:
$$
\begin{align}
0.4T_{1}-0.4T_{2} & =-\frac{ dT }{ dx } (x_{1})+12.5 \\[3ex] 
-0.4T_{1}+0.4T_{2} & =-\frac{ dT }{ dx } (x_{2})+12.5 \\[3ex] 
\end{align}
$$
Assembly of equations for the total system:
![[Finite Element Method - 1D Poission-2.png]]

The boundary conditions are then:

![[Finite Element Method - 1D Poission-3.png|476]]

Solution:
$$
\begin{align}
\frac{ dT }{ dx } (x_{1}) & =66 \\
T_{2} & =173.75 \\
T_{3} & =245 \\
T_{4} & =253.75 \\
\frac{ dT }{ dx } (x_{5}) & =-34
\end{align}
$$

### Comparison of Analytical vs. FEM
Comparing this analytical solution to our finite element solution:

![[Finite Element Method - 1D Poission-4.png|372]]

More elements = smoother curve!