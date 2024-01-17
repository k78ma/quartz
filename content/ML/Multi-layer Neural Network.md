---
title: Multi-layer Neural Network
tags:
  - ml
date: 2024-01-16
aliases:
---
Multi-layer neural networks allow us to express more complex hypotheses, as a [[Single-layer Neural Network]] can only really express linear separators. Multi-layer networks neural, as the name suggests, combine multiple layers, most typically by feeding the outputs of one layer into the inputs of another layer.

Nomenclature:
- We use $l$ to name a layer.
- $m^{l}$ is the number of inputs to layer
- $n^{l}$ is the number of outputs from the layer
- $W^{l}$ and $W^{l}_{0}$ are of shape $m^{l} \times n^{l}$ and $n^{l} \times 1$ respectively
- $f^{l}(\cdot)$ is the activation function of layer $l$

Then, the pre-activation outputs are the $n^{l}\times 1$ vector
$$
Z^{l} = (W^{l})^{T} A^{l-1}+W^{l}_{0}
$$
and the activation outputs the $n^{l} \times 1$ vector
$$
A^{l}=f^{l}(Z^{l})
$$
>[!note] Activation function uniformality
>It is technically possible to have different activation functions within the same layer, but for convenience in specification and implementation, we generally have the same activation function within a layer.

Below is a diagram of a many-layered network, with two blocks for each layer, one representing the linear part of the operation and one representing the non-linear activation function. This structural decomposition is useful to organize our algorithmic thinking and implementation.

![[Multi-layer Neural Network.png]]