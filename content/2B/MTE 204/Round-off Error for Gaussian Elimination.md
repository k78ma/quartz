---
title: Round-off Error for Gaussian Elimination
tags:
  - mte204
date: 2023-10-11
---
Let us say we have are solving the following system with Gaussian elimination and can only carry 3 significant digits:
$$
\begin{align}
2x_{1}+100,000x_{2} &= 100,000 \\
x_{1}+x_{2} &= 2
\end{align}
$$
Forward elimination gives:
$$
\begin{align}
2x_{1}+100,000x_{2} &= 100,000 \\
-50,000x_{2} &=-50,000
\end{align}
$$
which would give $x_{1}=0.0$ ad $x_{2}=1.0$, an answer that is obviously not correct.

However, if we didn't round off, this equation would be:
$$
\begin{align}
-49,999x_{2}&=-49,998 \\
x_{2} &= 0.99998 \\
x_{1} &= 1.00002
\end{align}
$$
If we use [[Scaling]] and [[Pivoting]], we instead get:
$$
\begin{align}
x_{1} + x_{2}&=2 \\
0.00002x_{1} + x_{2} &= 1
\end{align}
$$
which gives us $x_{1} = 1.00$ and $x_{2} = 1.00$, an answer that is accurate to 3 significant figures.
