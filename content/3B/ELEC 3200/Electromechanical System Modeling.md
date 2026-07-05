---
title: Electromechanical System Modeling
tags:
  - elec3200
date: 2025-03-10
aliases:
  - electromechanical system modeling
---

We can model an armature-controlled direct current (DC) motor with a load.

![[Electromechanical System Modeling.png|581]]

- **Input**: Armature voltage $v_{a}$
- **Output**: Angular position of the motor shaft $\theta(t)$ for position control, or angular velocity of the motor shaft $\omega(t)$ for speed control.
- **Intermediate variables:** Armature current $i_{a}(t)$, angular position $\theta(t)$ or angular velocity $\omega(t)$

KVL applied to the armature circuit gives:
$$
R_{a}i_{a}(t)+L_{a} \frac{di_{a}}{dt}+K \frac{d\theta(t)}{dt}=v_{a}(t)
$$
Rotational version of Newton's second law applied to motor shaft:
$$
J \frac{d^{2}\theta(t)}{dt^{2}}=Ki_{a}(t)-K_{f} \frac{d \theta(t)}{dt}
$$

## Position Control Case
We choose the state variables, input and output variables
$$
\begin{align}
x_{1}(t) & =i_{a}(t) \\
x_{2}(t) & =\theta(t) \\
x_{3}(t) & =\omega(t) \\
u(t) & =v_{a}(t) \\
y(t) & =\theta(t)
\end{align}
$$
State-space model:
$$
\begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2} \\
\dot{x}_{3}
\end{bmatrix}=\begin{bmatrix}
-\frac{R_{a}}{L_{a}} & 0 & -\frac{K}{L_{a}} \\
0 & 0 & 1 \\
\frac{K}{J} & 0 & -\frac{K_{f}}{J}
\end{bmatrix}\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
+\begin{bmatrix}
\frac{1}{L_{a}} \\
0 \\
0
\end{bmatrix}u(t)
$$
and
$$
y=\begin{bmatrix}
0 & 1 & 0
\end{bmatrix}\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
$$

## Speed Control Case
If we replace $\frac{d\theta(t)}{dt}$ with $\omega(t)$, we get the differential equation of a DC motor system in the speed control case:
$$
\begin{align}
R_{a}i_{a}(t)+L_{a} \frac{di_{a}(t)}{dt}+K\omega(t)=v_{a}(t) \\
J \frac{d\omega}{dt}=Ki_{a}(t)-K_{f}\omega(t)
\end{align}
$$
State-space model:
$$
\begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2}
\end{bmatrix}=\begin{bmatrix}
-\frac{R_{a}}{L_{a}}  & - \frac{K}{L_{a}} \\
\frac{K}{J} & -\frac{K_{f}}{J}
\end{bmatrix} \begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}+\begin{bmatrix}
\frac{1}{L_{a}} \\
0
\end{bmatrix}u(t)
$$
and
$$
y(t)=\begin{bmatrix}
0 & 1
\end{bmatrix}\begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}
$$
