---
title: Simple Neuron Activation Functions
tags:
  - amath449
date: 2026-01-07
aliases: simple neuron activation functions
---
## Sigmoid Neuron
The activity of a neuron is very low or zero when the input is low, and the activity goes up and approaches some maximum as the input increases. This general behavior can be represented by a few activation functions.

### Logistic Curve
$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$
Goes from 0 to 1.

![[Simpler Neuron Models-1767588485761.webp]]

- [[Sigmoid]]

### Arctan
$$
\sigma(z) = \arctan(z)
$$
Goes from $-\frac{\pi}{2}$ to $\frac{\pi}{2}$ instead.

![[Simpler Neuron Models-1767588534257.webp]]


### Hyperbolic Tangent
$$
\sigma(z) = \tanh(z)
$$
Goes from $-1$ to $1$.

![[Simpler Neuron Models-1767588581215.webp]]

### Threshold
$$
\sigma(z) = \begin{cases}
0 & \text{if } z<0  \\
1  & \text{if } z \geq 0
\end{cases}
$$
![[Simpler Neuron Models-1767588664515.webp]]

This is just a Heaviside function.

### Rectified Linear Unit (ReLU)
This is just a line that gets clipped below at zero:
$$
\text{ReLU}(z)=\text{max}(0,z)
$$

![[Simpler Neuron Models-1767588717504.webp]]

Leaky ReLU is conceptually the same but goes a bit below zero, which can have some advantages

![[Simpler Neuron Models-1767588796139.webp]]


### Softmax
[[Softmax]] depends on multiple neurons. Softmax is like a probability distribution (or probability vector), so its elements add to $1$. If $\vec{z}$ is the drive (input) to a set of neurons, then:
$$
\text{softmax}(\hat{z})_{i} = \frac{e^{z_{i}}}{\sum_{j} e^{z_{j}}}
$$
Then, by definition,
$$
\sum_{i} \text{softmax}(\hat{z})_{i} = 1
$$
so they create a probability distribution. Thus, we can turn a list of inputs (that are not a distribution) and turn them into a distribution with softmax.

![[Simpler Neuron Models-1767589063313.webp]]

### One-Hot
One-Hot is the extreme of the softmax, where only the largest element ramins nonzero, while the others are set to zero. Kind of like taking the limit of the softmax?

![[Simpler Neuron Models-1767589163220.webp]]
