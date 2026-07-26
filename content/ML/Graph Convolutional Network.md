---
title: Graph Convolutional Network
tags:
  - dl
date: 2026-07-26
aliases:
  - graph convolutional network
  - GCN
---
Spatial-based convolutional graph neural networks, or GCNs for short, are a common type of [[Graph Neural Networks|graph neural network]].
- They are convolutional in that they update each node by aggregating information from nearby nodes. As such, they induce a relational inductive bias, prioritizing information from neighbors.
- They are spatial-based because they use the original graph structure. This contrasts with spectral-based methods, which apply convolutions in the Fourier domain.

