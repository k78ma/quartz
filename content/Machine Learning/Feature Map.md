---
title: Feature Map
tags:
  - dl
date: 2026-01-03
aliases:
  - feature map
  - channel
---
In a [[Convolutional Neural Networks|CNN]], if we only apply a single convolution to the input, information will be lost; we are averaging nearby inputs, and the ReLU activation function clips results that are less than zero. Thus, we usually compute several convolutions in parallel. Each convolution produces a new set of hidden variables, termed a feature map or channel.

![[Feature Map-1767496192728.webp]]

Part (a) and (b) of the figure shows this with two convolution kernels of size 3 and with zero padding. 
- The first kernel computes a weighted sum of the nearest three pixels, and passes the results through the activation to produce results $h_{1}$ to $h_{6}$. These comprise the first channel.
- The second kernel computes a different weighted sum of the nearest three pixels, adds a different bias, and passes the results through the activation function to create hidden units $h_{7}$ to $h_{12}$. These comprise the second channel.

In general, the input and the hidden layers all have multiple channels (part (c) of figure). If the incoming layer has $C_{i}$ channels and we select a kernel size $K$ per channel, the hidden units in each output channel are computed as a weighted sum over all $C_{i}$ channels and $K$ kernel entries using a weight matrix $\Omega \in \mathbb{R}^{C_{i}\times K}$ and one bias. Hence, if there are $C_{o}$ channels in the next layer, then we need $\Omega \in \mathbb{R}^{C_{i}\times C_{o}\times K}$ weights and $\beta \in \mathbb{R}^{C_{o}}$ biases.