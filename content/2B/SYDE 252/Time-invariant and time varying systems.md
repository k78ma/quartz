---
title: Time-invariant and time varying systems
tags:
  - syde252
date: 2023-10-16
---
**Time-invariant** (constant parameter) systems – parameters don't change over time.
Time-varying – parameters change over time.

**Time-delay:** If its input is delayed by $T$, the output is the same but is delayed by $T$:

![[delay by T.png|576]]
![[delay by T 2.png|580]]


#### Example 1:
System: $y[n] = nx[n]$.
Let it $x_{2}[n] = x_{1}[n-m]$. Then we have:
$$
y_{2}[n] =nx_{2}[n] = nx_{1}[n-m]
$$
Delaying $x_{1}[n]$ by $m$ units would give us $x_{1}[n-m]$. This would be:
$$
\begin{align}
y_{1}[n]&=nx_{1}[n] \\
&=(n-m)x_{1}[n-m]
\end{align}
$$So have $y_{1}[n-m] \neq y_{2}[n]$, making the system time varying. This is because when the input is delayed by $m$, the output is not the same but delayed by $m$.

#### Example 2:
System: $y(t) =x(2t)$.
Let $x_{2}(t) = x_{1}(t-T)$. For the system to be time-invariant, we would have:
$$
y_2(t) = y_{1}(t-T)
$$
Solving $y_{1}(t-T)$, we have:
$$
\begin{align}
y_{1}(t-T)  & = x_{1}(2(t-T)) \\
&= x_{1}(2t-2T)
\end{align}
$$
Solving $y_{2}(t)$, we have:
$$
\begin{align}
y_{2}(t)&=x_{2}(2t) \\
&= x_{1}(2t-T)
\end{align}
$$
Since $y_2(t) \neq y_{1}(t-T)$, the system is time-invariant.
