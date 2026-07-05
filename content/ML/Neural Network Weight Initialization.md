---
title: Neural Network Weight Initialization
tags:
  - ml
date: 2024-01-19
aliases:
---
Initializing weights in the process of [[Neural Network Training]] is important; if we do it badly, there's a good chance the training won't go well. 
1. It is important to initialize the weights to random values. We want different parts of the network to tend to “address” different aspects of the problem; if they all start at the same weights, the symmetry will often keep the values from moving in useful directions.
2. Many of our activation functions have near zero slope when the pre-activation $z$ values have large magnitude, so we generally want to keep the initial weights small, so we will be in a situation where the gradients are non-zero, so that gradient descent will have some useful signal about which way to go.

One good general-purpose strategy is to choose each weight at random from a Gaussian (normal) distribution with mean $0$ and standard deviation ($1/m$) where $m$ is the number of inputs to the unit. We write this as:
$$
W_{ij}^{l} \sim\ \text{Gaussian} \left( 0, \frac{1}{m^{l}} \right)
$$
