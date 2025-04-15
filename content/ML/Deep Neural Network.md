---
title: Deep Neural Network
tags:
  - dl
date: 2025-04-15
aliases:
  - deep neural network
---
We have seen that [[Composing Shallow Networks|composing shallow networks]] can give us complex functions. We can extend this to construct deep networks with more than two hidden layers; modern networks have hundreds of layers with thousands of hidden units at each layer.
- The number of hidden units in each layer is referred to as the *width* of the network
- The number of hidden layers is the *depth*
- The total number of hidden units is a measure of network *capacity*

## Hyperparameters
We denote the number of layers as $K$ and the number of hidden units in each layer as $D_{1}, D_{2},\dots,D_{K}$. These are examples of *hyperparameters*. They are quantities chosen before we learn the model parameters (i.e., the slope and intercept terms). For fixed hyperparameters (e.g., $K=2$ and $D_{k}=3$ hidden units each), the model describes a family of functions, and the parameters determine the particular function. Hence, when we also consider the hyperparameters, we can think of neural networks as representing a family of families of functions relating input to output. 

## General Formulation
- See [[Composing Shallow Networks#Matrix Notation]] for an introduction to matrix notation for a simple composition of shallow networks

We describe the vector of hidden units at layer $k$ as $\mathbf{h}_{k}$, the vector of biases (intercepts) that contribute to hidden layer $k+1$ as $\beta_k$, and the weights (slopes) that are applied to the $k$-th layer and contribute to the $(k+1)$-th layer as $\Omega_{k}$. A general deep network $\mathbf{y}=\mathbf{f}[\mathbf{x}, \mathbf{\phi}]$ with $K$ layers can now be written as:
$$
\begin{align}
\mathbf{h}_{1} & =a[\beta_{0}+\Omega_{0}\mathbf{x}] \\
\mathbf{h}_{2} & =a[\beta_{1}+\Omega_{1} \mathbf{h}_{1}] \\
\mathbf{h}_{3} & =a[\beta_{2}+\Omega_{2}\mathbf{h_{2}}] \\
 & \,\,\, \vdots \\
\mathbf{h}_{K} & =a[\beta_{K-1}+\Omega_{K-1}\mathbf{h}_{K-1}] \\
\mathbf{y} & =\beta_{K}+\Omega_{K}\mathbf{h}_{K}
\end{align}
$$
The parameters $\phi$ of this model comprise all of these weight matrices and bias vectors $\phi=\{ \beta_{k}, \Omega_{k} \}_{k=0}^{K}$.

- If the $k$-th layer has $D_{k}$ has hidden units, then the bias vector $\beta_{k-1}$ will be of size $D_{k}$. The last bias vector $\beta_{K}$ has the size $D_{o}$ of the output. 
- The first weight matrix $\Omega_{0}$ has size $D_{1}\times D_{i}$ where $D_{i}$ is the size of the input. 
- The last weight matrix $\Omega_{K}$ is $D_{o}\times D_{K}$, and the remaining matrices $\Omega_{k}$ are $D_{k+1}\times D_{k}$

We can equivalently write the network as a single function:
$$
\mathbf{y}=\beta_{K}+\Omega_{K}[\beta_{K-1}+\Omega_{K-1}a[\dots \beta_{2}+\Omega_{2}a[\beta_{1}+\Omega_{1}a[\beta_{0}+\Omega_{0}\mathbf{x}]] \dots]]
$$

![[Deep Neural Network-20250415173138789.png|606]]

