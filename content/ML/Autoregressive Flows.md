---
title: Autoregressive Flows
tags:
  - dl
date: 2026-08-03
aliases: autoregressive flows
---
Autoregressive flows are a generalization of [[Coupling Flows|coupling flows]] that treat each input dimension as a separate "block".

![[Autoregressive Flows-1785819152312.webp]]

The $d$-th dimension of the output $h'$ is computed based on the first $d-1$ dimensions of the input $h$:
$$
h'_{d} = g\Big[h_{d}, \phi[h_{1:d-1}]\Big]
$$
The function $g[\bullet,\bullet]$ is termed the transformer (nothing to do with attention), and the parameters $\phi, \phi[h_{1}], \phi[h_{1}, h_{2}]$ are termed conditioners.
- Similar to coupling flows, the transformer $g[\bullet, \phi]$ must be invertible
- The conditioners $\phi[\bullet]$ can take any form and are usually neural networks
- If the transformer and conditioner are sufficiently flexible, autoregressive flows are *universal approximators* that can represent any probability distribution.

It's possible to compute all of the entries of the output $h'$ in parallel using a network with appropriate masks so that the parameters $\phi$ at position $d$ only depend on previous positions. This is known as *masked autoregressive flow*. The principle is very similar to [[Masked Self-Attention|masked self-attention]]; connections that relate inputs to previous outputs are pruned.

Inverting the transformation is less efficient. Consider the forward mapping:
$$
\begin{align*}
h_{1}' &= g[h_{1}, \phi] \\
h_{2}' &= g[h_{2}, \phi[h_{1}]] \\
h_{3}' &= g[h_{3}, \phi[h_{1:2}]] \\
h_{4}' &= g[h_{4}, \phi[h_{1:3}]]
\end{align*}
$$
This must be inverted sequentially:
$$
\begin{align*}
h_{1}&= g^{-1}[h_{1}', \phi] \\
h_{2}&= g^{-1}[h_{2}', \phi[h_{1}]] \\
h_{3}&=g^{-1}[h_{3}', \phi[h_{1:2}]] \\
h_{4} & =gr^{-1}[h_{4}', \phi[h_{1:3}]]
\end{align*}
$$
This can't be done in parallel as the computation for $h_{d}$ depends on $h_{1:d-1}$ (i.e., the partial results so far). Hence, inversion is time-consuming when the input is large.

## Inverse autoregressive flows
Masked autoregressive flows are defined in the normalizing (inverse) direction. This is required to evaluate the likelihood efficiently and hence learn the model. However, sampling requires the forward direction, in which each variable must be computed sequentially at each layer, which is slow. If we use an autoregressive flow for the forward (generative) transformation, then sampling is efficient, but computing the likelihood (and training) is slow. This is known as *inverse autoregressive flow*.

A trick that allows fast learning and also fast (but approximate) sampling is to build a masked autoregressive flow to learn the distribution (teacher) and then use this to train an inverse autoregressive flow from which we can sample efficiently (student). This requires a different formulation of normalizing flows that learns from another function rather than a samples ([[Normalizing Flows for Approximating Densities]]).