---
title: Variational Autoencoder
tags:
  - amath449
  - dl
date: 2026-03-26
aliases: variational autoencoder
---
We would like an [[Autoencoder|autoencoder]] that can generate reasonable samples that were not in the training set. 

We want to be able to reconstruct samples in our dataset. In fact, we would like to be able to generate ANY valid sample. In essence, we want to sample the distribution of inputs:
$$
p(x) \quad \quad  \text{the distribution of the inputs}
$$
We generate samples by choosing elements from some lower-dimensional latent space:
$$
z \sim p(z)
$$
and then generate the samples from those latent representations.

![[Variational Autoencoder-1774550366676.webp|374]]

Here we are learning a decoder function $d(z,\theta)$ to maps the latent $z$ to the parameters of a distribution over $x$, $p_{\theta}(x\, | \,z)$. 
- For example, if $x$ is continuous, the decoder might output a mean $\mu_{\theta}(z)$ and a variance. If $x$ is binary, it might output Bernoulli probabilities.

The decoder usually maps $z$ to distribution parameters, not directly to a single deterministic $x$. This is because $z$ is a random variable, so running it through $d$ gives a distribution.

![[Variational Autoencoder-1774551738787.webp|449]]

But even for a fixed $z$, we assume that $p(x\, | \,z)$ is a distribution:

![[Variational Autoencoder-1774551831672.webp|456]]

Given $p(z)$ and $p_{\theta}(x|z)$, we can get $p(x)$ as:
$$
p(x)=\int p_{\theta}(x | z) \, p(z) \, dz 
$$

How do we define the decoder? We have a dataset of samples, $X$, and we want to find $\theta$ to maximize the likelihood of observing $X$.

Let's assume that $p_{\theta}(x|z)$ is Gaussian, with mean $\mu=d(z, \theta)$ and some variance $\sigma$. Then:
$$
-\ln p_{\theta}(x\, | \,z) = \frac{1}{2\sigma^{2}} || X-d(z,\theta) ||^{2} + C
$$
Thus, given some samples $z$, we have a way to learn $d(z,\theta)$ to maximize $\mathbb{E}_{z \sim p(z)} \Big[ p_{\theta}(x\, | \,z) \Big]$.

![[Variational Autoencoder-1774550888846.webp|221]]

We can just solve
$$
\underset{\theta}{\operatorname{max}} \mathbb{E}_{z \sim p(z)} \Big[ p_{\theta}(x\, | \,z) \Big] \quad  \text{by} \quad  \underset{\theta}{\operatorname{min}} \mathbb{E}_{z \sim p(z)} \Big[ || X-d(z,\theta) ||^{2} \Big]
$$
Note that
$$
\mathbb{E}_{p(z)}[p_{\theta}(x|z)] = \int p_{\theta}(x|z)p(z) \, dz 
$$
where we can use a Monte Caro method to evaluate the previous integral.

## Sampling Latents
**Problem:** How do we sample $z \sim p(z)$? It's an arbitrary unknown thing, and could still be fairly high-dimensional, making sampling difficult.

Suppose we train an autoencoder on a dataset of simple shapes. The latent space is 2D, and the clusters are well separated. However, latent vectors between the clusters generate samples that don't look like our training shapes!

![[Variational Autoencoder-1774552271810.webp|304]]

Another example where we are sampling rom MNIST latent space:

![[Variational Autoencoder-1774552388545.webp]]

These generations are quite bad! This is because we are **choosing improbable $z$ samples**, such that $p(z_{i}) \approx 0$.

## VAE Objective
We would like to sample only $z$ that yield reasonable samples with high probability. We want to place requirements on the latent distribution.

Let's assume that we can choose the distribution of $z$'s in the latent space; call it $q(z)$. Then
$$
\begin{align}
p(x)  & = \mathbb{E}_{z\sim p} \Big[p(x|z) \Big] \\[2ex] 
     & = \int p(x|z)p(z) \, dz \quad  \quad  \quad  \quad  \left(\text{or }\sum_{z\sim p}p(x|z)p(z)\right) \\[2ex] 
  & = \int p(x|z) \frac{p(z)}{q(z)}q(z) \, dz \\[2ex] 
 &  = \mathbb{E}_{z \sim q} \left[ p(x|z) \frac{p(z)}{q(z)} \right]
\end{align}
$$

Essentially we are changing the variable so that instead of using the unknown distribution $p(x|z)$, we are using our designed distribution $q(z)$.

We can then look to minimize the negative log likelihood:
$$
\begin{align}
-\ln p(x)  & = -\mathbb{E}_{q} \left[ \ln p(x|z) + \ln \frac{p(z)}{q(z)} \right] \\[2ex] 
     & =  \underbrace{ \text{KL}(q(z) \, || \, p(z)) }_{ \text{KL divergence} } -\underbrace{ \mathbb{E}_{q}[\ln p(x|z)] }_{ \text{Reconstruction loss} }
\end{align}
$$
where we are using the [[Kullback-Leibler Divergence|KL divergence]].

### KL divergence term
Let's first choose a latent distribution that is convenient for us:
$$
p(z) \sim \mathcal{N}(0, I)
$$
Then, our aim is to design $q(z)$ so that it is close to $\mathcal{N}(0,I)$:
$$
\underset{q}{\operatorname{min}} \text{ KL}\Big(q(z) \, || \,\mathcal{N}(0,I) \Big)
$$
How do we design our latent representations to achieve this? We design an encoder, and ask its outputs to be $\mathcal{N}(0,I)$.

![[Variational Autoencoder-1774553338977.webp|283]]

This defines a distribution $\mathcal{N}(\mu, \sigma)$.

For example, in the case of MNIST:

![[Variational Autoencoder-1774553387064.webp|481]]

But remember that we want our distribution to be a standard normal distribution $\mathcal{N}(0,I)$, not just any normal distribution $\mathcal{N}(\mu, \sigma)$! Thus, we have to pressure our encoder to push $\mu=0$ and $\sigma=I$. 

We can once again use a KL divergence, which conveniently has a closed-form expression in this case:
$$
\begin{align}
\text{KL}(\mathcal{N}(\mu, \sigma)^{2} \, || \, \mathcal{N}(0, I)) = \frac{1}{2}(\sigma^{2}+\mu^{2}-\ln \sigma^{2}-1)
\end{align}
$$
So we want to minimize this to push our latent space toward a standard normal distribution. But remember that we have the other term to deal with too!

### Reconstruction
The other term in the objective
$$
-\mathbb{E}_{q}[\ln p(x|z)]
$$
is our reconstruction loss, and can be written as
$$
-\mathbb{E}_{q}[\ln p(x|\hat{x})]
$$
where
$$
\begin{align}
\hat{x}  & = d(z,\theta) \quad \text{(deterministic decoder)} \\
z  & = \mu(x,\theta) + \epsilon \, \sigma(x, \theta), \quad  \epsilon \sim \mathcal{N}(0,I)
\end{align}
$$
- $\mu$ and $\sigma$ are from the encoder

This is the "**reparameterization trick**", where the distribution is differentiable because the rest of the network is deterministic, and stochasticity is brought in by the $\epsilon$ variable. $\mu$ and $\sigma$ are deterministic.a

## Intuition
Think of a cloud of matter floating ins pace, but collapsing in by its own gravity, eventually forming a star.

![[Variational Autoencoder-1774554080790.webp]]

Here is the process:
- Encode $x$ by computing $\mu(x,\theta)$ and $\sigma(x,\theta)$ using neural networks.
- Sample $z=\mu+\epsilon \sigma, \epsilon \sim \mathcal{N}(0, I)$.
- Calculate KL loss: $\frac{1}{2}(\sigma^{2}+\mu^{2}-\ln \sigma^{2}-1)$
- Decode $\hat{x}$ using another neural network: $\hat{x} = f(x,\theta)=d(z)$
- Calculate reconstruction loss, $L(x,\hat{x})=\frac{1}{2} || \hat{x}-x ||^{2}$ for Gaussian or $L(x,\hat{x}) = \sum_{x} x \ln \hat{x}$ for Bernoulli.

Both terms of our objective function are differential w.r.t $\theta$.
$$
E = \mathbb{E}_{x} \Bigg[\underbrace{ L(x,\hat{x})+\beta(\sigma^{2}+\mu^{2}-\ln \sigma^{2}-1) }_{ \text{all depend on net params } \theta } \Bigg]
$$
so we can do gradient descent on $\theta$. $\beta$ adjusts the relative importance of reconstruction loss vs. KL divergence loss.

![[Variational Autoencoder-1774554681979.webp]]

With this setup, there are no (or fewer) gaps in the latent space, which enhances the quality of samples generated by the VAE.

![[Variational Autoencoder-1774554805691.webp]]
