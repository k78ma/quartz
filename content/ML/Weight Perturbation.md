---
title: Weight Perturbation
tags:
  - ml
date: 2024-01-27
aliases:
---
Weight perturbation is a regularization technique aiming to achieve robust generalization. It works by perturbing the $x^{(i)}$ values of the training data by adding a small amount of zero-mean normally distributed noise before each gradient computation. 

Intuitively, it makes sense that it would be more difficult for the network to overfit to particular training data if they are changed slightly on each training step