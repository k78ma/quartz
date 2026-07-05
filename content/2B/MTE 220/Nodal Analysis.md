---
title: Nodal Analysis
tags:
  - mte220
date: 2023-09-30
---
[[Kirchhoff’s Current Law (KCL)|KCL]] can be applied systematically to find all node voltages in a circuit.

Steps:
1. Label nodes and ground. Nodes that are connected to voltage sources are not labelled because they have known voltages.
2. Write KCL equations at each node, referencing the current leaving the node unless otherwise indicated.
3. Replace currents with device equations using node voltages.
4. Solve systems of equations.

![[Pasted image 20230930174824.png|460]]

$$
\begin{align}
\text{Node A: } \quad  0 &= \frac{V_{A}-5}{0.5} + \frac{V_{A}-0}{4} + \frac{V_{A}-V_{B}}{2} \\[2ex]
\text{Node B: } \quad 0 &= \frac{V_{B}-V_{A}}{2}+\frac{V_{B}-0}{2} \\[2ex]
\text{Solve: } \quad V_{A} &= 2, V_{B} = 2
\end{align}
$$
