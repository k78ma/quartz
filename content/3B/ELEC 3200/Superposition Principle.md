---
title: Superposition Principle
tags:
  - elec3200
date: 2025-03-08
aliases:
  - superposition principle
---
Assume that a [[Linear Time-invariant Systems|linear system]] has zero initial condition. If input $u_{1}(t)$ produces output $y_{1}(t)$ and input $u_{2}(t)$ produces output $y_{2}(t)$, then input $\alpha_{1}u_{1}(t)+\alpha_{2}u_{2}(t)$ produces output $\alpha_{1}y_{1}(t)+\alpha_{2}y_{2}(t)$ for all $\alpha_{1}, \alpha_{2} \in \mathbb{R}$.

## Proof
With zero initial condition, input $u_{1}(t)$ produces output $y_{1}(t)$ and input $u_{2}(t)$ produces output $y_{2}(t)$, then there are $\mathbf{x}_{1}(t)$ and $\mathbf{x}_{2}(t)$ with $\mathbf{x_{1}}(0)=0$ and $\mathbf{x}_{2}(0)=0$ satisfying
$$
\begin{align}
\dot{\mathbf{x}}_{1}(t) & =\mathbf{A}(t)\mathbf{x}_{1}(t)+\mathbf{b}(t)u_{1}(t) \\
y_{1}(t) & =\mathbf{c}(t)x_{1}(t)+d(t)u_{1}(t)
\end{align}
$$
and
$$
\begin{align}
\dot{\mathbf{x}}_{2}(t) & =\mathbf{A}(t)\mathbf{x}_{2}(t)+\mathbf{b}(t)u_{2}(t) \\
y_{2}(t) & =\mathbf{c}(t)x_{2}(t)+d(t)u_{2}(t)
\end{align}
$$
If we add the two state equations and two output equations, and define $u(t)=\alpha_{1}u_{1}(t)+\alpha_{2}u_{2}(t)$, $\mathbf{x}(t)=\alpha_{1}\mathbf{x}_{1}(t)+\alpha_{2}\mathbf{x}_{2}(t)$, and $y(t)=\alpha_{1}y_{1}(t)+\alpha_{2}y_{2}(t)$, then we obtain $\mathbf{x}(0)=0$ and
$$
\begin{align}
\dot{\mathbf{x}}(t)=\mathbf{A}(t)\mathbf{x}(t)+\mathbf{b}(t)u(t) \\
y(t)=y\mathbf{c}(t)\mathbf{x}(t)+d(t)u(t)
\end{align}
$$
This implies that $y(t)$ is the output of the system with zero initial condition and input $u(t)$.
