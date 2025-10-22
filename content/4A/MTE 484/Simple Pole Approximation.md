---
title: Simple Pole Approximation
tags:
  - mte484
date: 2025-09-26
aliases:
  - simple pole approximation
  - SPA
---
The [[Input-Output Parameterization|IOP]] equations (i)-(iii) are hard to solve because $W[z], X[z], V[z]$ lie in an infinite-dimensional vector space. To make the problem tractable, we make a finite dimensional approximation of this infinite dimensional space. In particular, we choose the simple pole approximation (SPA).

We choose $\{ p_{i} \}^{m}_{i=1}$  as part of our control design. We approximate:
$$
W[z] = \sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}}
$$
- $\{ w_{i} \}_{i=1}^{m}$ are variable coefficients in $\mathbb{C}$

Assumption: Our plant $G[z]$ has no repeated plots. (But this doesn't actually matter; we can have multiple poles, it just makes it more messy.)

Then, we have
$$
G[z] = \sum_{k=1}^{n} \frac{c_{k}}{z-q_{k}}
$$
- $\{ q_{k} \}_{k=1}^{n}$ are the plant poles and $\{ c_{k} \}_{k=1}^{n}$ are the coefficients in $\mathbb{C}$. (These are given, since the plant is known.)

Then, IOP equation (i) becomes:
$$
\begin{align}
X[z]  & + G[z]W[z]  = 1 \\[2ex]
X[z]  & = 1 - G[z]W[z]  \\[2ex] 
\end{align}
$$
Then, we can write $G[z]W[z]$
$$
\begin{align}
G[z]W[z]& = \left( \sum_{i=1}^{m} \frac{w_{i}}{z-p_{i}} \right) \left( \sum_{k=1}^{n} \frac{c_{k}}{z-q_{k}}  \right) \\[2ex] 
     & = \sum_{i=1}^{m} \sum_{k=1}^{n} \frac{c_{k}w_{i}}{(z-q_{k})(z-p_{i})} \\[2ex] 
     & = \sum_{i=1}^{m} \sum_{k=1}^{n} c_{k}w_{i} \left( \frac{1}{p_{i}-q_{k}} \frac{1}{z-p_{i}} + \frac{1}{q_{k}-p_{i}} \frac{1}{z-q_{k}} \right) \\[2ex] 
     & = \sum_{i=1}^{m} \underbrace{ \left( \sum_{k =1}^{n} \frac{c_{k}}{p_{i}-q_{k}} \right) }_{ =: \, \alpha_{i} (\text{not a function of }k)} w_{i} \frac{1}{z-p_{i}}  + \sum_{k=1}^{n} \left( \sum_{i=1}^{m} \underbrace{ \frac{c_{k}}{q_{k}-p_{i}} }_{ := \, \beta_{k,i} } w_{i} \right) \frac{1}{z-q_{k}} \\[2ex] 
     & = \sum_{i=1}^{m} \alpha_{i}w_{i} \frac{1}{z-p_{i}} + \sum_{k=1}^{n} \left( \sum_{i=1}^{m}\beta_{k,i} w_{i}\right) \frac{1}{z-q_{k}}
\end{align}
$$

- Note that we can write $\frac{1}{(z-p)(z-q)} = \frac{1}{p-q} \frac{1}{z-p} + \frac{1}{q-p} \frac{1}{z-q}$ 

Substituting back:
$$
\begin{align}
X[z] = 1 - \sum_{i=1}^{m} \alpha_{i}w_{i} \frac{1}{z-p_{i}} - \sum_{k=1}^{n} \left( \sum_{i=1}^{m}\beta_{k,i} w_{i}\right) \frac{1}{z-q_{k}}
\end{align}
$$
For our $X[z]=1-G[z]W[z]$, what if $G[z]$ has an unstable pole? Will that also be a pole of $X[z]$? The coefficient of each unstable pole in $X[z]$ must be zero for $X[z]$ to be stable.

We can then re-order the poles of the plant $G[z]$:
$$
\{ q_{k} \}_{k=1}^{n} = \underbrace{ \{ q_{k} \}_{k=1}^{\hat{n}} }_{ \text{stable poles} } \cup \underbrace{ \{ q_{k} \}_{\hat{n}+1}^{n} }_{ \text{unstable poles} }
$$
Then, the poles of $X$ are contained in
$$
\text{poles}(X) \subset \{ p_{i} \}_{i=1}^{m} \cup \{ q_{k} \}_{k=1}^{\hat{n}}
$$
because $X$ is stable.

So, we can write
$$
X[z] = 1+ \sum_{i=1}^{m} \frac{x_{i}}{z-p_{i}} + \sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{z-q_{k}}
$$
where $\{ x_{i} \}_{i=1}^{m}$ and $\{ \hat{x}_{k} \}_{k=1}^{\hat{n}}$ are variable coefficients in $\mathbb{C}$.

Matching coefficients of the above equation with $X[z]=1-G[z]W[z]$ gives us:
$$
\begin{align}
x_{i}  & = -\alpha_{i} w_{i} \,\, \forall \, \,  i \in  \{ 1,\dots,m \} \\[2ex]
\hat{x}_{k}  & = \sum_{i=1}^{m} -\beta_{k,i} w_{i} \,\, \forall \, \,  k \in   \{ 1,\dots,\hat{n} \} \\[2ex]
0  & =  \sum_{i=1}^{m}-\beta_{k,1}w_{i} \,\, \forall \, \,  k \in  \{ \hat{n}+1,\dots,n \} \quad  \quad (\ast  )
\end{align}
$$
- The final equation ensures all unstable poles have zero coefficients.
- These 3 are essentially another representation of IOP eq. (i)

IOP equation (ii):
$$
V = -GX
$$
Since $X$ only contains simple poles like $W$, we can u se the same procedure as above for calculating $GW$ to find $GX$ and then $V$.

However, as $D=\frac{W}{X}$ and $T_{ry}=1-X$, we do not need $V$ to satisfy our desired specs or recover our controller. We just need to ensure that $V$ is stable.

Thus, we just reuse the result from Eq. ($\ast \ast$) applied to $V$ to ensure all coefficients of the unstable poles in $V$ are zero:
$$
\begin{align}
0 = -c_{j} + \sum_{i=1}^{m} -\gamma_{j,i} x_{i} + \sum_{k=1}^{\hat{n}} - \hat{\gamma}_{j,k}\hat{x}_{k} \quad  \forall \, \, j \in  \{ \hat{n}+1,n \} \quad \quad   (\ast  \ast  )
\end{align}
$$
- $\gamma_{j,i} = \frac{c_{j}}{q_{j}-p_{i}}$, 
- $\hat{\gamma}_{j,k}=\frac{c_{j}}{q_{j}-q_{k}}$

The first sum corresponds to the poles $\{ p_{i} \}_{i=1}^{m}$ in $X$, the second sum to the poles $\{ q_{k} \}_{k=1}^{\hat{n}}$ in $X$, and the $-c_{j}$ term comes from the $1$ in $X$ that is not in $W$.

