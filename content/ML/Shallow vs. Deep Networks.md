---
title: Shallow vs. Deep Networks
tags:
  - dl
date: 2025-04-22
aliases:
  - shallow vs. deep networks
---
Here we compare [[Shallow Neural Network|shallow neural networks]] with a single hidden layer vs [[Deep Neural Network|deep neural networks]] with multiple hidden layers.

## Ability to approximate different functions
We argued that shallow neural networks with enough capacity (hidden units) could model any function arbitrarily closely ([[Universal Approximation Theorem]]). We saw that a deep network with two hidden layers could represent the composition of two shallow networks ([[Composing Shallow Networks]]). If the second of these networks computes the identity function, then this deep network replicates a single shallow network. Hence, it can also approximate any continuous function arbitrarily closely given sufficient capacity.

