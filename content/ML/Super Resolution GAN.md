---
title: Super Resolution GAN
tags:
  - dl
date: 2026-08-01
aliases:
  - SRGAN
  - adversarial loss
---
In [[Pix2Pix]], the discriminator attempts to distinguish whether before/after pairs in an image translation task were plausible. This has the disadvantage of needing ground truth before/after pairs. Fortunately, there is a simpler way to exploit the power of adversarial discriminators in the context of supervised learning without needing additional labeled training data.

An *adversarial loss* is very similar to a traditional [[Generative Adversarial Network|GAN]]. We add a penalty if a discriminator can distinguish synthetic outputs from real examples belonging to the target output domain. Accordingly, the supervised model (generator) changes its predictions to decrease this penalty. This may be done at the scale of the entire output or at the level of patches (as in Pix2Pix). This helps improve the realism of complex structured outputs, but doesn't necessarily lead to a better solution in terms of the original loss function.

The super-resolution GAN or *SRGAN* uses this approach. The main model consists of a convolutional network with residual connections that ingests a low-resolution image and converts this via upsampling layers to a high-resolution image. The network is trained with three losses:
- The content loss takes the (synthetic output, true high-res image) pair and measures the squared difference between them. 
- The VGG loss or perceptual loss passes the synthesized and ground truth outputs through the [[VGG]] network and measures the squared difference between their activations. This encourages the image to be semantically similar to the target.
- The adversarial loss does not take a labeled pair; it just uses a discriminator that attempts to distinguish whether this is a real high-resolution image or a generated one, like a traditional GAN. This encourages the output to be indistinguishable from real examples.

Thus, SRGAN still uses paired data for the content and perceptual loss, but we can add on the adversarial loss without additional paired training data.

![[Image Translation GAN Models-1785636175797.webp]]