---
title: Jury Test
tags:
  - mte484
date: 2025-11-18
aliases: jury test
---

> [!definition] Definition: Schur
> A polynomial $\Delta[z]$ is Schur if $\text{roots}(\Delta) \subset \mathbb{D}$.

> [!theorem] Lemma 1
> Let $\Delta[z] = \sum_{i=0}^{n} c_{i}z^{i}$. If $\Delta[z]$ is Schur, then $| c_{n} | > | c_{0} |$.
> 
> This is a necessary but not sufficient condition. So $| c_{n} | > | c_{0} |$ does not necessarily mean a polynomial is Schur.

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

## Jury Test Algorithm
Given $R^{(i)}[z]$ for some $i \in \{ 0,1,\dots,n-1 \}$.

Check if $| c_{n} |>| c_{0} |$.
- If not, then $R^{(i)}[z]$ is not Schur (lemma 1).
    - Then $R^{(i-1)}[z]$ is not Schur (lemma 2).
    - Then, $R^{(0)}[z]=\Delta[z]$ is not Schur (lemma 2).
    - (presumably only made it to this step if $| c_{n} |>| c_{0} |$ for $R^{(i-1)}[z]$)
- If yes, set $R^{(i+1)}[z] = \frac{1}{z}\left( R^{(i)}[z] - \frac{c_{0}}{c_{n}}Q^{(i)}[z] \right)$ 
    - (repeat)
    - Stop with $R^{(n-1)}[z]$
        - If Schur, then $\Delta[z]$ is Schur
        - If not Schur, then $\Delta[z]$ is not Schur


### Example 10.1b
For a discrete time system, determine the range of $\tau$ that stabilizes the CL system.
$$
D_{2}[z] = \frac{2z-\frac{1}{4}}{z+0.5}, \quad  G_{2}[z]=\frac{z+0.5}{(z-e^{-2\tau})\left( z+\frac{1}{4} \right)}
$$
Then, the closed-loop polynomial is:
$$
\begin{align}
\Delta_{2}[z]  & = \left( 2z- \frac{1}{4} \right)(z+0.5) + (z+0.5)(z-e^{-2\tau})\left( z+\frac{1}{4} \right) \\[2ex]
     & = (z+0.5)\left( z^{2}+\left( \frac{9}{4}-e^{-2\tau} \right)z - \frac{1}{4}(1+e^{-2\tau}) \right)
\end{align}
$$
- The first term is stable (root at -0.5), but we need to check if the second term is Schur

The Jury Test:
$$
\Delta[z] = z^{2}+\left( \frac{9}{4}-e^{-2\tau} \right)z - \frac{1}{4}(1+e^{-2\tau})
$$
Then:
$$
\begin{align}
| c_{2}  |  & = 1 \\[2ex]
| c_{0}   |  & = \frac{1}{4}(1+e^{-2\tau}) < \frac{1}{2}
\end{align}
$$
Which gives $| c_{2} | > | c_{0} |$, since we must have $\tau>0$.

Then:

|              | $c_{2}$                      | $c_1$                    | $c_0$                        |
| ------------ | ---------------------------- | ------------------------ | ---------------------------- |
| $R^{(0)}[z]$ | $1$                          | $\frac{9}{4}-e^{-2\tau}$ | $-\frac{1}{4}(1+e^{-2\tau})$ |
| $Q^{(0)}[z]$ | $-\frac{1}{4}(1+e^{-2\tau})$ | $\frac{9}{4}-e^{-2\tau}$ | $1$                          |
|              |                              |                          |                              |

which gives
$$
\frac{c_{0}}{c_{n}} = -\frac{1}{4}(1+e^{-2\tau})
$$
Then:
$$
\begin{align}
R^{(1)}[z] = 1-\left( \frac{1}{4}(1+e^{-2\tau}) \right)^{2} \left( \frac{9}{4}-e^{-2\tau} \right)\left( 1+\frac{1}{4}(1+e^{-2\tau}) \right)
\end{align}
$$
so:
$$
\begin{align}
| c_{1} | & =  \Bigg| \left( 1+\frac{1}{4}(1+e^{-2\tau}) \right) \left( 1-\frac{1}{4}(1+e^{-2\tau}) \right) \Bigg| \\[2ex]
| c_{0} |  & = \Bigg| \left( 1+\frac{1}{4}(1+e^{-2\tau}) \right) \left( \frac{9}{4}-e^{-2\tau} \right) \Bigg|
\end{align}
$$
to get $| [c_{1}] |>| c_{0} |$, we need
$$
\begin{align}
1-\frac{1}{4}(1+e^{-2\tau})  & > \frac{9}{4} -e^{-2\tau} \\
3-e^{-2\tau} & >9-4e^{-2\tau} \\
3e^{-2\tau}  & > 6 \\
e^{-2\tau}  & > 2
\end{align}
$$
This is not possible; no value of $T>0$ would allow the system to be CL stable.

Jury Table:


> [!theorem] Theorem: Jury Test
> Assume $c_{n}>0$ (if not, use $-\Delta[z]$).
> 
> Then, $\Delta[z]$ is Schur if and only if
> $$
> \begin{align}
> c_{n}  & > 0 \\
> b_{n} & >0 \\
> d_{n} & >0 \\
>  & \vdots \\
> e_{n} & >0 \\
> \end{align}
> $$
> We either check $| e_{n} |>| e_{n-1} |$ or go to $R^{n}[z]$.


