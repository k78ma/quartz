---
title: StyleGAN
tags:
  - dl
date: 2026-08-01
aliases:
---
StyleGAN is a more contemporary [[Generative Adversarial Network|GAN]] that partitions the variation in a dataset into meaningful components, each of which is controlled by a subset of latent variables.

In particular, StyleGAN controls the output image at different *scales* and separates *style* from *noise*.
- For face images, large-scale changes include face shape and head pose, medium-scale changes include the shape and details of facial features, and fine-scale features include hair and skin color.
- The style components respect human-interpretable aspects, while noise aspects represent unimportant variation like the exact placement of hairs and freckles.

So far, the GANs we've seen start from a latent variable $z$ which is drawn from a standard base distribution. This was passed through a series of convolutional layers to produce the output image. However, the latent variable inputs to the generator can (i) be introduced at various points in the architecture and (ii) modify the current representation at these points in different ways. StyleGAN makes these choices judiciously to control scale and to separate style from noise.

![[StyleGAN-1785648323223.webp]]

The main generative branch of StyleGAN starts with a learned constant 4x4 representation with 512 channels. This passes through a series of convolutional layers that gradually upsample the representation to generate the image at its final resolution. Two sets of random latent variables representing style and noise are introduced at each scale; the closer they are to the output, the finer-scale details they represent.

The latent variables that represent noise are independently sampled Gaussian vectors $z_{1}, z_{2}, \dots$ and are injected additively after each convolution operation in the main generative pipeline. They are the same spatial size as the main representation at the point that they are added, but are multiplied by learned per-channel scaling factors $\psi_{1}, \psi_{2}, \dots$, and so contribute in different amounts to each channel. As the resolution of the network increases, this noise contributes at finer scale.

The latent variables the represent style begin as a $1\times 1\times 512$ noise tensor, which is passed through a seven-layer fully connected network to create an intermediate variable $w$. This allows the network to de-correlate aspects of style so that each dimension of $w$ can represent an independent factor like head pose or hair color. This variable $w$ is linearly transformed to a $2\times 1\times 512$ tensor $y$, which is used to set the per-channel mean and variance of the representation across spatial positions in the main branch after noise addition. This is termed *adaptive instance normalization*. A series of vectors are injected in this way at several different points in the main branch, so the same style contributes at different scales.

![[StyleGAN-1785648740527.webp]]
