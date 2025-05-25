---
title: Linear Regions Per Parameter for Neural Network
tags:
  - dl
date: 2025-05-25
aliases:
  - linear regions per parameter for neural network
---
## Shallow Networks
In a shallow network, as the input dimensions grow, the number of linear regions increases rapidly. Each hidden unit defines a hyperplane ($n-1$ dimensional plane) that delineates the part of the space where this unit is active from the part it is not. If we had the same number of hidden units as input dimensions $D_{i}$, we could align each hyperplane with one of the coordinate axes. For two input dimensions, this would divide the space into four quadrants. For three dimensions, this would create eight octants, and for $D_{i}$ dimensions, this would create $2^{D_{i}}$ orthants. hallow neural networks usually have more hidden units than input dimensions, so they typically create more than $2^{D_{i}}$ linear regions.

![[Multivariate Inputs and Outputs-2.png|616]]

![[Multivariate Inputs and Outputs-3.png|617]]

**Zavslavsky's formula:** The number of regions created by $D$ hyperplanes in the $D_{i}\leq D$-dimensional input space is at most
$$
\sum_{j=0}^{D_{i}} {D \choose j}
$$
which is a sum of binomial coefficients. 

As a rule of thumb, shallow neural networks almost always have a larger number $D$ of hidden units than input dimensions $D_{i}$ and create between $2D_{i}$ and $2D$ linear regions. 

## Deep Networks
A shallow network with one input, one output, and $D>2$ hidden units can create up to $D+1$ linear regions and is defined by 