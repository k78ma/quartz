---
title: ResNet
tags:
  - dl
date: 2026-06-25
aliases:
  - resnet
  - bottleneck residual block
  - bottleneck layer
---
ResNets are networks using [[Residual Connections|residual blocks]], first used for image classification. 

## Basic ResNet block
In ResNets, each residual block contains a [[Batch Normalization|BatchNorm]] operation, a ReLU activation function, and a convolutional layer. This is followed by the same sequence again before being added back to the input.

![[ResNet-1782402706200.webp]]

## Bottleneck residual blocks
For very deep networks, the number of parameters may become undeniably large. **Bottleneck residual blocks** make more efficient use of parameters by breaking this into three convolutions, using [[Operations on Image Representations|1x1 convolutions]] to change the number of channels. In order, we have:
- $1\times 1$ kernel to reduces the number of channels.
- $3\times 3$ kernel
- $1\times 1$ kernel to increase the number of channels back to the original amount.

In this way, we can integrate information over a $3\times 3$ pixel area using less parameters.

![[ResNet-1782403119957.webp]]

## Architectures
As an example of ResNet architectures, we examine ResNet-200. ResNet-200 contains 200 layers and was used for image classification on ImageNet. The architecture resembles [[AlexNet]] and [[VGG]] but uses bottleneck residual blocks instead of vanilla convolutional layers. As with AlexNet and VGG, these are periodically spread out with decreases in spatial resolution and increases in the number of channels. 
- The resolution is decreased between adjacent ResNet blocks using convolutions with stride 2.
- To add channels, main convolutional path uses a convolutional kernel with shape $C_{i}\times C_{out}\times K\times K$, as is standard for [[2D Convolution|2D convolution]]. For the residual skip connection, we either append zeros to the representation or apply an extra $1\times 1$ convolution.
- At the start of the network is a $7\times 7$ convolutional layer, followed by a downsampling operation.
- At the end, a fully connected layer maps the block to a vector of length 1000, which is passed through a softmax layer to generate class probabilities.


![[ResNet-1782403163924.webp]]


#cards/dl
What are the operations in a basic ResNet residual block?
?
(BatchNorm, ReLU, Conv) twice, then add back input with skip connection.

![[ResNet-1782402706200.webp]]
<!--SR:!fsrs,2026-06-27T19:24:46.543Z,2,2.3065,2.11121424,2,2,0,0,2026-06-25T19:24:46.543Z-->
+++

Why do we use bottleneck residual blocks?::Uses less parameters than a normal residual block, useful in deep networks.
<!--SR:!fsrs,2026-06-27T19:24:22.760Z,2,2.3065,2.11121424,2,2,0,0,2026-06-25T19:24:22.760Z-->

A bottleneck residual block comprises of what three convolutions?
?
- $1\times 1$ kernel to reduces the number of channels.
- $3\times 3$ kernel
- $1\times 1$ kernel to increase the number of channels back to the original amount.
<!--SR:!fsrs,2026-06-27T19:24:33.874Z,2,2.3065,2.11121424,2,2,0,0,2026-06-25T19:24:33.874Z-->
+++