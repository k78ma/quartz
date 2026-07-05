---
title: RC Step Response
tags:
  - mte220
date: 2023-10-18
---
Charging or discharging a [[Capacitors|capacitor]] through a resistor.

![[RC Formulation.png|233]]

Basically, we have some voltage sitting on a capacitor and we close the switch at time $t=0$.
We have:
$$
\begin{align}
I_{C} &= -C \frac{dV(t)}{dt} \\[3ex] 
I_{R} &= \frac{V(t)}{R} 
\end{align}
$$
Since these currents are the same, we put them together:
$$
\begin{align}
-I_{C} &= I_{R} \\[3ex] 
\frac{V(t)}{R} &= -C \frac{dV(t)}{dt}
\end{align}
$$
The equation above is called a first order system, which means there are no oscillations and we will see exponential decay.

Solving for $V(t)$, we have:
$$
\begin{align}
-\frac{1}{RC} V(t) dt &= \frac{1}{V(t)}dV(t) \\[3ex] 
-\frac{1}{RC} \int_{0}^{t_{f}}  \, dt &= \int_{V(t=0)}^{V(t=t_{f})} \frac{1}{V(t)}dV(t) \,  \\
-\frac{t}{RC} &= \ln(V(t)) - \ln(V_{i}) \\[3ex] 
\end{align}
$$
So:
$$
\begin{align}
V(t) &= e^{\ln(V_{i})}e^{\frac{-t}{RC}}  \\
&= V_{i}e^{-\frac{t}{RC}}
\end{align}
$$
We define a time constant $\tau=RC$, such that the voltage discharge is:
$$
V(t) = V_{i}e^{-\frac{t}{\tau}}
$$
For charging we would have:
$$
V(t) = V_{i}(1-e^{-\frac{t}{\tau}})
$$