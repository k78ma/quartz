---
title: Proportional-Derivative Control
tags:
  - elec3200
date: 2025-04-27
aliases:
  - proportional-derivative control
  - PD control
---
We saw that simply using [[Proportional Feedback|proportional feedback]] affected the coefficient of the constant $s ^{0}$ term, and using [[Derivative Feedback|derivative feedback]] affected the coefficient of $s$. What if we combine them?

![[Proportional-Derivative Control-20250427213652833.png|583]]

The transfer function is:
$$
\frac{Y}{R}=\frac{\frac{K_{P}+K_{D}s}{s^{2}-1}}{1+\frac{K_{P}+K_{D}s}{s^{2}-1}}= \frac{K_{P}+K_{D}s}{s^{2}+K_{D}s+K_{P}-1}
$$
Now, if we set $K_{D}>0$ and $K_{P}>1$, then the transfer function will be stable. Furthermore, by choosing $K_{P}$ and $K_{D}$, we can arbitrarily assign coefficients of the denominator, therefore the poles of the transfer function. Thus, PD control gives us **arbitrary pole placement.**

Also note that the addition of the P-gain moves the zero (solution to numerator term):
$$
K_{D}s+K_{P}=0
$$
where the LHP zero at $-\frac{K_{P}}{K_{D}}$.

But what's missing?
$$
\begin{align}
\text{DC gain} & =\frac{Y}{R}\Bigg|_{s=0} \\[2ex]
 & =\frac{K_{P}}{K_{P}-1} \\[2ex]
 & \neq 1
\end{align}
$$
Thus, with PD control, we can't have perfect tracking of constant reference.

