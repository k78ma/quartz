---
title: Linear Time-invariant Systems
tags:
  - ml
  - syde252
date: 2024-02-08
aliases:
  - LTI system
  - LTI systems
---
## Linearity
A system is linear if it can be defined by linear differential equations. In particulars, if the functions $\mathbf{f}$ and $g$ in its [[State-Variable Models|state-space model]] are linear functions of the state variables $\mathbf{x}(t)$ and input $u(t)$.

## Time-Invariance
A system is said time-invariant if it can be by differential equations with constant coefficients. In particular, if the functions $\mathbf{f}$ and $g$ in its state space model do not depend on the time $t$ explicitly.
- See some examples in [[Time-invariant and time varying systems]]

Assume that a time-invariant system has zero initial conditions, and zero input generates zero output. If input $u(t)$ produces output $y(t)$, then input $u(t-\tau)$ for all $\tau \geq 0$.

## Form
A LTI system has the following form of state space model:
$$
\begin{align}
\dot{\mathbf{x}} & =\mathbf{A}\mathbf{x}(t)+\mathbf{b}u(t) \\
y(t) & =\mathbf{c}\mathbf{x}(t)+du(t)
\end{align}
$$
where $\mathbf{A}\in \mathbb{R}^{n\times n}$, $\mathbf{b}\in \mathbb{R}^{n\times 1}$, $c \in \mathbb{R}^{1\times n}$, and $d \in \mathbb{R}$ are constant matrices.

## State Machine Interpretation
Linear time-invariant systems can be seen as a [[state machine]] where $S = \mathbb{R}^{m}, X = \mathbb{R}^{1}, Y = \mathbb{R}^{n}$, and $f$ and $g$ are linear functions of their input. In discrete time, they can be described as a linear difference equation, like
$$
y[t]=3y[t-1]+6y[t-2]+5x[t]+3x[t-2]
$$
where $y[t]$ is $y$ at time $t$. LTI systems can be implemented using state to store relevant previous input and output information.

[[Recurrent Neural Networks]] are a lot like a non-linear version of LTIs.