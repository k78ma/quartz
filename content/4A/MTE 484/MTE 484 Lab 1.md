---
title: MTE 484 Lab 1
tags:
  - mte484
date: 2025-09-29
aliases: mte 484 lab 1
---
## Part c

Angle = 0 → Potentiometer = 535
- Offset = 535?

Angle = pi/4 → Potentiometer = 482

Angle = -pi/4 → Potentiometer = 595

-0.01482 * reading + 7.93


## Part d - stiction
Positive direction: 0.185
Negative direction: 0.182


$$
\frac{\frac{C_{1}K_{1}}{\tau}}{s^{2}+\frac{1}{\tau}s+\frac{C_{1}K_{1}}{\tau}} = \frac{\omega_{n}^{2}}{s^{2}+2\zeta \omega_{n}s + \omega_{n}^{2}}
$$

First use the overshoot measurement to find
$$
\zeta = - - \frac{\ln(\text{\%OS} / 100)}{\sqrt{ \pi^{2}+\ln(\text{\%OS} / 100))^{2} }}
$$
Use $T_{s}$ and $\zeta$ to find $\omega_{n}$:
$$
\begin{align}
T_{s} = \frac{4}{\zeta \cdot  \omega_{n}} \\[2ex]
\omega_{n} = \frac{4}{\zeta\cdot T_{s}}
\end{align}
$$

Use $\zeta$ and $\omega_{n}$ to find $\tau$:
$$
\begin{align}
\frac{1}{\tau}  & = 2\zeta \omega_{n} \\
\tau & = \frac{1}{2\zeta \omega_{n}}
\end{align}$$

Find $K_{1}$ with $C_{1}, \tau, \omega_{n}$:
$$
\begin{align}
\frac{C_{1}K_{1}}{\tau} = \omega_{n}^{2} \\[2ex]
K_{1} = \frac{\omega_{n}^{2}\tau}{C_{1}}
\end{align}
$$


Motor input, current angle (rad), Error