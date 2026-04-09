---
title: (1+1)-ES and the One-Fifth Rule
tags:
  - ece457a
date: 2026-04-09
aliases:
  - (1+1)-es and the one-fifth rule
  - 1/5 rule
---
The (1+1) [[Evolution Strategies|ES]] algorithm operates as follows. At each iteration:

One parent $x$ generates one offspring:
$$
x'=x+\sigma z, \quad  z \sim \mathcal{N}(0,I)
$$
Then, we do selection:
$$
x_{t+1} = \begin{cases}
x'  & \text{if } f(x') < f(x) \\
x  & \text{otherwise}
\end{cases}
$$

Note that we are using $\mu=1, \lambda=1$ with elitist [[ES Selection Strategies|selection]]. Thus, only improvements survive.

The 1/5 rule regulates exploration by controlling step size. Specifically, we define a mutation to be successful if $f(x')<f(x)$. The **success probability** is the empirical success rate over $k$ iterations, given as:
$$
p_{s} = \frac{\text{number of successful mutations}}{k}
$$

Rechenberg showed that for $f(x)=|| x ||^{2}$, the maximum expected progress occurs when $p_{s} \approx \frac{1}{5}$. This means that too many successes means that $\sigma$ is too small, and too few successes means that $\sigma$ is too large. The optimal balance is about 20% success.

From this, we can form an adaptive rule to change $\sigma$:
$$
\sigma = \begin{cases}
\sigma / c  & \text{if } p_{s} > \frac{1}{5} \\[2ex] 
\sigma \cdot c & \text{if } p_{s} < \frac{1}{5} \\[2ex]
\sigma & \text{if } p_{s} = \frac{1}{5}
\end{cases}
$$
with $0.8 \leq c \leq 1$.

![[(1+1)-ES and the One-Fifth Rule-1775761324610.webp]]

