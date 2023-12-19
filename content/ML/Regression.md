---
title: Regression
tags:
  - ml
date: 2023-11-04
aliases:
  - regression
---
Regression is a supervised learning problem. It has data of the form:
$$
\cal{D} = \{ (x^{(1)}, y^{(1)}), \dots, (x^{(n)}, y^{(n)}) \} 
$$
Instead of [[Linear Classifier|classification]] problems, where $y$ values are discrete, they will be real-valued. Regression is appropriate for predicting numerical quantities, like height, stock value, etc. 

Thus, our hypotheses will have the form:
$$
h: \; \mathbb{R}^{d} \to \mathbb{R}
$$
An example hypothesis for linear regression would be:
$$
h(x; \theta, \theta_{0}) = \theta^{T}x+\theta_{0}
$$
- Note that for classification, we would have done something like applying a $\mathrm{sign}$ function or a [[Sigmoid|sigmoid]]. Here, we are letting it be. 
- Furthermore, note that we can get a rich class of hypotheses by performing a non-linear feature transformation before doing the regression, where $\theta^{T}x + \theta_{0}$ is a linear regression of $x$, but $\theta^{T}\phi(x)+ \theta_{0}$ is a non-linear function of $x$ if $\phi$ is a non-linear function of $x.$

A typical loss function for regression is *squared loss*:
$$
L\text{(guess, actual)} = (\text{guess} - \text{actual})^{2}
$$
- This penalizes guesses that are too high the same amount as it penalizes guesses that are too low.
- Has a good mathematical justification in the case that your data are generated from an underlying linear hypothesis, but with Gaussian-distributed noise added to the y values.

With the above hypothesis and loss function, we can treat regression as an [[Machine Learning as Optimization|optimization]] problem in which, for a given dataset $\cal{D}$, we wish to find a linear hypothesis that minimizes mean squared error. This *mean squared error* objective is:
$$
J(\theta, \theta_{0})=\frac{1}{n}\sum_{i=1}^{n}(\theta^{T}x^{(i)}+\theta_{0}-y^{(i)})^{2}
$$
resulting in the solution
$$
\theta^{*}, \theta_{0}^{*} = \mathrm{argmin}_{\theta, \theta_{0}}(J(\theta, \theta_{0}))
$$
- [ ] 
The classical regression problem is called [[Ordinary Least Squares]].