---
title: Generative Flows
tags:
  - dl
date: 2026-08-04
aliases:
  - generative flows
  - GLOW
---
Generative flows, or GLOW, is a normalizing flow model that can create high-fidelity images.

![[Generative Flows-1785878647666.webp]]

GLOW is easiest understood in the normalizing direction. 
- Starts with a $256\times 256\times 3$ tensor containing an RGB image.
- Uses [[Coupling Flows|coupling]] layers, in which the channels are partitioned into two halves.
- The second half is subject to a different affine transform at each spatial position, where the parameters of the affine transformation are computed by a 2D convolutional neural network run on the other half of the channels.
- The coupling layers are alternated with [[Operations on Image Representations|1x1 convolutions]], parameterized as LU decompositions which mix the channels.

Periodically, the resolution is halved by combining each $2\times 2$ patch into one position with four times as many channels,.GLOW is a multi-scale flow, and some of the channels are periodically removed to become part of the latent vector $z$. Images are discrete (due to the quantization of RGB values), so noise is added to the inputs to prevents the training likelihood increasing without bound. This is known as *dequantization*.

To sample more realistic images, the GLOW model samples from the base density raised to a positive power. This chooses examples that are closer to the center of the density rather than from the tails. This is similar to the [[GAN Quality Improvements|truncation]] trick for GANs.
- Notably, the samples are not as good as those from GANs or diffusion models; unknown whether this is due to a fundamental restriction associated with invertible layers or just because there has been less research effort.

As shown in the figure above, we can interpolate using GLOW. Two latent vectors are computed by transforming two real images in the normalizing direction. Intermediate points between these latent vectors are computed by linear interpolation, and these are projected back to image space using the network in the generative direction. The result is a set of images that interpolate realistically between the two real ones.