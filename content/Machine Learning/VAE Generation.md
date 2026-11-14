---
title: VAE Generation
tags:
  - dl
date: 2026-08-08
aliases:
  - vae generation
  - aggregated posterior
---
[[Variational Autoencoder|VAEs]] build a probabilistic model, and it's easy to sample from this model by drawing from the prior $Pr(z)$ over the latent variable, passing this result through the decoder $f[z,\phi]$, and adding noise according to $Pr(x\, | \,f[z, \phi])$. 

Unfortunately, samples from vanilla VAEs are generally low-quality. This is partly because of the naive spherical Gaussian noise model and partly because of the Gaussian models used for the prior and variational posterior. 

![[VAE Generation-1786251766064.webp|541]]

One trick to improve generation quality is to sample from the *aggregated posterior* rather than the prior. The aggregated prior is given as:
$$
q(z|\theta) = \frac{1}{I} \sum_{i} q(z|x_{i}, \theta)
$$
This is the average posterior over all samples and is a mixture of Gaussians that is more representative of true distribution in latent space.

Modern VAEs can produce high-quality samples, but only by using hierarchical priors and specialized network architectures and regularization techniques. [[Diffusion Model]] can be viewed as VAEs with hierarchical priors, and create very high-quality samples.