---
title: IOP with SPA
tags:
  - mte484
date: 2025-10-09
aliases: iop with spa
---
Recall that the [[Input-Output Parameterization|IOP]] equations are:
$$
\begin{align}
X +GW = 1 \\
V+GX = 0
\end{align}
$$
Then, we can write a [[Simple Pole Approximation|simple pole approximation]] of $W[z]$ as:
$$
W[z]=\sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}}
$$
We can also write a plant $G[z]$ with simple poles as:
$$
G[z] = \sum_{k=1}^{n} \frac{c_{k}}{z-q_{k}}
$$
where we split its poles into stable and unstable components $\{ q_{k} \}_{k=1}^{\hat{n}}$ and $\{ q_{k} \}_{k=\hat{n}+1}^{n}$.

With that setting, we can write $X$ as partial fraction decomposition
$$
X[z] = 1+ \sum_{i=1}^{m} \frac{x_{i}}{z-p_{i}} + \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{z-q_{k}}
$$
We can then write the first IOP equation $X+GW = 1$ as:
$$
\begin{align}
x_{i}  & = -\alpha_{i} w_{i} \,\, \forall \, \,  i \in  \{ 1,\dots,m \} \\[2ex]
\hat{x}_{k}  & = \sum_{i=1}^{m} -\beta_{k,i} w_{i} \,\, \forall \, \,  k \in   \{ 1,\dots,\hat{n} \} \\[2ex]
0  & =  \sum_{i=1}^{m}-\beta_{k,1}w_{i} \,\, \forall \, \,  k \in  \{ \hat{n}+1,\dots,n \} 
\end{align}
$$
The second IOP equation can in turn be written as:
$$
\begin{align}
0 = -c_{j} + \sum_{i=1}^{m} -\gamma_{j,i} x_{i} + \sum_{k=1}^{\hat{n}} - \hat{\gamma}_{j,k}\hat{x}_{k} \quad  \forall \, \, j \in  \{ \hat{n}+1,n \} 
\end{align}
$$
With this formulation, we can also define [[Specs for Control Design]].

## Vector Form
Define
$$
w := \begin{bmatrix}
w_{1} \\
\vdots \\
w_{m}
\end{bmatrix}, \quad x:= \begin{bmatrix}
x_{1} \\
\vdots \\
x_{m}
\end{bmatrix}, \quad  \hat{x}:=\begin{bmatrix}
\hat{x}_{1} \\
\vdots \\
\hat{x}_{\hat{n}}
\end{bmatrix}
$$
where $w$ is the coefficients in our SPA form of $W$, and similarly $x, \hat{x}$ are the coefficients in $X.$