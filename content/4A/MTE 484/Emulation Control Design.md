---
title: Emulation Control Design
tags:
  - mte484
date: 2025-11-11
aliases: emulation control design
---
Two strategies of control design in DT:
1. Direct design of $D[z]$ in DT, such as [[IOP with SPA]]
    - Transient specs will be satisfied at the end of the sample points
    - Closed-loop stability at the sample points
2. **Emulation design:** Design $C(s)$ in CT, and then approximate $C(s)$ with $D[z]$ in DT

This is done through this series of steps. First, starting from the frequency domain $C(s)$, we use [[State Space Realization|state space realization]] to switch to the time domain:
$$
\begin{align}
\dot{x}  & = Ax + Be  \\
u & =Cx
\end{align}
$$
We then use a $\Delta[k+1]$ approximation
$$
\begin{align}
x^{+}  & = \hat{A}x  +\hat{B}e \\
u & =Cx
\end{align}
$$
We then take the $Z$-transform to get to $D[z]$.

Our approximation will inevitably have some impact on the poles as we go from CT to DT. 
- See [[Stability of CT-DT Approximation]].

## Approximating C(s) into D\[z]
Our plan is to make an approximation in the time domain, then go back to the frequency domain.

Assume we have a continuous time system of the form:

![[Emulation Design-20251031114505666.png]]

We use a running assumption that $C(s)$ has only simple poles:
$$
\begin{align}
C(s)  & = \sum_{i=1}^{n} \frac{c_{i}}{s-p_{i}}  \\[2ex] 
& = \begin{bmatrix}
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
\dot{x}  & = \underbrace{ \begin{bmatrix}
p_{1} & & \\
& \ddots &  \\
 &  & p_{n}
\end{bmatrix} }_{ A } x + \underbrace{ \begin{bmatrix}
c_{1} \\
\vdots \\
c_{n}
\end{bmatrix} }_{ B }e
\\[2ex] 
u  & = \begin{bmatrix}
1 & \dots & 1
\end{bmatrix} x
\end{align} 
$$

Recall that we can write
$$
\begin{align}
x[k+1]  & = x[k] + \Delta[k+1] \\[2ex]
 & = x[k] + \int_{kT}^{(k+1)T} (Ax(s)+Be(s)) \, ds 
\end{align}
$$
We can use the [[Numerical Integration for Control Systems|left-side rule]] for numerical integration:
$$
\begin{align}
\Delta[k+1] &  \approx T(Ax(kT) + Be(kT)) = T(Ax[k]+Be[k]) \\
 & \implies x[k+1] = x[k] + T(Ax[k]+Be[k])
\end{align}
$$
Taking the $z$-transform gives
$$
\begin{align}
 zX[z]  & = X[z]+T[AX[z]+BE[z]]  \\
((z-1)I-TA)X[z]  & = TBE[z] \\
X[z]  & = ((z-1)I-TA)^{-1}TBE[z] \\
\end{align}
$$
We can write the $((z-1)I-TA)^{-1}$ term as
$$
\begin{bmatrix}
z-1-Tp_{1}  &  &  \\
 & \ddots  &  \\
 &  & z-1-Tp_{n}
\end{bmatrix}
$$
such that we have
$$
X[z] = \begin{bmatrix}
\frac{Tc_{1}}{z-1-Tp_{1}} \\
\vdots \\
\frac{Tc_{n}}{z-1-Tp_{n}}
\end{bmatrix} E[z]
$$
We want to find the transfer function from $U$ to $Y$:
$$
u(t)=cx(t) \quad \longrightarrow \quad  u[k]=cx[k] = \begin{bmatrix}
1 & \dots & 1
\end{bmatrix} \begin{bmatrix}
\frac{Tc_{1}}{z-1-Tp_{1}} \\
\vdots \\
\frac{Tc_{n}}{z-1-Tp_{n}}
\end{bmatrix} E[z]
$$
where the $[1 \dots 1]$ just makes you sum all the entries in the column vector.

Thus, we have
$$
U[z]= \sum_{i=1}^{n} \frac{Tc_{i}}{z-1-Tp_{i}} E[z]
$$
Therefore, to get this particular approximation, we use
$$
D[z]= C(s) \Big |_{s=\frac{1}{T}(z-1)}
$$

Instead of using the left-side rule, we can take the same approach with other numerical integration methods:

With the right side rule :
$$
D[z] = C(s) \Big | _{s=\frac{1}{T}\left( \frac{z-1}{z} \right)}
$$
With the trapezoidal rule:
$$
D[z] = C(s) \Big |_{s=\frac{2}{T} \left( \frac{z-1}{z+1} \right)}
$$

## Impact on Poles
Our approximation will inevitably have some impact on our poles as we go from CT to DT. Ideally, we will get stable poles in CT $\Longleftrightarrow$ stable poles in DT.

As an example, consider this DT $D[z]$:

![[Emulation Control Design-1764989382343.webp]]

Using the left side rule with $s=\frac{1}{T}(z-1)$:

![[Emulation Control Design-1764989457909.webp]]

Note the location of the red poles between Figure 2 and Figure 3. Thus, for the left side rule, stable poles in CT may result in unstable poles in DT.

With the right side rule approximation $s= \frac{1}{T} \frac{z-1}{z}$:

![[Emulation Control Design-1764989512353.webp]]

Note the location of the blue poles between Figure 2 and Figure 4. Thus, for the right side rule, unstable poles in CT may result in stable poles poles in DT.

With the trapezoidal rule $s= \frac{2}{T} \frac{z-1}{z+1}$:

![[Emulation Control Design-1764989799020.webp]]

Thus, for the trapezoidal rule, stable poles in CT map to stable poles in DT.

 Trapezoidal approximation with a system that is closed-loop stable with $C(s)$ does **not** guarantee CL stability for the sampled-data system with $D[z]$. Stability of $D[z]$ does not tell us anything about closed-loop stability. This is one of the downsides of emulation design.

## Step Invariant Approximation
Step invariant approximation is an emulation design method that ensures the step responses of $C(s)$ and $D[z]$ agree at sample points:
$$
\begin{align}
L^{-1}\left( C(s) \frac{1}{s} \right) \Big|_{t=kT} = Z^{-1}\left( D[z] \frac{z}{z-1} \right)  \\[2ex] 
\implies D[z] = \frac{z-1}{z} Z\left( L^{-1}\left( \frac{C(s)1}{s} \right) \Big|_{t=kT} \right)
\end{align}
$$
This is the default of `c2d` in MATLAB.