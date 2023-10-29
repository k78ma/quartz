---
title: Signal Convolution
tags:
  - syde252
date: 2023-10-24
---
The convolution integral of two $x_{1}(t)$ and $x_{2}(t)$ is denoted symbolically as:
$$
x_{1}(t) * x_{2}(t) = \int_{-\infty}^{\infty} x_{1}(\tau)\;x_{1}(t-\tau) \, d\tau 
$$
Discrete version:
$$
y[n]=x[n] * h[n] = \sum_{m=-\infty}^{\infty}x[m] \; h[n-m]
$$

### Properties
1) Commutative property
$$
x[n] * h[n] = h[n] * x[n]
$$
2) Distributive property
$$
x[n]*(h_{1}[n]+h_{2}[n]) = x[n] * h_{1}[n] + x[n]*h_{2}[n]
$$
3) Associative property
$$
x[n]*(h_{1}[n]*h_{2}[n]) = (x[n]*h_{1}[n])*h_{2}[n]
$$
4) Sifting property
$$
\begin{align}
x(t)*h(t)&=y(t) \\
x(t)*h(t-\tau) &= x(t-\tau) * h(t) = y(t)
\end{align}
$$
5) Convolution with an impulse
$$
\begin{align}
x[n] * \delta[n]  & = x[n] \\
x[n] * \delta[n-n_{0}] & =x[n-n_{0}]
\end{align}
$$
