---
title: Feedback System Stability
tags:
  - mte484
date: 2025-09-17
aliases: feedback system stability
---
Continuous-time and discrete-time feedback control systems take the following general forms:

![[Feedback System Stability-20250917140502026.png|529]]


![[Feedback System Stability-20250917140513897.png|534]]


The systems have many different transfer functions. To distinguish these, we make the distinction between external and internal signals:
- External signals: $r, d$  – we have no control over these
- Internal signals: $u,e,y$ – these depend on our control design

We consider transfer functions from external signals to internal signals (*closed-loop transfer functions*):
$$
T_{ry}, \, T_{re},\, T_{ru},\, T_{dy},\, T_{de},\, T_{du}
$$
- We consider external-to-internal TFs because our goal is to understand the influence of external factors on the internals of our system

Example:
$$
\begin{align}
y  & = Pu = P(d+Ce) = P(d+C(r-y)) \\[2ex]
     & \implies y= Pd + PCr - PCy \\[2ex]
     & \implies (1+PC)y = Pd+PCr \\[2ex]
     & \implies y=  \underbrace{ \frac{P}{1+PC} }_{ T_{dy} }d + \underbrace{ \frac{PC}{1+PC} }_{ T_{ry} }r
\end{align}
$$
We can generalize these in matrix form for both continuous and discrete time:
$$
\begin{align}
\text{Continuous-time:} \quad  \begin{bmatrix}
U \\
E \\
Y
\end{bmatrix} = \begin{bmatrix}
\frac{C}{1+PC} & \frac{1}{1+PC} \\
\frac{1}{1+PC} & \frac{-P}{1+PC} \\
\frac{PC}{1+PC} & \frac{P}{1+PC}
\end{bmatrix} \begin{bmatrix}
R \\
D
\end{bmatrix} \\[2ex]
\text{Discrete-time:} \quad  \begin{bmatrix}
U \\
E \\
Y
\end{bmatrix} = \begin{bmatrix}
\frac{D}{1+GD} & \frac{1}{1+GD} \\
\frac{1}{1+GD} & \frac{-G}{1+GD} \\
\frac{GD}{1+GD} & \frac{G}{1+GD}
\end{bmatrix} \begin{bmatrix}
R \\
D
\end{bmatrix}
\end{align}
$$

> [!definition] Well-posed
> A feedback system is *well-posed* if all closed-loop transfer function from external signals to internal signals are real, rational, and proper.


> [!definition] Closed-loop stable / Internally stable
> A closed-loop system is *closed-loop stable* or *internally stable* if all closed-loop transfer functions from external signals to internal signals $T_{ry}, \, T_{re},\, T_{ru},\, T_{dy},\, T_{de},\, T_{du}$ are BIBO stable.

