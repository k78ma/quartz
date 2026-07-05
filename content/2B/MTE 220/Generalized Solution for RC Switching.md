---
title: Generalized Solution for RC Switching
tags:
  - mte220
date: 2023-10-19
---
RC circuits will go exponentially from some initial voltage to a final voltage. We can formulate a general exponential switching function:

$$
\begin{align}
V(t) = V_{\text{final}} + (V_{\text{initial}} - V_{\text{final}}) \cdot \exp\left( -\frac{t-t_{0}}{\tau} \right) \\[3ex] 
V(t) = V_{\text{final}} - (V_{\text{final}} - V_{\text{initial}}) \cdot \exp\left( -\frac{t-t_{0}}{\tau} \right)
\end{align}
$$

Example Problem 1:
![[Generalized Solution for RC Switching.png]]


Example Problem 2:
![[Generalized Solution for RC Switching-1.png]]