---
title: Closed-Loop Stability
tags:
  - mte484
date: 2025-09-23
aliases:
  - closed-loop stability
  - closed-loop transfer function
---
Continuous-time and discrete-time feedback control systems take the following general forms:

![[Feedback System Stability-20250917140502026.png|529]]


![[Feedback System Stability-20250917140513897.png|534]]

- $C(s)  / D[z]$  are controller
- $P(s) / G[z]$ are plant

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
> A closed-loop system is *closed-loop stable* or *internally stable* if all closed-loop transfer functions from external signals to internal signals $T_{ry}, \, T_{re},\, T_{ru},\, T_{dy},\, T_{de},\, T_{du}$ are [[BIBO Stability|BIBO stable]].
> 
> - This is equivalent to saying that for any bounded external signals $r,d$, the internal signals $u,e,y$ are bounded as well.
> - As $e=r-y$ is bounded whenever $r,y$ is bounded, it suffices to only consider the 4 transfer functions from $(r,d)$ to $(u,y)$ to determine closed-loop stability.
> - Equivalently, as $y=r-e$ is bounded whenever $r,e$ are bounded, it suffices to only consider the 4 transfer functions from $(r,d)$ to $(u,e)$ to determine closed-loop stability.

## Examples
**Example 1:** 
Suppose $G[z] = \frac{z+2}{\left( z+\frac{1}{2} \right)(z-1)}, \,\, D[z] = \frac{1}{z+2}$. 

We have:
$$
\begin{align}
T_{ry} = \frac{GD}{1+GD} = \dots = \frac{1}{z^{2}-\frac{1}{2}z+\frac{1}{2}}
\end{align}
$$
Then:
$$
\text{Poles}(T_{ry}) \subset \mathbb{D}
$$
So $T_{ry}$ is stable (definition of stability). In turn, $T_{ry}$ is BIBO stable (theorem from class).

However, it can be shown that this system is NOT closed-loop stable! (Because $T_{ru}$ is unstable.)

**Example 2:**
$$
G[z] = \frac{z+\frac{1}{2}}{z+2},\,\, D[z] = \frac{z-1}{z+\frac{1}{2}}
$$
- Unstable plant, stable controller

Checking the transfer functions:
$$
\begin{align}
T_{ry}  & = \frac{GD}{1+GD} = \frac{z-1}{2z+1} \\[2ex]
T_{dy}  & = \frac{G}{1+GD}=\frac{z+\frac{1}{2}}{2z+1} \\[2ex] 
T_{ru}  & = \frac{D}{1+GD} = \frac{(z-1)(z+2)}{\left( z+\frac{1}{2} \right)(2z+1)} \\[2ex] 
T_{du} & = \frac{1}{1+GD} = \frac{z+2}{2z+1}
\end{align}
$$
Thus, the system is closed-loop stable!

**Example 3:**
$$
G[z] = \frac{z-4}{z+2}, \,\, D[z] = \frac{z+1}{z+2}
$$
This system is closed-loop stable, despite having an unstable plant and an unstable controller.

**Example 4:**
$$
G[z] = \frac{z+3}{z+\frac{1}{2}}, \,\, D[z] = \frac{z+2}{z-\frac{1}{2}}
$$
This stable is not closed-loop stable, despite having stable plant and controller.


Thus, it is not always intuitive in feedback systems whether the system will be closed-loop stable even if both the plant and controller are closed-loop stable.

