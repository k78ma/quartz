---
title: Unit step
tags:
  - syde252
date: 2023-09-23
---
A unit step function is defined as:
$$
u(t)=
\begin{cases}
1  &  t \geq 0 \\
0 & t < 0
\end{cases}
$$
If we want any signal to start at $t=0$, we can just multiply it by the unit step function.

We can also describe rectangular pulses using delayed unit step functions. For example:
$$
x(t)=u(t-2)-u(t-4)
$$
![[Pasted image 20230923133834.png]]
The left side shows the resulting rectangular pulse, while the right side shows the two step functions separately to illustrate the operation at hand.