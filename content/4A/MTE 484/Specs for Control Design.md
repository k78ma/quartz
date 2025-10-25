---
title: Specs for Control Design
tags:
  - mte484
date: 2025-09-29
aliases: specs for control design
---
How do we design controllers to meet [[Feedback System Performance Specifications|performance specifications]] using [[Input-Output Parameterization|IOP]]/[[Simple Pole Approximation|SPA]]?

## Closed-loop stability
Closed loop stability $\Longleftrightarrow$ $W, X, V$ stable $\implies$ already guaranteed by choosing $\{ p_{i} \}_{i=1}^{m}\subset \mathbb{D}$ and satisfying Equations ($\ast$) and ($\ast \ast$) from [[Simple Pole Approximation]].

## Steady-state error 
($e_{ss}$) is given by
$$
\begin{align}
    e_{ss}  & = T_{re}[1]  =X[1]  &  [\text{IOP theorem part b, corollary to FVT}] \\[2ex]
     & = 1+ \sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}}+\sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}}
     \end{align}
$$
The $p_{i}$ terms are fixed because we choose them in advance and $q_{k}$ are fixed because they are from the plant.

**Case 1:** We want the steady state error to be zero such that $e_{ss}=0$
$$
e_{ss}=1+\sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}} + \frac{\sum_{k=1}^{\hat{n}}\hat{x}_{k}}{1-q_{k}} = 0
$$
**Case 2:** We want the steady-state error to be bounded such that $| e_{ss} |\leq C$
$$
\begin{align}
e_{ss} &  \leq C \\
e_{ss}  & \geq -C
\end{align}
$$
### Vector Form
We have:
$$
\begin{align}
e_{ss} & =1+ \sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}}+\sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}}= 0 \\[2ex] 
     & =1+ \underbrace{ \begin{bmatrix}
\frac{1}{1-p_{1}} \dots \frac{1}{1-p_{m} } & \frac{1}{1-q_{1}} & \dots & \frac{1}{1-q_{\hat{n}}}
\end{bmatrix} }_{ \text{Steady state} } \begin{bmatrix}
x_{1} \\
\vdots \\
x_{m} \\
\hat{x}_{1} \\
\vdots \\
\hat{x}_{\hat{n}}
\end{bmatrix} \\[2ex] 
     & = \boxed{1+ \text{Steady state} \begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}}
\end{align}
$$
which we can set to $=0$, $\leq C$, $\geq-C$, etc.

## Limit on control effort
$$
\begin{align}
  u[k] \leq C \quad  \forall   k>0  \,\,  &  \implies  \text{step}(T_{ru}) [k] \leq C  &  \forall \, \, k\geq 0 \\[2ex] 
 & \implies \text{step}(W)[k] \leq C  &  \forall \, \, k \geq 0 \\[2ex]
 & \Longleftrightarrow \text{step}\left( \sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}} \right)[k] \leq C  &  \forall \, \, k\geq 0 \\[2ex]
 & \Longleftrightarrow \sum_{i=1}^{m}w_{i} \,\,\text{step}\left( \frac{1}{z-p_{i}}  \right)[k] \leq C \\[2ex] 
& \Longleftrightarrow \sum_{i=1}^{m}  \frac{1-p_{i}^{k}}{1-p_{i}} w_{i} \leq C  &  \forall \, \, k\geq 0
\end{align}
$$

> [!NOTE] $T_{ry}$
> Note we have
> $$
> \begin{align}
> e=r-y &  \implies y=r-e  \\[2ex]
>  & \implies Y=R-E = R-T_{re}R = (1-T_{re})R \\
> \end{align}
> $$
> Then:
> $$
> T_{ry}=\frac{Y}{R}=1-T_{re} = 1-X
> $$

### Vector form
We are consider the time horizon where $k\geq 0$. There are infinitely many such time steps. This makes the computation hard to do on a computer. At the same time, for a practical stable system, the step response will settle down to a steady-state and we don't really need to keep enforcing this limit. Thus, we set some practical limit $K>0$ to give us a finite number of timesteps.
$$
\underset{0<k\leq K}{\operatorname{max}}\left( \sum_{i=1}^{K} \frac{1-p_{i}^{k}}{1-p_{i}}w_{i} \right) \leq C
$$
Supposing some point in time $k$, we have
$$
u[k]=\text{step}(T_{ru})[k] =  \sum_{i=1}^{m} \frac{1-p_{i}^{k}}{1-p_{i}}w_{i} = \begin{bmatrix}
\frac{1-p_{1}^{k}}{1-p_{1}}  & \dots & \frac{1-p_{m}^{k}}{1-p_{m}}
\end{bmatrix} \begin{bmatrix}
w_{1} \\
\vdots \\
w_{m}
\end{bmatrix}
$$
Extending this to the full time horizon $0 < k \leq K$:
$$
\begin{align}
\begin{bmatrix}
\text{step}(T_{ru})[1] \\
\vdots \\
\text{step}(T_{ru})[K]
\end{bmatrix} = \underbrace{ \begin{bmatrix}
\frac{1-p_{1}^{1}}{1-p_{1}}  & \dots & \frac{1-p_{m}^{1}}{1-p_{m}}  \\
 & \ddots  \\
\frac{1-p_{1}^{k}}{1-p_{1}}  & \dots & \frac{1-p_{m}^{k}}{1-p_{m}} 
\end{bmatrix} }_{ \text{step\_ru} } \begin{bmatrix}
w_{1} \\
\vdots \\
w_{m}
\end{bmatrix}
\end{align}
$$
We can then write this constraint as:
$$
\boxed{\text{max}(\text{step\_ru}\ast  w) \leq C}
$$

## Overshoot
We want some $\%\text{OS}\leq C$.

Then, we have
$$
\begin{align}
\text{step}(T_{ry})[j]  & \leq (1+C)y_{ss} \\
     & =(1+C)(1-e_{ss}) \\
     & =(1+C)(1-X[1])
\end{align}
$$
Note that  $T_{ry}=1-T_{re} = 1-X$. Then, we can write the above as
$$
\underset{j\geq 0}{\operatorname{max}}\left( -\sum_{i=1}^{m} \frac{1-p_{i}^{j}}{1-p_{i}}x_{i} - \sum_{k=1}^{\hat{n}} \frac{1-q_{k}^{j}}{1-q_{k}} \hat{x}_{k} \right) \leq(1+C)\left( -\sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}} - \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}} \right)
$$

### Vector Form
Similar to control effort, we can write
$$
\begin{align}
\begin{bmatrix}
\text{step}(T_{ry})[1] \\
\vdots \\
\text{step}(T_{ry})[K]
\end{bmatrix} = \underbrace{ \begin{bmatrix}
-\frac{1-p_{1}^{1}}{1-p_{1}}  & \dots & -\frac{1-p_{m}^{1}}{1-p_{m}}  & - \frac{1-q_{1}^{1}}{1-q^{1}}  & \dots  & - \frac{1-q^{1}_{\hat{n}}}{1-q_{\hat{n}}}  \\
 & \ddots  \\
\frac{1-p_{1}^{k}}{1-p_{1}}  & \dots & \frac{1-p_{m}^{k}}{1-p_{m}} &  - \frac{1-q_{k}^{1}}{1-q^{1}}  & \dots  & - \frac{1-q^{k}_{\hat{n}}}{1-q_{\hat{n}}}
\end{bmatrix} }_{ \text{step\_ry} } \begin{bmatrix}
x_{1} \\
\vdots \\
x_{m}  \\
\hat{x}_{1} \\
\vdots \\
\hat{x}_{\hat{n}}
\end{bmatrix}
\end{align}
$$
We can then write this as:
$$
\boxed{ \text{max}\left(\text{step\_{ry}}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \leq (1+C)\left(-\text{steady\_{state}} \begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right)  } 
$$

## Settling Time (within 2%)
Let $T$ be the sample time and let $\hat{j}=\text{min}\{ j\, : \,jT \geq C \}$.

Then:
$$
\begin{align}
\text{step}(T_{ry})[j] \leq 1.02y_{ss} \\
\text{step}(T_{ry})[j] \geq 1.02y_{ss} \\
\end{align}
$$
- where $T_{ry} = 1-X$

Thus, we have
$$
\begin{align}
\underset{j\geq \hat{j}}{\operatorname{max}} (\text{step}(T_{ry}))  & \leq 1.02y_{ss} \\[2ex] 
\underset{j\geq \hat{j}}{\operatorname{max}}\left( -\sum_{i=1}^{m} \frac{1-p_{i}^{j}}{1-p_{i}}x_{i} - \sum_{k=1}^{\hat{n}} \frac{1-q_{k}^{j}}{1-q_{k}} \hat{x}_{k} \right)  & \leq 1.02\left( -\sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}} - \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}} \right)
\end{align}
$$
and also
$$
\begin{align}
\underset{j\geq \hat{j}}{\operatorname{min}} (\text{step}(T_{ry}))  & \geq 0.98y_{ss} \\[2ex] 
\underset{j\geq \hat{j}}{\operatorname{min}}\left( -\sum_{i=1}^{m} \frac{1-p_{i}^{j}}{1-p_{i}}x_{i} - \sum_{k=1}^{\hat{n}} \frac{1-q_{k}^{j}}{1-q_{k}} \hat{x}_{k} \right)  & \geq 0.98\left( -\sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}} - \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}} \right)
\end{align}
$$

### Vector Form
We can borrow our result from the overshoot spec:
$$
\boxed{
\begin{align}
\text{max}\left(\text{step\_ry}(\hat{j}:\text{end, :})\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \leq 1.02\left(-\text{steady state}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \\[2ex] 
\text{min}\left(\text{step\_ry}(\hat{j}:\text{end, :})\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right) \geq 0.98\left(-\text{steady state}\begin{bmatrix}
x \\
\hat{x}
\end{bmatrix}\right)
\end{align}
}
$$