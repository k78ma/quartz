---
title: Pruning
tags:
  - dl
date: 2026-09-03
aliases: pruning
---
Pruning trained models reduces their size and hence storage requirements.

![[Pruning-1788490614477.webp]]

The simplest approach is to remove individual weights. This can be done based on the second derivatives of the loss function or (more practically) based on the absolute value of the weight. Other work prunes hidden units, channels, in convolutional networks, or entire layers in residual nets. Often, the network is fine-tuned after pruning, and sometimes the process is repeated.

It has been shown that VGG can maintain good performance when only 8% of the weights were retained. This significantly reduces model size but isn't enough to show that [[Overparameterization|overparameterization]] is not required; the VGG networks has ~100 times as many parameters as there are ImageNet training data, without even accounting for augmentation.

Pruning is a form of architecture search. In the work on the [[Lottery Ticket Hypothesis|lottery ticket hypothesis]], they:
1) Trained a network
2) Pruned the weights with the smallest magnitudes
3) Retrained the remaining network from the same initial weights

By iterating this procedure, they reduced the size of VGG-19 by 98.5% while maintaining good performance on CIFAR-10. For ResNet-50, they reduced the weights by 80% without reducing the performance on ImageNet.