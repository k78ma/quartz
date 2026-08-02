---
title: Image Translation GAN Models
tags:
  - dl
date: 2026-08-01
aliases:
  - image translation gan models
  - Pix2Pix
  - SRGAN
  - CycleGAN
---
The adversarial discriminator was first used in the context of the [[Generative Adversarial Network|GAN]] for generating random samples, but it can also be used as a prior that favors realism in tasks that translate one data example into another. This is most commonly done with images, where we might want to translate a grayscale image to color, a noisy image to a clean one, a blurry image to a sharp one, or a sketch to a photo-realistic image.

Here we discuss three image translation models that use different amounts of manual labeling. The [[Pix2Pix]] model uses before/after pairs for training. Models with [[Super Resolution GAN|adversarial losses]] use before/after pairs for the main model but also exploit unpaired “after” images in the discriminator. The [[CycleGAN]] model uses unpaired images. 