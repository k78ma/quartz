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
- A shallow network with one input, one output, and $D>2$ hidden units can create up to $D+1$ linear regions and is defined by $3D+1$ parameters.
- A deep network with one input, one output, and $K$ layers of $D>2$ hidden units can create a function with up to $(D+1)^{K}$ linear regions using $3D+1+(K-1)D(D+1)$ parameters
    -  See [[UDL Chapter 4 Problems|Problem 4.10]]

The left side of figure below shows that the number of linear regions increases as a function of the number of parameters mapping scalar input $x$ to scalar output $y$. Deep neural networks create much more complex functions for a fixed parameter budget. This effect is magnified as the number of input is magnified as the number of input $D_{i}$ increases (right side), although computing the maximum number of regions is less straightforward.

More linear regions seems attractive, but the flexibility of the functions is still limited by the number of parameters. Deep networks can create extremely large numbers of linear regions, but these contain complex dependencies and symmetries.
- We saw this when we thought of deep networks as [[Composing Shallow Networks|composing shallow networks]] that fold the input space.
- It's not clear that having more linear regions is an advantage, unless there are similar symmetries in the real-world functions that we wish to approximate, or we have reason to believe that the mapping from input to output really does involve a composition of simpler function.

![[Linear Regions Per Parameter for Neural Network-20250528180431494.png]]
