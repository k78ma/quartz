---
title: Diffusion Model
tags:
  - dl
date: 2026-07-29
aliases:
  - diffusion models
  - diffusion model
---
Diffusion models are [[Unsupervised Learning|probabilistic generative models]] that define a nonlinear mapping from latent variables to the observed data.
- Like [[Normalizing Flows|normalizing flows]], the latent variables and observed data have the same dimensions.
- Like [[Variational Autoencoder|VAEs]], they approximate the data likelihood using a lower bound based on an encoder that maps to the latent variable. However, in diffusion models, the encoder is pre-determined; the goal is to learn a decoder that is the inverse of this process and can be used to produce samples.

Diffusion models are easy to train and can produce very high-quality samples that exceed the realism of [[Generative Adversarial Network|GANs]].

## Overview
A diffusion model consists of an [[Diffusion Encoder|encoder]] and a [[Diffusion Decoder|decoder]]:
- The encoder takes a data sample $x$ and maps it through a series of intermediate latent variables $z_{1},\dots,z_{T}$.
- The decoder reverses this process; it starts with $z_{T}$ and maps back through $z_{T-1},\dots,z_{1}$ until it finally re-creates the data point $x$.

In both the encoder and the decoder, the mappings are stochastic rather than deterministic.

![[Diffusion Models-1786317158171.webp]]

The encoder is pre-specified; it gradually blends the input with samples of white noise. With enough steps, the conditional distribution $q(z_{T}|x)$ and marginal distribution $q(z_{T})$ of the final latent variable both become the standard normal distribution. Since this is all pre-specified, all the learned parameters are in the decoder.

In the decoder, a series of netwoks are trained to map backward between each adjacent pairs of latent variables $z_{t}$ and $z_{t-1}$. The loss function encourages each network to invert the corresponding encoder step. The result is that the noise is gradually removed from the representation until a realistic-looking data example remains. To generate a new data example $x$, we draw a sample from $q(z_{T})$ and pass it through the decoder.

## Encoder
The [[Diffusion Encoder]] maps the data example $x$ through a series of intermediate variables:
$$
\begin{align*}
z_{1}&= \sqrt{ 1-\beta_{1} } \cdot  x + \sqrt{ \beta_{1} }\cdot \epsilon_{1}  \\
z_{t}&= \sqrt{ 1-\beta_{t} }\cdot z_{t-1} + \sqrt{ \beta_{t} } \cdot  \epsilon_{t} \quad  \,\, \forall \, t \in  2,\dots,T
\end{align*}
$$
We can find $z_{t}$ without the intermediate variables using a *diffusion kernel*:
$$
\begin{align*}
z_{t}&= \sqrt{ \alpha_{t} } \cdot  x + \sqrt{ 1-\alpha_{t} }\cdot \epsilon \\[2ex] 
\alpha_{t} &= \prod_{s=1}^{t}(1-\beta_{s})
\end{align*}
$$
Or in probabilistic form:
$$
q(z_{t}|x) = \text{Norm}_{z_{t}}[\sqrt{ a_{t} }\cdot x, (1-\alpha_{t})I]
$$
With this, we can marginalize to find the marginal distributions
$$
q(z_{t}) = \int q(z_{t}|x)Pr(x) \, dx 
$$
We can also Bayes' rule to find the conditional distribution $q(z_{t-1}|z_{t})$:
$$
q(z_{t-1}|z_{t}) = \frac{q(z_{t}|z_{t-1})q(z_{t-1})}{q(z_{t})}
$$
but this is intractable so we just approximate it using a normal distribution.

Similarly, we can also use Bayes' rule to find the conditional diffusion distribution $q(z_{t-1}|z_{t}, x)$:
$$
\begin{align*}
q(z_{t-1}|z_{t},x) &=  \frac{q(z_{t}|z_{t-1}, x)q(z_{t-1}|x)}{q(z_{t}|x)} \\[2ex] 
&\propto  \text{Norm}_{z_{t-1}}\left[ \frac{1}{\sqrt{ 1-\beta_{t} }}z_{t}, \frac{\beta_{t}}{1-\beta_{t}}I \right]\text{Norm}_{z_{t-1}} [\sqrt{ \alpha_{t-1} }\cdot x, (1-\alpha_{t-1})I]
\end{align*}
$$
## Decoder
The [[Diffusion Decoder]] learns the reverse of the encoder. It maps from latent variables $z_{T}, z_{T - 1},\dots$ back to the data $x$. We saw that the true reverse distributions $q(z_{t-1}|z_{t})$ are intractable, so we approximate them as normal distributions:
$$
\begin{align*}
Pr(z_{T}) &=  \text{Norm}_{z_{T}}[0,I]  \\
Pr(z_{t-1}|z_{t}, \phi_{t}) &= \text{Norm}_{z_{t-1}}[f_{t}[z_{t}, \phi_{t}], \sigma_{t}^{2}I]  \\
Pr(x|z_{1}, \phi_{1})&= \text{Norm}_{x}[f_{1}[z_{1}, \phi_{1}], \sigma_{1}^{2}I]
\end{align*}
$$
where we use a neural network $f_{t}[z_{t}, \phi_{t}]$ to compute the mean. We can generate new samples by ancestral sampling.

## Training
In [[Diffusion Training]], we maximize the log-likelihood of the training data $\{ x_{i} \}$ with respect to parameters $\phi$:
$$
\hat{\phi}_{1 \dots T} = \underset{\phi_{1 \dots T}}{\operatorname{argmax}}\left[  \sum_{i=1}^{J} \log \Big[ Pr(x_{i}|\phi_{1 \dots T})\Big] \right]
$$
However this is intractable because of $Pr(x_{i}|\phi_{1 \dots T})$. Thus, we compute an evidence lower bound (ELBO) for the log-likelihood, which ends up being:
$$
\text{ELBO}[\phi_{1 \dots T}] = \mathbb{E}_{q(z_{1}|x)} \Big[\log [Pr(x|z_{1}, \phi_{1})]\Big] - \sum_{t=2}^{T}\mathbb{E}_{q(z_{t, t-1}|x)}\Big[D_{KL} \big[q(z_{t-1}|z_{t}, x) \, \mid \mid \, Pr(z_{t-1}|z_{t}, \phi_{t})\big] \Big]
$$
where:
- The first term is equivalent to the reconstruction term in the VAE. The ELBO will be larger if the model prediction matches the observed data.
- The second term is the KL divergence between exact reverse posterior of the forward diffusion process $q(z_{t-1}|z_{t}x)$, and the decoder's learned reverse transition $Pr(z_{t-1}|z_{t}, \phi_{t})$.

The loss function is then a minimization version of this, where we also approximate the expectations with sampling:
$$
\begin{align*}
L[\phi_{1\dots T}] = \sum_{i=I}^{I}\left( \underbrace{ -\log \Big[\text{Norm}_{x_{i}}[f_{1}[z_{i_{1}}, \phi_{1}], \sigma_{1}^{2}I] \Big]  }_{ \text{reconstruction term} }
+ \sum_{t=2}^{T} \frac{1}{2\sigma_{t}^{2}} \left| \left| \underbrace{ \frac{1-\alpha_{t-1}}{1-\alpha_{t}} \sqrt{ 1-\beta_{t}}z_{it} + \frac{\sqrt{ \alpha_{t-1} \beta_{t} }}{1-\alpha_{t}} x_{i} }_{ \text{target, mean of } q(z_{t-1}|z_{t}, x) } - \underbrace{ f_{t}[z_{it}, \phi_{t}] }_{ \text{predicted }z_{t-1} } \right| \right|^{2} \right)
\end{align*}
$$


## Implementation


## Applications