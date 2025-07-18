---
title: Binary Classification
tags:
  - dl
date: 2025-06-24
aliases:
  - binary classification
---
In binary classification, the goal is to assign the data $\mathbf{x}$ to one of two discrete classes $y \in \{ 0,1 \}$. In this context, we refer to $y$ as a *label*.

Examples of binary classification:
- Predicting whether a restaurant review is positive ($y=1$) or negative ($y=0$) from text data $\mathbf{x}$
- Predicting whether a tumor is present ($y=1$) or absent ($y=0$)

We can follow the [[Loss Function Recipe|loss function recipe]] to construct the loss function. First, we choose a probability distribution over the output space $y\in \{ 0,1 \}$. A suitable choice is the Bernoulli distribution, which is defined on the domain $\{ 0,1 \}$. This has a single parameter $\lambda \in [0,1]$ that represents the probability that $y=1$:
$$
Pr(y|\lambda)= \begin{cases}
1-\lambda & &  y=0 \\
\lambda & &  y=1
\end{cases}
$$
![[Binary Classification-20250624101346084.png]]

This can equivalently be written as
$$
Pr(y|\lambda)=(1-\lambda)^{1-y} \cdot \lambda^{y}
$$

Then, we set the model $f[\mathbf{x},\phi]$ to predict the single distribution parameter $\lambda$. However, $\lambda$ can only take values in the range $[0,1]$, and we cannot guarantee that the network output will lie in this range. Thus, we pass the network output through a function that maps the real numbers $\mathbb{R}$ to $[0,1]$. A suitable choice is the [[Sigmoid|sigmoid]]:
$$
\text{sig}[z]=\frac{1}{1+\exp[-z]}
$$
Hence, we predict the distribution parameter as $\lambda=\text{sig}[f[\mathbf{x},\phi]]$. The likelihood then becomes:
$$
Pr(y|\mathbf{x})=(1-\text{sig}[f[\mathbf{x}, \phi]])^{1-y} \cdot \text{sig}[f[\mathbf{x}, \phi]]^{y}
$$
This is shown below for a shallow neural network model:

![[Binary Classification-20250624101937533.png]]

The loss function is the [[Log-Likelihood Criterion|negative log-likelihood]] of the training set:
$$
L[\phi]=\sum_{i=1}^{I}-(1-y_{i})\log \Big[1- \text{sig}[f[\mathbf{x}_{i}, \phi]]\Big] - y_{i} \log \Big[ \text{sig}[f[\mathbf{x}_{i}, \phi]] \Big]
$$
This is known as [[Binary Cross-Entropy Loss|binary cross-entropy loss]].

The transformed model output $\text{sig}[f[\mathbf{x}, \phi]]$ predicts the parameter $\lambda$ of the Bernoulli distribution. This represents the probability that $y=1$, and it follows that $1-\lambda$ represents the probability that $y=0$. When we perform inference, we may want a point estimate of $y$, so we set $y=1$ if $\lambda>0.5$ and $y=0$ otherwise.

An important result is that:
$$
\frac{ \partial \ell_{i} }{ \partial \text{f}[\mathbf{x}_{i}, \phi] } = \text{sig}[\text{f}[\mathbf{x}_{i}, \phi]]-y_{i}
$$
where $\ell_{i}$ is the loss for a particular data sample. See question 7.5 of [[UDL Chapter 7 Problems]] for how this is derived – I quite liked this derivation!