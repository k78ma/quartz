---
title: Multi-Scale Vision Transformers
tags:
  - dl
date: 2026-07-03
aliases: multi-scale vision transformers
---
The [[Vision Transformer]] differs from convolutional architectures in that it operates on a single scale and has a receptive field that covers the whole images. Several approaches that process the image at multiple scale have been proposed. Similar to convolutional networks, these generally start with small high-resolution patches and few channels and gradually enlarge the receptive field, decrease the spatial resolution, and increase the number of channels (embedding dimension).

## Swin Transformer
The **Swin Transformer** (shifted-window) is a representative example. This is an encoder transformer that divides the image into patches and groups these patches into a grid of windows within which self-attention is applied independently. These windows are shifted in adjacent transformers, so the effective receptive field at a given patch can expand beyond a window border.

![[Multi-Scale Vision Transformers-1783116143354.webp]]

The scale is reduced periodically by concatenating features from non-overlapping 2x2 patches and applying a linear transformation that maps these concatenated features to twice the number of channels. This architecture does not have `<cls>` token but instead averages the output features at the last layer. These are then mapped via a linear layer to the desired number of classes and passed through a softmax function to output class probabilities.

## DaViT
The **Dual attention vision transformer (DaViT)** integrates information from across the whole image periodically. This is done by alternating two types of transformers. 
1. In the first, image patches attend to one another, and the self-attention computation uses all the channels. 
2. In the second, the channels attend to one another, and the self-attention computation uses all the images patches.