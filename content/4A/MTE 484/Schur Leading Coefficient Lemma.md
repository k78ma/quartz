---
title: Schur Leading Coefficient Lemma
tags:
  - mte484
date: 2025-12-06
aliases: schur leading coefficient lemma
---
> [!theorem] Lemma
> Let $\Delta[z] = \sum_{i=0}^{n} c_{i}z^{i}$. If $\Delta$ is Schur, then $| c_{n} | > | c_{0} |$.
> 
> This is a necessary but not sufficient condition. So $| c_{n} | > | c_{0} |$ does not necessarily mean a polynomial is Schur.

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
Here, $| c_{n} |=1$ and $| c_{0} |=\frac{1}{2}$. Thus, $| c_{n} | > | c_{0} |$, so we cannot draw conclusions about whether $\Delta$ is Schur.
- However, if we factor out the characteristic polynomial, we can see that $\Delta z= (z+2)\left( z+\frac{1}{4} \right)$, so the polynomial is not Schur! 
- This shows the limitations of the lemma – we still have to if $\Delta$ is Schur when $\left| c_{n} \right| > \left| c_{0} \right|$.

## Proof
We have:
$$
\Delta[z]= \sum_{i=1}^{n}c_{i}z^{i} = c_{n} \prod_{i=1}^{n}(z - \underbrace{ p_{i} }_{ \text{roots of }\Delta[z] })
$$

Then, we have:
$$
\Delta[0] = c_{0} = c_{n} \prod_{i=1}^{n} (-p_{i})
$$
Then:
$$
\begin{align}
\implies  & \left| c_{0} \right|  = \left| c_{n} \right| \prod_{i=1}^{n} \left| p_{i} \right| \\[2ex] 
\implies & \frac{\left| c_{0} \right| }{\left| c_{n} \right| } = \prod_{i=1}^{n} \left| p_{i} \right| <1 \quad  \quad  [\Delta [z] \text{ if Schur so all } p_{i} \in  \mathbb{D}] \\[2ex]
\implies & \left| c_{n} \right| > \left| c_{0} \right| 
\end{align}
$$
