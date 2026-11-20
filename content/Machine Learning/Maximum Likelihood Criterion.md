---
title: Maximum Likelihood Criterion
tags:
  - dl
  - stats
date: 2025-06-18
aliases:
  - maximum likelihood criterion
---
Under the [[Conditional Probabilistic Perspective of Learning|conditional probabilistic perspective of learning]], the model now computes different distribution parameters $\theta_{i}=f[x_{i}, \phi]$ for each training input $x_{i}$. What is the maximum likelihood criterion?
?
The maximum likelihood criterion selects model parameters $\phi$ that maximize the probability of each output given its input.

Each observed training output $y_{i}$ should have high probability under its corresponding distribution $Pr(y_{i} \,| \,\theta_{i})$. Hence, we choose the model parameters $\phi$ so that they maximized the combined probability across all $I$ training samples:
$$
\begin{align}
\hat{\phi} & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i}  | x_{i}) \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i} | \theta_{i}) \right] \\[2ex]
     & =\underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i} | f[x_{i}, \phi]) \right]
\end{align}
$$
The combined probability term is the [[Likelihood Function|likelihood]] of the parameters. Thus, the above is known as the **maximum likelihood criterion**.
<!--SR:!fsrs,2026-11-28T01:51:48.239Z,8,8.2956,1,2,1,0,0,2026-11-20T01:51:48.239Z-->
+++

A more practical version of the maximum likelihood criterion is the [[Log-Likelihood Criterion]].

