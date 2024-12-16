---
title: Supervised Learning
tags:
  - ml
  - dl
date: 2024-12-15
aliases:
  - supervised learning
---
A supervised learning model defines a mapping from one or more inputs to one or more outputs. The model is a mathematical equation; when the inputs are passed through tis equation, it computes the output (**inference**). The model equation also contains **parameters**. Different parameter values change the outcome of the computation; the model equation describes a family of possible input-output mappings, and the parameters specify the particular relationship.

When we **train** or **learn** a model, we find parameters that describe the true relationship between inputs and outputs. A learning algorithm takes a training set of input/output pairs and manipulates the parameters until the inputs predict their corresponding outputs as closely as possible. 

Specifically, we aim to build a model that takes an input $\mathbf{x}$ and outputs a prediction $\mathbf{y}$, both of which are vectors. To make the prediction, we need a model $\mathbf{f}[\cdot]$ that takes the input $\mathbf{x}$ and returns $\mathbf{y}$, so:
$$
\mathbf{y}=\mathbf{f}[\mathbf{x}]
$$
The model is a mathematical equation with a fixed form, representing a family of relations between input and output. The model contains parameters $\phi$, where the choice of parameters determines the particular relation between input and output:
$$
\mathbf{y}=\mathbf{f}[\mathbf{x},\phi]
$$
