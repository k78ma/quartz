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

Linear systems have two properties:
1. Homogeneity: Scalar multiplication works as we expect.
    - If we have a system that takes $x(t)$ as input and outputs $y(t)$, inputting $ax(t)$ will instead return $ay(t)$.
2. Additivity/[[Superposition Principle|superposition]]: Addition works as we expect it to.
    - If we have a system that has $x_{1}(t) \to \dots \to y_{1}(t)$ and $x_{2}(t) \to \dots \to y_{2}(t)$, passing in $x_{1}(t)+x_{2}(t)$ will result in $y_{1}(t)+y_{2}(t)$

## Time-Invariance
A system is said time-invariant if it can expressed be by differential equations with constant coefficients. In particular, if the functions $\mathbf{f}$ and $g$ in its state space model do not depend on the time $t$ explicitly.
- See some examples in [[Time-invariant and time varying systems]]

Assume that a time-invariant system has zero initial conditions, and zero input generates zero output. If input $u(t)$ produces output $y(t)$, then input $u(t-\tau)$ for all $\tau \geq 0$.

So if a system has $x(t)\to \dots \to y(t)$, but instead we input $x(t-t_{0})$, we will have
$$
x(t-t_{0}) \to \dots \to y(t,t_{0})
$$
If $y(t, t_{0})=y(t-t_{0})$, then the system is time invariant.

## Examples
### Example 1
Let's say we have $y(t)=2t^{2}x(t)$. Then, we have
$$
\begin{align}
y(t, t_{0}) & = 2t^{2}x(t-t_{0}) \\
y(t-t_{0}) & = 2(t-t_{0})^{2}x(t-t_{0})
\end{align}
$$
Since the two are not equal, the system is not time-invariant.

However, we have
$$
\begin{align}
ay(t) & =2t^{2}ax(t) \\
y_{1}(t) & =2t^{2}x_{1}(t) \\
y_{2}(t) & =2t^{2}x_{2}(t) \\
y_{1}(t)+y_{2}(t) & = 2t^{2}(x_{1}(t)+x_{2}(t))
\end{align}
$$
so this system is linear.
### Example 2
Let's say we have $y(t)=3e^{3x(t)}$. Then:
$$
\begin{align}
y(t,t_{0}) & = 3e^{3x(t-t_{0})} \\
y(t-t_{0}) & = 3e^{3x(t-t_{0})}
\end{align}
$$
Thus, this is time invariant.

However, we have
$$
3ae^{3x(t)} \neq 3e^{3ax(t)}
$$
Thus this system is not linear.

### Example 3
Let's say we have
$$
5t^{2} \frac{d^{2}y(t)}{dt^{2}}+4y(t) = 2x(t)
$$
Because of the $t^{2}$ term, this is time-varying.

### Example 4
Let's say we have
$$
y[n] + 5ny[n-1] = x[n-2]  +x[n]
$$
Because of the $n$ term, we know that this is not linear (similar to Example 1).

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