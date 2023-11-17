---
title: 2nd-order ODEs
tags:
  - mte204
date: 2023-11-16
aliases:
---
One-step methods can be used to solve higher order equations. This is similar to the substitution method for analytical ODE solutions covered in MTE 202.

Let's say we have a 2nd order IVP:
$$
\begin{align}
\frac{ d^{2}y }{ dx^{2} } + x\frac{ dy }{ dx } +y = e^{-x} \\[3ex] 
y(0)=1, \, \, \, \frac{ dy(0) }{ dx } =0
\end{align}
$$
Then, we let $dy / dx = v$ and substitute, so that we have:
$$
\frac{dv}{dx} +xv + y = e^{-x}
$$
And the IC becomes:
$$
y(0)=1, \, \, \, v(0)=0
$$
We can solve this as a first-order problem $h=0.5$:
$$
\begin{align}
y_{i+1}  & = y_{i} +v_{i}h \\ 
v_{i+1}  & = v_{i} + [e^{-x_{i}}-x_{i}v_{i}-y_{i}]h
\end{align}
$$
Start at $i=0, x_{0}=0, y_{0}=1, v_{0}=0$:
$$
\begin{align}
y_{1}  & = 1+0.5(0)=1 \\
v_{1}  & = 0+0.5(e^{0}-0-1) = 0 \\
\end{align}
$$
