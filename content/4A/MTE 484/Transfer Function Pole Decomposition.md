---
title: Transfer Function Pole Decomposition
tags:
  - mte484
date: 2025-09-12
aliases: transfer function pole decomposition
---
It can be useful to decompose a transfer function into the contributions made by its poles.

Example:
$$
P(s) = \frac{5(s+1)^{12}}{(s+3)^{2}(s+2)^{3}(s+5)^{7}}
$$
We have:
- Poles at $p_{i}=\{ -3, -2, -5 \}$.
- Multiplicities at $n_{i}\in \{ 2,3,7 \}$.

Then:
$$
P(s) = \frac{a}{s+3}+\frac{b}{(s+3)^{2}} + \frac{c}{s+2} + \frac{d}{(s+2)^{2}}+\frac{e}{(s+2)^{3}} + \frac{f}{s+5} \dots + \frac{h}{(s+5)^{7}} + L
$$
Writing this down in summation form:
$$
P(s) = P(\infty) + \sum_{i=1}^{3} \sum_{j=1}^{n_{i}} \frac{c_{i,j}}{(s-p_{i})^{j}}
$$
Note that:
$$
\lim_{ s \to \infty } P(s) =P(\infty) = L
$$
In our case:
$$
P(\infty) = \lim_{ s \to \infty } P(s) = \lim_{ s \to \infty } \frac{5s ^{12}}{s^{12}}=5
$$