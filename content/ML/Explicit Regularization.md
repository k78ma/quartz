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
