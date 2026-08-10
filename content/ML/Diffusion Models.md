---
title: Diffusion Models
tags:
  - dl
date: 2026-07-29
aliases:
  - diffusion models
  - diffusion model
---
Diffusion models are [[Unsupervised Learning|probabilistic generative models]] that define a nonlinear mapping from latent variables to the observed data.
- Like [[Normalizing Flows|normalizing flows]], the latent variables and observed data have the same dimensions.
- Like [[Variational Autoencoder|VAEs]], they approximate the data likelihood using a lower bound based on an encoder that maps to the latent variable. However, in diffusion models, the encoder is pre-determined; the goal is to learn a decoder that is the inverse of this process and can be used to produce samples.

Diffusion models are easy to train and can produce very high-quality samples that exceed the realism of [[Generative Adversarial Network|GANs]].

## Overview
A diffusion model consists of an [[Diffusion Encoder|encoder]] and a [[Diffusion Decoder|decoder]]:
- The encoder takes a data sample $x$ and maps it through a series of intermediate latent variables $z_{1},\dots,z_{T}$.
- The decoder reverses this process; it starts with $z_{T}$ and maps back through $z_{T-1},\dots,z_{1}$ until it finally re-creates the data point $x$.

In both the encoder and the decoder, the mappings are stochastic rather than deterministic.

![[Diffusion Models-1786317158171.webp]]

The encoder is pre-specified; it gradually blends the input with samples of white noise. With enough steps, the conditional distribution $q(z_{T}|x)$ and marginal distribution $q(z_{T})$ of the final latent variable both become the standard normal distribution. Since this is all pre-specified, all the learned parameters are in the decoder.

In the decoder, a series of netwoks are trained to map backward between each adjacent pairs of latent variables $z_{t}$ and $z_{t-1}$. The loss function encourages each network to invert the corresponding encoder step. The result is that the noise is gradually removed from the representation until a realistic-looking data example remains. To generate a new data example $x$, we draw a sample from $q(z_{T})$ and pass it through the decoder.

## Components
- [[Diffusion Encoder]]
- [[Diffusion Decoder]]
- [[Diffusion Training]]