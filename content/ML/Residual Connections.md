---
title: Residual Block
tags:
  - dl
date: 2026-05-01
aliases: residual block
---
Residual or skip connections are shortcut branches in the computation graph that add the input of a layer or block to its output. 

![[Residual Connections-1782165615349.webp]]

For example, the residual network below in Figure 11.4 computes:
$$
\begin{align}
h_{1}  & = x+f_{1}[x, \phi_{1}] \\
h_{2} & = h_{1}+f_{2}[h_{1}, \phi_{2}] \\
h_{3} & =h_{2} + f_{3}[h_{2}, \phi_{3}] \\
y  & =h_{3}+f_{4}[h_{3}, \phi_{4}]
\end{align}
$$
where the first term of every line is the residual connection. Thus, each layer $f_{k}$ computes an additive change to the current representation. This comes with the additional requirement that the input and output size must remain the same. Each additive computation of the input and processed output is called a **residual block**.
- $h_{k+1}=h_{k}+f_{k+1}[h_{k}]$ is a residual block.

We can re-write this as a single function by substituting the intermediate expressions:
$$
\begin{align}
y =x & +f_{1}[x] \\
     &+ f_{2}[x+f_{1}[x]] \\
     & +f_{3}\big[x+f_{1}[x]+f_{2}[x+f_{1}[x]]\big] \\
     & + f_{4}\Big[ x+f_{1}[x]+f_{2}[x+f_{1}[x]] + f_{3}[x+f_{1}[x]+f_{2}[x+f_{2}[x]]] \Big]
\end{align}
$$
We can view this as unraveling the network, as shown in figure 11.4b below.

![[Residual Block-1782164271472.webp|487]]

**Ensembling view:** From the unraveled equation/diagram, we could consider the final network to be a sum of the input and four smaller networks, each corresponding to a line of the equation. 

**Path view:** Another complementary view is that the residual network creates 16 paths from the input to the output, each with differing transformations. For example, the first function occurs in 8/16 paths, including as a direct additive term (path length = 1). We can see this by considering the derivative $\frac{ \partial y }{ \partial f_{1} }$ and seeing that it consists of eight terms, one for each path.
$$
\frac{ \partial y }{ \partial f_{1} }  = I + \frac{ \partial f_{2} }{ \partial f_{1} } + \left( \frac{ \partial f_{3} }{ \partial f_{1} } +\frac{ \partial f_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial f_{1} }  \right) + \left( \frac{ \partial f_{4} }{ \partial f_{1} } + \frac{ \partial f_{4} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial f_{1} } +\frac{ \partial f_{4} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial f_{1} } + \frac{ \partial f_{4} }{ \partial f_{3} }\frac{ \partial f_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial f_{1} }  \right)
$$
