---
title: Conditional Probabilistic Perspective of Learning
tags:
  - dl
date: 2025-06-19
aliases:
  - conditional probabilistic perspective of learning
---
Consider a model $f[x,\phi]$ with parameters $\phi$ that computes an output from $x$. Instead of thinking about the model directly computing a prediction $y$, we can shift perspective and consider the model as computing a conditional probability distribution $Pr(y\, | \,x)$, over possible outputs $y$ given $x$.

The [[Loss Function|loss]] encourages each training output $y_{i}$ to have a high probability under the distribution $Pr(y_{i}\, | \, x_{i})$, computed from the corresponding $x_{i}$.

> [!example]- Conditional probability model examples
> 
!>[[Maximum Likelihood for Loss Functions-20250609235217601.png]]
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

## Multiple Outputs
Often, we wish to make more than one prediction with the same model, so the target output $\mathbf{y}$ is a vector. For example, we might want to predict a molecule's melting and boiling point (multivariate regression), or the obstacle class at every point in an image (multivariate classification). While it's possible to define multivariate probability distributions and use a neural network to model their parameters as a function of the input, it's more usual to treat each prediction as independent.

**Independence** implies that we treat the probability $Pr(\mathbf{y}|\mathbf{f}[\mathbf{x}, \phi])$ as a product of variate terms for each element $y_{d} \in  \mathbf{y}$:
$$
Pr(\mathbf{y}\, | \,\mathbf{f}[\mathbf{x}, \phi]) = \prod_{d} Pr(y_{d}\, | \,\mathbf{f}_{d}[\mathbf{x}, \phi])
$$
where $\mathbf{f}_{d}[\mathbf{x}, \mathbf{\phi}]$ is the $d$-th set of network outputs, which describe the parameters of the distribution over $y_{d}$. For example: 
- To predict multiple continuous variables $y_{d}\in \mathbb{R}$, we use a normal distribution for each $y_{d}$, and the network outputs $f_{d}[\mathbf{x}, \mathbf{\phi}]$ predict the means of these distributions. 
- To predict multiple discrete variables $y_{d} \in \{ 1,2,\dots,K \}$, we use a categorical distribution for each $y_{d}$. Here, each set of network outputs $\mathbf{f}_{d}[\mathbf{x}, \mathbf{\phi}]$ predicts the $K$ values that contribute to the categorical distribution for $y_{d}$.

When we minimize the [[Log-Likelihood Criterion|negative log-likelihood]], this product becomes a sum of terms:
$$
L[\phi]= - \sum_{i=1}^{I} \log[Pr(\mathbf{y}_{i} \, | \,\mathbf{f}[\mathbf{x}_{i}, \mathbf{\phi}])] = - \sum_{i=1}^{I} \sum_{d} \log \Big[ Pr(y_{id} \, | \, \mathbf{f}_{d}[\mathbf{x}_{i}, \mathbf{\phi}]) \Big]
$$
where $y_{id}$ is the $d$-th output from the $i$-th training example.

To make two or more prediction types simultaneously, we similarly assume the errors in each are independent. 
- Example: To predict wind direction and strength, we might choose the von Mises distribution (defined on circular domains) for the direction, and the exponential distribution (defined on positive real numbers) for the strength.

The independence assumption implies that the joint likelihood of the two predictions if the product of individual likelihoods. These terms will become additive when we compute the negative log-likelihood.