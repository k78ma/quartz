---
title: Emulation Design
tags:
  - mte484
date: 2025-10-31
aliases: emulation design
---
There are two ways to control [[Sampled-Data Control Systems|sampled-data systems]]:
1. Direct control of $D[z]$ in DT, such as [[IOP with SPA]]
2. Emulation design: Design $C(s)$ in CT, and then approximate $C(s)$ with $D[z]$ in DT

Assume we have a continuous time system of the form:

![[Emulation Design-20251031114505666.png]]

We use a running assumption that $C(s)$ has only simple poles:
$$
\begin{align}
C(s) = \sum_{i=1}^{n} \frac{c_{i}}{s-p_{i}}  & = \begin{bmatrix}
1  & \dots & 1
\end{bmatrix} \underbrace{ \begin{bmatrix}
\frac{1}{s-p_{1}} &  &  \\
 & \ddots  &  \\
 &  &  \frac{1}{s-p_{n}}
\end{bmatrix} }_{ =(sI-A)^{-1} } \underbrace{ \begin{bmatrix}
c_{1} \\
\vdots \\
c_{n}
\end{bmatrix} }_{ B } \\[2ex] 
 & = \left(sI - \underbrace{ \begin{bmatrix}
p_{1} & & \\
& \ddots &  \\
 &  & p_{n}
\end{bmatrix} }_{ A }\right)^{-1} B
\end{align}
$$
Note that if we assume $d=0$, we also have
$$
\begin{align}
U(s) = C(s)E(s)
\end{align}
$$
which gives
$$
\begin{align}
\dot{x} = \underbrace{ \begin{bmatrix}
p_{1} & & \\
& \ddots &  \\
 &  & p_{n}
\end{bmatrix} }_{ A } x + \underbrace{ \begin{bmatrix}
c_{1} \\
\vdots \\
c_{n}
\end{bmatrix} }_{ B }e
\end{align} \\[2ex] 
u = \begin{bmatrix}
1 & \dots & 1
\end{bmatrix} x
$$

Recall that we can write
$$
\begin{align}
x((k+1)T)  & = x(kT) + \Delta[k+1] \\[2ex]
 & = x(kT) + \int_{kT}^{(k+1)T} (Ax(s)+Be(s)) \, ds 
\end{align}
$$
We can use the left-side rule for numerical integration:
$$
\begin{align}
\Delta[k+1] &  \approx T(Ax(kT) + Be(kT)) = T(Ax[k]+Be[k]) \\
 & \implies x[k+1] = x[k] + T(Ax[k]+Be[k])
\end{align}
$$
Taking the $z$-transform gives
$$
\begin{align}
 & zX[z] = X[z]+T[AX[z]+BE[z]]  \\
 & \implies((z-1)I-TA)X[z] = TBE[z] \\
 & \implies X[z] = ((z-1)I-TA)^{-1}TBE[z] \\
\end{align}
$$
…
…
…


Finally, we can do
$$
U[z] = \sum_{i=1}^{n} \underbrace{ \frac{c_{i}}{\frac{1}{T}(z-1)-p_{i}}E }_{ =: D[z] }[z] \quad \Longrightarrow \quad  D[z] = C(s) \Big|_{s=\frac{1}{T}(z-1)}
$$
With the right side rule 


Direct design of $D[z]$:
- Transient specs will be satisfied at the end of the sample points
- Closed-loop stability at the sample opints