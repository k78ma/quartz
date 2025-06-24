---
title: Heteroscedastic Regression
tags:
  - dl
date: 2025-06-23
aliases:
  - heteroscedastic regression
  - heteroscedastic
---
In simple [[Univariate Regression as MLE#Estimating variance|univariate regression]], we usually assume that the variance of the data is constant everywhere. However, this might be unrealistic. When the uncertainty of the model varies as a function of the input data, this is called **heteroscedastic**.

A simple way to model this is to train a neural network $\mathbf{f}[\mathbf{x}, \phi]$ that computes both the mean and the variance.
- Example: Consider a shallow network with 2 outputs. We denote the first output as $f_{1}[\mathbf{x}, \mathbf{\phi}]$ and use this to predict the mean. We denote the second as $f_{2}[\mathbf{x}, \mathbf{\phi}]$ and use it to predict the variance.

Note that the variance must be positive, but we can't guarantee that the network will produce a positive output. To ensure that the computed variance is positive, we pass the second network output through a function that maps an arbitrary value to a positive one. A suitable choice is the squaring function, giving
$$
\begin{align}
\mu & =f_{1}[\mathbf{x},\phi] \\
\sigma^{2} & =f_{2}[\mathbf{x}, \phi]^{2}
\end{align}
$$
which results in the loss function
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmin}}\left[ -\sum_{i=1}^{I} \left( \log\left[  \frac{1}{\sqrt{ 2\pi f_{2}[\mathbf{x}_{i}, \phi]^{2} }} \right] - \frac{(y_{i}-f_{1}[\mathbf{x}_{i}, \phi]^{2})}{2f_{2}[\mathbf{x}_{i}, \phi]^{2}} \right) \right]
$$
when using the same [[Maximum Likelihood Criterion|maximum likelihood criterion]] approach that we used for [[Univariate Regression as MLE|univariate regression]].