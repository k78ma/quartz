---
title: Graph Representation
tags:
  - dl
date: 2026-07-07
aliases: graph representation
---
In addition to the [[Graph|graph]] structure itself consisting of nodes and edges, information is typically associated with each node. For example, in a social network, each individual might be characterized by a fixed-length vector representing their interests. Sometimes, the edges also have information attached. For example, for a road network, each edges might be characterized by its length, number of lanes, frequency of accidents, and speed limit. The information at a node is stored in a **node embedding**, and the information at an edge stored in an **edge embedding**.

Formally, a graph consists of a set of $N$ nodes connected by a set of $E$ edges. The graph can be encoded by three matrices $\mathbf{A}, \mathbf{X}, \mathbf{E}$, representing the graph structure, node embeddings, and edge embeddings.

![[Graph Representation-1783476661500.webp]]

The graph structure is represented by the adjacency matrix $\mathbf{A}$. This is an $N\times N$ matrix where each entry $(m,n)$ is set to one if there is an edge between nodes $m$ and $n$ and zero otherwise. For undirected graphs, this matrix is always symmetric. For large sparse graphs, it can be stored as a list of connections $(m,n)$ to save memory.

The $n$-th node has an associated node embedding $x^{(n)}$ of length $D$. These embeddings are concatenated and stored in the $D\times N$ node data matrix $\mathbf{X}$. Similarly, the $e$-th edge has an associated edge embedding $e^{(e)}$ of length $D_{E}$. These embeddings are collected into the $D_{E}\times E$ matrix $\mathbf{E}$.

## Adjacency matrix properties
The adjacent matrix can be used to find the neighbors of a node using linear algebra.

Consider encoding the $n$th node's position as a one-hot column vector (a vector with only one non-zero entry at position $n$, which is set to one). Wen we pre-multiply this vector by the adjacency matrix, it extracts the $n$th column of the adjacency matrix and returns a vector with ones at the positions of the neighbors (all the places we can reach in a walk of length one from the $n$th node). If we repeat this procedure (pre-multiply by $A$ again), the resulting vector contains the number of walks of length two from node $n$ to every node.

In general, if we raise the adjacency matrix to the power of $L$, the entry at position $(m,n)$ of $\mathbf{A}^{L}$ contains the number of unique *walks* of length $L$ from node $m$ to node $n$. This is not the same as the number of unique paths since the walks include include routes that visit the same node more than once. Nonetheless, $\mathbf{A}^{L}$ still contains valuable information about the graph connectivity; a non-zero entry at position $(m,n)$ indicates that the distance from $m$ to $n$ must be less than or equal to $L$.

![[Graph Representation-1784997988207.webp]]

## Permutation of node indices
Node indexing in graphs is arbitrary; permuting the node indices results in a permutation of the columns of the node data matrix $\mathbf{X}$ and a permutation of both the rows and columns of the adjacency matrix $\mathbf{A}$. However, the underlying graph is unchanged; this is in contrast to images, where permuting the pixels creates a different images, and to text, where permuting the words creates a different sentence.

![[Graph Representation-1785004994761.webp]]

The operation of exchanging node indices can be expressed mathematically by a [[Permutation Matrix|permutation matrix]], $\mathbf{P}$. This is a matrix where exactly one entry in each row and column take the value one, and the remaining values are zero. When position $(m,n)$ of the permutation matrix is set to one, it indicates that node $m$ will become node $n$ after the permutation. To map from one indexing to another, we use the operations:
$$
\begin{align}
\mathbf{X}'  & = \mathbf{X}\mathbf{P} \\
\mathbf{A}'  & = \mathbf{P}^{T}\mathbf{A}\mathbf{P}
\end{align}
$$
where post-multiplying by $\mathbf{P}$ permutes the columns and pre-multiplying by $\mathbf{P}^{T}$ permutes the rows. It follows that any processing applied to the graph should also be indifferent to these permutations (permutation-invariant). Otherwise, the result will depend on the choice of node indices.

#cards/dl
For a graph, what does adjacency matrix taken to the $L$-th power $\mathbf{A}^{L}$ give us?
?
The entry at position $(m,n)$ of $\mathbf{A}^{L}$ contains the number of unique *walks* of length $L$ from node $m$ to node $n$.
<!--SR:!fsrs,2026-08-12T02:36:54.792Z,14,13.8358397,2.1043314,2,3,0,0,2026-07-29T02:36:54.792Z-->
+++