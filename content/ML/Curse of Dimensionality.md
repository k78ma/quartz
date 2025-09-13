---
title: Curse of Dimensionality
tags:
  - dl
date: 2025-09-05
aliases: curse of dimensionality
---
 The tendency of the volume of high-dimensional space to overwhelm the number of training points is called the curse of dimensionality. As dimensionality increases, the volume of space grows so fast that the amount of data needed to densely sample it increases exponentially. 
 
 High-dimensional space has many unexpected properties:
 1. Two randomly sampled data points from a standard normal distribution are very close to orthogonal to one another (relative to the origin) with high likelihood.
 2. The distance from the origin of samples from a standard normal distribution is roughly constant.
 3. Most of a volume of a high-dimensional sphere (hypersphere) is adjacent to its surface. A common metaphor is that most of the volume of a high-dimensional orange is in the peel, not in the pulp.
 4. If we place a unit-diameter hypersphere inside a hypercube with unit-length sides, then the hypersphere takes up a decreasing proportion of the volume of the cube as the dimension increases. Since the volume of the cube is fixed at size one, this implies that the volume of a high-dimensional hypersphere becomes close to zero.
 5. For random points drawn from a uniform distribution in a high-dimensional hypercube, the ratio of the Euclidean distance between the nearest and furthest points becomes closet to one.