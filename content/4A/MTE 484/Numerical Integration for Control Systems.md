---
title: Numerical Integration for Control Systems
tags:
  - mte484
date: 2025-10-29
aliases: numerical integration for control systems
---
Starting with a system in continuous time:
$$
\begin{align}
\dot{x} = f(x,u) \\
y = g(x,u)
\end{align}
$$
- Goal: Determine the trajectory $x(t)$ for the system
- Challenge: Computers operate in discrete time

Solution: Approximate continuous-time system with a related discrete time system:
$$
\begin{align}
x(t)  & = \int_{0}^{f} f(x(s), u(s)) \, ds = \int_{0}^{T} f(x(s), u(s)) \, ds + \int_{T}^{2T} f(x(s), u(s)) \, dx + \dots + \int_{(n-1)T}^{nT} f(x(s), u(s))  \, ds   \\[2ex]
 & = \sum_{k=0}^{n-1} \underbrace{ \int_{kT}^{(k+1)T} f(x(s), u(s)) }_{ =: \Delta[k+1] }  \, ds = \sum_{k=0}^{n-1} \Delta[k+1]
\end{align}
$$
