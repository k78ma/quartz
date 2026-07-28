---
title: Edge Graph
tags:
date: 2026-07-28
aliases:
  - edge graphs
  - edge graph
---
Our [[Graph Convolutional Network|graph convolutional networks]] and [[Graph Attention|graph attention]] methods so far have focused on processing node embeddings. These evolve as they are passed through the network so that by the end of the network, they represent both the node and its context in the graph. We now consider the case where the information is associated with the edges of the graph.

It's easy to adapt the machinery for node embeddings to process edge embeddings using the *edge graph* (also known as the adjoint graph or line graph). This is a complementary graph, in which:
- Each edge in the original graph becomes a node
- Every two edges with a common node in the original graph create an edge in the new graph.

In general, a graph can be recovered from its edge graph, so it's pssobiel to swap between these two representations.

To process edge embeddings, the graph is translated to its edge graph. Then we use exactly the same techniques, aggregating information at each new node from its neighbors and combining this with the current representation. When both node and edge embeddings are present, we can translate back and forth between the two graphs. Now there are four possible updates (nodes update nodes, notes update edges, edges update nodes, and edges update edges). These can be alternated as desired, or with minor modifications, nodes can be updated simultaneously from both nodes and edges.

![[Edge Graph-1785274703832.webp]]