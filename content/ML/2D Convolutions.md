---
title: 2D Convolutions
tags:
  - ml
date: 2024-02-02
aliases:
---
2D convolutions are the most common due to their application in images; they are an element-wise multiplication and summation. For example, for the convolution in the diagram below, we have:

![[Convolution Filters.png|368]]
$$
\begin{align}
(0\times 0)  & + (0 \times 1) + (1\times 2)\\
+ (3\times 2)  & + (1\times 2) + (2\times 0)\\
+(2 \times 0) & +(0\times 1)+(0\times 2) = 10
\end{align}
$$

Some terminology:
- *Kernel:* The small matrix sliding over the input data
- *Stride*: Number of pixels by which the kernel moves as it slides over the input data
- *Padding:* Extra pixels around the edges of the input data to allow the kernel to fit properly at the borders of the input.

A $3\times 3$ kernel applied to a $5\times 5$ input with a $1\times 1$ padding using $2 \times 2$ strides.

![[Convolution Filters-1.png|636]]