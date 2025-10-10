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

Define
$$
\alpha := \begin{bmatrix}
\alpha_{1}  & \dots  & 0 \\
 & \ddots  &  \\
0 & \dots & \alpha_{m}
\end{bmatrix}
$$
where the diagonal terms are $\alpha_{1}, \dots, \alpha_{m}$ and everything else is $0$.

Define
$$
\beta := \begin{bmatrix}
\beta_{1,1}  &  \dots  &  \beta_{1,m} \\
\vdots &  & \vdots  \\
\beta_{\hat{n},1}  & \dots & \beta_{\hat{n},m} \\
\vdots  &  & \vdots \\
\beta_{n,1} & \dots & \beta_{n,m}
\end{bmatrix}
$$
and
$$
\gamma := \begin{bmatrix}
\gamma_{\hat{n}+1,1}  &  \dots  &  \gamma_{\hat{n}+1 ,m} \\
\vdots &  & \vdots  \\
\gamma_{n,1} & \dots & \gamma_{n,m}
\end{bmatrix}, \quad \hat{\gamma} := \begin{bmatrix}
\hat{\gamma}_{\hat{n}+1,1}  &  \dots  &  \hat{\gamma}_{\hat{n}+1 ,m} \\
\vdots &  & \vdots  \\
\hat{\gamma}_{n,1} & \dots & \hat{\gamma}_{n,m}
\end{bmatrix}
$$

As an example, if we had $n=3, \hat{n}=1, m=3$:
$$
\gamma := \begin{bmatrix}
\gamma_{2,1}  & \gamma_{2,2} & \gamma_{2,3} \\
\gamma_{3,1} & \gamma_{3,2}  & \gamma_{3,3}
\end{bmatrix}
$$

Now we can re-express our IOP equations in terms of these vectors and matrices. Notice that $\alpha, \beta, \gamma, \hat{\gamma}$ are all constants. The only variables are $w,x,\hat{x}$. Re-arranging our above equations:
$$
\begin{align}
x_{i} +\alpha_{i} w_{i} & = 0 \quad \quad  \forall \, \,  i \in  \{ 1,\dots,m \} \\[2ex]
\hat{x}_{k} +\sum_{i=1}^{m} \beta_{k,i} w_{i} & = 0  \quad \quad \forall \, \,  k \in   \{ 1,\dots,\hat{n} \}\\[2ex]
\sum_{i=1}^{m}\beta_{k,1}w_{i}  & = 0  \quad  \quad  \forall \, \,  k \in  \{ \hat{n}+1,\dots,n \}   \\[2ex] 
\sum_{i=1}^{m} \gamma_{j,i} x_{i} + \sum_{k=1}^{\hat{n}}  \hat{\gamma}_{j,k}\hat{x}_{k}  & = -c_{j}  \quad \quad   \forall \, \, j \in  \{ \hat{n}+1,n \} 
\end{align}
$$
Converting to matrix form:

![[IOP with SPA-20251009231627886.png]]

So we have:
$$
\begin{align}
\begin{bmatrix}
\alpha & I & 0 \\
\beta & 0 & I \\
\vdots & 0 & 0 \\
0 & \gamma & \hat{\gamma}
\end{bmatrix} \begin{bmatrix}
w \\
x \\
\hat{x} 
\end{bmatrix}  & = \begin{bmatrix}
0 \\
0 \\
0 \\
-c \,[\hat{n}+1:n]
\end{bmatrix} \\[2ex] 
A\begin{bmatrix}
w \\
x \\
\hat{x}
\end{bmatrix} & =b

\end{align}
$$
