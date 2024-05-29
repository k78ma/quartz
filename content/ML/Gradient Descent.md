---
title: Gradient Descent
tags:
  - ml
date: 2023-10-29
aliases:
---
Given an [[Machine Learning as Optimization|objective function]], how do we optimize it?

The main idea is if we're trying to optimize a function *f*, we compute the derivative at our current point $x$ and move in the direction that makes the function smaller. In terms of a machine learning model, we would have some objective function $J(\Theta)$ defining some surface over $\Theta$, and we want to find the $\Theta$ value at the lowest point on the surface. 

- [[1D Gradient Descent]]
- [[Multiple Dimension Gradient Descent]]
- [[Stochastic Gradient Descent]]
- [[Batch Gradient Descent]]
- [[Vanishing + Exploding Gradient Problem]]
