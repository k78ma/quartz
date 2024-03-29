---
title: Neural Network
tags:
  - ml
date: 2024-01-28
aliases:
---
Neural networks can be viewed from several perspectives:
1. An application of gradient descent for classification and regression with a potentially very rich hypothesis class.
2. A brain-inspired network of neuron-like computing elements that learn distributed representations.
3. A method for building applications that make predictions based on huge amounts of data in very complex domains.

## History
The basic idea is founded on the 1943 model of neurons of McCulloch and Pitts and learning ideas of Hebb. There was a great deal of excitement, but not a lot of practical success; there were good training methods (e.g., [[Perceptron]]) for linear functions, and interesting examples of non-linear functions, but no good way to train non-linear functions from data. Interest died out for a while, but was re-kindled in the 1980s when several people came up with a way to train neural networks with [[Backpropagation]], which is a particular style of implementing [[Gradient Descent]].

By the mid-90s, the enthusiasm waned again, because although we could train non-linear networks, the training tended to be slow and was plagued by a problem of getting stuck in local optima. Support vector machines (regularization of high-dimensional hypotheses by seeking to maximize the margin) and kernel methods (an efficient and beautiful way of using feature transformations to non-linearly transform data into a higher-dimensional space) provided reliable learning methods with guaranteed convergence and no local optima. However, during the SVM enthusiasm, several groups kept working on neural networks, and their work, in combination with an increase in available data and computation, has made them rise again. They have become much more reliable and capable, and are now the method of choice in many applications.

## General Definition
A neural network in general takes in an input $x \in \mathbb{R}^{m}$ and generates an output $a \in \mathbb{R}^{n}$. It is constructed from simple [[Artificial Neuron|neurons]]; the input/output of each neuron might be elements of $x$ and/or outputs of other neurons. The outputs are generated by $n$ output units.

In their most basic form, networks are feed-forward; these networks define graphs that are *acyclic*, such that the input to a neuron can never depend on that neuron's output. Data flows one way: from inputs to outputs, and the function computed by the network is a composition of the functions computed by individual neurons.

For simplicity of analysis, networks are generally organized into layers; a layer is a group of neurons in parallel, such that their inputs are outputs of neurons in the previous layer, and their outputs are the input to the neurons in the next layer.

See:
- [[Single-layer Neural Network]]
- [[Multi-layer Neural Network]]