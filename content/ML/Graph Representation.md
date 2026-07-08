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
