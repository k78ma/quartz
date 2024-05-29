---
title: Z-transform for D.T. System Analysis
tags:
  - syde252
date: 2023-11-22
aliases:
---
The Z-transform is the discrete time equivalent of [[Laplace Transform for C.T. System Analysis]]. 
- The Laplace transform converts integro-differential equations into algebraic equations.
- The Z-transform changes difference equations into algebraic equations, thereby simplifying the analysis of discrete-time systems.

### Definition
We define $X[z]$, the direct Z-transform of $x[n]$, as
$$
X[z]=\sum_{n=-\infty}^{\infty}x[n]\;z^{-n}
$$
where $z$ is a complex variable.

The inverse Z-transform is:
$$
x[n]=\frac{1}{2\pi j}\oint X[z]\,z^{n-1}\,dz
$$
In comparison to the Laplace transform, we have:
$$
\begin{align}
z  & = e^{s}  \\
 & = e^{\sigma+j\omega} =e^{\sigma}e^{j\omega}\\
\end{align}
$$
such that $e^{sn}=z^{n}$.

### Application
Let's say we want to find the response of an LTI system $h[n]$ to the complex exponential $z^{n}$.
$$
\begin{align}
y[n] & =h[n]*x[n] \\
 & =h[n]*z^{n} \\[3ex] 
	 & = \sum_{m=-\infty}^{\infty} h[m]\,z^{n-m}\\[3ex] 
	 & =z^{n} \sum_{m=-\infty}^{\infty} h[m]\,z^{-m}
\end{align}
$$
Then, we have:
$$
y[n] = z^{n}\,H[z]
$$
where $H[z] =\sum_{m=-\infty}^{\infty} h[m]\,z^{-m}$ is just the Z-transform of $h[n]$!

Thus, the input passes through (eigenfunction), and we have a transfer function:
$$
H[z]=\frac{y(t)}{x(t)} \Bigg|_{x(t)=z^{n}}
$$

