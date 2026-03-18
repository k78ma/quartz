---
title: Restricted Boltzmann Machines
tags:
  - amath449
  - dl
date: 2026-03-08
aliases: restricted boltzmann machines
---
An RBM network consists of:
- A "hidden layer": $h \in \{ 0, 1 \}^{n}$
- A "visible layer": $v \in \{ 0,1 \}^{m}$, because this layer interacts with the environment.

Connections between layers are symmetric, represented by weight matrix $W$.

![[Restricted Boltzmann Machines-1773008730339.webp|543]]

## RBM energy
Similar [[Hopfield Networks]], an RBM is characterized by an energy:
$$
E(v,h) = -\sum_{i=1}^{m}\sum_{j=1}^{n}v_{i}W_{ij}h_{j} - \sum_{i=1}^{m}b_{i}v_{i}-\sum_{j=1}^{n}c_{j}h_{j}
$$
This can be rewritten as:
$$
E(v,h) = -vWh^{T}-bv^{T} - ch^{T}
$$
where $W \in \mathbb{R}^{m\times n}$. The terms of this correspond to:
- Discordance cost: $-vWh^{T}$
- Operating cost: $-bv^{T}-ch^{T}$

## Boltmann Probability
The RBM network states are visited with the Boltmznn probability:
$$
q(v,h)= \frac{1}{Z}e^{-E(v,h)}
$$
where the partition function $Z$ is defined as
$$
Z = \sum_{v,h} e^{-E(v,h)}
$$
Since lower energy states are visited more frequently:
$$
E(v^{(1)}, h^{(1)}) < E(v^{(2)}, h^{(2)}) \quad \Longrightarrow \quad q(v^{(1)}, h^{(1)}) > q(v^{(2)}, h^{(2)})
$$

## Training an RBM as a Generative Model
Suppose our inputs $v \sim p(v)$. We want an RBM to behave as a generative model $q_{\theta}$ such that:
$$
\underset{\theta}{\operatorname{max}} E_{v \sim p}[\ln q_{\theta}(v)] \quad  \text{or equivalently} \quad  \underset{\theta}{\operatorname{min}}E_{v\sim p}[-\ln q_{\theta}(v)]
$$
Let the loss function be:
$$
L = -\ln\left( \frac{1}{Z} \sum_{h} e^{-E_{\theta}(V,h)} \right)
$$
Rewriting:
$$
L=-\ln\left( \sum_{h} e^{-E_{\theta}(V,h)} \right) + \ln\left( \sum_{v}\sum_{h} e^{-E_{\theta}(v,h)} \right)
$$
Thus, we can decompose the loss into $L=L_{1}+L_{2}$.

### Gradient of $L_{1}$
