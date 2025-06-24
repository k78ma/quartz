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
\hat{\phi}= \underset{\phi}{\operatorname{argmin}}\Big[L[\phi]\Big] =\underset{\phi}{\operatorname{argmin}}\left[ -\sum_{i=1}^{I} \log\Big[Pr(y_{i} \, | \,f[x_{i}, \phi])\Big] \right] \\[2ex]
$$
Examples of this:
- [[Univariate Regression]]
- [[Binary Classification]]
- [[Multi-class Classification]]