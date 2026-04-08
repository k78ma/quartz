---
title: Learning Decoders
tags:
  - amath449
date: 2026-04-08
aliases: learning decoders
---
So far, we've built neural networks by prescribing connection weights. We decide what computation we want, and then choose decoders to implement the required transformation.

Most brains don't have an oracle to solve for connection weights. It turns out all we need is an error signal.

![[Learning Decoders-1775683774860.webp]]

How can that error be used to update the connection weights?

Let's start with a simple model:

![[Learning Decoders-1775683935229.webp]]

Consider the decoding error:
$$
\epsilon = || y-f(x) ||^{2} = || AD-f(x) ||^{2}
$$
- $A = G(J(x))$

To minimize this error iteratively, we can use gradient descent.
$$
\frac{ \partial \epsilon }{ \partial D } =2A^{T} (AD-f(x))
$$
This is the gradient vector that points "uphill" for the error function, or in the direction of greatest rate of increase. To move to a position ($D$) with lower error with lower error, we move in the direction opposite the gradient vector.
$$
\Delta D = - \tilde{\kappa}^{2} A^{T}(AD-f(x)) = \kappa A^{T}(f(x)-AD)
$$
More generally:
$$
\Delta = \kappa A^{T} (\text{error})
$$
- $\kappa$ is the learning rate
- $A^{T}$ is the pre-synaptic neural activity