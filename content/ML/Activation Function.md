---
title: Activation Function
tags:
  - ml
date: 2024-01-15
aliases:
  - activation
---
Activation functions aim to introduce non-linearity or certain characteristics to [[Artificial Neuron|artificial neurons]].
- They transform the summed weighted input from the node into an output value to be fed to the next hidden layer. 
- They are also used to transform the summed weighted input to a final output, often for the sake that is interpretability or normalization.

### Why Activation Functions?
Activation functions serve to increase the representational capacity of the network. What happens if we don't have an activation function or we let $f$ be the identity?

If $f$ is the identity, in a network with $L$ layers, we would have:
$$
A^{L} = (W^{L})^{T}A^{L-1} = (W^{L})^{T}(W^{L-1})^{T} \dots (W^{1})^{T}X
$$
Multiplying out the weight matrices:
$$
A^{L}=W^{\text{total}}X
$$
which is a *linear* function of $X$. Having all those layers did not change the representational capacity of the network; the non-linearity of the activation function is crucial. 
