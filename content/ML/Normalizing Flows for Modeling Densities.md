---
title: Normalizing Flows for Modeling Densities
tags:
  - dl
date: 2026-08-04
aliases: normalizing flows for modeling densities
---
Normalizing flows is capable of computing the exact log-likelihood of a new sample, unlike [[GANs]], [[Variational Autoencoder|VAEs]], and [[Diffusion Models]]. GANs are not probabilistic, and both VAEs and diffusion models can only return a lower bound on the likelihood.

![[Normalizing Flows for Modeling Densities-1785878426777.webp]]

One application of density estimation is anomaly detection; the data distribution of a clean dataset is described using a normalizing flow model. New examples with low probability are flagged as outliers. However, caution must be used as there may exist outliers with high probability that don't fall in the typical set.