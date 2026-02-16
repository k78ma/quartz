---
title: Smoothing Filters
tags:
  - mte544
date: 2025-11-01
aliases: smoothing filters
---
Smoothing filters are used to reduce noise, remove small details and texture, and produce a blurred version of the image. They act as low-pass filters because they keep slow/smooth changes.

## Constant Averaging Filter
An average (mean) filter is the simplest smoothing filter:
$$
w = \frac{1}{9}\begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1
\end{bmatrix}
$$
So each new pixel in the filtered image is the average of the 9 pixels in its neighborhood in the original image.

## Gaussian Averaging Filter
Instead of averaging all neighbors equally, we weight neighbors based on distance from the center pixel:
$$
G_\sigma(x, y) = e^{-\frac{x^2 + y^2}{2\sigma^2}}
$$
Pixels closer to the center get more weight.

For example, for a $3\times 3$ filter with $\sigma= 0.85$, we would have
$$
G = \frac{1}{16} \begin{bmatrix} 1 & 2 & 1\\ 2 & 4 & 2\\ 1 & 2 & 1 \end{bmatrix}
$$
where all the coefficients are rescaled to sum to 1, which preserves brightness. Furthermore, all numbers are powers of 2, which makes it very efficient to compute.

![[Smoothing Filters-20251101012054134.png]]

Increasing the $\sigma$ causes a stronger blur.