---
title: Single-layer Neural Network
tags:
  - ml
date: 2024-01-16
aliases:
---
- A layer (as described [[Neural Networks#General Definition|here]]) is a set of units that are not connected to each other. 
- A layer is called ***fully connected*** if every neuron in the layer shares the same inputs.
- A layer has input $x \in \mathbb{R}^{m}$ and output (also known as activation) $a \in \mathbb{R}^{n}$.

Fully connected layer:

![[Single-layer Neural Network.png|336]]

Since each unit (neuron) has a vector of weights and a single offset, we can think of the weights of the whole layer as a matrix, $W$, and the collection of all the offsets as a vector $W_{0}$. If we have $m$ inputs, $n$ units, and $n$ outputs, then:
- $W$ is a $m\times n$ matrix
- $W_{0}$ is a $n \times 1$ column vector
- $X$, the input, is an $m \times 1$ column vector
- $Z = W^{T}X + W_{0}$, the pre-activation value, is an $n\times 1$ column vector
- $A$, the activation, is an $n\times 1$ column vector, and is applied element-wise to $Z$.
and the output vector is:
$$
A = f(Z) = f(W^{T}X+W_{0})
$$
Single-layer networks allow us to make linear hypotheses, as we have seen with [[Linear Classifier|linear classifiers]] and [[regression]].