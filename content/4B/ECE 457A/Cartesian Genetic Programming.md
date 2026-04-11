---
title: Cartesian Genetic Programming
tags:
  - ece457a
date: 2026-04-10
aliases:
  - cartesian genetic programming
  - CGP
---
In CGP, programs are represented as directed acyclic graphs (DAG) laid out on a grid. Each node applies a function $f$, receives inputs from earlier nodes or external inputs, and sends its output forward to later nodes.

This supports node reuse, and so the graph structure can be more compact than trees. One computed feature can feed several later computations. This makes CGP closer to digital circuits and signal-processing pipelines.

Say we want to compute $y=(x_{1}+x_{2})^{2}+\sin(x_{1}+x_{2})$. The CGP representation would be:

![[Cartesian Genetic Programming-1775864828946.webp]]

Where the node computations are:
$$
\begin{align}
n_{1}  & =x_{1}+x_{2} \\
n_{2} & = n_{1}\cdot n_{1} \\
n_{3} & =\sin(n_{1}) \\
y & =n_{2}+n_{3}
\end{align}
$$