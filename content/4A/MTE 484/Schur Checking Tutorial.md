---
title: Schur Checking Tutorial
tags:
  - mte484
date: 2025-12-06
aliases: schur checking tutorial
---





> [!theorem] Boundary Crossing Lemma
> Let $\lambda \in  [0,1]$ and $\Delta \lambda[z] = \Delta_{1}[z] - \lambda\Delta_{2}[z]$. If $\Delta_{1}[z]$ is Schur and $\Delta_{1}[z]-\Delta_{2}[z]$ is not Schur (or vice versa), then $\exists \, \lambda^{\ast } \in [0,1]$  such that $\Delta \lambda^{\ast }[z]$ has a root on the unit circle.

Let $\Delta[z] = \sum_{i=0}^{n} c_{i}z^{i}$. Let $Q[z]=\sum_{i=0}^{n}c_{n-i}z^{i}$.

- Example: $\Delta[z] = 5z^{3}+4z^{2}+1$. Then
$$
Q[z] = z^{3} +0z^{2} + 4z+5
$$

Let
$$
\begin{align}
R[z]  & = \frac{1}{z} \left( \Delta[z]- \frac{c_{0}}{c_{n}}Q[z] \right) \\[2ex]
     & = \frac{1}{z}\left( \sum_{i=0}^{n}c_{i}z^{i}-\frac{c_{0}}{c_{n}} \sum_{i=0}^{n} c_{n-i}z^{i} \right) \\[2ex] 
     &  = \frac{1}{z}\left( \sum_{i=0}^{n} \left( c_{i} - \frac{c_{0}}{c_{n}} c_{n-i} \right)z^{i} \right) \\[2ex] 
     & = \frac{1}{z}\left( \sum_{i=1}^{n} \left( c_{i} - \frac{c_{0}}{c_{n}}c_{n-i} \right) z^{i}  \right) \\[2ex] 
     & = \frac{1}{z}\left( z \sum_{i=0}^{n-1} \left( c_{i+1} - \frac{c_{0}}{c_{n}}c_{n-i-1} \right)z^{i} \right) \\[2ex] 
     & = \sum_{i=0}^{n-1} \left( c_{i+1} - \frac{c_{0}}{c_{n}}c_{n-i-1} \right)z^{i}
\end{align}
$$
- Line 3-4: For $i=0$ we get $c_{0} - \frac{c_{0}}{\cancel{ c_{n} }}\cancel{ c_{n} }=0$.


> [!theorem] Lemma 2
> Suppose $| c_{n} | > | c_{0} |$. Then $\Delta[z]$ is Schur $\Leftrightarrow$ $R[z]$ is Schur.

Define $R^{(0)}[z] := \Delta[z]$:
$$
\begin{align}
 & R^{(i+1)}[z] = \frac{1}{z}\left( R^{(i)}[z] - \frac{c_{0}}{c_{n}}Q^{(i)}[z] \right) \\[2ex]
 & R^{(0)}[z] \quad \longrightarrow \quad  R^{(1)}[z]\quad \longrightarrow \quad R^{(2)}[z] \quad \longrightarrow \quad \dots \quad \longrightarrow \quad R^{n-1}[z]
\end{align}
$$
- degree $n$, $n-1$, $n-2$, …, 1


For degree 1, we have $c_{1}z+c_{0}$, which has a root at $-\frac{c_{0}}{c_{1}}$. Then:
$$
\frac{| c_{0} |}{| c_{n} |} < 1 \quad  (\text{aka Schur}) \quad  \quad \Longleftrightarrow \quad \quad | c_{n} | > | c_{0} |
$$


