---
title: Mesh Analysis with Dependent Sources
tags:
  - mte220
date: 2023-10-07
---
[[Mesh Analysis]] requires no modifications when there are dependent sources. Just include dependent current source currents in the mesh current relationships, or dependent voltage source voltages in the [[Kirchhoff’s Voltage Law (KVL)|KVL]] equations.

![[Mesh Analysis with Dependent Sources.png|500]]

Let’s say the source $V_{x}$ is governed by:
$$
V_{x} = 6I_{B} \; \; \left[ \frac{V}{mA} \right]
$$
The resulting mesh equations would be:
$$
\begin{align}
\text{Mesh A:}& \quad 2I_{A} + 4(I_{A} - I_{C}) + 10 = 0 \\
\text{Mesh B:}& \quad 2(I_{B}-I_{C}) + 3I_{B} - 10 = 0 \\
\text{Mesh C:}& \quad 2(I_{C}-I_{B}) + 4(I_{C}-I_{A}) - 6I_{B} = 0
\end{align}
$$
Resulting in:
$$
\text{Solution:}\quad I_{A} = 45\text{mA}, I_{B}=30\text{mA }, I_{C}=70\text{mA}
$$

