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
Softmax is similar to [[Sigmoid|sigmoid]] in concept (used for outputting probabilities/confidences) but in higher dimensions. Commonly used for multi-class classification.

## Stable Softmax
Naive implementation:
```python
def softmax(items_in):
    exps = np.exp(items_in)
    items_out = exps / np.sum(exps)
    return items_out
```

This has issues with numerical stability. If any element of `items_in` is large, then `np.exp(items_in)` will overflow.

Numerically stable implementation:
```python
def softmax(items_in):
    shifted = items_in - np.max(items_in)
    exps = np.exp(shifted)
    return exps / np.sum(exps)
```

This works because subtracting the same constant $c$ from every input does not change the output of the softmax:
$$
\frac{e^{x_i-c}}{\sum_j e^{x_j-c}} = \frac{e^{x_i}}{\sum_j e^{x_j}}
$$

Proof:
$$
\begin{align}
\frac{e^{x_i-c}}{\sum_j e^{x_{j}-c}} & = \frac{e^{x_{i}}e^{-c}}{\sum_{j}e^{x_{j}}e^{-c}} \\[2ex] 
     & = \frac{e^{x_{i}}e^{-c}}{e^{-c}\sum_{j}e^{x_{j}}} \\[2ex] 
     & = \frac{e^{x_{i}}}{\sum_{j}e^{x_{j}}}
\end{align}
$$

#cards/dl
Numerically stable softmax
?
Subtracting the same constant $c$ from every input does not change the output of the softmax. So we subtract the maximum element to prevent overflow.
```python
def softmax(items_in):
    shifted = items_in - np.max(items_in)
    exps = np.exp(shifted)
    return exps / np.sum(exps)
```
<!--SR:!fsrs,2026-07-14T03:20:38.916Z,14,13.8358397,2.1043314,2,3,0,0,2026-06-30T03:20:38.916Z-->
+++