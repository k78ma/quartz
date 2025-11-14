---
title: Schur Characteristic Polynomials
tags:
  - mte484
date: 2025-11-10
aliases: schur characteristic polynomials
---
> [!definition] Schur
> A characteristic polynomial $\Delta[z]$ is Schur if $\text{roots}(\Delta) \subset \mathbb{D}$.

> [!theorem] Lemma: Jury Test
> Let $\Delta[z] = \sum_{i=0}^{n} c_{i}z^{i}$. If $\Delta$ is Schur, then $| c_{n} | > | c_{0} |$.
> 
> Note that this does not go the other way! We could have $| c_{n} | > | c_{0} |$ but the polynomial is not Schur.

Example 1:
$$
z^{3} + z+ 3 = \Delta[z]
$$
where
- $c_{n}=c_{3}=1$
- $c_{1}=1$
- $c_{0}=3$

Then:
$$
\begin{align}
| c_{n} | = | c_{3} | = 1 \\
| c_{0} |=3
\end{align} \quad \Longrightarrow \quad  | c_{n} | < | c_{0} | \quad \Longrightarrow \quad  \Delta \text{ is NOT Schur!}
$$

Example 2:
$$
z^{2} + \frac{1}{2}z+ \frac{1}{2} = \Delta[z]
$$
Here, $| c_{n} |=1$ and $| c_{0} |=\frac{1}{2}$. Thus, $| c_{n} | > | c_{0} |$. 
- However, if we factor out the characteristic polynomial, we can see that $\Delta z= (z+2)\left( z+\frac{1}{4} \right)$, so the polynomial is not Schur! 
- This shows the limitations of the lemma – we still have to check our roots!

## Checking if $\Delta[z]$ is Schur
Let's consider something else. Let:
$$
\Delta[z] = \sum_{i=0}^{n}c_{i}z^{i}, \quad  Q[z] = \sum_{i=0}^{n}c_{n-i}z^{i}
$$
Example:
$$
\begin{align}
\Delta[z] = 2z^{2} + 3z+ 4  \\
Q[z] = 4z^{2}+3z+2
\end{align}
$$
Goal: Find a lower-order polynomial for testing if $\Delta$ is Schur – we want to cancel out $c_{0}$ and then divide by $z$.
