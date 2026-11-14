---
title: AlexNet
tags:
  - dl
date: 2026-04-28
aliases: alexnet
---
AlexNet was the first convolutional network to perform well on ImageNet, which is a 1000-class image classification task. It consists of eight hidden layers with ReLU activation functions, of which the first five are convolutional and the rest are fully connected. 

![[Image Classification-1777418936091.webp]]

The network starts by downsampling the input using an $11\times 11$ kernel with a stride of four to create 96 channels. It then downsamples again using a max pooling layer before applying a $5\times 5$ kernel to create 256 channels. There are three more convolutional layers with kernel size $3\times 3$, eventually resulting in a $13\times 13$ representation with 256 channels. A final max-pooling layer yields a $6\times 6$ representation with 256 channels which is resized into a vector of length 9216 and passed through three fully connected layers containing 4096, 4096, and 1000 hidden units, respectively. The last layer is passed through the softmax function to output a probability distribution over the 1000 classes. The complete network contains 60 million parameters, most of which are in the fully connected layers.