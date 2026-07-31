---
title: Deep Convolutional GAN
tags:
  - dl
date: 2026-07-30
aliases:
  - deep convolutional gan
  - DCGAN
---
DCGAN was an early GAN architecture specialized for image generation. 
- The input to the generator $g[z, \theta]$ is a 100D latent variable $z$ sampled form a uniform distribution.
- This is then mapped to a $4\times 4$ spatial representation with 1024 channels using a linear transformation.
- Four convolutional layers follow, each of which uses a convolution that doubles the resolution (stride of 0.5).
- At the final layer, the $64\times 64\times 3$ signal is passed through a $\tanh$ function to generate an image $x^{\ast }$ in the range $[-1, 1]$.
- The discriminator $f[\bullet, \phi]$ is a standard convolutional network where the final convolutional layer reduces the size to $1\times 1$ with one channel. This single number is passed through a sigmoid function to create the output probability.
- After training, the discriminator is discarded. To create new samples, latent variables $z$ are drawn from the base distribution and passed through the generator.

![[Deep Convolutional GAN-1785461310038.webp]]

![[Deep Convolutional GAN-1785461346874.webp]]