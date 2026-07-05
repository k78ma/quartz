---
title: Stable and Unstable Systems
tags:
  - syde252
date: 2023-10-16
---
A system is called "bounded input/bounded output" (BIBO) stable if and only if for every bounded input, the output is bounded.

Continuous time: 
$$
| x(t) | \leq M_{x} < \infty \quad \to \quad | y(t) | \leq M_{y} < \infty
$$
Discrete time:
$$
| x[n] | \leq M_{x} < \infty \quad \to \quad | y[n] | \leq M_{y} < \infty
$$

where $M_{x}, M_{y}$ are positive, finite values.

#### Stable Example
Moving average system: 
$$
y[n]=\frac{1}{3}(x[n]+x[n-1]+x[n-2])
$$
Assume bounded input
$$
\begin{align}
| x[n] | &\leq M_{x} < \infty \quad \text{for all } n \\[3ex]
| y[n] | &= \frac{1}{3} | x[n] + x[n-1]+x[n-2] | \\[3ex]
| y[n] | & \leq \frac{1}{3} ( x[n] + x[n-1]+x[n-2] ) \\[3ex]
| y[n] | & \leq \frac{1}{3} ( M_{x} + M_{x} + M_{x} ) \\[3ex]
| y(n) | & \leq \infty \\[3ex]
&\therefore \text{BIBO stable}
\end{align}
$$
#### Unstable Example
System:
$$
\begin{align}
y(t) = t^{2}x(t) \\
x(t) = u(t) \\[3ex]
\end{align}
$$
Thus

$$
\begin{align}
| y(t) | = | t^{2}x(t) | \\
\text{as } t\to \infty \\
|y(t)| \to \infty \\[3ex]
\therefore \text{BIBO unstable}
\end{align}
$$
