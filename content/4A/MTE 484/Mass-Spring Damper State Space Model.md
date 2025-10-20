---
title: Mass-Spring Damper State Space Model
tags:
  - mte484
date: 2025-10-20
aliases: mass-spring damper state space model
---
Newton's 2nd Law gives:
$$
M \ddot{y} = u-ky - b\dot{y}
$$
Choosing states:
$$
\begin{align}
x_{1} = y \\
x_{2} = \dot{y}
\end{align}
$$
Then, we have:
$$
\begin{align}
\dot{x_{1}} &  = \dot{y} = x_{2} \\[2ex]
x_{2}  & = \ddot{y} = \frac{1}{M}(u-kx_{1}-bx_{2})
\end{align}
$$
Then:
$$
\dot{x} = \begin{bmatrix}
0  & 1 \\
-\frac{k}{M}  & -\frac{b}{M}
\end{bmatrix}x + \begin{bmatrix}
0 \\
\frac{1}{M}
\end{bmatrix}u
$$
and $y=x_{1}$ gives us
$$
y=\begin{bmatrix}
1 & 0
\end{bmatrix}x + 0u
$$
## Extra state
What if we add an extra (unnecessary) state $x_{3}$? Let us have:
$$
\dot{x}_{3} = 2x_{3}
$$
Then, we would have:
$$
\dot{x} = \begin{bmatrix}
0 & 1 & 0 \\
-\frac{k}{M} & -\frac{b}{M} & 0 \\
0 & 0 & 2
\end{bmatrix}x + \begin{bmatrix}
0 \\
\frac{1}{M} \\
0
\end{bmatrix}u
$$
and
$$
y = \begin{bmatrix}
1 & 0 & 0
\end{bmatrix}x + 0u
$$
Note that the dimension (number of states) of a state space model is not unique either!