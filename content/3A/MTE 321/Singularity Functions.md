---
title: Singularity Functions
tags:
  - mte321
date: 2024-05-22
aliases:
  - singularity functions
---
The loading of beams can be determined from a superposition of singularity functions for the load distribution function $q(x)$.

Singularity functions are defined such that:
$$
f(x)= \langle x-a \rangle ^{n}=\begin{cases}
(x-a)^{n} & x\geq a, \\
0 & x<a
\end{cases}
$$
They can be integrated as:
$$
\int_{-\infty}^{x} \langle x-a \rangle ^{n} \, dx =\begin{cases}
\langle x-a \rangle ^{-1} & n=-2 \\[2ex]
\langle x-a \rangle ^{0} & n=-1 \\[2ex]
\frac{\langle x-a \rangle^{n+1} }{n+1}  & n\geq 0
\end{cases}
$$
The functions are undefined for values of $x=a$. 

![[Singularity Functions.png|544]]