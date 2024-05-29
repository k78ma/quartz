---
title: Sum and Product Rules of Probability
tags:
  - stats
date: 2024-03-22
aliases:
  - product rule
  - sum rule
---
## Rules
Sum rule:
$$
p(X)=\sum_{Y} p(X,Y)
$$
Product rule:
$$
p(X,Y)=p(Y|X) \; p(X)
$$
## Derivation
Let us have random variables $X$ and $Y$. 
- $X$ can take any of the values $x_{i}$ where $i = 1, \dots, L$
- $Y$ can take any of the values $y_{j}$ where $j = 1, \dots, M$

We also define:
- $N$ is the number of trials
- $n_{ij}$ is the number of trials in which $X = x_{i}$ and $Y = y_{j}$ for $N$ trials in which we sample both of the variables $X$ and $Y$. 
- $c_{i}$ is the number of trials in which $X$ takes the value $x_{i}$, irrespective of the value that $Y$ takes.
- $r_{j}$ is the number of trials in which $Y$ takes the value $y_{j}$, irrespective of the value that $X$ takes.

![[Sum and Product Rules of Probability.png]]

The *joint probability* of $X=x_{i}$ and $Y=y_{j}$ is written as 
$$
p(X=x_{i}, Y=y_{j}) = \frac{n_{ij}}{N}
$$
The probability that $X$ takes the value $x_{i}$ irrespective of the value of $Y$ is written as $p(X = x_{i})$ and is given by the fraction of the total number of points that fall in column $i$, so that:
$$
p(X=x_{i}) = \frac{c_{i}}{N}
$$
Because the number of instances in column $i$, denoted by $c_{i}$, is just the sum of the cells in the column, we have $c_{i} = \sum_{j}n_{ij}$. This gives us the sum rule of probability:

>[!theorem] Sum Rule of Probability
>$$
>p(X=x_{i})=\sum_{i=1}^{M}p(X=x_{i}, Y=y_{j})
>$$
>where $M$ is the number of values $Y$ can take on, such that $Y = y_{j}$ for $j = 1,\dots,m$.

Note that $p(X = x_{i})$ is sometimes called the *marginal probability* and is obtained by marginalizing, or summing out, the other variables (in this case $Y$).

What if we want to consider cases where $Y=y_{j}$ given that $X=x_{i}$? This is *conditional probability*, which we can obtain by finding the fraction of points in column $i$ that fall in cell $i,j$:
$$
p(Y=y_{j}|X=x_{i})=\frac{n_{ij}}{c_{i}}
$$
Using our equations from before, we can then write out the joint probability:
$$
\begin{align}
p(X=x_{i}, Y=y_{j})  & = \frac{n_{ij}}{N} \\[2ex]
	 & = \frac{n_{ij}}{N} \cdot  \frac{c_{i}}{N} \\[2ex] 
\end{align}
$$
This gives us the product rule of probability:

>[!theorem] Product Rule of Probability
>$$
>p(X=x_{i}, Y=y_{j}) = p(Y=y_{j}|X=x_{i}) \;p(X=x_{i})
>$$
>
