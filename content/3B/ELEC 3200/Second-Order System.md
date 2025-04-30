---
title: Second-Order System
tags:
  - elec3200
date: 2025-04-29
aliases:
  - second-order system
---
A prototype 2nd-order system has the form:
$$
H(s)=\frac{\omega_{n}^{2}}{s^{2}+2\zeta \omega_{n}s+\omega_{n}^{2}}
$$
By the quadratic formula, the poles are:
$$
\begin{align}
s & =-\zeta \omega_{n} \pm \omega_{n}\sqrt{ \zeta^{2}-1 } \\
 & =-\omega_{n}(\zeta\pm \sqrt{ \zeta^{2}-1 })
\end{align}
$$
The nature of the poles depends on $\zeta$:
- $\zeta>1$ means both poles are real and negative
- $\zeta=1$ means one negative pole
- $\zeta<1$ means two complex poles with negative real parts

In general, the poles take the form:
$$
s=-\sigma \pm j\omega_{d}
$$
where $\sigma=\zeta \omega_{n}$ and $\omega_{d}=\omega_{n}\sqrt{ 1-\zeta^{2} }$  (damped frequency).

![[Second-Order System-20250429235322376.png|416]]

Note that
$$
\begin{align}
\sigma^{2}+\omega_{d}^{2} & = \zeta^{2}\omega_{n}^{2}+\omega_{n}^{2}-\zeta^{2} \omega_{n}^{2} \\
     & =\omega_{n}^{2}
\end{align}
$$
and
$$
\cos \phi = \frac{\zeta \omega_{n}}{\omega_{n}}=\zeta
$$
## 2nd-Order Response
Let's compute the system's impulse and step response:
$$
H(s)=\frac{\omega_{n}^{2}}{s^{2}+2\zeta \omega_{n}s+\omega_{n}^{2}}=\frac{\omega_{n}^{2}}{(s+\sigma)^{2}+\omega_{d}^{2}}
$$
### Impulse response
$$
\begin{align}
h(t) & =\mathcal{L}^{-1}\{ H(s) \} \\[2ex] 
 & =\mathcal{L}^{-1} \left\{  \frac{(\omega_{n}^{2}  / \omega_{d})\omega_{d}}{(s+\sigma)^{2}+\omega_{d}^{2}}  \right\}  \\[2ex] 
     & = \frac{\omega_{n}^{2}}{\omega_{d}}e^{-\sigma t}\sin(\omega_{d}t)
\end{align}
$$
### Step response
$$
\begin{align}
\mathcal{L}^{-1}\left\{  \frac{H(s)}{s}  \right\} & =\mathcal{L}^{-1}\left\{  \frac{\sigma^{2}+\omega_{d}^{2}}{s[(s+\sigma)^{2}+\omega_{d}^{2}]}  \right\} \\[2ex]
     & = 1-e^{-\sigma t}\left( \cos(\omega_{d}t)+\frac{\sigma}{\omega_{d}}\sin(\omega_{d}t) \right)
\end{align}
$$
We can see the variation in behavior with respect to the $\zeta$ here:

![[Second-Order System-20250430000922503.png|488]]

![[Second-Order System-20250430001128174.png|588]]


