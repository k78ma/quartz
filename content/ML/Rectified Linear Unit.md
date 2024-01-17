---
title: Rectified Linear Unit
tags:
  - ml
date: 2023-12-30
aliases:
---
The rectified linear unit is a standard activation function; it returns the input when it is positive and zero otherwise:
$$
a[z] = \text{ReLU}[z] = \begin{cases}
0 & z < 0 \\
z & z \geq 0
\end{cases} = \text{max}(0,z)
$$
![[Rectified Linear Unit.png]]