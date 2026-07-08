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
- Higher learning rates. Empirical studies and theory both show that batch normalization makes the loss surface and its gradient change more smoothly (i.e., reduces [[Shattered Gradients|shattered gradients]]). This means that we can use higher learning rates, which was shown through [[Implicit Regularization|implicit regularization]] to generalize better.
- Regularization. Batch normalization is a form of [[Applying Noise During Training|applying noise during training]], because the normalization depends on the batch statistics. The activations for a given training example are normalized by an amount that depends on the other members of the batch and will be slightly different at each training iteration.


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
<!--SR:!fsrs,2026-08-08T06:40:53.356Z,32,31.96503516,4.73876485,2,4,0,0,2026-07-07T06:40:53.356Z-->
+++

How does BatchNorm differ at test time vs. training?::At test time, we do not have a batch from which we can gather statistics. Thus, the statistics $m_{h}$ and $s_{h}$ are calculated across the whole training dataset (rather than just a batch) and frozen in the final network.
<!--SR:!fsrs,2026-07-07T23:14:39.784Z,11,10.97104786,2.1043314,2,3,0,0,2026-06-26T23:14:39.784Z-->

How does BatchNorm improve forward pass stability?::It normalizes the hidden unit activations, keeping their magnitudes stable across layers.
<!--SR:!fsrs,2026-07-08T02:33:27.363Z,11,10.97104786,2.1043314,2,3,0,0,2026-06-27T02:33:27.363Z-->

Why does batch normalization allow us to use higher learning rate?:It makes the loss surface gradients smoother, reducing shattered gradients.

How does batch normalization provide regularization?::Because the normalization depends on the batch statistics, we essentially apply some noise during training.
<!--SR:!fsrs,2026-07-08T02:32:05.329Z,11,10.97104786,2.1043314,2,3,0,0,2026-06-27T02:32:05.329Z-->

Why does BatchNorm sometimes degrade performance with small batch sizes?::Because the mean and variance becomes less accurate.
<!--SR:!fsrs,2026-07-08T02:33:02.114Z,11,10.97104786,2.1043314,2,3,0,0,2026-06-27T02:33:02.114Z-->

Adding BatchNorm to residual networks reduces variance scaling from exponential to ==linear==.
<!--SR:!fsrs,2026-07-08T02:33:09.328Z,11,10.97104786,2.1043314,2,3,0,0,2026-06-27T02:33:09.328Z-->
