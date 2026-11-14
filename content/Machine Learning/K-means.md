---
title: K-means
tags:
  - dl
date: 2026-07-29
aliases: k-means
---
K-means is an unsupervised clustering method.

1. Initialization: Randomly select $k$ cluster centroids.
2. Assignment: Each data point is assigned to the nearest centroid, forming clusters.
3. Update: Recalculate the centroid of each cluster by averaging the points within it.
4. Repeat until centroids no longer change (or max number of iterations reached.)