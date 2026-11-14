---
title: Maximum Likelihood Criterion
tags:
  - dl
  - stats
date: 2025-06-18
aliases:
  - maximum likelihood criterion
---
Under the [[Conditional Probabilistic Perspective of Learning|conditional probabilistic perspective of learning]], the model now computes different distribution parameters $\theta_{i}=f[x_{i}, \phi]$ for each training input $x_{i}$. 

Each observed training output $y_{i}$ should have high probability under its corresponding distribution $Pr(y_{i} \,| \,\theta_{i})$. Hence, we choose the model parameters $\phi$ so that they maximized the combined probability across all $I$ training samples:
$$
\begin{align}
\hat{\phi} & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i}  | x_{i}) \right] \\[2ex]
     & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i} | \theta_{i}) \right] \\[2ex] 
     & =\underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(y_{i} | f[x_{i}, \phi]) \right]
\end{align}
$$
The combined probability term is the [[Likelihood Function|likelihood]] of the parameters. Thus, the above is known as the **maximum likelihood criterion**.

A more practical version of the maximum likelihood criterion is the [[Log-Likelihood Criterion]].

