---
title: Nyquist Stability
tags:
  - mte484
date: 2025-11-21
aliases:
  - nyquist stability
  - Nyquist Stability Theorem
  - Nyquist plot
---
## Nyquist Plots

> [!definition] Contour
> $\Gamma$ is a contour if it is a simple, closed curve with a direction.
>  - Simple: No self intersections
>  - Closed: Starts and ends at the same point

Example 11.1

> [!theorem] Lemma
> Let $p \in \mathbb{C}$. Let $\Gamma$ be a contour. Then
> $$
> \frac{1}{2\pi j} \oint_{\Gamma} \frac{1}{z-p}dz = \begin{cases}
> 1 & \text{ if } \Gamma \text{ encloses } P \\
> 0 & \text{ otherwise}
> \end{cases}
> $$

> [!theorem] Lemma: Argument Principle
> Let $\Gamma$ be a contour, and $G[z]$ be real, rational, and proper. then $N=Z-P$
> - $N$ is the number of times $G(\Gamma)$ encloses the origin
> - $Z$ is the number of zero enclosed by $\Gamma$ (counting multiplicities)
> - $P$ is the number of poles enclosed by $\Gamma$ (counting multiplicities)
> 
> If we choose $\Gamma$ to be the unit circle, $Z$/$P$ are the number of stable zeros and poles.

Choose $V[z] = 1 + K[z]=1+L[z]$ . Then,
$$
N = \text{\# of encirclements of } -1 \text{ by } L[\Gamma]
$$
- Use $-\frac{1}{K}$ is varying $K$

Let $L[z] = \frac{\overline{N}[z]}{\overline{D}[z]}$, where $\overline{N}$ and $\overline{D}$ are coprime. Then, the characteristic polynomial is:
$$
\Delta[z]= \overline{N}[z] + \overline{D}[z]
$$
Thus,
$$
V[z] = 1 + L[z] = \frac{\overline{N}[z]+\overline{D}[z]}{\overline{D}[z]} = \frac{\Delta[z]}{\overline{D}[z]}
$$
Then,
$$
\begin{align}
\text{zeros}(V[z]) = \text{roots}(\Delta[z]) = \text{closed loop poles} \quad \Longrightarrow \quad  Z = \text{\# of stable CL poles} \\[2ex]
\text{poles}(V[z]) = \text{roots}(\overline{D}[z]) = \text{open loop poles}\quad \Longrightarrow \quad P = \text{\# of stable OL poles}
\end{align}
$$
by the argument principle.

## Nyquist Stability Theorem

> [!theorem] Nyquist Stability Theorem
> Given
> $$
> N = Z-P
> $$
> - $N$ is the number of encirclements of $-1$ by $L[\Gamma]$, where $\Gamma$ is the unit circle (traversed in the positive direction)
> - $Z$ is the number of stable CL poles
> - $P$ is the number of stable OL poles
> $$
> L[z] = G[z]D[z]
> $$
> The plot of $L[\Gamma]$ is called the Nyquist plot.


![[Nyquist Stability-1765683782753.webp]]


> [!theorem] Corollary
> The feedback system is closed-loop stable if and only if $N$ = number of unstable open-loop poles.
> 

Proof sketch – We desire CL stability, therefore:
$$
\begin{align}
\text{\# of stable CL poles}  & = \text{\# of CL poles} \\
 & = \text{\# of OL poles} \\
& = \text{\# of stable OL poles} + \text{\# of unstable OL poles}
\end{align}
$$
Then:
$$
\begin{align}
 & \underbrace{ \text{\# of stable CL poles} }_{ Z } - \underbrace{ \text{\# of stable OL poles} }_{ P } \\
 & = \text{\# of unstable OL poles}
\end{align}
$$
Therefore $N$ is the number of unstable OL poles – the unstable poles of $L[z]= G[z]D[z]$.

This gives us a visual method for checking the closed-loop stability of a system, instead of using a [[Jury Test]]; furthermore, it lets us determine the range of some parameter ($K$) for which we have closed-loop stability (see [[Stable Gain Determination from Nyquist Plots]])