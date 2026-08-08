---
title: Kullback-Leibler Divergence
tags:
  - stats
date: 2024-04-09
aliases:
  - relative entropy
  - KL divergence
---
- [Six (and a half) intuitions for KL divergence](https://www.perfectlynormal.co.uk/blog-kl-divergence)

Kullback-Leibler Divergence, or relative entropy, measures the dissimilarity between two distributions.

Consider some unknown distribution $p(\mathbf{x})$, approximated by a distribution $q(\mathbf{x})$. 

If we use $q(\mathbf{x})$ to construct a coding scheme for transmitting values of $\mathbf{x}$ to a receiver, then the average additional amount of information (in nats) required to specify the the value of $\mathbf{x}$ as a result of using $q(\mathbf{x})$ instead of the true distribution $p(\mathbf{x})$ is given by:
$$
\begin{align}
\text{KL}(p||q)  & = -\int p(\mathbf{x})\ln q(\mathbf{x}) \, d\mathbf{x} -\left( -\int p(\mathbf{x})\ln p(\mathbf{x}) \, d\mathbf{x}  \right) \\[2ex]
	 & = -\int p(\mathbf{x})\ln \left [  \frac{q(\mathbf{x})}{p(\mathbf{x})}  \right ] \, d\mathbf{x}  \\[2ex]
&= \int p(\mathbf{x}) \ln \left [  \frac{p(x)}{q(x)}  \right ] \, dx 
\end{align}
$$
This is known as the *relative entropy* or *Kullback-Leibler divergence* between the distributions $p(\mathbf{x})$ and $q(\mathbf{x})$.

The KL divergence is not a symmetrical quantity; that is, $\text{KL}(p||q)\not\equiv\text{KL}(q||p)$.

We can apply the [[Jensen’s Inequality#Continuous Form|continuous form of Jensen’s Inequality]] to KL divergence to get
$$
\text{KL}(p||q) = -\int p(\mathbf{x})\ln \left\{  \frac{q(\mathbf{x})}{p(\mathbf{x})}  \right\} \, d\mathbf{x} \geq-\ln \int q(\mathbf{x}) \, d\mathbf{x} =0
$$
- Here, $-\ln x$ as a convex function so Jensen's inequality applies.
- We're also using the normalization condition $\int q(\mathbf{x}) \, d\mathbf{x}=1$. 

Since $-\ln x$ is actually strictly convex, the equality will hold if and only if $q(\mathbf{x})=p(\mathbf{x})$ for all $\mathbf{x}$. Thus, we can interpret the KL divergence as a measure of the dissimilarity between $p(\mathbf{x})$ and $q(\mathbf{x})$.

## KL divergence between normal distributions
Suppose we have two multivariate normal distributions with means $\mu_{1}$ and $\mu_{2}$ and covariance $\Sigma_{1}$ and $\Sigma_{2}$. The KL divergence can be computed as:
$$
D_{KL} = \frac{1}{2}\left( \log\left[ \frac{\left| \Sigma_{2} \right| }{\left| \Sigma_{1} \right| } \right] - D+\text{tr}\big[\Sigma_{2}^{-1}\Sigma_{1}\big] + (\mu_{2}-\mu_{1})^{T}\Sigma_{2}^{-1}(\mu_{2}-\mu_{1}) \right)
$$