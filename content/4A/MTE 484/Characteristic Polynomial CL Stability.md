---
title: "Closed-Loop Stability Proof"
tags: 
date: "2025-10-08"
aliases: "closed-loop stability proof"
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
 &  = \frac{Mf}{\Delta}
\end{align}
$$
and similarly,
$$
T_{ry} = \frac{GD}{1+GD} = \dots = \frac{Nf}{\Delta}
$$
and similarly,
$$
T_{dy} = \frac{G}{1+GD} = \dots = \frac{Ng}{\Delta}
$$

First, let's show $\text{roots}(\Delta) \subset \mathbb{D} \implies$ close-loop stable.
- Given: All the roots of $\Delta(z)$ lie in $\mathbb{D}$.
- WTS: The system is closed-loop stable.

$\implies$ All the poles of $T_{ru}, T_{du}, T_{ry}, T_{dy}$  lie in $\mathbb{D}$ \[equations above]
$\implies$ $T_{ru}, T_{du}, T_{ry}, T_{dy}$ are stable \[def of stability]
$\implies$ $T_{ru}, T_{du}, T_{ry},T_{dy}$ are BIBO stable \[theorem from class]
$\implies$ The system is closed-loop stable \[def of closed-loop stability]

The other direction of the proof: 