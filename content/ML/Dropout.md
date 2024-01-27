---
title: Dropout
tags:
  - ml
date: 2024-01-27
aliases:
---
Dropout is a regularization method that was designed to work with deep neural networks. Rather than perturbing data every time we train (see [[Weight Perturbation]]), we'll perturb the network. This is done randomly; on each training step, selecting a set of units on each layer and prohibiting them from participating. 

Thus, all of the units will have to take "collective responsibility" of getting the answer right, and the network can't rely on a small set of weights to do the majority of the computation. This tends also to make the network more robust to data perturbations.

During the training phase, for each phase, for each training example, for each unit, we randomly set $a_{j}^{l} := 0$ with probability $p$. There will be no contribution to the output and no gradient update for the associated unit. When we are done training and want to use the network to make predictions, we multiply all weights by $p$ to achieve the same average activation levels.

Implementing dropout is easy; during the forward pass, we can simply let
$$
a^{l}=f(z^{l}) * d^{l}
$$
where $*$ is a element-wise product and $d^{l}$ is a vector of 0's and 1's, drawn randomly with probability $p$. The backwards pass depends on $a^{l}$ , so we do not need to make any further changes to the algorithm. 

$p$ is commonly set to $0.5$, but this is subject to experimentation.

