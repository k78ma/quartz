---
title: Input-Output Parameterization
tags:
  - mte484
date: 2025-09-24
aliases:
  - input-output parameterization
  - IOP
---
Using the [[Final Value Theorem]], we can try to design a controller that meets some steady-state specs. However, it's still difficult to design a controller that satisfies desired transient specs. Some examples of other control design methods:
- [[Proportional-Integral-Derivative Control|PID control]]
- [[Pole Placement|Pole placement]]

Limitations of these methods:
1. Requires lots of manual tuning of parameters, often based on trial and error to satisfy transient specs.
2. May not be feasible to satisfy desired transient plants

With these in mind, we come up with a new method to design controllers. The idea is to:
1. Design [[Closed-Loop Stability|closed-loop transfer functions]] to obtain [[Closed-Loop Stability|closed-loop stability]]
    - We are designing the closed-loop transfer functions directly instead of designing the controller
2. Recover a controller $D[z]$ that results in those closed-loop transfer functions.

To do so, we will use a clever change of variables called **input-output parameterization (IOP)**.

Define the IOP equations (feasibility constraints) for variables $X[z], W[z], V[z]$:
$$
\begin{align}
 & X[z] + G[z]W[z]   = 1 \quad \quad \text{(i)} \\[2ex]
 & V[z] + G[z]X[z]   =0 \quad  \quad  \text{(ii)} \\[2ex]
 & X[z], W[z], V[z] \text{ are real, rational, proper, and stable} \quad  \quad  \text{(iii)}
\end{align}
$$

Since the plant $G[z]$ is known (constant/not variable), these equations are linear in the variables $X[z], W[z], V[z]$. 

Recall that for closed-loop stability, we just need to check:
$$
\begin{bmatrix}
E \\
U
\end{bmatrix} = \begin{bmatrix}
\frac{1}{1+GD} & \frac{-G}{1+GD} \\
\frac{D}{1+GD} & \frac{1}{1+GD}
\end{bmatrix} \begin{bmatrix}
R \\
D
\end{bmatrix}
$$
## Theorem and Proof

> [!theorem] IOP Theorem
> - **a.** If $D[z]$ results in closed-loop stability, then $X[z]= T_{re}[z]=T_{du}[z]$, $W[z]=T_{ru}[z]$, and $V[z]=T_{de}[z]$, satisfy the IOP equations (i)-(iii).
> - **b.** If $X[z], W[z], V[z]$ satisfy the IOP equations (i)-(iii), and if we choose our controller $D[z] = \frac{W[z]}{X[z]}$, then $T_{re}[z] = X[z]$, $T_{du}[z]=X[z]$, $T_{ru}[z]=W[z]$, and $T_{de}[z]=V[z]$.

*Proof.*

Part (a):
- Given: $D[z]$ results in closed-loop stability
- WTS: $X[z]= T_{re}[z]=T_{du}[z], W[z]=T_{ru}[z]$ satisfy the IOP equations

Proof of part (a): 
- $D[z]$ results in closed-loop stability
- $\implies T_{re}, T_{du}, T_{ru}, T_{de}$ are BIBO stable \[definition of closed-loop stability]
- $\implies T_{re}, T_{du}, T_{ru}, T_{de}$ are stable \[theorem from class]
- $\implies X=T_{re}=T_{du}, W=T_{ru}, V=T_{de}$ satisfy equation (iii)
- We have:
$$
X[z]+G[z]W[z] = T_{re}[z] + G[z]T_{ru}[z] = \frac{1}{1+GD} + G \frac{D}{1+GD} = \frac{1+GD}{1+GD} = 1
$$
    which satisfies (i)
- We have
    $$
    V[z]+G[z]X[z]=T_{de}[z] + G[z]T_{re}[z] = \frac{-G}{1+GD}+G \frac{1}{1+GD} =0
    $$
    which satisfies (ii)

Part (b):
- Given: $X[z], W[z], V[z]$ satisfy the IOP equations (i)-(iii)
- WTS: $D[z]=\frac{W[z]}{X[z]} \implies T_{re}=T_{du}=X, T_{ru}=W, T_{de}=V$

Proof of part (b):
- $X, W, V$ satisfy the IOP equations (i)-(iii) 
- $T_{re}=T_{du}=\frac{1}{1+GD}=\frac{1}{1+G \frac{W}{X}}=\frac{1}{1+ \frac{1-X}{X}}=\frac{1}{\frac{1-X+X}{X}} = \frac{1}{\frac{1}{X}}=X$ 
    - Because $D=\frac{W}{X}$, $GW = 1-X$ from equation (i) re-arranged
- $W =DX = DT_{re} = D \frac{1}{1+GD} = T_{ru}$
- $V=-GX = -GT_{re} = -G \frac{1}{1+GD} = T_{de}$
    - $V=-GX$ from equation (iii) re-arranged

