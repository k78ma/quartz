---
title: Diffusion Training
tags:
  - dl
date: 2026-08-11
aliases: diffusion training
---
In a [[Diffusion Model|diffusion model]]:
- The [[Diffusion Encoder|encoder]] maps the data example $x$ through a series of intermediate variables $z_{1},z_{2},\dots,z_{T}$, adding noise.
- The [[Diffusion Decoder|decoder]] learns a series of probabilistic mappings back from latent variable $z_{T}$ to $z_{T-1}$, from $z_{T-1}$ to $z_{T-2}$, and so on, until we reach the data $x$.

The joint distribution of the observed variable $x$ and the latent variables $\{ z_{t} \}$ is:
$$
Pr(x, z_{1\dots T}|\phi_{1 \dots T}) = Pr(x|z_{1}, \phi_{1}) \prod_{t=2}^{T}Pr(z_{t-1}|z_{t}, \phi_{t}) \cdot  Pr(z_{T})
$$
The likelihood of the observed data $Pr(x|\phi_{1 \dots T})$ is found by marginalizing over the latent variables:
$$
Pr(x|\phi_{1 \dots T}) = \int Pr(x,z_{1 \dots T}|\phi_{1 \dots T}) \, dz_{1 \dots T} 
$$
To train the model, we maximize the log-likelihood of the training data $\{ x_{i} \}$ with respect to parameters $\phi$:
$$
\hat{\phi}_{1 \dots T} = \underset{\phi_{1 \dots T}}{\operatorname{argmax}}\left[  \sum_{i=1}^{J} \log \Big[ Pr(x_{i}|\phi_{1 \dots T})\Big] \right]
$$
We can't maximize this directly because the marginalization in the equation above is intractable. Hence, we use Jensen's inequality to define a lower bound on the likelihood and optimize the parameters $\phi_{1 \dots T}$ with respect to this bound exactly as we did for the [[Variational Autoencoder|VAE]].

## Evidence lower bound (ELBO)
To derive the lower bound, we multiply and divide the log-likelihood by the encoder distribution $q(z_{1 \dots T}|x)$ and apply [[Jensen’s Inequality]]:
$$
\begin{align*}
\log[Pr(x|\phi_{1 \dots T})] &=  \log\left[ \int Pr(x, z_{1 \dots T}| \phi_{1 \dots T}) \, dz_{1\dots T}  \right] \\[2ex] 
&= \log\left[ \int q(z_{1\dots T}|x) \frac{Pr(x, z_{1\dots T}|\phi_{1 \dots T})}{q(z_{1 \dots T}|x)} \, dz_{1 \dots T}  \right] \\[2ex] 
& \geq \int q(z_{1 \dots T} |x) \log\left[ \frac{Pr(x,z_{1 \dots T}|\phi_{1 \dots T})}{q(z_{1 \dots T}|x)} \right] \, dz_{1 \dots T} 
\end{align*}
$$
This gives us the evidence lower bound (ELBO):
$$
\text{ELBO}[\phi_{1\dots T}] = \int q(z_{1 \dots T} |x) \log\left[ \frac{Pr(x,z_{1 \dots T}|\phi_{1 \dots T})}{q(z_{1 \dots T}|x)} \right] \, dz_{1 \dots T} 
$$
In the [[Variational Autoencoder|VAE]], the encoder $q(z|x)$ approximates the posterior distribution over the latent variables to make the bound tight, and the decoder maximizes this bound. In a diffusion model, the decoder does all the work because the encoder has no parameters. It makes the bound tighter by (i) changing its parameters so that the static encoder does approximate the posterior $Pr(z_{1 \dots T}|x, \phi_{1 \dots T})$ and (ii) optimizing its own parameters with respect to the bound.

![[Evidence Lower Bound-1786043315158.webp]]

### Simplifying ELBO
Let's manipulate the log term from ELBO into the final form that we will optimize. First, we substitute the joint distributions for $Pr(x, z_{1\dots T}|\phi_{1 \dots T})$ and $q(z_{1\dots T}|x)$:
$$
\begin{align*}
\log \left[ \frac{Pr(x, z_{1 \dots T}|\phi_{1\dots T})}{q(z_{1 \dots T}|x)} \right] &=  \log \left[  \frac{Pr(x|z_{1}, \phi_{1}) \prod_{t=2}^{T}Pr(z_{t-1}|z_{t}, \phi_{t}) \cdot Pr(z_{T})}{q(z_{1}|x) \prod_{t=2}^{T}q(z_{t}|z_{t-1})}  \right] \\[2ex] 
&= \log\left[ \frac{Pr(x|z_{1}, \phi_{1})}{q(z_{1}|x)} \right] + \log\left[ \frac{\prod_{t=2}^{T}Pr(z_{t-1}|z_{t}, \phi_{t})}{\prod_{t=2}^{T}q(z_{t}|z_{t-1})} \right] + \log[Pr(z_{T})]
\end{align*}
$$
Then we expand the denominator of the second term:
$$
q(z_{t}|z_{t-1}) = q(z_{t}|z_{t-1}, x) = \frac{q(z_{t-1}|z_{t},x)q(z_{t}|x)}{q(z_{t-1}|x)}
$$
where:
- The first equality follows because all of the information about variable $z_{t}$ is encompassed in $z_{t-1}$, so the extra conditioning on the data $x$ is irrelevant.
- The second equality is a straightforward application of Bayes' rule.

Substituting in this result gives:
$$
\begin{align*}
\log \left[ \frac{Pr(x, z_{1 \dots T}|\phi_{1\dots T})}{q(z_{1 \dots T}|x)} \right] &=  \log\left[ \frac{Pr(x|z_{1}, \phi_{1})}{q(z_{1}|x)} \right] + \log\left[ \frac{\prod_{t=2}^{T}Pr(z_{t-1}|z_{t}, \phi_{t})\cdot q(z_{t-1}|x)}{\prod_{t=2}^{T}q(z_{t}|z_{t-1})\cdot q(z_{t}|x)} \right] + \log[Pr(z_{T})] \\[2ex] 
&=  \log[Pr(x|z_{1}, \phi_{1})] + \log\left[ \frac{\prod_{t=2}^{T}Pr(z_{t-1}|z_{t}, \phi_{t})}{q(z_{t-1}|z_{t}, x)} \right] + \log\left[ \frac{Pr(z_{t})}{q(z_{T}|x)} \right] \\[2ex] 
&\approx \log[Pr(x|z_{1}, \phi_{1})] + \sum_{t=2}^{T} \log\left[ \frac{Pr(z_{t-1}|z_{t}, \phi_{t})}{q(z_{t-1}|z_{t}, x)} \right]
\end{align*}
$$
where all but two of the terms in the product of the ratios $q(z_{t-1}|x) / q(z_{t}|x)$ cancel out between lines 2 and 3, leaving only $q(z_{1}|x)$ and $q(z_{T}|x)$. The last term in the third line is approximately $\log[1] = 0$ since the result of the forward process $q(z_{T}|x)$ is a standard normal distribution, and so is equal to the prior $Pr(z_{T})$.

Hence, the simplified ELBO is:
$$
\begin{align*}
\text{ELBO}[\phi_{1\dots T}] &=  \int q(z_{1\dots T}|x) \log\left[ \frac{Pr(x,z_{1 \dots T}|\phi_{1 \dots T})}{q(z_{1 \dots T}|x)} \right] \, dz_{1 \dots T} \\[2ex] 
&\approx \int q(z_{1 \dots T})\left( \log [Pr ( x|z_{1}, \phi_{1})]  + \sum_{t=2}^{n} \log\left[ \frac{Pr(z_{t-1}|z_{t}, \phi_{t})}{q(z_{t-1}|z_{t},x)} \right]  \right) \, dz_{1 \dots T} \\[2ex] 
&= \mathbb{E}_{q(z_{1}|x)} \Big[\log [Pr(x|z_{1}, \phi_{1})]\Big] - \sum_{t=2}^{T}\mathbb{E}_{q(z_{t, t-1}|x)}\Big[D_{KL} \big[q(z_{t-1}|z_{t}, x) \, \mid \mid \, Pr(z_{t-1}|z_{t}, \phi_{t})\big] \Big]
\end{align*}
$$
where we have marginalized over the irrelevant variables in $q(z_{1\dots T}|x)$ between lines 2 and 3 and used the definition of [[Kullback-Leibler Divergence|KL divergence]].

### Analyzing ELBO
The first term in the ELBO was defined previously in the [[Diffusion Decoder|decoder]]:
$$
Pr(x|z_{1}, \phi_{1})= \text{Norm}_{x}[f_{1}[z_{1}, \phi_{1}], \sigma_{1}^{2}I]
$$
and is equivalent to the reconstruction term in the VAE. The ELBO will be larger if the model prediction matches the observed data. Like the VAE, we will approximate the expectation over the log of this quantity using a Monte Carlo estimate, in which we estimate the expectation with a sample from $q(z_{1}|x)$.

The KL divergence in the ELBO measures the distance between $Pr(z_{t-1}|z_{t}, \phi_{t})$ and $q(z_{t-1}|z_{t}, x)$, which were also defined previously in the encoder and decoder:
$$
\begin{align*}
Pr(z_{t-1}|z_{t}, \phi_{t}) &= \text{Norm}_{z_{t-1}}[f_{t}[z_{t}, \phi_{t}], \sigma_{t}^{2}I]  \\[2ex] 
q(z_{t-1}|z_{t}, x) &=  \text{Norm}_{z_{t-1}}\left[ \frac{(1-\alpha_{t-1})}{1-\alpha_{t}} \sqrt{ 1-\beta_{t} }z_{t} + \frac{\sqrt{ \alpha_{t-1}\beta_{t} }}{1-\alpha_{t}}x, \frac{\beta_{t}(1-\alpha_{t-1})}{1-\alpha_{t}}I \right]
\end{align*}
$$
The KL divergence between two normal distributions has a closed-form expression. Moreover, many of the terms in this expression do not depend on $\phi$, and the expression simplifies to the squared difference between the means plus a constant $C$:
$$
D_{KL}[q(z_{t-1}|z_{t}, x) \, \mid \mid \, Pr(z_{t-1}|z_{t}, \phi_{t})] = \frac{1}{2\sigma_{t}^{2}} \left| \left| \frac{(1-\alpha_{t-1})}{1-\alpha_{t}} \sqrt{ 1-\beta_{t} }z_{t} + \frac{\sqrt{ \alpha_{t-1}} \beta_{t}}{1-\alpha_{t}}x - f_{t}[z_{t}, \phi_{t}] \right| \right|^{2} + C
$$

## Diffusion loss function
To fit the model, we maximize the ELBO with respect to the parameters $\phi_{1\dots T}$. We recast this as a minimization by multiplying with minus one and approximating the expectations with samples to give the loss function:
$$
\begin{align*}
L[\phi_{1\dots T}] = \sum_{i=I}^{I}\left( \underbrace{ -\log \Big[\text{Norm}_{x_{i}}[f_{1}[z_{i_{1}}, \phi_{1}], \sigma_{1}^{2}I] \Big]  }_{ \text{reconstruction term} }
+ \sum_{t=2}^{T} \frac{1}{2\sigma_{t}^{2}} \left| \left| \underbrace{ \frac{1-\alpha_{t-1}}{1-\alpha_{t}} \sqrt{ 1-\beta_{t}}z_{it} + \frac{\sqrt{ \alpha_{t-1} \beta_{t} }}{1-\alpha_{t}} x_{i} }_{ \text{target, mean of } q(z_{t-1}|z_{t}, x) } - \underbrace{ f_{t}[z_{it}, \phi_{t}] }_{ \text{predicted }z_{t-1} } \right| \right|^{2} \right)
\end{align*}
$$
where $x_{i}$ is the $i$-th data point, and $z_{it}$ is the associated latent variable at diffusion step $t$.

Although this loss function can be used, diffusion models have been found to work better with a [[Reparameterized Diffusion Loss|reparameterized version]].

## Training procedure
This loss function can be used to train a network for each diffusion time step. It minimizes the difference between the estimate $f_{t}[z_{t}, \phi_{t}]$ of the hidden variable at the previous time step and the most likely value that it took given the ground truth de-noised data $x$.

The figures below show the fitted reverse process for a simple 1D example. This model was trained by:
1. Taking a large dataset of examples $x$ from the original density
2. Using the [[Diffusion Encoder|diffusion kernel]] to predict many corresponding values for the latent variable $z_t$ at each time $t$
3. Training the models $f_{t}[z_{t},\phi_t]$ to minimize the loss function above.

![[Diffusion Training-1786571832771.webp]]

![[Diffusion Training-1786571841538.webp]]