---
title: Periodic vs. Aperiodic Signals
tags:
  - syde252
date: 2023-09-14
---
**Periodic:** A signal is periodic if for some positive constant $T_{0}$
$$
x(t)=x(t+T_{0}) \quad \text{for all } t
$$
The smallest value of $T_{0}$ that satisfies this is the *fundamental period* of $x(t)$. A periodic signal remains unchanged when time-shifted by one period; thus, they must start at $-\infty$ and continue forever.

We also have:
$$
\int_{a}^{a+T_{0}} x(t) \, dt = \int_{b}^{b+T_{0}} x(t) \, dt
$$
such that the area under $x(t)$ over any duration $T_{0}$ is constant.

A signal is aperiodic if it is not periodic.