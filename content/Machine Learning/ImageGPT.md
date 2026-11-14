---
title: ImageGPT
tags:
  - dl
date: 2026-07-03
aliases:
---
ImageGPT is a [[Decoder Model|transformer decoder]]; it builds an autoregressive model of image pixels that ingests a partial image and predicts the subsequent pixel value.

The quadratic complexity of the transformer network means that the largest model, containing 6.8 billion parameters, could still only operate on $64\times 64$ images. Furthermore, to make this tractable, the original 24-bit RGB color space had to be quantized into a 9-bit color space, so the system ingests (and predicts) one of $2^{9}=512$ possible tokens at each position.

Images are naturally 2D objects, but ImageGPT simply learns a different positional encoding at each pixel. Hence, it must learn that each pixel has a close relationship with its preceding neighbors and also with nearby pixels in the row above.

![[ImageGPT-1783114599828.webp|538]]

The internal representation of this decoder was used as a basis for image classification. Each pixel's final embedding is averaged, and a linear layer maps these values to activations which are passed through a softmax layer to predict class probabilities.

ImageGPT was pre-trained on web images and fine-tuned on ImageNet resized to $48\times 48$ pixels using a loss function that contains both a cross-entropy term for image classification and a generative loss term for pixel prediction. Despite using a large amount of external training data, the system achieved only a 27.4% top-1 error rate on ImageNet. This was worse than convolutional architectures but still impressive given the small input size; unsurprisingly, it fails to classify images where the target object is small or thin.