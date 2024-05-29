---
title: Density Estimation with KL Divergence
tags: 
date: 2024-04-12
aliases:
---
[[Kullback-Leibler Divergence]] shows us the relationship between data compression and density estimation. 
- Density estimation is the problem of modeling an unknown probability distribution.

The most efficient compression is achieved when we know the true distribution. If we use a distribution that is different from the true one, then we necessarily have a less efficient encoding, and on average the additional information that must be transmitted (at least) equal to the KL divergence between the two distributions.

Suppose data is being generated from an unknown distribution $p(\mathbf{x})$ that we want to model. We can try to approximate this distribution using some parametric model $q(\mathbf{x}|\theta)$, governed by a set of adjustable parameters $\theta$. 

One way to determine $\theta$ would be to minimize the KL divergence between $p(x)$ and $q(\mathbf{x}|\theta)$ with respect to $\theta$. We cannot do this directly because we do not know $p(\mathbf{x})$. However, suppose that we have observed a finite set of training points $\mathbf{x}_{n}$ for $n=1, \dots, N$, drawn from $p(\mathbf{x})$. Then, the expectation with respect to $p(\mathbf{x})$ can be approximated by a finite sum over these points, such that:
$$
\text{KL}(p||q) \approx \frac{1}{N} \sum_{n=1}^{N}\{ -\ln q(\mathbf{x_{n}}|\theta) +\ln p(\mathbf{x}_{n}) \}
$$
- The second term on the right-hand side is independent of $\theta$
- The first term is the [[Negative log-likelihood]] for $\theta$ under the distribution $q(\mathbf{x}|\theta)$ evaluated using the training set.
- Therefore, minimizing the KL divergence is equivalent to maximizing the log likelihood function.