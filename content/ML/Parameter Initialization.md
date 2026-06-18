---
title: Parameter Initialization
tags:
  - dl
date: 2025-08-11
aliases:
  - parameter initialization
  - He initialization
  - weight initialization
---
How do we initialize parameters before training?

To see why this is crucial, consider that during the forward pass, each set of pre-activations $\mathbf{f}_{k}$ is computed as:
$$
\begin{align}
\mathbf{f}_{k}  & = \beta_{k} + \mathbf{\Omega}_{k} \mathbf{h}_{k} \\
     & = \beta_{k} + \mathbf{\Omega_{k}}\mathbf{a}[\mathbf{f}_{k-1}]
\end{align}
$$
where $\mathbf{a}[\bullet]$ applies the ReLU function and $\Omega_{k}$ and $\beta_{k}$ are the weights and biases.

Imagine that we initialize all the biases to zero and elements of $\mathbf{\Omega}_{k}$ according to a normal distribution with mean zero and variance $\sigma^{2}$. Consider two scenarios:
1. If the variance $\sigma^{2}$ is very small, then each element of $\beta_{k}+\mathbf{\Omega}_{k}\mathbf{h}_{k}$ will be a weighted sum of $\mathbf{h}_{k}$ where the weights are very small; the result will likely have a smaller magnitude than the input. In addition, ReLU clips values less than zero, so the range of $\mathbf{h}_{k}$ will be half that of $\mathbf{f}_{k-1}$. Consequently, the magnitudes of the pre-activations at the hidden layers will get smaller and smaller as we progress throughout the network.
2. If the variance $\sigma^{2}$ is very large, then each element of $\beta_{k}+\mathbf{\Omega}_{k}\mathbf{h}_{k}$ will be a weighted sum of $\mathbf{h}_{k}$ where the weights are very large; the result is likely to have much larger magnitude than the input. ReLU function halves the range of the inputs, but if $\sigma^{2}$ is large enough, the magnitudes of the pre-activations will still get larger as we progress through the network. 

In these two situations, the values at the pre-activations can become so small or so large that they cannot be represented with finite precision floating point arithmetic. Even if the forward pass is tractable, the same logic applies to the backward pass. Each [[Backpropagation Algorithm|gradient update]] consists of multiplying by $\mathbf{\Omega}^{T}$. If the values of $\Omega$ are not initialized sensibly, then the gradient magnitudes may decrease or increase uncontrollably during the backward pass. These cases are known as the [[Vanishing + Exploding Gradient Problem|vanishing/exploding gradient]] gradient problem, respectively. In the former case, updates to the model become vanishingly small. In the latter case, they become unstable.

## Initialization for Forward Pass
Consider the computation between pre-activations $\mathbf{f}$ and $\mathbf{f}'$ with dimensions $D_{h}$ and $D_{h'}$, respectively:
$$
\begin{align}
\mathbf{h}&=\mathbf{a}[\mathbf{f}] \\
\mathbf{f'}&=\beta+\mathbf{\Omega}\mathbf{h}
\end{align}
$$
where $\mathbf{h}$ represents the activations, $\mathbf{\Omega}$ and $\beta$ represent the weights and biases, and $\mathbf{a}[\bullet]$ is the activation function.

> [!note] Purpose
> Our aim here is to derive an expression for the variance of the output pre-activations $\mathbf{f}'$ as a function of the variance of the the input layer $\mathbf{f}$. Then, we can use this to reason about how we should initialize so that the variance stays stable.

Assume the pre-activations $f_{j}$ in the input layer $\mathbf{f}$ have variance $\sigma_{f}^{2}$. The biases $\beta_{i}$ are initialized to zero, and the weights $\Omega_{ij}$ are initialized as normally distributed with mean zero and variance $\sigma_{\Omega}^{2}$. 

Now we derive expressions for the mean of the pre-activations $\mathbf{f}'$ in the subsequent layer. 

The mean for each row $f_{i}'$ of the pre-activation $\mathbf{f}$:
$$
\begin{align}
\mathbb{E}[f_{i}']  & = \mathbb{E}\left[ \beta_{i}+\sum_{j=1}^{D_{h}} \Omega_{ij}h_{j} \right] \\[2ex] 
     & = \mathbb{E}[\beta_{i}]+\sum_{j=1}^{D_{h}}\mathbb{E}[\Omega_{ij}h_{j}] \\[2ex] 
     & = \mathbb{E }[\beta_{i}]+\sum_{j=1}^{D_{h} }\mathbb{E}[\Omega_{ij}]\mathbb{E}[h_{j}] \\[2ex] 
     & = 0 + \sum_{j=1}^{D_{h}}0\cdot \mathbb{E}[j_{j}] \\[2ex]
     & =0
\end{align}
$$
- This assumes that the distribution over the hidden units $h_{j}$ and the network weights $\Omega_{ij}$ are independent between the second and third lines.

Using this result, we see that the variance, $\sigma_{f}^{2}$ of the pre-activations $f_{i}'$ is:
$$
\begin{align}
\sigma_{f'}^{2}  & = \mathbb{E}[f_{i}'^{2}]-\mathbb{E}[f_{i}]^{2}\\[2ex] 
     & = \mathbb{E}\left[ \left( \beta_{i}+\sum_{j=1}^{D_{h}} \Omega_{ij}h_{j} \right)^{2} \right]-0 \\[2ex] 
     & = \mathbb{E}\left[ \left( \sum_{j=1}^{D_{h}} \Omega_{ij}h_{j} \right)^{2} \right] \\[2ex] 
     & = \sum_{j=1}^{D_{h}}\mathbb{E}[\Omega_{ij}^{2}] \,\, \mathbb{E}[h_{j}^{2}] \\[2ex] 
     & = \sum_{j=1}^{D_{h}} \sigma_{\Omega}^{2}\, \mathbb{E}[h_{j}^{2}] \\[2ex] 
     & = \sigma_{\Omega}^{2} \sum_{j=1}^{D_{h}}\mathbb{E}[h_{j}^{2}]
\end{align}
$$
where we have used the variance identity $\sigma^{2}= \mathbb{E}[(z-\mathbb{E}[z])^{2}] =\mathbb{E}[z^{2}]-\mathbb{E}[z]^{2}$. We've also assumed again that the distribution of the weights $\Omega_{ij}$ and the hidden units $h_{j}$ are independent between lines 3 and 4.

Assuming that the distribution of pre-activations $f_{j}$ at the previous layer is symmetric about zero, half of these pre-activations are clipped by the ReLU function, and the second moment $\mathbb{E}[h_{j}^{2}]$ will be half of $\sigma^{2}_{f}$, the variance of $f_{j}$:
$$
\sigma_{f_{i}'}^{2} = \sigma_{\Omega}^{2} \sum_{j=1}^{D_{h}} \frac{\sigma_{f}^{2}}{2} = \frac{1}{2}D_{h}\sigma_{\Omega}^{2}\sigma_{f}^{2}
$$
This implies that if we want the variance $\sigma_{f'}^{2}$ of the subsequent pre-activations $\mathbf{f}'$ to be the same as the variance $\sigma_{f}^{2}$ of the original pre-activations $\mathbf{f}$ during the forward pass, we should set
$$
\sigma_{\Omega}^{2}=\frac{2}{D_{h}}
$$
where $D_{h}$ is the dimension of the original layer to which the weights were applied. This is known as **He initialization**.

## Initialization for backward pass
A similar argument establishes how the variance of the gradients $\partial \ell / \partial f_{k}$ changes during the backward pass. During the [[Backpropagation Algorithm|backward pass]], we multiply by the transpose $\mathbf{\Omega}^{T}$ of the weight matrix, so the equivalent expression becomes:
$$
\sigma^{2}_{\Omega} = \frac{2}{D_{h}'}
$$
where $D_{h}'$ is the dimension of the layer that the weights feed into.

## Initialization for both forward & backward
If the weight matrix $\mathbf{\Omega}$ is not square (there are different numbers of hidden units in the two adjacent layers, so $D_{h}$ and $D_{h}'$ differ), then it is not possible to choose the variance to satisfy both $\sigma_{\Omega}^{2}=\frac{2}{D_{h}}$ and $\sigma^{2}_{\Omega} = \frac{2}{D_{h}'}$ simultaneously.

One possible compromise is to use the mean $(D_{h} + D_{h}') / 2$ as a proxy for the number of terms, which gives:
$$
\sigma_{\Omega}^{2}=\frac{4}{D_{h}+D_{h}'}
$$
The figure below shows empirically that both the variance of the hidden units in the forward pass and the variance of the gradients in the backward pass remain stable when the parameters are initialized appropriately.  

![[Parameter Initialization-20250813224230644.png]]