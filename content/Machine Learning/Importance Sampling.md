---
title: Importance Sampling
tags:
  - dl
date: 2026-08-08
aliases: importance sampling
---
Unlike [[Normalizing Flows|normalizing flows]], it's not possible to exactly evaluate the probability of a sample with the [[Variational Autoencoder|VAE]], which describes this probability as:
$$
\begin{align*}
Pr(x) &= \int Pr(x|z)Pr(z) \, dz \\[2ex] 
&= \mathbb{E}_{z} \Big[Pr(x|z) \Big] \\[2ex] 
&= \mathbb{E}_{z} \Big[\text{Norm}_{x}[f[z, \phi], \sigma^{2}I] \Big]
\end{align*}
$$
In principle, we could approximate this probability using the Monte Carlo estimate by drawing samples from $Pr(z)=\text{Norm}_{z}[0,I]$ and computing:
$$
Pr(x) \approx \frac{1}{N} \sum_{n=1}^{N}Pr(x|z_{n})
$$
However, the [[Curse of Dimensionality|curse of dimensionality]] means that almost all values of $z_{n}$ that we draw would have a very low probability $Pr(x|z_{n})$. We would have to draw an enormous number of samples to get a reliable estimate. A better approach is to use *importance sampling*.

Here, we sample $z$ from an auxiliary distribution $q(z)$, evaluate $Pr(x|z_{n})$, and rescale the resulting values by probability under the new distribution:
$$
\begin{align*}
Pr(x) &= \int Pr(x|z)Pr(z) \, dz \\[2ex] 
&= \int \frac{Pr(x|z)Pr(z)}{q(z)} q(z)\, dz \\[2ex] 
&= \mathbb{E}_{q(z)} \left[ \frac{Pr(x|z)Pr(z)}{q(z)} \right] \\[2ex] 
&\approx \frac{1}{N} \sum_{n=1}^{N} \frac{Pr(x|z_{n})Pr(z_{n})}{q(z_{n})}
\end{align*}
$$
where now we draw the samples from $q(z)$. If $q(z)$ is close to the region of $z$ where the $Pr(x|z)$ has high likelihood, then we will focus the sampling on the relevant area of space and estimate $Pr(x)$ much more efficiently.

The product $Pr(x|z)Pr(z)$ that we are trying to integrate is proportional to the posterior distribution $Pr(z|x)$ by [[Bayes' Rule]]. Hence, a sensible choice of auxiliary distribution $q(z)$ is the variational posterior $q(z|x)$ computed by the encoder.

In this way, we can approximate the probability of new samples. With sufficient samples, this will provide a better estimate than the lower bound and could be used to evaluate the quality of the model by evaluating the log-likelihood of test data. Alternatively, it could be used as a criterion for determining whether new examples belong to the distribution or are anomalous.