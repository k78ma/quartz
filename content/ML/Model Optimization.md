---
title: "<%tp.file.title%>"
tags: 
date: "<%tp.date.now()%>"
aliases: "<%tp.file.title.toLowerCase()%>"
---
Given an [[Machine Learning as Optimization|objective function]] or [[Loss Function|loss function]], how do we optimize it?

We have a training set of $\{ \mathbf{x}_{i}, \mathbf{y}_{i} \}$ of input/output pairs. We seek parameters $\phi$ for the model $\mathbf{f}[\mathbf{x}_{i}, \phi]$ that maps the inputs $\mathbf{x}_{i}$ to the outputs $\mathbf{y}_{i}$ as closely as possible. To this end, we have a loss/objective function $L[\phi]$ that returns a single number that quantifies the mismatch in this mapping. The goal of an optimization algorithm is to find parameters $\phi$ that minimize the loss:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmin}} \Big[L[\phi]\Big]
$$
- The objective/loss function defines some surface over $\phi$, and we want to find the $\phi$ value at the lowest point on the surface. 

Most standard optimization algorithms are iterative; they initially model parameters heuristically and then adjust them repeatedly in such a way that the loss decreases.

- [[Gradient Descent]]
    - [[1D Gradient Descent]]
    - [[Multiple Dimension Gradient Descent]]
    - [[Stochastic Gradient Descent]]
    - [[Batch Gradient Descent]]
- [[Vanishing + Exploding Gradient Problem]]