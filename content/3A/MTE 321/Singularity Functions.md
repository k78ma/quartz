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
Essentially, the function is turned "on" if $x \geq a$ and turned off otherwise.

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

## Beam Loading Example
We have a beam loaded like so:

![[Singularity Functions-3.png]]

The loading can be written as:
$$
q=R_{1}\langle x \rangle ^{-1}-200\langle x-4 \rangle ^{-1}-100\langle x-10 \rangle ^{-1}+R_{2}\langle x-20 \rangle ^{-1}
$$
The shear can then be found by integrating once:
$$
V = \int q \, dx = R_{1}\langle x \rangle ^{0}-200\langle x-4 \rangle ^{0}-100\langle x-10 \rangle ^{0}+R_{2}\langle x-20 \rangle ^{0}
$$
The moment can then be found by integrating again:
$$
M = \int V \, dx = R_{1}\langle x \rangle ^{1}-200\langle x-4 \rangle ^{1}-100\langle x-10 \rangle ^{1}+R_{2}\langle x-20 \rangle ^{1}
$$
We can find $R_{1}$ and $R_{2}$ with:
$$
\begin{align}
\sum F_{y}=0 \quad  & \longrightarrow \quad R_{1}-200-100+R_{2}=0\\[2ex] 
\sum M_{R_{2}} = 0 \quad  & \longrightarrow \quad -R_{1}(20)+200(16)+100(10)=0 \\[2ex] 
 & \therefore R_{1} = 210, R_{2}=90
\end{align}
$$
