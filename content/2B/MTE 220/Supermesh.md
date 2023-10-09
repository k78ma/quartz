---
title: Supermesh
tags:
  - mte220
date: 2023-10-07
---
There is a problem when there are two unknown mesh currents passing through a current source, like the 2A source in the diagram below. Since the current source may have any voltage across it, there is no device equation to plug into the [[Kirchhoff’s Voltage Law (KVL)|KVL]] equations. If you try to write the unknown voltage as:
![[bad mesh.png|453]]
$$
\begin{align}
\text{Mesh A:} &\quad -10+2I_{A} - V_{2A}+(I_{A}-I_{C}) = 0 \\
\text{Mesh B:} &\quad V_{2A} + 2I_{B} = 0 \\
\text{Mesh C:} &\quad 5+(I_{C}-I_{A})=0
\end{align}
$$
However the unknown voltage $V_{2A}$ couples the equations and is immediately eliminated, making the system indeterminate.

Instead, we use a broader interpretation of KVL and combine the meshes around the problematic current source. Now:

![[Supermesh.png|453]]

$$
\begin{align}
\text{Supermesh:} &\quad -10+2I_{A}+2I_{B}+(I_{A}-I_{C})=0 \\
\text{Current source:} &\quad I_{A}-I_{B} = 2
\end{align}
$$