---
title: Sampled-Data System Stability
tags:
  - mte484
date: 2025-11-07
aliases:
  - sampled-data system stability
  - pathological
---
The **map** from $\begin{bmatrix} r \\ d\end{bmatrix}$ to $\begin{bmatrix} u \\ e \\ y\end{bmatrix}$ is the function that sends $r(t), d(t)$ to the resulting $u(t), e(t), y(t)$.

- This is basically a more generalized version of a transfer function. A SD system does not have well-defined closed-loop transfer functions in CT since it is not LTI.

> [!definition] Sampled-Data System Closed-Loop Stability
> A sampled-data system is closed-loop stable if the map from from $\begin{bmatrix} r \\ d\end{bmatrix}$ to $\begin{bmatrix} u \\ e \\ y\end{bmatrix}$ is BIBO stable.

> [!definition] BIBO Stability for Sampled-Data System
> The map $\begin{bmatrix} x_{1} \\ \vdots \\ x_{n} \end{bmatrix}$ to $\begin{bmatrix} y_{1} \\ \vdots \\ y_{n} \end{bmatrix}$ is BIBO stable if for every collection of bounded signals $x_{1}(t), \dots, x_{n}(t)$, the resulting $y_{1}(t), \dots, y_{n}(t)$ are bounded.

## Corresponding Discrete Time System
Can we find the closed-loop stability of a sampled-data system (at all times) by evaluating the stability of a corresponding discrete time system (at the sample points)?

For a given sampled-data system:

![[Sampled-Data System Stability-1765056713481.webp]]

We can draw the following corresponding discrete system, which is equal to the sampled-data system at sample points:

![[Sampled-Data System Stability-1765056726514.webp]]

Then, can we determine closed-loop stability of the SD system (at **all** times) by evaluating the closed-loop stability of the associated DT system (at the sample times)?
## Pathological Sampling Time
For a plant $P(s)$, a sampling time $T>0$ is **pathological** if the number of poles of $G[z]$ is less than the number of poles of $P(s)$.

Example:
$$
P(s)= \frac{1}{s-1+j} + \frac{1}{s-1-j} \quad  \text{(2 poles)}
$$
Then:
$$
\begin{align}
G[z] = \frac{1}{j-1} \frac{1-e^{(1-j)T}}{z-e^{(1-j)T}} + \frac{1}{-j-1}\frac{1-e^{(1+j)T}}{z-e^{(1+j)T}}  \\
\end{align}
$$
where we are using $-\frac{1}{\lambda} \frac{1-e^{\lambda T}}{z-e^{\lambda T}}$.

As we vary $T$, the poles of $G[z]$ move, similar to a [[Root Locus Method|root locus plot]].

If we choose $T=2\pi$ we will have
$$
\begin{align}
G[z]  & = \frac{1}{j-1} \frac{1-e^{2\pi}}{z-e^{2\pi}} + \frac{1}{-j-1} \frac{1-e^{2\pi}}{z-e^{2\pi}}  \\[2ex]
 & = \frac{2(e^{2\pi}-1)}{z-e^{2\pi}} \quad  \text{(1 pole!)}
\end{align}
$$

Note: for almost all $T>0$, $T$ is non-pathological.


> [!theorem] 
> For the sampled-data system, is $T>0$ is non-pathological, then the SD system is closed-loop stable if and only if its associated discrete-time system is itself closed-loop stable.

This is a lot easier to check than checking for BIBO stability! We can check the stability of a sampled-data system by looking only at its associated discrete-time system.

Thus, we can say that a SD system is closed-loop stable if and only if roots of the [[Characteristic Polynomial Closed-Loop Stability|characteristic polynomial]] $\Delta$ (for the system with $G[z], D[z]$) are in the open unit disk $\mathbb{D}$. 
- [[Schur Characteristic Polynomials]]

## State Space Realization for DT system

> [!theorem] Lemma
> If $T>0$ is non-pathological and the DT system is closed-loop stable, then $T_{rx}[z]$ and $T_{dx}[z]$ are BIBO stable.

In service of this lemma, we will create a state space realization for the DT feedback system.

First, we start with the state space realization of the plant and the controller:
$$
\quad \begin{align}
G[z]:\quad  \quad x[k+1] &  = A_{d}x[k]+B_{d}u[k] \\[2ex]
y[k] &  = C_{x}[k]
\end{align}
$$
- States are $\vec{x}$
$$
\begin{align}
D[z]: \quad  \quad  \hat{x}[k+1]  & = \hat{A}\hat{x}[k]+\hat{B}(r[k]-y[k]) \\[2ex]
\overline{y}[k]  & = \hat{C}\hat{x}[k] + \hat{D}(r[k]-y[k]) \\[2ex]
u[z]  & = \overline{u}[k]+d[k]
\end{align}
$$
- States are $\vec{\hat{x}}$

Second, we pick states for the whole feedback system to be
$$
\begin{bmatrix}
\vec{x} \\
\vec{\hat{x}}
\end{bmatrix}
$$
such that:
$$
\begin{align}
x[k+1]  & = A_{d} x[k]+B_{d}u[k]= A_{d}x[k] + B_{d}(\overline{u}[k]+d[k]) \\
 & = A_{d}x[k] + B_{d}d[k]+ B_{d}(\hat{c}\hat{x}[k]+\hat{D}(r[k]-y[k])) \\[2ex] 
\hat{x}[k+1]  & = \hat{A}\hat{x}[k] + \hat{B}(r[k]-Cx[k])  \\
 & =   -\hat{B}Cx[k]+\hat{A}\hat{x}[k]+\hat{B}r[k]
\end{align}
$$
