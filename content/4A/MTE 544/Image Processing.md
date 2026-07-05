---
title: Image Processing
tags:
  - mte544
date: 2025-10-31
aliases: image processing
---
Image processing is the set of operations applied to images (or video frames) to extract useful information or modify the image.

![[Image Processing-20251031202454552.png]]

The key difference between image data and regular time-series is that images have a spatial (2D) distribution. Each pixel has two coordinates $I(x,y)$ or $I_{xy}$. As such, operations that modify images must consider the spatial arrangement of pixels; image filters are 2D filters.

## Spatial Filtering
Spatial filtering (see [[Image Filter]]) is a fundamental operation in image processing, with the other being frequency domain filtering. A filter modifies each pixel based on its neighborhood; typically a small region around the pixel. Spatial filters are also called masks, kernels and windows.

A spatial filter has two main ingredients:
- A neighborhood of the pixel of the pixel under examination
- A predefined operation $T$ that is performed on the neighborhood

A typical spatial filter would look something like
$$
I'(x,y) = \sum_{s=-a}^{a} \sum_{t=-b}^{b}w(s,t) \cdot  I(x+s,y+t)
$$
where $w(s,t)$ is a filter weight, $(s,t)$ are offsets from the pixel location, and $(a,b)$ define the neighborhood size.

![[Image Processing-20251031203030824.png]]

- [[Correlation and Convolution Filters]]
- [[Smoothing Filters]]
- [[Edge Detection Filters]]