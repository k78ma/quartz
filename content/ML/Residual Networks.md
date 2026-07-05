---
title: Residual Networks
tags:
  - dl
date: 2026-06-22
aliases:
  - residual networks
  - residual network
---
Residual neural networks use [[Residual Connections|residual blocks]], where each network layer compute an additive change to the current representation instead of transforming it directly. This causes an exponential increase in the activation magnitudes at initialization, which is compensated using [[Batch Normalization|batch normalization]]. Residual blocks with batch normalization allow much deeper networks to be trained, leading to increased performance across a variety of tasks. Specifically, they solve the problem of [[Shattered Gradients|shattered gradients]] for deep networks.

Architectures;
- [[ResNet]]
- [[DenseNet]]
- [[U-Net]]

Why do residual networks perform well? They allow deeper networks to be trained, and the loss surfaces of residual networks around a minimum tend to be smoother and more predictable than those for the same network when the skip connections are removed.

![[Residual Networks-1782410851352.webp]]
