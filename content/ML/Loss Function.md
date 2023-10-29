---
title: Loss Function
tags:
  - ml
date: 2023-10-29
---
Loss in machine learning quantifies the quality of a prediction $h(x^{(i)}; \Theta)$ that $\Theta$ makes for $(x^{(i)}, y^{(i)})$. 

A basic example is 0-1 loss:
$$
L_{01}(h(x;\Theta), y) = \begin{cases}
0  &  \text{if } y =h(x;\Theta) \\
1  & \text{otherwise}
\end{cases}
$$
