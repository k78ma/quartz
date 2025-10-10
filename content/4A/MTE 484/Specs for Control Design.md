---
title: Specs for Control Design
tags:
  - mte484
date: 2025-09-29
aliases: specs for control design
---
How do we design controllers to meet [[Feedback System Performance Specifications|performance specifications]] using [[Input-Output Parameterization|IOP]]/[[Simple Pole Approximation|SPA]]?

### 1. Closed-loop stability
Closed loop stability $\Longleftrightarrow$ $W, X, V$ stable $\implies$ already guaranteed by choosing $\{ p_{i} \}_{i=1}^{m}\subset \mathbb{D}$ and satisfying Equations ($\ast$) and ($\ast \ast$) from [[Simple Pole Approximation]].

### 2. Steady-state error 
($e_{ss}$) is given by
$$
\begin{align}
    e_{ss} = T_{re}[1] & =X[1] \quad  \quad  [\text{IOP theorem part b}] \\[2ex]
     & = 1+ \sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}}+\sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}}
     \end{align}
$$
The $p_{i}$ terms are fixed be

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

Then the step response of a simple pole:
$$
Y[z]= \frac{1}{z-p} \underbrace{ \frac{z}{z-1} }_{ \text{unit step} }  = \frac{1}{1-p}\left( \frac{1}{z-1} -p \frac{1}{z} \frac{z}{z-p} \right)
$$
- Partial fraction decomposition

### 3. Limit on control effort
$$
\begin{align}
  u[k] \leq C \,\, \forall \, \, k>0 &  \implies  \text{step}(T_{ru}) [k] \leq C \quad \,\, \forall \, \, k\geq 0 \\[2ex] 
 & \implies \text{step}(W)[k] \leq C \quad  \,\, \forall \, \, k \geq 0 \\[2ex]
 & \Longleftrightarrow \text{step}\left( \sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}} \right)[k] \leq C \quad \,\, \forall \, \, k\geq 0 \\[2ex]
 & \Longleftrightarrow \sum_{i=1}^{m}w_{i} \,\,\text{step}\left( \frac{1}{z-p_{i}}  \right)[k] \leq C \\[2ex] 
& \Longleftrightarrow \sum_{i=1}^{m}  \frac{1-p_{i}^{k}}{1-p_{i}} w_{i} \leq C \quad \,\, \forall \, \, k\geq 0
\end{align}
$$

Then, we have
$$
\begin{align}
e=r-y &  \implies y=r-e  \\[2ex]
 & \implies Y=R-E = R-T_{re}R = (1-T_{re})R \\
\end{align}
$$
- $T_{ry}=1-T_{re} = 1-X$

### 4. Overshoot
We want some $\%\text{OS}\leq C$.

Then, we have
$$
\begin{align}
\text{step}(T_{ry})[j]  & \leq (1+C)y_{ss} \\
     & =(1+C)(1-e_{ss}) \\
     & =(1+C)(1-X[1])
\end{align}
$$
which means
$$
\underset{j\geq 0}{\operatorname{max}}\left( -\sum_{i=1}^{m} \frac{1-p_{i}^{j}}{1-p_{i}}x_{i} - \sum_{k=1}^{\hat{n}} \frac{1-q_{k}^{j}}{1-q_{k}} \hat{x}_{k} \right) \leq(1+C)\left( -\sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}} - \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}} \right)
$$

### 5. Settling Time (within 2%)
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


