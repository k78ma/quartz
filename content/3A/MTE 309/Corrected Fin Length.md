---
title: Corrected Fin Length
tags: 
date: 2024-07-08
aliases:
  - corrected fin length
---
The solution to the [[Extended Surfaces#Fin Equation Solutions|general fin equation]] for the case of *convection from fin tip* is rather complex. An practical way of accounting for this is to replace fin length $L$ in the case of the insulated tip with a **corrected fin length**. The idea is to take the cross-sectional area at the fin tip, $A_{c}$, and account for convection from that area on the side of the fin.

The corrected fin length is given as:
$$
L_{c}=L+\frac{A_{c}}{p}
$$
where $A_{c}$ is the cross-sectional area, and $p$ is the perimeter of the fin at the tip. 

Multiplying the above by the perimeter gives $A_{\text{corrected}} = A_{\text{fin (lateral)}} + A_{\text{tip}}$, which indicates that the fin area determined using the corrected length is equivalent to the sum of the lateral fin area plus the fin tip area.

![[Extended Surfaces-5.png|396]]

Corrected lengths for rectangular and cylindrical fins:
$$
\begin{align}
L_{\text{c, rectangular}} & =L+\frac{t}{2} \\[2ex]
L_{\text{c, cylindrical}} & =L+\frac{D}{4}
\end{align}
$$