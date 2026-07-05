---
title: "Second-Order System Approximation"
tags: 
date: "2025-05-02"
aliases: "second-order system approximation"
---
If the poles of a system are [[Dominant Poles and Zeros|dominated]] by a pair of complex poles, then the system can be approximated by a second-order system.

Provided we are provided with specs of settling time and percent overshoot (PO), we can determine the system by working with the formulas below.

- Settling time:
$$
t_{s}=\frac{4}{\zeta \omega_{n}}
$$

- Percent overshoot:
$$
\text{PO}=e^{-\zeta \pi / \sqrt{ 1-\zeta^{2} }}\times 100\%
$$

Design inequalities derived from these:
$$
\zeta \omega_{n}\geq \frac{4}{t_{s}}, \quad \zeta \geq \frac{-\ln(\text{PO})}{\sqrt{ \pi^{2}+((\ln(\text{PO}))^{2} }}
$$
These help place dominant poles in the $s$-plane to meet desired transient performance.

We can place the dominant poles in the desired regions, and place the less dominant poles far away.

![[Low-Order Approximations of High-Order Systems-20250502141327100.png|343]]
