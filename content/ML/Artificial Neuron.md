---
title: Artificial Neuron
tags:
  - ml
date: 2023-06-25
aliases:
---
The basic element of a neural network is called a neuron. This is also sometimes called a [[Perceptron|Perceptron]] but I prefer to use perceptron to refer to the learning algorithm; it is also referred to as "unit" or "node".

![[Artificial Neuron.png|464]]

The neuron is essentially a non-linear function of an input vector $x \in \mathbb{R}^{m}$ to a single value $a \in \mathbb{R}$.  It is parametrized by:
- A vector of *weights* $(w_{1}, \dots, w_{m}) \in \mathbb{R}^{m}$ and an *offset*/*threshold* $w_{0} \in \mathbb{R}$.
- An [[activation function]] $f: \mathbb{R} \to \mathbb{R}$, which gives us non-linearity.

In total, the function represented by the neuron can be summarized as:
$$
a = f(z)=f\left( \sum_{j=1}^{m} x_{j}w_{j} + w_{0} \right) = f(w^{T}x+w_{0})
$$
- The final formulation is basically just the activation function applied to [[Linear Classifier|linear classifier]]

#### Training
How do we train a single unit? Given a loss function $L(guess, actual)$, and a dataset $\{ (x^{(1)}, y^{(1)}), \dots, (x^{n}, y^{(n)}) \}$, we can do [[Gradient Descent]], adjusting the weights $w, w_{0}$ to minimize:
$$
J(w, w_{0}) = \sum_{i=1}^{n}L(\text{NN}(x^{(i)}; w, w_{0}), y^{(i)})
$$
where $\text{NN}(\cdot)$ is the output of our neural net for a given input.

[[Linear Classifier|Linear classifiers]] with hinge loss and [[Regression|regression]] with quadratic loss, which we've studied, are two special cases of the neuron; both of them have an activation function of $f(x)=x$.