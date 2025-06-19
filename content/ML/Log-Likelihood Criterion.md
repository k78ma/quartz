---
title: Log-Likelihood Criterion
tags:
  - dl
date: 2025-06-18
aliases:
  - log-likelihood criterion
  - log-likelihood
  - negative log-likelihood
---
The [[Maximum Likelihood Criterion|maximum likelihood criterion]] is not practical in terms of computation. Each term $Pr(y_{i}\, | \,f[x_{i}, \phi])$ can be small, so the product of many of these terms can be tiny. It may be difficult to represent this quantity with finite precision arithmetic.

As an alternative, we can maximize the logarithm of likelihood:
$$
\begin{align}
\hat{\phi} & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i} | f[x_{i}, \phi]) \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmax}} \left[ \log\left[  \prod_{i=1}^{I} Pr(y_{i} | f[x_{i}, \phi]) \right] \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmax}}\left[ \sum_{i=1}^{I} \log\Big[Pr(y_{i} | f[x_{i}, \phi])\Big] \right]
\end{align}
$$
This **log-likelihood criterion** is equivalent because the logarithm is a monotonically increasing function.
- If $z>z'$, then we also have $\log[z]>\log[z']$.
- Thus, we change the model parameters $\phi$ to improve the log-likelihood criterion, we also improve the original maximum likelihood criterion. The overall maximum of the criteria are in the same place, so the best model parameters $\hat{\phi}$ are the same in both cases. 

The advantage of log-likelihood is that it uses a sum of terms, not a product, so representation with finite precision isn't problematic.

### Minimizing negative log-likelihood
By convention, model fitting problems are framed in terms of minimizing a loss. To convert the maximum log-likelihood criterion to a minimization problem, we use the **negative log-likelihood criterion** instead:
$$
\begin{align}
\hat{\phi} & =\underset{\phi}{\operatorname{argmin}}\left[ -\sum_{i=1}^{I} \log\Big[Pr(y_{i}|f[x_{i}, \phi\Big] \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmin}}\Big[L[\phi]\Big]
\end{align}
$$
