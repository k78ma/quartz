---
title: Time shifting
tags:
  - syde252
date: 2023-09-23
---
### Continuous Time
Let’s say we have:
- Signal $x(t)$
- Signal $\phi(t)$, which is $x(t)$ delayed by $T$ seconds

Thus:
$$
\phi(t+T) = x(t)
$$
and
$$
\phi (t) = x(t-T)
$$
If $T>0$, it is delayed (shift to the right)
If $T<0$, it is advanced (shift to the left)

![[Pasted image 20230923125503.png|392]]

### Discrete Time
Like C.T., we have:
$$
x_{M}[N] = x[n-M]
$$
To shift a discrete time signal by $M$ units, we replace $n$ with $n-M$.
If $M>0$, it is delayed (shift to the right)
If $M<0$, it is advanced (shift to the left)

![[Pasted image 20230923125312.png|492]]