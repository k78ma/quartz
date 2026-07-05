---
title: Internal Stability for Feedback Systems
tags:
  - elec3200
date: 2025-04-06
aliases:
  - internal stability for feedback systems
---

![[Feedback System for Stabilization-20250401132224038.png|440]]

The system is said to be **internally stable** if the 8 transfer functions from $w_{i},i=1,2$ to $y_{j}, j=1,2$  are stable. However, since they are written in terms of the Gang of Four, we only need to check the stability of these transfer functions when testing the closed-loop stability. 

Let us have
$$
P(s)=\frac{b(s)}{a(s)}, \quad C(s)=\frac{q(s)}{p(s)}
$$
where $a(s)$ and $b(s)$ are coprime polynomials and so are $p(s)$ and $q(s)$. 

Then we can write the gang of four matrix as
$$
\text{GoF}(s)=\begin{bmatrix}
\frac{1}{1+P(s)C(s)} & \frac{C(s)}{1+P(s)C(s)} \\
\frac{P(s)}{1+P(s)C(s)} & \frac{P(S)C(s)}{1+P(s)C(s)}
\end{bmatrix}=\frac{\begin{bmatrix}
a(s)p(s) & a(s)q(s) \\
b(s)p(s) & b(s)q(s)
\end{bmatrix}}{a(s)p(s)+b(s)q(s)}
$$

Let $P(s)$ and $C(s)$ these be proper transfer functions and assume that $1+P(\infty)Q(\infty)\neq 0$. Then, the following statements are equivalent:
1. The closed-loop system is internally stable.
2. The polynomial $a(s)p(s)+b(s)q(s)$ is stable.
3. There is no unstable pole/zero cancellation forming the product $P(s)C(s)$ and any of the gang of four is stable.

## Character Polynomial
For a feedback system for stabilization with $P(s)=\frac{b(s)}{a(s)}$ and $C(s)=\frac{q(s)}{p(s)}$, the polynomial $c(s)=a(s)p(s)+b(s)q(s)$ is called its **characteristic polynomial**.

This is also equivalent to $1+P(s)C(s)=c(s)$ since
$$
\begin{align}
c(s) & =1+\frac{b(s)}{a(s)}\cdot \frac{q(s)}{p(s)} \\[2ex]
 & =\frac{a(s)p(s)+b(s)q(s)}{a(s)p(s)} \\[2ex]
     & =a(s)p(s)+b(s)q(s)
\end{align}
$$

## Example

![[Internal Stability for Feedback Systems-20250406194301637.png|621]]

![[Internal Stability for Feedback Systems-20250406194312691.png|620]]

![[Internal Stability for Feedback Systems-20250406194335151.png|601]]

![[Internal Stability for Feedback Systems-20250406194417042.png|620]]

![[Internal Stability for Feedback Systems-20250406194432444.png|605]]

![[Internal Stability for Feedback Systems-20250406194443271.png|619]]
