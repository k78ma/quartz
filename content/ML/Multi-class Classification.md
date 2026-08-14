---
title: Multi-class Classification
tags:
  - dl
date: 2025-06-24
aliases:
  - multi-class classification
  - multiclass cross-entropy loss
---
The goal of multi-class classification is to assign an input data example $\mathbf{x}$ to one of $K>2$ classes, so the target label is $t \in \{1,2,\dots,K\}$.

Examples:
- Predicting which of $K=10$ digits $t$ is present in an image of a handwritten number.
- Predicting which of $K$ possible words $t$ follows an incomplete sentence $\mathbf{x}$.

Following the [[Loss Function Recipe|loss function recipe]], we first choose a distribution over the target space $t$. In this case, we have $t \in \{1,2,\dots,K\}$, so we choose the *categorical distribution*, which is defined on this domain. This has $K$ parameters $\lambda_1,\lambda_2,\dots,\lambda_K$, which determine the probability of each category:
$$
P(t=k)=\lambda_k.
$$
- Constraints: Each $\lambda_k$ is in the range $[0,1]$ and they sum to $1$.

![[Multi-class Classification-1785273240727.webp]]

Then, we use a network $f[\mathbf{x},\phi]$ with $K$ outputs to compute these $K$ parameters from input $\mathbf{x}$. Unfortunately, the network outputs do not necessarily obey the aforementioned constraints; thus, we pass them through a function that ensures these constraints are respected. This is usually a [[Softmax|softmax]] function.

The softmax takes an arbitrary vector of length $K$ and returns a vector of the same length but where the elements are now in the range $[0,1]$ and sum to $1$. The $k$-th output of the softmax function is
$$
\text{softmax}_k[\mathbf{z}]
=
\frac{\exp[z_k]}
{\sum_{k'=1}^{K}\exp[z_{k'}]},
$$
where the exponential functions ensure positivity, and the sum in the denominator ensures that the $K$ numbers sum to one.

The predicted probability that input $\mathbf{x}$ belongs to class $k$ is therefore
$$
y_k
=
P(t=k\mid\mathbf{x})
=
\text{softmax}_k\!\Big[f[\mathbf{x},\phi]\Big].
$$

Given a training set $\{(\mathbf{x}_i,t_i)\}_{i=1}^I$, the negative log-likelihood loss is
$$
\begin{aligned}
L[\phi]
&=
-\sum_{i=1}^{I}
\log\!\Big[
\text{softmax}_{t_i}\big[f[\mathbf{x}_i,\phi]\big]
\Big] \\[2ex]
&=
-\sum_{i=1}^{I}
\left(
f_{t_i}[\mathbf{x}_i,\phi]
-
\log\!\left[
\sum_{k'=1}^{K}
\exp\!\big(f_{k'}[\mathbf{x}_i,\phi]\big)
\right]
\right).
\end{aligned}
$$

where $f_{t_i}[\mathbf{x}_i,\phi]$ and $f_{k'}[\mathbf{x}_i,\phi]$ denote the $t_i$-th and $k'$-th outputs of the network, respectively. This is called *multiclass cross-entropy loss*.

![[Multi-class Classification-1785273313741.webp]]


> [!note] Simplified form
> Let $\mathbf{t}^{(i)}$ be a one-hot encoding of the ground-truth class $t_i$, so that $t_{t_i}^{(i)}=1$ and every other element is zero. Then the loss can be written more compactly as
> $$
> L[\phi]
> =
> -\sum_{i=1}^{I}\sum_{k=1}^{K}
> t_k^{(i)}\log y_k^{(i)},
> $$
> where
> $$
> y_k^{(i)}
> =
> \text{softmax}_k\!\Big[f[\mathbf{x}_i,\phi]\Big].
> $$
> Because the target vector is one-hot, only the correct class contributes to the loss. For the correct class, we take the negative log of its predicted probability. Every other class has a target value of zero, so its contribution to the sum is zero.

The transformed model output represents a categorical distribution over the possible classes $t\in\{1,2,\dots,K\}$. For a point estimate, we predict the most probable class:
$$
\hat{t}
=
\underset{k}{\operatorname{argmax}}\;
P(t=k\mid\mathbf{x},\hat{\phi})
=
\underset{k}{\operatorname{argmax}}\;
y_k.
$$

#cards/dl
Multiclass cross-entropy
?
Negative log of softmax simplifies to:
$$
L[\phi] =-\sum_{i=1}^{I}\sum_{k=1}^{K} t_k^{(i)}\log y_k^{(i)},
$$
where $t$ is a one-hot vector such that only the correct class contributes to the loss.
- $K$ classes, $I$ data samples
<!--SR:!fsrs,2026-12-20T03:52:12.883Z,128,128.44813239,2.09745544,2,4,0,0,2026-08-14T03:52:12.883Z-->
+++