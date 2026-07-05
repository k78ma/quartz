---
title: Time scaling
tags:
  - syde252
date: 2023-09-23
---
### Continuous Time
Time scaling refers to the compression or expansion of a signal in time.
Basically, we have:
$$
\phi(t)= x(at)
$$
- If $a>1$, the scaling results in compression.
- If $a< 1$, the scaling results in expansion.

![[Pasted image 20230923130838.png|468]]

### Discrete Time
For compression, we have:
$$
x_{d}[n] = x[Mn]
$$
where $M$ is an integer factor.

For expansion, we have:
$$
x_{e}[n] = \begin{cases}
x[\frac{n}{L}] \\
0
\end{cases}
$$
where $n=0, \pm L, \pm 2L$.

In continuous time, time compression speeds up the signal with no information loss, but in discrete time, time compression downsamples the signal, leading to information loss.
For example, if you had 12 discrete points before, now you only have 6.