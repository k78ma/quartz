---
title: SYDE 572 A3
tags:
  - ml
date: 2024-02-27
aliases:
---
## Question 2

### Part 1
We assume that the data points $\{ x_{1}, \dots, x_{n} \}$ are IID according to a Gaussian distribution with unknown mean $\mu$ and variance $\sigma^{2}$.

The probability density function of a Gaussian distribution is given by:
$$
p(x_{i}\;|\;\mu, \sigma^{2}) = \frac{1}{\sqrt{ 2\pi \sigma^{2} }}\exp\left( -\frac{(x_{i}-\mu)^{2}}{2\sigma^{2}} \right)
$$
Given that the data points are IID, the likelihood of observing the dataset $\{ x_{1}, \dots, x_{n} \}$ is the product of the individual pdfs:
$$
\begin{align}
L(\mu, \sigma^{2}) & =\prod_{i-1}^{N}p(x_{i} \; | \; \mu, \sigma^{2}) \\[2ex]
	 & =\prod_{i-1}^{N}\frac{1}{\sqrt{ 2\pi \sigma^{2} }}\exp\left( -\frac{(x_{i}-\mu)^{2}}{2\sigma^{2}} \right)
\end{align}
$$
The log-likelihood function simplifies this into a sum:
$$
\begin{align}
\log L(\mu, \sigma^{2})  & = \sum_{i-1}^{N}\log\left(\frac{1}{\sqrt{ 2\pi \sigma^{2} }}\exp\left( -\frac{(x_{i}-\mu)^{2}}{2\sigma^{2}} \right)\right) \\[2ex]
	 & = \sum_{i-1}^{N}\left( -\frac{1}{2}\log(2\pi \sigma^{2})-\frac{(x_{i}-\mu)^{2}}{2\sigma^{2}} \right) \\[2ex] 
	 & = -\frac{N}{2}\log(2\pi \sigma^{2})-\frac{1}{2\sigma^{2}}\sum_{i=1}^{N}(x_{i}-\mu)^{2}
\end{align}
$$
To find the MLE of $\sigma^{2}$, we differentiate the log-likelihood with respect to $\sigma^{2}$ and set the derivative equal to zero. Note that the MLE of $\mu$, $\hat{\mu}$​, is the sample mean of the data, $\bar{x}$, which simplifies the expression.

Differentiating $\log L(\mu,\sigma^{2})$ with respect to $\sigma^{2}$:
$$
\frac{ \partial \log L }{ \partial \sigma^{2} } =-\frac{N}{2\sigma^{2}}+\frac{1}{2\sigma^{4}} \sum_{i=1}^{N} (x_{i}-\mu)^{2}
$$
Setting this equal to zero and solving:
$$
-\frac{N}{2\sigma^{2}}+\frac{1}{2\sigma^{4}} \sum_{i=1}^{N}(x_{i}-\hat{\mu})^{2}=0
$$
Solving for $\sigma^{2}$, we find the MLE of variance:
$$
\boxed{
\hat{\sigma}^{2} = \frac{1}{N}(x_{i}-\hat{\mu})^{2}
}
$$
### Part 2
To derive the estimator bias $b$ for the MLE of $\sigma^{2}$, we need to compare the expected value of the MLE of variance, $\hat{\sigma}^{2}$, with the true variance, $\sigma^{2}$. 

The expected value of the MLE of variance:
$$
E[\hat{\sigma}^{2}]=E\left[ \frac{1}{N} \sum_{i=1}^{N}(x_{i}-\hat{\mu})^{2} \right]
$$
Since $\hat{\mu}^{2}$ is the sample mean, we can rewrite the square difference as:
$$
E[\hat{\sigma}^{2}] = E\left[ \frac{1}{N} \sum_{i=1}^{N} \left(x_{i}-\frac{1}{N}\sum_{j=1}^{N}x_{j} \right)^{2} \right]
$$
This can be simplified to:
$$
E[\hat{\sigma}^{2}] = \frac{1}{N }E\left[ \sum_{i=1}^{N}(x_{i}-\mu)^{2}-\frac{1}{N}\left( \sum_{i=1}^{N} x_{i}-N\mu\right)^{2} \right]
$$
Further simplification leads to:
$$
E[\hat{\sigma}^{2}]=\sigma^{2}-\frac{\sigma^{2}}{N}
$$
The simplification arises because the first term inside the expectation is an unbiased estimator of $\sigma^{2}$ multiplied by $N$, and the second term corrects for the estimation of the mean, subtracting $\frac{1}{N}$ times the variance.

The bias of the MLE of the variance is then the difference between its expected value and the true variance:
$$
\begin{align}
b(\hat{\sigma}^{2}) & =E[\hat{\sigma}^{2}]-\sigma^{2} \\[2ex]
	 & = \left( \sigma^{2}-\frac{\sigma^{2}}{N} \right) - \sigma^{2}\\[2ex] 
	 & = \boxed{-\frac{\sigma^{2}}{N}}
\end{align}
$$
### Part 3
This is similar to part 1.

Write likelihood function function as product of individual probabilities:
$$
L(\lambda)=\prod_{i=1}^{N}p(x_{i}) = \prod_{i=1}^{N}\lambda e^{-\lambda x_{i}}
$$
Write log-likelihood to turn the above into a sum:
$$
\begin{align}
\log L(\lambda)&=\log\left( \prod_{i=1}^{N}\lambda e^{-\lambda x_{i}} \right) \\[2ex]
	 & = \sum_{i=1}^{N}\log(\lambda)-\lambda(x_{i}) \\[2ex]
	 & = N\log(\lambda)-\lambda \sum_{i=1}^{N} x_{i}
\end{align}
$$
To find the MLE, differentiate log-likelihood with respect to $\lambda$ and set derivative to zero:
$$
\frac{d}{d\lambda}\log L(\lambda)=\frac{N}{\lambda}-\sum_{i=1}^{N}x_{i}=0
$$
Solving this equation this for $\lambda$ gives:
$$
\begin{align}
\frac{N}{\lambda}=\sum_{i=1}^{N}x_{i}\\[2ex] 
\lambda= \frac{N}{\sum_{i=1}^{N}x_{i}}
\end{align}
$$
Therefore the MLE of rate parameter $\lambda$ is:
$$
\boxed{
\hat{\lambda}= \frac{N}{\sum_{i=1}^{N}x_{i}}
}
$$