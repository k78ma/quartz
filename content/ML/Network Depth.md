---
title: Network Depth
tags:
  - dl
date: 2026-09-03
aliases: network depth
---
The [[Universal Approximation Theorem]] states that shallow networks can approximate any function to arbitrary accuracy given enough hidden units. Then, do networks even need to be deep?

First, let's consider the evidence that depth *is* required. Historically there has been a definite correlation between performance and depth. For example, performance on ImageNet initially improved as a function of network depth until training became difficult. Subsequently, [[Residual Connections|residual connections]] and [[Batch Normalization|BatchNorm]] allowed training of deeper networks. Now, almost all SOTA applications use deep networks.

Despite this trend, there have been efforts to use shallower networks, which have achieved decent results. Nonetheless, the balance of evidence suggests that depth is critical; even the shallowest networks with good image classification performance require > 10 layers. However, there is no definitive explanation for why. Three possible explanations are discussed below.

## Complexity of modeled function
Deep networks make functions with many more linear regions than shallow ones for the same parameter count. We also saw that "pathological" functions have been identified that require exponentially more hidden units to model with a shallow network than a deep one.
- Liang & Srikant found quite general families of functions that are more efficiently modeled by deep networks. However, Nye & Saxe found that some of these functions cannot easily be fit by deep networks in practice.
- There is also little evidence that real world functions that we are approximating have these pathologiccal properties.

## Tractability of training
An alternative explanation is that shallow networks with a practical number of hidden units could support high performance, but it is just difficult to find a good solution that both fits the training data well and interpolates sensibly.

One way to show this is to distill successful deep networks into shallower (but wider) student models and see if performance can be maintained. Urban et. al distilled an ensemble of 16 convolutional networks for image classification on CIFAR-10 into student models of varying depths. They found that shallow networks could not replicate the performance of the deeper teacher and that student performance increases as a function of depth for constant parameter budget.

## Inductive bias
Most current models rely on convolutional blocks or transformers. These networks share parameters for local regions of the input data, and often they gradually integrate this information across the whole input. These constraints mean that the functions that these networks can represent are not general. One explanation for the supremacy of deep networks, then, is that these constraints have a good inductive bias and that it is difficult to induce shallow networks to obey these constraints.
