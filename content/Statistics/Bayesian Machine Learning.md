---
title: Bayesian Machine Learning
tags:
  - ml
  - stats
date: 2024-04-23
aliases:
---
The [[Bayesian Probability|Bayesian view of statistics]] provides some interesting insights into machine learning.

Let us consider a sine curve regression example. We've already seen that [[Linear Regression as MLE|linear regression parameters can be chosen by maximum likelihood]], where we set $\mathbf{w}$ to the value that maximizes the function $p(D|\mathbf{w})$, such that the probability of observing the data set is maximized. In machine learning, the negative log of the likelihood function is an *error* or *loss* function; because the negative log is monotonically decreasing, minimizing the error is equivalent to maximizing the likelihood. 

## Uncertainty and Model Parameters
Different training datasets obviously give rise to different solutions for $\mathbf{w}_{\text{ML}}$. Using the Bayesian view, we can use probability to describe the uncertainty in model parameters.
- Assumptions about $\mathbf{w}$, before observing any data, can be captured by the prior probability distribution $p(\mathbf{w})$
- The effect of observed data $D$ can be expressed through the likelihood function $p(D|\mathbf{w})$

Bayes' theorem then takes the form
$$
p(\mathbf{w}|D)=\frac{p(D|\mathbf{w})\,p(\mathbf{w})}{p(D)}
$$
The quantity $p(D|\mathbf{w})$ is the likelihood function when it's viewed as a function of the parameter vector $\mathbf{w}$, and it expressed how probable the observed data set is for different values of $\mathbf{w}$. This is **not** a probability distribution with respect to $\mathbf{w}$, and its integral with respect to $\mathbf{w}$ does not necessarily equal 1. 

Given this definition of likelihood, we can re-state Bayes' theorem as:
$$
\text{posterior} \propto \text{likelihood} \times  \text{prior}
$$
where all of these are viewed as functions of $\mathbf{w}$. 
- The denominator, $p(D)$, is a normalization constant that ensures the posterior $p(\mathbf{w}|D)$ integrates to 1. If we integrate both sides of the above Bayes' theorem expression, we can express $p(D)$ in terms of the prior distribution and the likelihood function:
$$
p(D)=\int p(D|\mathbf{w})\, p(\mathbf{w})\, d\mathbf{w} 
$$
In both the Bayesian and frequentist paradigms, the likelihood function $p(D|\mathbf{w})$ plays a central role, but the way it's used is fundamentally different in the two approaches. 
- In a frequentist setting, $\mathbf{w}$ is considered to be a fixed parameter, whose value is determined by some form of ‘estimator’, and error bars on this estimate are determined (conceptually, at least) by considering the distribution of possible data sets $D$. 
- From the Bayesian viewpoint there is only a single data set $D$ (the one that is actually observed), and the uncertainty in the parameters is expressed through a probability distribution over $\mathbf{w}$.

## Regularization
We can use the Bayesian perspective to gain insight into the technique of regularization. Instead of choosing model parameters by maximizing the likelihood function with respect to $\mathbf{w}$, we can maximize the posterior probability, $p(\mathbf{w}|D)$, which we showed with Bayes' theorem above. This is called the *maximum a posteriori* estimate, or *MAP* estimate. Equivalently, we can minimize the negative log of the posterior probability:
$$
\begin{align}
p(\mathbf{w}|D) & =\frac{p(D|\mathbf{w})\,p(\mathbf{w})}{p(D)} \\[2ex] 
-\ln p(\mathbf{w}|D) & =-\ln p(D|\mathbf{w})-\ln p(\mathbf{w})+\ln p(D)
\end{align}
$$
- The first term on the right side is the usual log likelihood
- The second term is a function of $\mathbf{w}$, which is added to the log likelihood, so we can recognize it as a form of regularization.
- The third term can be omitted because it doesn't depend on $\mathbf{w}$

## Proper Bayesian ML
The Bayesian perspective has allowed us to motivate the use of regularization and derive a specific form for the regularization term. 

However, the use of Bayes’ theorem alone does not constitute a truly Bayesian treatment of machine learning. We are still finding a single solution for $\mathbf{w}$, and therefore not take account of uncertainty in the value of $\mathbf{w}$.

Suppose we have a training data set $D$ and our goal is to predict some target variable $t$ given a new input value $x$. We are therefore interested in the distribution of $t$ given both $x$ and $D$. From the [[Sum and Product Rules of Probability]], we have
$$
p(t|x,D)=\int p(t|x, \mathbf{w})\, p(\mathbf{w}|D) \, dx 
$$
The prediction is obtained by taking a weighted average $p(t|x, \mathbf{w})$ over all possible values of $\mathbf{w}$, in which the weighting function is given by the posterior probability distribution $p(\mathbf{w}|D)$. The key difference that distinguishes Bayesian methods is this integration over the space of parameters. By contrast, conventional frequentist methods use point estimates for parameters obtained by optimizing a loss function such as a regularized sum-of-squares.

This Bayesian methodology offers some powerful insights:
- The problem of over-fitting arises from the use of maximum likelihood, and doesn't arise when we marginalize over parameters in the Bayesian approach.
- We may have multiple potential models that we could use to solve a given problem, such as polynomials of different orders in the regression example. A maximum likelihood approach simply picks the model that gives the highest probability of the data, but this favors more complex models, leading to over-fitting.
- A fully Bayesian treatment involves averaging over all possible models, with the contribution of each model weighted by its posterior probability. 
	- This probability is typically highest for models of intermediate complexity. 
	- Very simple models (such as polynomials of low order) have low probability as they are unable to fit the data well.
	- Very complex models (such as polynomials of very high order) also have low probability because the Bayesian integration over parameters automatically and elegantly penalizes complexity.

The major drawback of doing fully Bayesian ML like this is integrating over the space of parameters. Modern deep learning models can have millions or billions of parameters and even simple approximations to such integrals are typically infeasible. It's often better to apply maximum likelihood techniques, generally augmented with one or more forms of regularization, to a large neural network rather than apply a Bayesian treatment to a much smaller model.