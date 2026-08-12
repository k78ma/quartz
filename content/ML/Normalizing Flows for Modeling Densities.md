---
title: Normalizing Flows for Modeling Densities
tags:
  - dl
date: 2026-08-04
aliases: normalizing flows for modeling densities
---
Normalizing flows is capable of computing the exact log-likelihood of a new sample, unlike [[GANs]], [[VAE Intuition|VAEs]], and [[Diffusion Model]]. GANs are not probabilistic, and both VAEs and diffusion models can only return a lower bound on the likelihood.

![[Normalizing Flows for Modeling Densities-1785878426777.webp]]

One application of density estimation is anomaly detection; the data distribution of a clean dataset is described using a normalizing flow model. New examples with low probability are flagged as outliers. However, caution must be used as there may exist outliers with high probability that don't fall in the typical set.

## Approximating other density models
Normalizing flows can also learn to generate samples that approximate an existing density which is easy to evaluate but difficult to sample from. In this context, we denote the normalizing flow $Pr(x|\phi)$ as the *student* and the target density $q(x)$ as the *teacher*.

To make progress, we generate samples $x_{i}=f[z_{i}, \phi]$ from the student. Since we generated these samples ourselves, we know their corresponding latent variables $z_{i}$, and we can calculate their likelihood in the student model without inverting. Thus, we can use a model like a [[Autoregressive Flows|masked autoregressive flow]] where inversion is slow.

We define a loss function based on the reverse KL divergence that encourages the student and teacher likelihood to be identical and use this to train the student model:
$$
\hat{\phi} = \underset{\phi}{\operatorname{argmin}}\left[ \text{KL}\left[ \frac{1}{I} \sum_{i=1}^{I} \delta[x-f[z_{i}, \phi]] \;\; \Bigg| \Bigg| \;\; q(x)\right] \right]
$$

![[Normalizing Flows for Modeling Densities-1785879529632.webp]]


This approach contrasts with the typical use of normalizing flows to build a probability model $Pr(x_{i}, \phi)$ of data that came from an unknown distribution with samples $x_{i}$ using maximum likelihood, which relies on the cross-entropy term from the forward KL divergence:
$$
\hat{\phi} = \underset{\phi}{\operatorname{argmin}}\left[ \text{KL}\left[ \frac{1}{I} \sum_{i=1}^{I} \delta[x-x_{i}] \;\; \Bigg| \Bigg| \;\; Pr(x_{i}, \phi)\right] \right]
$$

Normalizing flows can model the posterior in [[Variational Autoencoder|VAEs]] using this trick.