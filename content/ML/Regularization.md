---
title: Regularization
tags:
  - ml
date: 2023-10-29
aliases:
  - regularization
  - regularizer
---
Recall that machine learning can be framed in the form of an optimization problem, such as:
$$
J(\Theta) = \left( \frac{1}{n}\sum_{i=1}^{n} \underbrace{ L(h(x^{(i)};\Theta), y^{i}) }_{ \text{loss} } \right) + \underbrace{ \lambda }_{ \text{constant} } \;  \underbrace{ R(\Theta) }_{ \text{regularizer} }
$$
Regularization serves to increase the generalization capability of our model to new input values outside of the training set. What allows generalization is the assumption that there is an underlying regularity that governs both the testing and training data. There are two ways to do this:
- Choosing a limited class of possible hypotheses to describe the underlying regularity
- Provide smoother guidance by specifying that we prefer some hypotheses over others. The regularizer articulates this preference, and the constant $\lambda$ says how much we are willing to trade off loss on the training data versus preference over hypotheses.

Another nice way of thinking about regularization is that we would like to prevent our hypothesis from being too dependent on the particular training data that we were given: we would like for it to be the case that if the training data were changed slightly, the hypothesis would not change by much.

In the figure below, $h_{1}$ has $0$ training loss but is clearly overfit to the data, while $h_{2}$ misclassifies two points but is far simpler. Since simpler solutions tend to be preferred, we might prefer $h_{2}$ over $h_{1}$, expecting it to perform better on samples drawn from the same distribution. 


![[Regularization.png|396]]

A common strategy for specifying a regularizer is to use the form:
$$
R(\Theta) = \mid \mid \Theta - \Theta_{\text{prior}} \mid \mid^{2}
$$
when we have some idea in advance that $\theta$ ought to be near some value of $\Theta_{\text{prior}}$.

In the absence of such prior knowledge, the default is to regularize toward zero:
$$
R(\Theta) = \mid \mid \Theta \mid \mid^{2}
$$
Regularization methods:
- [[Ridge Regression]]