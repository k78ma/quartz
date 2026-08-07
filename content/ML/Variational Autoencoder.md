---
title: Variational Autoencoder
tags:
  - dl
date: 2026-08-05
aliases:
  - variational autoencoder
  - VAE
  - VAEs
---
Variational autoencoders are [[Unsupervised Learning|probabilistic generative models]]; they aim to learn a distribution $Pr(x)$ over the data. After training, we can draw (generate) samples from this distribution. However, unlike [[Normalizing Flows|normalizing flows]], VAEs cannot evaluate the probability of new samples $x^{\ast}$ exactly.

Note that the VAE is not the model of $Pr(x)$; it is the neural architecture that is designed to learn the model for $Pr(x)$. The final model for $Pr(x)$ contains neither the "variational" nor the "autoencoder" parts and might be better described as a [[Nonlinear Latent Variable Model|nonlinear latent variable model]], where we model a joint distribution $Pr(x,z)$ of the data $x$ and an unobserved *hidden* or *latent* variable $z$.

Specifically, we use:
- A *prior* distribution $Pr(z)$ over the latent variable.
- A network $f[z, \phi]$ that maps a latent to the data space.

Then, the likelihood (conditional to $z$) can be found as
$$
Pr(x|z,\phi) = \text{Norm}_{x}\Big[f[z, \phi], \sigma^{2}I \Big]
$$
which can then be [[Marginalization|marginalized]] over $z$ to get the data probability:
$$
\begin{align*}
Pr(x|\phi)  & = \int Pr(x, z|\phi) \, dz \\[2ex] 
 & = \int Pr(x|z, \phi) \cdot Pr(z)\, dz \\[2ex] 
&= \int \text{Norm}_{x}\Big[ f[z, \phi], \sigma^{2}I \Big] \cdot \text{Norm}_{z}[0,I] \, dz  
\end{align*}
$$

## Objective
To train the model, we maximize the log-likelihood over a training dataset $\{ x_{i} \}_{i=1}^{I}$ with respect to the model parameters. For simplicity, we assume that the variance term $\sigma^{2}$ in the likelihood expression is known and concentrate on learning $\phi$:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmax}}\left[ \sum_{i=1}^{I}\log \Big[Pr(x_{i}|\phi) \Big] \right]
$$
where
$$
Pr(x_{i}|\phi) = \int \text{Norm}_{x_{i}}\Big[ f[z, \phi], \sigma^{2}I \Big] \cdot \text{Norm}_{z}[0,I] \, dz
$$
Unfortunately, this is intractable. There is no closed-form expression for the integral and no easy way to evaluate it for a particular value of $x$.

To make progress, we define a lower bound on the log-likehood $\log[Pr(x_{i}|\phi)]$ with [[Evidence Lower Bound|ELBO]]. Given some distribution $q(z)$ with parameters $\theta$, the ELBO can be written in 3 forms:
$$
\begin{align*}
\text{ELBO}[\theta, \phi] &=  \int q(z|\theta) \log\left[ \frac{Pr(x,z|\phi)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \log[Pr(x|\phi)] -D_{KL}\Big[q(z|\theta) \Big| \Big| Pr(z|x, \phi) \Big] \\[2ex] 
&= \int q(z|\theta)\log[Pr(x|z, \phi)] \, dz - D_{KL}\Big[q(z|\theta) \Big| \Big| Pr(z) \Big]
\end{align*}
$$
- The first form is a naive derivation from [[Jensen’s Inequality]]
- The second form shows that ELBO is equal to the log-likelihood (tight) when $q(z|\theta)=Pr(z|x, \phi)$
- The third form expresses ELBO in terms of a *reconstruction accuracy* between the latent variable and the data (first term) and the similarity between the auxiliary distribution $q(z|\theta)$ and the prior.

To learn the nonlinear latent variable model, we maximize this quantity as a function of both $\phi$ and $\theta$. The neural architecture that computes this quantity is the VAE.

## Variational approximation
We saw that ELBO [[Evidence Lower Bound#Tightness of the bound|tight]] when $q(z|\theta)$ is the *posterior* $Pr(z|x, \phi)$. In principle, we can compute the posterior using Bayes' rule:
$$
Pr(z|x, \phi) = \frac{Pr(x|z, \phi)Pr(z)}{Pr(x|\phi)}
$$
but in practice, this is intractable because we can't evaluate the evidence term $Pr(x|\phi)$ in the denominator.

One solution is to make a variational approximation: we choose a simple parametric form for $q(z|\theta)$ and use this to approximate the true posterior $Pr(z|x, \phi)$. 