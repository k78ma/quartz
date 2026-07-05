---
title: Numerical Integration for Control Systems
tags:
  - mte484
date: 2025-10-29
aliases:
  - numerical integration for control systems
  - left-side rule
  - right-side rule
  - trapezoid rule
---
Starting with a system in continuous time:
$$
\begin{align}
\dot{x} = f(x,u) \\
y = g(x,u)
\end{align}
$$
In LTI systems, we could write an explicit solution for a given $t$; however, we cannot do this for the vast majority of non-linear systems.

Thus, we aim to simulate the system:
- Goal: Determine the trajectory $x(t)$ for the system for some initial condition
- Challenge: Computers operate in discrete time

To solve, this we **approximate continuous-time system with a related discrete time system**. 

First, we fix $T>0$ and assume $t=nT$ for some positive integer $n$. 
$$
\begin{align}
x(t)  & = \int_{0}^{t} f(x(s), u(s)) \, ds \\[2ex] 
 & = \int_{0}^{T} f(x(s), u(s)) \, ds + \int_{T}^{2T} f(x(s), u(s)) \, dx + \dots + \int_{(n-1)T}^{nT} f(x(s), u(s))  \, ds   \\[2ex]
 & = \sum_{k=0}^{n-1} \underbrace{ \int_{kT}^{(k+1)T} f(x(s), u(s)) }_{ =: \Delta[k+1] }  \, ds \\[2ex] 
 &  = \sum_{k=0}^{n-1} \Delta[k+1]
\end{align}
$$
This procedure involves summing the area under the curve in the figure below:

![[Numerical Integration for Control Systems-1764988156705.webp|335x295]]

Say we know the value of $x$ at time $t=nT$, then
$$
x((k+1)T) = x(kT) + \Delta[k+1]
$$
This is still exact because $\Delta[k+1]$ is defined with the integral of a continuous-time function, but this is intractable to solve. 

![[Numerical Integration for Control Systems-1764988223982.webp]]

Thus, the idea is then to approximate $\Delta[k+1]$ using a finite number of discrete points.

### Left-side rule - Euler Integration

$$
\Delta [k+1] \approx \int_{kT}^{(k+1)T} f(x(kT), u(kT)) \, ds = Tf(x(kT), u(kT)) 
$$

![[Numerical Integration for Control Systems-1764988322389.webp]]

This is essentially Euler integration.
### Right side rule - Backwards Euler integration
$$
\Delta[k+1] \approx \int_{kT}^{(k+1)T} f(x(kT), u(kT)) \, ds = Tf(x(k+1)T, u(k+1)T) 
$$

![[Numerical Integration for Control Systems-1764988372377.webp]]

This is backward Euler integration.
### Trapezoid Rule
$$
\Delta [k+1] = \frac{T}{2}[f(x(kT), u(kT))+f(x((k+1)T), u((k+1)T))]
$$

![[Numerical Integration for Control Systems-1764988395403.webp]]