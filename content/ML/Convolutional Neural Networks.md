---
title: Convolutional Neural Networks
tags:
  - ml
date: 2024-01-28
aliases:
---
Typical [[Neural Networks]] provide a general mapping from an input space to an output space. This is a good arrangement when we don’t know anything about what kind of mapping from inputs to outputs we will be asking the network to learn to approximate. But if we do know something about our problem, it is better to build it into the structure of our neural network; doing so can save computation time and significantly diminish the amount of training data required to arrive at a solution that generalizes robustly. Convolutional networks are ideal for processing image inputs as they take advantage of invariant properties of images.

An image is described as a two-dimensional array of pixels, A pixel may be represented by three integer values, encoding intensity levels in red, green, and blue color channels. Using the example of classifying whether an image has a cat or not as an example, there are two important pieces of prior structural knowledge we can bring to bear on this problem. 
- **Spatial locality:** The set of pixels we will have to take into consideration to find a cat will be near one another in the image.
- **Translation invariance:** The pattern of pixels that characterizes a cat is the same no matter where in the image the cat occurs.

Parts of CNNs:
- [[2D Convolutions]]
- [[Max Pooling]]
- [[CNN Architecture]]
