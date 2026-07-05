---
title: Linear and non-linear systems
tags:
  - syde252
date: 2023-10-16
---
**Additive property:**
If:
- $x_{1}(t) \to y_{1}(t)$
- $x_{2}(t)\to y_{2}(t)$

Then:
$$
x_{1}(t)+x_{2}(t) \to y_{1}(t)+y_{2}(t)
$$

**Scaling property:**
If $x_{1}(t) \to y_{1}(t)$, then $kx_{1}(t)\to ky_{2}(t)$


**Additive + Scaling = Linear:**
If:
- $x_{1}(t) \to y_{1}(t)$
- $x_{2}(t)\to y_{2}(t)$

Then:
$$
k_{1}x_{1}(t)+k_{2}x_{2}(t) \to k_{1}y_{1}(t)+k_{2}y_{2}(t)
$$

#### Linear Example
Given $y(t) = tx(t)$, we have:
$$
\begin{align}
x_{1}(t) \to y_{1}(t) = tx_{1}(t) \\
x_{2}(t) \to y_{2}(t) = tx_{2}(t)
\end{align}
$$
Then:
$$
\begin{align}
x_{3}(t) = ax_{1}(t)+bx_{2}(t) \quad \to \quad y_{3}(t)&=tx_{3}(t) \\
&=t[ax_{1}(t)+b(x_{2})t] \\
&=tax_{1}(t)+tbx_{2}(t) \\
&=ay_{1}(t)+by_{2}(t) \\[3ex]
&\therefore \text{ System is linear}
\end{align}
$$
#### Non-linear Example 1
Given a system of $y(t)=x^{3}(t)$, we have
$$
\begin{align}
x_{1}(t) \quad \to \quad y_{1}(t) = x^{3}_{1}(t) \\[3ex] 
\end{align}
$$
Thus:
$$
\begin{align}
x_{2}(t)= kx_{1}(t) \quad \to \quad y_{2}(t) &= x^{3}_{2}(t) = (kx_{1}(t))^{3}\\[3ex] 
&= k^{3}x^{3}_{1}(t) \\[3ex] 
& \neq ky_{1}(t) \\[3ex] 
&\therefore \text{ Scaling doesn't hold, non-linear}
\end{align}
$$
#### Non-linear Example 2
Given a system of $y[n] = \mathrm{Re}\{x[n]\}$, such that:
$$
\begin{align}
x_{1}[n]=\delta_{1}[n] + j\omega_{1}[n] \quad &\to \quad y_{1}[n]=\delta_{1}[n] \\[3ex] 
\end{align}
$$
However, let's say that $x_{2}[n]$ is defined to be $jx_{1}[n]$, we would have:
$$
\begin{align}
x_{2}[n]=jx_{1}[n] =j\delta_{1}[n] -\omega_{1}[n] \quad &\to \quad y_{2}[n] =-\omega_{1}[n] \\[3ex] 
\end{align}
$$
so $y_{2}[n] \neq jy_{1}[n]$, failing the scaling property, making the system nonlinear.
