---
title: Machine Learning as Optimization
tags:
  - ml
date: 2023-10-29
aliases:
  - objective function
---
Instead of trying to intuit learning algorithms, we can introduce a framework for solving machine learning problems that lets us derive machine learning algorithms for arbitrarily complicated problems. This is done by framing machine learning as an optimization problem: using computational methods to find the minimum/maximum of a given function.

Fundamentally, we define an *objective function* $J(\Theta)$, where $\Theta$ are the parameters of our model. For a [[Linear Classifier]], we would have $\Theta = \theta, \theta_{0}$. We also write $J(\Theta, \mathrm{D})$ to indicate dependence on the data $\mathrm{D}$. Generally, the optimization is that we want to find $\Theta^\star$ such that:
$$
\Theta^{\star} = \mathrm{argmin}_{\Theta} \; J(\Theta)
$$
which is to say that we want to find the $\Theta$ that minimizes $J(\Theta)$.

A common objective function for machine learning is:
$$
J(\Theta) = \left( \frac{1}{n}\sum_{i=1}^{n} \underbrace{ L(h(x^{(i)};\Theta), y^{i}) }_{ \text{loss} } \right) + \underbrace{ \lambda }_{ \text{constant} } \;  \underbrace{ R(\Theta) }_{ \text{regularizer} }
$$
where:
- $L$ is a [[Loss Function]], which makes the first term equivalent to training error.
- $R(\Theta)$ is a [[Regularization|regularizer]], and $\lambda$ is a constant hyperparameter governing how well we want to fit to training data.
