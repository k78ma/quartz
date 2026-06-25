---
title: Batch Normalization
tags:
  - ml
date: 2024-01-27
aliases:
  - BatchNorm
  - batch normalization
---
Batch normalization shifts and rescales each activation $h$ so that its mean and variance across the batch $\mathcal{B}$ become values that are learned during training. It is primarily useful for training stability, alleviating issues such as [[Exploding Gradients in Residual Networks|exploding gradients in residual networks]]. BatchNorm was originally developed to address the problem of [[Covariate Shift]].

First, the empirical mean $m_{h}$ and standard deviation $s_{h}$ are computed:
$$
\begin{align}
m_{h}  & = \frac{1}{\left| \mathcal{B} \right| } \sum_{i\in  \mathcal{B}}h_{i} \\[2ex] 
s_{h} & = \sqrt{ \frac{1}{\left| \mathcal{B} \right| } \sum_{i\in  \mathcal{B}}(h_{i}-m_{h})^{2} }
\end{align}
$$
where all quantities are scalars.

Then, we standardize the batch activations to have mean zero and unit variance:
$$
h_{i} \leftarrow \frac{h_{i}-m_{h}}{s_{h}+\epsilon}\quad \quad   \,\, \forall \, i \in  \mathcal{B,}
$$
where $\epsilon$ is a small number that prevents division by zero if $h_{i}$ is the same for every member of the batch and $s_{h}=0$.

Finally, the normalized variable is scaled by $\gamma$ and shifted by $\delta$:
$$
h_{i} \leftarrow \gamma h_{i}+\delta \quad \quad  \,\, \forall \, i\in  \mathcal{B}
$$
After this operation, the activations have mean $\delta$ and standard deviation $\gamma$ across all members of the batch. Both of these quantities are learned during training, so we [[BatchNorm Backprop|backprop]] through them. 
- Thus, BatchNorm adds two parameters per hidden unit.

Batch normalization is applied independently to each hidden unit. 
- In a standard network with $K$ layers, each containing $D$ hidden units, there would be $KD$ learned offsets $\delta$ and $KD$ learned scales $\gamma$. 
- In a convolutional neural network, the normalizing statistics are computed over both the batch and the spatial positions. If there were $K$ layers with $C$ channels, there would be $KC$ offsets and $KC$ scales.

**Inference/test time:** At test time, we do not have a batch from which we can gather statistics. Thus, the statistics $m_{h}$ and $s_{h}$ are calculated across the whole training dataset (rather than just a batch) and frozen in the final network.

**Weaknesses:**
- Performance can degrade with small batch sizes because the estimate of the mean and variance becomes less accurate.
- Introduces a dependency between the examples in a mini-batch, which can be problematic for tasks that require strong independence assumptions between samples
- BatchNorm makes the network invariant to rescaling the weights and biases that contribute to each activation. Thus, there will be a large family of weights and biases that produce the same effect. It also adds scaling and bias parameters $\gamma$ and $\delta$ at every hidden unit, making the model larger. Hence, it both creates redundancy in the weights and biases and adds extra parameters to compensate for that redundancy, which is obviously inefficient.

**Benefits:**
- Stable forward propagation. If we initialize the offsets $\delta=0$ and the scales $\gamma=1$, then each output activation will have unit variance.
    - In a regular network, this ensures the variance is stable during forward propagation at initialization.
    - In a [[Residual Networks|residual network]], the variance must still increase as we add a new source of variation to the input at each layer. However it will increase linearly with each residual block; the $k$-th layer adds one unit of variance to the existing variance $k$.
- Higher learning rates.
- Regularization.






#cards/dl
BatchNorm steps (batch $\mathcal{B}$ with activations $h$)
?
1. Calculate mean and standard deviation statistics across batch:
$$
\begin{align}
m_{h}  & = \frac{1}{\left| \mathcal{B} \right| } \sum_{i\in  \mathcal{B}}h_{i} \\[2ex]
s_{h} & = \sqrt{ \frac{1}{\left| \mathcal{B} \right| } \sum_{i\in  \mathcal{B}}(h_{i}-m_{h})^{2} }
\end{align}
$$
2. Standardize to zero mean and unit variance:
$$
h_{i} \leftarrow \frac{h_{i}-m_{h}}{s_{h}+\epsilon}\quad \quad   \,\, \forall \, i \in  \mathcal{B,}
$$
3. Scale and shift with learned variables $\gamma$ and $\delta$:
$$
h_{i} \leftarrow \gamma h_{i}+\delta \quad \quad  \,\, \forall \, i\in  \mathcal{B}
$$
<!--SR:!fsrs,2026-06-26T23:47:52.424Z,2,2.3065,2.11121424,2,2,0,0,2026-06-24T23:47:52.424Z-->
+++

How does BatchNorm differ at test time vs. training?::At test time, we do not have a batch from which we can gather statistics. Thus, the statistics $m_{h}$ and $s_{h}$ are calculated across the whole training dataset (rather than just a batch) and frozen in the final network.
<!--SR:!fsrs,2026-06-26T19:08:39.318Z,2,2.3065,2.11121424,2,2,0,0,2026-06-24T19:08:39.318Z-->

