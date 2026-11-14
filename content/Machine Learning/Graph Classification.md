---
title: Graph Classification
tags:
  - dl
date: 2026-07-26
aliases: graph classification
---
Suppose we want a [[Graph Convolutional Network|GCN]] that classifies molecules as toxic or harmless.

The network inputs are the adjacency matrix and node embedding matrix $\mathbf{X}$.
- The adjacency matrix $\mathbf{A}\in \mathbb{R}^{N\times N}$ derives from the molecular structure.
- The columns of the node embedding matrix $\mathbf{X}\in \mathbb{R}^{118\times N}$ are one-hot vectors indicating which of the 118 elements of the periodic table are present.

The node embeddings can be transformed to an arbitrary size $D$ by the first weight matrix $\Omega_{0}\in \mathbb{R}^{D\times 118}$. The network equations are:
$$
\begin{align}
\mathbf{H}_{1} & = a[\beta_{0}\mathbf{1}^{T}+\Omega_{0}\mathbf{X}(\mathbf{A}+\mathbf{I})] \\[2ex] 
\mathbf{H}_{2} & = a[\beta_{1}\mathbf{1}^{T}+\Omega_{1}\mathbf{H}_{1}(\mathbf{A}+\mathbf{I})] \\[2ex] 
\vdots\; \;  & = \;\; \vdots \\[2ex] 
\mathbf{H}_{K}  & = a[\beta_{K-1}\mathbf{1}^{T} + \Omega_{K-1}\mathbf{H}_{k-1}(\mathbf{A}+\mathbf{I})] \\[2ex] 
f[\mathbf{X}, \mathbf{A}, \phi]  & = \text{sig}[\beta_{K}+\omega_{K}\mathbf{H}_{K}\mathbf{1} / N]
\end{align}
$$
where the network output $f[\mathbf{X}, \mathbf{A}, \phi]$ is a single value that determines the probability the molecule is toxic.

## Training with batches
Given $I$ training graphs $\{ \mathbf{X}_{i}, \mathbf{A}_{i} \}$ and their labels $y_{i}$, the parameters $\phi=\{ \beta_{k}, \Omega_{k} \}_{k=0}^{K}$ can be learned using SGD and [[Binary Cross-Entropy Loss|binary cross-entropy loss]]. We can exploit the parallelism of modern hardware to process an entire batch of training examples concurrently. To do this, the batch elements are concatenated into a higher-dimensional tensor.

However, each graph may have a different number of nodes. Hence, the matrices $\mathbf{X}_{i}$ and $\mathbf{A}_{i}$ have different sizes, and there is no way to concatenate them into 3D tensors. Luckily, a simple trick allows us to process the whole batch in parallel. The graphs in the batch are treated as disjoint components of a single large graph. The network can then be run as a single instance of the network equations. The mean pooling is carried out only over the individual graphs to make a single representation per graph that can be fed into the loss function.