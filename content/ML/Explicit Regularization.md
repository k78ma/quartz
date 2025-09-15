---
title: Explicit Regularization
tags:
  - dl
date: 2025-09-14
aliases: explicit regularization
---
Consider fitting a model $\mathbf{f}[\mathbf{x}, \phi]$ with parameters $\phi$ using a training set $\{ \mathbf{x}_{i}, \mathbf{y}_{i} \}$ of input/output pairs. We seek the parameters $\hat{\phi}$ that minimize the loss function $L[\phi]$:
$$
\begin{align}
\hat{\phi}  & = \underset{\phi}{\operatorname{argmin}}[L[\phi]] \\
     & = \underset{\phi}{\operatorname{argmin}} \left[  \sum_{i=1}^{I}\ell_{i}[\mathbf{x}_{i}, \mathbf{y}_{i}] \right]
\end{align}
$$
where the individual terms $\ell_{i}[\mathbf{x}_{i}, \mathbf{y}_{i}]$ measure the mismatch between the network predictions $\mathbf{f}[\mathbf{x}_{i}, \phi]$ and output targets $\mathbf{y}_{i}$ for each training pair. To bias this minimization toward certain solutions:
$$
\hat{\phi} = \underset{\phi}{\operatorname{argmin}} \left[ \sum_{i=1}^{I} \ell_{i}[\mathbf{x}_{i}, \mathbf{y}_{i}] +\lambda\cdot g[\phi]\right]
$$
where:
- $g[\phi]$ is a function that returns a scalar which takes larger values when the parameters are less preferred.
- $\lambda$ is a positive scalar that controls the relative contribution of the original loss function and the regularization term.

The minima of the regularized loss function usually differ from those in the original, so the procedure converges to different parameter values.

![[Explicit Regularization-20250914215621004.png|584]]


## Probabilistic interpretation
Regularization can be viewed from a probabilistic perspective. We've seen that loss functions are constructed from the [[Maximum Likelihood Criterion|maximum likelihood criterion]]:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(\mathbf{y}_{i}\, | \,\mathbf{x}_{i},\phi)\right]
$$
The regularization term can be considered a **prior** $Pr(\phi)$ that represents knowledge about the parameters before we observe the data. Now, we have a *maximum a posteriori* or *MAP* criterion:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(\mathbf{y}_{i}\, | \,\mathbf{x}_{i},\phi)Pr(\phi)\right]
$$
Moving back to the [[Log-Likelihood Criterion|negative log-likelihood]] loss function (see [[Loss Function Recipe|loss function recipe]]) by taking the log and multiplying by $-1$, we see that
$$
\lambda \cdot g[\phi] = -\log[Pr(\phi)]
$$
