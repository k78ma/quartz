---
title: Trees
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
---
A *tree* is a type of graph data structure composed of nodes and edges.
#### Tree terminology
- *Nodes:* Abstractions of objects
- *Edges*: Relationships between nodes
- *Root:* The very first/parent node
- *Internal node:* A node that has at least one child
- *Leaf node:* A node with no children
- *Ancestor:* Nodes between path from root to current node
- *Descendant:* Nodes that are reachable from current node when moving down the tree
- *Level:* Number of ancestors from that node until root node (start at 0 or 1)
#### Properties of Trees
- Acyclic – doesn't contain cycles
- There exists a path from a root node to any node
- Has `N - 1` edges, where `N` is the number of nodes in the tree
- Each node has exactly one parent node with the exception of the root node (which has zero)

