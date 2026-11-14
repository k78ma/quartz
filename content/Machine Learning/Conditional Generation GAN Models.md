---
title: Conditional Generation GAN Models
tags:
  - dl
date: 2026-08-01
aliases:
  - conditional generation gan models
  - conditional GAN
  - auxiliary classifier GAN
  - InfoGAN
---
[[Generative Adversarial Network|GANs]] produce realistic images but don't specify their attributes. For example, for face generation, we can't choose the hair color, ethnicity, or age, without training separate GANs for each combination of characteristics. *Conditional generation* models provide us with this control.

## Conditional GAN
The conditional GAN passes a vector $c$ of attributes to both the generator and the discriminator, which are now written as $g[z, c, \theta]$ and $f[x,z, \phi]$ respectively:
1. The generator aims to transform the latent variable $z$ into a data sample $x$ with the correct attribute $c$.
2. The discriminator's goal is to distinguish between the generated sample with the target attribute or a real sample with the real attribute.

For the generator, the attribute $c$ can be appended to the latent vector $z$. For the discriminator, it may be appended to the input if the data is 1D; for image data, the attribute can be linearly transformed to a 2D representation and appended as an extra channel to the discriminator input or to one of its intermediate hidden layers.

![[Conditional Generation GAN Models-1785626644138.webp]]

- The generator of the conditional GAN also receives an attribute vector $c$ describing some aspect of the image. As usual, the discriminator receives either a real example or a generated sample, but now it also receives the attribute vector; this encourages the samples both to be realistic and compatible with the attribute.

## Auxiliary classifier GAN
The auxiliary classifier GAN or ACGAN simplifies conditional generation by requiring that the discriminator correctly predicts the attribute. 

For a discrete attribute with $C$ categories, the discriminator takes the real/synthesized image as input and has $C+1$ outputs. The first output is passed through a sigmoid function and predicts if the sample is generated or real. The remaining outputs are passed through a softmax to predict the probability that the data belongs to each of the $C$ classes.

![[Conditional Generation GAN Models-1785627038419.webp]]

- The generator of the ACGAN takes a discrete attribute variable. The discriminator must both (i) determine if its input is real or synthetic and (ii) identify the class correctly.

![[Conditional Generation GAN Models-1785627082030.webp]]


## InfoGAN
The conditional GAN and ACGAN both generate samples that have predetermined attributes. InfoGAN attempts to identify important attributes automatically. 
- The generator takes a vector consisting of random noise variables $z$ and *random* attribute variables $c$.
- The discriminator both predicts whether the image is real or synthesized and estimates the attribute variables.

The insight is that interpretable real-world characteristics should be easiest to predict and hence will be represented in the attribute variables $c$. The attributes in $c$ may be discrete (allowing us to use binary/multi-class cross-entropy loss) or continuous (least squares loss). The discrete variables identify categories in the data, and the continuous ones identify gradual modes of variation.

![[Conditional Generation GAN Models-1785627329851.webp]]

- The InfoGAN splits the latent variable into noise $z$ and unspecified random attributes $c$. The discriminator must distinguish if its input is real and also reconstruct these attributes. In practice, this means that the variables $c$ correspond to salient of the data with real-world interpretations (i.e., the latent space is *disentangled*).

![[Conditional Generation GAN Models-1785627351661.webp]]