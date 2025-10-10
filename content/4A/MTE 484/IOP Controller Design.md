---
title: IOP Controller Design
tags:
  - mte484
date: 2025-10-08
aliases: iop controller design
---
IOP equations:
$$
A  \begin{bmatrix}
w \\
x \\
\hat{x}
\end{bmatrix} = b
$$
This represents a set of linear equations. A solution exists if $A$ is full rank and ($\#$ columns of $A$) $\geq$ ($\#$ rows of A).
- ($\#$ rows of $A$) = $m+n+(n-\hat{n})$
- ($\#$ columns of $A$) = $2m + \hat{n}$

Then, we need:
$$
\begin{align}
2m+\hat{n}  & \geq m+n+(n-\hat{n}) \\[2ex] 
\implies m  & \geq 2(n-\hat{n})
\end{align}
$$
We want greater than, not equal to, so that we have more flexibility when designing the controller.