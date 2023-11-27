---
title: Properties of Laplace Transform
tags:
  - syde252
date: 2023-11-26
aliases:
---
### Time-shifting Property
The time-shifting property states if:
$$
x(t) \Longleftrightarrow X(s)
$$
then for $t_{0} \geq 0$
$$
x(t-t_{0}) \Longleftrightarrow X(s)e^{-st_{0}}
$$
Since $x(t)$ starts at $t=0$ and $x(t-t_{0})$ starts at $t=t_{0}$. To make this more explicit, we can restate this property as:
$$
x(t)u(t) \Longleftrightarrow X(s)
$$
then
$$
x(t-t_{0})u(t-t_{0}) \Longleftrightarrow X(s)e^{-st_{0}}, \quad t_{0}\geq 0
$$
### Frequency Shifting
The frequency shifting property states if
$$
x(t)\Longleftrightarrow X(s)
$$
then
$$
x(t)e^{s_{0}t}\Longleftrightarrow X(s-s_{0})
$$
Easy proof:
$$
\mathcal{L}[x(t)e^{s_{0}t}]=\int_{0^{-}}^{\infty}x(t)e^{s_{0}t}e^{-st}  \, dt = \int_{0^{-}}^{\infty} x(t)e^{-(s-s_{0})t} \, dt =X(s-s_{0}) 
$$
### Scaling Property
If we have:
$$
\mathcal{L}[x(t)]=X(s)
$$
Then we have:
$$
\mathcal{L}[x(at)]=\frac{1}{a}X\left( \frac{s}{a} \right)
$$
- If $a>1$, time compression by a factor of $a$ (causes frequency expansion)
- If $a<1$, time expansion by a factor of $a$ (causes frequency compression)

### Time Differentiation Property
If $\mathcal{L}[x(t)]=X(s)$, we have:
$$
\begin{align}
\mathcal{L}\left[ \frac{ dx(t) }{ dt }  \right]  & = sX(s)-x(0^{-}) \\[3ex] 
\mathcal{L}\left[ \frac{dx(t)}{dt} \right] &= s^{2}X[s]-sX(0^{-})-\dot{x}(0) \\[3ex] 
\mathcal{L}\left[ \frac{d^{n}x(t)}{dt} \right] & = s ^{n}X(s)-s ^{n-1}x(0^{-})-s ^{n-2}\dot{x}(0^{-})- \dots-x^{n-1}(0^{-})
\end{align}
$$
### Frequency Differentiation
If $\mathcal{L}[x(t)]=X(s)$, then:
$$
\mathcal{L}[tx(t)]=-\frac{d}{ds}X(s)
$$
This is different for the discrete Z-transform:
$$
\mathcal{Z}[nx[n]]=-z \frac{dX[z]}{dz}
$$
### Time Integration
Given $\mathcal{L}[x(t)]=X(s)$, then:
$$
\mathcal{L}\left[ \int_{0}^{t} x(\tau) \, d\tau  \right]=\frac{X(s)}{s}
$$
### Frequency Domain Integration
Given $\mathcal{L}[x(t)]=X(s)$, then:
$$
\mathcal{L}\left[ \frac{x(t)}{t} \right]=\int_{s}^{\infty} x(\alpha) \, d\alpha 
$$
### Convolution
Given $\mathcal{L}[x(t)]=X(s)$, then:
$$
\mathcal{L}[x_{1}(t)* x_{2}(t)]=X_{1}(s)X_{2}(s)
$$
The Z-transform version is:
$$
Z[x_{1}[n]*x_{2}[n]]=x_{1}[z]x_{2}[z]
$$
