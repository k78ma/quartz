---
title: Probability Theory for State Estimation
tags:
  - mte544
date: 2025-11-01
aliases: probability theory for state estimation
---
![[Probability Theory for State Estimation-20251101151220291.png|700]]

![[Probability Theory for State Estimation-20251101151236268.png]]

![[Probability Theory for State Estimation-20251101151253316.png]]

![[Probability Theory for State Estimation-20251101151416600.png]]

![[Probability Theory for State Estimation-20251101151915748.png]]

![[Probability Theory for State Estimation-20251101152115169.png]]

- $X$ is the covariance matrix
- $m_{x}, m_{y}$ are the means

![[Probability Theory for State Estimation-20251101152331097.png]]

![[Probability Theory for State Estimation-20251101152350178.png]]

![[Probability Theory for State Estimation-20251101153208920.png]]

The conditional probability can be expressed in terms of the joint probability distribution $p(x, y)$ and the marginal probability $p(y)$:
- $p(x \mid y) = \frac{p(x, y)}{p(y)}$:To find the probability of $x$ given $y$, look at how often $(x,y)$ happens compared to how often $y$ happens overall
- $p(x, y)$ = joint probability that $X = x$ and $Y = y$ happen together.
- $p(y)$ = probability that $Y = y$, regardless of $X$.

The law of total probability says that the marginal probability of X, denoted $p(x)$, can be recovered from a joint distribution by summing or integrating out the other variable $Y$.


![[Probability Theory for State Estimation-20251101153221948.png]]

![[Probability Theory for State Estimation-20251101153235126.png]]


![[MTE 544 Notes loc ex 2.pdf]]

![[MTE 544 Notes loc ex 3.pdf]]