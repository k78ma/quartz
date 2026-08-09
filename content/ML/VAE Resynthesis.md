---
title: VAE Resynthesis
tags:
  - dl
date: 2026-08-08
aliases: vae resynthesis
---
[[Variational Autoencoder|VAEs]] can be used to modify real data.

A data point $x$ can be projected into the latent space by either:
- Taking the mean of the distribution predicted by the encoder
- Using an optimization procedure to find the latent $z$ that maximizes the posterior probability, which Bayes' rule tells us is proportional to $Pr(x|z)Pr(z)$.

In the figure below, multiple images labeled as "neutral" or "smiling" are projected into latent space. The vector representing this change is estimated by taking the difference in latent space between the means of these two groups. A second vector is estimated to represent "mouth closed" versus "mouth open".

![[VAE Resynthesis-1786252966095.webp|564]]

