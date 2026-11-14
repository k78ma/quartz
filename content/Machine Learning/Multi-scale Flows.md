---
title: Multi-scale Flows
tags:
  - dl
date: 2026-08-04
aliases: multi-scale flows
---
In [[Normalizing Flows|normalizing flows]], the latent space $z$ must be the same size as the data space $x$. However, we know that natural datasets can often be described by fewer underlying variables. At some point, we have to introduce all these variables, but it is inefficient to pass them through the entire network. This leads to the idea of multi-scale flows.

![[Multi-scale Flows-1785877747670.webp]]

In the generative direction, multi-scale flows partition the latent vector into $z=[z_{1}, z_{2}, \dots, z_{N}]$. 
- The first partition $z_{1}$ is processed by a series of reversible layers with the same dimension as $z_{1}$ until, at some point, $z_{2}$ is appended and combined with the first partition. 
- This continues until the network is the same size as the data $x$. 

In the normalizing direction, the network starts at the full dimension of $x$, but when it reaches the point $z_{n}$ was added, this is assessed against the base distribution.