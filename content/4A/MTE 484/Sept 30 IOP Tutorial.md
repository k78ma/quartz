---
title: Sept 30 IOP Tutorial
tags:
  - mte484
date: 2025-09-30
aliases: sept 30 iop tutorial
---
**Example:** Consider the following standard negative feedback system:

![[Feedback System Stability-20250917140513897.png|534]]

where we have
$$
\begin{align}
D[z]  & = \frac{(z-1)\left( z-\frac{1}{2} \right)}{(2z+1)(5z-2)} \\[2ex]
G[z] & = \frac{z+1}{(4z-3)\left( z-\frac{1}{2} \right)}
\end{align}
$$
To check [[Closed-Loop Stability|closed-loop stability]], we need to check the closed-loop transfer functions.
$$
T_{re} = T_{du} = \frac{1}{1+GD} = \frac{(4z-3)(2z+1)(5z-2)}{40z^{3}-25z^{2}-11z+5}
$$
- Roots: -0.48, 0.34, 0.77

$$
T_{ru} = \frac{D}{1+GD} = \frac{(4z-3)(z-1)\left( z-\frac{1}{2} \right)}{40z^{3}-25z^{2}-11z+5}
$$
- Roots: -0.48, 0.34, 0.77

$$
T_{de} = \frac{-G}{1+GD} = \frac{-(z+1)(2z+1)(5z-2)}{\left( z-\frac{1}{2} \right)(40z^{3}-25z^{2}-11z+5)}
$$
- Roots: -0.48, 0.34, 0.5, 0.77

Then:
- $T_{re}, T_{du}, T_{ru}, T_{de}$ are real, rational and proper. 
- Since the poles of these lie in the open unit disk the TFs are stable \[definition of stability].
- These TFs are BIBO stable \[theorem from class]
- The system is closed-loop stable \[definition of closed-loop stability]

