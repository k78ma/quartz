---
title: DC Gain
tags:
  - elec3200
date: 2025-04-01
aliases:
  - DC gain
---
The steady-state value of the **step response** is called the DC gain of the system:
$$
\text{DC gain}=y(\infty)=\lim_{ t \to \infty } y(t) 
$$
where $u(t)=1(t)$.

![[DC Gain-20250424165852285.png]]


By the [[Final Value Theorem]], we can compute DC gain with ease (when FVT holds). For example, for the unit step response where we have 
$$
\begin{align}
u(t) & =1(t) \\[2ex] 
U(s) & =\frac{1}{s} \\[2ex] 
Y(s) & = U(s)H(s)=\frac{H(s)}{s}
\end{align}
$$
If all poles of $sY(s)=H(s)$ are strictly stable, then by FVT
$$
y(\infty)=\lim_{ s \to 0 } H(s)
$$
### Example
Given the system transfer function
$$
H(s)=\frac{s^{2}+5s+3}{s^{3}+4s^{2}+2s+5}
$$
compute the DC gain of the system.

All the poles of $H(s)$ are strictly stable poles ([[Routh-Hurwitz Criterion]]), so
$$
y(\infty)=H(s)|_{s=0}=\frac{3}{5}
$$