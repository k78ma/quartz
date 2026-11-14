---
title: 2D Convolution
tags:
  - dl
date: 2026-03-25
aliases:
  - 2D convolution
---
We've seen how [[1D Convolution]] works. A popular use case of convolutions is for 2D image data, such that the kernel becomes a 2D object.

A $3\times 3$ kernel $\Omega \in \mathbb{R}^{3\times 3}$ is applied to a 2D input comprising of elements $x_{ij}$ computes a single layer of hidden units $h_{ij}$ as:
$$
h_{ij} = \text{a}\left[ \beta+\sum_{m=1}^{3} \sum_{n=1}^{3} w_{mn}x_{i+m-2,j+n-2}\right]
$$
where $w_{mn}$ are the entries of the kernel. This is just a weighted sum over a square $3\times 3$ input region. The kernel is slid over the input to create an output at each position.

![[2D Convolution-1774495313825.webp]]

## RGB Images
When our input is an RGB image, we treat it as a 2D signal with 3 channels corresponding to each colour. A $3\times 3$ kernel would have $3\times 3\times 3$ weights and be applied to the 3 input channels at each of the $3\times 3$ position to create a 2D output that is the same size as the input image (assuming zero-padding).

![[2D Convolution-1774495491282.webp]]

To generate multiple output channels, we repeat this process with different kernel weights and append the results to form a 3D [[Tensor|tensor]].
- If the kernel is size $K\times K$ and there are $C_{i}$ input channels, each output channel is a weighted sum of $C_{i} \times K \times K$ quantities plus one bias.
- Thus, to compute $C_{o}$ output channels, we need $C_{i} \times C_{o}\times K\times K$ weights and $C_{o}$ biases.

The resulting output dimension is given by:
$$
N_{\text{out}} = \left\lfloor \frac{N_{\text{in}}+2N_{\text{pad}}-N_{\text{kernel}}}{N_{\text{stride}}} \right \rfloor +1
$$

#cards/dl
How many weights and biases for a 2D convolution?
?
- If the kernel is size $K\times K$ and there are $C_{i}$ input channels, each output channel is a weighted sum of $C_{i} \times K \times K$ quantities plus one bias.
- Thus, to compute $C_{o}$ output channels, we need $C_{i} \times C_{o}\times K\times K$ weights and $C_{o}$ biases.
<!--SR:!fsrs,2026-11-26T03:16:11.674Z,99,98.72394026,1,2,4,0,0,2026-08-19T03:16:11.674Z-->
+++