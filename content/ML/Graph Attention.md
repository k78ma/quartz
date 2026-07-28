---
title: Graph Attention
tags:
  - dl
date: 2026-07-28
aliases: graph attention
---
The [[Graph Convolutional Network|graph convolutional network]] methods either weight the contribution of the neighbors equally or in a way that depends on the graph topology. Conversely, in **graph attention layers**, the weights depend on the data at the nodes. 

A linear transformation is applied to the current node embeddings so that:
$$
\mathbf{H}_{k}'= \beta_{k}\mathbf{1}^{T} + \Omega_{k}\mathbf{H}_{k}
$$
Then, the similarity $s_{m,n}$ of each transformed node embedding $\mathbf{h}_{m}'$ to the transformed node embedding $\mathbf{h}_{n}'$ is computed by concatenating the pairs, taking a dot product with a column vector $\phi_{k}$ of learned parameters, and applying an activation function:
$$
s_{mn} = a\left[\phi_{k}^{T} \begin{bmatrix}
\mathbf{h}_{m}' \\
\mathbf{h}_{n}'
\end{bmatrix} \right]
$$
These variables are stored in an $N\times N$ matrix $\mathbf{S}$, where each element represents the similarity of every node to every other. As in [[Dot-Product Self-Attention|dot-product self-attention]], the attention weights contributing to each output embedding are normalized to be positive and sum to one using a softmax. However, only those values corresponding to the current node and its neighbors should contribute. The attention weights are applied to the transformed embeddings:
$$
\mathbf{H}_{k+1} = a[\mathbf{H}_{k}' \cdot  \text{Softmask}[\mathbf{S}, \mathbf{A}+\mathbf{I}]]
$$
where $a[\bullet]$ is a second activation function. The function $\text{Softmax}[\bullet, \bullet]$ computes the attention values by applying softmax operation separately to each column of its argument $\mathbf{S}$, but only after setting values where the second argument $\mathbf{A}+\mathbf{I}$ is zero to negative infinity, so they do not contribute. This ensures that the attention to non-neighboring nodes is zero.

This is very similar to the dot-product self-attention computation in transformers, except that:
- The keys, queries, and values are all the same
- The measure of similarity is different
- The attentions are masked so that each node only attends to itself and its neighbors

As in transformers, this system can be extended to use multiple heads that are run in parallel and recombined.

![[Graph Attention-1785273074189.webp]]