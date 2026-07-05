---
title: Jury Test
tags:
  - mte484
date: 2025-12-06
aliases:
  - Jury test
  - Jury table
---
**Goal:** Find a lower order polynomial for testing if $\Delta$ is Schur, since lower order is easier to check.

**Approach:** Cancel out $c_{0}$ from $\Delta[z]$ and then divide by $z$ to reduce the order by at least one.

First, let us define:
$$
\begin{align}
\Delta[z] &  = \sum_{i=0}^{n}c_{i}z^{i} \\[2ex] 
Q[z]  & = \sum_{i=0}^{n} c_{n-i}z^{i}
\end{align}
$$
For example:
$$
\begin{align}
\Delta[z] & = 2z^{2}+3z+4 \\
Q[z] & =4z^{2}+3z+4
\end{align}
$$

We can do our aforementioned goal of reducing the order by at least one. To do so, we take the difference between $\Delta[z]$ and a scaled version of $Q[z]$:
$$
\Delta[z] - \frac{c_{0}}{c_{n}}Q[z] = \sum_{i=0}^{n}\left( c_{i}- \frac{c_{0}}{c_{n}}c_{n-i} \right)z^{i}
$$
At $i=0$, we have $c_{0}-\frac{c_{0}}{c_{n}}=0$, so the constant term is zero. Thus,
$$
\Delta[z] - \frac{c_{0}}{c_{n}}Q[z] = \sum_{i=1}^{n}\left( c_{i}-\frac{c_{0}}{c_{n}}c_{n-i} \right) z_{i} = z \underbrace{ \sum_{i=0}^{n-1} \left( c_{i+1}-\frac{c_{0}}{c_{n}}c_{n-i-1} \right)z^{i} }_{ =:R[z] }
$$
So:
$$
R[z]= \frac{1}{z}\left( \Delta[z] - \frac{c_{0}}{c_{n}} Q[z] \right) = \sum_{i=0}^{n-1} \left( c_{i+1}- \frac{c_{0}}{c_{n}}c_{n-i-1} \right)z^{i}
$$
Thus, $R[z]$ is order $n-1$.


> [!theorem] Lemma
> Suppose $\left| c_{n} \right|>\left| c_{0} \right|$. Then $\Delta[z]$ is Schur if and only if $R[z]$ is Schur.

Then, define $R_{0}[z]=\Delta[z]$. We create a sequence by repeated application of this lemma
$$
R^{0}[z] \to R^{1}[z] \to R^{2}[z] \to \dots \to R^{(n-1)}[z]
$$
where the order is decreasing:
$$
n\to n-1 \to n-2 \to \dots\to 1
$$
We stop when we reach the order 1 polynomial $R^{(n-1)}[z]$. This has the form $c_{1}z+c_{0}$, so it only has one root at $z= - \frac{c_{0}}{c_{1}}$.

This is equivalent to saying
$$
R^{(n-1)}[z] \text{ is Schur} \quad  \Longleftrightarrow  \quad \left| z \right| = \frac{\left| c_{0} \right| }{\left| c_{1} \right| } < 1 \quad  \Longleftrightarrow  \quad \left| c_{n} \right| =\left| c_{1} \right| > \left| c_{0} \right| 
$$
- For the special case of a 1st order polynomial, the polynomial is Schur if and only if $\left| c_{n} \right|>\left| c_{0} \right|$. (This makes sense as the root is at $-\frac{c_{0}}{c_{1}}$ so $c_{0}$ needs to be smaller than $c_{1}$ for it to be in the unit circle).

## Jury Test Algorithm
Given $R^{(i)}[z]$ for some $i \in \{ 0,1,\dots,n-1 \}$.

Check if $| c_{n} |>| c_{0} |$.
- If not, then $R^{(i)}[z]$ is not Schur (lemma from class).
    - Then $R^{(i-1)}[z]$ is not Schur (lemma from class).
    - Then, $R^{(0)}[z]=\Delta[z]$ is not Schur (lemma from class).
    - (presumably only made it to this step if $| c_{n} |>| c_{0} |$ for $R^{(i-1)}[z]$)
- If yes, does $i=n-1$?
    - If no, set $R^{(i+1)}[z] = \frac{1}{z}\left( R^{(i)}[z] - \frac{c_{0}}{c_{n}}Q^{(i)}[z] \right)$ and repeat
        - $c_{0}, c_{n}$ are from $R^{(i)}[z]$
        - $Q^{i}[z]$ is from reversing coefficients in $R^{(i)}[z]$
    - If yes, $R^{(0)}[z]=\Delta[z]$ is Schur

For each $R^{(i)}[z]$, we need to check if $\left| c_{n} \right|>\left| c_{0} \right|$.
- Assume $\left| c_{n} \right| >0$; if not, use $-R^{(i)}[z]$ instead. 

Then:
$$
\begin{align}
 & \left| c_{n}  >  c_{0} \right|   \text{ for } R^{(i)}[z]  \\[2ex]
 & \quad  \Longleftrightarrow  \quad c_{n}^{2}>c_{0}^{2}  \\[2ex]
 & \quad  \Longleftrightarrow  \quad c_{n}^{2}-c_{0}^{2} >0  \\[2ex]
 & \quad  \Longleftrightarrow  \quad \frac{c_{n}^{2}-c_{0}^{2}}{c_{n}}>0 \quad  \quad  [c_{n}>0] \\[2ex] 
 & \quad  \Longleftrightarrow  \quad c_{n}- \frac{c_{0}}{c_{n}}c_{0}>0  
 \end{align}
$$

## Jury Test Theorem
Assume $c_{n}>0$ for $\Delta[z]$. If not, use $-\Delta[z]$ instead.

Then, $\Delta [z]$ is Schur if and only if the leading coefficients of $R^{(i)}[z]$ for all $i \in \{ 0, \dots, n \}$ are positive.

This leads to a tabular method for testing whether $\Delta$ is Schur.

![[Jury Test-1765060986583.webp]]

Then $\Delta$ is Schur if and only if the coefficients in the first column (i.e., the leading coefficients) are positive for each $R^{(i)}[z]$.

This is if and only if $c_{n}>0, b_{n}>0, d_{n}>0, \dots, e_{n}>0$ and $f_{n}>0$.

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

## Example
Take $\Delta[z]-z^{2}+\frac{1}{4}=\frac{1}{8}$. Then, we have:

![[Jury Test-1765061452220.webp]]

where we have:
$$
\begin{align}
\frac{c_{0}}{c_{n}}  & = \frac{c_{0}}{c_{2}} = \frac{-\frac{1}{8}}{1}=-\frac{1}{8} \\[2ex] 
b_{2}  & = c_{2} - \frac{c_{0}}{c_{2}}c_{0} = 1-\left( -\frac{1}{8} \right)\left( -\frac{1}{8} \right)=\frac{63}{64} \\[2ex] 
b_{1}  & = c_{1} - \frac{c_{0}}{c_{2}}c_{1} = \frac{1}{4}-\left( -\frac{1}{8} \right)\left( \frac{1}{4} \right) = \frac{9}{32}
\end{align}
$$
and
$$
\begin{align}
\frac{b_{1}}{b_{n}} = \frac{b_{1}}{b_{2}} = \frac{\frac{9}{32}}{\frac{63}{64}} = \frac{2}{7} \\[2ex] 
d_{2} = b_{2} - \frac{b_{1}}{b_{2}}b_{1} = \frac{63}{64}-\left( \frac{2}{7} \right)\left( \frac{9}{32} \right) = \frac{405}{488}
\end{align}
$$
Since $c_{n}=1>0$, $d_{n}=\frac{63}{64}>0$, and $e_{n} = \frac{405}{488}>0$, $\Delta[z]$ is Schur \[theorem from class].

Note: To see that $e_{n}>0$ it is equivalent to check that $\left| b_{n} \right|>\left| b_{1} \right|$ as $\left| \frac{63}{64} \right|>\left| \frac{9}{32} \right|$.

## Tutorial Example
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





