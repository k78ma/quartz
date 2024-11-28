---
title: Covariance Ellipse
tags:
  - state-estimation
date: 2024-11-25
aliases:
  - covariance ellipse
---
First, let us find the properties of the covariance ellipse of a [[Multivariate Normal Distribution#Bivariate Distribution|bivariate distribution]]. The covariance ellipse represents an iso-contour of the Gaussian distribution and allows visualization of a $1\sigma$ confidence interval in two dimensions. The covariance ellipse provides a geometric interpretation of the covariance matrix.

Any ellipse can be described in four parts:
- Ellipse center $\mu_{x}, \mu_{y}$
- Half-major axis $a$
- Half-minor axis $b$
- Orientation angle $\theta$

![[Covariance Ellipse.png|424]]

The ellipse center is a mean of the random variable:
$$
\begin{align}
\mu_{x}=\frac{1}{N} \sum_{i=1}^{N} x_{i} \\[2ex] 
\mu_{y}=\frac{1}{N} \sum_{i=1}^{N} y_{i}
\end{align}
$$
The lengths of the ellipse axes are the square roots of the eigenvalues of the random variable covariance matrix:
- The length of the half-major axis $a$ is given by the highest eigenvalue square root
- The length of the half-minor axis $b$ is given by the second eigenvalue square root

The orientation of the ellipse is an orientation of the covariance matrix eigenvector that corresponds to the highest eigenvalue:
$$
\theta=\arctan\left( \frac{v_{y}}{v_{x}} \right)
$$
where:
- $v_{x}$ is the $x$-coordinate of the eigenvector that corresponds to the highest eigenvalue
- $v_{y}$ is the $y$-coordinate of the eigenvector that corresponds to the highest eigenvalue

Python example:
```python
import numpy as np 

C = np.array ([[5 , -2] ,[ -2 , 1]]) # define covariance matrix

eigVal , eigVec = np.linalg.eig(C) # find eigenvalues and eigenvectors
a = np.sqrt (eigVal [0]) # half - major axis length
b = np.sqrt (eigVal [1]) # half - minor axis length 

# ellipse orientation angle
theta = np.arctan (eigVec [1 , 0] / eigVec [0 , 0])
```