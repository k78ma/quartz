---
title: Moment of a Random Variable
tags:
  - stats
date: 2026-10-13
aliases: moment of a random variable
---
Suppose that $X$ is a discrete random variable with probability mass function $f(x)$ defined over $S$.
- $f(x)$ gives the probability of a value $x$

The $n$-th moment of $X$ is defined as:
$$
E[X^{n}] = \sum_{x \in  S} x^{n} \cdot  f(x)
$$
Thus, the [[Expected Value|expectation]] can be treated as the first moment.

Example:

![[Moment of a Random Variable-1791937915920.webp|330]]

$$
\begin{align*}
E[X^{2}] &= \sum_{x \in  S} x^{2} \cdot  f(x) \\[2ex] 
&= 1^{2} \cdot 0.25 + 2^{2} \cdot 0.5 + 3^{2} \cdot 0.25 \\[2ex] 
&= 4.5
\end{align*}
$$