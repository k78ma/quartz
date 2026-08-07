---
title: Nonlinear Latent Variable Model
tags:
  - dl
date: 2026-08-05
aliases: nonlinear latent variable model
---
In the nonlinear [[Latent Variable Model|latent variable model]], both the data $x$ and the latent variable $z$ are continuous and multivariate.

The *prior* $Pr(z)$ is a standard multivariate normal:
$$
Pr(z) = \text{Norm}_{z}[0,I]
$$

The *likelihood* $Pr(x|z, \phi)$ is also normally distributed; its mean is a nonlinear function $f[z,\phi]$ of the latent variable, and its covariance $\sigma^{2}I$ is spherical:
$$
Pr(x|z,\phi) = \text{Norm}_{x}\Big[f[z, \phi], \sigma^{2}I \Big]
$$
- The function $f[z, \phi]$ is described by a deep network with parameters $\phi$. 
- The latent variable $z$ is lower dimensional than the data $x$. 
- The model $f[z,\phi]$ describes the important aspects of the data, and the remaining unmodeled aspects are ascribed to the noise $\sigma^{2}I$.

The data probability $Pr(x| \phi)$ is found by marginalizing over the latent variable $z$:
$$
\begin{align*}
Pr(x|\phi)  & = \int Pr(x, z|\phi) \, dz \\[2ex] 
 & = \int Pr(x|z, \phi) \cdot Pr(z)\, dz \\[2ex] 
&= \int \text{Norm}_{x}\Big[ f[z, \phi], \sigma^{2}I \Big] \cdot \text{Norm}_{z}[0,I] \, dz  
\end{align*}
$$
This can be viewed as an infinite weighted sum (infinite mixture) of spherical Gaussians with different means, where the weights are $Pr(z)$ and the means are the network outputs $f[z, \phi]$.

![[Nonlinear Latent Variable Model-1785970671041.webp|554]]


## Generation
A new example $x^{\ast }$ can be generated using [[Ancestral Sampling|ancestral sampling]]. We draw $z^{\ast }$ from the prior $Pr(z)$ and pass this through the network $f[z^{\ast }, \phi]$ to compute the mean of the likelihood $Pr(x|z^{\ast }, \phi)$, from which we draw $x^{\ast }$. Both the prior and likelihood are normal distributions, so this is straightforward.

![[Nonlinear Latent Variable Model-1785970754478.webp]]