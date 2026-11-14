---
title: Implicit Regularization
tags:
  - dl
date: 2025-10-16
aliases: implicit regularization
---
Neither [[Gradient Descent|gradient descent]] nor [[Stochastic Gradient Descent|stochastic gradient descent]] moves neutrally to the minimum of the loss function; each exhibits a preference for some solutions over others. This is known as implicit regularization.

## Implicit regularization in gradient descent
Consider a continuous version of gradient descent where the step size is infinitesimal. The change in parameters $\phi$ would be governed by the differential equation:
$$
\frac{d\phi}{dt}=-\frac{ \partial L }{ \partial \phi } 
$$
Gradient descent approximates this process with a series of discrete steps of size $\alpha$:
$$
\phi_{t+1} = \phi_{t} - \alpha \frac{ \partial L[\phi_{t}] }{ \partial \phi } 
$$
This discretization causes a deviation from the continuous path.

![[Implicit Regularization-20251020004215054.png]]

This deviation can be understood by deriving a modified loss term $\tilde{L}$ for the continuous case that arrives at the same places as the discretized version on the original loss $L$. It can be shown that this modified loss is
$$
\tilde{L}_{GD}[\phi]=L[\phi]+\frac{\alpha}{4}\Bigg|\Bigg| \frac{ \partial L }{ \partial \phi }  \Bigg|\Bigg|^{2}
$$
In other words, the discrete trajectory is repelled from places where the gradient norm is large (the surface is steep). This doesn't change the position of the minima, where the gradients are zero anyway. However, it changes the effective loss function elsewhere and modifies the optimization trajectory, which potentially converges to a different minimum. Implicit regularization due to gradient descent may be responsible for the observation that full batch gradient descent generalizes better with larger step sizes (see fig 9.5a).

## Implicit regularization in SGD
A similar analysis can be applied to [[Stochastic Gradient Descent|SGD]]; now we seek a modified loss function such that the continuous version reaches the same places as the average of the possible random SGD updates. This can be shown to be:
$$
\begin{align}
\tilde{L}_{SGD}[\phi]  & = \hat{L}_{GD}[\phi] + \frac{\alpha}{4B} \sum_{b=1}^{B} \Bigg|\Bigg| \frac{ \partial L_{b} }{ \partial \phi } - \frac{ \partial L }{ \partial \phi }  \Bigg|\Bigg|^{2} \\[2ex] 
     & = L[\phi] + \frac{\alpha}{4}\Bigg|\Bigg| \frac{ \partial L }{ \partial \phi }  \Bigg|\Bigg|^{2}+ \frac{\alpha}{4B} \sum_{b=1}^{B} \Bigg|\Bigg| \frac{ \partial L_{b} }{ \partial \phi }-\frac{ \partial L }{ \partial \phi }   \Bigg|\Bigg|^{2}
\end{align}
$$
Here, $L_{b}$ is the loss for the $b$-th of the $B$ batches in an epoch. Specifically, $L$ now represents the means of the $I$ individual losses in the full dataset, while $L_{b}$ represents the mean of the $| \mathcal{B} |$ individual losses in a batch:
$$
\begin{align}
L = \frac{1}{I}\sum_{i=1}^{I}\ell_{i}[\mathbf{x}_{i},y_{i}] \quad \text{and}\quad L_{b}=\frac{1}{| \mathcal{B} |} \sum_{i\in  \mathcal{B}_{b}} \ell_{i}[\mathbf{x}_{i}, y_{i}]
\end{align}
$$
Our equation above for $\tilde{L}_{SGD}[\phi]$ revealed an extra regularization term corresponding to the variance of the gradients of the batch losses $L_{b}$. In other words, SGD implicitly favors places where the gradients are stable (all the batches agree on the slope). This modifies the trajectory of the optimization process but does not necessarily change the position of the global minimum; if the model is over-parameterized, then it may fit all the training data exactly, so each of these gradient terms will be zero at the global minimum.

![[Implicit Regularization-20251020005629717.png]]


SGD generalizes better than gradient descent, and smaller batch sizes generally perform better than larger ones. One possible explanation is that the inherent randomness allows the algorithm to reached different parts of the loss function. However, it's also possible that some or all of this performance increase is due to implicit regularization, as it encourages solutions where all the data fits well (so the batch variance is small) rather than solutions where some of the data fits extremely well and other data less well (perhaps with same overall loss but larger batch variance). The former solutions are likely to generalize better.


![[Implicit Regularization-20251020004710561.png]]