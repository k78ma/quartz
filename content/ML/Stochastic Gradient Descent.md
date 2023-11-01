---
title: Stochastic Gradient Descent
tags:
  - ml
date: 2023-10-30
aliases:
  - SGD
---
Consider an [[Machine Learning as Optimization|objective function]] of the form:
$$
f(\Theta) = \sum_{i=1}^{n}f_{i}(\Theta)
$$
During [[Gradient Descent]], we select one term of the sum and take a step in that direction. This is an alternative to computing the gradient of the whole dataset, which is computationally expensive and infeasible with large datasets. Furthermore, taking a bunch of small steps in a stochastic manner tends to average out to about the same as naive gradient descent.

![[Stochastic Gradient Descent.png]]

Note that now instead of a fixed $\eta$, it is indexed by the iteration of the algorithm, $t$. Choosing a good stopping criterion can be a little trickier for SGD than traditional gradient descent. In the above, we’ve just chosen to stop after a fixed number of iterations $T$. 

For SGD to converge to a local optimum as $t$ increases, the step size has to decrease as a function of time.
>[!theorem] Step size and convergence
>If $J$ is convex and $\eta(t)$ is a sequence satisfying
>$$
>\sum_{i=1}^{\infty} \eta(t) = \infty \quad \text{and} \quad \sum_{t=1}^{\infty} \eta(t)^{2} \leq \infty
>$$
>then SGD converges with probability $1$ to the optimal $\Theta$.

An example of decreasing step size would be to make $n(t) = 1 /t$ but people often use rules that decrease slowly, and so don't strictly satisfy the criteria for convergence.

#### Algorithmic Benefits
There are two some reasons why SGD might be better algorithmically than regular gradient descent (aka Batch Gradient Descent).
- If your $f$ is actually non-convex, but has many shallow local optima that might trap BGD, then taking *samples* from the gradient at some point $\Theta$ might bounce you around the landscape and out of the local optima.
- Sometimes, optimizing $f$ really well is not what we want to do, because it might overfit the training set; so, in fact, SGD might not get lower training error than BGD, it might result in lower test error.
- BGD typically requires computing some quantity over every data point in a data set. SGD may perform well after visiting only some of the data. This behavior can be useful for very large data sets – in runtime and memory savings.