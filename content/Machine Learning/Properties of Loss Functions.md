---
title: Properties of Loss Functions
tags:
  - dl
date: 2026-08-31
aliases: properties of loss functions
---
We've seen that various [[Model Performance Factors|model performance factors]], like the number of parameters and the activation function are important. Here we consider the same topic from a different angle by considering the empirical properties of loss functions.

## Multiple global minima
We *expect* loss functions for deep networks to have a large family of equivalent global minima.
- In fully connected networks, the hidden units at each layer and their associated weights can be permuted without changing the output.
- In convolutional networks, permuting the channels and convolution kernels appropriate doesn't change the output.
- We can multiply the weight before any ReLU function and divide the weight after by a positive number without changing the output.
- Using [[Batch Normalization|BatchNorm]] induces another set of redundancies because the mean and variance of each hidden unit or channel are reset.

The above modifications all produce the same output for *every* input. However, the global minimum only depends on the output at the training data points. In overparameterized networks, there will also be families of solutions that behave identically at the data points but differently between them. All of these are also global minima.


## Route to the minimum
Consider a straight line between the initial parameters and the final values. It has been shown ([Qualitatively characterizing neural network optimization problems](https://arxiv.org/abs/1412.6544)) that the loss function along this line usually decreases monotonically, except for a small bump near the start sometimes. This phenomenon is observed for several different types of networks and activation functions (figure 20.5a).

![[Properties of Loss Functions-1788235875099.webp]]

Of course, real optimization trajectories do not proceed in a straight line. However, it has been found that they do lie in low-dimensional subspaces. They attribute this to the existence of large, nearly convex regions in the loss landscape that capture the trajectory early on and funnel it in a few important directions. Surprisingly, it has also been shown that networks still train well if optimization is *constrained* to lie in a random low-dimensional subspace.

![[Properties of Loss Functions-1788235974835.webp]]

It has also been shown that the relative change in the parameters during training decreases as network depth increases; for larger widths, the parameters start at smaller values, change by a smaller proportion of those values, and converge in fewer steps.

## Connections between minima
[Goodfellow et. al](https://arxiv.org/abs/1412.6544) also examined the loss function along a straight line between two minima that were found independently. They saw a pronounced increase in the loss between them; good minima are generally not linearly connected (see figure 20.5b above). However, it has also been shown that this increase vanishes if the networks are identically trained initially and later allowed to diverge by using different SGD noise and augmentation. This suggests that the solution is constrained early in training and that *some* families of minima are linearly connected.

[Essentially No Barriers in Neural Network Energy Landscape](https://proceedings.mlr.press/v80/draxler18a.html) found minima with good (but different) performance on the CIFAR-10 dataset. They then showed that it is possible to construct paths from one to the other, where the loss function remains low along this path. They conclude that there is a single connected manifold of low loss. This seems to be increasingly true as the width and depth of the network increase.

![[Properties of Loss Functions-1788236417275.webp]]


## Curvature of loss surface
Random Gaussian functions (in which points are jointly distributed with covariance given by a [[Kernel Function|kernel function]] of their distance) have an interesting property: for points where the gradient is zero, the fraction of directions where the function curves down becomes smaller when these points occur at lower loss values. Others have searched for saddle points in a neural network loss function and similarly found a correlation between the loss and the number of negative eigenvalues.

![[Properties of Loss Functions-1788236577500.webp]]

Analysis of the error surface of a shallow network and found that there were no local minima but only saddle points. These results suggest that there are few or no bad local minima.

Measuring the curvature at random points on a neural network loss surface led to the finding that the curvature of the surface is unusually positive when the $\ell_{2}$ norm of the weights lies within a certain range, which it termed the *Goldilocks zone*. [[Parameter Initialization|He initialization]] and Xavier initialization fall within this range.

![[Properties of Loss Functions-1788393867402.webp]]