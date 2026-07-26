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

Each layer of the GCN is a function $\mathbf{F}[\bullet]$ with parameters $\phi$ that takes the node embeddings and adjacency matrix and outputs new node embeddings. The network can hence be written as:
$$
\begin{align}
\mathbf{H}_{1} & =\mathbf{F}[\mathbf{X}, \mathbf{A}, \phi_{0}] \\[2ex] 
\mathbf{H}_{2} & =\mathbf{F}[\mathbf{H}_{1}, \mathbf{A}, \phi_{1}] \\[2ex] 
\mathbf{H_{3}} & =\mathbf{F}[\mathbf{H}_{1}, \mathbf{A}, \mathbf{\phi_{2}}]\\[2ex] 
\vdots \;\;\; & = \;\;\; \vdots \\
\mathbf{H}_{K} & = \mathbf{F}[\mathbf{H}_{K-1}, \mathbf{A}, \phi_{K-1}]
\end{align}
$$
where $\mathbf{X}$ is the input, $\mathbf{A}$ is the adjacency matrix, $\mathbf{H}_{k}$ contains the modified node embeddings at the $k$-th layer, and $\phi_{k}$ denotes the parameters that map from layer $k$ to $k+1$.

