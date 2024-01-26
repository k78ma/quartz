---
title: Negative log-likelihood multi-class
tags:
  - ml
date: 2024-01-19
aliases:
---
We can extend the idea of [[Negative log-likelihood]] directly to multi-class classification with $K$ classes, where the training labels is represented with the one-hot vector $y=[y_{1}, \dots, y_{k}]^{T}$, where $y_{k}= 1$ if the example is of class $k$.

Assume that our network uses [[Softmax]] as the activation function in the last layer, so that the output is $a = [a_{1}, \dots, a_{k}]^{T}$, which represents a probability distribution over $K$ possible classes. Then, the probability that our network predicts the correct class for this example is $\prod_{k=1}^{K} a^{y_{k}}_{k}$ and the log of the probability that it is correct is $\sum_{k=1}^{K}y_{k}\log a_{k}$, so
$$
\mathcal{L}_{\text{nllm}}(\text{guess, actual})=-\sum_{k=1}^{K} \text{actual}_{k}, \log(\text{guess}_{k})
$$
We'll call this NLLM for *negative log likelihood multiclass*.