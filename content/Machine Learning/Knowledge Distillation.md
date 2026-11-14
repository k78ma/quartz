---
title: Knowledge Distillation
tags:
  - dl
date: 2026-09-03
aliases: knowledge distillation
---
The number of parameters of a model can also be reduced by training a smaller networks (the student) to replicate the performance of a larger one (the teacher). This is known as *knowledge distillation*.

Hinton showed that the pattern of information across the output classes is important and trained a smaller network to approximate the pre-softmax logits of the larger one.

Others have further encouraged the spatial maps of the activations of the student network to be similar to the teacher network at various points. They use this *attention transfer* method to approximate the performance of a 34-layer residual network (~63 million parameters) with an 18-layer residual network (~11 million parameters) on the ImageNet classification task. However, this is still much larger than the number of training examples (~1 million).

Modern methods can improve on this result, but distillation has not yet provided convincing evidence that under-parameterized models can perform well.