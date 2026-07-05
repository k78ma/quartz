---
title: Time reversal
tags:
  - syde252
date: 2023-09-23
---
### Continuous
Time reversal refers to the reflection of $x(t)$ about the vertical axis, and is done by:
$$
\phi(t)=x(-t)
$$
Basically, we just replace $t$ with $-t$.

Another example:
$$
\begin{align}
\text{Original} &= x(3t-5) \\
\text{Reversed} &\to x(3(-t)-5)  \\
&= x(-3t-5)
\end{align}
$$
### Discrete
This is basically the same:
$$
x_{r}[n]=x[-n]
$$
