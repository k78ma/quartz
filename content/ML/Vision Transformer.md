---
title: Vision Transformer
tags:
  - dl
date: 2026-07-03
aliases:
  - vision transformer
  - ViT
---
The Vision Transformer tackled the image resolution problem in [[Transformers for Images|using transformers for images]] by dividing the image into $16\times 16$ patches. Each patch is mapped to an input embedding via a learned linear transformation, and these representations are fed into the transformer network. Like [[ImageGPT]], standard 1D positional encodings are learned.

![[Vision Transformer-1783115146425.webp]]

ViT is an encoder transformer. A learnable `<cls>` token is prepended to the sequence of patch embeddings before they are fed into the transformer. During self-attention, the `<cls>` token attends to all image patches and accumulates information about the entire image. After the final transformer layer, the output embedding corresponding to the `<cls>` token is mapped via a final linear layer to create activations, which are fed into a softmax function to generate class probabilities.

Unlike [[Encoder Model|BERT]], another encoder model, ViT uses *supervised* pre-training on a large database of 303 million labeled images from 18,000 classes. 

After pre-training, the system is applied to the final downstream classification task by replacing this final layer with one that maps to the desired number of classes and is fine-tuned.

For the ImageNet benchmark, the original ViT achieved an 11.45% top-1 error rate. However, it did not outperform the best contemporary convolutional networks without supervised pre-training. The strong inductive bias of convolutional networks can only be superseded by employing extremely large amounts of training data.