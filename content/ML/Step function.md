---
title: Step function
tags:
  - ml
date: 2024-01-17
aliases:
---
$$
\text{step}(z) = \begin{cases}
0 &  \text{if } z<0 \\
1 &  \text{otherwise}
\end{cases}
$$
![[Step function.png|440]]

Not very practical as an activation; since the derivative is discontinuous, we won’t be able to use gradient-descent methods to tune the weights in a network.