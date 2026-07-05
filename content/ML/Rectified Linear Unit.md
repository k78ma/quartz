---
title: Rectified Linear Unit
tags:
  - ml
date: 2023-12-30
aliases:
  - ReLU
---
The rectified linear unit is a standard activation function; it returns the input when it is positive and zero otherwise:
$$
a[z] = \text{ReLU}[z] = \begin{cases}
0 & z < 0 \\
z & z \geq 0
\end{cases} = \text{max}(0,z)
$$
![[Rectified Linear Unit.png]]

The ReLU has a nice property that the derivative of the output with respect to the input is always one for inputs greater than zero. This contributes to the stability and efficiency of training, unlike [[Sigmoid|sigmoid]] activation functions, which saturate (become close to zero) for large positive and large negative inputs.

The *non-negative homogeneity* property of the ReLU function states that:
$$
\text{ReLU}[\alpha\cdot z]=\alpha\cdot \text{ReLU}[z]
$$
for $\alpha \in \mathbb{R}^{+}$.