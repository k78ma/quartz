---
title: Discrete-Time Stability
tags:
  - mte484
date: 2025-09-10
aliases: discrete-time stability
---
An example discrete system:
$$
\begin{align}
x[k+1] & = \lambda x[k], \quad  \lambda \in  \mathbb{C} \\
x^{+}  & = \lambda x
\end{align}
$$
We can look at the behavior for various $\lambda$:

![[Discrete-Time Stability-20250910141446578.png]]

This behaves quite differently from a continuous-time system, motivating a different definition.

Looking at our system again:
$$
\begin{align}
x^{+}  & = \lambda x \\
x[k]  & = \lambda x[k-1] = \lambda(\lambda x[k-2]) = \lambda^{2}x[k-2]=\dots= \lambda^{k}x[0] \\
x[k]  & = \lambda^{k}x[0] \\
| x[k] | & = | \lambda  |^{k} | x[0] |
\end{align}
$$
- Case 1: $| \lambda |<1$ – stable
- Case 2: $| \lambda |>1$ – unstable
- Case 3: $| \lambda |=1$ – unstable

Thus, the region of stability for the discrete case is the **open unit disk** ($\mathcal{D}$):

![[Discrete-Time Stability-20250910141951789.png|376]]

