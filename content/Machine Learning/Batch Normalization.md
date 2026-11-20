---
title: Batch Normalization
tags:
  - ml
date: 2024-01-27
aliases:
  - BatchNorm
  - batch normalization
---
Batch normalization shifts and rescales each activation $h$ so that its mean and variance across the batch $\mathcal{B}$ become values that are learned during training. It is primarily useful for training stability, alleviating issues such as [[Exploding Gradients in Residual Networks|exploding gradients in residual networks]]. 
- BatchNorm was originally developed to address the problem of [[Covariate Shift]], but has been shown to not be useful; instead, it seems to make the loss surface smoother.

BatchNorm steps (batch size $\mathcal{B}$ with activations $h$)
?
1. Calculate mean and standard deviation statistics across batch:
$$
\begin{align}
m_{h}  & = \frac{1}{\left| \mathcal{B} \right| } \sum_{i\in  \mathcal{B}}h_{i} \\[2ex]
s_{h} & = \sqrt{ \frac{1}{\left| \mathcal{B} \right| } \sum_{i\in  \mathcal{B}}(h_{i}-m_{h})^{2} }
\end{align}
$$
2. Standardize to zero mean and unit variance, where $\epsilon$ is a small number that prevents division by zero:
$$
h_{i} \leftarrow \frac{h_{i}-m_{h}}{s_{h}+\epsilon}\quad \quad   \,\, \forall \, i \in  \mathcal{B,}
$$
3. Scale and shift with learned variables $\gamma$ and $\delta$:
$$
h_{i} \leftarrow \gamma h_{i}+\delta \quad \quad  \,\, \forall \, i\in  \mathcal{B}
$$
After this operation, the activations have mean $\delta$ and standard deviation $\gamma$ across all members of the batch.
<!--SR:!fsrs,2027-02-11T01:38:00.377Z,118,118.12399461,7.65683641,2,6,0,0,2026-10-16T01:38:00.377Z-->
+++

Batch normalization is applied independently to each hidden unit. 
- In a standard network with $K$ layers, each containing $D$ hidden units, there would be $KD$ learned offsets $\delta$ and $KD$ learned scales $\gamma$. 
- In a convolutional neural network, the normalizing statistics are computed over both the batch and the spatial positions. If there were $K$ layers with $C$ channels, there would be $KC$ offsets and $KC$ scales.

How does BatchNorm differ at test time vs. training?::At test time, we do not have a batch from which we can gather statistics. Thus, the statistics $m_{h}$ and $s_{h}$ are calculated across the whole training dataset (rather than just a batch) and frozen in the final network.
<!--SR:!fsrs,2027-06-14T23:30:25.977Z,289,288.50527782,1,2,5,0,0,2026-08-29T23:30:25.977Z-->

## Benefits

How does BatchNorm improve forward pass stability?
?
It normalizes the hidden unit activations, keeping their magnitudes stable across layers.
- In a regular network, this ensures the variance is stable during forward propagation at initialization.
- In a [[Residual Networks|residual network]], the variance must still increase as we add a new source of variation to the input at each layer. However it will increase linearly with each residual block; the $k$-th layer adds one unit of variance to the existing variance $k$.
<!--SR:!fsrs,2026-11-23T05:44:31.066Z,8,8.2956,1,2,1,0,0,2026-11-15T05:44:31.066Z-->
+++
<!--SR:!fsrs,2027-02-17T04:14:49.029Z,173,173.09630012,2.09058635,2,5,0,0,2026-08-28T04:14:49.029Z-->

Adding BatchNorm to residual networks reduces variance scaling from exponential to {=linear=}.
<!--SR:!fsrs,2027-06-06T05:16:22.924Z,282,281.8043453,1,2,5,0,0,2026-08-28T05:16:22.924Z-->

Why does batch normalization allow us to use higher learning rate?::It makes the loss surface gradients smoother, reducing shattered gradients.
<!--SR:!fsrs,2026-11-27T01:21:37.152Z,9,9.24024489,4.74828477,2,3,0,0,2026-11-18T01:21:37.152Z-->

How does batch normalization provide regularization?::Because the normalization depends on the batch statistics, we essentially [[Applying Noise During Training|applying noise during training]].
<!--SR:!fsrs,2027-02-17T05:06:31.428Z,173,173.09630012,2.09058635,2,5,0,0,2026-08-28T05:06:31.428Z-->

## Weaknesses

Why does BatchNorm sometimes degrade performance with small batch sizes?::Because the mean and variance becomes less accurate.
<!--SR:!fsrs,2027-06-06T04:15:01.166Z,282,281.8043453,1,2,5,0,0,2026-08-28T04:15:01.166Z-->

Why is BatchNorm problematic for tasks that require strong independence assumptions between samples?::It introduces a dependency between the examples in a mini-batch as we use batch statistics in training.
<!--SR:!fsrs,2026-11-23T05:42:44.592Z,8,8.2956,1,2,1,0,0,2026-11-15T05:42:44.592Z-->

How does BatchNorm produce redundancy/inefficiency with respect to the number of weights?::BatchNorm makes the network invariant to rescaling the weights and biases that contribute to each activation. Thus, there will be a large family of weights and biases that produce the same effect. It also adds scaling and bias parameters $\gamma$ and $\delta$ at every hidden unit, making the model larger. Hence, it both creates redundancy in the weights and biases and adds extra parameters to compensate for that redundancy, which is obviously inefficient.
<!--SR:!fsrs,2026-12-10T08:52:27.288Z,21,21.02452958,1,2,3,0,0,2026-11-19T08:52:27.288Z-->












