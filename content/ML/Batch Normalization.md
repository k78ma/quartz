---
title: Batch Normalization
tags:
  - ml
date: 2024-01-27
aliases:
  - BatchNorm
---
Batch normalization in an improvement on [[Dropout]], and was originally designed to address [[Covariate Shift|covariate shift]].

When training with mini-batches in [[Batch Gradient Descent]], the idea is to *standardize* the input values for each batch, by subtracting off the mean and dividing by the standard deviation of each input dimension. 

This means that the scale of the inputs to each layer remains the same, no matter how the weights in previous layers change. 
- However, this somewhat complicates matters, because the computation of the weight updates will need to take into account that we are performing this transformation. 
- In the modular view, batch normalization can be seen as a module that is applied to $z^{l}$, interposed after the product with $W^{l}$ and before input to the activation function $f^{l}$.

Batch normalization has a regularization effect similar to [[Weight Perturbation]] and [[Dropout]]. Each mini-batch of data ends up slightly perturbed, which prevents the network from exploiting very particular values of data points.

### Formulation
