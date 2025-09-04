---
title: Double Descent
tags:
  - dl
date: 2025-08-25
aliases:
  - double descent
---
We have seen that [[Reducing Model Error|bias-variance tradeoff]] occurs as we increase the capacity of a model. However, in practice, the phenomenon of double descent can occur.

## Example
Consider a case where we train on the MNIST-1D dataset with 10,000 training examples and 5,000 testing examples. We train the model with [[Adaptive moment estimation|Adam]] and a step size of 0.005 using a full batch of 10,000 examples for 4000 steps, and examine the train/test performance as we increase the capacity (number of parameters) of the model.

![[Double Descent-20250828232419460.png]]

Part (a) of the figure shows the training and test error for a neural network with two hidden layers as the number of hidden units increases. The training error decreases as the capacity grows and quickly becomes closer to zero. The vertical dashed represents the capacity where the model has the same number of parameters as there are training examples, but the model memorizes the dataset before this point. The test error decreases as we add model capacity but does not increase as predicted by the bias-variance tradeoff; it keeps decreasing.

Part (b) repeats the experiment but this time we randomize 15% of the training labels. Training error decreases to zero again. Due to more randomness, the model requires almost more parameters (almost as many as data points) to memorize the data. The test error does show the bias-variance tradeoff as we increase the capacity to the point where the model fits the training data exactly. However, it then unexpectedly begins to decrease again. If we add enough capacity, the test loss reduces to below the minimal level that we achieved in the first part of the curve.

This is called *double descent*. For some datasets like MNIST (fig 8.10c), it's present with the original data. For others, like MNIST-1D and CIFAR (fig 8.10d), it emerges when we add noise to labels.

Parts of the curve:
- First part: Classical or under-parametrized regime
- Second part: Modern or over-parametrized regime
- Central part (where error increases): Critical regime

## Explanation
Double descent is recent, unexpected, and somewhat puzzling. It results from an interaction of two phenomena:
1. The test performance becomes temporarily worse when the model has just enough capacity to memorize the data. This is exactly as predicted by the bias-variance tradeoff.
2. The test performance continues to improve with capacity even when this exceeds the point where all the training data are classified correctly. This phenomenon is confusing; it's unclear why performance should be better in the over-parametrized regime, given there are not even enough training data points to constrain the model parameters uniquely.

To understand why performance continues to improve as we add more parameters, note that once the model has enough capacity to drive the training loss to near zero, the model f