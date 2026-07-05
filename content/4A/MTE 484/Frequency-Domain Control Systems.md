---
title: Frequency-Domain Control Systems
tags:
  - mte484
date: 2025-09-08
aliases: frequency-domain control systems
---
## Continuous-Time
We typically assume the plant satisfies a [[Linear Time-invariant Systems|LTI]] ODE of the form:
$$
\sum_{i=0}^{n}a_{i} \frac{d_{i}y}{dt^{i}}(t) - \sum_{j=0}^{m} b_{j} \frac{d^{j}u}{dt^{j}}(t)=0
$$
where $a_{i}, b_{i} \in \mathbb{R} \, \forall \,\, i,j$.

(One-sided) Laplace transform (LT):
$$
X(s)=\mathcal{L}(x(t))= \int_{0}^{\infty} x(t)e^{-st} \, dt
$$
Taking the LT of the first ODE with zero initial conditions gives:
$$
\begin{align}
\sum_{i=0}^{n}a_{i} s ^{i}Y(s) &  - \sum_{j=0}^{m}b_{j}s ^{j}U(s)=0 \\[2ex] 
Y(s)  & = \underbrace{ \frac{\sum_{j=0}^{m}b_{j}s_{j}}{\sum_{i=0}^{n}a_{i}s ^{i}} }_{ P(s) }U(s) \\[2ex]
Y(s)  & = P(s)U(s)
\end{align}
$$
## Discrete-Time
In discrete time, we typically assume the plant satisfies an LTI difference equation of the form:
$$
\sum_{i=0}^{n}a_{i}y[k+1] - \sum_{j=0}^{m}b_{j} u[k+j] = 0
$$
where $a_{i}, b_{j} \in \mathbb{R} \,\, \forall \,\, i,j$.

(One-sided) z-transform:
$$
X[z]= \mathcal{Z}(x(t)) =  \sum_{k=0}^{\infty}x[k] \frac{1}{z^{k}}
$$
Take the z-transform of the difference equation with zero initial conditions:
$$
\begin{align}
\sum_{i=0}^{n} a_{i}z^{i}Y[z]  & - \sum_{j=0}^{m}b_{j}z^{j}U[z]=0 \\[2ex] 
Y[z]  & = \underbrace{ \frac{\sum_{j=0}^{m}b_{j}z^{j}}{\sum_{i=0}^{n}a_{i}z^{i}} }_{ G[z] }U[z] \\[2ex]
    &  = G[z]U[z]
\end{align}
$$
