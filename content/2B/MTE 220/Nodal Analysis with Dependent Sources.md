---
title: Nodal Analysis with Dependent Sources
tags:
  - mte220
date: 2023-10-07
---
Nodal analysis also works when there are dependent sources.
- Dependent current source: Include in KCL equations
- Dependent voltage source: Include in node voltage relationships

![[Pasted image 20231001135312.png|488]]

$$
\begin{align}
\text{Node A:}& \quad 2+I_{1}+(-2I_{1}) = \frac{V_{A}-V_{B}}{1} \\
\text{Node B:}& \quad 0 = \frac{V_{B}-0}{3}+\frac{V_{B}-V_{A}}{1}+(-2I_{1})
\end{align}
$$
Since there are three unknowns, a third equation is required. This must come from a device equation since there are no more circuit equations:
$$
I_{1}=\frac{10-V_{A}}{2}
$$
Solution:
$$
V_{A} = 9 \text{V}, V_{B} = 7.5\text{V}, I_{1}=0.5\text{A}
$$