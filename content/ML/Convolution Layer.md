---
title: Convolution Layer
tags:
  - ml
date: 2024-02-03
aliases:
---
Convolution layers perform the operation of a [[Convolution Filter]]. The goal is to have each bank of an [[Image Filter Bank]] to correspond to a single neural network layer. The values in the filters/kernels are the weights in this case (plus an offset bias for each filter); these weights can then be trained with [[Gradient Descent]].

The same weights are used many many times in the computation of each layer. This *weight sharing* means that we can express a transformation on a large image with relatively few parameters; it also means we’ll have to take care in figuring out exactly how to train it.

A convolution layer/filter layer is formally defined with:
- Number of kernels $m^{l}$
- Size of one kernel is $k^{l}\times k^{l}\times m^{l-1}$ (plus 1 bias value for this kernel)
- Stride $s ^{l}$ is the spacing at which we apply the filter to the image
- Input tensor size $n^{l-1} \times n^{l-1} \times m^{l-1}$
- Padding $p^{l}$ is how many extra pixels (usually with value $0$) are added around the edges of the input. For an input of size $n^{l-1} \times n^{l-1} \times m^{l-1}$, our new effective input size with padding becomes $(n^{l-1} + 2\cdot p^{l})\times(n^{l-1}+2\cdot p^{l})\times m^{l-1}$

This layer will produce an output of size $n^{l}\times n^{l} \times m^{l}$, where $n^{l}= \lceil(n^{l-1} + 2\cdot p^{l}-(k^{l}-1)) / s^{l} \rceil$.
Any bias terms are simply applied with element-wise addition.