---
title: Pix2Pix
tags:
  - dl
date: 2026-08-01
aliases:
---
Pix2Pix is an image translation network $x=g[c,\theta]$ that maps one image $c$ to a different style image $x$ using a [[U-Net]] with parameters $\theta$. A typical use case would be colorization, where the input is grayscale, and the output is color. The output should be similar to the input, and this is encouraged using a *content loss* that penalizes the [[Vector Norm|L1 norm]] $|| x-g[c,\theta] ||_{1}$ between the input and output.

However, the output image should also look like a realistic conversion of the input. This is encouraged by using an adversarial discriminator $f[c,x,\phi]$, which ingests the before and after images $c$ and $x$. At each step, the discriminator tries to distinguish between a real before/after pair and a before/synthesized pair. Through this, feedback is provided to modify the U-Net to make its output more realistic. Since the content loss ensures that the large-scale image structure is correct, the discriminator mainly ensures that the local texture is plausible. To this end, the *PatchGAN* loss is based on a purely convolutional classifier. At the last layer, each hidden unit indicates whether the region within its receptive field is real or synthesized. These responses are averaged to provide the final output.

One way to think of this model is that it is a [[Conditional Generation GAN Models|conditional GAN]] where the U-Net is the generator and is conditioned on an image rather than a label. However, note that the U-Net input does not include noise and so is not really a "generator" in the conventional sense.
- The authors experimented with adding noise to the U-Net in addition to the input image, but the network just learned to ignore it.

![[Image Translation GAN Models-1785635855561.webp]]