---
title: Memoryless and Memory Systems
tags:
  - syde252
date: 2023-10-16
---
**Memoryless system:** The output at time $t$ only depends on the input at time $t$.

**Memory system:** The output at time $t$ depends on past inputs as well.
- Finite memory: Output is determined by the input in the last $T$ seconds
- Infinite memory: Outputs are dependent to the entire past $(-\infty, t)$

#### Example:

- Memoryless: 
$$
y(t)=(t-1)x(t)
$$
- Finite with memory $T=3$: 
$$
y(t)=(t-1)x(t)+x(t-3)
$$
- Infinite memory (accumulator/summer in this case):
$$
y[n]=y[n-1]+x[n] = \sum_{k=-\infty}^{n} x[k]
$$
