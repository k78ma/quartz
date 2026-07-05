---
title: Proportional-Integral-Derivative Control
tags:
  - elec3200
date: 2025-04-27
aliases:
  - proportional-integral-derivative control
  - PID control
  - PID controller
---
The PID controller is a classic controller where we combine [[Proportional Feedback|proportional feedback]] and [[Derivative Feedback|derivative feedback]] with an integral feedback term. This results in feedback of the form:

![[Proportional-Integral-Derivative Control-20250427214645147.png|604]]

We can write:
$$
U=\left( K_{P}+K_{D}s+\frac{K_{I}}{s} \right)E
$$
where $E=R-Y$ is the error between the reference input and the system output.

We have:
$$
\begin{align}
Y & =(U+W) \cdot \frac{1}{s^{2}-1} \\[2ex] 
(s^{2}-1)Y & =U+W \\[2ex] 
(s^{2}-1)Y & =\left(K_{P}+K_{D}s+\frac{K_{I}}{s}\right)(R-Y)+W \\[2ex] 
\left[ s^{2}-1+K_{P}+K_{D}s+\frac{K_{I}}{s} \right]Y & =\left( K_{P}+K_{D}s+\frac{K_{I}}{s}  \right)R+W \\[2ex] 
[s^{3}-s+K_{P}s+K_{D}s^{2}+K_{I}]Y & =(K_{P}s+K_{D}s^{2}+K_{I})R+Ws
\end{align}
$$

Thus, we can write the transfer function as:
$$
Y=\frac{K_{D}s^{2}+K_{P}s+K_{I}}{s^{3}+K_{D}s^{2}+(K_{P}-1)s+K_{I}}R+\frac{s}{s^{3}+K_{D}s^{2}+(K_{P}-1)+K_{I}}W
$$

## Stability
Based on the transfer function, recall that a necessary (but not sufficient) condition is that the coefficients of the polynomial need to be positive, which means we need:
- $K_{D}>0$
- $K_{P}>1$
- $K_{I}>0$

We also need $K_{D}(K_{P}-1)>K_{I}$ ([[Routh-Hurwitz Criterion]] for 3rd-order).

Note that we can assign coefficients arbitrarily by choosing $K_{P}, K_{I}, K_{D}$.

## Reference Tracking
The DC gain of the transfer function between the reference input $R$ and output $Y$ can be calculated as
$$
\text{DC gain}(R\to Y)=\frac{K_{D}s^{2}+K_{P}s+K_{I}}{s^{3}+(K_{P}-1)s+K_{D}s^{2}+K_{I}} \Bigg|_{s=0}=1
$$
So, with the addition of integral feedback we remove the limitation of [[Proportional-Derivative Control|PD control]] and achieve perfect tracking.

## Disturbance Rejection
The DC gain of the transfer function between the disturbance input $W$ and output $Y$ can be calculated as
$$
\text{DC gain}(W\to Y)=\frac{s}{s^{3}+(K_{P}-1)s+K_{D}s^{2}+K_{I}} \Bigg|_{s=0}=0
$$
So, integral gain also gives complete attenuation of constant disturbances!




![[Proportional-Integral-Derivative Control-20250427230250358.png|620]]
