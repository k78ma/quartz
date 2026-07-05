---
title: Sept 23 Tutorial
tags:
  - mte484
date: 2025-09-23
aliases: sept 23 tutorial
---
Proofs:
- Given
- WTS
- Reason

> [!problem]
> Suppose $G[z]$ is rational, proper, and BIBO stable. For some fixed positive integer $n$, show $(G[z])^{n}$ is stable.

Given: $G[z]$ is real, rational, proper, BIBO stable.
WTS: $(G[z])^{n}$ is stable.

Strategy A:
- $G[z]$ is real, rational, proper, and BIBO stable
- $\implies G[z]$ is stable
    - *(theorem from class)*
- Let $s$ be the set of poles of $G[z]$
- $\implies G[z] = \frac{b_{m}z ^{m} + \dots+b_{1}z+b_{0}}{(z-p_{1})(z-p_{2})\dots(z-p_{j})}$ with $\{ p_{1}, \dots p_{j} \}\in s$
    - *(since $G[z]$ is rational)*
- $\implies$ Since $G[z]$ is stable, the $s$ lies on the open unit disk
    - *(definition of stability)*
- $\implies (G[z])^{n} = \frac{(b_{m}s ^{m}+\dots+b_{1}s+b_{0})^{n}}{(z-p_{1})^{n}(z-p_{2})^{n}\dots(z-p_{j})^{n}}$
    - $\left( \frac{a}{b} \right)^{n} = \frac{a^{n}}{b^{n}}$
- $\implies$ From this expression, we see the multiplicity of the poles above, but pole locations have not changed
- Thus, $\text{poles}(G[z])^{n} \subseteq s$
- $\implies \text{poles}(G[z])^{n}$ lie in open unit disk
    - *(since s lies in the open unit disk)*
- $\implies (G[z])^{n}$ is stable
    - *(definition of stability)*

Strategy B:
- $G[z]$ is real, rational, proper, and BIBO stable
- Let $u[k]$ be bounded. Say $| u[k] | \leq \overline{u} \,\, \forall \, \,k \geq 0$ for some $\overline{u} \geq 0$.
- Let $y[k] = (g^{n} \ast u)[k]$
- We have:
$$
\begin{align}
| y[k] |  & = \Bigg| \sum_{m=0}^{k}(g[m])^{n} u[k-m] \Bigg| \quad  \quad \text{[discrete convolution]} \\[2ex] 
     & = \Bigg| \sum_{m=0}^{k}(g[m])^{n-1}g[m] u[k-m] \Bigg| \quad  \quad [a^{n} = a^{n-1}a] \\[2ex] 
      & \leq  \sum_{m=0}^{k} \Big|(g[m])^{n-1}g[m] u[k-m] \Big| \quad  \quad [\text{triangle inequality}] \\[2ex] 
     & = \sum_{m=0}^{k} \Big|(g[m])^{n-1} \Big| \cdot  \Big| g[m] u[k-m] \Big | \quad  \quad [| ab | = | a || b |] 
\end{align}
$$

## Steady-State Value Example
What is the steady-state value of $Y[k]$ when $r[k]=5\cdot \mathbb{1}[k]$, $d[k] = 0.1^{k}$?
$$
D[z] = 1, \quad  G[z] = \frac{0.25(z+1)}{(z-1)}
$$
We have:
$$
T_{ry} = \frac{0.25(z+1)}{1.25z-0.75}
$$
$$
T_{dy} = \frac{0.25(z+1)}{1.25-0.75}
$$
So:
$$
\begin{align}
Y[z] = T_{ry}R[z] + T_{dy}d[z] \\[2ex]
Yr[z] = \frac{1.25z(z+1)}{(1.25z+0.75)(z-1)}
\end{align}
$$
Case b:
$$
\lim_{ k \to \infty } y_{r}[k] = \lim_{ z \to 1 } (z-1) \cdot  1.25
$$