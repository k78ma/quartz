---
title: Model Performance Factors
tags:
  - dl
date: 2026-08-29
aliases: model performance factors
---
## The case against deep learning
Deep learning works unreasonably well – it is surprising the deep networks are easy to train and also surprising that they generalize.

With sufficient hidden units, deep networks will classify almost any training set near-perfectly. Performance of a 2-layer FC network on 10000 MNIST-1D training examples is perfect once there are 43 hidden units per layer or ~4000 parameters. However, finding the global minimum of an arbitrary non-convex function is NP-hard, and this is also true for certain neural network loss functions. It's remarkable that the fitting algorithm doesn't get trapped in local minima or stuck near saddle points, and that it can efficiently recruit spare model capacity to fit unexplained training data wherever they lie.

This is not as surprising when there are a lot more parameters than training data, but it can still be true when this is not the case. [[Decoder Model|GPT-3]] had 175 billion parameters and was trained with 300 billion tokens; not that over-parameterized.

The ability of DNNs to fit neural networks efficiently is even more startling. It's not obvious that typical datasets are sufficient to characterize the input/output mapping. The [[Curse of Dimensionality]] implies that the training dataset is tiny compared to the space of all possible inputs.

Also, DNNs describe very complicated functions. A fully connected network for MNIST-1D with two hidden layers of width 400 can create mappings with up to $10^{42}$ linear regions. That's $10^{38}$ regions per training example, so very few of these regions contain data at any stage during training; regardless, those regions that do encounter data points constrain the remaining regions to behave reasonably.

Generalization gets better with more parameters ([[Double Descent|double descent]]). This is surprising, since more parameters means that the model can do almost anything between the training data, but is able to behave sensibly.

*What might explain the unexpected performance of deep networks?*

## Data
It's important to realize that we can't learn *any* function. Consider a completely random mapping from every possible $28\times 28$ binary image to one of ten categories. Since there is no structure to the function, the only recourse is to memorize the $2^{784}$ assignments. However, it's easy to train a model on MNIST, which contains 60,000 examples of images labeled with one of 10 categories. This might be because it is relatively simple to find global minima.

However, the properties of the dataset also aren't critical. Consider AlexNet on CIFAR-10; when each image is replaced with Gaussian noise and the labels are randomly permuted, learning slowed down, but the network could still fit the finite dataset well.

## Regularization
Another possible explanation for the ease with which models are trained is that some regularization methods like [[L2 Regularization]] make the loss surface flatter and more convex. However, it has been found that neither L2 regularization nor [[Dropout]]is required to fit random data. This does not eliminate [[Implicit Regularization|implicit regularization]] due to the finite step size of fitting algorithms; but this effect should increase with learning rate yet model-fitting does not get easier with larger learning rates.

## Stochastic training algorithms
[[Stochastic Gradient Descent|SGD]] potentially allows the optimization trajectory to move between "valleys" during training. However, it has been that several models can be fit to many datasets almost perfectly, which eliminates most of the randomness, but training still succeeds.

The figure below shows four fully connected models fitted to 4000 MNIST-1D examples with randomized labels using full-batch (non-stochastic) gradient descent. There was no explicit regularization, and the learning rate was set to a small constant value to minimize implicit regularization. Here, the true mapping from data to labels has no structure, the training is deterministic, and there is no regularization, yet the training error still decreases to zero. This suggests that these loss functions may genuinely have no local minima.

![[Model Performance Factors-1788050162025.webp]]

## Overparameterization


## Activation function


## Initialization


## Network depth