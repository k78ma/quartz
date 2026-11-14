---
title: Model Capacity
tags:
  - dl
date: 2025-09-12
aliases:
  - model capacity
  - VC dimension
---
The term *capacity* is used informally to mean the number of parameters or hidden units in the model, and hence indirectly the ability of the model to fit functions of increasing complexity.

The *representational capacity*  of a model describes the space of possible functions it can construct when we consider all parameter values.

When we take into the fact that an optimization algorithm may not be able to reach all these solutions, what is left is the *effective capacity*.

The Vapnik-Chervonenkis dimension (*VC dimension*) is a more formal measure of capacity. It is the largest number of training examples that a binary classifier can label arbitrarily.
- [Here](https://proceedings.neurips.cc/paper/2017/file/b22b257ad0519d4500539da3c8bcf4dd-Paper.pdf) the upper and lower bounds for the VC dimension are derived in terms of the number of layers and weights.

An alternative measure of capacity is the Rademacher complexity, which is the expected empirical performance of a classification model (with optimal parameters) for data with random labels.