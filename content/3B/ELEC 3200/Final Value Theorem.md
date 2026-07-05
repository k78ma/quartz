---
title: Final Value Theorem
tags:
  - elec3200
date: 2025-04-01
aliases:
  - final value theorem
---
> [!theorem] Final Value Theorem
> Let $p(t)$ / $g[k]$ be a signal with Laplace/Z-transform that is real, rational, and proper. Then:
> 
> **(a.)** If all poles of $P(s)$/$G[z]$ lie in $\mathbb{C}^{-}$/$\mathbb{D}$,
>  $$
> \lim_{ t \to \infty } p(t)= 0 \quad  / \quad  \lim_{ k \to \infty } g[k]=0 
> $$
> 
> **(b.)** If all poles of $P(s)$/$G[z]$ lie in $\mathbb{C}^{-}$/$\mathbb{D}$ except for exactly one pole at $0$/$1$:
> $$
> \lim_{ t \to \infty } p(t) = \lim_{ s \to 0 } sP(s) \quad  / \quad  \lim_{ k \to \infty } g[k] = \lim_{ z \to 1 } (z-1)G[z]
> $$

*Proof.*

Let $G[z]$ be real, rational, and proper. Then
$$
\begin{align}
g[k] & =Z^{-1}(G[z])     & [\text{def of impulse response}] \\[2ex]
     & = Z^{-1}\left( G[\infty]+\sum_{i=1}^{n} \sum_{j=1}^{n_{i}} \frac{c_{i,j}}{(z-p_{i})^{j}} \right)    &[\text{partial frac. deocmposition}] \\[2ex] 
     & = G[\infty]Z^{-1}(1) + \sum_{i=1}^{n} \sum_{j=1}^{n_{i}}c_{i,j} \,Z^{-1}\left( \frac{1}{(z-p_{i})^{j}} \right)  & [\text{Lineary of }Z^{-1}] \\[2ex] 
     & = G[\infty]\delta [k]  + \sum_{i=1}^{n} \sum_{i=1}^{n_{i}}c_{i,j} {k-1 \choose j-1}p_{i}^{k-j}  & [\text{Known }Z^{-1}]
\end{align}
$$

where
$$
\delta [k] = \begin{cases}
1, & k=1 \\
0 & \text{otherwise}
\end{cases}
$$
So, given that $G[z]$ is real, rational, and proper, we can write
$$
     g[k] = G[\infty]\delta [k]  + \sum_{i=1}^{n} \sum_{i=1}^{n_{i}}c_{i,j} {k-1 \choose j-1}p_{i}^{k-j}  \quad  \quad  [\text{expression from class}]
$$
**(a.)** All poles of $G[z]$ lie in $\mathbb{D}$:
$$
\begin{align}
\lim_{ k \to \infty } g[k]  & =   \lim_{ k \to \infty } \sum_{i=1}^{n}\sum_{j=1}^{n_{i}} c_{i,j} \underbrace{ {k-1 \choose j-1} }_{ \text{polynomial growth} }\underbrace{ p_{i}^{k-j} }_{ \text{exponential decay} } \quad  \quad [\delta [k]=0 \,\, \forall \, \, k>0]  \\[2ex]
     & =0 \quad  \quad  [\text{exponential decay dominates polynomial growth}, \,\,p_{i}\in  \mathbb{D} \,\, \forall \, \, i]
\end{align}
$$
**(b.)** All poles of $G[z]$ lie in $\mathbb{D}$ except exactly one at $z=1$. Therefore, we can write
$$
G[z] = G[\infty] + \frac{c_{n}}{z-1}+\sum_{i=1}^{n-1} \sum_{j=1}^{n_{i}} \frac{c_{i,j}}{(z-p_{i})^{j}} \quad  [\text{partial frac. decomposition}]
$$
Then, we have
$$
g[k] = G[\infty]\delta[k] + c_{n}+\sum_{i=1}^{n-1}\sum_{j=1}^{n_{i}}c_{i,j} {k-1 \choose j-1} p_{i}^{k-j} \quad  [\text{expression for g[k] from class}]
$$
which in turn gives
$$
\lim_{ k \to \infty } g[k] = c_{n} \quad  [\text{follows from part (a)}]
$$
Then, we have
$$
\lim_{ z \to 1 } (z-1)G(z)=\lim_{ z \to 1 } c_{n} + (z-1)\cancelto{ 0 }{ \left[ G[\infty]+\sum_{i=1}^{n-1} \sum_{j=1}^{n_{i}} \frac{c_{i,j}}{(z-p_{i})^{j}} \right] } = c_{n} = \lim_{ k \to \infty } g[k]
$$
They key reason this works is that all the poles are inside the open unit disk, except for the one at $z=1$.

## FVT for Step Response
Let $G[z] / P(s)$ be a real, rational, proper, and stable transfer function. Let $u[k]=\mathbb{1}[k] \, / \, u(t) =\mathbb{1}(t)$ be the input to $G[z] / P(s)$, and let $y[k] / y(t)$ be its output. Then the step response is:
$$
\begin{align}
\lim_{ k \to \infty } y[k]  & = G[1] \\[2ex] 
\lim_{ t \to \infty } y(t)  & = G(1)
\end{align}
$$

![[Final Value Theorem-20251023165423135.png]]

## ELEC 3200

The Final Value Theorem in control states that if all poles of $sY(s)$ are *strictly stable* or lie in the *open left half-plane*, i.e., have $\text{Re}(s)<0$, then
$$
y(\infty)=\lim_{ s \to \infty } sY(s)
$$

The more general mathematical form of the theorem states that if $\lim_{ t \to \infty }f(t)$ exists (it has a finite limit), then
$$
\lim_{ t \to \infty }f(t)=\lim_{ s \to 0 } sF(s)
$$
where $F(s)$ is the one-sided Laplace transform of $f(t)$.





