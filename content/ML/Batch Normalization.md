---
title: Batch Normalization
tags:
  - ml
date: 2024-01-27
aliases:
  - BatchNorm
---
Batch normalization in an improvement on [[Dropout]], and was originally designed to address [[Covariate Shift|covariate shift]].

When training with mini-batches in [[Batch Gradient Descent]], the idea is to *standardize* the input values for each batch, by subtracting off the mean and dividing by the standard deviation of each input dimension. 

This means that the scale of the inputs to each layer remains the same, no matter how the weights in previous layers change. 
- However, this somewhat complicates matters, because the computation of the weight updates will need to take into account that we are performing this transformation. 
- In the modular view, batch normalization can be seen as a module that is applied to $z^{l}$, interposed after the product with $W^{l}$ and before input to the activation function $f^{l}$.

Batch normalization has a regularization effect similar to [[Weight Perturbation]] and [[Dropout]]. Each mini-batch of data ends up slightly perturbed, which prevents the network from exploiting very particular values of data points.

>[!note] Use cases and weaknesses
>- **Use cases:** Particularly effective in [[Convolutional Neural Networks|CNNs]] and [[Neural Network Layer|fully-connected layers]]. 
>- **Weaknesses:** performance can degrade with small batch sizes because the estimate of the mean and variance becomes less accurate. BatchNorm also introduces a dependency between the examples in a mini-batch, which can be problematic for tasks that require strong independence assumptions between samples.

### Formulation
Let’s think of the batch-norm layer as taking $z^{l}$ as input and producing an output $\hat{Z}^{l}$ as output. But instead of thinking of $Z^{l}$ as an $n^{l}\times 1$ vector, we have to think about handling a mini-batch of data of size $K$ all at once, so $Z^{l}$ and output $\hat{Z}^{l}$ will be $n^{l} \times k$.

Our first step is to compute the *batchwise* mean and standard deviation. Let the mean $\mu_{i}^{l}$ be an $n \times l$ vector where:
$$
\mu_{i}^{l}=\frac{1}{K}\sum_{j=1}^{K}Z_{ij}^{l}
$$
And let $\sigma^{l}$ be an $n \times l$ vector where:
$$
\sigma_{i}^{l} = \sqrt{ \frac{1}{K} \sum_{j=1}^{K} (Z_{ij}^{l}-\mu_{i})^{2} }
$$
The basic normalized version of our data would be a matrix, element $(i,j)$ of which is
$$
\bar{Z}_{i,j} = \frac{Z_{ij}^{l}-\mu}{\sigma_{i}^{l} + \epsilon}
$$
where $\epsilon$ is a very small constant to guard against division by zero. However, if we let these be our $\bar{Z}^{l}$ values, we really are forcing something too strong on our data—our goal was to normalize across the data batch, but not necessarily force the output values to have exactly mean $0$ and standard deviation $1$. So, we will give the layer the “opportunity” to shift and scale the outputs by adding new weights to the layer. These weights are $G^{l}$ and $B^{l}$, each of which is an $n^{l}\times 1$ vector. Using the weights, we define the final output to be
$$
\hat{Z}^{l}_{ij}=G^{l}_{i}\bar{Z}_{ij}^{l}+B_{i}^{l}
$$
That's the forward pass.

For the backward pass, we have to do two things. Given $\frac{ \partial L }{ \partial \hat{Z}^{l} }$, we have to:
- Compute $\partial L / \partial Z^{l}$ for backpropagation
- Compute $\partial L / \partial G^{l}$ and $\partial L / \partial B^{l}$ for gradient updates of the weights in this layer.

Schematically
$$
\frac{ \partial L }{ \partial B }=\frac{ \partial L }{ \partial \hat{Z} }\frac{ \partial \hat{Z} }{ \partial B }
$$
It's hard to think about these derivatives in matrix terms, so we’ll see how it works for the components. $B_{i}$ contributes to $\hat{Z}_{ij}$ for all data points $j$ in the batch. So
$$
\begin{align}
\frac{ \partial L }{ \partial B_{i} }  & = \sum_{j} \frac{ \partial L }{ \partial \hat{Z}_{ij} } \frac{ \partial \hat{Z}_{ij} }{ \partial B_{i} }  \\[2ex] 
	 & =\sum_{j}\frac{ \partial L }{ \partial \hat{Z}_{ij} } 
\end{align}
$$
Similarly, $G_{i}$ contributes to $\hat{Z}_{ij}$ for all data points $j$ in the batch, so that
$$
\begin{align}
\frac{ \partial L }{ \partial G_{i} }  & = \sum_{j} \frac{ \partial L }{ \partial \hat{Z}_{ij} } \frac{ \partial \hat{Z}_{ij} }{ \partial G_{i} } \\[2ex] 
	 & =\sum_{j} \frac{ \partial L }{ \partial \hat{Z}_{ij} } \bar{Z}_{ij}
\end{align}
$$
Now let's figure out how to do backpropagation. We can start schematically:
$$
\frac{ \partial L }{ \partial Z } = \frac{ \partial L }{ \partial \hat{Z} } \frac{ \partial \hat{Z} }{ \partial Z } 
$$
Because dependencies exist across the batch, but not across the output units,
$$
\frac{ \partial L }{ \partial Z_{ij} } = \sum_{k=1}^{K}\frac{ \partial L }{ \partial \hat{Z}_{ik} } \frac{ \partial \hat{Z}_{ik} }{ \partial Z_{ij} } 
$$
The next step is to note that
$$
\frac{ \partial \bar{Z}_{ik} }{ \partial Z_{ij} } = \left( \delta _{jk}-\frac{ \partial \mu _{i} }{ \partial Z_{ij} }  \right) \frac{1}{\sigma _{i}}-\frac{Z_{ik}-\mu _{i}}{\sigma _{i}^{2}} \frac{ \partial \sigma _{i} }{ \partial Z_{ij} }
$$
where $\delta_{jk}=1$ if $j=k$ and $\delta_{jk}=0$ otherwise.

We need two more small parts:
$$
\begin{align}
\frac{ \partial \mu _{i} }{ \partial Z_{ij} }  & = \frac{1}{K}  \\[2ex] 
\frac{ \partial \sigma _{i} }{ \partial Z_{ij} }  & =\frac{Z_{ij}-\mu _{i}}{K\sigma _{i}}
\end{align}
$$
Putting everything together:
$$
\frac{ \partial L }{ \partial Z_{ij} } = \sum_{k=1}^{K} \frac{ \partial L }{ \partial \hat{Z}_{ij} } G_{i} \frac{1}{K \sigma _{i}} \left( \delta_{jk}K -1 - \frac{(Z_{ik}-\mu _{i})(Z_{ij}-\mu _{i})}{\sigma _{i}^{2}} \right)
$$
