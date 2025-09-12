---
title: Stability Criterion
tags:
  - elec3200
date: 2025-04-06
aliases:
  - stability criterion
---

> [!definition] Stability
> A real, rational, transfer function $P(s)$ or $G[z]$ is **stable** if all all poles of $P(s)$ or $G[z]$ lie in $\mathbb{C}^{-}$ or $\mathbb{D}$.

See:
- [[Continuous-Time Stability]]
- [[Discrete-Time Stability]]

## ELEC 3200 Notes
- An LTI system with impulse response function $g(t)$ is stable if and only if
$$
\int_{0}^{\infty} | g(t) | \, dt < \infty 
$$

- A signal is said to be absolutely integrable over an integral if the integral of the absolute value of the signal over the integral is infinite. A linear system is stable if its impulse response is absolutely integrable over $[0,\infty)$.

- A system with transfer function $G(s)$ is stable if and only if $G(s)$ is proper (degree of numerator < degree of denominator) and all poles of $G(s)$ have negative real parts.

### Example
Determine the stability of $G(s)=\frac{1}{s+\gamma}$ by checking the sign of the real part of the pole.

The pole of $G(s)$ is $s_{1}=-\gamma$, and only has a real part.
- If $\gamma \leq 0$, then $s_{1}\geq 0$, hence the system is unstable.
- If $\gamma>0$, then $s_{1}<0$. Stable!