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
