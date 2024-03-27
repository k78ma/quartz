---
title: Expected Value
tags:
  - stats
date: 2024-03-26
aliases:
---
The weighted average of some function $f(x)$ under a probability distribution $p(x)$ is called the *expectation* or *expected value* of $f(x)$ and defined by $E(f)$.

For a discrete distribution, this is given by summing over all possible values of $x$ in the form
$$
E[f]=\sum_{x}p(x)f(x)
$$
where the average is weighted by the relative probabilities of the different values of $x$.

For continuous distributions, expectations are expressed in terms of integration with respect to the corresponding [[Probability Density Function]]:
$$
E[f] = \int p(x)f(x) \, dx 
$$

### Approximation from Sample
If we are given a finite number $N$ of points drawn from the probability distribution/density, then the expectation can be approximated as a finite sum over these points:
$$
E[f] \approx \frac{1}{N} \sum_{n=1}^{N}f(x_{n})
$$
This approximation becomes exact in the limit as $N\to \infty$.

### Multivariate Expectation
For functions of several variables, we can use a subscript to indicate which variable is being averaged over, so that for instance
$$
E_{x}[f(x,y)]
$$
denotes the average of the function $f(x,y)$ with respect to the distribution of $x$. Note that $E_{x}[f(x,y)]$ will be a function of $y$.

### Conditional Distribution
We can also consider a *conditional expectation* with respect to a conditional distribution, so that
$$
E_{x}[f|y] = \sum_{x}p(x|y) \,f(x)
$$
which is a function of $y$.

For continuous variables, this conditional expression becomes
$$
E_{x}[f|y] = \int p(x|y)f(x) \, dx 
$$
