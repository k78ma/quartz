---
title: Statistical Estimation
tags:
  - mte544
date: 2025-11-01
aliases: statistical estimation
---
We have a probabilistic experiment with two random variables $X$ and $Y$ with marginal densities $p_{X}(x), p_{Y}(y)$. The experiment is performed, such that $x$ and $y$ are realized. However, we are only able to observe $y$. Our goal is then to estimate the unknown sample value of $x$ and $X$ from the observation $y$. In particular, we want to choose the best estimate of $x$, $\hat{X}(y)$, given $y$ and $p_{X|Y}(x|y)$.
- In this setting $p_{X}(s)$ is called the *a priori* density of $X$ and $p_{X|Y}(x|y)$ is called the *a posteriori* density.


> [!example] Example: Estimating Noisy Binary Signal
> ![[MTE 544 Notes loc ex 4.pdf]]

## MMSE Estimation
Given an observation $y=y_{1}$, find the best estimate of $x$, i.e. $\hat{x}$ such that we minimize
$$
J = E [|| x-\hat{x} ||^{2} \, | \,y=y_{1}]
$$
This is called the minimum mean square error (MMSE) estimator problem.

The key idea is that to minimize the expected square error, the best choice of $\hat{x}$ is the conditional mean of $x$ given the observation:
$$
\hat{x} = \mathbb{E}[x\, | \,y=y_{1}]
$$
- The conditional mean is the best estimate in the sense that it makes the variance of the estimation error as small as possible.
### Derivation
Let's choose some arbitrary estimator $z$ (any vector or value). Then:
$$
\begin{align}
J  & = \mathbb{E}\big[\|x - z\|^2 \mid y=y_{1\big]}\\[2ex] 
 & = \mathbb{E}[x^T x \mid y=y_1] - 2z^T \mathbb{E}[x\mid y=y_1] + z^T z.
\end{align}
$$
Letting $m_{x|y_1} = \mathbb{E}[x\mid y=y_1]$, we have
$$
\begin{align}
J  & = \mathbb{E}[x^T x \mid y=y_1] - 2z^T m_{x|y_1} + z^{T z}\\[2ex] 
 &  = \mathbb{E}[x^T x\mid y=y_1] + \|z - m_{x|y_1}\|^2 - \|m_{x|y_1}\|^2.
\end{align}
$$
The only term that depends on $z$ is $\|z - m_{x|y_1}\|^2$. Thus, the term is minimized when $z = m_{x|y_1} = \mathbb{E}[x\mid y=y_1]$. So the optimal estimator is just
$$
\hat{x} = \mathbb{E}[x\, | \,y=y_{1}]
$$

> [!example] Example: MMSE Estimation
> ![[MTE 544 Notes loc ex5.pdf]]


### Conditional Mean for Gaussian
For $x \sim \mathcal{N}(\mu_{x}, X_{xx})$ and $y\sim \mathcal{N}(\mu_{y}, X_{yy})$, the conditional pdf $p(x\, | \,y)$ is also Gaussian with its mean given by
$$
\mathbb{E}[x\, | \,y] = \mu_{x} + X_{xy}X_{yy}^{-1}(y-\mu_{y})
$$


> [!example] MMSE Estimation for Gaussian
> ![[MTE 544 Notes loc ex 6.pdf]]


