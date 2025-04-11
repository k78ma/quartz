---
title: Multivariate Inputs and Outputs
tags:
  - ml
  - dl
date: 2024-12-21
aliases:
  - multivariate inputs and outputs
---
Often, we want to have our network map multivariate inputs $\mathbf{x}=[x_{1},x_{2},\dots,x_{D_{i}}]^{T}$ to multivariate output predictions $\mathbf{y}=[y_{1},y_{2},\dots,y_{D_{o}}]^{T}$. 

## Multivariate Outputs
To extend the network to multivariate outputs $\mathbf{y}$, we simply use a different linear function of the hidden units for each output. So, a network with a scalar input $x$, four hidden units $h_{1},h_{2},h_{3},h_{4}$, and a 2D multivariate output $\mathbf{y}=[y_{1},y_{2}]^{T}$ would be defined as
$$
\begin{align}
h_{1} & =a[\theta_{10}+\theta_{11}x] \\
h_{2} & =a[\theta_{20}+\theta_{21}x] \\
h_{3} & =a[\theta_{30}+\theta_{31}x] \\
h_{4} & =a[\theta_{40}+\theta_{41}x]
\end{align}
$$
and
$$
\begin{align}
y_{1} & =\phi_{10}+\phi_{11}h_{1}+\phi_{12}h_{2} +\phi_{13}h_{3}+\phi_{14}h_{4} \\
y_{2} & =\phi_{20}+\phi_{11}h_{1}+\phi_{22}h_{2} +\phi_{23}h_{3}+\phi_{24}h_{4} 
\end{align}
$$
The two outputs are two different linear functions of the hidden units.

![[Multivariate Inputs and Outputs.png|596]]

- Recall (from [[Shallow Neural Network]]) that the joints in the piecewise functions depend on where the initial functions $\theta_{\bullet 0}+\theta_{\bullet1}x$ are clipped by the ReLU functions $a[\bullet]$ at the hidden units.
- Since both outputs $y_{1}$ and $y_{2}$ are different linear functions of the same four hidden units, the four joints are at the same places.
- However, the slopes of the linear regions and the overall vertical offset can differ, since these are applied after the ReLU.

## Multivariate Inputs
For multi variate inputs $\mathbf{x}$, we extend the linear relations between the input and the hidden units. So, a network with two inputs $\mathbf{x}=[x_{1},x_{2}]^{T}$ and a scalar output $y$ might have 3 hidden units defined by:
$$
\begin{align}
h_{1} & =a[\theta_{10}+\theta_{11}x_{1}+\theta_{12}x_{2}] \\
h_{2} & =a[\theta_{20}+\theta_{21}x_{1}+\theta_{22}x_{2}] \\
h_{3} & =a[\theta_{30}+\theta_{31}x_{1}+\theta_{32}x_{2}]
\end{align}
$$
where there is now one slope parameter for each input. The hidden units are combined to form the output in the usual way:
$$
y=\phi_{0}+\phi_{1}h_{1}+\phi_{2}h_{2}+\phi_{3}h_{3}
$$

![[Multivariate Inputs and Outputs-4.png|640]]

![[Multivariate Inputs and Outputs-1.png|536]]

- Each hidden unit receives a linear combination of the two inputs, which forms an oriented plane in the 3D input/output space.
- The activation function clips the negative values of these planes to zero.
- The clipped planes are then recombined in a second linear function to create a continuous piecewise linear surface consisting of convex polygonal regions.
- Each region corresponds to a different activation pattern. For example, in the central triangular region, the 1st and 3rd hidden units are active, with the 2nd inactive.

With more than 2 inputs, the visualization becomes difficult, but the interpretation is similar; the output is just a continuous piecewise linear function of the output, where the linear regions are now convex polytopes in the multi-dimensional input space.

## Number of Linear Regions
As the input dimensions grow, the number of linear regions increases rapidly. Each hidden unit defines a hyperplane ($n-1$ dimensional plane) that delineates the part of the space where this unit is active from the part it is not. If we had the same number of hidden units as input dimensions $D_{i}$, we could align each hyperplane with one of the coordinate axes. For two input dimensions, this would divide the space into four quadrants. For three dimensions, this would create eight octants, and for $D_{i}$ dimensions, this would create $2^{D_{i}}$ orthants. hallow neural networks usually have more hidden units than input dimensions, so they typically create more than $2^{D_{i}}$ linear regions.

![[Multivariate Inputs and Outputs-2.png|616]]

![[Multivariate Inputs and Outputs-3.png|617]]

**Zavslavsky's formula:** The number of regions created by $D$ hyperplanes in the $D_{i}\leq D$-dimensional input space is at most
$$
\sum_{j=0}^{D_{i}} {D \choose j}
$$
which is a sum of binomial coefficients. 

As a rule of thumb, shallow neural networks almost always have a larger number $D$ of hidden units than input dimensions $D_{i}$ and create between $2D_{i}$ and $2D$ linear regions. 