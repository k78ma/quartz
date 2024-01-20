---
title: Output Activation Functions
tags:
  - ml
date: 2024-01-19
aliases:
---
Loss functions make different assumptions about the range of inputs they will get as input; activation functions will produce output values in different ranges. When we design a neural network, it’s important to make these things fit together well. In particular, we will think about matching loss functions with the activation function in the last layer, $f^{L}$. 

Here is a table of loss functions and activations that make sense for them:

| Loss    | $f^{L}$ |
| ------- | ------- |
| squared | linear  |
| hinge   | linear  |
| NLL     | sigmoid |
| NLLM    | softmax |

### Binary Classification
- For classification, the natural loss function is [[Loss Function|0-1 loss]], but it's inconvenient because its derivative is discontinuous.
- [[Negative log-likelihood]] is nice and smooth and extends nicely to multiple classes.
- [[Hinge Loss]] gives us another way for binary classification problems, to make a smoother objective. It has the property that, if the sign of our guess is the same as the sign of actual and the magnitude of guess is greater than 1, then the loss is 0. It is trying to enforce not only that the guess have the correct sign, but also that it should be some distance away from the separator. Using hinge loss, together with a squared norm regularizer, actually forces the learning process to try to find a separator that has the maximum margin relative to the data set. This optimization set-up is called a [[support vector machine]], and was popular before the renaissance of neural networks and gradient descent, because it has a quadratic form that makes it particularly easy to optimize.

For multi-class classification, see:[[Negative log-likelihood multi-class]]

For regression, we often want the last-layer activation function to simply be the identity (or no activation function), since we don't need to interpret anything as a probability, just output a number.