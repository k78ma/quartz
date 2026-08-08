---
title: Latent Variable Model
tags:
  - dl
date: 2026-08-05
aliases: latent variable model
---
Latent variable models take an indirect approach to describing a probability distribution $Pr(x)$ over a multi-dimensional variable $x$. Instead of directly writing the expression for $Pr(x)$, they model a joint distribution $Pr(x,z)$ of the data $x$ and an unobserved *hidden* or *latent* variable $z$. They then describe the probability of $Pr(x)$ as a [[Marginalization|marginalization]] of this joint probability so that:
$$
Pr(x) = \int Pr(x,z) \, dz 
$$
Typically, the joint probability $Pr(x,z)$ is broken down using the rules of conditional probability into the *likelihood* of the data with respect to the latent variables term $Pr(x|z)$ and the *prior* $Pr(z)$:
$$
Pr(x) = \int Pr(x|z) Pr(z) \, dz 
$$
This is a relatively indirect approach to describing $Pr(x)$, but it is useful because relatively simple expressions for $Pr(x|z)$ and $Pr(z)$ can define complex distributions $Pr(x)$.

## Mixture of Gaussians
A mixture of Gaussians is a good example of a latent variable model.

![[Latent Variable Model-1785967046606.webp]]

In a 1D mixture of Gaussians, the latent variable $z$ is discrete, and the prior $Pr(z)$ is a categorical distribution with one probability $\lambda_{n}$ for each possible value of $z$. The likelihood $Pr(x|z=n)$ of the data $x$ given that the latent variable $z$ takes value $n$ is normally distributed with mean $\mu_{n}$ and variable $\sigma_{n}^{2}$:
$$
\begin{align*}
Pr(z=n) &= \lambda_{n} \\
Pr(x|z=n) &= \text{Norm}_{x}[\mu_{n}, \sigma_{n}^{2}]
\end{align*}
$$
As we saw above, the probability $Pr(x)$ is given by the marginalization over the latent variable $z$. Here, the latent variable is discrete, so we sum over its possible values to marginalize:
$$
\begin{align*}
Pr(x) &=  \sum_{n=1}^{N}Pr(x, z=n) \\[2ex] 
&= \sum_{n=1}^{N}Pr(x|z=n) \cdot Pr(z=n) \\[2ex] 
&= \sum_{n=1}^{N}\text{Norm}_{x}[\mu_{n}, \sigma_{n}^{2}] \cdot  \lambda_{n}
\end{align*}
$$
Even from simple expressions for the likelihood and prior, we describe a complex multi-modal probability distribution.

We can also extend to [[Nonlinear Latent Variable Model]].

#cards/dl 
Latent variable model::Instead of modeling $Pr(x)$ directly, model a joint distribution $Pr(x,z)$ of the data $x$ and an unobserved *hidden* or *latent* variable $z$. Then, describe $Pr(x)$ as a marginalization of this joint probability:
$$
Pr(x) = \int Pr(x,z) \, dz =\int Pr(x|z) Pr(z) \, dz 
$$