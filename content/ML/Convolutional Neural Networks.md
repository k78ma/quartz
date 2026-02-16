---
title: Convolutional Neural Networks
tags:
  - ml
date: 2024-01-28
aliases:
  - CNNs
  - CNN
---
Typical [[Neural Networks]] provide a general mapping from an input space to an output space. This is a good arrangement when we don’t know anything about what kind of mapping from inputs to outputs we will be asking the network to learn to approximate. But if we do know something about our problem, it is better to build it into the structure of our neural network; doing so can save computation time and significantly diminish the amount of training data required to arrive at a solution that generalizes robustly.

Convolutional layers are ideal for image processing. They can take advantage of the [[Invariance and Equivariance|invariance and equivariance]] properties of images. Each local image region is processed independently, using parameters shared across the whole image. They use fewer parameters than fully connected layers, exploit spatial relationships between nearby pixels, and don't have to re-learn the interpretation of the pixels at every position. A network predominantly consisting of convolutional layers is known as a **convolutional neural network** or **CNN**. 

In [[Convolutional Layer#Convolutional vs. fully-connected layers|convolutional vs. fully-connected layers]], we saw that we can consider a convolutional layer to be a special case of the fully connected layer. However, a fully connected network has to learn what each class looks like at every position; in contrasts, a convolutional network shares information across positions.

Some other ways we can think about it:
- When we train a convolutional network, we search through a smaller family of input/output mappings, all of which are plausible. For a FC network, we are training a larger family of input/output mappings, many of which are implausible.
- The convolutional structure could also be considered a [[Regularization|regularizer]] that applies an infinite penalty to most of the solutions that a fully connected network can describe.

## Motivation
Images have some properties that suggest the need for specialized model architectures as opposed to simple fully connected networks.

An image is described as a two-dimensional array of pixels, A pixel may be represented by three integer values, encoding intensity levels in red, green, and blue color channels. This makes images quite **high-dimensional**; as hidden layers in fully connected networks are generally larger than the input size, so even for a shallow network, the number of weights would be quite large, posing some problems in terms of required data, memory, and compute.

Second, there is the fact of **spatial locality**: nearby image pixels are statistically related. The set of pixels we will have to take into consideration to find a cat in an image will be near one another. However, if the pixels of the training and test images are randomly permuted int he same way, the network could still be trained with no practical difference.

Third, image interpretation is stable under geometric transformations ([[Invariance and Equivariance]]). The pattern of pixels that characterizes a cat is the same no matter where in the image the cat occurs. However, shifting the object changes every input to the network, so a fully connected model must learn the patterns of pixels that signify a cat at every position, which is inefficient.

Parts of CNNs:
- [[1D Convolution]]
- [[Image Filter]]
- [[2D Convolution Example]]
- [[Image Filter Bank]]
- [[Convolutional Layer]]
- [[Tensor|Tensors]]
- [[Max Pooling]]
- [[CNN Architecture]]
