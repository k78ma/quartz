---
title: Characteristic Polynomial CL Stability
tags:
  - mte484
date: 2025-10-10
aliases: characteristic polynomial cl stability
---

> [!definition] Coprime 
> Two polynomials $N[z]$/$N(s)$ and $M[z]$/$M(s)$ are coprime if they have no common roots.

> [!definition] Monic
> A polynomial $N[z]$/$N(s)$ is monic if the coefficient of the highest power of $z$/$s$ is 1.
> - Can always make a polynomial monic by dividing through

Let $G[z] = \frac{N[z]}{M[z]}$, where $N,M$ are coprime and $M$ is monic.

Let $D[z] = \frac{f[z]}{g[z]}$, where $f,g$ are coprime and $g$ is monic.


> [!definition] Characteristic polynomial
> $$
>\begin{align}
>\Delta [z]:= N[z]f[z]+M[z]g[z] \\[2ex] 
> \Delta(s) := N(s)f(s)+M(s)g(s)
>\end{align}
> $$

> [!theorem] Theorem
> The system is [[Closed-Loop Stability|closed-loop stable]] if and only if $\Delta [z]$/$\Delta(s)$ has all of its roots in $\mathbb{D}$/$\mathbb{C}^{-}$.
> 

*Proof.*

We can write:
$$
\begin{align}
T_{ru}  & = \frac{D}{1+GD}  \\[2ex]
 & = \frac{\frac{f}{g}}{1+\frac{N}{M} \frac{f}{g}} \cdot  \frac{Mg}{Mg} \\[2ex] 
 & =  \frac{Mf}{Nf+Mg} \\[2ex] 
 &  = \frac{Mf}{\Delta}  & (\text{i})
\end{align}
$$
and similarly,
$$
\begin{align*}
T_{ry}  & = \frac{GD}{1+GD} = \dots = \frac{Nf}{\Delta} & \text{(ii)} \\[2ex] 
T_{du}  & = \frac{1}{1+GD} = \dots = \frac{Mg}{\Delta} & \text{(iii)}\\[2ex] 
T_{dy}  & = \frac{G}{1+GD} = \dots = \frac{Ng}{\Delta} & \text{(iv)}\\[2ex] 
\end{align*}
$$


First, let's show $\text{roots}(\Delta) \subset \mathbb{D} \implies$ close-loop stable.
- Given: All the roots of $\Delta(z)$ lie in $\mathbb{D}$.
- WTS: The system is closed-loop stable.

Then:
$\implies$ All the poles of $T_{ru}, T_{du}, T_{ry}, T_{dy}$  lie in $\mathbb{D}$ \[equations above]
$\implies$ $T_{ru}, T_{du}, T_{ry}, T_{dy}$ are stable \[def of stability]
$\implies$ $T_{ru}, T_{du}, T_{ry},T_{dy}$ are BIBO stable \[theorem from class]
$\implies$ The system is closed-loop stable \[def of closed-loop stability]

The other direction of the proof: System is closed-loop stable => $\text{roots}(\Delta) \subset \mathbb{D}$.
- Given: The system is closed-loop stable
- WTS: All the roots of $\Delta[z]$ lie in $\mathbb{D}$

Assume toward a contradiction that $\Delta[z]$ has an unstable root $\lambda$, i.e. $\Delta[\lambda]=0$, $| \lambda | \geq 1$.

Then:
- $\implies$ $T_{ru}, T_{du}, T_{ry}, T_{dy}$ are BIBO stable \[def. of closed-loop stability]
- $\implies$ $T_{ru}, T_{du}, T_{ry}, T_{dy}$ are stable \[theorem from class]
- $\implies$ $T_{ru}, T_{du}, T_{ry}, T_{dy}$ must have pole-zero cancellations at $\lambda$ \[from equations $\text{(i)-(iv)}$]
- $\implies$ \[def. of a pole-zero cancellation]
    - a. $M[\lambda]f[\lambda]=0$
    - b. $M[\lambda]g[\lambda]=0$
    - c. $N[\lambda]f[\lambda]=0$
    - d. $N[\lambda]g[\lambda]=0$

At least one of $f[\lambda], g[\lambda] \neq 0$  \[$f,g$ are coprime]
- $\implies M[\lambda]=0$ \[equations a, b]
- $\implies$ $N[\lambda]=0$ \[equations c, d]
- $\implies \lambda$ is a root of both $M$ and $N$ \[def. of a root]
- $\implies$ This contradicts that $N[z], M[z]$ are coprime!

Therefore, there cannot exist an unstable root $\lambda$ of $\Delta[z]$.
- $\implies$ All roots of $\Delta[z]$ lie in $\mathbb{D}$.

Note: The closed-loop poles of the system (the poles of $T_{re}, T_{ru}, T_{ry}, T_{de}, T_{du}, T_{dy}$) are the roots of $\Delta[z]$.

### Corrolary
**Corollary:** If the plant $G[z]$ and the controller $D[z]$ have an unstable pole-zero cancellation (either $N[z]=g[\lambda]=0$ or $M[\lambda]=f[\lambda]=0$ for some $| \lambda |\geq 1$) then the closed-loop system is unstable.

- Given: $G[z]$ and $D[z]$ have a pole-zero cancellation at $\lambda$ where $| \lambda | \geq 1$:
- WTS: the closed-loop system is unstable

*Proof*. $G[z]$ and $D[z]$ have a pole-zero cancellation at $\lambda$ where $| \lambda | \geq 1$.

Two possibilities for the pole-zero cancellation at $\lambda$:
- a. $N[\lambda]=g[\lambda]=0$
- b. $M[\lambda]=f[\lambda]=0$

Evaluating the characteristic polynomial at $\lambda$:
$$
\Delta[\lambda] = N[\lambda]f[\lambda]+M[\lambda]g[\lambda]
$$
In either case (a) or (b), we will have $\Delta[z]=0$.

- $\implies$ $\lambda$ is a root of $\Delta[z]$ \[def of a root]
- $\implies$ The system is closed-loop unstable \[theorem from class]

