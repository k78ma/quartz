---
title: Control Design with IOP and SPA
tags:
  - mte484
date: 2025-10-10
aliases:
  - control design with IOP and SPA
---
We have a vectorized form [[IOP with SPA|IOP with SPA equation]]:
$$
A\begin{bmatrix}
w \\
x \\
\hat{x}
\end{bmatrix}=b
$$
We also have vectorized forms of the [[Specs for Control Design|specs for control design]]:

- Steady-state error $e_{ss} = 0$ (or could be something like $e_{ss} \leq C$):
$$
1+ \text{Steady state} \begin{bmatrix}
x \\
\hat{x}
\end{bmatrix} = 0
$$
- Control effort $u[k] \leq C_{1}$:
$$
\text{max}(\text{step\_ru}\ast  w) \leq C_{1}
$$
- Overshoot $\%OS \leq C_{2}$:
$$
\text{max}\left(\text{step\_{ry}}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \leq (1+C_{2})\left(-\text{steady\_{state}} \begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) 
$$
- Settling time (within 2%) $T_{s} \leq C_{3}$ with $\hat{j}=\text{min}\{ j\, : \,jT \geq C_{3} \}$:
$$
\begin{align}
\text{max}\left(\text{step\_ry}(\hat{j}:\text{end, :})\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \leq 1.02\left(-\text{steady state}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \\[2ex] 
\text{min}\left(\text{step\_ry}(\hat{j}:\text{end, :})\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \geq 0.98\left(-\text{steady state}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right)
\end{align}
$$

We can turn this into a numerical optimization problem.

