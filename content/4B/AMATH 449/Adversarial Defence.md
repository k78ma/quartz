---
title: Adversarial Defence
tags:
  - amath449
date: 2026-04-04
aliases: adversarial defence
---
How can we train our models so that they are harder to break with [[Adversarial Attacks|adversarial attacks]]?

## Adversarial Training
A basic idea is to adversarial samples to our training set and re-train. That helps somewhat, especially for samples that we added.

![[Adversarial Defence-1775326094401.webp|496]]


What if we built this process into our training? We can incorporate a mini adversarial attack into every gradient step while training.

## TRADES
'TRadeoff-inspired Adversarial DEfense via Surrogate loss minimization" uses an idea like this.

Consider:
- Model $f\, : \,x \to \mathbb{R}$
- Dataset $(X,T)$ with inputs $X \subset \mathbb{X}$ and targets $T\in \{ -1,1 \}$.

Then, $\text{sign}(f(x))$ is the predicted class of $x$. The classification is correct if $f(X)T>0$.

The classification loss can be written as:
$$
\underbrace{ \mathcal{R}_{\text{nat}}(f) }_{ \text{"Natural loss"} } = \mathbb{E}_{(X,T)} \mathbb{1}\{ f(X)T \leq 0 \}
$$
where we are using the indicator function $\mathbb{1}$ to count how many times we get a wrong class.

![[Adversarial Defence-1775326548569.webp|379]]


If we want to consider how our model will perform under adversarial attack, we consider the robust loss
$$
\underbrace{ \mathcal{R}_{\text{rob}}(f) }_{ \text{"Robust loss"} } = \mathbb{E}_{(X,T)} \mathbb{1}\{ \exists\, x' \in  \mathbb{B}(x,\epsilon) \, | \, f(x')T \leq 0\}
$$
This has some built-in pessimism, that looks for the worst-case in the neighborhood of $X$.

![[Adversarial Defence-1775326559731.webp|303]]


Instead of counting misclassified points directly, to make it differentiable we approximate it use a surrogate loss function, $g$:

![[Adversarial Defence-1775328415767.webp]]

Then, the natural loss becomes:
$$
\underset{f}{\operatorname{min}} \mathbb{E}_{(X,T)}[g(f(x)T)]
$$
We can train a robust model with the combined loss
$$
\underset{f}{\operatorname{min}} \mathbb{E}_{(X,T)} \left[g(f(x)T) + \underset{X' \in  \mathbb{B}(x,\epsilon)}{\operatorname{max}}g(f(x)f(x'))\right]
$$
- The first term ensures that each $x$ is correctly classified
- Adds a penalty for models $f$ that put $x$ within $\epsilon$ of the decision boundary

Implementation:
- For each gradient descent step
    - Run several steps of gradient ascent to find $x'$
    - Evaluate the joint loss $g(f(x)T)+\beta g(f(x)f(x'))$, where $\beta$ is a regularization parameter
    - Use the gradient of the joint loss for each gradient step

![[Adversarial Defence-1775328895550.webp]]
