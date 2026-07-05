---
title: State-Variable Circuit Model
tags:
  - syde351
date: 2024-07-18
aliases:
  - state-variable circuit model
---
For circuits, we can derive a [[State-Variable Models|state-variable model]] by:
1. Find storage elements (inductances $L$ and capacitances $C$)
2. Consider energy stored as $\frac{1}{2}Cv^{2}$ and $\frac{1}{2}Lv^{2}$

## RLC Example 1
Consider the series RLC circuit shown below.

![[State-Variable Circuit Model.png]]

In this circuit the energy is stored in the capacitor and in the inductor. 
- The energy stored in the capacitor is $Cv_{1}^{2} / 2$
- The energy stored in the inductor is $Li^{2} / 2$. 

Thus we choose $v_{1}$ and $i$ to be our state variables.

KVL gives us:
$$
\begin{align}
v_{s} & =Ri+L\, \frac{di}{dt}+v_{1} \\[2ex]
L\frac{di}{dt} & =v_{s}-R_{i}-v_{1} \\[2ex] 
\frac{di}{dt} & =-\frac{R}{L}i-\frac{1}{L}v_{1}+\frac{1}{L}v_{s}
\end{align}
$$

Since $v_{1}$ is the voltage across a capacitor, we have
$$
\begin{align}
v_{1} & =\frac{1}{C}\int i \, dt  \\[2ex]
\frac{dv_{1}}{dt} & =\frac{1}{C}i
\end{align}
$$
Thus, the state-variable model in matrix form is:
$$
\begin{bmatrix}
\frac{di}{dt}\\[2ex] 
\frac{dv_{c}}{dt}
\end{bmatrix}=\begin{bmatrix}
-\frac{R}{L} & -\frac{1}{L}\\[2ex]
\frac{1}{C} & 0
\end{bmatrix}\begin{bmatrix}
i\\
v_{c}
\end{bmatrix}+\begin{bmatrix}
\frac{1}{L} \\[2ex] 
0
\end{bmatrix}\begin{bmatrix}
v_{s}
\end{bmatrix}
$$
