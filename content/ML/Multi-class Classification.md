---
title: Multi-class Classification
tags:
  - dl
date: 2025-06-24
aliases:
  - multi-class classification
---
The goal of multi-class is to assign an input data example $\mathbf{x}$ to one of $K>2$ classes, so $y \in \{ 1,2,\dots,K \}$.

Examples:
- Predicting which of $K=10$ digits $y$ is present in an image of a handwritten number
- Predicting which of $K$ possible words $y$ follows an incomplete sentence $\mathbf{x}$

Following the [[Loss Function Recipe|loss function recipe]], we first choose a distribution over the prediction space $y$. In this case, we have $y \in \{ 1,2,\dots,K \}$, so we choose the *categorical distribution*, which is defined on this domain. This has $K$ parameters $\lambda_{1}, \lambda_{2}, \dots,\lambda_{K}$, which determine the probability of each category:
$$
Pr(y=k)=\lambda_{k}
$$
- Constraints: Each $\lambda$ is in the range $[0,1]$ and they sum to $1$.

![[Multi-class Classification-20250624151701447.png]]


Then, we use a network $f[\mathbf{x}, \phi]$ with $K$ outputs to compute these $K$ parameters from input $\mathbf{x}$. Unfortunately, the network outputs do not necessarily obey the aforementioned constraints; thus, we pass them through a function that ensures these constraints are respected. This is usually a [[Softmax|softmax]] function.

The softmax takes an arbitrary vector of length $K$ and returns a vector of the same length but where the elements are now in the range $[0,1]$ and sum to $1$. The $k$-th output of the softmax function is
$$
\text{softmax}_{k}[\mathbf{z}]= \frac{\exp[z_{k}]}{\sum_{k'=1}^{K} \exp[z_{k'}]}
$$
where the exponential functions ensure positivity, and the sum in the denominator ensures that the $K$ numbers sum to one.

The likelihood that input $\mathbf{x}$ has label $y=k$ is hence:
$$
Pr(y=k|\mathbf{x})=\text{softmax}_{k}\Big[f[\mathbf{x}, \phi]\Big]
$$
The loss function is the negative log-likelihood of the training data:
$$
\begin{align}
L[\phi] & = - \sum_{i=1}^{I} \log \Big[ \text{softmax}_{y_{i}} \Big[ f[\mathbf{x_{i}}, \phi] \Big] \Big] \\[2ex] 
     & = - \sum_{i=1}^{I} \left(  f_{y_{i}}[\mathbf{x}_{i}, \phi] - \log\left[ \sum_{k'=1}^{K} \exp[f_{k'}[\mathbf{x}_{i}, \phi]] \right] \right)
\end{align}
$$
where $f_{y_{i}}[\mathbf{x}, \phi]$ and $f_{k'}[\mathbf{x}, \phi]$ denote the $y_{i}$-th and $k'$-th outputs of the network respectively. This is called *multiclass cross-entropy loss*.

The transformed model output represents a categorical distribution over possible classes $y \in \{ 1,2,\dots,K \}$. For a point estimate, we take the most probable category $\hat{y}=\underset{x}{\operatorname{argmax}}[Pr(y=k \, | \,\mathbf{f[x, \hat{\phi}]})]$. This corresponds to whichever curve is highest for that value of $\mathbf{x}$ in the figure below.

![[Multi-class Classification-20250624153109387.png]]