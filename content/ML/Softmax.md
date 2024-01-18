---
title: Softmax
tags:
  - ml
date: 2024-01-17
aliases:
  - softmax
---
Takes a whole vector $Z \in \mathbb{R}^{n}$ and generates as output a vector $A \in [0, 1]$  with the property that $\sum_{i=1}^{n}A_{i}=1$, which means we can interpret it as a probability distribution over $n$ items:
$$
\text{softmax}(z) = \begin{bmatrix}
\exp(z_{1}) / \sum_{i} \exp(z_{i}) \\
\vdots \\
\exp(z_{n}) / \sum_{i} \exp(z_{i}) 
\end{bmatrix}
$$
Softmax is similar to [[Sigmoid|sigmoid]] in concept (used for outputting probabilities) but in higher dimensions.