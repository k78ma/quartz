---
title: Maximum Likelihood Estimation
tags:
  - stats
date: 2024-03-29
aliases:
---
To determine the parameters in a probability distribution using an observed data set, known as the *maximum likelihood*, is to find the parameters that maximize the [[likelihood function]], which usually take some form like this:
$$
p(\mathbb{x}|\mu, \sigma^{2}) = \prod_{n=1}^{N} \mathcal{N}(x_{n}|\mu, \sigma^{2})
$$
The most convenient way to do this is to take the log of the likelihood function; since logarithms are monotonically increasing, maximizing the log of a function is equivalent to maximizing the function itself, and lets us simplify the mathematical analysis. It's also easier to do programmatically because products of small numbers can cause underflow.

This $\ln p(x|\mu,\sigma^{2})$ expression can then be maximized with several methods:
- *Analytical solution:* Find partial derivatives with respect to $\mu$ and $\sigma^{2}$, then set to zero and solve. 
	- See [[Gaussian Maximum Likehood Estimation]] for an example of this method.
- *Learning solution:* Define an error function and minimize.