---
title: Corrected Fin Length
tags: 
date: 2024-07-08
aliases:
  - corrected fin length
---
The solution to the [[Finned Surfaces#Fin Equation Solutions|general fin equation]] for the case of *convection from fin tip* is rather complex. An practical way of accounting for this is to replace fin length $L$ in the case of the insulated tip with a **corrected fin length**. The idea is to take the cross-sectional area at the fin tip, $A_{c}$, and account for convection from that area on the side of the fin.

The corrected fin length is given as:
$$
L_{c}=L+\frac{A_{c}}{p}
$$
where $A_{c}$ is the **cross-sectional area of the tip**, and $p$ is the **perimeter** of the fin at the tip. 

Multiplying the above by the perimeter gives 
$$
\begin{align}
PL_{\text{corrected}} &  = PL+A_{\text{c}} \\
A_{\text{corrected}}  & = A_{\text{conv}} + A_{\text{c}}  
\end{align}
$$
where $A_{\text{conv}}$ is basically the lateral area of the fin, since this is where convection occurs (other than the fin tip). Thus, the fin area determined using the corrected length is equivalent to the sum of the lateral fin area plus the fin tip area.

![[Corrected Fin Length.png|364]]

Corrected lengths for rectangular and cylindrical fins:
$$
\begin{align}
L_{\text{c, rectangular}} & \approx L+\frac{t}{2} \\[2ex]
L_{\text{c, cylindrical}} & \approx L+\frac{D}{4}
\end{align}
$$

![[MTE 309 L24 Example.pdf]]