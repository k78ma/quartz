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

Once the image of interest is projected into the latent space, the representation is modified by adding or subtracting these vectors. To generate intermediate images, *spherical linear interpolation (Slerp)* is used rather than linear interpolation.
- This is due to the behavior of [[Curse of Dimensionality|high dimensional space]] – most of the volume of a high-dimensional orange is in the peel. 
    - In a high-dimensional latent space with an approximately isotropic Gaussian distribution, most probability mass is concentrated in a thin shell at a characteristic distance from the origin. Linear interpolation takes a straight path between two latent vectors and may pass through the atypical region near the origin. Slerp instead follows a curved path that remains closer to the typical shell, making the intermediate latent vectors more representative of those encountered during training.
- In 3D, this would be the difference between interpolating along the surface of a sphere versus digging a straight tunnel through its body.

The process of encoding (and possibly modifying) input data before decoding again is known as *resynthesis*. This can also be done with [[Generative Adversarial Network|GANs]] and [[Normalizing Flows|normalizing flows]]. However, in GANs, there is no encoder, so a separate procedure must be used to find the latent variable that corresponds to the observed data.