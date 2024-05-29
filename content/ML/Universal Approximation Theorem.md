---
title: Universal Approximation Theorem
tags:
  - ml
date: 2023-12-29
aliases:
---
The universal approximation theorem states that for any continuous function, there exists a shallow network that can approximate this function to any specified precision.

Let's say we have a shallow neural network of the form:
$$
y = \phi_{0}+\phi_{1}h_{1} + \dots+\phi_{n}h_{n}
$$
where $d$-th **hidden unit** $h_{d}$ is:
$$
h_{d}=a[\theta_{d_{0}}+\theta_{d_{1}}x]
$$
where $a$ is an activation function such as [[Rectifier Circuits|ReLU]]. We can then write the neural network as:
$$
y = \phi_{0} + \sum_{d=1}^{D}\phi_{d}h_{d}
$$
The number of hidden units in a shallow network is a measure of the network capacity. 

With ReLU activation functions, the output of a network with $D$ hidden units has at most D “joints” and so is a piecewise linear function with at most $D+1$ linear regions：

![[Universal Approximation Theorem.png|472]]

As we add more hidden units, the model can approximate more complex functions. With enough capacity (more hidden units), a shallow network can describe any continuous 1D function defined on a compact subset of the real line to arbitrary precision. 

To see this, consider that every time we add a hidden unit, we add another linear region to the function. More regions means that each represents smaller sections of the function, which in turn means a better approximation.

![[Universal Approximation Theorem-1.png]]
