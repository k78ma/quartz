---
title: VAE Disentanglement
tags:
  - dl
date: 2026-08-08
aliases: vae disentanglement
---
In [[VAE Resynthesis]], the directions in space representing interpretably properties had to be estimated using labeled training data. Other works attempts to improve the characteristics of the latent space so that its coordinate directions correspond to real-world properties.

When each dimension represents an independent real-world factor, the latent space is described as *disentangled*. For example, when modeling face images, we might hope to uncover head pose or hair color as independent factors.

Methods to encourage disentanglement typically add regularization terms to the loss function based on either:
- The posterior $q(z|x, \theta)$ over the latent variables $z$
- The [[VAE Generation|aggregated posterior]]

The regularized loss function is
$$
L_{\text{new}} = -\text{ELBO}[\theta, \phi] + \lambda_{1}\mathbb{E}_{Pr(x)}\Big[r_{1}[q(z|x, \theta)] \Big] + \lambda_{2}r_{2}[q(z|\theta)]
$$
- $r_{1}[\bullet]$ is a function of the posterior and weighted by $\lambda_{1}$
- $r_{2}[\bullet]$ is a function of the aggregated posterior and is weighted by $\lambda_{2}$

For example, the *beta VAE* upweights the second term in the ELBO:
$$
\text{ELBO}[\theta, \phi] \approx \log[Pr(x|z^{\ast}, \phi)] - \beta\cdot D_{KL}\Big[q(z|x,\theta) \Big| \Big| Pr(z) \Big]
$$
where $\beta>1$ determines how much more the deviation from the prior $Pr(z)$ is weighted relative to the reconstruction error. Since the prior is usually a multivariate normal with a spherical covariance matrix, its dimensions are independent. Hence, up-weighting this term encourages the posterior distributions to be less correlated. 

Another variant is the *total correlation VAE*, which adds a term to decrease the total correlation between variables in the latent space and maximizes the mutual information between a small subset of the latent variables and the observations.

![[VAE Disentanglement-1786253943337.webp]]