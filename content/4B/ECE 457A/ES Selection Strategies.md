---
title: ES Selection Strategies
tags:
  - ece457a
date: 2026-04-09
aliases: es selection strategies
---
ES selection uses two population parameters: 
- $\mu$ is the number of parents
- $\lambda$ is the number of offspring

The **elitist** $(\mu+\lambda)$ strategy operates such that the next parents are the best $\mu$ from $\{ \text{parents} \cup \text{offspring} \}$.
- Thus, parents compete with offspring, and the best individuals always survive. This results in monotonic fitness improvement. However, this results in relatively conservative adaptation, such that it reacts slower to landscape changes.

The **non-elitist** $(\mu, \lambda)$ strategy operates such that the next parents are the best $\mu$ from offspring only.
- Thus, parents are discarded, with only offspring competing. This doesn't guarantee monotonic fitness improvement, but the higher exploratory pressure means that it adapts to changes faster.

## Selective Pressure
The selective pressure is governed by the ratio
$$
\frac{\lambda}{\mu}
$$
Typically, we set $\lambda \approx 5\mu - 10\mu$. Selective pressure increases as this ratio increases.

We can interpret this as:
- $\mu$ being the number of survivors
- The competition pool size is $\lambda$ for $(\mu,\lambda)$, and $\mu+\lambda$ for $(\mu+\lambda)$. A larger pool means higher truncation pressure.

Why do we use large $\lambda$? More candidate mutations sampled, resulting in stronger truncation selection. This gives a better statistical estimate of search direction, resulting in the faster elimination of bad strategy parameters. This enhances self-adaptation of $\sigma$.

