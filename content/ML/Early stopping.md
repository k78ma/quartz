---
title: Early stopping
tags:
  - ml
date: 2024-01-26
aliases:
---
Early stopping is an easy method of regularization. The idea is to train on our training set, but at every epoch (pass through entire training set), we evaluate loss of our current weights $W$ on a validation set.

It will generally be the case that training loss will consistently decrease, while validation loss initially decreases but begins increasing again due to overfitting. Once we see that the validation loss is systematically increasing, we can stop training and return the weights that had the lowest validation error.