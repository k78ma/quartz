---
title: Double Descent
tags:
  - dl
date: 2025-08-25
aliases:
  - double descent
---
We have seen that [[Reducing Model Error|bias-variance tradeoff]] occurs as we increase the capacity of a model. However, in practice, the phenomenon of double descent can occur.

## MNIST-1D Example
Consider a case where we train on the MNIST-1D dataset with 10,000 training examples and 5,000 testing examples. We train the model with [[Adaptive moment estimation|Adam]] and a step size of 0.005 using a full batch of 10,000 examples for 4000 steps, and examine the train/test performance as we increase the capacity (number of parameters) of the model.


