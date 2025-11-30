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

- This is basically a more generalized version of a transfer function.

> [!definition] Sampled-Data System Closed-Loop Stability
> A sampled-data system is closed-loop stable if the map from from $\begin{bmatrix} r \\ d\end{bmatrix}$ to $\begin{bmatrix} u \\ e \\ y\end{bmatrix}$ is BIBO stable.

> [!definition] BIBO Stability for Sampled-Data System
> The map $\begin{bmatrix} x_{1} \\ \vdots \\ x_{n} \end{bmatrix}$ to $\begin{bmatrix} y_{1} \\ \vdots \\ y_{n} \end{bmatrix}$ is BIBO stable if for every collection of bounded signals $x_{1}(t), \dots, x_{n}(t)$, the resulting $y_{1}(t), \dots, y_{n}(t)$ are bounded.

## Corresponding Discrete Time System
Can we find the closed-loop stability of a sampled-data system (at all times) by evaluating the stability of a corresponding discrete time system (at the sample points)?

For a given sampled-data system:

![[Sampled-Data System Stability-20251121114551048.png|621]]

We can draw the following corresponding discrete system, which is equal to the sampled-data system at sample points:

![[Sampled-Data System Stability-20251121115256923.png]]

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

