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

## Design considerations
To design a GCN layer, we want to ensure that it is well-suited to processing graph data (equivarian/invariant to permutations), as well as parameter-efficient.
### Equivariance and invariance
Recall that a [[Graph Representation|graph representation]] is permutation-invariant; any permutation of the node indices does not change the graph. Thus, our model needs to respect this property; each layer must be [[Invariance and Equivariance|equivariant]] with respect to permutations of node incides. In other words, if we permute the node indices, the node embeddings at each stage will be permuted in the same way. Mathematically, if $\mathbf{P}$ is a permutation matrix, we must have:
$$
\mathbf{H}_{k+1}\mathbf{P} = \mathbf{F}[\mathbf{H}_{k}\mathbf{P}, \mathbf{P}^{T}\mathbf{A}\mathbf{P}, \phi_{k}]
$$

For node classification and edge prediction tasks, the output should also be equivariant with respect to permutations of the node indices. However, for graph-level tasks, the final layer aggregates information from across the graph, so the output is invariant to the node order. Recall that the output layer for graph-level classification is:
$$
\text{Pr}(y=1\, | \,\mathbf{X}, \mathbf{A}) = \text{sig}[\beta_{K}+\omega_{K}\mathbf{H}_{k}\mathbf{1} / N]
$$
This output layer in fact already achieves invariance, because
$$
y=\text{sig}[\beta_{K}+\omega_{K}\mathbf{H}_{K} \mathbf{1} / N] = \text{sig}[\beta_{K}+\omega_{K}\mathbf{H}_{K}\mathbf{P}\mathbf{1} / N]
$$
for any permutation matrix $\mathbf{P}$.

This mirrors the case for images, where segmentation should be equivariant to geometric transformations and classification should be invariant. For images, convolutional and pooling layers partially achieve this with respect to translations, but there is no way to guarantee these properties exactly for more generally transformations. However, for graphs, we can define networks that ensure equivariance or invariance to permutations.

### Parameter sharing
Like image processing, graphs benefit from shared convolutional parameters, which is more parameter-efficient than fully connected networks that need to learn how to handle every position separately. We could learn a model with separate parameters at each node, but the network must then independently learn the meaning of the connections in the graph at each position, and training would require many graphs with the same topology. Instead, we build a model that uses the same parameters at every node, reducing the number of parameters and sharing what the network learns at each node across the entire graph.

Recall that a convolution updates a variable by taking a weighted sum of information from its neighbors. One way to think of this is that each neighbor sends a message to the variable of interest, which aggregates these messages to form the update. In images, the neighbors were pixels from a square region around the current position, so the spatial positions are the same. However, in a graph, each node may have a different number of neighbors, and there are no consistent relationships; there is no sense that we can weight information from "above" or "left" of the node differently than from "below" or "right".

## GCN layer
The above considerations lead to a simple GCN layer.

![[Graph Convolutional Network-1785093851420.webp]]

At each node $n$ in layer $k$, we aggregate information from neighboring nodes by summing their node embeddings $\mathbf{h}_{\bullet}$:
$$
\text{agg}[n,k] = \sum_{m \in   \text{ne}[n]} \mathbf{h}_{k}^{(m)}
$$
where $\text{ne}[n]$ returns the set of indices of the neighbors of node $n$. Then we apply a linear transformation $\Omega_{k}$ to the embedding $\mathbf{h}_{k}^{(n)}$ at the current node and to its aggregated value, add a bias term $\beta_{k}$, and pass the result through a nonlinear activation function $\mathbf{a}[\bullet]$, which is applied independently to every member of its vector argument:
$$
\mathbf{h}_{k+1}^{(n)} = a\Big[\beta_{k}+ \Omega_{k}\cdot \mathbf{h}_{k}^{(n)}+\Omega_{k}\cdot \text{agg}[n,k]\Big]
$$
We can write this more succinctly by noting that the post-multiplication of a matrix by a vector returns a weighted sum of its columns. The $n$-th column of the adjacency matrix $\mathbf{A}$ contains ones at the positions of the neighbors. Hence, if we collect the node embeddings into a $D\times N$ matrix $\mathbf{H}_{k}$ and post-multiply by the adjacency matrix $\mathbf{A}$, the $n$-th column is $\text{agg}[n,k]$. Thus, the update for the nodes is now:
$$
\begin{align}
\text{H}_{k+1}  & = a[\beta_{k}\mathbf{1}^{T}+\Omega_{k}\mathbf{H}_{k}+\Omega_{k}\mathbf{H}_{k}\mathbf{A}] \\[2ex] 
     & = a[\beta_{k}\mathbf{1}^{T}+\Omega_{k}\mathbf{H}_{k}(\mathbf{A}+\mathbf{I})]
\end{align}
$$
where $\mathbf{1}$ is an $N\times 1$ vector containing ones. Here, the nonlinear activation function $\mathbf{a}[\bullet]$ is applied independently to every member of its matrix argument.

This layer satisfies the design considerations; it's equivariant to permutations of the node indices, can cope with any number of neighbors, exploits graph structure to provide a relative inductive bias, and shares parameters throughout the graph. We can see it being applied to [[Graph Classification|graph classification]].