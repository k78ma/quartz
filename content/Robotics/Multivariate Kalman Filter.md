---
title: Multivariate Kalman Filter
tags:
  - state-estimation
date: 2024-11-16
aliases:
  - multivariate kalman filter
---
The output of a Kalman filter is a random variable. The mean of the random variable is the state estimate. The variance of the random variable represents the estimation uncertainty. The Kalman Filter provides us with the estimate and the level of confidence of its estimate.

Recall that the 1D Kalman Filter equations include four uncertainty variables:
- $p_{n,n}$ is the variance of an estimate (the current state)
- $p_{n+1,n}$ is the variance of a prediction (the next state)
- $r_{n}$ is the measurement variance
- $q$ is the process noise

For a multivariate Kalman Filter, the system state is described by a vector with more than one variable. For example, the object’s position on the plane can be described by two variables:
$$
\pmb{x}=\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

The uncertainty variables of the multivariate Kalman Filter are:
- $\pmb{P}_{n,n}$ is a [[Covariance Matrix|covariance matrix]] that describes the squared uncertainty of an estimate
- $\pmb{P}_{n+1,n}$ is a covariance matrix that describes the squared uncertainty of a prediction
- $\pmb{R}_{n}$ is a covariance matrix that describes the squared measurement uncertainty
- $\pmb{Q}$ is a covariance matrix that describes the process noise

