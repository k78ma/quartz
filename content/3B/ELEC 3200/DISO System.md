---
title: DISO System
tags:
  - elec3200
date: 2025-04-01
aliases:
  - DISO system
---
A DISO system is one with two inputs and one output.

![[DISO System-20250401130617681.png|312]]

It has the input/output relation:
$$
Y(s)=\begin{bmatrix}
G_{1}(s) & G_{2}(s)
\end{bmatrix}\begin{bmatrix}
U_{1}(s) \\
U_{2}(s)
\end{bmatrix}=G_{1}(s)U_{1}(s)+G_{2}(s)U_{2}(s)
$$

## Misleading View
Note that the two blocks below are algebraically equivalent, but it's better to view them as a single inseparable system.

![[DISO System-20250401130758724.png|581]]

$$
\begin{align}
G(s) & =\frac{\mathbf{b}(s)}{a(s)}= \frac{1}{a(s)}\begin{bmatrix}
b_{1}(s) & b_{2}(s)
\end{bmatrix} \\[2ex]
     & = \frac{\begin{bmatrix}
b_{10}s ^{n}+\dots+b_{1n} & b_{20} s ^{n}+\dots+b_{2n}
\end{bmatrix}}{a_{0}s ^{n}+a_{1}s ^{n-1}+\dots+a_{n}}, \quad a\neq 0
\end{align}
$$

