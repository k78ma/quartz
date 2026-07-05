---
title: Discretized Plant
tags:
  - mte484
date: 2025-11-13
aliases: discretized plant
---

> [!theorem] Discretized Plant
> To discrete a plant $C(s)$ with poles $\lambda_{i}$, we use
> $$
> G[z] = \sum_{i=1}^{n} \frac{c_{i}}{\lambda_{i}} \frac{e^{\lambda_{i}T}-1}{z-e^{\lambda_{i}T}}
> $$


Consider a standard sampled-data feedback control system:

![[Discretized Plant-1764990886441.webp]]

Here, we have $e(t)=r(t)-y(t)$ and a sampled $e[k]=e(kT)$.

We can consider another architecture:

![[Discretized Plant-1764990941288.webp]]

In this case, we have $y[k]=y(kT)$, $r[k]=r(kT)$, and $e[k]=r[k]-y[k]$.

It turns out that the two architectures above are actually equivalent. Then, let's zoom into the blue part, which is a discretized plant.

![[Discretized Plant-1764991056516.webp]]

This discretized plant subsystem is DT LTI! Thus, we combine it into one $G[z]$:

![[Discretized Plant-1764991086197.webp]]

Now, let's think about a standard discrete time control system:

![[Discretized Plant-1764991137202.webp]]

This system DT LTI. There is no approximation at the sample points. We know that sampled-data systems are not LTI, but this system is DT LTI. How is this possible? The discrete time control system is only valid (matches the DT system) only at the sample points. It determines behavior at the sample points only, not valid in between sample points

Thus, we aim to do **direct design** of $D[z]$ using the discretized plant $G[z]$. We will have:
- Transient specs guaranteed to be satisfied at the sample points
- Closed-loop stability guaranteed at sample points.

Thus, our goal is to derive $G[z]$ from $P(s)$, and show that is exact (an LTI system).

Assume that $P(s)$ has only simple poles and no integrator:
$$
P(s) = \sum_{i=1}^{n} \frac{c_{i}}{s-p_{i}}, \quad  p_{i} \neq 0 \,\, \forall \, i
$$
The sampler and hold do not have well-defined frequency domain representations since they are not LTI in general. Therefore, we must use time domain representations.

State space realization of $P(s)$:
$$
\begin{align}
\dot{x}  & = \underbrace{ \begin{bmatrix}
p_{1}  &  &  \\
 &  \ddots  &  \\
 &  & p_{n}
\end{bmatrix} }_{ A }x + \underbrace{ \begin{bmatrix}
1 \\
\vdots \\
1
\end{bmatrix} }_{ B }u \\[2ex] 
y  & = \underbrace{ \begin{bmatrix}
c_{1}  & \dots & c_{n}
\end{bmatrix} }_{ C }x
\end{align}
$$
We can then write:
$$
C(sI-A)^{-1}B=P(s)
$$
This choice of state space is easy to solve since $A$ is diagonal so the states are decoupled. Between samples $u(t)$ is constant, such that:
$$
\dot{x}_{i}=p_{i}x_{i}+u_{0} \,\, \forall \, i
$$
where $u_{0}$ is the constant value of $u(t)$ between samples.

Taking the Laplace transform with initial conditions:
$$
\begin{align}
sX_{i}(s) - (x_{i})_{0}  & = p_{i}X_{i}(s) + \frac{u_{0}}{s}\\[2ex] 
X_{i}(s)  & = \frac{(x_{i})_{0}}{s-p_{i}}+ \frac{u_{0}}{s(s-p_{i})} \\[2ex] 
     & = \frac{(x_{i})_{0}}{s-p_{i}}+\frac{u_{0}}{p_{i}}\left( \frac{1}{s-p_{i}}-\frac{1}{s} \right)
\end{align}
$$
where $x_{0}$ is the initial value of $x(t)$ just after the first sample.

Then, taking the inverse Laplace transform gives us:
$$
\begin{align}
x_{i}(t)  & = e^{p_{i}t}(x_{i})_{0} + \frac{u_{0}}{p_{i}}(e^{p_{i}t}-1) \,\, \forall \, i \\[2ex] 
x(t) & = \underbrace{ \begin{bmatrix}
e^{p_{1}t}  &  &  \\
 & \ddots &  \\
 &  & e^{p_{n}t}
\end{bmatrix} }_{ e^{At} } x_{0} + \underbrace{ \begin{bmatrix}
p_{1} &  &  \\
 & \ddots &  \\
 &  & p_{n}
\end{bmatrix}^{-1} }_{ A^{-1} } \left( \underbrace{ \begin{bmatrix}
e^{p_{1}t} &  &  \\
 & \ddots &  \\
 &  & e^{p_{n}t}
\end{bmatrix} }_{ e^{At} }  - \underbrace{ \begin{bmatrix}
1 &  &  \\
 & \ddots &  \\
 &  & 1
\end{bmatrix} }_{ I } \right) \underbrace{ \begin{bmatrix}
1 \\
\vdots \\
1
\end{bmatrix} }_{ B } u_{0} \\[2ex] 
x(t)  & = e^{At}x_{0}+A^{-1}(e^{At}-I)Bu_{0}
\end{align}
$$
Starting from $x_{0}=x[k]$ and $u_{0}=u[k]$ and find the solution after $t=T$ (one sampling period):
$$
\begin{align}
x[k+1]  & = \underbrace{ e^{AT} }_{ A_{d} }x[k] + \underbrace{ A^{-1}(e^{AT}-I)B }_{ B_{d} }u[k] \\[2ex] 
x[k+1]  & = A_{d}x[k] + B_{d}u[k]
\end{align}
$$
- Note: this system is DT LTI!

We want to find $G[z]$ in the frequency domain. Thus, using the $z$-transform:
$$
\begin{align}
zX[z]  & = A_{d}X[z]+B_{d}U[z] \\
Y[z]  & =CX[z]
\end{align}
$$
which gives:
$$
\begin{align}
X[z]  & = (zI-A_{d})^{-1}B_{d}U[z] \\[2ex] 
Y[z]  & = CX[z] = C(zI-A_{d})^{-1}B_{d}U[z]
\end{align}
$$
and
$$
T_{uy}[z] = C(zI-A_{d})^{-1}B_{d} = G[z]
$$
which is the same result as for CT but with $s$ replaced by $z$. Thus,
$$
\begin{align}
G[z]  & = C(zI - A_{d})^{-1} B_{d} \\[2ex]
 & = \begin{bmatrix}
c_{1} & \dots & c_{n}
\end{bmatrix} \begin{bmatrix}
z-e^{p_{1}T} &  &  \\
 & \ddots &  \\
 &  & z-e^{p_{n}T}
\end{bmatrix}^{-1} \begin{bmatrix}
\frac{1}{p_{1}} &  &  \\
 & \ddots &  \\
 &  & \frac{1}{p_{n}}
\end{bmatrix} \begin{bmatrix}
e^{p_{1}T}-1 &  &  \\
 & \ddots & e^{p_{n}T}-1
\end{bmatrix}\begin{bmatrix}
1 \\
\vdots \\
1
\end{bmatrix} \\[2ex] 
     & = \begin{bmatrix}
c_{1}  & \dots & c_{n}
\end{bmatrix} \begin{bmatrix}
\frac{1}{z-e^{p_{1}T}} &  &  \\
 & \ddots &  \\
 &  & \frac{1}{z-e^{p_{n}T}}
\end{bmatrix} \begin{bmatrix}
\frac{1}{p_{1}}(e^{p_{1}T}-1) \\
\vdots \\
\frac{1}{p_{n}}(e^{p_{n}T}-1)
\end{bmatrix} \\[2ex] 
 & =\begin{bmatrix}
c_{1}  & \dots & c_{n}
\end{bmatrix} \begin{bmatrix}
\frac{1}{p_{1}} \frac{e^{p_{1}}T-1}{z-e^{p_{1}T}} \\
\vdots \\
\frac{1}{p_{n}} \frac{e^{p_{n}}T-1}{z-e^{p_{n}T}}
\end{bmatrix} \\[2ex] 
& = \sum_{i=1}^{n} \frac{c_{i}}{p_{i}} \frac{e^{p_{i}T-1}}{z-e^{p_{i}T}}
\end{align}
$$
where $G[z]$ is called the discretized plant.
- This is the same results as for `c2d` in MATLAB by coincidence, even though `c2d` is used for approximation whereas $G[z]$ is exact.

Note that the poles of $G[z]$ are at $\{ e^{p_{1}T}, \dots, e^{p_{n}T} \}$, so they depend on both the poles of $P(s)$ and the sampling time $T$.
- As $T\to 0$, all poles approach $1$ (on the boundary of the unit disk). Thus, the system gets very slow and the control design becomes numerically unstable.
- However, $e^{p_{i}T}$ maps stable poles to stable poles – it preserves the stability type of each pole in $P(s)$ automatically.

Remember that $G[z]$ defines the behavior of the system at the sampling times. We need to look at [[Sampled-Data System Stability]] for behavior between sample times.