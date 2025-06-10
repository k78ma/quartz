---
title: Loss Function
tags:
  - ml
date: 2023-10-29
---
Loss in machine learning quantifies the quality of a prediction $f(x_{i}, \phi)$ compared to the ground truth $y_{i}$.

During training, we seek parameter values $\phi$ that minimize the loss, mapping the training inputs to outputs as closely as possible.

A basic example is 0-1 loss:
$$
L_{01}(h(x;\Theta), y) = \begin{cases}
0  &  \text{if } y =h(x;\Theta) \\
1  & \text{otherwise}
\end{cases}
$$
