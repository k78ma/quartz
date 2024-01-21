---
title: Batch Gradient Descent
tags:
  - ml
date: 2024-01-21
aliases:
  - batches
---
Assume that we have an objective of the form:
$$
J(W) = \sum_{i=1}^{n}\mathcal{L}(h(x^{(i)}; W), y^{(i)})
$$
where $h$ is the function computed by the neural network, and $W$ is the weight matrices and vectors of the network.

When we perform "naive" *batch* gradient descent, we use the update rule
$$
W := W - \eta \nabla_{W}J(W)
$$
which is equivalent to
$$
W := W - \eta \sum_{i=1}^{n}\nabla_{W}\mathcal{L}(h(x^{(i)}; W), y^{(i)})
$$
So, we sum up the gradient of loss et each training point, with respect to $W$, and then take a step in the negative direction of the gradient.

In [[Stochastic Gradient Descent]], we repeatedly pick a point $(x^{(i)}, y^{(i)})$ at random from the data set, and execute a weight update on that point alone:
$$
W := W- \eta \nabla_{W} \mathcal{L}(h(x^{(i)}; W), y^{(i)})
$$
If we pick points uniformly from the dataset, and decrease $\eta$ at an appropriate rate, we are guaranteed, with high probability, to converge at least to a local optimum.

### Batch vs. Stochastic
The batch method takes steps in the exact gradient direction but requires a lot of computation, especially if the dataset is large. The stochastic method begins moving right away, and can sometimes make very good progress before looking at even a substantial fraction of the whole data set, but if there is a lot of variability in the data, it might require a very small $\eta$ to effectively average over the individual steps moving in “competing” directions. 

### Mini-batches
An effective strategy is to “average” between batch and stochastic gradient descent by using *mini-batches*. For a mini-batch of size $k$, we select $k$ distinct data points uniformly at random from the data set and do the update based on just their contributions to the gradient:
$$
W := W - \eta \sum_{i=1}^{k} \nabla_{W}\mathcal{L}(h(x^{(i)};W), y^{(i)})
$$
For $k=1$, this would be equivalent to SGD; for $k=n$, this would be equivalent to naive batch descent.

Picking $k$ unique points at random from a large data-set is potentially computationally difficult. An alternative strategy, if you have an efficient procedure for randomly shuffling the data set (or randomly shuffling a list of indices into the data set) is to operate in a loop, roughly as follows:

![[Batch Gradient Descent.png|552]]