---
title: VAE Evidence Lower Bound
tags:
  - dl
date: 2026-08-05
aliases:
  - evidence lower bound
  - ELBO
---
ELBO gives a lower bound on the log-likehood for [[Variational Autoencoder|VAE]] training:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmax}}\left[ \sum_{i=1}^{I}\log \Big[Pr(x_{i}|\phi) \Big] \right]
$$
where
$$
Pr(x_{i}|\phi) = \int \text{Norm}_{x_{i}}\Big[ f[z, \phi], \sigma^{2}I \Big] \cdot \text{Norm}_{z}[0,I] \, dz
$$

Specifically, ELBO is a function that is always less than or equal to the log-likelihood for a given value of $\phi$, and will also depend on some other parameters $\theta$. 

## Jensen's Inequality
To define this lower bound, we need [[Jensen’s Inequality]] for concave functions $g[\bullet]$:
$$
g[\mathbb{E}[y]] \geq \mathbb{E}[g[y]]
$$
In this case, the concave function is the logarithm, so we have:
$$
\log[\mathbb{E}[y]] \geq \mathbb{E}[\log[y]]
$$

![[Evidence Lower Bound-1785985156807.webp]]

Writing out the expectation in full, we have:
$$
\log\left[ \int Pr(y)y \, dy  \right] \geq \int Pr(y) \log[y]\, dy 
$$

![[Evidence Lower Bound-1785985068077.webp|587]]

In fact, a slightly more general statement is true:
$$
\log\left[ \int Pr(y)h(y) \, dy  \right] \geq \int Pr(y) \log[h[y]] \, dy 
$$
where $h[y]$ is a function of $y$. This follows because $h[y]$ is another random variable with a new distribution. Since we never specified $Pr(y)$, the relation remains true.

## Derivation of the bound
We now use Jensen's inequality to derive the lower bound for the log-likelihood. We start by introducing an arbitrary distribution $q(z)$ over the latent variables. Multiplying and dividing the log-likelihood by $q(z)$ lets us re-write the marginal likelihood as an expectation and apply Jensen's inequality.

First:
$$
\begin{align*}
\log[Pr(x|\phi)] &=  \log\left[ \int Pr(x, z|\phi) \, dz  \right] \\[2ex] 
&= \log\left[ \int q(z) \frac{Pr(x,z|\phi)}{q(z)} \, dz  \right]
\end{align*}
$$

We then use Jensen's inequality for the logarithm to find a lower bound:
$$
\log\left[ \int q(z) \frac{Pr(x,z|\phi)}{q(z)} \, dz  \right] \quad \geq \quad \int q(z) \log\left[ \frac{Pr(x,z|\phi)}{q(z)} \right] \, dz 
$$
where the right-hand side is termed the *evidence lower bound* or *ELBO*. It gets this name because $Pr(x|\phi)$ is called the evidence in the context of Bayes' rule.

In practice, the distribution $q(z)$ has parameters $\theta$, so the ELBO can be written as:
$$
\text{ELBO}[\theta, \phi] = \int q(z|\theta) \log\left[ \frac{Pr(x,z|\phi)}{q(z|\theta)} \right] \, dz 
$$
To learn the [[Nonlinear Latent Variable Model|nonlinear latent variable model]], we maximize this quantity as a function of both $\phi$ and $\theta$. The neural architecture that computes this quantity is the [[Variational Autoencoder|VAE]].

## Properties
Let's build some intuition about ELBO. 

Consider that the original log-likelihood of the data is a function of the parameters $\phi$ and that we want to find its maximum. For any fixed $\theta$, the ELBO is still a function of the parameters, but one that must lie below the original likelihood function.
- When we change $\theta$, we modify this function, and depending on our choice, the lower bound may move closer or further from the log-likelihood. 
- When we change $\phi$, we move along the lower bound function.

![[Evidence Lower Bound-1786043315158.webp]]

### Tightness of the bound
The ELBO is *tight* when, for a fixed value of $\phi$, the ELBO and the log-likelihood function coincide.

To find the distribution $q(z|\theta)$ that makes the bound tight, we factor the numerator of the log term in the ELBO using the definition of conditional probability:
$$
\begin{align*}
\text{ELBO}[\theta, \phi] &= \int q(z|\theta) \log\left[ \frac{Pr(x,z|\phi)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \int q(z|\theta) \log\left[ \frac{Pr(z|x, \phi)Pr(x|\phi)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \int q(z|\theta)\log[Pr(x|\phi)] \, dz    + \int q(z|\theta)\log\left[ \frac{Pr(z|x,\phi)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \log[Pr(x|\phi)] + \int q(z|\theta)\log\left[ \frac{Pr(z|x, \phi)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \log[Pr(x|\phi)] -D_{KL}\Big[q(z|\theta) \Big| \Big| Pr(z|x, \phi) \Big]
\end{align*}
$$
- The first integral disappears between lines 3 and 4 since $\log[Pr(x|\phi)]$ does not depend on $z$, and the integral of the probability distribution $q(z|\theta)$ is one.
- In the last line, we used the definition of [[Kullback-Leibler Divergence|KL divergence]].

This shows that the ELBO is the original log-likelihood minus the KL divergence $D_{KL}[q(z|\theta) | | Pr(z|x, \phi) ]$. The KL divergence measures the "distance" between distributions and is always non-negative. Thus, it's clear that the ELBO is a lower bound on $\log[Pr(x|\phi)]$.

When $q(z|\theta)=Pr(z|x, \phi)$, the KL distance will be zero, and the bound is *tight*. $Pr(z|x, \phi)$ is the *posterior* distribution over the latent variables $z$ given observed data $x$; it indicates which values of the latent variable could have been responsible for the data point.

![[Evidence Lower Bound-1786072674424.webp]]


### ELBO as reconstruction minus KL distance to prior
We have seen two ways to describe ELBO. A third way is to consider the bound as reconstruction error minus the distance to the prior:
$$
\begin{align*}
\text{ELBO} &= \int q(z|\theta) \log\left[ \frac{Pr(x, z|\phi)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \int q(z|\theta) \log\left[ \frac{Pr(x|z, \phi)Pr(z)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \int q(z|\theta)\log[Pr(x|z, \phi)] \, dz + \int q(z|\theta) \log\left[ \frac{Pr(z)}{q(z|\theta)} \right] \, dz \\[2ex] 
&= \int q(z|\theta)\log[Pr(x|z, \phi)] \, dz - D_{KL}\Big[q(z|\theta) \Big| \Big| Pr(z) \Big]
\end{align*}
$$
- The joint distribution $Pr(x,z|\phi)$ has been factored into conditional probability $Pr(x|z, \phi)Pr(z)$ between the first and second lines
- The definition of KL divergence is used in the last line.

In this formulation:
1. The first term measures the average agreement $Pr(x|z, \phi)$ of the latent variable and the data. This measures the *reconstruction accuracy*.
    - The $q(z|\theta)$ term identifies latents $z$ that might explain $x$. $Pr(x|z, \phi)$ measures how much probability is assigned to the observed $z$ given $z$. The integral then averages this score over all possible $z$'s.
2. The second term measures the degree to which the auxiliary distribution $q(z|\theta)$ matches the prior.

This formulation is the one that is used in the [[Variational Autoencoder|variational autoencoder]].

While we initially introduced $q(z)$ as a mathematical tool, we now see that $q(z)$ has an important role in the tightness of ELBO, where the bound is tight when $q(z) = Pr(z|x, \phi)$. We therefore choose a tractable parameterized distribution $q(z|x, \theta)$ (usually a multivariate normal distribution) and optimize it as an approximation to the generally intractable $Pr(z|x, \phi)$. This approximation is called the *variational posterior*.