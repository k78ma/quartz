---
title: Loss Function Recipe
tags:
  - dl
date: 2025-06-20
aliases:
  - loss function recipe
---
To construct a loss function for training data $\{ {x}_{i}, {y}_{i} \}$ using the [[Maximum Likelihood Criterion|maximum likelihood]] approach, we:

1. Choose a suitable probability distribution $Pr(y|\mathbf{\theta})$ defined over the domain of the set of predictions $\mathbf{y}$ with parameters $\mathbf{\theta}$.
2. Set the model $f[x,\phi]$ to predict one or more of these parameters, so that $\theta=f[x,\phi]$ and $Pr(y|\theta)=Pr(y|f[x,\phi])$.
3. To train the model, find the network parameters $\hat{\phi}$ that minimize the [[Log-Likelihood Criterion|negative log-likelihood]] loss function over the training dataset pairs $\{ x_{i}, y_{i} \}$:
$$
\hat{\phi}= \underset{\phi}{\operatorname{argmin}}\Big[L[\phi]\Big] =\underset{\phi}{\operatorname{argmin}}\left[ -\sum_{i=1}^{I} \log\Big[Pr(y_{i} \, | \,f[x_{i}, \phi])\Big] \right]
$$
4. To perform inference for a new test example $x$, return either the full distribution $Pr(y | f[x, \phi])$ or the value where this distribution is maximized.

What does a model predict in the maximum likelihood framework?::One or more parameters $\theta$ of the chosen probability function, such that $\theta=f[x,\phi]$.
<!--SR:!fsrs,2026-12-01T07:26:48.745Z,8,8.2956,1,2,1,0,0,2026-11-23T07:26:48.745Z-->

How do we choose a probability distribution for maximum likelihood training?::Choose a distribution $P(y|\theta)$ whose support (possible set of values) matches the domain of the target variable $y$.
<!--SR:!fsrs,2026-12-01T07:26:35.308Z,8,8.2956,1,2,1,0,0,2026-11-23T07:26:35.308Z-->

Examples of this:
- [[Univariate Regression]]
- [[Binary Classification]]
- [[Multi-class Classification]]

Depending on the type of prediction, we can choose an appropriate distribution and apply the recipe.

![[Loss Function Recipe-20250624153228848.png]]