---
title: Gaussian Maximum Likehood Estimation
tags:
  - stats
date: 2024-03-30
aliases:
  - Gaussian MLE
---
Recall that a [[Gaussian Distribution|Gaussian]] is expressed as 
$$
\mathcal{N}(x|\mu, \sigma^{2})= \frac{1}{(2\pi \sigma^{2})^{1/2}}\exp \left\{  -\frac{1}{2\sigma^{2}}(x-\mu)^{2}  \right\}
$$
The log of the likelihood function can be written as
$$
\begin{align}
\ln p(\mathbb{x}|\mu, \sigma^{2})  & = \ln\left(\prod_{i=1}^{N} \mathcal{N}(x_{n}|\mu, \sigma^{2})\right) \\[2ex]
	 & = -\frac{1}{2\sigma^{2}} \sum_{n=1}^{N}(x_{n}-\mu)^{2}-\frac{N}{2}\ln \sigma^{2}-\frac{N}{2}\ln(2\pi)
\end{align}
$$
This can then be maximized by setting partial derivatives with respect to $\mu$ and $\sigma^{2}$ to zero and solving.

For $\mu$:
$$
\begin{align}
\frac{ \partial }{ \partial \mu } \ln(p|x, \mu, \sigma^{2})  & = \frac{ \partial  }{ \partial \mu } \left(-\frac{1}{2\sigma^{2}} \sum_{n=1}^{N}(x_{n}-\mu)^{2}\right) \\[2ex]
	 & =\frac{1}{\sigma^{2}}\sum_{n=1}^{N}(x_{n}-\mu)
\end{align}
$$
Setting to 0 and solving:
$$
\begin{align}
\sum_{n=1}^{N}x_{n}-N\mu  & = 0 \\[2ex] 
\boxed{\mu_{\text{ML}} =\frac{1}{N}\sum_{n=1}^{N}x_{n}}
\end{align}
$$
which is the *sample mean* – the mean of the observed values.

For $\sigma^{2}$:
$$
\frac{\partial}{\partial \sigma^2} \ln p(\mathbb{x}|\mu, \sigma^{2}) = \frac{\partial}{\partial \sigma^2} \left(-\frac{1}{2\sigma^{2}} \sum_{n=1}^{N}(x_{n}-\mu)^{2} - \frac{N}{2}\ln \sigma^{2}\right) 
$$
This simplifies to:
$$
-\frac{N}{2\sigma^{2}}+\frac{1}{2(\sigma^{2})^{2}}\sum_{n=1}^{N}(x_{n}-\mu)^{2}
$$
Setting to zero and solving for $\sigma^{2}$:
$$
\boxed{\sigma^{2}_{\text{ML}}=\frac{1}{N}\sum_{n=1}^{N}(x_{n}-\mu_{ML})^{2}}
$$
This is the *sample variance* measured with respect to the sample mean $\mu$.