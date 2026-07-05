---
title: Steady-State Response with FVT
tags:
  - mte484
date: 2025-09-24
aliases: steady-state response with fvt
---
Using the [[Final Value Theorem]], we can do some interesting proofs and find the steady-state response of a system. 

Below, we show the unit step response:

*Proof:*
$$
Y[z] = G[z]U[z] = G[z] \frac{z}{z-1}
$$
where $u[k] = \mathbb{1}[k]$.

Then, we have:
$$
\begin{align}
\lim_{ y \to \infty } y[k]  & = \lim_{ z \to 1 } (z-1)Y[z] \\[2ex]
     & = \lim_{ z \to 1 } (\cancel{ z-1) }G[z] \frac{z}{\cancel{ z-1 }} \\[2ex] 
     & = \lim_{ z \to 1 } zG[z] \\[2ex] 
     & = G[1]
\end{align}
$$
This can be applied to calculate the steady-state error and in turn design our controller to meet some steady-state error requirements:
$$
e_{ss} = T_{re}[1]
$$
where
$$
T_{re}[z] = \frac{1}{1+G[z]D[z]} \quad \Longrightarrow \quad T_{re}[1]=\frac{1}{1+G[1]D[1]} = e_{ss}
$$
So we can try and design our controller based on the value of $D[1]$.
- Note: It's harder to choose $D[z]$ such that $T_{ry}=\frac{GD}{1+GD}$ satisfies desired transient specs.

