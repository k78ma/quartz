---
title: Occupancy Grid Mapping
tags:
  - mte544
date: 2025-11-01
aliases: occupancy grid mapping
---
In an occupancy grid mapping scheme, the map is represented as a grid (like pixels in an image):
$$
m \in  \mathbb{R}^{n_{h}\times n_{v}}
$$
- $n_{h}$ rows and $n_{v}$ columns

![[Occupancy Grid Mapping-20251101212958551.png]]

In a standard mapping problem, for the $i$-th grid cell, we assign a pdf $p(m_{i})$.
- Free (no obstacle) means $m_{i}= 0$
- Occupied means $m_{i}=0$

We then use a [[Bayes Filter]] to estimate its posterior:
$$
p(m_{i} \mid z_{1:k}, \xi_{1 : k})
$$
If we assume that each cell is independent, we have
$$
p(m_{i} \mid z_{1:k}, \xi_{1 : k}) = \prod_{i} p(m_{i} \mid z_{i:k}, \xi_{1 : k})
$$
Since $m_{i}$ can either be $0$ (free) or $1$ (occupied), this is binary Bayes filter.