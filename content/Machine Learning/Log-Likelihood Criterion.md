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
Why do we maximize log-likelihood instead of likelihood directly?
?
- The [[Maximum Likelihood Criterion|maximum likelihood criterion]] is not practical in terms of computation because we take the product of each $Pr(y_{i}\, | \,f[x_{i}, \phi])$ term. These terms can be small, so the product of many of these terms can be tiny. It may be difficult to represent this quantity with finite precision arithmetic.
- Log-likelihood lets us convert it to a sum instead of a product, avoiding this problem.
<!--SR:!fsrs,2026-11-28T06:38:07.165Z,8,8.2956,1,2,1,0,0,2026-11-20T06:38:07.165Z-->
+++

Maximum log-likelihood
?
We maximize the logarithm of likelihood:
$$
\begin{align}
\hat{\phi} & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i} | f[x_{i}, \phi]) \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmax}} \left[ \log\left[  \prod_{i=1}^{I} Pr(y_{i} | f[x_{i}, \phi]) \right] \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmax}}\left[ \sum_{i=1}^{I} \log\Big[Pr(y_{i} | f[x_{i}, \phi])\Big] \right]
\end{align}
$$
<!--SR:!fsrs,2026-11-28T06:37:35.971Z,8,8.2956,1,2,1,0,0,2026-11-20T06:37:35.971Z-->
+++
 
Why is maximizing the log-likelihood equivalent to maximizing the likelihood?
?
This log-likelihood criterion is equivalent because the logarithm is a monotonically increasing function.
- If $z>z'$, then we also have $\log[z]>\log[z']$.

Thus, we change the model parameters $\phi$ to improve the log-likelihood criterion, we also improve the original maximum likelihood criterion. The overall maximum of the criteria are in the same place, so the best model parameters $\hat{\phi}$ are the same in both cases.
<!--SR:!fsrs,2026-11-28T06:41:00.432Z,8,8.2956,1,2,1,0,0,2026-11-20T06:41:00.432Z--> 
+++



### Minimizing negative log-likelihood
By convention, model fitting problems are framed in terms of minimizing a loss. To convert the maximum log-likelihood criterion to a minimization problem, we use the **negative log-likelihood criterion** instead:
$$
\begin{align}
\hat{\phi} & =\underset{\phi}{\operatorname{argmin}}\left[ -\sum_{i=1}^{I} \log\Big[Pr(y_{i}|f[x_{i}, \phi])\Big] \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmin}}\Big[L[\phi]\Big]
\end{align}
$$



