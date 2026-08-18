---
title: Autoencoder
tags:
  - dl
  - amath449
date: 2026-03-24
aliases:
  - autoencoder
---
An autoencoder is a neural network that learns to encode (and decode) a set of inputs. 

![[Autoencoder-1774376611444.webp|507]]

- The code layer is smaller than the input/output layers

The autoencoder consists of:
- An **encoder** that compresses the input $x$ into a lower-dimensional representation $z$
- A **decoder** that reconstructs the original input from $z$

The model is trained using a loss function that minimizes the reconstruction error:
$$
L(x',x)
$$
where $x'$ is the output (reconstructed input), and $x$ is the original input.

We can think of an autoencoder as just two layers: an encoder and a decoder. We can "unroll" it into 3 layers, where the input and output layers have the same size and have the same state, so that we have: input, hidden code, and reconstructed output.

Instead of:

![[Autoencoder-1774376934902.webp|185]]

we use

![[Autoencoder-1774376951300.webp|320]]

If we allow $W$ and $M$ to be different, then it's just a 3-layer network. If we enforce that $M=W^{T}$, then we say that the weights are **tied**.