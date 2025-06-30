---
title: Cross-Entropy Loss
tags:
  - dl
date: 2025-06-29
aliases:
  - cross-entropy loss
---
Cross-entropy loss is based on the idea of finding parameters $\theta$ that minimize the distance between the empirical distribution $q(y)$ of the observed data $y$ and a model distribution $Pr(y|\theta)$.

![[Cross-Entropy Loss-20250629220258172.png]]

The distance between two probability distributions $q(z)$ and $p(z)$ can be evaluated using the [[Kullback-Leibler Divergence]]:
$$
D_{KL}[q || p] = \int_{-\infty}^{\infty}  q(z) \log[q(z)]\, dz - \int_{-\infty}^{\infty} q(z) \log[p(z)] \, dz  
$$
Now consider that we observe an empirical distribution at points $\{ y_{i} \}^{I}_{i=1}$. We can describe this as a weighted sum of point masses:
$$
q(y)=\frac{1}{I} \sum_{i=1}^{I} \delta [y-y_{i}]
$$
where $\delta[\bullet]$ is the Dirac delta function. We want to minimize the KL divergence between the model distribution $Pr(y|\theta)$ and this empirical distribution:
$$
\begin{align}
\hat{\theta}  & = \underset{\theta}{\operatorname{argmin}}\left[  \int_{-\infty}^{\infty} q(y) \log[q(y)] \, dy  - \int_{-\infty}^{\infty} q(y) \log[Pr(y|\theta)] \, dy   \right] \\[2ex] 
     & = \underset{\theta}{\operatorname{argmin}} \left[  - \int_{-\infty}^{\infty} q(y) \log[Pr(y|\theta)] \, dy  \right]
\end{align}
$$
The first term disappears as it has no dependence on $\theta$. The second term is known as the **cross-entropy**. It can be interpreted as the amount of uncertainty that remains in one distribution after taking into account what we already know from the other.

Now, we substitute the definition of the empirical distribution $q(y)$:
$$
\begin{align}
\hat{\theta} & =\underset{\theta}{\operatorname{argmin}}\left[  -\int_{-\infty}^{\infty} \left( \frac{1}{I} \sum_{i=1}^{I} \delta[y-y_{i}]  \right)  \log[Pr(y|\theta)] \, dy   \right] \\[2ex] 
     & = \underset{\theta}{\operatorname{argmin}}\left[  - \frac{1}{I} \sum_{i=1}^{I} \log[Pr(y_{i}|\theta)] \right] \\[2ex] 
     & = \underset{\theta}{\operatorname{argmin}} \left[  -\sum_{i=1}^{I} \log[Pr(y_{i}|\theta)] \right]
\end{align}
$$
The product of the two terms in the first line corresponds to pointwise multiplying the point masses (5.12a) with the logarithm of the distribution (5.12b). We are left with a finite set of weighted probability masses centered on the data points. In the last line, we eliminate the constant scaling factor $1 /I$ as this doesn't affect the position of the minimum.

In machine learning, the distribution parameters are computed by the model $\mathbf{f}[\mathbf{x}_{i}, \phi]$, so we have
$$
\hat{\phi}= \underset{\phi}{\operatorname{argmin}} \left[  - \sum_{i=1}^{I} \log \Big[ Pr (y_{i}|\mathbf{f}[\mathbf{x}_{i}, \phi]) \Big] \right]
$$
This is exactly equivalent to the [[Log-Likelihood Criterion|negative log-likelihood]] criterion. Cross-entropy and negative log-likelihood are equivalent!