---
title: Exploding Gradients in Residual Networks
tags:
  - dl
date: 2026-06-23
aliases: exploding gradients in residual networks
---
We've seen that proper [[Parameter Initialization|weight initialization]] is critical to ensure that the magnitudes of intermediate values during the forward pass can increase or decrease exponentially. Similarly, gradients during a backward pass can vanish or explode as we move backwards.

[[Parameter Initialization|He initialization]] makes it so that the expected variance of the activations (in the forward pass) and gradients (in the backward pass) remains the same between layers. This is done (assuming ReLU activations specifically), by initializing the biases to zero and choosing normally distributed weights $\Omega$ with mean zero and variance $2 / D_{h}$ where $D_{h}$ is the number of hidden units in the previous layer.

In the case of a residual network, we don't have to worry about intermediate values or gradients vanishing with network depth, since there's a direct path whereby each layer contributes to the network output. However, even if we use He initialization inside the residual block, the values in the forward pass **increase exponentially** as we move through the network. Thus we also have corresponding problems with exploding gradients.

Why? Consider that we add the result of the processing in the [[Residual Connections|residual block]] back to the input. Each branch has some (uncorrelated) variability. Thus, the overall variance increases when we recombine them. With ReLU activations and He initialization, the expected variance is unchanged by the processing in each block. Consequently, when we recombine with the input, the variance doubles (11.6a), growing exponentially with the number of residual blocks. This limits the possible network depth before floating point precision is exceeded in the forward pass. A similar argument applies to the gradients in the backward pass of backprop.

One approach that would stabilize the forward and backward passes would be to use He initialization and then multiply the combined output of each residual block by $1 / \sqrt{ 2 }$ to compensate for the doubling (11.6b). However, we usually instead use [[Batch Normalization|BatchNorm]] to keep the activations/gradients well-scaled.

![[Exploding Gradients in Residual Networks-1782238933944.webp]]

#cards/dl 
Residual networks have what kind of exploding/vanishing gradient problem?::Exponential increase in activations during forward pass and corresponding problems with exploding gradients. No problem with vanishing.
<!--SR:!fsrs,2026-07-03T02:53:27.258Z,7,7.31530068,2.11121424,2,2,0,0,2026-06-26T02:53:27.258Z-->

How do we deal with exploding activations or gradients in residual networks?::BatchNorm to keep the activations/gradients well-scaled
<!--SR:!fsrs,2026-07-10T02:52:34.599Z,14,13.8358397,2.1043314,2,3,0,0,2026-06-26T02:52:34.599Z-->

Why does variance for activations/gradients grow exponentially with the number of residual blocks?::Each residual block adds its input back to its processed output, which doubles the variance (assuming the branches are uncorrelated)
<!--SR:!fsrs,2026-07-10T02:52:27.587Z,14,13.8358397,2.1043314,2,3,0,0,2026-06-26T02:52:27.587Z-->