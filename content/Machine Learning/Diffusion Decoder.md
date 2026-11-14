---
title: Diffusion Decoder
tags:
  - dl
date: 2026-08-10
aliases:
  - diffusion decoder
  - decoder
---
When we learn a [[Diffusion Model|diffusion model]], we learn the *reverse process* of the [[Diffusion Encoder|encoder]]. In other words, we learn a series of probabilistic mappings back from latent variable $z_{T}$ to $z_{T-1}$, from $z_{T-1}$ to $z_{T-2}$, and so on, until we reach the data $x$.

The true [[Diffusion Encoder#Conditional distribution $q(z_{t-1} z_{t})$|reverse distributions]] $q(z_{t-1}|z_{t})$ of the diffusion process are complex multi-modal distributions that depend on the data distribution $Pr(x)$. We approximate these as normal distributions:
$$
\begin{align*}
Pr(z_{T}) &=  \text{Norm}_{z_{T}}[0,I]  \\
Pr(z_{t-1}|z_{t}, \phi_{t}) &= \text{Norm}_{z_{t-1}}[f_{t}[z_{t}, \phi_{t}], \sigma_{t}^{2}I]  \\
Pr(x|z_{1}, \phi_{1})&= \text{Norm}_{x}[f_{1}[z_{1}, \phi_{1}], \sigma_{1}^{2}I]
\end{align*}
$$
where:
- $f_{t}[z_{t}, \phi_{t}]$ is a neural network that computes the mean of the normal distribution in the estimated mapping from $z_{t}$ to the preceding latent variable $z_{t-1}$.
- The terms $\{ \sigma_{t}^{2} \}$ are predetermined.
- If the noise schedule hyperparameters $\beta_t$ in the diffusion process are close to zero (and the number of time steps $T$) is large, then this normal approximation will be reasonable.

We generate new examples from $Pr(x)$ using [[Ancestral Sampling|ancestral sampling]]:
- First, we draw $z_T$ from $Pr(z_T)$.
- Then, we sample $z_{T-1}$ from $Pr(z_{T-1} | z_{T,}\phi_T)$, sample $z_{T-2}$ from $Pr(z_{T-2}|z_{T-1}, \phi_{T-1})$ and so on until we finally generate $x$ from $Pr(x|z_{1}, \phi_1)$.