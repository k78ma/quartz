---
title: Logarithmic Algorithms
tags:
  - cs
  - dsa
date: 2024-03-12
aliases:
---
### Base
For algorithms in $O(\log_{a}n)$ time, the base of the logarithm $a$ has no real effect on the growth rate. Thus, we can just generalize to $O(\log n)$.

### Effectiveness
The effectiveness of logarithmic algorithms lies in the fact that they cut any function down to size. The growth rate of any polynomial function is $O(\log_{2}n)$, because
$$
\log_{a}n^{b}=b\cdot \log_{a}n
$$
The effectiveness of binary search on a wide range of problems is a consequence of this observation. Performing a binary search on a sorted array of $n^{2}$ things requires only twice as many comparisons as a binary search on $n$ things.

We can also do arithmetic on factorials (or products in general) by taking a logarithm, since
$$
\begin{align}
n! &= \prod_{i=1}^{n}i \\
\log(n!) &= \sum_{i=1}^{n} \log i = \Theta(n \log n)
\end{align}
$$
#### Binary Search - Even splitting
How many queries does binary search take on the million-name phone book if each split were 1/3-to-2/3 instead of 1/2-to-1/2?
$$
\begin{align}
\log_{3 / 2} (1000000)  & \approx 35 \\
\log_{2}(1000000)  & \approx 20
\end{align}
$$
Changing the base of the log does not affect the asymptotic complexity. The effectiveness of binary search comes from its logarithmic running time, not the base of the log.