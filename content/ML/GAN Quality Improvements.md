---
title: GAN Quality Improvements
tags:
  - dl
date: 2026-08-01
aliases:
  - progressive growing
  - minibatch discrimination
  - truncation
---
We've seen that [[Wasserstein GAN]] helps with [[GAN Stability Analysis|GAN training stability]]. However, we need more to generate high-quality images.

## Progressive growing
In progressive growing:
- We first train a GAN that synthesizes 4x4 images using an architecture similar to [[Deep Convolutional GAN|DCGAN]]. 
- Then, we add subsequent layers to the generator, which upsample the representation and perform further processing to create an 8x8 image. 
- The discriminator also has extra layers added to it so that it can receive the higher resolution images and classify them as either being real or generated.

In practice, the higher resolution layers gradually "fade in" over time; initially, the higher-resolution image is an upsampled version of the previous result, passed via a residual connection, and the new layers gradually take over.

![[GAN Quality Improvements-1785608832865.webp]]

## Minibatch discrimination
Mini-batch discrimination ensures that the samples have sufficient variety and hence helps prevent [[GAN Stability Analysis|mode collapse]]. 

This can be done by computing feature statistics across the mini-batches of synthesized and real data. These can be summarized and added as a [[Feature Map|feature map]] (usually toward the end of the discriminator). This allows the discriminator to use the batch statistics as part of its classification; this will send a signal back to the generator, encouraging it to include a similar amount of variation in the synthesized data as in the original set. 

## Truncation
In truncation, only latent variables $z$ with high probability (i.e. close to the mean) are chosen during sampling. This reduces the variation in the samples but improves their quality.

![[GAN Quality Improvements-1785609816719.webp]]

Moving smoothly through the latent space can also sometimes produce realistic interpolations from one synthesized image to another.

![[GAN Quality Improvements-1785609885573.webp]]


#cards/dl 
How does minibatch discrimination help avoid mode collapse in GANs?::Feature statistics across a batch are calculated and included as an input to the discriminator. Thus, the generator is incentivized to produce similar statistics as the real distribution, preventing model collapse.
<!--SR:!fsrs,2026-08-09T05:39:50.657Z,7,7.31530068,2.11121424,2,2,0,0,2026-08-02T05:39:50.657Z-->