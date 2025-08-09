---
title: Backpropagation Algorithm
tags:
  - dl
date: 2025-08-09
aliases:
  - backpropagation
  - backpropagation algorithm
---
Consider a deep neural network $\mathbf{f}[\mathbf{x}_{i}, \phi]$ that takes inputs $\mathbf{x}_{i}$, has $K$ hidden layers with ReLU activations, and individual loss term $\text{l}[\mathbf{f}[\mathbf{x}_{i}, \phi], \mathbf{y}_{i}]$. 

The goal of backpropagation is to compute the derivatives $\partial \ell_{i} / \partial \beta_{k}$ and $\partial \ell_{i} / \partial \mathbf{\Omega_{k}}$ with respect to the biases $\beta_{k}$ and weights $\mathbf{\Omega}_{k}$.

### Forward pass
We compute and store the following quantities:
$$
\begin{align}
\mathbf{f_{0}}  & = \beta_{0} + \mathbf{\Omega}_{0}\mathbf{x}_{i} \\
\mathbf{h}_{k}  & = \mathbf{a}[\mathbf{f}_{k-1}] \\
\mathbf{f}_{k} & = \beta_{k} + \mathbf{\Omega}_{k} \mathbf{h}_{k}
\end{align}
$$
where $k \in \{ 1,2,...K \}$.

### Backward pass
We start with the derivative $\partial \ell_{i} / \partial \mathbf{f}_{K}$ of the loss function $\ell_{i}$ with respect to the network output $\mathbf{f}_{k}$ and work backward through the network. For $k\in \{ K, K-1, \dots, 1 \}$, we do:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \beta_{k} }  & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f_{k}} } \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial \mathbf{\Omega}_{k} }  & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} } \mathbf{h}_{k}^{T} \\[2ex]
\end{align}
$$
We then pass backward to the previous layer:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k-1} }  & = \mathbb{I}[\mathbf{f}_{k-1}>0] \odot \frac{ \partial \ell_{i} }{ \partial \mathbf{h}_{k} }  \\[2ex] 
 & =\mathbb{I}[\mathbf{f}_{k-1} > 0] \odot \left( \mathbf{\Omega}_{k}^{T} \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{k} }  \right)
\end{align}
$$
where:  
- $\odot$ is a pointwise multiplication
- $\mathbb{I}[\mathbf{f}_{k-1} > 0 ]$ is a vector containing ones where $\mathbf{f}_{k-1}$ is greater than zero and zeros elsewhere.
- Thus, the $\mathbb{I}[\mathbf{f}_{k-1}>0] \odot$ operation is a mask applying the activation function

Finally, we compute the derivatives with respect to the first set of weights and biases:
$$
\begin{align}
\frac{ \partial \ell_{i} }{ \partial \mathbf{\Omega}_{0} }  & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{0} } \mathbf{x}_{i}^{T} \\[2ex] 
\frac{ \partial \ell_{i} }{ \partial \beta_{0} }  & = \frac{ \partial \ell_{i} }{ \partial \mathbf{f}_{0} }  
\end{align}
$$
We calculate these derivatives for every training example in the batch and sum them together to retrieve the gradient for the SGD update.

Backpropagation is extremely efficient; the most demanding computational step in the forward and backward pass is matrix multiplication (by $\Omega$ and $\Omega^{T}$, respectively) which only requires additions and multiplications. However, it is not memory efficient; the intermediate values in the forward pass must all be stored, which can limit the size of the model we can train.