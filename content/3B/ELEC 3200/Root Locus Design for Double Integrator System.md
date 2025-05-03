---
title: Root Locus Design for Double Integrator System
tags:
  - elec3200
date: 2025-05-03
aliases:
  - root locus design for double integrator system
---
Consider a double integrator with a $P$-gain:

![[Root Locus Design for Double Integrator with P-Gain-20250503225510528.png|502]]

The closed-loop transfer function is:
$$
\frac{\frac{K}{s^{2}}}{1+\frac{K}{s^{2}}}=\frac{K}{s^{2}+K}
$$
The characteristic equation is:
$$
s^{2}+K=0
$$
which means the closed poles are at $s=\pm \sqrt{ K }j$. 

This would result in:

![[Root Locus Design for Double Integrator with P-Gain-20250503225652044.png|259]]

- This confirms what we already knew – $P$-gain alone does not deliver stability.


Now consider using a PD controller instead:

![[Root Locus Design for Double Integrator System-20250503225927421.png|429]]

Characteristic equation:
$$
\begin{align}
1+(K_{P}+K_{D}s)\cdot \frac{1}{s^{2}}=0 \\[2ex] 
s^{2}+K_{D}s+K_{P}=0
\end{align}
$$
We need to convert this into the Evans form of $1+KL(s)=0$:
$$
\begin{align}
1+(K_{P}+K_{D}s) \frac{1}{s^{2}}= 0 \\[2ex] 
1+K_{D}\cdot  \frac{s+K_{P} / K_{D}}{s^{2}} = 0
\end{align}
$$
which lets us have $K=K_{D}$ and $L(s)=\frac{s+K_{P} / K_{D}}{s^{2}}$. Assume that $K_{P} / K_{D}$ is fixed at 1.

Then, we have a characteristic equation of
$$
1+K \cdot  \frac{s+1}{s^{2}}=0
$$
Let's draw the root locus using the rules:

![[Root Locus Design for Double Integrator System-20250503230517692.png|621]]

What can we conclude from this root locus about stabilization?
- All closed-loop poles are in LHP (we already knew this from Routh, but now we can visualize)
- Nice damping, so we can meet reasonable specs.
