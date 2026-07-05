---
title: Transformers for Images
tags:
  - dl
date: 2026-07-03
aliases: transformers for images
---
Transformers were not immediately promising for image-based tasks. First, there are many more pixels in an image than words in a sentence, so the quadratic complexity of [[Dot-Product Self-Attention|self-attention]] poses a practical bottleneck. Second, [[Convolutional Neural Networks|CNNs]] have inductive biases built in because each layer is equivariant to spatial translation, and takes into account the 2D structure of the image. Nonetheless, transformers have eclipsed CNNs for images. This is partly because of the enormous scale at which they can be constructed and the large amounts of data that can be used for pre-training.

- [[ImageGPT]]
- [[Vision Transformer]]
- [[Swin Transformer]]