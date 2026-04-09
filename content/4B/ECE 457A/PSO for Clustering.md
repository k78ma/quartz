---
title: PSO for Clustering
tags:
  - ece457a
date: 2026-04-09
aliases: pso for clustering
---
Clustering problem: Given $n$ objects (each could be a vector of $d$ features), group them in $k$ groups in such a way that all objects in a group have a "natural" relation to one another, and objects not in the same group are somehow different.

## K-means
The prototypical clustering algorithm is $K$-means:
- Initialize $k$ cluster centers
- Repeat:
    - Distribute objects among clusters using similarity measure and satisfying performance index
    - Compute new cluster centers
    until no change in centers.

This is typically applied with a number of different conditions and then we pick the best solution. 

## PSO Clustering
- Initialize each particle as $K$ random cluster centers.
- For iterations = 1 to max:
    - For all particles $i$:
        - For all pattern $X_{p}$ in the datset:
            - Calculate Euclidean distance of $X_{p}$ with all cluster centroids
            - Assign $X_{p}$ to the cluster that has the nearest centroid to $X_{p}$
        - Calculate the objective function for the current centers and assignment
    - Find the personal best and global best position of each particle
    - Update the cluster centroids according to PSO velocity and position updates

## Hybrid PSO-K-means
1. Start PSO clustering process until the max number of iterations is exceeded
2. Inherit clustering result from PSO as the initial centroid vectors of $k$-means
3. Start $K$-means process until max number of iterations

For PSO, $w$ is initially set as 0.72, and $c_{1}=c_{2}=1.49$. $w$ is reduced by 1% at each generation to ensure good convergence.

![[PSO for Clustering-1775768603759.webp]]




