---
title: Feedback System for Stabilization
tags:
  - elec3200
date: 2025-04-01
aliases:
  - feedback system for stabilization
---
Stabilization problem: Given plant $P$, design controller $C$ so that the system has good stability.

![[Feedback System for Stabilization-20250401132224038.png|440]]

The transfer function from $w_{1}$ to $y_{1}$ is $\frac{P(s)C(s)}{1+P(s)C(s)}$. In order for the transfer function to be meaningful, we need $1+P(s)C(s) \neq 0$. This is a **well-posed** system. Otherwise, it is said to be **ill posed**.

We can write all the transfer functions from one of the external signals $w_{1}, w_{2}$ to one of the internal signals $y_{1}, y_{2}$ as
$$
\begin{bmatrix}
U_{1}(s) \\
U_{2}(s) \\
Y_{1}(s) \\
Y_{2}(s)
\end{bmatrix} = \begin{bmatrix}
\frac{1}{1+P(s)C(s)} & \frac{-C(s)}{1+P(s)C(s)} \\[2ex]
\frac{P(s)}{1+P(s)C(s)} & \frac{1}{1+P(s)C(s)} \\[2ex]
\frac{P(s)C(s)}{1+P(s)C(s)} & \frac{C(s)}{1+P(s)C(s)} \\[2ex]
\frac{P(s)}{1+P(s)C(s)} & \frac{-P(s)C(s)}{1+P(s)C(s)}
\end{bmatrix} \begin{bmatrix}
W_{1}(s) \\
W_{2}(s)
\end{bmatrix}
$$
where each element of the big matrix is the transfer function from the corresponding external signal to the corresponding internal signal. 

We can note that there area really only four different transfer functions:
$$
\frac{1}{1+P(s)C(s)}, \,\, \frac{P(s)}{1+P(s)C(s)},\,\, \frac{C(s)}{1+P(s)C(s)}, \,\,\frac{P(s)C(s)}{1+P(s)C(s)}
$$
These are called the **gang of four**. 

Among them, we further define the **sensitivity function** $S(s)$ and **complementary sensitivity function** $T(s)$ to be
$$
S(s)=\frac{1}{1+P(s)C(s)} \quad \text{and} \quad T(s)=\frac{P(s)C(s)}{1+P(s)C(s)}
$$
such that
$$
S(s)+T(s)=1
$$
Note that we can also write the gang of four as
$$
S(s), C(s)S(s), P(s)S(S), T(s)
$$

