---
title: Bessel's Correction
tags:
  - stats
date: 2024-03-31
aliases:
  - MLE bias
---
- Nice explanation here: https://www.visiondummy.com/2014/03/divide-variance-n-1/

In [[Gaussian Maximum Likehood Estimation|Gaussian maximum likelihood estimation from a sample]], we found that the maximum likelihood solutions for our parameters, $\mu_{\text{ML}}$ and $\sigma^{2}_{\text{ML}}$ are given as:
$$
\begin{align}
\mu_{\text{ML}}  & =\frac{1}{N}\sum_{n=1}^{N}x_{n}\\[2ex] 
\sigma^{2}_{\text{ML}} & =\frac{1}{N}\sum_{n=1}^{N}(x_{n}-\mu_{\text{ML}})^{2}
\end{align}
$$
These are functions of the data set values, $x_{1}, \dots, x_{n}$; we will suppose that each of these values has been generated independently from a Gaussian distribution whose true parameters are $\mu$ and $\sigma^{2}$ . 

Let's consider the [[Expected Value|expectations]] of $\mu_{\text{ML}}$ and $\sigma^{2}_{\text{ML}}$ with respect to these data set values. We get:
$$
\begin{align}
E[\mu_{\text{ML}}]  & = E\left[\frac{1}{N}\sum_{n=1}^{N}x_{n}\\[2ex] \right] = \mu \\[2ex] 
E[\sigma^{2}_{\text{ML}}]  & = E\left[\frac{1}{N}\sum_{n=1}^{N}(x_{n}-\mu)^{2}\right]= \left( \frac{N-1}{N} \right)\sigma^{2}
\end{align}
$$
What does this tell us?
- When averaged over datasets of a given size, the maximum likelihood solution for the mean will equal the true mean.
- However, the maximum likelihood estimate of the variance will underestimate the true variance by a factor $(N − 1)/N$.

This is an example of a *bias*, where the estimator of a quantity is systematically different from the true value.

This bias arises because the variance is measured relative to the maximum likelihood estimate of the mean, which is tuned to the data. If we had access to the true mean and used this to determine the variance of the estimator, we would have an unbiased result:
$$
\begin{align}
\hat{\sigma}^{2} & =\frac{1}{N}\sum_{n=1}^{N}(x_{n}-\mu)^{2} \\
E[\hat{\sigma}^{2}] & =\sigma^{2}
\end{align}
$$
Of course, we do not have access to the true mean but only to the observed data values. This leads to **Bessel's Correction**; for a Gaussian distribution, the following estimate for the variance parameter is unbiased:
$$
\begin{align}
\tilde{\sigma}^{2} & =\frac{N}{N-1}\sigma^{2}_{\text{ML}} \\[2ex]
	  & =\boxed{\frac{1}{N-1}\sum_{n=1}^{N}(x_{n}-\mu_{\text{ML}})^{2}}
\end{align}
$$

![[Bessel's Correction.png]]

Some notes:
- This bias becomes less significant as the number of data points $N$ increases
- In the case of the Gaussian, for anything other than small $N$, this bias will not prove to be a serious problem
- The issue of bias in maximum likelihood is closely related to the problem of [[Overfitting]].