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

![[Residual Block-1782164271472.webp|513]]

**Ensembling view:** From the unraveled equation/diagram, we could consider the final network to be a sum of the input and four smaller networks, each corresponding to a line of the equation. 

**Path view:** Another complementary view is that the residual network creates 16 paths from the input to the output, each with differing transformations. For example, the first function occurs in 8/16 paths, including as a direct additive term (path length = 1). We can see this by considering the derivative $\frac{ \partial y }{ \partial f_{1} }$ and seeing that it consists of eight terms, one for each path.
$$
\frac{ \partial y }{ \partial f_{1} }  = I + \frac{ \partial f_{2} }{ \partial f_{1} } + \left( \frac{ \partial f_{3} }{ \partial f_{1} } +\frac{ \partial f_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial f_{1} }  \right) + \left( \frac{ \partial f_{4} }{ \partial f_{1} } + \frac{ \partial f_{4} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial f_{1} } +\frac{ \partial f_{4} }{ \partial f_{3} } \frac{ \partial f_{3} }{ \partial f_{1} } + \frac{ \partial f_{4} }{ \partial f_{3} }\frac{ \partial f_{3} }{ \partial f_{2} } \frac{ \partial f_{2} }{ \partial f_{1} }  \right)
$$
- The identity term corresponds to the direct addition term, showing that the parameters of the first layer $f_{1}[x, \phi]$ contribute directly to the changes in the network output $y$.
- The other terms are indirect contributions through other chains of derivatives of varying lengths.

In general, gradients through shorter paths will be better behaved. Since both the identity term and various short chains of derivatives will contribute to the derivatives of each layer, networks with residual links suffer less from [[Shattered Gradients|shattered gradients]], allowing us to increase the depth of the network significantly (by about double) without performance degradation. However, residual networks suffer from [[Exploding Gradients in Residual Networks|exploding gradients]].

## Order of operations in residual blocks
The layers $f[x]$, whether they are fully connected or convolutional, need to contain a nonlinear activation function, or the entire network will be linear. However, in a typical network layer, the ReLU function is at the end, so the output is non-negative. If we adopt this convention, then each residual block can only increase the input values.

Hence, we typically change the order of operations so that the activation function is applied first, followed by the linear transformation. Sometimes there may be several layers of processing within the residual block, but these usually terminate with a linear transformation.

Note that when we start these blocks with a ReLU operation, they will do nothing if the initial network is negative, since ReLU will clip the entire signal to zero. Thus, we typically start the network with a linear transformation.

![[Residual Connections-1782180242422.webp]]

#cards/dl 
In residual networks, why do we start with a linear transformation (FC/conv) instead of ReLU?::First layer in the network needs to be linear in case input is negative
<!--SR:!fsrs,2026-06-24T18:30:46.891Z,1,1.37716224,5.09241299,2,3,0,0,2026-06-23T18:30:46.891Z-->

Residual connection
?
Shortcut branch that adds the input of a layer back to its output. Each layer computes an additive change to the current representation.

![[Residual Connections-1782165615349.webp]]
<!--SR:!fsrs,2026-06-29T19:08:18.498Z,5,4.65595787,5.08254895,2,4,0,0,2026-06-24T19:08:18.498Z-->
+++

Each residual networks, each residual block learns an ==additive== update to its input representation.
<!--SR:!fsrs,2026-06-27T22:37:31.783Z,4,3.94605407,1,2,2,0,0,2026-06-23T22:37:31.783Z-->