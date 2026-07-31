---
title: GAN Stability
tags:
  - dl
date: 2026-07-30
aliases: gan stability
---
Theoretically, the [[Generative Adversarial Network|GAN]] is fairly straightforward. However, they are notoriously difficult to train.
- For example, to get [[Deep Convolutional GAN|DCGAN]] to train reliable, they had to use strided convolutions for upsampling and downsampling, use BatchNorm in both the generator and discriminator except in the last and first layers, use leaky ReLU in the discriminator, use Adam but with a lower momentum coefficient.
- This instability is unusual; many deep learning models are relatively robust to such choices.

A common failure mode is that the generator makes plausible samples, but only representing a subset of the data. This is known as *mode dropping*. An extreme version of this phenomenon can occur where the generator entirely or mostly ignores the latent variable $z$ and collapses all samples to one or a few points; this is known as *mode collapse*.

![[GAN Stability-1785461607736.webp]]


## Loss function analysis
To understand why GANs are difficult to train, it's necessary to understand what the loss function represents.

