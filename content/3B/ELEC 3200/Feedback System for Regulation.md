---
title: Feedback System for Regulation
tags:
  - elec3200
date: 2025-04-01
aliases:
  - feedback system for regulation
---
**Regulation problem:** Given plant $P$, design a 2-DOF controller $C= [C_{1} \quad C_{2}]$ so that good performance in tracking and disturbance rejection is achieved.

![[Feedback System for Regulation-20250401134153522.png|437]]

The system can be expressed as:
$$
U(s)=\begin{bmatrix}
C_{1}(s) & -C_{2}(s)
\end{bmatrix} \begin{bmatrix}
R(s) \\
Y(s)
\end{bmatrix}
$$
- The minus sign in front of $C_{2}$ suggests negative feedback.

The above feedback system for regulation is well posed if the [[Feedback System for Stabilization|feedback system for stabilization]] formed by $P$ and $C_{2}$ is well posed.

All the transfer functions are:

![[Feedback System for Regulation-20250401134526201.png]]

We now have a **gang of 6**, involving a gang of four formed by $P(s)$ and $C_{2}(s)$:
$$
\frac{1}{1+P(s)C_{2}(s)}, \,\, \frac{P(s)}{1+P(s)C(s)},\,\, \frac{C_{2}(s)}{1+P(s)C(s)}, \,\,\frac{P(s)C_{2}(s)}{1+P(s)C(s)}
$$
along with two additional ones involving $C_{1}(s)$:
$$
\frac{C_{1}(s)}{1+P(s)C_{2}(s)}, \quad  \frac{P(s)C_{1}(s)}{1+P(s)C_{2}(s)}
$$

![[Feedback System for Regulation-20250401134707108.png]]