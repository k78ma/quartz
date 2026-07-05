---
title: Impulse Response
tags:
  - elec3200
date: 2025-04-01
aliases:
  - impulse response
---
## Summary
Let $P(s)$/$G[z]$ be a real, rational, proper transfer function.

Then, $p(t)=L^{-1}(P(s))$ or $g[k]=Z^{-1}(G[z])$ is the **impulse response** of $P(s)$/$G[z]$, where we are using the [[Laplace Transform#Inverse Laplace Transform|Inverse Laplace Transform]] or the [[Z-Transform#Inverse Z-Transform|Inverse Z-Transform]].

For a system $Y(s) = P(s)U(s)$, we can find the time-domain output $y(t)$ with the impulse response as a convolution:
$$
y(t) = (p \ast u)(t) = \int_{0}^{t} p(t-\tau) u(\tau) \, d\tau 
$$
Alternatively, for a discrete system $Y[z]=G[z]U[z]$:
$$
y[k] = (g \ast u)[k] = \sum_{n=0}^{k}g[k-n]u[k]
$$
## Impulse Input View
For an [[Linear Time-invariant Systems|LTI system]]:
$$
\begin{align}
\dot{x} & =Ax+Bu \\
y & =Cx
\end{align}
$$
where:
- $x(t)$ is the state at time $t$
- $u(t)$ is the input at time $t$
- $y(t)$ is the output at time $t$

Consider the input
$$
u(t)=\delta(t-\tau)
$$
which is an unit impulse applied at $t=\tau$.

Given that the system is LTI and has zero input condition $x(0)=0$, and we have
$$
y(t)=h(t-\tau)
$$
then $h(t)$ is the **impulse response** of this system.

## Using impulse response with sifting
If we know $h$, how can we find the system's response to other arbitrary inputs?

Recall the *sifting property* of the $\delta$-function: for any function $f$ which is "well-behaved" at $t=\tau$,
$$
\int_{-\infty}^{\infty} f(t)\delta(t-\tau) \, dt=f(\tau) 
$$
Any reasonably regular function can be represented as an integral of impulses.

Then, by the sifting property we can write a general input $u(t)$ as
$$
u(t)=\int_{-\infty}^{\infty} u(\tau)\delta(t-\tau) \, d\tau 
$$
Then, with the superposition principle, the response of a linear system to a sum (or integral) of inputs is the sum (or integral) of the individual responses to these inputs:
$$
u(t)=\int_{-\infty}^{\infty} u(\tau)\delta(t-\tau) \, d\tau \quad \longrightarrow \quad y(t)=\int_{-\infty}^{\infty} u(\tau)\underbrace{ h(t-\tau) }_{ \text{response to } \delta(t-\tau) } \, d\tau  
$$
where $h(t-\tau)$ is the response to $\delta(t-\tau)$. ==Thus, the integral that defines $y(t)$ is a convolution of $u$ and $h$:==
$$
\begin{align}
y(t) &  =u(t) \ast  h(t) \\[2ex]
     & =h(t) \ast u(t) \\[2ex]
     & =\int_{-\infty}^{\infty} u(\tau)h(t-\tau) \, dt 
\end{align}
$$
This is even better in [[Laplace Transform]] form:
$$
Y(s)=H(s)U(s)
$$
where
$$
H(s)=\int_{-\infty}^{\infty} h(\tau)e^{-s \tau} \, d\tau 
$$

## Transfer Function View
Since the [[Transfer Function|transfer function]] $G(s)$ of an LTI system is the ratio of the output Laplace transform $Y(s)$ and the input Laplace transform $U(s)$ such that $G(s)=\frac{Y(s)}{U(s)}$, if we let
$$
U(s)=1 \quad \text{i.e.,} \quad u(t)=\delta(t)
$$
then
$$
Y(s)=G(s)
$$
or
$$
y(t)=\mathcal{L}^{-1}[G(s)]=g(t)
$$
Hence, $g(t)$ is the impulse response of the system.