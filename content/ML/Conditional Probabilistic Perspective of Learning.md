---
title: Conditional Probabilistic Perspective of Learning
tags:
  - dl
date: 2025-06-18
aliases:
  - conditional probabilistic perspective of learning
---
Consider a model $f[x,\phi]$ with parameters $\phi$ that computes an output from $x$. Instead of thinking about the model directly computing a prediction $y$, we can shift perspective and consider the model as computing a conditional probability distribution $Pr(y\, | \,x)$, over possible outputs $y$ given $x$.

The [[Loss Function|loss]] encourages each training output $y_{i}$ to have a high probability under the distribution $Pr(y_{i}\, | \, x_{i})$, computed from the corresponding $x_{i}$.

> [!examples]- Conditional probability model examples
> 
![[Maximum Likelihood for Loss Functions-20250609235217601.png]]
>
>- **a)** Regression task, where the goal is to predict a real-valued output $y$ from the input $x$ based on training data $\{ x_{i}, y_{i} \}$ (orange points). For each input value x, the model predicts a distribution $Pr(y\, | \,x)$ over the output $y \in  R$. The loss function aims to maximize the probability of the observed training outputs $y_{i}$ under the distribution predicted from the corresponding inputs $x_{i}$. 
>- **b)** To predict discrete classes $y \in  \{1, 2, 3, 4\}$ in a classification task, we use a discrete probability distribution, so the model predicts a different histogram over the four possible values of $y_{i}$ for each value of $x_{i}$.
>
>![[Maximum Likelihood for Loss Functions-20250609235734997.png]]
>
>- **c)** To predict counts $y\in \{ 0,1,2,\dots \}$ we use distributions defined over positive integers
>- **d)** To predict directions $y \in  (-\pi, \pi]$, we use distributions defined over circular domains


## Computing a distribution over outputs
How exactly can a model $f(x,\phi)$ be adapted to compute a probability distribution?

First, we choose a parametric distribution $Pr(y\,|\,\theta)$ defined on the output domain $y$. Then, we use the network to compute one or more of the parameters $\theta$ of this distribution.

For example, suppose the prediction domain is the set of real numbers, so $y \in \mathbb{R}$. Here, we might choose the univariate normal distribution, which is defined on $\mathbb{R}$. This distribution is defined by the mean $\mu$ and variance $\sigma^{2}$, so $\theta=\{ \mu, \sigma^{2} \}$. The model might predict the mean $\mu$, and the variance $\sigma^{2}$ could be treated as an unknown constant.

## Inference
We use [[Log-Likelihood Criterion|log-likelihood]] as a loss function to find the best parameters. At inference time, the network no longer predicts the outputs $y$ but instead determines a probability distribution over $y$. However, we often want to use a point estimate rather than a distribution. 

To do this, we return the maximum of the distribution
$$
\hat{y}=\underset{y}{\operatorname{argmax}}\Big[Pr(y|f(x,\hat{\phi}))\Big]
$$
It's usually possible to find an expression for this in terms of the distribution parameters $\theta$ predicted by the model. For example, in the univariate normal distribution, the maximum occurs at the mean $\mu$.