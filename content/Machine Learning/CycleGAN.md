---
title: CycleGAN
tags:
  - dl
date: 2026-08-01
aliases: cyclegan
---
In models like [[Super Resolution GAN|SRGAN]], loss functions assume that we have labeled before/after images for the main supervised network. CycleGAN addresses the situation where we have two sets of data with distinct styles but no matching pairs.
- An example is converting a photo to the artistic style of Monet. There exist many photos and many Monet paintings, but no correspondence between them.

CycleGAN exploits the idea that converting an image in one direction (e.g., photo → Monet) and then back again should recover the original.

The CycleGAN loss function is a weighted sum of three losses:
- The content loss encourage the before and after images to be similar and is based on the $\ell_{1}$ norm.
- The adversarial loss uses a discriminator to encourage the output to be indistinguishable from real examples of the target domain.
- The cycle-consistency loss encourages the mapping to be reversible.

Here, two models are trained together. One maps from the first domain to the second, and the other in the opposite direction. The cycle-consistency loss will be low if the translated image can be itself translated successfully back to the image in the original domain. The model combines these three losses to train networks to translate images from one style to another and back again.

![[CycleGAN-1785636662680.webp]]